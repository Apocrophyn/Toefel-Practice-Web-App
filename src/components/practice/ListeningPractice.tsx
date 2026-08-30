"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Headphones,
  Play,
  Pause,
  ChevronRight,
  RotateCcw,
  CheckCircle,
  XCircle,
  Volume2,
  Clock,
  AlertCircle,
  Sparkles,
  Zap,
  Trophy,
  MessageSquare,
  GraduationCap,
  Megaphone,
  Users,
  Loader2,
} from "lucide-react";
import { SectionBrief } from "@/components/board";
import {
  chooseResponseBank as chooseResponseItems,
  conversationBank as conversationScenarios,
  announcementBank as announcementScenarios,
  academicTalkBank as academicTalkScenarios,
  type ChooseResponseItem,
  type ConversationScenario,
  type AnnouncementScenario,
  type AcademicTalkScenario,
  ITEMS_PER_STIMULUS,
} from "@/data/questions/2026/listening-bank";
import { LISTENING_PLAN, type ListeningPlan } from "@/lib/toefl/form-builder";
import { SECTIONS, moduleSeconds, routeToModule } from "@/data/toefl-2026-blueprint";
import { generateAudio, createAudioPlayer, type VoiceType } from "@/lib/audio";

type PracticeState = "setup" | "listening" | "answering" | "feedback" | "review";

type TaskType = "choose_response" | "conversation" | "announcement" | "academic_talk";

interface Answer {
  questionId: string;
  taskType: TaskType;
  selectedOption: string | null;
  selectedText: string;
  correctAnswer: string;
  correctText: string;
  isCorrect: boolean;
  questionText: string;
  explanation: string;
  selectedAnswer: string | null; // Keep for legacy
}

interface ModuleConfig {
  chooseResponse: number;
  conversation: number;
  announcement: number;
  academicTalk: number;
}

// ==========================================
// TOEFL 2026 Listening Section Configuration
//
// Counts come from LISTENING_PLAN, which is expressed in ITEMS (the unit ETS
// counts). They are converted to stimulus counts here, since a conversation is
// two items and an academic talk is four. A full section is 47 items on both
// routes: 29 in the router plus 18 in the second module.
// ==========================================
const LISTENING_CONFIG = {
  MODULE1_TIME: SECTIONS.listening.timing.routerSeconds ?? 18 * 60,
  MODULE2_TIME_HARD: moduleSeconds("listening", "upper"),
  MODULE2_TIME_EASY: moduleSeconds("listening", "lower"),
};

const toStimulusCounts = (plan: ListeningPlan): ModuleConfig => ({
  chooseResponse: plan.listen_and_choose_a_response,
  conversation: plan.listen_to_a_conversation / ITEMS_PER_STIMULUS.conversation,
  announcement: plan.listen_to_an_announcement / ITEMS_PER_STIMULUS.announcement,
  academicTalk: plan.listen_to_an_academic_talk / ITEMS_PER_STIMULUS.academic_talk,
});

/** Router module - the same for every test taker. */
const Module1Config: ModuleConfig = toStimulusCounts(LISTENING_PLAN.router);

/** Lower module: weighted to short items, 7 minutes. */
const Module2Easy: ModuleConfig = toStimulusCounts(LISTENING_PLAN.lower);

/** Upper module: two extra academic talks, 11 minutes. */
const Module2Hard: ModuleConfig = toStimulusCounts(LISTENING_PLAN.upper);

export function ListeningPractice() {
  // Core state
  const [state, setState] = useState<PracticeState>("setup");
  const [currentModule, setCurrentModule] = useState<1 | 2>(1);
  const [modulePerformance, setModulePerformance] = useState<number>(0);

  // Question state
  const [questions, setQuestions] = useState<Array<{
    type: TaskType;
    data: ChooseResponseItem | ConversationScenario | AnnouncementScenario | AcademicTalkScenario;
    questionIndex?: number;
  }>>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [subQuestionIndex, setSubQuestionIndex] = useState(0);

  // Answer tracking
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Audio state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [hasPlayedAudio, setHasPlayedAudio] = useState(false);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null);
  const [audioProgress, setAudioProgress] = useState(0);
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
  const [audioSegments, setAudioSegments] = useState<{ text: string, voice: VoiceType }[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Section Timer (TOEFL 2026 Format: ~29 Minutes)
  const [sectionTimeLeft, setSectionTimeLeft] = useState(1740);
  const sectionTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Audio queue management
  const [audioQueue, setAudioQueue] = useState<string[]>([]);
  const [isPreloading, setIsPreloading] = useState(false);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (sectionTimerRef.current) {
        clearInterval(sectionTimerRef.current);
      }
    };
  }, []);

  // Generate questions for a module
  const generateModuleQuestions = (config: ModuleConfig) => {
    const selected: Array<{
      type: TaskType;
      data: ChooseResponseItem | ConversationScenario | AnnouncementScenario | AcademicTalkScenario;
    }> = [];

    // Shuffle and select questions
    const shuffledCR = [...chooseResponseItems].sort(() => Math.random() - 0.5);
    const shuffledConv = [...conversationScenarios].sort(() => Math.random() - 0.5);
    const shuffledAnn = [...announcementScenarios].sort(() => Math.random() - 0.5);
    const shuffledAT = [...academicTalkScenarios].sort(() => Math.random() - 0.5);

    // Add choose response questions
    for (let i = 0; i < config.chooseResponse && i < shuffledCR.length; i++) {
      selected.push({ type: "choose_response", data: shuffledCR[i] });
    }

    // Add conversation questions
    for (let i = 0; i < config.conversation && i < shuffledConv.length; i++) {
      selected.push({ type: "conversation", data: shuffledConv[i] });
    }

    // Add announcement questions
    for (let i = 0; i < config.announcement && i < shuffledAnn.length; i++) {
      selected.push({ type: "announcement", data: shuffledAnn[i] });
    }

    // Add academic talk questions
    for (let i = 0; i < config.academicTalk && i < shuffledAT.length; i++) {
      selected.push({ type: "academic_talk", data: shuffledAT[i] });
    }

    // Shuffle final selection
    return selected.sort(() => Math.random() - 0.5);
  };

  // Start practice session
  const startPractice = () => {
    const moduleQuestions = generateModuleQuestions(Module1Config);
    setQuestions(moduleQuestions);
    setCurrentQuestionIndex(0);
    setSubQuestionIndex(0);
    setAnswers([]);
    setCurrentModule(1);
    setModulePerformance(0);
    setHasPlayedAudio(false);
    setSectionTimeLeft(LISTENING_CONFIG.MODULE1_TIME); // 18 minutes baseline
    setState("listening");
  };

  // Global Section Timer Logic
  useEffect(() => {
    if (state === "listening" || state === "answering") {
      if (!isLoadingAudio && !isPreloading && !sectionTimerRef.current) {
        sectionTimerRef.current = setInterval(() => {
          setSectionTimeLeft(prev => {
            if (prev <= 1) {
              if (sectionTimerRef.current) clearInterval(sectionTimerRef.current);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      } else if ((isLoadingAudio || isPreloading) && sectionTimerRef.current) {
        clearInterval(sectionTimerRef.current);
        sectionTimerRef.current = null;
      }
    } else {
      if (sectionTimerRef.current) {
        clearInterval(sectionTimerRef.current);
        sectionTimerRef.current = null;
      }
    }

    return () => {
      if (sectionTimerRef.current) clearInterval(sectionTimerRef.current);
    };
  }, [state, isLoadingAudio, isPreloading]);

  // Play audio segments sequentially with preloading
  const playAudioSegments = async (segments: { text: string; voice: VoiceType }[]) => {
    setIsPreloading(true);
    setIsLoadingAudio(false);
    setAudioError(null);
    setAudioSegments(segments);
    setCurrentSegmentIndex(0);

    try {
      // Preload ALL segments in parallel for smooth playback
      const urls = await Promise.all(
        segments.map(s => generateAudio(s.text, { voice: s.voice }))
      );

      setAudioQueue(urls);
      setIsPreloading(false);
      setIsPlayingAudio(true);

      for (let i = 0; i < urls.length; i++) {
        setCurrentSegmentIndex(i);
        const audioUrl = urls[i];

        if (audioRef.current) {
          audioRef.current.pause();
        }

        const audioPromise = new Promise<void>((resolve, reject) => {
          const audio = new Audio(audioUrl);
          audioRef.current = audio;

          audio.onplay = () => {
            setIsPlayingAudio(true);
          };

          audio.ontimeupdate = () => {
            if (audio.duration) {
              const segmentWeight = 100 / segments.length;
              const currentProgress = (audio.currentTime / audio.duration) * segmentWeight;
              const totalProgress = (i * segmentWeight) + currentProgress;
              setAudioProgress(totalProgress);
            }
          };

          audio.onended = () => {
            resolve();
          };

          audio.onerror = () => {
            reject(new Error("Failed to play audio segment"));
          };

          audio.play().catch(reject);
        });

        await audioPromise;
        // Natural transition gap
        if (i < urls.length - 1) {
          await new Promise(r => setTimeout(r, 400));
        }
      }

      setIsPlayingAudio(false);
      setHasPlayedAudio(true);
      setAudioProgress(100);
      setState("answering");
    } catch (error) {
      setIsPreloading(false);
      setIsPlayingAudio(false);
      setAudioError("Failed to load audio segments. Please try again.");
      console.error("Audio preloading error:", error);
    }
  };

  // Play audio for current question (legacy single-audio support)
  const playAudio = async (text: string, voice: VoiceType = "narrator") => {
    await playAudioSegments([{ text, voice }]);
  };

  // Get audio segments for current question
  const getAudioSegments = (question: typeof questions[0]): { text: string; voice: VoiceType }[] => {
    switch (question.type) {
      case "choose_response":
        const crItem = question.data as ChooseResponseItem;
        return [{ text: crItem.audioText, voice: crItem.voice }];

      case "conversation": {
        const convItem = question.data as ConversationScenario;
        return parseTranscript(convItem.transcript, convItem.speakers);
      }

      case "announcement":
        const annItem = question.data as AnnouncementScenario;
        return [{ text: annItem.transcript, voice: annItem.voice }];

      case "academic_talk": {
        const atItem = question.data as AcademicTalkScenario;
        // Academic talks usually have 1 main voice, but might have student questions
        // Use a student voice that's different from the professor's gender/voice if possible
        const studentVoice: VoiceType = atItem.voice.includes("female") ? "male_student" : "female_student_2";
        const speakers = [{ role: "Professor", voice: atItem.voice }, { role: "Student", voice: studentVoice }];
        return parseTranscript(atItem.transcript, speakers);
      }

      default:
        return [];
    }
  };

  // Helper to parse transcript into voice segments
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

  // Get current question details
  const getCurrentQuestion = () => {
    const q = questions[currentQuestionIndex];
    if (!q) return null;

    switch (q.type) {
      case "choose_response":
        const cr = q.data as ChooseResponseItem;
        return {
          question: cr.question,
          options: cr.options,
          correctAnswer: cr.correctAnswer,
          explanation: cr.explanation,
        };
      case "conversation":
        const conv = q.data as ConversationScenario;
        const convQ = conv.questions[subQuestionIndex];
        return convQ ? {
          question: convQ.question,
          options: convQ.options,
          correctAnswer: convQ.correctAnswer,
          explanation: convQ.explanation,
        } : null;
      case "announcement":
        const ann = q.data as AnnouncementScenario;
        const annQ = ann.questions[subQuestionIndex];
        return annQ ? {
          question: annQ.question,
          options: annQ.options,
          correctAnswer: annQ.correctAnswer,
          explanation: annQ.explanation,
        } : null;
      case "academic_talk":
        const at = q.data as AcademicTalkScenario;
        const atQ = at.questions[subQuestionIndex];
        return atQ ? {
          question: atQ.question,
          options: atQ.options,
          correctAnswer: atQ.correctAnswer,
          explanation: atQ.explanation,
        } : null;
    }
  };

  // Handle answer submission
  const handleAnswer = (option: string) => {
    const currentQ = questions[currentQuestionIndex];
    let isCorrect = false;
    let questionText = "";
    let correctText = "";
    let selectedText = "";
    let explanation = "";
    let questionId = "";

    if (currentQ.type === "choose_response") {
      const data = currentQ.data as ChooseResponseItem;
      isCorrect = option === data.correctAnswer;
      questionText = data.question;
      correctText = data.options[data.correctAnswer.charCodeAt(0) - 65];
      selectedText = data.options[option.charCodeAt(0) - 65];
      explanation = data.explanation;
      questionId = data.id;
    } else {
      const data = (currentQ.data as ConversationScenario | AnnouncementScenario | AcademicTalkScenario);
      const qDetails = data.questions[subQuestionIndex];
      isCorrect = option === qDetails.correctAnswer;
      questionText = qDetails.question;
      correctText = qDetails.options[qDetails.correctAnswer.charCodeAt(0) - 65];
      selectedText = qDetails.options[option.charCodeAt(0) - 65];
      explanation = qDetails.explanation;
      questionId = `${data.id}_Q${subQuestionIndex + 1}`;
    }

    const answer: Answer = {
      questionId,
      taskType: currentQ.type,
      selectedOption: option,
      selectedText,
      correctAnswer: isCorrect ? option : (currentQ.type === "choose_response" ? (currentQ.data as ChooseResponseItem).correctAnswer : (currentQ.data as any).questions[subQuestionIndex].correctAnswer),
      correctText,
      isCorrect,
      questionText,
      explanation,
      selectedAnswer: option, // Legacy
    };

    setAnswers(prev => [...prev, answer]);
    setSelectedOption(option);

    // Smooth transition: brief pause to show selection, then move on
    setTimeout(() => {
      goToNext();
    }, 400);
  };

  // Move to next question
  const goToNext = () => {
    const currentQ = questions[currentQuestionIndex];

    // Check if there are more sub-questions
    let hasMoreSubQuestions = false;
    if (currentQ.type !== "choose_response") {
      const data = currentQ.data as ConversationScenario | AnnouncementScenario | AcademicTalkScenario;
      hasMoreSubQuestions = subQuestionIndex < data.questions.length - 1;
    }

    if (hasMoreSubQuestions) {
      // Move to next sub-question
      setSubQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setState("answering");
    } else if (currentQuestionIndex < questions.length - 1) {
      // Move to next main question
      setCurrentQuestionIndex(prev => prev + 1);
      setSubQuestionIndex(0);
      setSelectedOption(null);
      setHasPlayedAudio(false);
      setState("listening");
    } else {
      // Module complete
      const correctCount = answers.filter(a => a.isCorrect).length;
      const performance = (correctCount / answers.length) * 100;
      setModulePerformance(performance);

      if (currentModule === 1) {
        // Route on the shared blueprint threshold so the section practice and
        // the full test make the same routing decision.
        const isHardTrack = routeToModule(correctCount, answers.length) === "upper";
        const config = isHardTrack ? Module2Hard : Module2Easy;
        const moduleQuestions = generateModuleQuestions(config);
        setQuestions(moduleQuestions);
        setCurrentQuestionIndex(0);
        setSubQuestionIndex(0);
        setCurrentModule(2);
        setHasPlayedAudio(false);
        // Adaptive timing: Hard track = 18 min, Easy track = 9 min
        setSectionTimeLeft(isHardTrack ? LISTENING_CONFIG.MODULE2_TIME_HARD : LISTENING_CONFIG.MODULE2_TIME_EASY);
        setState("listening");
      } else {
        // Practice complete
        setState("review");
      }
    }
  };

  // New 2026 Band Scoring (1-6)
  const calculateBandScore = () => {
    if (answers.length === 0) return 1;
    const correctCount = answers.filter(a => a.isCorrect).length;
    const percentage = correctCount / answers.length;

    // Linear mapping to 1-6 scale
    const band = 1 + (percentage * 5);
    return Math.round(band * 2) / 2; // Return in 0.5 increments
  };

  const calculateScaledScore = () => {
    if (answers.length === 0) return 0;
    const correct = answers.filter(a => a.isCorrect).length;
    return Math.round((correct / answers.length) * 30);
  };

  // Legacy percentage calculation
  const calculateOverallScore = () => {
    if (answers.length === 0) return 0;
    const correct = answers.filter(a => a.isCorrect).length;
    return Math.round((correct / answers.length) * 100);
  };

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Get task icon
  const getTaskIcon = (type: TaskType) => {
    switch (type) {
      case "choose_response":
        return <MessageSquare className="w-5 h-5" />;
      case "conversation":
        return <Users className="w-5 h-5" />;
      case "announcement":
        return <Megaphone className="w-5 h-5" />;
      case "academic_talk":
        return <GraduationCap className="w-5 h-5" />;
    }
  };

  // Get task name
  const getTaskName = (type: TaskType) => {
    switch (type) {
      case "choose_response":
        return "Choose Response";
      case "conversation":
        return "Conversation";
      case "announcement":
        return "Announcement";
      case "academic_talk":
        return "Academic Talk";
    }
  };

  // ==================== SETUP SCREEN ====================
  if (state === "setup") {
    return (
      <SectionBrief
        icon={Headphones}
        title="Listening"
        standfirst="Two adaptive modules. Every clip plays once — there is no replay, exactly as on the day."
        manifest={[
          { field: "Duration", value: "25–29", note: "Minutes. Router 18 min, then 7 or 11 by track." },
          { field: "Items", value: "47", note: "29 in the router, 18 in the second module" },
          { field: "Playback", value: "ONCE", note: "No rewind and no second listen on any item" },
          { field: "Routing", value: "ADAPTIVE", note: "Module 2 is set by how Module 1 goes" },
        ]}
        tasks={[
          { name: "Choose a Response", detail: "Hear a question, pick the reply that fits", icon: MessageSquare },
          { name: "Conversation", detail: "A campus exchange between two speakers", icon: Users },
          { name: "Announcement", detail: "A short campus notice read aloud", icon: Megaphone },
          { name: "Academic Lecture", detail: "A mini-lecture with comprehension questions", icon: GraduationCap },
        ]}
        action="Start listening"
        onAction={startPractice}
        footnote="Check your volume before you board. Audio starts automatically and each clip plays exactly once."
      />
    );
  }

  // ==================== LISTENING STATE ====================
  if (state === "listening" && questions[currentQuestionIndex]) {
    const currentQ = questions[currentQuestionIndex];
    const audioData = getAudioSegments(currentQ); // Changed from getAudioText to getAudioSegments

    return (
      <div className="min-h-[calc(100vh-4rem)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`w-8 h-8 rounded-flap flex items-center justify-center ${currentQ.type === "choose_response" ? "bg-amber-500/20" :
 currentQ.type === "conversation" ? "bg-amber-500/20" :
 currentQ.type === "announcement" ? "bg-amber-500/20" :
 "bg-platform-500/20"
 }`}>
              <span className={
                currentQ.type === "choose_response" ? "text-amber-400" :
                  currentQ.type === "conversation" ? "text-amber-400" :
                    currentQ.type === "announcement" ? "text-amber-400" :
                      "text-platform-400"
              }>
                {getTaskIcon(currentQ.type)}
              </span>
            </div>
            <span className="text-sm font-medium text-white">{getTaskName(currentQ.type)}</span>
          </div>

          <div className={`flex items-center gap-2 px-4 py-2 glass-card rounded-panel border transition-colors ${sectionTimeLeft < 120 ? "border-signal-500/50 text-signal-400" : "border-white/5 text-white"}`}>
            <Clock className={`w-4 h-4 ${sectionTimeLeft < 120 ? "text-signal-400" : "text-amber-400"}`} />
            <span className="text-sm font-bold font-mono">
              Section Time: {formatTime(sectionTimeLeft)}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1.5 bg-steel-800/50 rounded-full mb-6 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            className="bg-amber-400 h-full rounded-full"
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        {/* Context Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel rounded-panel p-6 mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <Headphones className="w-5 h-5 text-amber-400" />
            <h3 className="font-semibold text-white">
              {currentQ.type === "choose_response" ? "Listen and Choose" :
                currentQ.type === "conversation" ? (currentQ.data as ConversationScenario).context :
                  currentQ.type === "announcement" ? (currentQ.data as AnnouncementScenario).context :
                    (currentQ.data as AcademicTalkScenario).topic}
            </h3>
          </div>

          {currentQ.type !== "choose_response" && (
            <p className="text-sm text-steel-400 mb-4">
              {currentQ.type === "conversation" ? (currentQ.data as ConversationScenario).setting :
                currentQ.type === "announcement" ? (currentQ.data as AnnouncementScenario).setting :
                  (currentQ.data as AcademicTalkScenario).subject}
            </p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel rounded-panel p-8 text-center max-w-2xl mx-auto"
          >
            <div className="glass-plate w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              {isPreloading ? <Loader2 className="w-10 h-10 text-white animate-spin" /> : <Volume2 className="w-10 h-10 text-white" />}
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              {isPreloading ? "Preparing Recording..." : isPlayingAudio ? "Listening..." : "Listen to the Prompt"}
            </h3>
            <p className="text-sm text-steel-400 mb-8 max-w-md mx-auto">
              {isPreloading ? "Retrieving transcriptions and generating high-quality dialogue segments..." : "The audio will play automatically. Listen carefully as you can only hear it once."}
            </p>

            {isPreloading ? (
              <div className="space-y-4">
                <div className="w-full h-2 bg-steel-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-amber-500"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  />
                </div>
                <p className="text-xs text-amber-400 animate-pulse font-medium uppercase tracking-widest">Preloading Conversation Flow</p>
              </div>
            ) : isPlayingAudio ? (
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3">
                  <div className="flex items-center gap-1.5">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ scaleY: [1, 2, 1] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.1 }}
                        className="w-1 h-4 bg-amber-400 rounded-full"
                      />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                    Speaking: {audioSegments[currentSegmentIndex]?.voice.split('_').pop()?.toUpperCase() || "NARRATOR"}
                  </span>
                </div>

                <div className="h-2 bg-steel-800 rounded-full overflow-hidden">
                  <motion.div
                    className="bg-amber-400 h-full"
                    style={{ width: `${audioProgress}%` }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </div>
            ) : !hasPlayedAudio && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => playAudioSegments(audioData)}
                disabled={isPreloading}
                className="bg-amber-400 px-10 py-4 text-concourse-deep rounded-panel shadow-lg flex items-center gap-3 mx-auto font-board uppercase tracking-[0.14em] font-bold"
              >
                <Play className="w-5 h-5 fill-current" />
                Play Audio
              </motion.button>
            )}

            {audioError && (
              <div className="mt-6 p-4 bg-signal-500/10 border border-signal-500/30 rounded-panel flex items-center gap-3 text-signal-400 text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                {audioError}
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-4 glass-card rounded-panel text-center"
        >
          <p className="text-sm text-steel-400">
            {currentQ.type === "choose_response"
              ? "Listen to the statement, then select the most appropriate response."
              : "Listen carefully to the audio. You will answer questions about what you heard."}
          </p>
        </motion.div>
      </div>
    );
  }

  // ==================== ANSWERING STATE ====================
  if (state === "answering") {
    const currentQ = questions[currentQuestionIndex];
    const questionDetails = getCurrentQuestion();

    if (!questionDetails) return null;

    return (
      <div className="min-h-[calc(100vh-4rem)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-panel">
              <span className={
                currentQ.type === "choose_response" ? "text-amber-400" :
                  currentQ.type === "conversation" ? "text-amber-400" :
                    currentQ.type === "announcement" ? "text-amber-400" :
                      "text-platform-400"
              }>
                {getTaskIcon(currentQ.type)}
              </span>
              <span className="text-sm font-medium text-white">{getTaskName(currentQ.type)}</span>
            </div>
          </div>

          <div className={`flex items-center gap-2 px-4 py-2 glass-card rounded-panel border transition-colors ${sectionTimeLeft < 120 ? "border-signal-500/50 text-signal-400" : "border-white/5 text-white"}`}>
            <Clock className={`w-4 h-4 ${sectionTimeLeft < 120 ? "text-signal-400" : "text-amber-400"}`} />
            <span className="text-sm font-bold font-mono">
              Section Time: {formatTime(sectionTimeLeft)}
            </span>
          </div>
        </div>

        {/* Question Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel rounded-panel p-6 mb-6"
        >
          <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-panel mb-6">
            <p className="text-lg text-white font-medium">{questionDetails.question}</p>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {questionDetails.options.map((option: string, index: number) => {
              const letter = String.fromCharCode(65 + index); // A, B, C, D
              const isSelected = selectedOption === letter;

              return (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setSelectedOption(letter)}
                  className={`w-full p-4 rounded-panel text-left transition-all flex items-start gap-4 ${isSelected
 ? "bg-amber-500/20 border-2 border-amber-500"
 : "glass-card border-2 border-transparent hover:border-steel-600"
 }`}
                >
                  <div className={`w-8 h-8 rounded-flap flex items-center justify-center flex-shrink-0 ${isSelected ? "bg-amber-500" : "bg-steel-700"
 }`}>
                    <span className={`font-bold text-sm ${isSelected ? "text-white" : "text-steel-400"}`}>
                      {letter}
                    </span>
                  </div>
                  <span className={`text-sm ${isSelected ? "text-white" : "text-steel-300"}`}>
                    {option}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: selectedOption ? 1.02 : 1 }}
          whileTap={{ scale: selectedOption ? 0.98 : 1 }}
          onClick={() => handleAnswer(selectedOption!)} // Updated to call handleAnswer
          disabled={!selectedOption}
          className="bg-amber-400 w-full px-6 py-4 disabled:cursor-not-allowed text-concourse-deep rounded-panel transition-all flex items-center justify-center gap-2 font-board uppercase tracking-[0.14em] font-bold"
        >
          Submit Answer
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
    );
  }

  // REMOVED PER-QUESTION FEEDBACK
  if (state === "feedback") {
    return null; // Should not hit this state per new flow
  }

  // ==================== REVIEW STATE ====================
  if (state === "review") {
    const overallBand = calculateBandScore();
    const overallScaled = calculateScaledScore();

    return (
      <div className="min-h-[calc(100vh-4rem)] p-4 lg:p-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel rounded-panel p-8 mb-8"
        >
          {/* Score Header */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="glass-plate inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 shadow-xl"
            >
              <Trophy className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold text-white mb-2">Listening Practice Result</h1>
            <p className="text-steel-400">Official 2026 Band Scoring (CEFR Aligned)</p>
          </div>

          {/* New Score Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <motion.div
              className="glass-card rounded-panel p-8 text-center border-l border-amber-500"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-5xl font-black text-amber-400 mb-2">{overallBand.toFixed(1)}</p>
              <p className="text-xs font-bold text-steel-500 uppercase tracking-widest">TOEFL Band Score</p>
              <div className="mt-3 inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-bold">
                {overallBand >= 5.0 ? "Expert" : overallBand >= 4.0 ? "Advanced" : "Standard"}
              </div>
            </motion.div>

            <motion.div
              className="glass-card rounded-panel p-8 text-center bg-white/[0.02]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-5xl font-black text-white mb-2">{overallScaled}</p>
              <p className="text-xs font-bold text-steel-500 uppercase tracking-widest">Scaled Score / 30</p>
              <div className="w-full h-1.5 bg-steel-800 rounded-full mt-4 overflow-hidden">
                <motion.div
                  className="h-full bg-amber-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${(overallScaled / 30) * 100}%` }}
                />
              </div>
            </motion.div>

            <motion.div
              className="glass-card rounded-panel p-8 text-center bg-white/[0.02]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex justify-center gap-1 mb-2">
                <span className="text-5xl font-black text-platform-400">{answers.filter(a => a.isCorrect).length}</span>
                <span className="text-2xl font-bold text-steel-600 self-end mb-1">/{answers.length}</span>
              </div>
              <p className="text-xs font-bold text-steel-500 uppercase tracking-widest">Correct Answers</p>
              <p className="text-[10px] text-steel-400 mt-2 italic">Based on {answers.length} questions</p>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setState("setup")}
              className="bg-amber-400 px-10 py-4 text-concourse-deep rounded-panel shadow-lg flex items-center justify-center gap-2 font-board uppercase tracking-[0.14em] font-bold"
            >
              <RotateCcw className="w-5 h-5" />
              Try New Module
            </motion.button>
          </div>
        </motion.div>

        {/* Detailed Answer Review Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-panel p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                Question Review
            </h2>
          </div>

          <div className="space-y-4">
            {answers.map((answer, idx) => (
              <div key={idx} className={`p-6 rounded-panel border ${answer.isCorrect ? 'bg-platform-500/5 border-platform-500/20' : 'bg-signal-500/5 border-signal-500/20'}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${answer.isCorrect ? 'bg-platform-500 text-white' : 'bg-signal-500 text-white'}`}>
                      {idx + 1}
                    </div>
                    <span className="text-base font-medium text-white">{answer.questionText}</span>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${answer.isCorrect ? 'bg-platform-500/20 text-platform-400' : 'bg-signal-500/20 text-signal-400'}`}>
                    {answer.isCorrect ? 'Correct' : 'Incorrect'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 pl-11">
                  <div>
                    <p className="text-[10px] font-bold text-steel-500 uppercase tracking-wider mb-1.5">Your Response</p>
                    <p className={`text-sm ${answer.isCorrect ? 'text-platform-400' : 'text-signal-400 font-medium'}`}>{answer.selectedOption || '-'}. {answer.selectedText || 'No answer'}</p>
                  </div>
                  {!answer.isCorrect && (
                    <div>
                      <p className="text-[10px] font-bold text-steel-500 uppercase tracking-wider mb-1.5">Correct Answer</p>
                      <p className="text-sm text-platform-400 font-medium">{answer.correctAnswer}. {answer.correctText}</p>
                    </div>
                  )}
                </div>

                <div className="mt-4 pl-11 pt-4 border-t border-white/5">
                  <p className="text-xs text-steel-400 leading-relaxed italic line-clamp-2 hover:line-clamp-none transition-all">
                    {answer.explanation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  return null;
}
