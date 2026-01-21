// Complete the Words - All Batches Index
// Exports all 20 batches of Complete the Words questions

import { CompleteWordsQuestion } from "./reading-2026";
import { completeWordsBatch1 } from "./complete-words-batch-1";
import { completeWordsBatch2 } from "./complete-words-batch-2";
import { completeWordsBatch3 } from "./complete-words-batch-3";
import { completeWordsBatch4 } from "./complete-words-batch-4";
import { completeWordsBatch5 } from "./complete-words-batch-5";
import { completeWordsBatch6 } from "./complete-words-batch-6";
import { completeWordsBatch7 } from "./complete-words-batch-7";
import { completeWordsBatch8 } from "./complete-words-batch-8";
import { completeWordsBatch9 } from "./complete-words-batch-9";
import { completeWordsBatch10 } from "./complete-words-batch-10";
import { completeWordsBatch11 } from "./complete-words-batch-11";
import { completeWordsBatch12 } from "./complete-words-batch-12";
import { completeWordsBatch13 } from "./complete-words-batch-13";
import { completeWordsBatch14 } from "./complete-words-batch-14";
import { completeWordsBatch15 } from "./complete-words-batch-15";
import { completeWordsBatch16 } from "./complete-words-batch-16";
import { completeWordsBatch17 } from "./complete-words-batch-17";
import { completeWordsBatch18 } from "./complete-words-batch-18";
import { completeWordsBatch19 } from "./complete-words-batch-19";
import { completeWordsBatch20 } from "./complete-words-batch-20";

// Combine all batches
export const allCompleteWordsBatches: CompleteWordsQuestion[] = [
    ...completeWordsBatch1,
    ...completeWordsBatch2,
    ...completeWordsBatch3,
    ...completeWordsBatch4,
    ...completeWordsBatch5,
    ...completeWordsBatch6,
    ...completeWordsBatch7,
    ...completeWordsBatch8,
    ...completeWordsBatch9,
    ...completeWordsBatch10,
    ...completeWordsBatch11,
    ...completeWordsBatch12,
    ...completeWordsBatch13,
    ...completeWordsBatch14,
    ...completeWordsBatch15,
    ...completeWordsBatch16,
    ...completeWordsBatch17,
    ...completeWordsBatch18,
    ...completeWordsBatch19,
    ...completeWordsBatch20
];

// Export individual batches for selective use
export {
    completeWordsBatch1,
    completeWordsBatch2,
    completeWordsBatch3,
    completeWordsBatch4,
    completeWordsBatch5,
    completeWordsBatch6,
    completeWordsBatch7,
    completeWordsBatch8,
    completeWordsBatch9,
    completeWordsBatch10,
    completeWordsBatch11,
    completeWordsBatch12,
    completeWordsBatch13,
    completeWordsBatch14,
    completeWordsBatch15,
    completeWordsBatch16,
    completeWordsBatch17,
    completeWordsBatch18,
    completeWordsBatch19,
    completeWordsBatch20
};

// Total count: 200 Complete the Words passages (20 batches × 10 passages each)
console.log(`[Complete Words] Loaded ${allCompleteWordsBatches.length} passages across 20 batches`);
