/**
 * TOEFL iBT 2026 — canonical test blueprint.
 *
 * SINGLE SOURCE OF TRUTH for how a form is assembled, timed and scored.
 * Every number here is traceable to the official ETS specification; do not
 * change a value without updating the citation next to it.
 *
 * Primary source:
 *   "TOEFL iBT Test: 2026 Update — Test Blueprint and Specifications Document" (ETS)
 *   https://www.ets.org/content/dam/ets-india/pdfs/toefl/toefl-ibt-test-specifications-2026.pdf
 *   Extracted summary: docs/toefl-2026/ets-official-blueprint.md
 * Cross-check:
 *   https://www.ets.org/toefl/test-takers/ibt/about/content.html
 *
 * Launch date of this format: January 21, 2026.
 */

export const BLUEPRINT_SOURCE = {
  document: "TOEFL iBT Test: 2026 Update — Test Blueprint and Specifications Document",
  publisher: "ETS",
  url: "https://www.ets.org/content/dam/ets-india/pdfs/toefl/toefl-ibt-test-specifications-2026.pdf",
  formatLaunched: "2026-01-21",
} as const;

export type SectionId = "reading" | "listening" | "speaking" | "writing";

export type ReadingTaskId = "complete_the_words" | "read_in_daily_life" | "read_an_academic_passage";
export type ListeningTaskId =
  | "listen_and_choose_a_response"
  | "listen_to_a_conversation"
  | "listen_to_an_announcement"
  | "listen_to_an_academic_talk";
export type SpeakingTaskId = "listen_and_repeat" | "take_an_interview";
export type WritingTaskId = "build_a_sentence" | "write_an_email" | "write_for_an_academic_discussion";

export type TaskId = ReadingTaskId | ListeningTaskId | SpeakingTaskId | WritingTaskId;

/** CEFR levels the task is written to target. */
export type CefrLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C1+" | "C2";

export interface TaskSpec {
  id: TaskId;
  /** Exact ETS-facing name. Used verbatim in the UI. */
  name: string;
  section: SectionId;
  /** Items contributed to the form. Fixed count, or an inclusive range. */
  items: { min: number; max: number };
  /** Maximum raw points a single item of this task can earn. */
  maxPointsPerItem: number;
  cefrTarget: { from: CefrLevel; to: CefrLevel };
  /** ETS "Language Use Context" column. */
  languageUseContext: string;
  scoring: "machine" | "ai";
}

/* ------------------------------------------------------------------ *
 * Task specifications (ETS blueprint tables, pp. 3–7)
 * ------------------------------------------------------------------ */

export const READING_TASKS: Record<ReadingTaskId, TaskSpec> = {
  complete_the_words: {
    id: "complete_the_words",
    name: "Complete the Words",
    section: "reading",
    items: { min: 30, max: 30 },
    maxPointsPerItem: 1,
    cefrTarget: { from: "B1", to: "C1+" },
    languageUseContext: "Academic language use",
    scoring: "machine",
  },
  read_in_daily_life: {
    id: "read_in_daily_life",
    name: "Read in Daily Life",
    section: "reading",
    items: { min: 5, max: 15 },
    maxPointsPerItem: 1,
    cefrTarget: { from: "A1", to: "C1" },
    languageUseContext: "Social Interpersonal language use",
    scoring: "machine",
  },
  read_an_academic_passage: {
    id: "read_an_academic_passage",
    name: "Read an Academic Passage",
    section: "reading",
    items: { min: 5, max: 15 },
    maxPointsPerItem: 1,
    cefrTarget: { from: "B1", to: "C2" },
    languageUseContext: "Academic language use",
    scoring: "machine",
  },
};

export const LISTENING_TASKS: Record<ListeningTaskId, TaskSpec> = {
  listen_and_choose_a_response: {
    id: "listen_and_choose_a_response",
    name: "Listen and Choose a Response",
    section: "listening",
    items: { min: 15, max: 19 },
    maxPointsPerItem: 1,
    cefrTarget: { from: "A1", to: "B2" },
    languageUseContext: "Social Interpersonal language use",
    scoring: "machine",
  },
  listen_to_a_conversation: {
    id: "listen_to_a_conversation",
    name: "Listen to a Conversation",
    section: "listening",
    items: { min: 10, max: 10 },
    maxPointsPerItem: 1,
    cefrTarget: { from: "A2", to: "C1" },
    languageUseContext: "Social Interpersonal language use",
    scoring: "machine",
  },
  listen_to_an_announcement: {
    id: "listen_to_an_announcement",
    name: "Listen to an Announcement",
    section: "listening",
    items: { min: 6, max: 10 },
    maxPointsPerItem: 1,
    cefrTarget: { from: "A2", to: "C1" },
    languageUseContext: "Academic Navigational language use",
    scoring: "machine",
  },
  listen_to_an_academic_talk: {
    id: "listen_to_an_academic_talk",
    name: "Listen to an Academic Talk",
    section: "listening",
    items: { min: 8, max: 16 },
    maxPointsPerItem: 1,
    cefrTarget: { from: "A2", to: "C2" },
    languageUseContext: "Academic language use",
    scoring: "machine",
  },
};

export const SPEAKING_TASKS: Record<SpeakingTaskId, TaskSpec> = {
  listen_and_repeat: {
    id: "listen_and_repeat",
    name: "Listen and Repeat",
    section: "speaking",
    items: { min: 7, max: 7 },
    maxPointsPerItem: 5,
    cefrTarget: { from: "A1", to: "C2" },
    languageUseContext: "Academic Navigational language use",
    scoring: "ai",
  },
  take_an_interview: {
    id: "take_an_interview",
    name: "Take an Interview",
    section: "speaking",
    items: { min: 4, max: 4 },
    maxPointsPerItem: 5,
    cefrTarget: { from: "A1", to: "C2" },
    languageUseContext: "Academic Navigational language use",
    scoring: "ai",
  },
};

export const WRITING_TASKS: Record<WritingTaskId, TaskSpec> = {
  build_a_sentence: {
    id: "build_a_sentence",
    name: "Build a Sentence",
    section: "writing",
    items: { min: 10, max: 10 },
    maxPointsPerItem: 1,
    cefrTarget: { from: "A1", to: "C2" },
    languageUseContext: "Social Interpersonal language use",
    scoring: "machine",
  },
  write_an_email: {
    id: "write_an_email",
    name: "Write an Email",
    section: "writing",
    items: { min: 1, max: 1 },
    maxPointsPerItem: 5,
    cefrTarget: { from: "B1", to: "C2" },
    languageUseContext: "Academic Navigational language use",
    scoring: "ai",
  },
  write_for_an_academic_discussion: {
    id: "write_for_an_academic_discussion",
    name: "Write for an Academic Discussion",
    section: "writing",
    items: { min: 1, max: 1 },
    maxPointsPerItem: 5,
    cefrTarget: { from: "B1", to: "C2" },
    languageUseContext: "Academic language use",
    scoring: "ai",
  },
};

export const ALL_TASKS: Record<TaskId, TaskSpec> = {
  ...READING_TASKS,
  ...LISTENING_TASKS,
  ...SPEAKING_TASKS,
  ...WRITING_TASKS,
};

/* ------------------------------------------------------------------ *
 * Section-level structure
 * ------------------------------------------------------------------ */

export interface SectionSpec {
  id: SectionId;
  name: string;
  /** Items delivered, INCLUDING unscored pilot items (Reading/Listening only). */
  totalItems: number;
  /** Raw points available from scored items. */
  rawPoints: number;
  /** Reading and Listening are two-stage adaptive; Speaking and Writing are linear. */
  delivery: "two_stage_adaptive" | "linear";
  /** Base time in seconds. For adaptive sections this is router + module. */
  timing: {
    routerSeconds?: number;
    lowerModuleSeconds?: number;
    upperModuleSeconds?: number;
    /** Linear sections only. */
    totalSeconds?: number;
  };
  taskOrder: TaskId[];
}

export const SECTIONS: Record<SectionId, SectionSpec> = {
  reading: {
    id: "reading",
    name: "Reading",
    totalItems: 50,
    rawPoints: 35,
    delivery: "two_stage_adaptive",
    // ETS: router 18–21 min, second module 9 min. We use the midpoint of the
    // published router range (19.5 min) so a practice form lands inside spec.
    timing: { routerSeconds: 19 * 60 + 30, lowerModuleSeconds: 9 * 60, upperModuleSeconds: 9 * 60 },
    taskOrder: ["complete_the_words", "read_in_daily_life", "read_an_academic_passage"],
  },
  listening: {
    id: "listening",
    name: "Listening",
    totalItems: 47,
    rawPoints: 35,
    delivery: "two_stage_adaptive",
    // ETS: router 18 min; lower module 7 min, upper module 11 min.
    timing: { routerSeconds: 18 * 60, lowerModuleSeconds: 7 * 60, upperModuleSeconds: 11 * 60 },
    taskOrder: [
      "listen_and_choose_a_response",
      "listen_to_a_conversation",
      "listen_to_an_announcement",
      "listen_to_an_academic_talk",
    ],
  },
  speaking: {
    id: "speaking",
    name: "Speaking",
    totalItems: 11,
    rawPoints: 55,
    delivery: "linear",
    timing: { totalSeconds: 8 * 60 },
    taskOrder: ["listen_and_repeat", "take_an_interview"],
  },
  writing: {
    id: "writing",
    name: "Writing",
    totalItems: 12,
    rawPoints: 20,
    delivery: "linear",
    timing: { totalSeconds: 23 * 60 },
    taskOrder: ["build_a_sentence", "write_an_email", "write_for_an_academic_discussion"],
  },
};

/**
 * Order the four sections are delivered in on the real test.
 *
 * Writing is THIRD and Speaking is LAST. This is the order ETS lists on the
 * test-content page and is confirmed independently by prep publishers. The
 * pre-2026 test ran Speaking before Writing; getting this backwards changes how
 * fatigued a test taker is when they reach the section they find hardest, so it
 * is a real fidelity issue rather than a cosmetic one.
 */
export const SECTION_ORDER: SectionId[] = ["reading", "listening", "writing", "speaking"];

/**
 * There are no scheduled breaks. The 10-minute break the pre-2026 test placed
 * between Listening and Speaking was removed in the 2026 update; an unscheduled
 * break does not stop the clock.
 */
export const HAS_SCHEDULED_BREAK = false;

export const TEST_TOTALS = {
  items: 120,
  machineScoredItems: 108,
  aiScoredItems: 12,
  rawPoints: 145,
  minTestSeconds: 83 * 60, // ETS: min test time 1 hr 23 min
  maxTestSeconds: 89 * 60, // ETS: max test time 1 hr 29 min
} as const;

/* ------------------------------------------------------------------ *
 * Stimulus constraints (ETS "Text Difficulty" / "Audio Difficulty" / "Stimulus")
 * Used by the content validator to keep the item bank exam-shaped.
 * ------------------------------------------------------------------ */

export const STIMULUS_LIMITS = {
  reading: {
    /** "Easier texts typically contain 15–50 words" */
    shortTextWords: { min: 15, max: 50 },
    /** "more complex texts may extend to 200 words" — hard ceiling. */
    maxPassageWords: 200,
    /** ETS: Read in Daily Life appears as 2-item and 3-item sets. */
    dailyLifeItemsPerSet: [2, 3] as const,
    /** Flesch–Kincaid grade bands used by ETS for calibration. */
    fleschKincaid: { medium: [7.4, 10.5], high: [10.5, 20.0] },
    /** All texts stay visible while the test taker answers. */
    passageRemainsVisible: true,
  },
  listening: {
    /** "brief utterances — no longer than six stressed syllables" */
    shortUtteranceMaxStressedSyllables: 6,
    /** "Intermediate-length audio input typically falls between 35 and 100 words" */
    intermediateWords: { min: 35, max: 100 },
    /** "extended monologic speech of up to 250 words" — hard ceiling. */
    maxAudioWords: 250,
    /** "Recordings are played once." */
    playsOnce: true,
    /** "Each spoken input is accompanied by a visual representation of the speaker(s)." */
    showsSpeakerVisual: true,
  },
  speaking: {
    /** Every task opens with a scenario introduction delivered aurally AND in print. */
    scenarioIntroAuralAndPrint: true,
    /** Repetition items grow in length and syntactic complexity across the 7 items. */
    listenAndRepeatDifficultyRamps: true,
  },
} as const;

/* ------------------------------------------------------------------ *
 * Scoring
 * ------------------------------------------------------------------ */

/** Reported band scale: 1.0–6.0 in half-point steps. */
export const BAND_SCALE = [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0] as const;
export type Band = (typeof BAND_SCALE)[number];

/**
 * Proportion-of-raw-points thresholds for each band.
 *
 * ETS has published the 1–6 scale and the raw-point totals but has NOT published a
 * raw-to-band conversion table; the operational conversion is IRT-based and form-specific.
 * These cuts are a documented approximation anchored to the CEFR alignment of the scale
 * (band 4.0 ~ B2, band 5.0 ~ C1, band 6.0 ~ C2) and are applied identically to every
 * section so that reported bands are internally consistent and comparable across attempts.
 *
 * Treat these as calibration, not as an official table, and surface that to the user.
 */
export const BAND_CUTS: { band: Band; minProportion: number }[] = [
  { band: 6.0, minProportion: 0.97 },
  { band: 5.5, minProportion: 0.91 },
  { band: 5.0, minProportion: 0.83 },
  { band: 4.5, minProportion: 0.74 },
  { band: 4.0, minProportion: 0.64 },
  { band: 3.5, minProportion: 0.54 },
  { band: 3.0, minProportion: 0.43 },
  { band: 2.5, minProportion: 0.32 },
  { band: 2.0, minProportion: 0.21 },
  { band: 1.5, minProportion: 0.1 },
  { band: 1.0, minProportion: 0.0 },
];

export const BAND_IS_ESTIMATED = true;
export const BAND_ESTIMATE_DISCLAIMER =
  "Band scores are estimated. ETS publishes the 1–6 scale and the raw-point totals but not " +
  "the operational raw-to-band conversion, which is IRT-based and form-specific.";

/**
 * Convert a raw score to a reported band.
 *
 * @param rawPoints points earned
 * @param maxRawPoints points available (use SECTIONS[id].rawPoints)
 */
export function rawToBand(rawPoints: number, maxRawPoints: number): Band {
  if (maxRawPoints <= 0) return 1.0;
  const proportion = Math.max(0, Math.min(1, rawPoints / maxRawPoints));
  for (const cut of BAND_CUTS) {
    if (proportion >= cut.minProportion) return cut.band;
  }
  return 1.0;
}

/** Round any number onto the reported half-point band scale, clamped to 1.0–6.0. */
export function toBandScale(value: number): Band {
  const clamped = Math.max(1, Math.min(6, value));
  return (Math.round(clamped * 2) / 2) as Band;
}

/**
 * Overall score = average of the four section bands, reported on the same
 * half-point scale. Sections that were not attempted are excluded.
 */
export function overallBand(sectionBands: Partial<Record<SectionId, number>>): Band | null {
  const values = SECTION_ORDER.map((s) => sectionBands[s]).filter(
    (v): v is number => typeof v === "number" && !Number.isNaN(v)
  );
  if (values.length === 0) return null;
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  return toBandScale(mean);
}

/** CEFR level each band corresponds to. */
export const BAND_TO_CEFR: Record<string, { level: string; label: string }> = {
  "6.0": { level: "C2", label: "Highly proficient" },
  "5.5": { level: "C1+", label: "Very proficient" },
  "5.0": { level: "C1", label: "Proficient" },
  "4.5": { level: "B2+", label: "Upper intermediate plus" },
  "4.0": { level: "B2", label: "Upper intermediate" },
  "3.5": { level: "B1+", label: "Intermediate plus" },
  "3.0": { level: "B1", label: "Intermediate" },
  "2.5": { level: "A2+", label: "Elementary plus" },
  "2.0": { level: "A2", label: "Elementary" },
  "1.5": { level: "A1+", label: "Beginner plus" },
  "1.0": { level: "A1", label: "Beginner" },
};

export function bandToCefr(band: number): { level: string; label: string } {
  return BAND_TO_CEFR[toBandScale(band).toFixed(1)] ?? { level: "—", label: "Not available" };
}

/**
 * Approximate legacy 0–120 equivalent, shown only during the 2026–2028 transition
 * period when institutions may still be working in the old scale.
 * Approximate by construction — flag it as such wherever it is displayed.
 */
export function bandToLegacySection(band: number): { min: number; max: number } {
  const b = toBandScale(band);
  const min = Math.round(((b - 1) / 5) * 30);
  const max = Math.min(30, Math.round(((b - 1 + 0.5) / 5) * 30) - 1);
  return { min, max: Math.max(min, max) };
}

export function bandToLegacyTotal(band: number): { min: number; max: number } {
  const s = bandToLegacySection(band);
  return { min: s.min * 4, max: Math.min(120, s.max * 4) };
}

/* ------------------------------------------------------------------ *
 * Adaptive routing
 * ------------------------------------------------------------------ */

/**
 * Two-stage adaptive routing. ETS does not publish the routing threshold; a
 * proportion-correct cut on the router module is the standard multistage design and is
 * what we use. The module a test taker is routed to changes the difficulty of the items
 * they see, not the maximum band they can earn — scoring is on the raw points of the
 * whole section.
 */
export const ROUTING = {
  /** Router proportion-correct at or above which the upper module is delivered. */
  upperModuleThreshold: 0.65,
  isEstimated: true,
} as const;

export type ModuleTrack = "router" | "lower" | "upper";

export function routeToModule(routerCorrect: number, routerTotal: number): "lower" | "upper" {
  if (routerTotal <= 0) return "lower";
  return routerCorrect / routerTotal >= ROUTING.upperModuleThreshold ? "upper" : "lower";
}

/** Seconds allowed for the second module of an adaptive section. */
export function moduleSeconds(section: SectionId, track: "lower" | "upper"): number {
  const t = SECTIONS[section].timing;
  return (track === "upper" ? t.upperModuleSeconds : t.lowerModuleSeconds) ?? 0;
}

/* ------------------------------------------------------------------ *
 * Item-level mechanics
 *
 * ETS does not publish an interaction spec, so everything below is sourced from
 * prep publishers who have worked the live 2026 test (Magoosh, TestGlider,
 * LingoLeap, My Speaking Score, testsucceed, study.com) and cross-checked.
 * Full sourcing and confidence levels: docs/toefl-2026/item-mechanics.md
 *
 * Where sources conflicted, the value chosen is the one that does NOT make our
 * practice test easier than the real one.
 * ------------------------------------------------------------------ */

/**
 * Complete the Words is a C-test, not a hand-authored cloze.
 *
 * Generation rule: the first sentence is left intact; from the second sentence
 * onward the second half of every second word is deleted, yielding exactly ten
 * gaps in a 70–100 word academic paragraph.
 */
export const COMPLETE_THE_WORDS = {
  paragraphWords: { min: 70, max: 100 },
  blanksPerParagraph: 10,
  /** The opening sentence is never gapped — it establishes the topic. */
  firstSentenceIntact: true,
  /** Delete the back half of every Nth word once gapping starts. */
  gapEveryNthWord: 2,
  /** A word must be at least this long to be worth gapping. */
  minWordLengthToGap: 4,
  /**
   * Whether the number of blank positions reveals the number of missing letters
   * is genuinely disputed between sources. We render a fixed-width blank and do
   * NOT signal letter count: assuming the exam signals it, and being wrong,
   * would make this task materially easier here than on test day.
   */
  signalsMissingLetterCount: false,
  /** A free-text field, not per-character boxes (boxes would leak answer length). */
  inputMode: "free_text" as const,
  /** Scored 1/0 per blank. No partial credit, no penalty for guessing. */
  partialCredit: false,
  directions:
    "You will read a short passage in which some words are missing letters. " +
    "Use the context of the passage to complete each word by typing the missing letters.",
} as const;

export const READ_IN_DAILY_LIFE = {
  stimulusWords: { min: 15, max: 150 },
  itemsPerSet: [2, 3] as const,
  optionsPerItem: 4,
  /**
   * The artefact's visual formatting is part of the construct — a schedule must
   * look like a schedule and a text thread like a text thread, so the renderer
   * is per-genre rather than a single prose block.
   */
  layouts: ["prose", "lines", "thread", "table", "card"] as const,
  directions: "Read the text and answer the questions.",
} as const;

export const READ_AN_ACADEMIC_PASSAGE = {
  /** The pre-2026 700-word passage is gone. */
  passageWords: { min: 160, max: 280 },
  itemsPerPassage: { min: 3, max: 5, typical: 5 },
  optionsPerItem: 4,
  /** Every 2026 reading item is single-select 4-option multiple choice. */
  removedFormats: ["insert_a_sentence", "prose_summary", "multi_select", "reference"] as const,
  directions: "Read the passage and answer the questions.",
} as const;

export const LISTENING_MECHANICS = {
  /** Audio plays exactly once. No replay, no pause, no scrub bar. */
  playsOnce: true,
  /** Questions render only after playback completes — never during. */
  questionsAfterAudio: true,
  /** No back-navigation to an item whose audio has already played. */
  allowsBackNavigation: false,
  optionsPerItem: 4,
  /** Options are always printed text, including for Listen and Choose a Response. */
  optionsArePrinted: true,
  listen_and_choose_a_response: {
    /** One short utterance from one speaker; never shown in print. */
    audioSeconds: { min: 3, max: 6 },
    itemsPerStimulus: 1,
    secondsPerItem: 30,
  },
  listen_to_a_conversation: {
    audioSeconds: { min: 20, max: 30 },
    audioWords: { min: 50, max: 85 },
    speakers: 2,
    itemsPerStimulus: 2,
  },
  listen_to_an_announcement: {
    audioSeconds: { min: 20, max: 30 },
    audioWords: { min: 40, max: 85 },
    speakers: 1,
    itemsPerStimulus: 2,
  },
  listen_to_an_academic_talk: {
    audioSeconds: { min: 60, max: 90 },
    audioWords: { min: 100, max: 250 },
    speakers: 1,
    itemsPerStimulus: 4,
  },
  directions: "Listen carefully and answer the questions that follow. You will hear it only once.",
} as const;

export const BUILD_A_SENTENCE = {
  items: 10,
  /** One pooled timer across all ten items, not a per-item clock. */
  pooledSeconds: 6 * 60 + 50,
  /** Tiles are words AND multi-word chunks — never assume a word tokenizer. */
  tilesPerItem: { min: 5, max: 7 },
  /** Some items ship more tiles than slots, so not every tile is used. */
  allowsDistractorTiles: true,
  /** Some items have words already locked into the sentence. */
  allowsPrefilledSlots: true,
  /** Click-to-place is primary; drag is an affordance on top of it. */
  interactions: ["click_to_place", "drag"] as const,
  /** Every tile must land in the right slot. Scored 1 or 0. */
  allOrNothing: true,
  /** Each item is a response to a context line, not a bare scramble. */
  hasContextPrompt: true,
  directions:
    "Arrange the words to create a grammatically correct and meaningful sentence that responds to the question.",
} as const;

export const WRITE_AN_EMAIL = {
  seconds: 7 * 60,
  scenarioWords: { min: 70, max: 110 },
  /** Exactly three bullets, and all three must be addressed to score well. */
  requiredBullets: 3,
  maxPoints: 5,
  /**
   * ETS publishes no word count for this task. Show a soft target, never a hard gate.
   */
  hasOfficialWordCount: false,
  softTargetWords: { min: 80, max: 120 },
  directions:
    "Read the situation below and write an email in response. Be sure to address all of the points listed.",
} as const;

export const WRITE_FOR_AN_ACADEMIC_DISCUSSION = {
  seconds: 10 * 60,
  professorPostWords: { min: 60, max: 85 },
  /** Exactly two classmates, presenting two different viewpoints. */
  studentPosts: 2,
  studentPostWords: { min: 40, max: 60 },
  minimumResponseWords: 100,
  maxPoints: 5,
  directions:
    "Express and support your opinion. Make a contribution to the discussion in your own words. " +
    "An effective response will contain at least 100 words.",
} as const;

export const LISTEN_AND_REPEAT = {
  items: 7,
  /** Heard once. Never shown in print. */
  playsOnce: true,
  showsSentenceText: false,
  /** A static contextual image of the location, not video. */
  showsContextImage: true,
  /** No prep time; a beep starts the recording the instant the audio ends. */
  prepSeconds: 0,
  autoStartOnBeep: true,
  autoStopAndAdvance: true,
  maxPointsPerItem: 5,
  /** Response window is tiered by item index — this is the reliable signal. */
  responseWindowSeconds: [8, 8, 10, 10, 10, 12, 12] as const,
  /** Sentence length ramps across the set, but noisily; do not enforce strictly. */
  sentenceWordTargets: [
    { items: [1, 2], words: { min: 5, max: 7 } },
    { items: [3, 4, 5], words: { min: 8, max: 10 } },
    { items: [6, 7], words: { min: 11, max: 14 } },
  ],
  directions: "Listen to your supervisor and repeat what she says. Repeat only once.",
} as const;

export const TAKE_AN_INTERVIEW = {
  items: 4,
  /** No preparation time. Recording starts when the question audio ends. */
  prepSeconds: 0,
  responseSeconds: 45,
  /** Speak for at least this long to give the scorer enough to work with. */
  recommendedMinimumSpeechSeconds: 20,
  maxPointsPerItem: 5,
  /** All four questions belong to ONE theme — author them as themed sets of four. */
  questionsSharethemeoOneTheme: true,
  /** Question audio plus on-screen text of the question. */
  showsQuestionText: true,
  /** Cognitive demand escalates across the four questions. */
  escalation: [
    "personal_recall",
    "preference_with_reason",
    "opinion_with_support",
    "prediction_or_analysis",
  ] as const,
  scoringCriteria: ["fluency", "intelligibility", "language_use", "organization"] as const,
  directions:
    "You will have a short online interview with a researcher. The researcher will ask you some questions.",
} as const;
