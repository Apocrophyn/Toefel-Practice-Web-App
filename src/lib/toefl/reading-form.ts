/**
 * Reading form assembly.
 *
 * A 2026 Reading form is 50 items: 30 Complete the Words, 10 Read in Daily Life
 * and 10 Read an Academic Passage, split across a router module and a second
 * module. The previous implementation selected a count of *stimuli* and let the
 * item count fall where it may, which produced roughly 20 items — under half a
 * real section.
 *
 * Everything below works in items and converts to stimuli at the last moment.
 */

import { generateCTest, type CTestItem } from "@/lib/toefl/c-test";
import { cTestParagraphs } from "@/data/questions/2026/c-test-paragraphs";
import { academicPassageSets } from "@/data/questions/2026/reading-academic-sets";
import { dailyLifeQuestions as dailyLifeBank } from "@/data/questions/reading-bank";
import {
  READING_PLAN,
  createRng,
  shuffle,
  type ReadingPlan,
} from "@/lib/toefl/form-builder";
import { COMPLETE_THE_WORDS } from "@/data/toefl-2026-blueprint";
import type {
  AcademicQuestion,
  CompleteWordsQuestion,
  DailyLifeQuestion,
  ReadingQuestionItem,
} from "@/data/questions/reading-2026";

/** Width of the rendered gap. Fixed on purpose — it must not reveal answer length. */
const GAP = "_____";

/**
 * Adapt a generated C-test into the shape the reading renderer already consumes.
 * Each gap becomes `stem_____`, which is what the renderer looks for in the
 * passage text and replaces with an input.
 */
export function cTestToCompleteWords(item: CTestItem): CompleteWordsQuestion {
  const blanks = item.blanks.map((b) => ({
    position: b.position,
    partialWord: `${b.stem}${GAP}`,
    answer: b.answer,
  }));
  const passage = item.template.replace(/\{\{(\d+)\}\}/g, (_, i: string) => blanks[Number(i)].partialWord);
  return { id: item.id, taskType: "complete_words", passage, blanks };
}

/** Adapt an authored academic passage set into the renderer's AcademicQuestion shape. */
function academicSetToQuestion(set: (typeof academicPassageSets)[number]): AcademicQuestion {
  return {
    id: set.id,
    taskType: "academic",
    title: set.title,
    passage: set.passage,
    questions: set.questions.map((q) => ({
      id: q.id,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
    })),
  };
}

/**
 * The legacy daily-life bank stores questions without ids; the renderer keys
 * answers by question id, so one is derived deterministically from the set id.
 */
function adaptDailyLife(set: (typeof dailyLifeBank)[number]): DailyLifeQuestion {
  return {
    id: set.id,
    taskType: "daily_life",
    passage: set.passage,
    questions: set.questions.map((q, i) => ({
      id: `${set.id}_Q${i + 1}`,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
    })),
  };
}

/**
 * Choose how many 3-item and 2-item daily-life sets add up to exactly `target`,
 * within what the bank still has. Prefers compositions that mix both set sizes,
 * which is what the exam delivers, and falls back to a single size when that is
 * the only exact solution.
 *
 * Returns null when no exact composition exists.
 */
export function solveSetComposition(
  target: number,
  availableThrees: number,
  availableTwos: number
): { threes: number; twos: number } | null {
  const solutions: { threes: number; twos: number }[] = [];
  for (let threes = Math.min(availableThrees, Math.floor(target / 3)); threes >= 0; threes--) {
    const remainder = target - threes * 3;
    if (remainder % 2 !== 0) continue;
    const twos = remainder / 2;
    if (twos > availableTwos) continue;
    solutions.push({ threes, twos });
  }
  if (solutions.length === 0) return null;
  // Prefer a mix of both sizes; otherwise take whatever is exact.
  return solutions.find((s) => s.threes > 0 && s.twos > 0) ?? solutions[0];
}

function itemsIn(stimulus: ReadingQuestionItem): number {
  return stimulus.taskType === "complete_words" ? stimulus.blanks.length : stimulus.questions.length;
}

export interface ReadingModule {
  items: ReadingQuestionItem[];
  /** Scored items actually delivered. */
  itemCount: number;
  /** Populated when the bank could not cover the blueprint target. */
  shortfall: string[];
}

/**
 * Build one reading module to an item plan.
 *
 * `used` carries across modules so a test taker never meets the same paragraph
 * or passage twice inside one form.
 */
export function buildReadingModule(
  plan: ReadingPlan,
  used: Set<string>,
  rng: () => number
): ReadingModule {
  const items: ReadingQuestionItem[] = [];
  const shortfall: string[] = [];

  // --- Complete the Words: 10 gaps per paragraph, so items / 10 paragraphs.
  const paragraphsNeeded = Math.round(plan.complete_the_words / COMPLETE_THE_WORDS.blanksPerParagraph);
  let paragraphsTaken = 0;
  for (const para of shuffle(cTestParagraphs, rng)) {
    if (paragraphsTaken >= paragraphsNeeded) break;
    if (used.has(para.id)) continue;
    const generated = generateCTest(para.text, para.id);
    if (!generated) continue;
    used.add(para.id);
    items.push(cTestToCompleteWords(generated));
    paragraphsTaken += 1;
  }
  if (paragraphsTaken < paragraphsNeeded) {
    shortfall.push(`Complete the Words: needed ${paragraphsNeeded} paragraphs, bank supplied ${paragraphsTaken}`);
  }

  // --- Read an Academic Passage: sets carry a fixed number of items each.
  let academicItems = 0;
  for (const set of shuffle(academicPassageSets, rng)) {
    if (academicItems >= plan.read_an_academic_passage) break;
    if (used.has(set.id)) continue;
    if (academicItems + set.questions.length > plan.read_an_academic_passage) continue;
    used.add(set.id);
    items.push(academicSetToQuestion(set));
    academicItems += set.questions.length;
  }
  if (academicItems < plan.read_an_academic_passage) {
    shortfall.push(`Read an Academic Passage: needed ${plan.read_an_academic_passage} items, bank supplied ${academicItems}`);
  }

  // --- Read in Daily Life: ETS delivers this task as 2-item and 3-item sets, so
  // hitting the item target exactly is a bin-packing problem, not a greedy draw.
  // Taking sets in random order and stopping when the next one would overshoot
  // leaves the form one item short whenever the remainder cannot be closed
  // (e.g. 3+3 drawn against a target of 8, with no 2-item set left to fit).
  // Solve the composition first, then draw to it.
  const dailyPool = shuffle(dailyLifeBank.map(adaptDailyLife), rng).filter((set) => !used.has(set.id));
  const bySize = new Map<number, DailyLifeQuestion[]>();
  for (const set of dailyPool) {
    const n = set.questions.length;
    if (n !== 2 && n !== 3) continue;
    const bucket = bySize.get(n);
    if (bucket) bucket.push(set);
    else bySize.set(n, [set]);
  }

  const composition = solveSetComposition(
    plan.read_in_daily_life,
    (bySize.get(3) ?? []).length,
    (bySize.get(2) ?? []).length
  );

  let dailyItems = 0;
  if (composition) {
    const threes = bySize.get(3) ?? [];
    const twos = bySize.get(2) ?? [];
    for (const set of threes.slice(0, composition.threes).concat(twos.slice(0, composition.twos))) {
      used.add(set.id);
      items.push(set);
      dailyItems += set.questions.length;
    }
  }
  if (dailyItems !== plan.read_in_daily_life) {
    shortfall.push(`Read in Daily Life: needed ${plan.read_in_daily_life} items, bank supplied ${dailyItems}`);
  }

  const ordered = shuffle(items, rng);
  return {
    items: ordered,
    itemCount: ordered.reduce((total, item) => total + itemsIn(item), 0),
    shortfall,
  };
}

export interface ReadingForm {
  router: ReadingModule;
  used: Set<string>;
  seed: number;
}

/** Assemble the router module and keep the state needed to build the second one. */
export function buildReadingRouter(seed = Date.now()): ReadingForm {
  const used = new Set<string>();
  const rng = createRng(seed);
  return { router: buildReadingModule(READING_PLAN.router, used, rng), used, seed };
}

/** Assemble the second module once the router has routed the test taker. */
export function buildReadingSecondModule(
  form: ReadingForm,
  track: "lower" | "upper"
): ReadingModule {
  // Offset the seed so the second module does not replay the router's draw order.
  return buildReadingModule(READING_PLAN[track], form.used, createRng(form.seed ^ 0x9e3779b9));
}
