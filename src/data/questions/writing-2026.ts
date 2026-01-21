
// 2026 TOEFL iBT Writing Questions
// Includes the new "Writing for an Academic Discussion" task

import { allWritingBatches } from "./writing-batches-index";

export type WritingTaskType = "integrated" | "academic_discussion";

export interface IntegratedWritingTask {
    id: string;
    type: "integrated";
    topic: string;
    readingPassage: string;
    listeningScript: string; // In a real app, this would be an audio file URL
    listeningSummary: string; // For display if audio isn't available
    prompt: string;
    timeLimit: number; // in seconds
    minWords: number;
    maxWords: number;
}

export interface AcademicDiscussionTask {
    id: string;
    type: "academic_discussion";
    topic: string;
    professor: {
        name: string;
        avatar?: string;
        message: string;
    };
    students: {
        name: string;
        avatar?: string;
        message: string;
    }[];
    prompt: string;
    timeLimit: number; // in seconds (usually 600 = 10 mins)
    minWords: number;
    maxWords: number;
}

export type WritingQuestion = IntegratedWritingTask | AcademicDiscussionTask;

// Export all 200 writing questions from 20 batches
export const writingQuestions: WritingQuestion[] = allWritingBatches;
