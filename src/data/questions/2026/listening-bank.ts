/**
 * Combined Listening item bank for the 2026 format.
 *
 * The legacy bank could not build a single honest form: one form needs 8–16
 * Academic Talk items and only five talks existed, so a test taker would meet
 * the same lecture twice inside one sitting. This merges the legacy bank with
 * the 2026 expansion so form assembly has enough distinct stimuli to draw from.
 */

import {
  chooseResponseItems,
  conversationScenarios,
  announcementScenarios,
  academicTalkScenarios,
  type ChooseResponseItem,
  type ConversationScenario,
  type AnnouncementScenario,
  type AcademicTalkScenario,
} from "@/data/questions/listening-massive";
import { academicTalkScenariosExpansion } from "@/data/questions/2026/listening-expansion-2026";

export type {
  ChooseResponseItem,
  ConversationScenario,
  AnnouncementScenario,
  AcademicTalkScenario,
};

export const chooseResponseBank: ChooseResponseItem[] = [...chooseResponseItems];
export const conversationBank: ConversationScenario[] = [...conversationScenarios];
export const announcementBank: AnnouncementScenario[] = [...announcementScenarios];
export const academicTalkBank: AcademicTalkScenario[] = [
  ...academicTalkScenarios,
  ...academicTalkScenariosExpansion,
];

/** Items each stimulus type contributes to a form. Used to convert an item target into a stimulus count. */
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
