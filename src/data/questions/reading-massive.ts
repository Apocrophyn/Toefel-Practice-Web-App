
import { ReadingQuestionItem } from "./reading-2026";
import { batch1Passages } from "./reading-batch-1";
import { batch2Passages } from "./reading-batch-2";
import { batch3Passages } from "./reading-batch-3";
import { batch4Passages } from "./reading-batch-4";
import { batch5Passages } from "./reading-batch-5";
import { batch6Passages } from "./reading-batch-6";
import { batch7Passages } from "./reading-batch-7";
import { batch8Passages } from "./reading-batch-8";
import { batch9Passages } from "./reading-batch-9";
import { batch10Passages } from "./reading-batch-10";
import { batch11Passages } from "./reading-batch-11";
import { batch12Passages } from "./reading-batch-12";
import { batch13Passages } from "./reading-batch-13";
import { batch14Passages } from "./reading-batch-14";
import { batch15Passages } from "./reading-batch-15";
import { batch16Passages } from "./reading-batch-16";
import { batch17Passages } from "./reading-batch-17";
import { batch18Passages } from "./reading-batch-18";
import { batch19Passages } from "./reading-batch-19";
import { batch20Passages } from "./reading-batch-20";
import { allCompleteWordsBatches } from "./complete-words-index";

// Combine all 20 manually authored batches (Total: 400 Passages + 200 Complete Words = 600 Total)
const allBatches = [
    ...batch1Passages,
    ...batch2Passages,
    ...batch3Passages,
    ...batch4Passages,
    ...batch5Passages,
    ...batch6Passages,
    ...batch7Passages,
    ...batch8Passages,
    ...batch9Passages,
    ...batch10Passages,
    ...batch11Passages,
    ...batch12Passages,
    ...batch13Passages,
    ...batch14Passages,
    ...batch15Passages,
    ...batch16Passages,
    ...batch17Passages,
    ...batch18Passages,
    ...batch19Passages,
    ...batch20Passages,
    ...allCompleteWordsBatches
];

// Helper to shuffle array (Fisher-Yates)
const shuffle = <T>(array: T[]): T[] => {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
};

// Export the massive collection.
// We shuffle it so the user gets a random mix of topics every time they reload the app.
export const massiveReadingQuestions: ReadingQuestionItem[] = shuffle(allBatches);

// Log stats for verification
console.log(`[Content System] Loaded ${allBatches.length} high-quality academic reading passages across 20 batches.`);
