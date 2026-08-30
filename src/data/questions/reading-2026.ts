// 2026 TOEFL iBT Reading Questions - Adaptive Format
// Based on official ETS format effective January 21, 2026

import { customReadingQuestions } from "./reading-custom";
import { massiveReadingQuestions } from "./reading-massive";

export type TaskType = "complete_words" | "daily_life" | "academic";

export interface CompleteWordsQuestion {
    id: string;
    taskType: "complete_words";
    passage: string;
    blanks: {
        position: number;
        partialWord: string;
        answer: string;
    }[];
}

export interface DailyLifeQuestion {
    id: string;
    taskType: "daily_life";
    /**
     * The artefact's genre, e.g. "Campus Email", "Cafe Menu", "Shuttle Service".
     * Drives the per-genre renderer: the layout of the artefact is part of what
     * this task measures, so a menu has to look like a menu.
     */
    category?: string;
    passage: string;
    questions: {
        id: string;
        question: string;
        options: string[];
        correctAnswer: string;
        explanation: string;
    }[];
}

export interface AcademicQuestion {
    id: string;
    taskType: "academic";
    title: string;
    passage: string;
    /**
     * Authoring metadata. Never rendered to the test taker — these two fields were
     * previously embedded in `passage`, which printed the item's own answer strategy
     * above the passage. Kept for skill tagging and analytics.
     */
    rhetoricalStructure?: string;
    dominantSkill?: string;
    questions: {
        id: string;
        question: string;
        options: string[];
        correctAnswer: string;
        explanation: string;
    }[];
}

export type ReadingQuestionItem = CompleteWordsQuestion | DailyLifeQuestion | AcademicQuestion;

// ADAPTIVE MODULE STRUCTURE
export interface AdaptiveReadingTest {
    module1: ReadingQuestionItem[];
    module2Easy: ReadingQuestionItem[];
    module2Hard: ReadingQuestionItem[];
    completeWordsPool: CompleteWordsQuestion[];
}

// ==========================================
// TOEFL 2026 Reading Section Configuration
// Official Format Effective January 21, 2026
// ==========================================
/**
 * DEPRECATED — legacy pre-blueprint reading configuration.
 *
 * Every operational number for the Reading section now comes from
 * `src/data/toefl-2026-blueprint.ts` (item counts, module timings, routing cut)
 * and `src/lib/toefl/form-builder.ts` (the router/module item split).
 *
 * The values that used to live here described a 20-item section on an 18-minute
 * second module with a 0.60 routing cut. All three are wrong against the ETS
 * 2026 blueprint (50 items, 9-minute second module, and a single routing cut
 * shared with `routeToModule`), and having them in scope meant the results
 * screen could report a different verdict than the router had acted on. Only
 * the router fallback time survives; do not add values back here.
 */
export const READING_CONFIG = {
    /** Fallback only. `SECTIONS.reading.timing.routerSeconds` is authoritative. */
    MODULE1_TIME: 19 * 60 + 30,
};

// ==========================================
// Helper Functions
// ==========================================

// Fisher-Yates shuffle for true randomization
const shuffleArray = <T>(array: T[]): T[] => {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
};

// Categorize questions by type
const categorizeQuestions = (questions: ReadingQuestionItem[]) => {
    const academic: AcademicQuestion[] = [];
    const dailyLife: DailyLifeQuestion[] = [];
    const completeWords: CompleteWordsQuestion[] = [];

    questions.forEach(q => {
        if (q.taskType === "academic") {
            academic.push(q as AcademicQuestion);
        } else if (q.taskType === "daily_life") {
            dailyLife.push(q as DailyLifeQuestion);
        } else if (q.taskType === "complete_words") {
            completeWords.push(q as CompleteWordsQuestion);
        }
    });

    return { academic, dailyLife, completeWords };
};

// ==========================================
// Build Adaptive Test Pools
// ==========================================

// Combine all sources of questions
const allQuestions: ReadingQuestionItem[] = [
    ...massiveReadingQuestions,
    ...customReadingQuestions
];

// Categorize for distribution
const { academic, dailyLife, completeWords } = categorizeQuestions(allQuestions);

// Log stats for debugging
console.log(`[Reading 2026] Academic passages: ${academic.length}`);
console.log(`[Reading 2026] Daily Life passages: ${dailyLife.length}`);
console.log(`[Reading 2026] Complete Words tasks: ${completeWords.length}`);
console.log(`[Reading 2026] Total content items: ${allQuestions.length}`);

// Distribute content across modules
// Module 1: Mixed difficulty (baseline) - takes from all types
// Module 2 Easy: Daily life focused
// Module 2 Hard: Academic focused

// Split academic passages: 40% for module1, 30% for module2Easy, 30% for module2Hard
const shuffledAcademic = shuffleArray(academic);
const m1AcademicCount = Math.floor(shuffledAcademic.length * 0.4);
const m2eAcademicCount = Math.floor(shuffledAcademic.length * 0.3);

const m1Academic = shuffledAcademic.slice(0, m1AcademicCount);
const m2eAcademic = shuffledAcademic.slice(m1AcademicCount, m1AcademicCount + m2eAcademicCount);
const m2hAcademic = shuffledAcademic.slice(m1AcademicCount + m2eAcademicCount);

// Daily life: 40% module1, 60% module2Easy (none for hard)
const shuffledDailyLife = shuffleArray(dailyLife);
const m1DailyLifeCount = Math.floor(shuffledDailyLife.length * 0.4);

const m1DailyLife = shuffledDailyLife.slice(0, m1DailyLifeCount);
const m2eDailyLife = shuffledDailyLife.slice(m1DailyLifeCount);

// Complete words: shared pool for use in both modules
const shuffledCompleteWords = shuffleArray(completeWords);

// Build final module pools
const module1Pool: ReadingQuestionItem[] = shuffleArray([
    ...m1Academic,
    ...m1DailyLife,
    ...shuffledCompleteWords.slice(0, Math.floor(shuffledCompleteWords.length * 0.5))
]);

const module2EasyPool: ReadingQuestionItem[] = shuffleArray([
    ...m2eDailyLife,
    ...m2eAcademic,
    ...shuffledCompleteWords.slice(Math.floor(shuffledCompleteWords.length * 0.5))
]);

const module2HardPool: ReadingQuestionItem[] = shuffleArray([
    ...m2hAcademic
]);

// Export the adaptive test structure
export const adaptiveReadingTest: AdaptiveReadingTest = {
    module1: module1Pool,
    module2Easy: module2EasyPool,
    module2Hard: module2HardPool,
    completeWordsPool: shuffledCompleteWords
};

// ==========================================
// Session Management for No Duplicates
// ==========================================

/**
 * Creates a new reading session that ensures no duplicate questions
 * across both modules within a single practice test.
 */
/*
 * The legacy `ReadingSessionManager` used to live here. It selected a fixed 10
 * items per module against a 20-item section, routed on a 0.60 accuracy cut and
 * mixed content by ratio rather than by ETS item counts — all three wrong against
 * the 2026 blueprint. Nothing referenced it after the engine moved to
 * `src/lib/toefl/reading-form.ts`, and leaving a second, wrong adaptive engine in
 * the tree is how the pre-2026 numbers kept resurfacing. Use `buildReadingRouter`
 * and `buildReadingSecondModule` instead.
 */
