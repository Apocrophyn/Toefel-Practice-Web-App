/**
 * Exam form assembly for the TOEFL iBT 2026 format.
 *
 * The rule that makes a form faithful: ETS counts ITEMS, not stimuli. One
 * Complete-the-Words paragraph is ten items; one academic passage is five items;
 * one conversation is two items. Selecting "10 questions" and accepting whatever
 * item count that flattens into is how a practice test drifts away from the real
 * one, so everything here is expressed in items and every assembled form is
 * asserted against the blueprint before it is handed back.
 *
 * See src/data/toefl-2026-blueprint.ts for the spec this implements.
 */

import {
  LISTENING_TASKS,
  READING_TASKS,
  SECTIONS,
  type ListeningTaskId,
  type ReadingTaskId,
  type SectionId,
} from "@/data/toefl-2026-blueprint";

/* ------------------------------------------------------------------ *
 * Item-count plans
 *
 * ETS publishes per-task item ranges and per-module timing but not the
 * router/module item split. These plans are the split we deliver: every task
 * total lands inside the published range, both routes total exactly the
 * published section item count, and the module carrying more long-form audio is
 * the one ETS gives more time to.
 * ------------------------------------------------------------------ */

export interface ReadingPlan {
  complete_the_words: number;
  read_in_daily_life: number;
  read_an_academic_passage: number;
}

export interface ListeningPlan {
  listen_and_choose_a_response: number;
  listen_to_a_conversation: number;
  listen_to_an_announcement: number;
  listen_to_an_academic_talk: number;
}

/** Reading: 33 router + 17 second-module = 50 items. CW 30 / DL 10 / AP 10. */
export const READING_PLAN: Record<"router" | "lower" | "upper", ReadingPlan> = {
  router: { complete_the_words: 20, read_in_daily_life: 8, read_an_academic_passage: 5 },
  lower: { complete_the_words: 10, read_in_daily_life: 2, read_an_academic_passage: 5 },
  upper: { complete_the_words: 10, read_in_daily_life: 2, read_an_academic_passage: 5 },
};

/**
 * Listening: 29 router + 18 second-module = 47 items on both routes.
 * The lower module is weighted to short items (7 min); the upper module carries
 * two extra academic talks (11 min), which is what the extra four minutes buys.
 */
export const LISTENING_PLAN: Record<"router" | "lower" | "upper", ListeningPlan> = {
  router: {
    listen_and_choose_a_response: 9,
    listen_to_a_conversation: 6,
    listen_to_an_announcement: 6,
    listen_to_an_academic_talk: 8,
  },
  lower: {
    listen_and_choose_a_response: 10,
    listen_to_a_conversation: 4,
    listen_to_an_announcement: 4,
    listen_to_an_academic_talk: 0,
  },
  upper: {
    listen_and_choose_a_response: 6,
    listen_to_a_conversation: 4,
    listen_to_an_announcement: 0,
    listen_to_an_academic_talk: 8,
  },
};

/** Writing is linear. Three independent timers inside a ~23-minute section. */
export const WRITING_PLAN = {
  build_a_sentence: { items: 10, seconds: 6 * 60 + 50 },
  write_an_email: { items: 1, seconds: 7 * 60 },
  write_for_an_academic_discussion: { items: 1, seconds: 10 * 60 },
} as const;

/** Speaking is linear: one 7-sentence repeat set plus one 4-question interview. */
export const SPEAKING_PLAN = {
  listen_and_repeat: { items: 7, sets: 1 },
  take_an_interview: { items: 4, themes: 1 },
} as const;

/* ------------------------------------------------------------------ *
 * Deterministic selection
 * ------------------------------------------------------------------ */

/** Mulberry32 — small, fast, seedable. A seed makes a form reproducible. */
export function createRng(seed: number): () => number {
  let a = seed >>> 0;
  return function rng() {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function shuffle<T>(items: readonly T[], rng: () => number): T[] {
  const out = items.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Draw stimuli until the requested number of ITEMS is reached, never reusing a
 * stimulus within a form and never overshooting the item target.
 *
 * Returns fewer items than requested only when the bank genuinely cannot cover
 * the target; callers surface that as a form-integrity warning rather than
 * silently shipping a short section.
 */
export function drawByItemCount<T>(
  pool: readonly T[],
  targetItems: number,
  itemsIn: (stimulus: T) => number,
  idOf: (stimulus: T) => string,
  used: Set<string>,
  rng: () => number
): { picked: T[]; items: number } {
  if (targetItems <= 0) return { picked: [], items: 0 };
  const picked: T[] = [];
  let items = 0;

  for (const stimulus of shuffle(pool, rng)) {
    if (items >= targetItems) break;
    const id = idOf(stimulus);
    if (used.has(id)) continue;
    const n = itemsIn(stimulus);
    if (n <= 0 || items + n > targetItems) continue;
    picked.push(stimulus);
    used.add(id);
    items += n;
  }

  // Second pass: an exact-fit stimulus may have been skipped because a larger
  // one was drawn first (e.g. only a 2-item daily-life set can close a gap of 2).
  if (items < targetItems) {
    for (const stimulus of shuffle(pool, rng)) {
      if (items >= targetItems) break;
      const id = idOf(stimulus);
      if (used.has(id)) continue;
      if (itemsIn(stimulus) === targetItems - items) {
        picked.push(stimulus);
        used.add(id);
        items = targetItems;
      }
    }
  }

  return { picked, items };
}

/* ------------------------------------------------------------------ *
 * Form integrity
 * ------------------------------------------------------------------ */

export interface FormIssue {
  section: SectionId;
  severity: "error" | "warning";
  message: string;
}

export function validateReadingForm(counts: { router: ReadingPlan; second: ReadingPlan }): FormIssue[] {
  const issues: FormIssue[] = [];
  const totals: Record<ReadingTaskId, number> = {
    complete_the_words: counts.router.complete_the_words + counts.second.complete_the_words,
    read_in_daily_life: counts.router.read_in_daily_life + counts.second.read_in_daily_life,
    read_an_academic_passage:
      counts.router.read_an_academic_passage + counts.second.read_an_academic_passage,
  };

  (Object.keys(totals) as ReadingTaskId[]).forEach((task) => {
    const spec = READING_TASKS[task];
    const n = totals[task];
    if (n < spec.items.min || n > spec.items.max) {
      issues.push({
        section: "reading",
        severity: "error",
        message: `${spec.name}: form has ${n} items, blueprint allows ${spec.items.min}–${spec.items.max}`,
      });
    }
  });

  const total = Object.values(totals).reduce((a, b) => a + b, 0);
  if (total !== SECTIONS.reading.totalItems) {
    issues.push({
      section: "reading",
      severity: "error",
      message: `Reading form has ${total} items, blueprint requires ${SECTIONS.reading.totalItems}`,
    });
  }
  return issues;
}

export function validateListeningForm(counts: {
  router: ListeningPlan;
  second: ListeningPlan;
}): FormIssue[] {
  const issues: FormIssue[] = [];
  const totals: Record<ListeningTaskId, number> = {
    listen_and_choose_a_response:
      counts.router.listen_and_choose_a_response + counts.second.listen_and_choose_a_response,
    listen_to_a_conversation:
      counts.router.listen_to_a_conversation + counts.second.listen_to_a_conversation,
    listen_to_an_announcement:
      counts.router.listen_to_an_announcement + counts.second.listen_to_an_announcement,
    listen_to_an_academic_talk:
      counts.router.listen_to_an_academic_talk + counts.second.listen_to_an_academic_talk,
  };

  (Object.keys(totals) as ListeningTaskId[]).forEach((task) => {
    const spec = LISTENING_TASKS[task];
    const n = totals[task];
    if (n < spec.items.min || n > spec.items.max) {
      issues.push({
        section: "listening",
        severity: "error",
        message: `${spec.name}: form has ${n} items, blueprint allows ${spec.items.min}–${spec.items.max}`,
      });
    }
  });

  const total = Object.values(totals).reduce((a, b) => a + b, 0);
  if (total !== SECTIONS.listening.totalItems) {
    issues.push({
      section: "listening",
      severity: "error",
      message: `Listening form has ${total} items, blueprint requires ${SECTIONS.listening.totalItems}`,
    });
  }
  return issues;
}
