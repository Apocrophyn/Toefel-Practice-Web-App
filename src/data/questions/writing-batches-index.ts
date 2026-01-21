// Writing Batches - All Batches Index
// Exports all 20 batches of Academic Discussion writing tasks

import { AcademicDiscussionTask } from "./writing-2026";
import { writingBatch1 } from "./writing-batch-1";
import { writingBatch2 } from "./writing-batch-2";
import { writingBatch3 } from "./writing-batch-3";
import { writingBatch4 } from "./writing-batch-4";
import { writingBatch5 } from "./writing-batch-5";
import { writingBatch6 } from "./writing-batch-6";
import { writingBatch7 } from "./writing-batch-7";
import { writingBatch8 } from "./writing-batch-8";
import { writingBatch9 } from "./writing-batch-9";
import { writingBatch10 } from "./writing-batch-10";
import { writingBatch11 } from "./writing-batch-11";
import { writingBatch12 } from "./writing-batch-12";
import { writingBatch13 } from "./writing-batch-13";
import { writingBatch14 } from "./writing-batch-14";
import { writingBatch15 } from "./writing-batch-15";
import { writingBatch16 } from "./writing-batch-16";
import { writingBatch17 } from "./writing-batch-17";
import { writingBatch18 } from "./writing-batch-18";
import { writingBatch19 } from "./writing-batch-19";
import { writingBatch20 } from "./writing-batch-20";

// Combine all batches
export const allWritingBatches: AcademicDiscussionTask[] = [
    ...writingBatch1,
    ...writingBatch2,
    ...writingBatch3,
    ...writingBatch4,
    ...writingBatch5,
    ...writingBatch6,
    ...writingBatch7,
    ...writingBatch8,
    ...writingBatch9,
    ...writingBatch10,
    ...writingBatch11,
    ...writingBatch12,
    ...writingBatch13,
    ...writingBatch14,
    ...writingBatch15,
    ...writingBatch16,
    ...writingBatch17,
    ...writingBatch18,
    ...writingBatch19,
    ...writingBatch20
];

// Export individual batches for selective use
export {
    writingBatch1,
    writingBatch2,
    writingBatch3,
    writingBatch4,
    writingBatch5,
    writingBatch6,
    writingBatch7,
    writingBatch8,
    writingBatch9,
    writingBatch10,
    writingBatch11,
    writingBatch12,
    writingBatch13,
    writingBatch14,
    writingBatch15,
    writingBatch16,
    writingBatch17,
    writingBatch18,
    writingBatch19,
    writingBatch20
};

// Total count: 200 Academic Discussion tasks (20 batches × 10 tasks each)
console.log(`[Writing Batches] Loaded ${allWritingBatches.length} Academic Discussion tasks across 20 batches`);
