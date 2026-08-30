/**
 * Combined Listening item bank for the 2026 format.
 *
 * Selection rule: only stimuli whose audio length matches the 2026 spec are
 * offered to the exam engine.
 *
 * The legacy conversations run 111-172 words and the legacy announcements 85-107,
 * which is roughly a minute of audio apiece. The 2026 test uses 20-30 second
 * conversations and announcements, so those legacy stimuli are excluded here
 * rather than silently making the Listening section twice as long as the real
 * one. They remain in `listening-massive.ts` for extended listening practice.
 *
 * Legacy Academic Talks (171-189 words) and Listen-and-Choose-a-Response items
 * (5-15 words) ARE inside the published ranges, so those are kept.
 */

import {
  chooseResponseItems,
  academicTalkScenarios,
  type ChooseResponseItem,
  type ConversationScenario,
  type AnnouncementScenario,
  type AcademicTalkScenario,
} from "@/data/questions/listening-massive";
import { academicTalkScenariosExpansion } from "@/data/questions/2026/listening-expansion-2026";
import {
  conversationScenarios2026,
  announcementScenarios2026,
  academicTalkScenarios2026,
} from "@/data/questions/2026/listening-2026";

export type {
  ChooseResponseItem,
  ConversationScenario,
  AnnouncementScenario,
  AcademicTalkScenario,
};

/** ETS: brief utterances, no longer than six stressed syllables. */
export const chooseResponseBank: ChooseResponseItem[] = [...chooseResponseItems];

/** ETS: 20-30 s, two speakers, two items each. */
export const conversationBank: ConversationScenario[] = [...conversationScenarios2026];

/** ETS: 20-30 s, one speaker, two items each. */
export const announcementBank: AnnouncementScenario[] = [...announcementScenarios2026];

/** ETS: 60-90 s (100-250 words), one speaker, four items each. */
export const academicTalkBank: AcademicTalkScenario[] = [
  ...academicTalkScenarios2026,
  ...academicTalkScenarios,
  ...academicTalkScenariosExpansion,
];

/** Items each stimulus type contributes, used to turn an item target into a stimulus count. */
export const ITEMS_PER_STIMULUS = {
  choose_response: 1,
  conversation: 2,
  announcement: 2,
  academic_talk: 4,
} as const;

export const LISTENING_BANK_SIZES = {
  chooseResponse: chooseResponseBank.length,
  conversations: conversationBank.length,
  announcements: announcementBank.length,
  academicTalks: academicTalkBank.length,
};
