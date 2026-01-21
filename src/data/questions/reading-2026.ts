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
export const READING_CONFIG = {
    // Timer settings (in seconds)
    // Reading section is 18-27 minutes total (adaptive)
    MODULE1_TIME: 18 * 60, // 18 minutes - baseline assessment
    MODULE2_TIME_HARD: 18 * 60, // 18 minutes - complex academic content
    MODULE2_TIME_EASY: 9 * 60, // 9 minutes - simpler daily life content

    // Question counts
    MODULE1_QUESTIONS: 10,
    MODULE2_QUESTIONS: 10,
    TOTAL_QUESTIONS: 20,

    // Adaptive threshold (accuracy required for hard track)
    HARD_TRACK_THRESHOLD: 0.60, // 60% or higher = hard track

    // Content mix for Module 1 (baseline)
    MODULE1_ACADEMIC_RATIO: 0.5, // 50% academic
    MODULE1_DAILY_LIFE_RATIO: 0.3, // 30% daily life
    MODULE1_COMPLETE_WORDS_RATIO: 0.2, // 20% complete words

    // Module 2 Hard Track (C1-C2 level)
    MODULE2_HARD_ACADEMIC_RATIO: 0.8, // 80% academic passages

    // Module 2 Easy Track (B1-B2 level)
    MODULE2_EASY_DAILY_LIFE_RATIO: 0.8, // 80% daily life content
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
export class ReadingSessionManager {
    private usedQuestionIds: Set<string> = new Set();
    private module1Questions: ReadingQuestionItem[] = [];
    private module2Questions: ReadingQuestionItem[] = [];
    private module1Score: number = 0;
    private module1Total: number = 0;

    constructor() {
        this.reset();
    }

    /**
     * Reset the session for a new practice test
     */
    reset(): void {
        this.usedQuestionIds = new Set();
        this.module1Questions = [];
        this.module2Questions = [];
        this.module1Score = 0;
        this.module1Total = 0;
    }

    /**
     * Select questions for a module based on configured ratios
     */
    private selectQuestionsForModule(count: number, academicRatio: number, dailyLifeRatio: number): ReadingQuestionItem[] {
        const selected: ReadingQuestionItem[] = [];

        // Use full pools for maximum variety across different runs
        const academicPool = shuffleArray([...academic]);
        const dailyLifePool = shuffleArray([...dailyLife]);
        const completeWordsPool = shuffleArray([...completeWords]);

        const academicTarget = Math.floor(count * academicRatio);
        const dailyLifeTarget = Math.floor(count * dailyLifeRatio);
        const completeWordsTarget = count - academicTarget - dailyLifeTarget;

        let academicCount = 0;
        let dailyLifeCount = 0;
        let completeWordsCount = 0;

        // 1. Try to fill academic
        for (const q of academicPool) {
            if (academicCount >= academicTarget) break;
            if (!this.usedQuestionIds.has(q.id)) {
                selected.push(q);
                this.usedQuestionIds.add(q.id);
                academicCount++;
            }
        }

        // 2. Try to fill daily life
        for (const q of dailyLifePool) {
            if (dailyLifeCount >= dailyLifeTarget) break;
            if (!this.usedQuestionIds.has(q.id)) {
                selected.push(q);
                this.usedQuestionIds.add(q.id);
                dailyLifeCount++;
            }
        }

        // 3. Try to fill complete words
        for (const q of completeWordsPool) {
            if (completeWordsCount >= completeWordsTarget) break;
            if (!this.usedQuestionIds.has(q.id)) {
                selected.push(q);
                this.usedQuestionIds.add(q.id);
                completeWordsCount++;
            }
        }

        // 4. Fill remaining from a giant mixed pool if needed
        if (selected.length < count) {
            const mixedPool = shuffleArray([...academic, ...dailyLife, ...completeWords]);
            for (const q of mixedPool) {
                if (selected.length >= count) break;
                if (!this.usedQuestionIds.has(q.id)) {
                    selected.push(q);
                    this.usedQuestionIds.add(q.id);
                }
            }
        }

        return shuffleArray(selected);
    }

    /**
     * Select questions for Module 1 (baseline difficulty)
     */
    selectModule1Questions(count: number = READING_CONFIG.MODULE1_QUESTIONS): ReadingQuestionItem[] {
        this.module1Questions = this.selectQuestionsForModule(
            count,
            READING_CONFIG.MODULE1_ACADEMIC_RATIO,
            READING_CONFIG.MODULE1_DAILY_LIFE_RATIO
        );
        return this.module1Questions;
    }

    /**
     * Record Module 1 performance to determine adaptive path
     */
    recordModule1Performance(correct: number, total: number): void {
        this.module1Score = correct;
        this.module1Total = total;
    }

    /**
     * Determine which track the user should take based on Module 1 performance
     */
    getAdaptiveTrack(): "hard" | "easy" {
        if (this.module1Total === 0) return "easy";
        const accuracy = this.module1Score / this.module1Total;
        return accuracy >= READING_CONFIG.HARD_TRACK_THRESHOLD ? "hard" : "easy";
    }

    /**
     * Select questions for Module 2 based on adaptive track
     */
    selectModule2Questions(
        track: "hard" | "easy" = this.getAdaptiveTrack(),
        count: number = READING_CONFIG.MODULE2_QUESTIONS
    ): ReadingQuestionItem[] {
        if (track === "hard") {
            this.module2Questions = this.selectQuestionsForModule(
                count,
                READING_CONFIG.MODULE2_HARD_ACADEMIC_RATIO,
                0.1 // Small amount of daily life for variety
            );
        } else {
            this.module2Questions = this.selectQuestionsForModule(
                count,
                0.2, // Small amount of academic for variety
                READING_CONFIG.MODULE2_EASY_DAILY_LIFE_RATIO
            );
        }
        return this.module2Questions;
    }

    /**
     * Get all used question IDs (for debugging/analytics)
     */
    getUsedQuestionIds(): string[] {
        return Array.from(this.usedQuestionIds);
    }

    /**
     * Get session statistics
     */
    getSessionStats() {
        return {
            module1QuestionsCount: this.module1Questions.length,
            module2QuestionsCount: this.module2Questions.length,
            module1Score: this.module1Score,
            module1Total: this.module1Total,
            adaptiveTrack: this.getAdaptiveTrack(),
            totalUniqueQuestions: this.usedQuestionIds.size
        };
    }
}

// Export a singleton instance for convenience
export const readingSession = new ReadingSessionManager();
