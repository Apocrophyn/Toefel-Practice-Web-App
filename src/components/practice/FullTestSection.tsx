"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Headphones,
  Mic,
  PenTool,
  Clock,
  ChevronRight,
  ChevronLeft,
  Play,
  Square,
  Volume2,
  AlertCircle,
  Trophy,
  Sparkles,
  Loader2,
  CheckCircle,
  CheckCircle2,
  TrendingUp,
  Brain,
  RotateCcw,
  Flag,
  Target,
  Zap,
  ArrowRight,
  TrendingDown,
  BrainCircuit,
  MessageSquare,
  Users,
  Megaphone,
  Pause,
  XCircle,
  Image as ImageIcon,
  GripVertical,
  Mail,
  User,
  AlertTriangle,
} from "lucide-react";
import { SectionBrief } from "@/components/board";

// Reading Data & Types
import {
  READING_CONFIG,
  type ReadingQuestionItem,
  type CompleteWordsQuestion,
  type DailyLifeQuestion,
  type AcademicQuestion
} from "@/data/questions/reading-2026";

// Listening Data & Types
import {
  chooseResponseBank as chooseResponseItems,
  conversationBank as conversationScenarios,
  announcementBank as announcementScenarios,
  academicTalkBank as academicTalkScenarios,
  type ChooseResponseItem,
  type ConversationScenario,
  type AnnouncementScenario,
  type AcademicTalkScenario,
} from "@/data/questions/2026/listening-bank";

// Speaking Data & Types
import {
  listenRepeatScenarios,
  interviewTopics,
  type ListenRepeatScenario,
  type InterviewTopic,
} from "@/data/questions/speaking-massive";

// Writing Data & Types
import {
  emailTasks,
  academicDiscussionTasks,
  type EmailTask,
  type AcademicDiscussionTask
} from "@/data/questions/writing-massive";
import {
  buildASentenceItems,
  scoreBuildASentence,
  type BuildASentenceItem,
} from "@/data/questions/2026/build-a-sentence";
import { BuildASentenceTask } from "@/components/practice/BuildASentenceTask";

// Shared Utils
import { generateAudio, evaluateSpeaking, type VoiceType, type SpeakingEvaluationResult } from "@/lib/audio";
import { WRITING_PLAN, LISTENING_PLAN } from "@/lib/toefl/form-builder";
import { buildReadingRouter, buildReadingSecondModule, type ReadingForm } from "@/lib/toefl/reading-form";
import { ITEMS_PER_STIMULUS } from "@/data/questions/2026/listening-bank";
import { moduleSeconds, routeToModule } from "@/data/toefl-2026-blueprint";
import { BUILD_A_SENTENCE, LISTEN_AND_REPEAT, TAKE_AN_INTERVIEW, SECTIONS, WRITE_AN_EMAIL, WRITE_FOR_AN_ACADEMIC_DISCUSSION } from "@/data/toefl-2026-blueprint";

// --- Types ---

type TestState =
  | "intro"
  | "reading_module1"
  | "reading_interim"
  | "reading_module2"
  | "listening_module1"
  | "listening_module2"
  | "speaking_intro"
  | "speaking_listen_repeat"
  | "speaking_interview"
  | "writing_intro"
  | "writing_practice" // We'll sequence the writing tasks here
  | "evaluating"
  | "results";

interface SectionEvaluation {
  section: string;
  bandScore: number;
  scaledScore: number;
  feedback: string;
  strengths: string[];
  improvements: string[];
  details?: any;
}

// Flattened step for Reading
interface ReadingStep {
  id: string;
  stepType: "complete_words" | "multiple_choice";
  parentTaskType: "complete_words" | "daily_life" | "academic";
  data: any;
  passageContent: string;
  passageTitle?: string;
  parentId: string;
}

interface ReadingAnswer {
  stepId: string;
  value: any;
  isCorrect: boolean;
  /**
   * Raw points earned and available for this step. A multiple-choice step is
   * worth 1; a Complete the Words paragraph is worth one point PER BLANK, which
   * is why the two are tracked in points rather than as a single boolean — ten
   * blanks are ten scored items on the real test, not one.
   */
  pointsEarned: number;
  pointsPossible: number;
  timeSpent: number;
}

interface ListeningAnswer {
  questionId: string;
  taskType: "choose_response" | "conversation" | "announcement" | "academic_talk";
  selectedOption: string | null;
  isCorrect: boolean;
}

interface SpeakingSentenceProgress {
  index: number;
  audioPlayed: boolean;
  recorded: boolean;
  audioBlob?: Blob;
  score: number | null;
  transcript: string;
  evaluationResult?: SpeakingEvaluationResult | null;
}

interface SpeakingInterviewAnswer {
  questionIndex: number;
  audioBlob: Blob | null;
  audioUrl: string | null;
  score: number | null;
  evaluationResult: SpeakingEvaluationResult | null;
}

interface WritingAnswer {
  questionId: string;
  taskType: "build_sentence" | "email" | "academic_discussion";
  text: string;
  wordCount: number;
  timeSpent: number;
  evaluation: any | null;
}

export function FullTestSection() {
  const [testState, setTestState] = useState<TestState>("intro");

  // --- Global Evaluation State ---
  const [evaluations, setEvaluations] = useState<SectionEvaluation[]>([]);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluationProgress, setEvaluationProgress] = useState("");

  // --- Reading State ---
  const readingFormRef = useRef<ReadingForm | null>(null);
  const [readingSteps, setReadingSteps] = useState<ReadingStep[]>([]);
  const [readingCurrentIndex, setReadingCurrentIndex] = useState(0);
  const [readingAnswers, setReadingAnswers] = useState<Record<string, ReadingAnswer>>({});
  const [readingTimeLeft, setReadingTimeLeft] = useState(0);
  const [readingModule1Stats, setReadingModule1Stats] = useState<{ correct: number; total: number }>({ correct: 0, total: 0 });
  const [readingCurrentModule, setReadingCurrentModule] = useState<"module1" | "module2_easy" | "module2_hard">("module1");
  const [readingFlaggedSteps, setReadingFlaggedSteps] = useState<Set<string>>(new Set());

  // --- Listening State ---
  // (State declarations will be added here via replacement)
  const [listeningQuestions, setListeningQuestions] = useState<any[]>([]);
  const [listeningCurrentIndex, setListeningCurrentIndex] = useState(0);
  const [listeningSubIndex, setListeningSubIndex] = useState(0);
  const [listeningAnswers, setListeningAnswers] = useState<ListeningAnswer[]>([]);
  const [listeningTimeLeft, setListeningTimeLeft] = useState(0);
  const [listeningCurrentModule, setListeningCurrentModule] = useState<1 | 2>(1);

  // Audio State for Listening
  const [listeningIsPlaying, setListeningIsPlaying] = useState(false);
  const [listeningIsPreloading, setListeningIsPreloading] = useState(false);
  const [listeningAudioPlayed, setListeningAudioPlayed] = useState(false);
  const [listeningAudioProgress, setListeningAudioProgress] = useState(0);
  const [listeningAudioSegments, setListeningAudioSegments] = useState<{ text: string, voice: VoiceType }[]>([]);
  const [listeningSegmentIndex, setListeningSegmentIndex] = useState(0);
  const listeningAudioRef = useRef<HTMLAudioElement | null>(null);

  // --- Speaking State ---
  const [speakingScenario, setSpeakingScenario] = useState<ListenRepeatScenario | null>(null);
  const [speakingInterview, setSpeakingInterview] = useState<InterviewTopic | null>(null);
  const [speakingSentenceIndex, setSpeakingSentenceIndex] = useState(0);
  const [speakingSentenceProgress, setSpeakingSentenceProgress] = useState<SpeakingSentenceProgress[]>([]);
  const [speakingInterviewIndex, setSpeakingInterviewIndex] = useState(0);
  const [speakingInterviewAnswers, setSpeakingInterviewAnswers] = useState<SpeakingInterviewAnswer[]>([]);
  const [speakingTimeLeft, setSpeakingTimeLeft] = useState(480);
  const [speakingIsRecording, setSpeakingIsRecording] = useState(false);
  const [speakingRecordingTime, setSpeakingRecordingTime] = useState(0);
  const [speakingMaxRecordingTime, setSpeakingMaxRecordingTime] = useState(12);
  const [speakingStage, setSpeakingStage] = useState<"waiting" | "playing" | "preparing" | "recording">("waiting");
  const speakingMediaRecorderRef = useRef<MediaRecorder | null>(null);
  const speakingChunksRef = useRef<Blob[]>([]);
  const speakingEvalPromisesRef = useRef<Promise<void>[]>([]);
  const speakingAudioRef = useRef<HTMLAudioElement | null>(null);


  // --- Writing State ---
  const [writingTasks, setWritingTasks] = useState<(BuildASentenceItem | EmailTask | AcademicDiscussionTask)[]>([]);
  /** Build a Sentence answers: item id -> (slot index -> tile text). */
  const [writingPlacements, setWritingPlacements] = useState<Record<string, Record<number, string | null>>>({});
  const [writingCurrentIndex, setWritingCurrentIndex] = useState(0);
  const [writingAnswers, setWritingAnswers] = useState<WritingAnswer[]>([]);
  const [writingCurrentText, setWritingCurrentText] = useState("");
  const [writingTimeLeft, setWritingTimeLeft] = useState(0);
  const [writingStartTime, setWritingStartTime] = useState(0);

  // Listening finishes before startWritingSection is declared, so the entry
  // point is reached through a ref rather than reordering the whole component.
  const startWritingSectionRef = useRef<(() => void) | null>(null);
  const startSpeakingSectionRef = useRef<(() => void) | null>(null);

  // --- Reading Logic ---

  const flattenReadingQuestions = useCallback((items: ReadingQuestionItem[]): ReadingStep[] => {
    const flatSteps: ReadingStep[] = [];
    items.forEach(item => {
      if (item.taskType === "complete_words") {
        flatSteps.push({
          id: item.id,
          stepType: "complete_words",
          parentTaskType: "complete_words",
          data: item,
          passageContent: item.passage,
          parentId: item.id
        });
      } else if (item.taskType === "daily_life" || item.taskType === "academic") {
        const parent = item as DailyLifeQuestion | AcademicQuestion;
        parent.questions.forEach(q => {
          flatSteps.push({
            id: q.id,
            stepType: "multiple_choice",
            parentTaskType: item.taskType,
            data: { ...q, passageId: item.id },
            passageContent: item.passage,
            passageTitle: (item as AcademicQuestion).title,
            parentId: item.id
          });
        });
      }
    });
    return flatSteps;
  }, []);

  const renderTextWithFormatting = (text: string) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-white font-bold">{part.substring(2, part.length - 2)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  const startTest = useCallback(() => {
    // Router module: 33 items (20 Complete the Words gaps, 8 daily-life items,
    // 5 academic items), assembled to the blueprint's ITEM counts.
    const form = buildReadingRouter();
    readingFormRef.current = form;
    if (form.router.shortfall.length) {
      console.warn("[Reading form] bank shortfall:", form.router.shortfall);
    }

    setReadingSteps(flattenReadingQuestions(form.router.items));
    setReadingCurrentIndex(0);
    setReadingAnswers({});
    setReadingTimeLeft(SECTIONS.reading.timing.routerSeconds ?? READING_CONFIG.MODULE1_TIME);
    setReadingCurrentModule("module1");
    setReadingFlaggedSteps(new Set());
    setTestState("reading_module1");
  }, [flattenReadingQuestions]);

  const handleReadingAnswer = useCallback((val: any) => {
    const step = readingSteps[readingCurrentIndex];

    let pointsEarned = 0;
    let pointsPossible = 1;

    if (step.stepType === "multiple_choice") {
      pointsEarned = val === step.data.correctAnswer ? 1 : 0;
    } else if (step.stepType === "complete_words") {
      const blanks = (step.data as CompleteWordsQuestion).blanks;
      const userBlanks = (val ?? {}) as Record<number, string>;
      pointsPossible = blanks.length;
      pointsEarned = blanks.reduce((total, b) => {
        const typed = (userBlanks[b.position] || "").toLowerCase().trim();
        const answer = b.answer.toLowerCase().trim();
        const stem = b.partialWord.replace(/_+/g, "").toLowerCase();
        // Accept the whole word or just the letters the test taker had to supply.
        return total + (typed === answer || typed === answer.slice(stem.length) ? 1 : 0);
      }, 0);
    }

    setReadingAnswers(prev => ({
      ...prev,
      [step.id]: {
        stepId: step.id,
        value: val,
        isCorrect: pointsEarned === pointsPossible,
        pointsEarned,
        pointsPossible,
        timeSpent: (prev[step.id]?.timeSpent || 0)
      }
    }));
  }, [readingSteps, readingCurrentIndex]);

  const generateListeningQuestions = useCallback((config: any) => {
    const selected: any[] = [];
    const shuffledCR = [...chooseResponseItems].sort(() => Math.random() - 0.5);
    const shuffledConv = [...conversationScenarios].sort(() => Math.random() - 0.5);
    const shuffledAnn = [...announcementScenarios].sort(() => Math.random() - 0.5);
    const shuffledAT = [...academicTalkScenarios].sort(() => Math.random() - 0.5);

    for (let i = 0; i < config.chooseResponse && i < shuffledCR.length; i++) selected.push({ type: "choose_response", data: shuffledCR[i] });
    for (let i = 0; i < config.conversation && i < shuffledConv.length; i++) selected.push({ type: "conversation", data: shuffledConv[i] });
    for (let i = 0; i < config.announcement && i < shuffledAnn.length; i++) selected.push({ type: "announcement", data: shuffledAnn[i] });
    for (let i = 0; i < config.academicTalk && i < shuffledAT.length; i++) selected.push({ type: "academic_talk", data: shuffledAT[i] });

    return selected.sort(() => Math.random() - 0.5);
  }, []);

  const startListeningSection = useCallback(() => {
    // Router module: 29 items (9 single-response + 3 conversations + 3
    // announcements + 2 academic talks). Stimulus counts are derived from the
    // blueprint's ITEM counts, because a conversation is two items and a talk
    // is four — selecting "2 conversations" and calling it 2 questions is how
    // the section drifted to roughly a third of its real length.
    const qs = generateListeningQuestions({
      chooseResponse: LISTENING_PLAN.router.listen_and_choose_a_response,
      conversation: LISTENING_PLAN.router.listen_to_a_conversation / ITEMS_PER_STIMULUS.conversation,
      announcement: LISTENING_PLAN.router.listen_to_an_announcement / ITEMS_PER_STIMULUS.announcement,
      academicTalk: LISTENING_PLAN.router.listen_to_an_academic_talk / ITEMS_PER_STIMULUS.academic_talk,
    });
    setListeningQuestions(qs);
    setListeningCurrentIndex(0);
    setListeningSubIndex(0);
    setListeningAnswers([]);
    setListeningCurrentModule(1);
    setListeningTimeLeft(SECTIONS.listening.timing.routerSeconds ?? 18 * 60);
    setListeningIsPlaying(false);
    setListeningAudioPlayed(false);
    setTestState("listening_module1");
  }, [generateListeningQuestions]);

  const handleListeningModuleTimeout = useCallback(() => {
    if (listeningCurrentModule === 1) {
      const correct = listeningAnswers.filter(a => a.isCorrect).length;
      const track = routeToModule(correct, listeningAnswers.length);
      const isHard = track === "upper";

      // Both routes deliver 18 further items for 47 in total. The upper module
      // carries two extra academic talks, which is what its longer clock buys;
      // the lower module is weighted to short single-response items instead.
      const plan = LISTENING_PLAN[track];
      const qs = generateListeningQuestions({
        chooseResponse: plan.listen_and_choose_a_response,
        conversation: plan.listen_to_a_conversation / ITEMS_PER_STIMULUS.conversation,
        announcement: plan.listen_to_an_announcement / ITEMS_PER_STIMULUS.announcement,
        academicTalk: plan.listen_to_an_academic_talk / ITEMS_PER_STIMULUS.academic_talk,
      });
      setListeningQuestions(qs);
      setListeningCurrentIndex(0);
      setListeningSubIndex(0);
      setListeningCurrentModule(2);
      setListeningTimeLeft(moduleSeconds("listening", track));
      setListeningAudioPlayed(false);
      setTestState("listening_module2");
    } else {
      // Writing follows Listening. The 2026 test has no scheduled break — the
      // 10-minute break the old format placed here was removed.
      startWritingSectionRef.current?.();
    }
  }, [listeningCurrentModule, listeningAnswers, generateListeningQuestions]);

  const finishReadingModule2 = useCallback(async () => {
    // Evaluation happens at end of test or we can store it now
    // We'll just transition to Listening
    startListeningSection();
  }, [startListeningSection]);

  const finishReadingModule1 = useCallback(() => {
    // Route on POINTS, not on steps answered. A Complete the Words paragraph is
    // ten scored items; counting it as one step would let a single paragraph
    // swing the routing decision as much as ten multiple-choice items.
    const stepIds = readingSteps.map(s => s.id);
    const moduleAnswers = stepIds.map(id => readingAnswers[id]).filter(Boolean);
    const earned = moduleAnswers.reduce((t, a) => t + a.pointsEarned, 0);
    const possible = readingSteps.reduce(
      (t, step) => t + (step.stepType === "complete_words" ? (step.data as CompleteWordsQuestion).blanks.length : 1),
      0
    );

    setReadingModule1Stats({ correct: earned, total: possible });

    const track = routeToModule(earned, possible);
    const isHard = track === "upper";

    // Second module: 17 further items, drawn from stimuli the router did not use.
    const form = readingFormRef.current ?? buildReadingRouter();
    const module2 = buildReadingSecondModule(form, track);
    if (module2.shortfall.length) {
      console.warn("[Reading form] bank shortfall:", module2.shortfall);
    }

    setReadingSteps(flattenReadingQuestions(module2.items));
    setReadingCurrentIndex(0);
    setReadingCurrentModule(isHard ? "module2_hard" : "module2_easy");
    setReadingTimeLeft(moduleSeconds("reading", track));
    setReadingFlaggedSteps(new Set());

    setTestState("reading_interim");
  }, [readingSteps, readingAnswers, flattenReadingQuestions]);

  const handleReadingModuleTimeout = useCallback(() => {
    if (testState === "reading_module1") finishReadingModule1();
    else finishReadingModule2();
  }, [testState, finishReadingModule1, finishReadingModule2]);

  // --- Listening Logic Helpers ---

  const parseTranscript = useCallback((transcript: string, speakers: { role: string; voice: VoiceType }[]) => {
    const lines = transcript.split("\n").filter(l => l.trim().length > 0);
    return lines.map(line => {
      const match = line.match(/^([^:]+):\s*(.*)$/);
      if (match) {
        const roleName = match[1].trim();
        const text = match[2].trim();
        const speaker = speakers.find(s => s.role.toLowerCase() === roleName.toLowerCase());
        return { text, voice: speaker?.voice || speakers[0]?.voice || "narrator" };
      }
      return { text: line.trim(), voice: speakers[0]?.voice || "narrator" };
    });
  }, []);

  const getAudioSegments = useCallback((question: any): { text: string; voice: VoiceType }[] => {
    switch (question.type) {
      case "choose_response":
        return [{ text: question.data.audioText, voice: question.data.voice }];
      case "conversation":
        return parseTranscript(question.data.transcript, question.data.speakers);
      case "announcement":
        return [{ text: question.data.transcript, voice: question.data.voice }];
      case "academic_talk":
        const studentVoice = question.data.voice.includes("female") ? "male_student" : "female_student_2";
        const speakers = [{ role: "Professor", voice: question.data.voice as VoiceType }, { role: "Student", voice: studentVoice as VoiceType }];
        return parseTranscript(question.data.transcript, speakers);
      default:
        return [];
    }
  }, [parseTranscript]);

  const playAudioSegments = useCallback(async (segments: { text: string; voice: VoiceType }[]) => {
    setListeningIsPlaying(true);
    setListeningIsPreloading(true);
    setListeningAudioSegments(segments);
    setListeningSegmentIndex(0);

    try {
      // Preload all
      const urls = await Promise.all(segments.map(s => generateAudio(s.text, { voice: s.voice })));
      setListeningIsPreloading(false);

      for (let i = 0; i < urls.length; i++) {
        setListeningSegmentIndex(i);
        const audio = new Audio(urls[i]);
        listeningAudioRef.current = audio;

        await new Promise<void>((resolve, reject) => {
          audio.onended = () => resolve();
          audio.onerror = (e) => reject(e);
          audio.ontimeupdate = () => {
            if (audio.duration) {
              const totalP = ((i + (audio.currentTime / audio.duration)) / urls.length) * 100;
              setListeningAudioProgress(totalP);
            }
          };
          audio.play().catch(reject);
        });

        // Small pause between segments
        if (i < urls.length - 1) await new Promise(r => setTimeout(r, 400));
      }

      setListeningIsPlaying(false);
      setListeningAudioPlayed(true);
      setListeningAudioProgress(100);

    } catch (error) {
      console.error("Audio playback error", error);
      setListeningIsPreloading(false);
      setListeningIsPlaying(false);
      setListeningAudioPlayed(true);
    }
  }, []);





  const handleListeningAnswer = useCallback((option: string) => {
    const currentQ = listeningQuestions[listeningCurrentIndex];
    const isCorrect = currentQ.type === "choose_response"
      ? option === currentQ.data.correctAnswer
      : option === currentQ.data.questions[listeningSubIndex].correctAnswer;

    setListeningAnswers(prev => [...prev, {
      questionId: currentQ.type === "choose_response" ? currentQ.data.id : `${currentQ.data.id}_Q${listeningSubIndex}`,
      taskType: currentQ.type,
      selectedOption: option,
      isCorrect
    }]);

    // Advance Logic
    setTimeout(() => {
      let hasMoreSub = false;
      if (currentQ.type !== "choose_response") {
        hasMoreSub = listeningSubIndex < currentQ.data.questions.length - 1;
      }

      if (hasMoreSub) {
        setListeningSubIndex(prev => prev + 1);
      } else if (listeningCurrentIndex < listeningQuestions.length - 1) {
        setListeningCurrentIndex(prev => prev + 1);
        setListeningSubIndex(0);
        setListeningAudioPlayed(false);
        setListeningAudioProgress(0);
        setListeningAudioSegments([]);
      } else {
        handleListeningModuleTimeout();
      }
    }, 300);
  }, [listeningQuestions, listeningCurrentIndex, listeningSubIndex, handleListeningModuleTimeout]);



  // --- Writing Logic Helpers ---

  /** Build a Sentence items carry `parts`; the essay tasks carry `type`. */
  const isBuildASentence = (task: BuildASentenceItem | EmailTask | AcademicDiscussionTask): task is BuildASentenceItem =>
    "parts" in task;

  const startWritingSection = useCallback(() => {
    setTestState("writing_intro");

    // The Writing section is 12 items: ten Build a Sentence items, one email and
    // one academic discussion (ETS blueprint). The previous build delivered a
    // single Build a Sentence item, which is a tenth of the real task.
    const pick = <T,>(pool: readonly T[], n: number): T[] =>
      [...pool].sort(() => Math.random() - 0.5).slice(0, n);

    setWritingTasks([
      ...pick(buildASentenceItems, WRITING_PLAN.build_a_sentence.items),
      ...pick(emailTasks, 1),
      ...pick(academicDiscussionTasks, 1),
    ]);
  }, []);

  /**
   * Build a Sentence runs on ONE pooled 6:50 clock across all ten items rather
   * than a per-item timer; the email and the discussion each get their own.
   * Starting an item mid-block must therefore leave the clock running.
   */
  const startWritingTask = useCallback((index: number) => {
    setWritingCurrentText("");
    setWritingStartTime(Date.now());

    const buildSentenceCount = WRITING_PLAN.build_a_sentence.items;
    if (index === 0) {
      setWritingTimeLeft(WRITING_PLAN.build_a_sentence.seconds);
    } else if (index < buildSentenceCount) {
      // Pooled block already running — do not reset.
    } else if (index === buildSentenceCount) {
      setWritingTimeLeft(WRITING_PLAN.write_an_email.seconds);
    } else {
      setWritingTimeLeft(WRITING_PLAN.write_for_an_academic_discussion.seconds);
    }
  }, []);

  startWritingSectionRef.current = startWritingSection;

  const startWritingPractice = useCallback(() => {
    setTestState("writing_practice");
    setWritingCurrentIndex(0);
    setWritingAnswers([]);
    startWritingTask(0);
  }, [startWritingTask]);

  const finishWritingSection = useCallback(() => {
    // Speaking is the final section of the 2026 test.
    startSpeakingSectionRef.current?.();
  }, []);

  const handleWritingSubmit = useCallback(async () => {
    const tasks = writingTasks;
    const currentTask = tasks[writingCurrentIndex];

    // Build a Sentence is machine scored, all-or-nothing, and never goes to the
    // AI evaluator — the exam awards 1 point only when every tile is in the
    // right slot.
    if (isBuildASentence(currentTask)) {
      const placed = writingPlacements[currentTask.id] ?? {};
      const correct = scoreBuildASentence(currentTask, placed);
      setWritingAnswers(prev => [...prev, {
        questionId: currentTask.id,
        taskType: "build_sentence",
        text: currentTask.parts
          .map((part, i) => (currentTask.lockedIndices.includes(i) ? part : placed[i] ?? ""))
          .join(" ")
          .replace(/\s+([.?!,;:])/g, "$1")
          .trim(),
        wordCount: 0,
        timeSpent: Math.floor((Date.now() - writingStartTime) / 1000),
        evaluation: { machineScored: true, correct, points: correct ? 1 : 0, maxPoints: 1 },
      }]);

      if (writingCurrentIndex < tasks.length - 1) {
        setWritingCurrentIndex(prev => prev + 1);
        startWritingTask(writingCurrentIndex + 1);
      } else {
        finishWritingSection();
      }
      return;
    }

    const answer: WritingAnswer = {
      questionId: `writing_${writingCurrentIndex}`,
      taskType: currentTask.type,
      text: writingCurrentText,
      wordCount: writingCurrentText.trim().split(/\s+/).filter(Boolean).length,
      timeSpent: Math.floor((Date.now() - writingStartTime) / 1000),
      evaluation: null
    };

    const newAnswers = [...writingAnswers, answer];
    setWritingAnswers(newAnswers);

    // AI Evaluation if not empty
    if (writingCurrentText.trim()) {
      fetch("/api/evaluate/writing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: writingCurrentText,
          taskType: currentTask.type,
          prompt: currentTask.type === "email" ? currentTask.emailPrompt : currentTask.topic,
        }),
      }).then(res => res.json()).then(evaluation => {
        setWritingAnswers(prev => prev.map(a => a.questionId === answer.questionId ? { ...a, evaluation } : a));
        setEvaluations(prev => [...prev, {
          section: `Writing ${currentTask.type}`,
          bandScore: (evaluation.overall_score / 5) * 30,
          scaledScore: evaluation.overall_score,
          feedback: evaluation.feedback?.content_notes || "Evaluation completed",
          strengths: evaluation.feedback?.strengths || [],
          improvements: evaluation.feedback?.improvements || [],
          details: evaluation
        }]);
      }).catch(e => console.error("Writing evaluation error", e));
    }

    if (writingCurrentIndex < tasks.length - 1) {
      setWritingCurrentIndex(prev => prev + 1);
      startWritingTask(writingCurrentIndex + 1);
    } else {
      finishWritingSection();
    }
  }, [writingTasks, writingCurrentIndex, writingCurrentText, writingStartTime, writingAnswers, writingPlacements, startWritingTask, finishWritingSection]);

  /**
   * The ten Build a Sentence items share one clock, so when it expires the whole
   * block ends and the remaining items are forfeited — advancing to the next
   * item would hand back time the test taker no longer has.
   */
  const handleWritingTaskTimeout = useCallback(() => {
    const buildSentenceCount = WRITING_PLAN.build_a_sentence.items;
    if (writingCurrentIndex < buildSentenceCount - 1) {
      setWritingCurrentIndex(buildSentenceCount);
      startWritingTask(buildSentenceCount);
      return;
    }
    handleWritingSubmit();
  }, [writingCurrentIndex, startWritingTask, handleWritingSubmit]);

  const startSpeakingSection = useCallback(() => {
    // Pick random content
    const scenario = listenRepeatScenarios[Math.floor(Math.random() * listenRepeatScenarios.length)];
    const interview = interviewTopics[Math.floor(Math.random() * interviewTopics.length)];

    setSpeakingScenario(scenario);
    setSpeakingInterview(interview);
    setSpeakingSentenceIndex(0);
    setSpeakingInterviewIndex(0);
    setSpeakingSentenceProgress(scenario.sentences.map((_: any, i: number) => ({ index: i, audioPlayed: false, recorded: false, score: null, transcript: "" })));
    setSpeakingInterviewAnswers(interview.questions.map((_: any, i: number) => ({ questionIndex: i, audioBlob: null, audioUrl: null, score: null, evaluationResult: null })));

    setTestState("speaking_intro");
    setSpeakingTimeLeft(SECTIONS.speaking.timing.totalSeconds ?? 480);
  }, []);

  startSpeakingSectionRef.current = startSpeakingSection;

  const playSpeakingPrompt = useCallback(async (index: number) => {
    if (!speakingScenario) return;
    setSpeakingSentenceIndex(index);
    setSpeakingStage("playing");

    const sentence = speakingScenario.sentences[index];
    try {
      const url = await generateAudio(sentence, { voice: "alloy" });
      const audio = new Audio(url);
      speakingAudioRef.current = audio;
      audio.onended = () => {
        setSpeakingStage("recording");
        setSpeakingRecordingTime(0);
        // The response window widens as the sentences get longer:
        // 8s for items 1-2, 10s for 3-5, 12s for 6-7.
        setSpeakingMaxRecordingTime(LISTEN_AND_REPEAT.responseWindowSeconds[index] ?? 10);
        startSpeakingRecording();
      };
      audio.play();
    } catch (e) {
      console.error("Audio gen error", e);
      setSpeakingStage("recording");
      startSpeakingRecording();
    }
  }, [speakingScenario]);

  const startSpeakingPractice = useCallback(() => {
    setTestState("speaking_listen_repeat");
    setSpeakingTimeLeft(480);
    setSpeakingStage("waiting");
    setTimeout(() => playSpeakingPrompt(0), 1000);
  }, [playSpeakingPrompt]);

  const startSpeakingRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      speakingMediaRecorderRef.current = recorder;
      speakingChunksRef.current = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) speakingChunksRef.current.push(e.data);
      };

      recorder.onstop = async () => {
        const blob = new Blob(speakingChunksRef.current, { type: 'audio/webm' });
        handleSpeakingRecordingComplete(blob);
        stream.getTracks().forEach(track => track.stop());
      };

      recorder.start();
      setSpeakingIsRecording(true);
      setSpeakingStage("recording");

    } catch (e) {
      console.error("Mic error", e);
      setSpeakingStage("waiting"); // Fail safe
    }
  }, []);

  const stopSpeakingRecording = useCallback(() => {
    if (speakingMediaRecorderRef.current && speakingMediaRecorderRef.current.state !== 'inactive') {
      speakingMediaRecorderRef.current.stop();
      setSpeakingIsRecording(false);
    }
  }, []);

  const playInterviewQuestion = useCallback(async (index: number) => {
    if (!speakingInterview) return;
    const q = speakingInterview.questions[index];
    setSpeakingStage("playing");
    setSpeakingInterviewIndex(index);

    try {
      const url = await generateAudio(q.question, { voice: "alloy" });
      const audio = new Audio(url);
      speakingAudioRef.current = audio;
      audio.onended = () => {
        setSpeakingStage("recording");
        setSpeakingRecordingTime(0);
        setSpeakingMaxRecordingTime(TAKE_AN_INTERVIEW.responseSeconds);
        startSpeakingRecording();
      };
      audio.play();
    } catch (e) {
      console.error("Audio error", e);
      setSpeakingStage("recording");
      startSpeakingRecording();
    }
  }, [speakingInterview, startSpeakingRecording]);

  const finishSpeakingSection = useCallback(() => {
    // Speaking is last, so finishing it ends the test.
    setTestState("evaluating");
  }, []);

  const startSpeakingInterview = useCallback(() => {
    setTestState("speaking_interview");
    setSpeakingTimeLeft(TAKE_AN_INTERVIEW.items * TAKE_AN_INTERVIEW.responseSeconds);
    playInterviewQuestion(0);
  }, [playInterviewQuestion]);

  const handleSpeakingRecordingComplete = useCallback(async (blob: Blob) => {
    if (testState === "speaking_listen_repeat") {
      // Eval Repeats
      if (speakingScenario) {
        const sentence = speakingScenario.sentences[speakingSentenceIndex];
        // Trigger background eval
        evaluateSpeaking(blob, "repeat", "Repeat the sentence accurately", sentence, 10).then((res: any) => {
          const score = res.overall_score || res.overallScore || 0;
          setSpeakingSentenceProgress(prev => prev.map(p => p.index === speakingSentenceIndex ? { ...p, score: score, evaluationResult: res } : p));
          setEvaluations(prev => [...prev, {
            section: `Speaking Rep ${speakingSentenceIndex}`,
            bandScore: (score / 100) * 30, // Rough map
            scaledScore: score,
            feedback: (typeof res.feedback === 'string' ? res.feedback : JSON.stringify(res.feedback)) || "Completed",
            strengths: [],
            improvements: []
          }]);
        });

        // Move next
        setSpeakingSentenceProgress(prev => prev.map(p => p.index === speakingSentenceIndex ? { ...p, recorded: true, audioBlob: blob } : p));

        if (speakingSentenceIndex < speakingScenario.sentences.length - 1) {
          setTimeout(() => playSpeakingPrompt(speakingSentenceIndex + 1), 1000);
        } else {
          // Move to Interview
          setSpeakingStage("waiting");
          setTimeout(startSpeakingInterview, 2000);
        }
      }
    } else if (testState === "speaking_interview") {
      // Eval Interview
      if (speakingInterview) {
        const qObj = speakingInterview.questions[speakingInterviewIndex];
        evaluateSpeaking(blob, "interview", qObj.question, undefined, 45).then((res: any) => {
          const score = res.overall_score || res.overallScore || 0;
          setSpeakingInterviewAnswers(prev => prev.map(a => a.questionIndex === speakingInterviewIndex ? { ...a, score: score, evaluationResult: res } : a));
        });

        setSpeakingInterviewAnswers(prev => prev.map(a => a.questionIndex === speakingInterviewIndex ? { ...a, audioBlob: blob } : a));

        if (speakingInterviewIndex < speakingInterview.questions.length - 1) {
          setSpeakingInterviewIndex(prev => prev + 1);
          setTimeout(() => playInterviewQuestion(speakingInterviewIndex + 1), 1000);
        } else {
          finishSpeakingSection();
        }
      }
    }
  }, [testState, speakingScenario, speakingSentenceIndex, speakingInterview, speakingInterviewIndex, playSpeakingPrompt, startSpeakingInterview, playInterviewQuestion, finishSpeakingSection]);

  // --- Writing Logic Helpers ---





  // --- Format Time Helper ---
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // --- Timers (Effects) ---
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (testState.startsWith("reading") && testState !== "reading_interim" && readingTimeLeft > 0) {
      interval = setInterval(() => {
        setReadingTimeLeft(prev => {
          if (prev <= 1) {
            handleReadingModuleTimeout();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [testState, readingTimeLeft, handleReadingModuleTimeout]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (testState.startsWith("listening") && listeningTimeLeft > 0 && !listeningIsPlaying) {
      interval = setInterval(() => {
        setListeningTimeLeft(prev => {
          if (prev <= 1) {
            handleListeningModuleTimeout();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [testState, listeningTimeLeft, listeningIsPlaying, handleListeningModuleTimeout]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (testState.startsWith("speaking") && speakingTimeLeft > 0) {
      interval = setInterval(() => {
        setSpeakingTimeLeft(prev => Math.max(0, prev - 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [testState, speakingTimeLeft]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (testState === "writing_practice" && writingTimeLeft > 0) {
      interval = setInterval(() => {
        setWritingTimeLeft(prev => {
          if (prev <= 1) {
            handleWritingTaskTimeout();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [testState, writingTimeLeft, handleWritingTaskTimeout]);

  // Speaking Recording Timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (speakingIsRecording && speakingRecordingTime < speakingMaxRecordingTime) {
      interval = setInterval(() => {
        setSpeakingRecordingTime(prev => {
          if (prev >= speakingMaxRecordingTime - 1) {
            stopSpeakingRecording();
            return prev + 1;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [speakingIsRecording, speakingRecordingTime, speakingMaxRecordingTime, stopSpeakingRecording]);

  // --- Render ---

  if (testState === "intro") {
    return (
      <div className="h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel rounded-panel p-8 h-full flex flex-col"
        >
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <div className="glass-plate w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-6 h-6 text-emerald-400 animate-pulse" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Full TOEFL Practice Test</h1>
            <p className="text-slate-400">Official 2026 Format • Adaptive Testing • AI Evaluation</p>
            <p className="text-xs text-slate-500 mt-2">120 items • about 1 hr 25 min • no scheduled breaks</p>
          </div>

          <div className="space-y-3 mb-8">
            {[
              // Reading -> Listening -> Writing -> Speaking, with no break. This is
              // the delivery order of the 2026 test; Speaking is last.
              { icon: BookOpen, name: "Reading", desc: "50 items • ~30 min • adaptive", gradient: "from-amber-400 to-orange-500" },
              { icon: Headphones, name: "Listening", desc: "47 items • ~29 min • adaptive", gradient: "from-pink-400 to-rose-500" },
              { icon: PenTool, name: "Writing", desc: "12 items • ~23 min", gradient: "from-cyan-400 to-teal-500" },
              { icon: Mic, name: "Speaking", desc: "11 items • ~8 min", gradient: "from-violet-400 to-purple-500" },
            ].map((section, i) => (
              <motion.div
                key={section.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className="flex items-center gap-4 p-4 rounded-panel glass-card"
              >
                <div className={`glass-plate w-12 h-12 rounded-full ${section.gradient} flex items-center justify-center shadow-lg`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-white">{section.name}</h3>
                  <p className="text-sm text-slate-400">{section.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={startTest}
              className="bg-platform-500 w-full px-6 py-4 text-white rounded-panel transition-all flex items-center justify-center gap-2 shadow-lg font-board uppercase tracking-[0.14em] font-bold"
            >
              Start Full Test
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Reading Renderer
  if (testState === "reading_module1" || testState === "reading_module2") {
    const currentStep = readingSteps[readingCurrentIndex];
    const currentAnswer = readingAnswers[currentStep.id]?.value;
    const isFlagged = readingFlaggedSteps.has(currentStep.id);

    return (
      <div className="min-h-[calc(100vh-4rem)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-panel ${readingCurrentModule === "module1" ? "bg-amber-500/20 border-amber-500/30 text-amber-400" :
 readingCurrentModule === "module2_hard" ? "bg-platform-500/20 border-platform-500/30 text-platform-400" :
 "bg-amber-500/20 border-amber-500/30 text-amber-400"
 } font-board uppercase tracking-[0.14em] font-bold`}>
              <span className="text-sm font-medium capitalize">
                {readingCurrentModule === "module1" ? "Reading Module 1" :
                  readingCurrentModule === "module2_hard" ? "Reading Module 2 (Hard)" : "Reading Module 2 (Easy)"}
              </span>
            </div>
            {/* Progress Dots */}
            <div className="flex items-center gap-1">
              {readingSteps.slice(0, 20).map((_, idx) => (
                <div key={idx} className={`w-2 h-2 rounded-full ${idx === readingCurrentIndex ? "bg-amber-400 scale-125" : readingAnswers[readingSteps[idx]?.id] ? "bg-platform-500" : "bg-steel-700"}`} />
              ))}
            </div>
          </div>
          {/* Timer */}
          <div className={`flex items-center gap-2 px-4 py-2 rounded-panel border ${readingTimeLeft < 60 ? "bg-signal-500/20 border-signal-500/30 text-signal-400" : "glass-card border-white/10 text-white"} font-board uppercase tracking-[0.14em] font-bold`}>
            <Clock className="w-4 h-4" />
            <span className="font-mono">{formatTime(readingTimeLeft)}</span>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-12rem)]">
          {/* Left Panel */}
          <div className="glass-panel rounded-panel p-6 overflow-y-auto">
            {currentStep.stepType === "complete_words" ? (
              <div className="leading-loose text-lg text-slate-300">
                {/*
                  Complete the Words is a C-test: the visible stem is followed by a
                  fixed-width blank and a free-text field.

                  The blank is deliberately fixed-width. The previous renderer drew
                  one character box per missing letter, which told the test taker
                  exactly how long the answer was — a hint the real test is not
                  confirmed to give, and one that made this task materially easier
                  here than on test day.
                */}
                {(() => {
                  const question = currentStep.data as CompleteWordsQuestion;
                  const userBlanks = (currentAnswer as Record<number, string>) || {};
                  let lastIndex = 0;
                  const elements: JSX.Element[] = [];

                  question.blanks.forEach((blank, idx) => {
                    const partial = blank.partialWord;
                    const start = question.passage.indexOf(partial, lastIndex);
                    if (start === -1) return;

                    elements.push(<span key={`txt-${idx}`}>{renderTextWithFormatting(question.passage.substring(lastIndex, start))}</span>);

                    const prefix = partial.replace(/_+/g, '');
                    const typed = (userBlanks[blank.position] || "").slice(prefix.length);

                    elements.push(
                      <span key={`input-${idx}`} className="inline-flex items-baseline mx-0.5">
                        <span className="text-cyan-400 font-semibold">{prefix}</span>
                        <input
                          type="text"
                          aria-label={`Complete the word beginning ${prefix}`}
                          autoComplete="off"
                          autoCorrect="off"
                          autoCapitalize="off"
                          spellCheck={false}
                          className="w-20 mx-0.5 px-1 bg-slate-800/40 border-b-2 border-slate-600 focus:border-cyan-400 focus:bg-cyan-500/10 outline-none text-white font-medium text-center transition-colors"
                          value={typed}
                          onChange={(e) => {
                            const letters = e.target.value.replace(/[^A-Za-z'-]/g, '').toLowerCase();
                            handleReadingAnswer({ ...userBlanks, [blank.position]: prefix + letters });
                          }}
                        />
                      </span>
                    );
                    lastIndex = start + partial.length;
                  });
                  elements.push(<span key="txt-end">{renderTextWithFormatting(question.passage.substring(lastIndex))}</span>);
                  return elements;
                })()}
              </div>
            ) : (
              <div className="prose prose-invert prose-sm max-w-none text-steel-300 whitespace-pre-wrap leading-relaxed">
                {renderTextWithFormatting(currentStep.passageContent)}
              </div>
            )}
          </div>

          {/* Right Panel */}
          <div className="glass-panel rounded-panel flex flex-col p-6">
            <div className="flex-1 overflow-y-auto">
              {currentStep.stepType === "complete_words" ? (
                <div className="text-center p-8">
                  <div className="glass-plate w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <PenTool className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Complete the Passage</h3>
                  <p className="text-steel-400">Type missing letters in the blanks.</p>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-lg font-semibold text-white">{currentStep.data.question}</h3>
                    <button onClick={() => {
                      const s = new Set(readingFlaggedSteps);
                      if (s.has(currentStep.id)) s.delete(currentStep.id); else s.add(currentStep.id);
                      setReadingFlaggedSteps(s);
                    }} className={`p-2 rounded-flap ${isFlagged ? "text-amber-400 bg-amber-400/10" : "text-amber-900"}`}>
                      <Flag className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="space-y-3">
                    {currentStep.data.options.map((option: string, idx: number) => {
                      const letter = String.fromCharCode(65 + idx);
                      const isSelected = currentAnswer === letter;
                      return (
                        <button key={idx} onClick={() => handleReadingAnswer(letter)}
                          className={`w-full text-left p-4 rounded-panel border transition-all ${isSelected ? "bg-amber-500/20 border-amber-500 text-white" : "bg-white/5 border-transparent text-steel-300 hover:bg-white/10"}`}>
                          <span className="font-bold mr-3">{letter}.</span>
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            {/* Navigation */}
            <div className="pt-6 border-t border-white/10 flex justify-between items-center">
              <button onClick={() => setReadingCurrentIndex(prev => Math.max(0, prev - 1))} disabled={readingCurrentIndex === 0} className="flex items-center gap-2 text-steel-400 hover:text-white disabled:opacity-50">
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>
              {readingCurrentIndex < readingSteps.length - 1 ? (
                <button onClick={() => setReadingCurrentIndex(prev => prev + 1)} className="bg-amber-400 flex items-center gap-2 px-6 py-3 text-concourse-deep rounded-panel font-board uppercase tracking-[0.14em] font-bold">
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button onClick={handleReadingModuleTimeout} className="bg-amber-400 flex items-center gap-2 px-6 py-3 text-concourse-deep rounded-panel font-board uppercase tracking-[0.14em] font-bold">
                  Finish Module <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Reading Interim
  if (testState === "reading_interim") {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="glass-panel p-12 rounded-panel text-center max-w-lg w-full">
          <CheckCircle className="w-16 h-16 text-platform-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Module 1 Complete</h2>
          <p className="text-steel-400 mb-8">Move on to the next module.</p>
          <button onClick={() => setTestState("reading_module2")} className="bg-amber-400 w-full px-6 py-4 text-concourse-deep rounded-panel font-board uppercase tracking-[0.14em] font-bold">
            Start Module 2
          </button>
        </div>
      </div>
    );
  }

  // Listening Renderer
  if (testState === "listening_module1" || testState === "listening_module2") {
    const currentQ = listeningQuestions[listeningCurrentIndex];
    if (!currentQ) return <Loader2 className="animate-spin text-white" />; // Safety

    const isSubQuestion = currentQ.type !== "choose_response";
    const qData = isSubQuestion ? currentQ.data.questions[listeningSubIndex] : currentQ.data;

    return (
      <div className="min-h-[calc(100vh-4rem)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-panel bg-amber-500/20 border-amber-500/30 text-amber-400`}>
              <Headphones className="w-4 h-4" />
              <span className="text-sm font-medium">Listening Module {listeningCurrentModule}</span>
            </div>
            <div className="flex items-center gap-1">
              {listeningQuestions.map((_, idx) => (
                <div key={idx} className={`w-2 h-2 rounded-full ${idx === listeningCurrentIndex ? "bg-amber-400 scale-125" : idx < listeningCurrentIndex ? "bg-platform-500" : "bg-steel-700"}`} />
              ))}
            </div>
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-panel border ${listeningTimeLeft < 60 ? "bg-signal-500/20 border-signal-500/30 text-signal-400" : "glass-card border-white/10 text-white"} font-board uppercase tracking-[0.14em] font-bold`}>
            <Clock className="w-4 h-4" />
            <span className="font-mono">{formatTime(listeningTimeLeft)}</span>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Audio Context Card */}
          <div className="glass-panel p-8 rounded-panel text-center relative overflow-hidden">
            <div className="relative z-10 w-full max-w-2xl mx-auto">
              <div className="glass-plate w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                {listeningIsPreloading ? <Loader2 className="w-10 h-10 text-white animate-spin" /> :
                  listeningIsPlaying ? <Volume2 className="w-10 h-10 text-white animate-pulse" /> :
                    <Headphones className="w-10 h-10 text-white" />}
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {listeningIsPreloading ? "Preparing Recording..." : listeningIsPlaying ? "Listening..." : (currentQ.type === "choose_response" ? "Listen and Choose" : currentQ.data.context || "Listen to the recording")}
              </h3>

              {!listeningAudioPlayed && !listeningIsPlaying && !listeningIsPreloading ? (
                <div className="space-y-4">
                  <p className="text-steel-400 mb-6">The audio will play automatically locally. Listen carefully as you can only hear it once.</p>
                  <button onClick={() => playAudioSegments(getAudioSegments(currentQ))} className="px-8 py-3 bg-white text-steel-900 font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
                    <Play className="w-5 h-5" /> Play Audio
                  </button>
                </div>
              ) : listeningIsPreloading ? (
                <div className="space-y-4 mt-8">
                  <div className="w-full h-2 bg-steel-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-amber-500"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    />
                  </div>
                  <p className="text-xs text-amber-400 animate-pulse font-medium uppercase tracking-widest">Generating High-Quality Dialogue...</p>
                </div>
              ) : listeningIsPlaying ? (
                <div className="w-full max-w-md mx-auto space-y-6 mt-8">
                  <div className="flex items-center justify-center gap-3">
                    <div className="flex items-center gap-1.5">
                      {[...Array(4)].map((_, i) => (
                        <motion.div key={i} className="w-1 h-4 bg-amber-400 rounded-full" animate={{ scaleY: [1, 2, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.1 }} />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                      Speaking: {listeningAudioSegments[listeningSegmentIndex]?.voice.replace(/_/g, " ").toUpperCase() || "NARRATOR"}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-amber-300 font-medium">
                    <span>Playing...</span>
                    <span>{Math.round(listeningAudioProgress)}%</span>
                  </div>
                  <div className="h-2 bg-steel-800 rounded-full overflow-hidden">
                    <motion.div className="h-full bg-amber-500" style={{ width: `${listeningAudioProgress}%` }} />
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2 text-platform-400 font-medium mt-4">
                  <CheckCircle className="w-5 h-5" /> Audio Complete
                </div>
              )}
            </div>
            {/* Background Viz */}
            {listeningIsPlaying && !listeningIsPreloading && (
              <div className="absolute inset-0 z-0 opacity-20 flex items-center justify-center gap-1 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <motion.div key={i} className="w-4 bg-amber-500" animate={{ height: [20, Math.random() * 100 + 50, 20] }} transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.05 }} />
                ))}
              </div>
            )}
          </div>

          {/* Question Area */}
          {(listeningAudioPlayed || (currentQ.type === "choose_response" && listeningAudioPlayed)) && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-panel p-8 rounded-panel">
              <h3 className="text-xl font-semibold text-white mb-6">
                {qData.question}
              </h3>
              <div className="grid gap-3">
                {(() => {
                  const opts = currentQ.type === "choose_response" ? (currentQ.data.responses || currentQ.data.options) : qData.options;
                  const safeOpts = opts && opts.length > 0 ? opts : ["Option A", "Option B", "Option C", "Option D"];
                  return safeOpts.map((opt: string, idx: number) => {
                    const letter = String.fromCharCode(65 + idx);
                    const qId = currentQ.type === "choose_response" ? currentQ.data.id : `${currentQ.data.id}_Q${listeningSubIndex}`;
                    const myAns = listeningAnswers.find(a => a.questionId === qId);
                    const isSelected = myAns?.selectedOption === letter;

                    return (
                      <button key={idx} onClick={() => handleListeningAnswer(letter)}
                        className={`w-full text-left p-4 rounded-panel transition-all flex items-center gap-4 group ${isSelected ? "bg-amber-500/20 border border-amber-500" : "glass-card border border-white/5 hover:bg-white/10"}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors border ${isSelected ? "bg-amber-500 text-white border-amber-500" : "bg-steel-800 text-steel-400 border-steel-700 group-hover:border-amber-500"}`}>
                          {letter}
                        </div>
                        <span className={`transition-colors ${isSelected ? "text-white" : "text-steel-300 group-hover:text-white"}`}>{opt}</span>
                      </button>
                    );
                  });
                })()}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    );
  }

  // Speaking Intro
  if (testState === "speaking_intro") {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="glass-panel p-12 rounded-panel text-center max-w-lg w-full">
          <Mic className="w-16 h-16 text-amber-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-2">Speaking Section</h2>
          <div className="space-y-4 mb-8 text-left">
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-panel">
              <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <h4 className="text-white font-medium">Listen & Repeat</h4>
                <p className="text-sm text-steel-400">Repeat 20 sentences accurately.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-panel">
              <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <h4 className="text-white font-medium">Interview</h4>
                <p className="text-sm text-steel-400">Answer 5 open-ended questions.</p>
              </div>
            </div>
          </div>
          <button onClick={startSpeakingPractice} className="bg-amber-400 w-full px-6 py-4 text-concourse-deep rounded-panel shadow-lg font-board uppercase tracking-[0.14em] font-bold">
            Start Speaking
          </button>
        </div>
      </div>
    );
  }

  // Speaking Task
  if (testState === "speaking_listen_repeat" || testState === "speaking_interview") {
    const isRepeat = testState === "speaking_listen_repeat";
    return (
      <div className="min-h-[calc(100vh-4rem)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-panel bg-amber-500/20 border-amber-500/30 text-amber-400">
              <Mic className="w-4 h-4" />
              <span className="text-sm font-medium">{isRepeat ? "Listen & Repeat" : "Interview"}</span>
            </div>
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-panel border ${speakingTimeLeft < 60 ? "bg-signal-500/20 border-signal-500/30 text-signal-400" : "glass-card border-white/10 text-white"} font-board uppercase tracking-[0.14em] font-bold`}>
            <Clock className="w-4 h-4" />
            <span className="font-mono">{formatTime(speakingTimeLeft)}</span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12 glass-panel p-12 rounded-panel text-center relative overflow-hidden">
          {/* Visualizer */}
          <div className="bg-amber-400 w-32 h-32 mx-auto mb-8 rounded-full flex items-center justify-center shadow-xl relative">
            {speakingStage === "playing" ? (
              <Volume2 className="w-12 h-12 text-white animate-pulse" />
            ) : speakingStage === "recording" ? (
              <div className="relative">
                <Mic className="w-12 h-12 text-white z-10 relative" />
                <motion.div className="absolute inset-0 bg-white rounded-full opacity-20" animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} />
              </div>
            ) : (
              <Loader2 className="w-12 h-12 text-white animate-spin" />
            )}
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">
            {speakingStage === "playing" ? "Listen Carefully..." : speakingStage === "recording" ? "Speak Now" : "Preparing..."}
          </h2>

          {speakingStage === "recording" && (
            <div className="w-64 h-2 bg-steel-800 rounded-full mx-auto overflow-hidden">
              <motion.div
                className="h-full bg-signal-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: speakingMaxRecordingTime, ease: "linear" }}
              />
            </div>
          )}

          <div className="mt-8 text-steel-400">
            {isRepeat ? `Sentence ${speakingSentenceIndex + 1} of ${speakingScenario?.sentences.length || 20}` : `Question ${speakingInterviewIndex + 1} of ${speakingInterview?.questions.length || 5}`}
          </div>
        </div>
      </div>
    );
  }

  // Writing Intro
  if (testState === "writing_intro") {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="glass-panel p-12 rounded-panel text-center max-w-lg w-full">
          <PenTool className="w-16 h-16 text-amber-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-2">Writing Section</h2>
          <p className="text-slate-400 mb-6">12 items, about 23 minutes. Each task has its own clock.</p>
          <div className="space-y-3 mb-8 text-left">
            {[
              { name: "Build a Sentence", detail: `${WRITING_PLAN.build_a_sentence.items} items on one shared 6:50 timer` },
              { name: "Write an Email", detail: "1 item, 7:00" },
              { name: "Write for an Academic Discussion", detail: "1 item, 10:00" },
            ].map((t, i) => (
              <div key={t.name} className="flex items-center gap-3 p-4 bg-white/5 rounded-panel">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                <div>
                  <span className="text-white font-medium">{t.name}</span>
                  <p className="text-xs text-slate-500">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <button onClick={startWritingPractice} className="bg-amber-400 w-full px-6 py-4 text-concourse-deep rounded-panel shadow-lg font-board uppercase tracking-[0.14em] font-bold">
            Start Writing
          </button>
        </div>
      </div>
    );
  }

  // Writing Practice
  if (testState === "writing_practice") {
    const task = writingTasks[writingCurrentIndex];
    return (
      <div className="min-h-[calc(100vh-4rem)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-panel bg-amber-500/20 border-amber-500/30 text-amber-400">
              <PenTool className="w-4 h-4" />
              <span className="text-sm font-medium">
                {isBuildASentence(task)
                  ? `Build a Sentence ${writingCurrentIndex + 1} of ${WRITING_PLAN.build_a_sentence.items}`
                  : task.type === "email"
                    ? "Write an Email"
                    : "Write for an Academic Discussion"}
              </span>
            </div>
            {isBuildASentence(task) && (
              <span className="text-xs text-slate-500">
                One timer covers all {WRITING_PLAN.build_a_sentence.items} sentences
              </span>
            )}
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-panel border ${writingTimeLeft < 60 ? "bg-signal-500/20 border-signal-500/30 text-signal-400" : "glass-card border-white/10 text-white"} font-board uppercase tracking-[0.14em] font-bold`}>
            <Clock className="w-4 h-4" />
            <span className="font-mono">{formatTime(writingTimeLeft)}</span>
          </div>
        </div>

        {isBuildASentence(task) ? (
          <div className="glass-panel p-6 rounded-panel max-w-3xl mx-auto">
            <BuildASentenceTask
              item={task}
              placed={writingPlacements[task.id] ?? {}}
              onChange={(placed) => setWritingPlacements(prev => ({ ...prev, [task.id]: placed }))}
            />
            <div className="pt-6 mt-6 border-t border-white/10 flex justify-end">
              <button onClick={handleWritingSubmit} className="px-6 py-2 bg-white text-slate-900 font-bold rounded-flap hover:bg-slate-200">
                {writingCurrentIndex < WRITING_PLAN.build_a_sentence.items - 1 ? "Next Sentence" : "Continue to Email"}
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-12rem)]">
            {/* Prompt */}
            <div className="glass-panel p-6 rounded-panel overflow-y-auto prose prose-invert max-w-none">
              {task.type === "email" && (
                <div className="space-y-4">
                  <h3 className="text-emerald-400 mt-0">Write an Email</h3>
                  <p className="text-lg text-white">{(task as EmailTask).scenario}</p>
                  <p className="text-slate-300">{(task as EmailTask).instructions}</p>
                  <div className="p-4 bg-black/30 rounded-flap text-sm text-emerald-300/80 whitespace-pre-wrap">
                    {(task as EmailTask).emailPrompt}
                  </div>
                </div>
              )}
              {task.type === "academic_discussion" && (
                <div className="space-y-4">
                  <h3 className="text-emerald-400 mt-0">Write for an Academic Discussion</h3>
                  <p className="text-slate-300">{(task as AcademicDiscussionTask).instructions}</p>
                  <div className="p-4 bg-purple-500/10 rounded-flap border border-purple-500/20">
                    <span className="text-xs font-bold text-purple-400">Professor {(task as AcademicDiscussionTask).professor.name}</span>
                    <p className="text-sm mt-1">{(task as AcademicDiscussionTask).professor.message}</p>
                  </div>
                  {(task as AcademicDiscussionTask).students.map((st, i) => (
                    <div key={i} className="p-4 bg-blue-500/10 rounded-flap border border-blue-500/20 ml-4">
                      <span className="text-xs font-bold text-blue-400">{st.name}</span>
                      <p className="text-sm mt-1 italic">&ldquo;{st.message}&rdquo;</p>
                    </div>
                  ))}
                  <p className="text-xs text-slate-500">
                    An effective response will contain at least {WRITE_FOR_AN_ACADEMIC_DISCUSSION.minimumResponseWords} words.
                  </p>
                </div>
              )}
            </div>
            {/* Input */}
            <div className="glass-panel p-6 rounded-panel flex flex-col">
              <textarea
                className="flex-1 bg-transparent border-none resize-none outline-none text-white text-lg leading-relaxed placeholder:text-slate-600"
                placeholder="Type your response here..."
                value={writingCurrentText}
                onChange={(e) => setWritingCurrentText(e.target.value)}
                spellCheck={false}
                autoFocus
              />
              <div className="pt-4 border-t border-white/10 flex justify-between items-center text-sm text-slate-400">
                <span>
                  Words: {writingCurrentText.trim().split(/\s+/).filter(Boolean).length}
                  {task.type === "email" && (
                    <span className="text-slate-600"> &nbsp;(target {WRITE_AN_EMAIL.softTargetWords.min}&ndash;{WRITE_AN_EMAIL.softTargetWords.max})</span>
                  )}
                  {task.type === "academic_discussion" && (
                    <span className="text-slate-600"> &nbsp;(at least {WRITE_FOR_AN_ACADEMIC_DISCUSSION.minimumResponseWords})</span>
                  )}
                </span>
                <button onClick={handleWritingSubmit} className="px-6 py-2 bg-white text-slate-900 font-bold rounded-flap hover:bg-slate-200">
                  Submit Task
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Results / Evaluating
  if (testState === "results" || testState === "evaluating") {
    return (
      <div className="h-full flex items-center justify-center p-4">
        <div className="glass-panel p-12 rounded-panel text-center max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <GraduationCap className="w-20 h-20 text-platform-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Test Complete</h2>
          <p className="text-steel-400 mb-8">Here is your performance summary based on this session.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {evaluations.length > 0 ? evaluations.map((ev, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-panel border border-white/10">
                <h4 className="font-bold text-white mb-1 capitalize">{ev.section}</h4>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl font-bold text-amber-400">{Math.round(ev.scaledScore)}</span>
                  <span className="text-xs text-steel-500 uppercase font-bold">Score</span>
                </div>
                <p className="text-sm text-steel-300 line-clamp-3">{ev.feedback}</p>
              </div>
            )) : (
              <div className="col-span-2 text-center text-steel-500">
                No evaluations recorded yet. Check console or wait for processing.
              </div>
            )}
          </div>

          <div className="mt-12 flex gap-4 justify-center">
            <button onClick={() => window.location.reload()} className="px-8 py-4 bg-white text-steel-900 font-bold rounded-panel hover:bg-steel-200">
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;

}
