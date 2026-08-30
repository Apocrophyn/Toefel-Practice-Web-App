/**
 * Complete the Words — C-test generator.
 *
 * The 2026 Reading section's largest task (30 of 50 items) is a classic C-test,
 * which means it is *generated*, not hand-authored:
 *
 *   1. The first sentence is left completely intact — it establishes the topic.
 *   2. From the second sentence onward, the back half of every second eligible
 *      word is deleted.
 *   3. Exactly ten gaps are produced, in a 70–100 word academic paragraph.
 *
 * Generating rather than authoring matters because the previous hand-authored
 * bank drifted badly off-spec: gaps sat on whichever words the author found
 * interesting, gap counts per paragraph ranged from 8 to 27 instead of 10, and
 * the number of underscores frequently disagreed with the number of missing
 * letters. A generator makes every item structurally identical to the exam's.
 *
 * Deliberate decision — we do NOT reveal how many letters are missing. Sources
 * genuinely disagree about whether the real test signals letter count, and a
 * fixed-width blank is the choice that cannot make practice easier than test day.
 *
 * Spec: COMPLETE_THE_WORDS in src/data/toefl-2026-blueprint.ts
 * Research: docs/toefl-2026/item-mechanics.md section 1
 */

import { COMPLETE_THE_WORDS } from "@/data/toefl-2026-blueprint";

export interface CTestBlank {
  /** 0-based index of this blank within the paragraph. */
  position: number;
  /** The letters left visible, e.g. "obser". */
  stem: string;
  /** The complete word the test taker must produce, e.g. "observations". */
  answer: string;
  /** How many letters were removed. Used for scoring, never for rendering. */
  missingLetters: number;
}

export interface CTestItem {
  id: string;
  taskType: "complete_words";
  /** Paragraph with each gapped word replaced by a {{n}} placeholder. */
  template: string;
  blanks: CTestBlank[];
  /** Source paragraph, ungapped. Shown in review mode. */
  sourceParagraph: string;
  wordCount: number;
}

/** Words that carry no information and make poor gaps even when long enough. */
const STOP_WORDS = new Set([
  "the", "and", "but", "for", "nor", "yet", "so", "a", "an", "of", "to", "in",
  "on", "at", "by", "is", "are", "was", "were", "be", "been", "it", "its",
  "this", "that", "these", "those", "with", "as", "or", "if", "then", "than",
]);

const SENTENCE_SPLIT = /(?<=[.!?])\s+(?=[A-Z"'(])/;

/**
 * Markup that has no business appearing in an exam stimulus.
 *
 * The Complete the Words paragraphs are harvested from the legacy passage bank,
 * which was authored in Markdown with the occasional inline LaTeX formula. That
 * markup was rendering literally on screen: test takers were shown
 * `*Photons*`, `* Red photons are "weak" bullets.` and `($E=hf$)` inside what is
 * supposed to be a plain academic paragraph. The renderer only understands
 * `**bold**`, so nothing else was ever stripped.
 */
const MARKUP_PATTERNS: { pattern: RegExp; replacement: string }[] = [
  // Bold and italic markers around a word or phrase: **term** / *term* / _term_.
  { pattern: /\*\*([^*]+)\*\*/g, replacement: "$1" },
  { pattern: /(?<![A-Za-z0-9])\*([^*\n]+)\*(?![A-Za-z0-9])/g, replacement: "$1" },
  { pattern: /(?<![A-Za-z0-9])_([A-Za-z][^_\n]*)_(?![A-Za-z0-9])/g, replacement: "$1" },
  // Inline code and Markdown headings.
  { pattern: /`([^`]*)`/g, replacement: "$1" },
  { pattern: /^#{1,6}\s+/gm, replacement: "" },
  // Simple chemical formulae written as LaTeX: $CO_2$ -> CO2, $H_2O$ -> H2O.
  { pattern: /\$([A-Za-z]{1,3})_\{?(\d+)\}?\$/g, replacement: "$1$2" },
  // A bullet marker that survived being flattened into a prose paragraph.
  { pattern: /(^|\s)\*\s+/g, replacement: "$1" },
];

/**
 * A numbered-list marker left behind when a list was flattened into prose:
 * `... zeitgeist. 1. It was "Free." ... 2. It was "Sublime."`
 *
 * Only stripped when the paragraph carries at least two of them, which is what
 * distinguishes a real list from a sentence that happens to end in a number. A
 * single digit is required so that a year ("in 1965. The") can never match.
 */
const LIST_MARKER = /(^|(?<=[.!?])\s)[1-9]\.\s(?=[A-Z"'])/g;

/**
 * Anything still matching after normalisation means the paragraph is carrying
 * structure a prose stimulus cannot represent — a real formula, a table, a link.
 * Those paragraphs are rejected rather than mangled into something that reads
 * like a typo.
 */
const RESIDUAL_MARKUP = /[$`|#*]|\\[A-Za-z]+|\[[^\]]*\]\([^)]*\)|<\/?[a-z][^>]*>/i;

/** Strip authoring markup from a harvested paragraph. */
export function sanitizeParagraph(paragraph: string): string {
  let text = paragraph;
  for (const { pattern, replacement } of MARKUP_PATTERNS) {
    text = text.replace(pattern, replacement);
  }
  if ((text.match(LIST_MARKER) ?? []).length >= 2) {
    text = text.replace(LIST_MARKER, "$1");
  }
  return text.replace(/\s+/g, " ").trim();
}

/** True when a paragraph is clean enough to show to a test taker. */
export function isCleanStimulus(paragraph: string): boolean {
  return !RESIDUAL_MARKUP.test(sanitizeParagraph(paragraph));
}

/**
 * A token is gappable if it is a plain alphabetic word of sufficient length
 * that does not also appear intact elsewhere in the paragraph.
 *
 * That last condition matters: the whole passage stays on screen, so gapping a
 * word that is printed in full two sentences later hands the test taker the
 * answer and the item stops measuring anything.
 */
function isGappable(token: string, repeated: ReadonlySet<string>): boolean {
  const word = token.replace(/[^A-Za-z'-]/g, "");
  if (word.length < COMPLETE_THE_WORDS.minWordLengthToGap) return false;
  if (STOP_WORDS.has(word.toLowerCase())) return false;
  if (repeated.has(word.toLowerCase())) return false;
  return /^[A-Za-z][A-Za-z'-]*$/.test(word);
}

/**
 * Lowercased words that occur more than once in the paragraph.
 *
 * Possessives and hyphenated compounds count as occurrences of their parts:
 * gapping "soil" while the paragraph also prints "soil's" leaves the answer on
 * screen just as plainly as a bare repetition would, and the same goes for
 * "Earth" against "proto-Earth".
 */
function findRepeatedWords(text: string): Set<string> {
  const counts = new Map<string, number>();
  const bump = (word: string) => {
    if (!word) return;
    counts.set(word, (counts.get(word) ?? 0) + 1);
  };

  for (const raw of text.match(/[A-Za-z][A-Za-z'-]*/g) ?? []) {
    const token = raw.toLowerCase();
    bump(token);
    // Index the components too, so "soil's" and "proto-earth" register as
    // occurrences of "soil" and "earth".
    const parts = token.split(/['-]/).filter(Boolean);
    if (parts.length > 1) parts.forEach(bump);
  }

  const repeated = new Set<string>();
  counts.forEach((n, word) => {
    if (n > 1) repeated.add(word);
  });
  return repeated;
}

/**
 * Split a token into the visible stem and the deleted remainder.
 * Standard C-test convention: keep ceil(n/2), delete floor(n/2).
 */
function splitWord(word: string): { stem: string; missing: number } {
  const keep = Math.ceil(word.length / 2);
  return { stem: word.slice(0, keep), missing: word.length - keep };
}

export interface GenerateOptions {
  /** Defaults to the blueprint value (10). */
  blanks?: number;
  /** Gap every Nth eligible word. Defaults to the blueprint value (2). */
  every?: number;
}

/**
 * Turn an academic paragraph into a Complete the Words item.
 *
 * Returns null when the paragraph cannot yield the required number of gaps —
 * callers skip it rather than ship a short item.
 */
export function generateCTest(
  paragraph: string,
  id: string,
  options: GenerateOptions = {}
): CTestItem | null {
  const targetBlanks = options.blanks ?? COMPLETE_THE_WORDS.blanksPerParagraph;
  const every = options.every ?? COMPLETE_THE_WORDS.gapEveryNthWord;

  const text = sanitizeParagraph(paragraph);
  // A paragraph that still carries markup after normalisation is not a usable
  // stimulus; shipping it would print raw syntax inside the reading passage.
  if (RESIDUAL_MARKUP.test(text)) return null;
  const sentences = text.split(SENTENCE_SPLIT);
  if (sentences.length < 2) return null;

  const head = COMPLETE_THE_WORDS.firstSentenceIntact ? sentences[0] : "";
  const body = (COMPLETE_THE_WORDS.firstSentenceIntact ? sentences.slice(1) : sentences).join(" ");
  if (!body) return null;

  const repeated = findRepeatedWords(text);
  const blanks: CTestBlank[] = [];
  let eligibleSeen = 0;

  const gappedBody = body
    .split(" ")
    .map((token) => {
      if (blanks.length >= targetBlanks || !isGappable(token, repeated)) return token;

      eligibleSeen += 1;
      if (eligibleSeen % every !== 0) return token;

      // Preserve punctuation hanging off the word ("neurons," -> "neurons" + ",").
      const match = token.match(/^([^A-Za-z]*)([A-Za-z'-]+)([^A-Za-z]*)$/);
      if (!match) return token;
      const before = match[1];
      const word = match[2];
      const after = match[3];

      const split = splitWord(word);
      if (split.missing < 1) return token;

      const placeholder = `{{${blanks.length}}}`;
      blanks.push({
        position: blanks.length,
        stem: split.stem,
        answer: word,
        missingLetters: split.missing,
      });
      return `${before}${placeholder}${after}`;
    })
    .join(" ");

  if (blanks.length < targetBlanks) return null;

  return {
    id,
    taskType: "complete_words",
    template: head ? `${head} ${gappedBody}` : gappedBody,
    blanks,
    sourceParagraph: text,
    wordCount: text.split(/\s+/).length,
  };
}

/** True when a paragraph is the right length to be a Complete the Words stimulus. */
export function isSuitableParagraph(paragraph: string): boolean {
  const text = sanitizeParagraph(paragraph);
  if (RESIDUAL_MARKUP.test(text)) return false;
  const n = text.split(/\s+/).length;
  return n >= COMPLETE_THE_WORDS.paragraphWords.min && n <= COMPLETE_THE_WORDS.paragraphWords.max;
}

/**
 * Score a single blank. Exact match, case-insensitive, whitespace-trimmed — the
 * exam awards no partial credit and spelling must be right.
 */
export function scoreBlank(blank: CTestBlank, response: string): boolean {
  const typed = (response ?? "").trim().toLowerCase();
  if (!typed) return false;
  // Accept the full word or just the missing letters, since the input sits
  // beside a visible stem and test takers reasonably type either.
  const full = blank.answer.toLowerCase();
  return typed === full || typed === full.slice(blank.stem.length);
}

/** Raw points earned on one Complete the Words paragraph (1 point per blank). */
export function scoreCTestItem(item: CTestItem, responses: Record<number, string>): number {
  return item.blanks.reduce(
    (total, blank) => total + (scoreBlank(blank, responses[blank.position] ?? "") ? 1 : 0),
    0
  );
}
