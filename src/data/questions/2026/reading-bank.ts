/**
 * Combined Reading item bank for the 2026 format.
 *
 * Exam-shaped content only. The legacy `reading-batch-*.ts` passages are NOT
 * exported here: they average ~230 words against the ETS 200-word ceiling and
 * carry a single question each, so they cannot form a 5-item set. They remain in
 * the repository as the source of Complete the Words paragraphs, which is the
 * one thing they are well suited to.
 */

import { academicPassageSets, type AcademicPassageSet } from "@/data/questions/2026/reading-academic-sets";
import { academicPassageSets2 } from "@/data/questions/2026/reading-academic-sets-2";

export type { AcademicPassageSet };

export const allAcademicPassageSets: AcademicPassageSet[] = [
  ...academicPassageSets,
  ...academicPassageSets2,
];

export const READING_BANK_SIZES = {
  academicSets: allAcademicPassageSets.length,
  academicItems: allAcademicPassageSets.reduce((n, s) => n + s.questions.length, 0),
};
