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
  Coffee,
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

// Reading Data & Types
import {
  ReadingSessionManager,
  READING_CONFIG,
  type ReadingQuestionItem,
  type CompleteWordsQuestion,
  type DailyLifeQuestion,
  type AcademicQuestion
} from "@/data/questions/reading-2026";

// Listening Data & Types
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

// Speaking Data & Types
import {
  listenRepeatScenarios,
  interviewTopics,
  type ListenRepeatScenario,
  type InterviewTopic,
} from "@/data/questions/speaking-massive";

// Writing Data & Types
import {
  buildSentenceTasks,
  emailTasks,
  academicDiscussionTasks,
  type BuildSentenceTask,
  type EmailTask,
  type AcademicDiscussionTask
} from "@/data/questions/writing-massive";

// Shared Utils
import { generateAudio, evaluateSpeaking, type VoiceType, type SpeakingEvaluationResult } from "@/lib/audio";

// --- Types ---

type TestState =
  | "intro"
  | "reading_module1"
  | "reading_interim"
  | "reading_module2"
  | "listening_module1"
  | "listening_module2"
  | "break"
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
  const readingManagerRef = useRef(new ReadingSessionManager());
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
  const [writingTasks, setWritingTasks] = useState<(BuildSentenceTask | EmailTask | AcademicDiscussionTask)[]>([]);
  const [writingCurrentIndex, setWritingCurrentIndex] = useState(0);
  const [writingAnswers, setWritingAnswers] = useState<WritingAnswer[]>([]);
  const [writingCurrentText, setWritingCurrentText] = useState("");
  const [writingTimeLeft, setWritingTimeLeft] = useState(0);
  const [writingStartTime, setWritingStartTime] = useState(0);

  // --- Break State ---
  const [breakTimeLeft, setBreakTimeLeft] = useState(300);

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

  const startTest = () => {
    readingManagerRef.current.reset();
    const module1Qs = readingManagerRef.current.selectModule1Questions(READING_CONFIG.MODULE1_QUESTIONS);
    const flatSteps = flattenReadingQuestions(module1Qs);
    setReadingSteps(flatSteps);
    setReadingCurrentIndex(0);
    setReadingAnswers({});
    setReadingTimeLeft(READING_CONFIG.MODULE1_TIME);
    setReadingCurrentModule("module1");
    setReadingFlaggedSteps(new Set());
    setTestState("reading_module1");
  };

  const handleReadingAnswer = (val: any) => {
    const step = readingSteps[readingCurrentIndex];
    // Simple correctness check
    let isCorrect = false;
    if (step.stepType === "multiple_choice") {
      isCorrect = val === step.data.correctAnswer;
    } else if (step.stepType === "complete_words") {
      const blanks = (step.data as CompleteWordsQuestion).blanks;
      const userBlanks = val as Record<number, string>;
      isCorrect = blanks.every(b => (userBlanks[b.position] || "").toLowerCase().trim() === b.answer.toLowerCase().trim());
    }

    setReadingAnswers(prev => ({
      ...prev,
      [step.id]: {
        stepId: step.id,
        value: val,
        isCorrect,
        timeSpent: (prev[step.id]?.timeSpent || 0) // Simplified time tracking
      }
    }));
  };

  const handleReadingModuleTimeout = useCallback(() => {
    if (testState === "reading_module1") finishReadingModule1();
    else finishReadingModule2();
  }, [testState, finishReadingModule1, finishReadingModule2]);

  const finishReadingModule1 = () => {
    // Calculate stats
    const stepIds = readingSteps.map(s => s.id);
    const moduleAnswers = stepIds.map(id => readingAnswers[id]).filter(Boolean);
    const correctCount = moduleAnswers.filter(a => a.isCorrect).length;

    setReadingModule1Stats({ correct: correctCount, total: moduleAnswers.length });

    // Determine track
    const accuracy = moduleAnswers.length > 0 ? correctCount / moduleAnswers.length : 0;
    const isHard = accuracy >= READING_CONFIG.HARD_TRACK_THRESHOLD;
    const track = isHard ? "hard" : "easy";

    // Generate Module 2
    readingManagerRef.current.recordModule1Performance(correctCount, moduleAnswers.length);
    const module2Qs = readingManagerRef.current.selectModule2Questions(track, READING_CONFIG.MODULE2_QUESTIONS);
    const flatSteps = flattenReadingQuestions(module2Qs);

    setReadingSteps(flatSteps);
    setReadingCurrentIndex(0);
    setReadingCurrentModule(isHard ? "module2_hard" : "module2_easy");
    setReadingTimeLeft(isHard ? READING_CONFIG.MODULE2_TIME_HARD : READING_CONFIG.MODULE2_TIME_EASY);
    setReadingFlaggedSteps(new Set());

    // Use interim state or go straight to mod 2? 
    // The design has an interim report in Practice mode, but for Full Test usually it flows directly or with a brief "Module 1 Complete" overlay.
    // We'll show a brief interim state.
    setTestState("reading_interim");
  };

  const finishReadingModule2 = async () => {
    // Evaluation happens at end of test or we can store it now
    // We'll just transition to Listening
    startListeningSection();
  };

  // --- Listening Logic Helpers ---

  const parseTranscript = (transcript: string, speakers: { role: string; voice: VoiceType }[]) => {
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
  };

  const getAudioSegments = (question: any): { text: string; voice: VoiceType }[] => {
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
  };

  const playAudioSegments = async (segments: { text: string; voice: VoiceType }[]) => {
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
  };

  const generateListeningQuestions = (config: any) => {
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
  };

  const startListeningSection = () => {
    const qs = generateListeningQuestions({ chooseResponse: 5, conversation: 2, announcement: 2, academicTalk: 1 });
    setListeningQuestions(qs);
    setListeningCurrentIndex(0);
    setListeningSubIndex(0);
    setListeningAnswers([]);
    setListeningCurrentModule(1);
    setListeningTimeLeft(18 * 60);
    setListeningIsPlaying(false);
    setListeningAudioPlayed(false);
    setTestState("listening_module1");
  };

  const handleListeningAnswer = (option: string) => {
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
  };

  const handleListeningModuleTimeout = useCallback(() => {
    if (listeningCurrentModule === 1) {
      const correct = listeningAnswers.filter(a => a.isCorrect).length;
      const accuracy = correct / listeningAnswers.length;
      const isHard = accuracy >= 0.6;

      const config = isHard
        ? { chooseResponse: 4, conversation: 2, announcement: 2, academicTalk: 2 }
        : { chooseResponse: 6, conversation: 2, announcement: 2, academicTalk: 1 };

      const qs = generateListeningQuestions(config);
      setListeningQuestions(qs);
      setListeningCurrentIndex(0);
      setListeningSubIndex(0);
      setListeningCurrentModule(2);
      setListeningTimeLeft(isHard ? 18 * 60 : 9 * 60);
      setListeningAudioPlayed(false);
      setTestState("listening_module2");
    } else {
      setTestState("break");
      setBreakTimeLeft(300); // 5 mins break
    }
  }, [listeningCurrentModule, listeningAnswers]);

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
    setSpeakingTimeLeft(720); // 12 min
  }, []);

  const startSpeakingPractice = () => {
    setTestState("speaking_listen_repeat");
    setSpeakingTimeLeft(480);
    setSpeakingStage("waiting");
    setTimeout(() => playSpeakingPrompt(0), 1000);
  };

  const playSpeakingPrompt = async (index: number) => {
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
        setSpeakingMaxRecordingTime(10);
        startSpeakingRecording();
      };
      audio.play();
    } catch (e) {
      console.error("Audio gen error", e);
      setSpeakingStage("recording");
      startSpeakingRecording();
    }
  };

  const startSpeakingRecording = async () => {
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
  };

  const stopSpeakingRecording = useCallback(() => {
    if (speakingMediaRecorderRef.current && speakingMediaRecorderRef.current.state !== 'inactive') {
      speakingMediaRecorderRef.current.stop();
      setSpeakingIsRecording(false);
    }
  }, []);

  const handleSpeakingRecordingComplete = async (blob: Blob) => {
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
  };

  const startSpeakingInterview = () => {
    setTestState("speaking_interview");
    setSpeakingTimeLeft(600);
    playInterviewQuestion(0);
  };

  const playInterviewQuestion = async (index: number) => {
    if (!speakingInterview) return;
    const q = speakingInterview.questions[index];
    setSpeakingStage("playing");
    setSpeakingInterviewIndex(index);

    try {
      const url = await generateAudio(q.question, { voice: "alloy" as any });
      const audio = new Audio(url);
      speakingAudioRef.current = audio;
      audio.onended = () => {
        setSpeakingStage("recording");
        setSpeakingRecordingTime(0);
        setSpeakingMaxRecordingTime(45); // 45s for interview
        startSpeakingRecording();
      };
      audio.play();
    } catch (e) {
      console.error("Audio error", e);
      setSpeakingStage("recording");
      startSpeakingRecording();
    }
  };

  const finishSpeakingSection = () => {
    startWritingSection();
  };

  // --- Writing Logic Helpers ---

  const startWritingSection = () => {
    setTestState("writing_intro");

    // Select tasks
    const t1 = buildSentenceTasks[0]; // Simple pick for now
    const t2 = emailTasks[0];
    const t3 = academicDiscussionTasks[0];
    setWritingTasks([t1, t2, t3]);
  };

  const startWritingPractice = () => {
    setTestState("writing_practice");
    setWritingCurrentIndex(0);
    setWritingAnswers([]);
    startWritingTask(0);
  };

  const startWritingTask = (index: number) => {
    const task = writingTasks[index];
    setWritingCurrentText("");
    setWritingStartTime(Date.now());

    // Times: Sentence (60s), Email (5m), Academic (10m)
    const time = index === 0 ? 60 : index === 1 ? 300 : 600;
    setWritingTimeLeft(time);
  };

  const handleWritingSubmit = async () => {
    const tasks = writingTasks;
    const currentTask = tasks[writingCurrentIndex];
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

    if (writingCurrentIndex < tasks.length - 1) {
      setWritingCurrentIndex(prev => prev + 1);
      startWritingTask(writingCurrentIndex + 1);
    } else {
      finishWritingSection();
    }
  };

  const handleWritingTaskTimeout = useCallback(() => {
    handleWritingSubmit(); // Auto submit
  }, [handleWritingSubmit]);

  const finishWritingSection = () => {
    setTestState("results"); // or evaluating
    // Calculate final
  };

  // --- Format Time Helper ---
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // --- Render ---

  if (testState === "intro") {
    // Re-using the intro design but updated
    return (
      <div className="h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel rounded-2xl p-8 h-full flex flex-col"
        >
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/25">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-6 h-6 text-emerald-400 animate-pulse" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Full TOEFL Practice Test</h1>
            <p className="text-slate-400">Official 2026 Format • Adaptive Testing • AI Evaluation</p>
          </div>

          <div className="space-y-3 mb-8">
            {[
              { icon: BookOpen, name: "Reading", desc: "2 Modules • Adaptive", gradient: "from-amber-400 to-orange-500" },
              { icon: Headphones, name: "Listening", desc: "2 Modules • Adaptive", gradient: "from-pink-400 to-rose-500" },
              { icon: Coffee, name: "Break", desc: "5 minutes", gradient: "from-slate-500 to-slate-600", muted: true },
              { icon: Mic, name: "Speaking", desc: "Listen & Repeat + Interview", gradient: "from-violet-400 to-purple-500" },
              { icon: PenTool, name: "Writing", desc: "3 Tasks", gradient: "from-cyan-400 to-teal-500" },
            ].map((section, i) => (
              <motion.div
                key={section.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className={`flex items-center gap-4 p-4 rounded-xl ${section.muted ? "glass-card opacity-75" : "glass-card"}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.gradient} flex items-center justify-center shadow-lg`}>
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
              className="w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
            >
              Start Full Test
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

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

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (testState === "break" && breakTimeLeft > 0) {
      interval = setInterval(() => {
        setBreakTimeLeft(prev => {
          if (prev <= 1) {
            startSpeakingSection();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [testState, breakTimeLeft, startSpeakingSection]);

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
            <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${readingCurrentModule === "module1" ? "bg-cyan-500/20 border-cyan-500/30 text-cyan-400" :
              readingCurrentModule === "module2_hard" ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-400" :
                "bg-amber-500/20 border-amber-500/30 text-amber-400"
              }`}>
              <span className="text-sm font-medium capitalize">
                {readingCurrentModule === "module1" ? "Reading Module 1" :
                  readingCurrentModule === "module2_hard" ? "Reading Module 2 (Hard)" : "Reading Module 2 (Easy)"}
              </span>
            </div>
            {/* Progress Dots */}
            <div className="flex items-center gap-1">
              {readingSteps.slice(0, 20).map((_, idx) => (
                <div key={idx} className={`w-2 h-2 rounded-full ${idx === readingCurrentIndex ? "bg-cyan-400 scale-125" : readingAnswers[readingSteps[idx]?.id] ? "bg-emerald-500" : "bg-slate-700"}`} />
              ))}
            </div>
          </div>
          {/* Timer */}
          <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${readingTimeLeft < 60 ? "bg-red-500/20 border-red-500/30 text-red-400" : "glass-card border-white/10 text-white"}`}>
            <Clock className="w-4 h-4" />
            <span className="font-mono">{formatTime(readingTimeLeft)}</span>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-12rem)]">
          {/* Left Panel */}
          <div className="glass-panel rounded-2xl p-6 overflow-y-auto">
            {currentStep.stepType === "complete_words" ? (
              <div className="leading-loose text-lg text-slate-300">
                {/* Simplified Render wrapper since we can't paste huge function here yet, logic below */}
                {(() => {
                  const question = currentStep.data as CompleteWordsQuestion;
                  const userBlanks = (currentAnswer as Record<number, string>) || {};
                  let lastIndex = 0;
                  const elements: JSX.Element[] = [];

                  question.blanks.forEach((blank, idx) => {
                    const partial = blank.partialWord;
                    const start = question.passage.indexOf(partial, lastIndex);
                    if (start !== -1) {
                      elements.push(<span key={`txt-${idx}`}>{renderTextWithFormatting(question.passage.substring(lastIndex, start))}</span>);
                      const prefix = partial.replace(/_+/g, '');
                      const neededLetters = blank.answer.length - prefix.length;
                      const underscoreCount = neededLetters > 0 ? neededLetters : (partial.match(/_/g) || []).length;
                      const userAnswer = userBlanks[blank.position] || "";

                      const visualBoxes: JSX.Element[] = [];
                      for (let i = 0; i < underscoreCount; i++) {
                        const charValue = userAnswer[prefix.length + i] || '';
                        visualBoxes.push(
                          <span key={`box-${idx}-${i}`} className={`inline-block w-7 h-9 border-b-2 ${charValue ? 'border-cyan-400 bg-cyan-500/10' : 'border-slate-600 bg-slate-800/30'} text-center leading-9 text-white font-medium`}>{charValue}</span>
                        );
                      }

                      elements.push(
                        <span key={`input-${idx}`} className="inline-flex items-baseline mx-1 relative group">
                          <span className="text-cyan-400 font-semibold">{prefix}</span>
                          <span className="inline-flex gap-0.5 mx-1">{visualBoxes}</span>
                          <input
                            type="text"
                            maxLength={underscoreCount}
                            className="absolute left-0 top-0 w-full h-full opacity-0 cursor-text z-10"
                            value={userAnswer.slice(prefix.length) || ''}
                            onChange={(e) => {
                              const fullWord = prefix + e.target.value.toLowerCase();
                              const newBlanks = { ...userBlanks, [blank.position]: fullWord };
                              handleReadingAnswer(newBlanks);
                            }}
                          />
                        </span>
                      );
                      lastIndex = start + partial.length;
                    }
                  });
                  elements.push(<span key="txt-end">{renderTextWithFormatting(question.passage.substring(lastIndex))}</span>);
                  return elements;
                })()}
              </div>
            ) : (
              <div className="prose prose-invert prose-sm max-w-none text-slate-300 whitespace-pre-wrap leading-relaxed">
                {renderTextWithFormatting(currentStep.passageContent)}
              </div>
            )}
          </div>

          {/* Right Panel */}
          <div className="glass-panel rounded-2xl flex flex-col p-6">
            <div className="flex-1 overflow-y-auto">
              {currentStep.stepType === "complete_words" ? (
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <PenTool className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Complete the Passage</h3>
                  <p className="text-slate-400">Type missing letters in the blanks.</p>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-lg font-semibold text-white">{currentStep.data.question}</h3>
                    <button onClick={() => {
                      const s = new Set(readingFlaggedSteps);
                      if (s.has(currentStep.id)) s.delete(currentStep.id); else s.add(currentStep.id);
                      setReadingFlaggedSteps(s);
                    }} className={`p-2 rounded-lg ${isFlagged ? "text-amber-400 bg-amber-400/10" : "text-slate-500"}`}>
                      <Flag className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="space-y-3">
                    {currentStep.data.options.map((option: string, idx: number) => {
                      const letter = String.fromCharCode(65 + idx);
                      const isSelected = currentAnswer === letter;
                      return (
                        <button key={idx} onClick={() => handleReadingAnswer(letter)}
                          className={`w-full text-left p-4 rounded-xl border transition-all ${isSelected ? "bg-cyan-500/20 border-cyan-500 text-white" : "bg-white/5 border-transparent text-slate-300 hover:bg-white/10"}`}>
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
              <button onClick={() => setReadingCurrentIndex(prev => Math.max(0, prev - 1))} disabled={readingCurrentIndex === 0} className="flex items-center gap-2 text-slate-400 hover:text-white disabled:opacity-50">
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>
              {readingCurrentIndex < readingSteps.length - 1 ? (
                <button onClick={() => setReadingCurrentIndex(prev => prev + 1)} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium">
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button onClick={handleReadingModuleTimeout} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium">
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
        <div className="glass-panel p-12 rounded-2xl text-center max-w-lg w-full">
          <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Module 1 Complete</h2>
          <p className="text-slate-400 mb-8">Move on to the next module.</p>
          <button onClick={() => setTestState("reading_module2")} className="w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl">
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
            <div className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-500/20 border-pink-500/30 text-pink-400`}>
              <Headphones className="w-4 h-4" />
              <span className="text-sm font-medium">Listening Module {listeningCurrentModule}</span>
            </div>
            <div className="flex items-center gap-1">
              {listeningQuestions.map((_, idx) => (
                <div key={idx} className={`w-2 h-2 rounded-full ${idx === listeningCurrentIndex ? "bg-pink-400 scale-125" : idx < listeningCurrentIndex ? "bg-emerald-500" : "bg-slate-700"}`} />
              ))}
            </div>
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${listeningTimeLeft < 60 ? "bg-red-500/20 border-red-500/30 text-red-400" : "glass-card border-white/10 text-white"}`}>
            <Clock className="w-4 h-4" />
            <span className="font-mono">{formatTime(listeningTimeLeft)}</span>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Audio Context Card */}
          <div className="glass-panel p-8 rounded-2xl text-center relative overflow-hidden">
            <div className="relative z-10 w-full max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-500/20">
                {listeningIsPreloading ? <Loader2 className="w-10 h-10 text-white animate-spin" /> :
                  listeningIsPlaying ? <Volume2 className="w-10 h-10 text-white animate-pulse" /> :
                    <Headphones className="w-10 h-10 text-white" />}
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {listeningIsPreloading ? "Preparing Recording..." : listeningIsPlaying ? "Listening..." : (currentQ.type === "choose_response" ? "Listen and Choose" : currentQ.data.context || "Listen to the recording")}
              </h3>

              {!listeningAudioPlayed && !listeningIsPlaying && !listeningIsPreloading ? (
                <div className="space-y-4">
                  <p className="text-slate-400 mb-6">The audio will play automatically locally. Listen carefully as you can only hear it once.</p>
                  <button onClick={() => playAudioSegments(getAudioSegments(currentQ))} className="px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
                    <Play className="w-5 h-5" /> Play Audio
                  </button>
                </div>
              ) : listeningIsPreloading ? (
                <div className="space-y-4 mt-8">
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-pink-500"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    />
                  </div>
                  <p className="text-xs text-pink-400 animate-pulse font-medium uppercase tracking-widest">Generating High-Quality Dialogue...</p>
                </div>
              ) : listeningIsPlaying ? (
                <div className="w-full max-w-md mx-auto space-y-6 mt-8">
                  <div className="flex items-center justify-center gap-3">
                    <div className="flex items-center gap-1.5">
                      {[...Array(4)].map((_, i) => (
                        <motion.div key={i} className="w-1 h-4 bg-pink-400 rounded-full" animate={{ scaleY: [1, 2, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.1 }} />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-pink-400 uppercase tracking-widest">
                      Speaking: {listeningAudioSegments[listeningSegmentIndex]?.voice.replace(/_/g, " ").toUpperCase() || "NARRATOR"}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-pink-300 font-medium">
                    <span>Playing...</span>
                    <span>{Math.round(listeningAudioProgress)}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div className="h-full bg-pink-500" style={{ width: `${listeningAudioProgress}%` }} />
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2 text-emerald-400 font-medium mt-4">
                  <CheckCircle className="w-5 h-5" /> Audio Complete
                </div>
              )}
            </div>
            {/* Background Viz */}
            {listeningIsPlaying && !listeningIsPreloading && (
              <div className="absolute inset-0 z-0 opacity-20 flex items-center justify-center gap-1 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <motion.div key={i} className="w-4 bg-pink-500" animate={{ height: [20, Math.random() * 100 + 50, 20] }} transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.05 }} />
                ))}
              </div>
            )}
          </div>

          {/* Question Area */}
          {(listeningAudioPlayed || (currentQ.type === "choose_response" && listeningAudioPlayed)) && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-panel p-8 rounded-2xl">
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
                        className={`w-full text-left p-4 rounded-xl transition-all flex items-center gap-4 group ${isSelected ? "bg-pink-500/20 border border-pink-500" : "glass-card border border-white/5 hover:bg-white/10"}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors border ${isSelected ? "bg-pink-500 text-white border-pink-500" : "bg-slate-800 text-slate-400 border-slate-700 group-hover:border-pink-500"}`}>
                          {letter}
                        </div>
                        <span className={`transition-colors ${isSelected ? "text-white" : "text-slate-300 group-hover:text-white"}`}>{opt}</span>
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

  // Break Screen
  if (testState === "break") {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="glass-panel p-12 rounded-2xl text-center max-w-lg w-full">
          <Coffee className="w-16 h-16 text-amber-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-2">Take a Break</h2>
          <p className="text-slate-400 mb-8">Relax for a moment before the Speaking section.</p>
          <div className="text-6xl font-mono font-bold text-white mb-8">{formatTime(breakTimeLeft)}</div>
          <button onClick={startSpeakingSection} className="px-6 py-3 glass-button hover:bg-white/10 rounded-xl text-white">
            Skip Break
          </button>
        </div>
      </div>
    );
  }

  // Speaking Intro
  if (testState === "speaking_intro") {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="glass-panel p-12 rounded-2xl text-center max-w-lg w-full">
          <Mic className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-2">Speaking Section</h2>
          <div className="space-y-4 mb-8 text-left">
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl">
              <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <h4 className="text-white font-medium">Listen & Repeat</h4>
                <p className="text-sm text-slate-400">Repeat 20 sentences accurately.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl">
              <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <h4 className="text-white font-medium">Interview</h4>
                <p className="text-sm text-slate-400">Answer 5 open-ended questions.</p>
              </div>
            </div>
          </div>
          <button onClick={startSpeakingPractice} className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold rounded-xl shadow-lg shadow-purple-500/25">
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
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/20 border-purple-500/30 text-purple-400">
              <Mic className="w-4 h-4" />
              <span className="text-sm font-medium">{isRepeat ? "Listen & Repeat" : "Interview"}</span>
            </div>
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${speakingTimeLeft < 60 ? "bg-red-500/20 border-red-500/30 text-red-400" : "glass-card border-white/10 text-white"}`}>
            <Clock className="w-4 h-4" />
            <span className="font-mono">{formatTime(speakingTimeLeft)}</span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12 glass-panel p-12 rounded-2xl text-center relative overflow-hidden">
          {/* Visualizer */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-xl shadow-purple-500/30 relative">
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
            <div className="w-64 h-2 bg-slate-800 rounded-full mx-auto overflow-hidden">
              <motion.div
                className="h-full bg-red-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: speakingMaxRecordingTime, ease: "linear" }}
              />
            </div>
          )}

          <div className="mt-8 text-slate-400">
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
        <div className="glass-panel p-12 rounded-2xl text-center max-w-lg w-full">
          <PenTool className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-2">Writing Section</h2>
          <div className="space-y-4 mb-8 text-left">
            {writingTasks.map((t, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                <span className="text-white font-medium capitalize">{t.type.replace('_', ' ')}</span>
              </div>
            ))}
          </div>
          <button onClick={startWritingPractice} className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/25">
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
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/20 border-cyan-500/30 text-cyan-400">
              <PenTool className="w-4 h-4" />
              <span className="text-sm font-medium capitalize">{task.type.replace('_', ' ')}</span>
            </div>
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${writingTimeLeft < 60 ? "bg-red-500/20 border-red-500/30 text-red-400" : "glass-card border-white/10 text-white"}`}>
            <Clock className="w-4 h-4" />
            <span className="font-mono">{formatTime(writingTimeLeft)}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-12rem)]">
          {/* Prompt */}
          <div className="glass-panel p-6 rounded-2xl overflow-y-auto prose prose-invert max-w-none">
            <h3 className="text-emerald-400">Task Introduction</h3>
            <p className="text-lg text-white">
              {task.type === "build_sentence" && (task as BuildSentenceTask).context}
              {task.type === "email" && (task as EmailTask).scenario}
              {task.type === "academic_discussion" && (task as AcademicDiscussionTask).topic}
            </p>

            <div className="mt-6 p-4 bg-slate-800/50 rounded-xl border border-white/5">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">Instructions</h4>
              {task.type === "build_sentence" && (
                <div className="space-y-4">
                  <p className="text-slate-300">Rearrange the following words into a grammatically correct sentence:</p>
                  <div className="flex flex-wrap gap-2">
                    {(task as BuildSentenceTask).scrambledWords.map((word, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 rounded-lg text-white font-mono uppercase text-xs border border-white/10">
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {task.type === "email" && (
                <div className="space-y-4">
                  <p className="text-slate-300">{(task as EmailTask).instructions}</p>
                  <div className="p-4 bg-black/30 rounded-lg text-sm font-mono text-emerald-300/80">
                    {(task as EmailTask).emailPrompt}
                  </div>
                </div>
              )}
              {task.type === "academic_discussion" && (
                <div className="space-y-4">
                  <p className="text-slate-300">{(task as AcademicDiscussionTask).instructions}</p>
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                      <span className="text-xs font-bold text-purple-400">Professor {(task as AcademicDiscussionTask).professor.name}</span>
                      <p className="text-sm mt-1">{(task as AcademicDiscussionTask).professor.message}</p>
                    </div>
                    {(task as AcademicDiscussionTask).students.map((s, i) => (
                      <div key={i} className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20 ml-4">
                        <span className="text-xs font-bold text-blue-400">{s.name}</span>
                        <p className="text-sm mt-1 italic">"{s.message}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Input */}
          <div className="glass-panel p-6 rounded-2xl flex flex-col">
            <textarea
              className="flex-1 bg-transparent border-none resize-none outline-none text-white text-lg leading-relaxed placeholder:text-slate-600"
              placeholder="Type your response here..."
              value={writingCurrentText}
              onChange={(e) => setWritingCurrentText(e.target.value)}
              autoFocus
            />
            <div className="pt-4 border-t border-white/10 flex justify-between items-center text-sm text-slate-400">
              <span>Word Count: {writingCurrentText.trim().split(/\s+/).filter(Boolean).length}</span>
              <button onClick={handleWritingSubmit} className="px-6 py-2 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200">
                Submit Task
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Results / Evaluating
  if (testState === "results" || testState === "evaluating") {
    return (
      <div className="h-full flex items-center justify-center p-4">
        <div className="glass-panel p-12 rounded-2xl text-center max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <GraduationCap className="w-20 h-20 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Test Complete</h2>
          <p className="text-slate-400 mb-8">Here is your performance summary based on this session.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {evaluations.length > 0 ? evaluations.map((ev, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h4 className="font-bold text-white mb-1 capitalize">{ev.section}</h4>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl font-bold text-cyan-400">{Math.round(ev.scaledScore)}</span>
                  <span className="text-xs text-slate-500 uppercase font-bold">Score</span>
                </div>
                <p className="text-sm text-slate-300 line-clamp-3">{ev.feedback}</p>
              </div>
            )) : (
              <div className="col-span-2 text-center text-slate-500">
                No evaluations recorded yet. Check console or wait for processing.
              </div>
            )}
          </div>

          <div className="mt-12 flex gap-4 justify-center">
            <button onClick={() => window.location.reload()} className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-200">
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;

}
