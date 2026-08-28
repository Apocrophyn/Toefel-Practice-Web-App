/**
 * Scoring for the TOEFL iBT 2026 format.
 *
 * The exam awards raw points, then reports a 1.0–6.0 band per section and an
 * overall band. Raw point ceilings are fixed by the ETS blueprint:
 *
 *   Reading   35   (1 point per scored item)
 *   Listening 35   (1 point per scored item)
 *   Writing   20   (10 x 1 for Build a Sentence, 5 for the email, 5 for the discussion)
 *   Speaking  55   (7 x 5 for Listen and Repeat, 4 x 5 for the interview)
 *
 * Note the asymmetry that ad-hoc scoring always gets wrong: a Speaking item is
 * worth five points and a Reading item one, so Speaking's 11 items carry more
 * raw weight than Reading's 50. Everything below works in raw points and
 * converts once, at the end.
 */

import {
  BAND_ESTIMATE_DISCLAIMER,
  SECTIONS,
  SECTION_ORDER,
  bandToCefr,
  bandToLegacySection,
  bandToLegacyTotal,
  overallBand,
  rawToBand,
  type Band,
  type SectionId,
} from "@/data/toefl-2026-blueprint";

export interface SectionRaw {
  section: SectionId;
  /** Raw points earned. */
  points: number;
  /** Raw points available. Defaults to the blueprint ceiling. */
  maxPoints?: number;
  /** Items actually delivered, for the report. */
  itemsDelivered?: number;
  /** Items answered correctly, for machine-scored sections. */
  itemsCorrect?: number;
  /** Which adaptive module the test taker was routed to. */
  track?: "lower" | "upper";
}

export interface SectionScore {
  section: SectionId;
  name: string;
  band: Band;
  rawPoints: number;
  maxRawPoints: number;
  cefr: { level: string; label: string };
  legacyRange: { min: number; max: number };
  itemsDelivered?: number;
  itemsCorrect?: number;
  track?: "lower" | "upper";
}

export interface ScoreReport {
  sections: SectionScore[];
  overall: Band | null;
  overallCefr: { level: string; label: string } | null;
  legacyTotalRange: { min: number; max: number } | null;
  /** Bands are calibrated, not an official ETS conversion. Always show this. */
  disclaimer: string;
}

/**
 * Convert an AI rubric score onto the item's raw-point scale.
 *
 * Speaking and Writing constructed responses are worth 5 raw points each. The
 * evaluators in this codebase have historically returned scores on several
 * different scales, so the source scale is explicit rather than guessed.
 */
export function rubricToRawPoints(score: number, scale: "0-5" | "0-100" | "1-6"): number {
  if (!Number.isFinite(score)) return 0;
  switch (scale) {
    case "0-5":
      return clamp(score, 0, 5);
    case "0-100":
      return clamp((score / 100) * 5, 0, 5);
    case "1-6":
      // A 1–6 band has no zero point; band 1 is the floor, so map 1->0 and 6->5.
      return clamp(((score - 1) / 5) * 5, 0, 5);
  }
}

function clamp(v: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, v));
}

/** Raw points for the Reading section: one point per correct item. */
export function readingRawPoints(itemsCorrect: number): number {
  return clamp(itemsCorrect, 0, SECTIONS.reading.rawPoints);
}

/** Raw points for the Listening section: one point per correct item. */
export function listeningRawPoints(itemsCorrect: number): number {
  return clamp(itemsCorrect, 0, SECTIONS.listening.rawPoints);
}

/**
 * Raw points for Writing.
 * @param buildASentenceCorrect how many of the 10 items were assembled exactly right
 * @param emailPoints 0–5
 * @param discussionPoints 0–5
 */
export function writingRawPoints(
  buildASentenceCorrect: number,
  emailPoints: number,
  discussionPoints: number
): number {
  return clamp(
    clamp(buildASentenceCorrect, 0, 10) + clamp(emailPoints, 0, 5) + clamp(discussionPoints, 0, 5),
    0,
    SECTIONS.writing.rawPoints
  );
}

/**
 * Raw points for Speaking.
 * @param repeatPoints per-item 0–5 for the 7 Listen and Repeat items
 * @param interviewPoints per-item 0–5 for the 4 interview items
 */
export function speakingRawPoints(repeatPoints: number[], interviewPoints: number[]): number {
  const sum = (xs: number[]) => xs.reduce((a, b) => a + clamp(b, 0, 5), 0);
  return clamp(sum(repeatPoints) + sum(interviewPoints), 0, SECTIONS.speaking.rawPoints);
}

/** Score one section. */
export function scoreSection(raw: SectionRaw): SectionScore {
  const spec = SECTIONS[raw.section];
  const maxRawPoints = raw.maxPoints ?? spec.rawPoints;
  const band = rawToBand(raw.points, maxRawPoints);
  return {
    section: raw.section,
    name: spec.name,
    band,
    rawPoints: Math.round(raw.points * 10) / 10,
    maxRawPoints,
    cefr: bandToCefr(band),
    legacyRange: bandToLegacySection(band),
    itemsDelivered: raw.itemsDelivered,
    itemsCorrect: raw.itemsCorrect,
    track: raw.track,
  };
}

/**
 * Build the full score report. Sections that were not attempted are omitted and
 * excluded from the overall average rather than counted as zero.
 */
export function buildScoreReport(raws: SectionRaw[]): ScoreReport {
  const byId = new Map(raws.map((r) => [r.section, r]));
  const sections = SECTION_ORDER.flatMap((id) => {
    const raw = byId.get(id);
    return raw ? [scoreSection(raw)] : [];
  });

  const bands: Partial<Record<SectionId, number>> = {};
  sections.forEach((s) => {
    bands[s.section] = s.band;
  });

  const overall = overallBand(bands);
  return {
    sections,
    overall,
    overallCefr: overall === null ? null : bandToCefr(overall),
    legacyTotalRange: overall === null ? null : bandToLegacyTotal(overall),
    disclaimer: BAND_ESTIMATE_DISCLAIMER,
  };
}
