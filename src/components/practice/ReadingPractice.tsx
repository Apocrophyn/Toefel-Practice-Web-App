"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Clock,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  XCircle,
  RotateCcw,
  Flag,
  Sparkles,
  Timer,
  Trophy,
  Zap,
  ArrowRight,
  BrainCircuit,
  PenTool,
  AlertCircle,
  Target,
  TrendingUp,
  TrendingDown
} from "lucide-react";
import {
  ReadingSessionManager,
  READING_CONFIG,
  type ReadingQuestionItem,
  type CompleteWordsQuestion,
  type DailyLifeQuestion,
  type AcademicQuestion
} from "@/data/questions/reading-2026";

type PracticeState = "setup" | "intro_module1" | "practice" | "interim_report" | "intro_module2" | "review";
type ModuleType = "module1" | "module2_easy" | "module2_hard";

// Flattened step for the UI (one screen = one question or one complete-words task)
interface PracticeStep {
  id: string;
  stepType: "complete_words" | "multiple_choice";
  parentTaskType: "complete_words" | "daily_life" | "academic";
  data: any;
  passageContent: string;
  passageTitle?: string;
  parentId: string;
  fullAnswer?: any; // For review/feedback
}

interface Answer {
  stepId: string;
  value: any;
  isCorrect: boolean;
  timeSpent: number;
}

export function ReadingPractice() {
  // Session manager for no duplicates
  const sessionManager = useMemo(() => new ReadingSessionManager(), []);

  const [state, setState] = useState<PracticeState>("setup");
  const [currentModule, setCurrentModule] = useState<ModuleType>("module1");
  const [steps, setSteps] = useState<PracticeStep[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});

  // Timer state
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [flaggedSteps, setFlaggedSteps] = useState<Set<string>>(new Set());

  // Module 1 stats for adaptive logic
  const [module1Stats, setModule1Stats] = useState<{ correct: number; total: number }>({ correct: 0, total: 0 });

  // Helper: Flatten the hierarchical data into steps
  const flattenQuestions = useCallback((items: ReadingQuestionItem[]): PracticeStep[] => {
    const flatSteps: PracticeStep[] = [];

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
            data: {
              ...q,
              passageId: item.id
            },
            passageContent: item.passage,
            passageTitle: (item as AcademicQuestion).title,
            parentId: item.id
          });
        });
      }
    });
    return flatSteps;
  }, []);

  // Timer effect
  useEffect(() => {
    if (state !== "practice" || timeRemaining <= 0) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleModuleFinish();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [state, timeRemaining]);

  // Start Module 1 with proper configuration
  const startModule1 = useCallback(() => {
    // Reset the session manager for a fresh start
    sessionManager.reset();

    // Select questions using the session manager (ensures no duplicates)
    const selectedQuestions = sessionManager.selectModule1Questions(READING_CONFIG.MODULE1_QUESTIONS);

    const flatSteps = flattenQuestions(selectedQuestions);
    setSteps(flatSteps);
    setCurrentIndex(0);
    setCurrentModule("module1");
    setTimeRemaining(READING_CONFIG.MODULE1_TIME);
    setQuestionStartTime(Date.now());
    setAnswers({});
    setFlaggedSteps(new Set());
    setState("practice");
  }, [flattenQuestions, sessionManager]);

  // Start Module 2 based on adaptive path
  const startModule2 = useCallback((track: "easy" | "hard") => {
    // Record module 1 performance
    sessionManager.recordModule1Performance(module1Stats.correct, module1Stats.total);

    // Select module 2 questions (session manager ensures no duplicates from module 1)
    const selectedQuestions = sessionManager.selectModule2Questions(track, READING_CONFIG.MODULE2_QUESTIONS);

    const flatSteps = flattenQuestions(selectedQuestions);
    setSteps(flatSteps);
    setCurrentIndex(0);
    setCurrentModule(track === "hard" ? "module2_hard" : "module2_easy");
    // Adaptive timing: Hard track = 18 min, Easy track = 9 min
    setTimeRemaining(track === "hard" ? READING_CONFIG.MODULE2_TIME_HARD : READING_CONFIG.MODULE2_TIME_EASY);
    setQuestionStartTime(Date.now());
    setState("practice");
  }, [flattenQuestions, sessionManager, module1Stats]);

  const handleAnswer = (val: any) => {
    const step = steps[currentIndex];
    const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000);

    let isCorrect = false;
    if (step.stepType === "multiple_choice") {
      isCorrect = val === step.data.correctAnswer;
    } else if (step.stepType === "complete_words") {
      // Check if all blanks are correct
      const blanks = (step.data as CompleteWordsQuestion).blanks;
      const userBlanks = val as Record<number, string>;
      isCorrect = blanks.every(b => (userBlanks[b.position] || "").toLowerCase().trim() === b.answer.toLowerCase().trim());
    }

    setAnswers(prev => ({
      ...prev,
      [step.id]: {
        stepId: step.id,
        value: val,
        isCorrect,
        timeSpent: (prev[step.id]?.timeSpent || 0) + timeSpent
      }
    }));
    setQuestionStartTime(Date.now());
  };

  const goToStep = (index: number) => {
    if (index >= 0 && index < steps.length) {
      setCurrentIndex(index);
      setQuestionStartTime(Date.now());
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const toggleFlag = () => {
    const stepId = steps[currentIndex].id;
    setFlaggedSteps((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(stepId)) newSet.delete(stepId);
      else newSet.add(stepId);
      return newSet;
    });
  };

  // Calculate stats for current module
  const getModuleStats = useCallback(() => {
    const stepIds = steps.map(s => s.id);
    const moduleAnswers = stepIds.map(id => answers[id]).filter(Boolean);
    const correctCount = moduleAnswers.filter(a => a.isCorrect).length;
    return {
      total: stepIds.length,
      answered: moduleAnswers.length,
      correct: correctCount,
      accuracy: moduleAnswers.length > 0 ? correctCount / moduleAnswers.length : 0
    };
  }, [steps, answers]);

  const handleModuleFinish = useCallback(() => {
    // Collect stats for history before moving
    const stats = getModuleStats();

    if (currentModule === "module1") {
      setModule1Stats({ correct: stats.correct, total: stats.answered });
      setState("interim_report");
    } else {
      setState("review");
    }
  }, [currentModule, getModuleStats]);

  // Helper function to render text with simple bold formatting
  const renderTextWithFormatting = (text: string) => {
    if (!text) return null;

    // Split by ** delimiters
    const parts = text.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="text-white font-bold">
            {part.substring(2, part.length - 2)}
          </strong>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  const calculateFinalScore = () => {
    const allAnswers = Object.values(answers);
    const correct = allAnswers.filter(a => a.isCorrect).length;
    const total = allAnswers.length;
    const percentage = total > 0 ? (correct / total) * 100 : 0;

    // TOEFL 1-6 scale mapping
    if (percentage >= 95) return 6.0;
    if (percentage >= 88) return 5.5;
    if (percentage >= 80) return 5.0;
    if (percentage >= 70) return 4.5;
    if (percentage >= 60) return 4.0;
    if (percentage >= 50) return 3.5;
    if (percentage >= 40) return 3.0;
    if (percentage >= 30) return 2.5;
    if (percentage >= 20) return 2.0;
    return 1.5;
  };

  // Restart completely
  const handleRestart = () => {
    sessionManager.reset();
    setAnswers({});
    setModule1Stats({ correct: 0, total: 0 });
    setFlaggedSteps(new Set());
    setState("setup");
  };

  // Setup Screen
  if (state === "setup") {
    return (
      <div className="h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel rounded-2xl p-8 h-full flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/25">
                <BrainCircuit className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Adaptive Reading</h1>
              <p className="text-slate-400">Official TOEFL 2026 Format • {READING_CONFIG.TOTAL_QUESTIONS} Questions</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none text-slate-300 mb-8">
            <p className="text-lg">
              This practice session simulates the <strong>Multistage Adaptive</strong> format of the new TOEFL iBT effective <strong>January 21, 2026</strong>.
            </p>

            {/* Format Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">Duration</span>
                </div>
                <p className="text-sm text-slate-400">
                  18-27 minutes (adaptive)<br />
                  Module 2 varies by track
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-semibold">Questions</span>
                </div>
                <p className="text-sm text-slate-400">
                  {READING_CONFIG.TOTAL_QUESTIONS} questions<br />
                  (10 per module)
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-emerald-400" />
                  <span className="text-white font-semibold">Adaptive</span>
                </div>
                <p className="text-sm text-slate-400">
                  Module 2 adjusts<br />
                  based on Module 1
                </p>
              </div>
            </div>

            {/* Module explanation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs">1</div>
                  Module 1: Baseline
                </h3>
                <p className="text-sm text-slate-400">
                  Mixed difficulty questions including Complete the Words, Daily Life texts, and Academic passages. Performance determines your next path.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs">2</div>
                  Module 2: Adaptive
                </h3>
                <p className="text-sm text-slate-400">
                  ≥60% accuracy → <strong className="text-emerald-400">Hard Track</strong> (C1-C2 Academic)<br />
                  &lt;60% accuracy → <strong className="text-amber-400">Standard Track</strong> (B1-B2 Daily Life)
                </p>
              </div>
            </div>

            {/* Task Types */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
              <h3 className="font-semibold text-white mb-3">Task Types</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <PenTool className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span><strong className="text-white">Complete the Words:</strong> Fill in missing letters in passages</span>
                </li>
                <li className="flex items-start gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-400 mt-0.5" />
                  <span><strong className="text-white">Daily Life:</strong> Emails, announcements, campus notices</span>
                </li>
                <li className="flex items-start gap-2">
                  <BrainCircuit className="w-4 h-4 text-purple-400 mt-0.5" />
                  <span><strong className="text-white">Academic:</strong> Complex passages with comprehension questions</span>
                </li>
              </ul>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={startModule1}
            className="w-full mt-auto px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
          >
            Start Module 1
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    );
  }

  // Interim Report (Between Module 1 and 2)
  if (state === "interim_report") {
    const stats = getModuleStats();
    const accuracy = stats.answered > 0 ? stats.correct / stats.answered : 0;
    const isAdvanced = accuracy >= READING_CONFIG.HARD_TRACK_THRESHOLD;

    return (
      <div className="h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel rounded-2xl p-10 max-w-lg w-full text-center"
        >
          <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-xl ${isAdvanced
            ? "bg-gradient-to-br from-emerald-400 to-green-500 shadow-emerald-500/20"
            : "bg-gradient-to-br from-amber-400 to-orange-500 shadow-amber-500/20"
            }`}>
            <CheckCircle className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">Module 1 Complete!</h2>
          <p className="text-slate-400 mb-4">
            You answered <span className="text-white font-semibold">{stats.answered}</span> questions
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-2xl font-bold text-white">{stats.correct}/{stats.answered}</div>
              <div className="text-sm text-slate-400">Correct</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-2xl font-bold text-white">{Math.round(accuracy * 100)}%</div>
              <div className="text-sm text-slate-400">Accuracy</div>
            </div>
          </div>

          <div className={`p-5 rounded-xl border mb-8 text-left ${isAdvanced
            ? "bg-emerald-500/10 border-emerald-500/30"
            : "bg-amber-500/10 border-amber-500/30"
            }`}>
            <div className="flex items-center gap-2 mb-2">
              {isAdvanced ? (
                <TrendingUp className="w-5 h-5 text-emerald-400" />
              ) : (
                <TrendingDown className="w-5 h-5 text-amber-400" />
              )}
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">NEXT UP</p>
            </div>
            <h3 className={`text-xl font-bold mb-1 ${isAdvanced ? "text-emerald-400" : "text-amber-400"}`}>
              {isAdvanced ? "Advanced Track (Hard)" : "Standard Track (Easy)"}
            </h3>
            <p className="text-sm text-slate-400">
              {isAdvanced
                ? "Based on your strong performance (≥60%), you'll tackle advanced academic passages with complex inference and analysis questions."
                : "The next module focuses on daily life scenarios with practical reading comprehension. Build your accuracy before advancing."}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => startModule2(isAdvanced ? "hard" : "easy")}
            className={`w-full px-6 py-4 text-white font-semibold rounded-xl ${isAdvanced
              ? "bg-gradient-to-r from-emerald-500 to-teal-500"
              : "bg-gradient-to-r from-amber-500 to-orange-500"
              }`}
          >
            Continue to Module 2
            <ArrowRight className="w-5 h-5 ml-2 inline" />
          </motion.button>
        </motion.div>
      </div>
    );
  }

  // Practice Screen
  if (state === "practice" && steps.length > 0) {
    const currentStep = steps[currentIndex];
    const currentAnswer = answers[currentStep.id]?.value;
    const isFlagged = flaggedSteps.has(currentStep.id);
    const stats = getModuleStats();

    // Renderer for "Complete the Words"
    const renderCompleteWords = (question: CompleteWordsQuestion) => {
      const userBlanks = (currentAnswer as Record<number, string>) || {};

      // Build elements with inline inputs
      let lastIndex = 0;
      const elements: JSX.Element[] = [];

      question.blanks.forEach((blank, idx) => {
        const partial = blank.partialWord;
        const start = question.passage.indexOf(partial, lastIndex);
        if (start !== -1) {
          // Add text before
          elements.push(<span key={`txt-${idx}`}>{renderTextWithFormatting(question.passage.substring(lastIndex, start))}</span>);

          // Calculate correct number of underscores based on answer length
          const prefix = partial.replace(/_+/g, '');
          const neededLetters = blank.answer.length - prefix.length;
          const underscoreCount = neededLetters > 0 ? neededLetters : (partial.match(/_/g) || []).length;
          const userAnswer = userBlanks[blank.position] || "";

          // Create visual spacing boxes for each missing letter
          const visualBoxes: JSX.Element[] = [];
          for (let i = 0; i < underscoreCount; i++) {
            const charValue = userAnswer[prefix.length + i] || '';
            visualBoxes.push(
              <span
                key={`box-${idx}-${i}`}
                className={`inline-block w-7 h-9 border-b-2 ${charValue
                  ? 'border-cyan-400 bg-cyan-500/10'
                  : 'border-slate-600 bg-slate-800/30'
                  } text-center leading-9 text-white font-medium transition-all duration-200`}
                title={`Letter ${i + 1} of ${underscoreCount}`}
              >
                {charValue}
              </span>
            );
          }

          elements.push(
            <span key={`input-${idx}`} className="inline-flex items-baseline mx-1 relative group">
              <span className="text-cyan-400 font-semibold">{prefix}</span>
              <span className="inline-flex gap-0.5 mx-1 cursor-text">
                {visualBoxes}
              </span>
              <input
                type="text"
                maxLength={underscoreCount}
                className="absolute left-0 top-0 w-full h-full opacity-0 cursor-text z-10"
                value={userAnswer.slice(prefix.length) || ''}
                onChange={(e) => {
                  const fullWord = prefix + e.target.value.toLowerCase();
                  const newBlanks = { ...userBlanks, [blank.position]: fullWord };
                  handleAnswer(newBlanks);
                }}
                placeholder=""
                aria-label={`Complete the word: ${prefix} (${underscoreCount} letters)`}
              />
              <span className="absolute -top-7 left-0 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none bg-slate-900 px-2 py-1 rounded">
                Click to type • {underscoreCount} {underscoreCount === 1 ? 'letter' : 'letters'}
              </span>
            </span>
          );
          lastIndex = start + partial.length;
        }
      });
      // Add remaining text
      elements.push(<span key="txt-end">{question.passage.substring(lastIndex)}</span>);

      return (
        <div className="leading-loose text-lg text-slate-300">
          {elements}
          <div className="mt-6 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
            <p className="text-sm text-cyan-300 mb-2">💡 Tip: Click on the blank spaces to type your answers</p>
            <p className="text-xs text-slate-400">Each box represents one letter. The number of boxes shows how many letters you need to type.</p>
          </div>
        </div>
      );
    };

    return (
      <div className="min-h-[calc(100vh-4rem)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${currentModule === "module1"
              ? "bg-cyan-500/20 border border-cyan-500/30 text-cyan-400"
              : currentModule === "module2_hard"
                ? "bg-emerald-500/20 border border-emerald-500/30 text-emerald-400"
                : "bg-amber-500/20 border border-amber-500/30 text-amber-400"
              }`}>
              <span className="text-sm font-medium capitalize">
                {currentModule === "module1" ? "Module 1" :
                  currentModule === "module2_hard" ? "Module 2 (Hard)" : "Module 2 (Easy)"}
              </span>
            </div>

            {/* Progress dots */}
            <div className="flex items-center gap-1">
              {steps.slice(0, 20).map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${idx === currentIndex
                    ? "bg-cyan-400 scale-125"
                    : answers[steps[idx]?.id]
                      ? answers[steps[idx].id].isCorrect
                        ? "bg-emerald-400"
                        : "bg-red-400"
                      : "bg-slate-700"
                    }`}
                  onClick={() => goToStep(idx)}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Stats */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 glass-card rounded-lg text-sm">
              <span className="text-slate-400">Answered:</span>
              <span className="text-white font-medium">{stats.answered}/{steps.length}</span>
            </div>

            {/* Timer */}
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${timeRemaining < 60
                ? "bg-red-500/20 border border-red-500/30 text-red-400"
                : timeRemaining < 180
                  ? "bg-amber-500/20 border border-amber-500/30 text-amber-400"
                  : "glass-card text-white"
                }`}
            >
              <Clock className={`w-4 h-4 ${timeRemaining < 60 ? "animate-pulse" : ""}`} />
              <span className="font-mono text-sm font-medium">
                {formatTime(timeRemaining)}
              </span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleModuleFinish}
              className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium rounded-xl"
            >
              Finish Section
            </motion.button>
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-12rem)]">
          {/* Left Panel: Passage */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-panel rounded-2xl p-6 overflow-y-auto"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${currentStep.parentTaskType === "academic"
                ? "bg-purple-500/20 text-purple-400"
                : currentStep.parentTaskType === "complete_words"
                  ? "bg-cyan-500/20 text-cyan-400"
                  : "bg-emerald-500/20 text-emerald-400"
                }`}>
                {currentStep.parentTaskType === "complete_words"
                  ? "COMPLETE THE WORDS"
                  : currentStep.parentTaskType.replace('_', ' ').toUpperCase()}
              </div>
              {currentStep.passageTitle && (
                <h3 className="text-white font-semibold">{currentStep.passageTitle}</h3>
              )}
            </div>

            {currentStep.stepType === "complete_words" ? (
              renderCompleteWords(currentStep.data as CompleteWordsQuestion)
            ) : (
              <div className="prose prose-invert prose-sm max-w-none text-slate-300 whitespace-pre-wrap leading-relaxed">
                {renderTextWithFormatting(currentStep.passageContent)}
              </div>
            )}
          </motion.div>

          {/* Right Panel: Question & Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            key={currentStep.id}
            className="glass-panel rounded-2xl flex flex-col h-full overflow-hidden"
          >
            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto p-6">
              {currentStep.stepType === "complete_words" ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-4">
                    <PenTool className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Complete the Passage</h3>
                  <p className="text-slate-400 mb-4">
                    Type the missing letters in the input boxes to complete the words.
                    Use context clues from the passage!
                  </p>

                  {/* Show blank status */}
                  <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 w-full max-w-sm">
                    <p className="text-sm text-slate-400 mb-2">Blanks to complete:</p>
                    <div className="space-y-2">
                      {(currentStep.data as CompleteWordsQuestion).blanks.map((blank, idx) => {
                        const userBlanks = (currentAnswer as Record<number, string>) || {};
                        const userAnswer = userBlanks[blank.position] || "";
                        const hasInput = userAnswer.length > blank.partialWord.replace(/_/g, '').length;

                        return (
                          <div key={idx} className="flex items-center justify-between text-sm">
                            <span className="text-slate-300">{blank.partialWord}</span>
                            <span className={hasInput ? "text-emerald-400" : "text-slate-600"}>
                              {hasInput ? "✓" : "○"}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-lg font-semibold text-white">
                      {currentStep.data.question}
                    </h3>
                    <button
                      onClick={toggleFlag}
                      className={`p-2 rounded-lg ${isFlagged ? "text-amber-400 bg-amber-400/10" : "text-slate-500 hover:text-white"}`}
                      title="Flag for review"
                    >
                      <Flag className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {currentStep.data.options.map((option: string, idx: number) => {
                      const letter = String.fromCharCode(65 + idx);
                      const isSelected = currentAnswer === letter;
                      return (
                        <button
                          key={idx}
                          onClick={() => handleAnswer(letter)}
                          className={`w-full text-left p-4 rounded-xl border transition-all ${isSelected
                            ? "bg-cyan-500/20 border-cyan-500 text-white"
                            : "bg-white/5 border-transparent hover:bg-white/10 text-slate-300"
                            }`}
                        >
                          <span className="font-bold mr-3">{letter}.</span>
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            {/* Fixed Navigation Footer */}
            <div className="p-6 border-t border-white/10 bg-slate-900/20 flex items-center justify-between mt-auto">
              <button
                onClick={() => goToStep(currentIndex - 1)}
                disabled={currentIndex === 0}
                className="flex items-center gap-2 text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
                title="Previous Question"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>

              <div className="text-xs text-slate-500 font-medium hidden sm:block">
                Question {currentIndex + 1} of {steps.length}
              </div>

              <button
                onClick={() => goToStep(currentIndex + 1)}
                disabled={currentIndex === steps.length - 1}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/20 disabled:shadow-none transition-all"
                title="Next Question"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Review Screen (Final)
  if (state === "review") {
    const score = calculateFinalScore();
    const allAnswers = Object.values(answers);
    const correct = allAnswers.filter(a => a.isCorrect).length;
    const total = allAnswers.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

    // Determine the track that was taken
    const trackTaken = currentModule === "module2_hard" ? "Hard (Advanced)" : "Easy (Standard)";

    return (
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass-panel p-10 rounded-2xl max-w-2xl w-full text-center"
        >
          <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-2">Practice Complete!</h1>
          <p className="text-slate-400 mb-8">You have completed both modules of the adaptive reading test.</p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
              <div className="text-3xl font-bold text-white">{score}</div>
              <div className="text-sm text-cyan-200">Band Score (1-6)</div>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="text-3xl font-bold text-white">{correct}/{total}</div>
              <div className="text-sm text-slate-400">Correct</div>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="text-3xl font-bold text-white">{percentage}%</div>
              <div className="text-sm text-slate-400">Accuracy</div>
            </div>
          </div>

          {/* Track Info */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-8">
            <p className="text-sm text-slate-400">
              Adaptive Path: <span className={`font-semibold ${currentModule === "module2_hard" ? "text-emerald-400" : "text-amber-400"}`}>{trackTaken}</span>
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Module 1: {module1Stats.correct}/{module1Stats.total} correct ({Math.round((module1Stats.correct / module1Stats.total) * 100) || 0}%)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className={`p-4 rounded-xl border text-left ${module1Stats.correct / module1Stats.total >= 0.6 ? "bg-emerald-500/5 border-emerald-500/20" : "bg-amber-500/5 border-amber-500/20"}`}>
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-semibold text-slate-500 uppercase">Module 1 (Baseline)</span>
              </div>
              <div className="text-xl font-bold text-white mb-1">
                {module1Stats.correct} / {module1Stats.total}
              </div>
              <p className="text-xs text-slate-400">Accuracy: {Math.round((module1Stats.correct / module1Stats.total) * 100) || 0}%</p>
            </div>

            <div className={`p-4 rounded-xl border text-left ${currentModule === "module2_hard" ? "bg-purple-500/5 border-purple-500/20" : "bg-blue-500/5 border-blue-500/20"}`}>
              <div className="flex items-center gap-2 mb-2">
                <BrainCircuit className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-semibold text-slate-500 uppercase">Module 2 ({currentModule === "module2_hard" ? "Hard" : "Easy"})</span>
              </div>
              <div className="text-xl font-bold text-white mb-1">
                {correct - module1Stats.correct} / {total - module1Stats.total}
              </div>
              <p className="text-xs text-slate-400">Accuracy: {Math.round(((correct - module1Stats.correct) / (total - module1Stats.total)) * 100) || 0}%</p>
            </div>
          </div>

          {/* Detailed Incorrect Answer Breakdown */}
          {allAnswers.some(a => !a.isCorrect) && (
            <div className="mb-8 text-left">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-400" />
                Review Incorrect Responses
              </h3>
              <div className="space-y-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {steps.map(step => {
                  const answer = answers[step.id];
                  if (!answer || answer.isCorrect) return null;

                  if (step.stepType === "multiple_choice") {
                    return (
                      <div key={step.id} className="p-4 rounded-xl bg-white/5 border border-red-500/20">
                        <p className="text-sm font-medium text-white mb-1">{step.data.question}</p>
                        <div className="flex gap-4 text-xs">
                          <span className="text-red-400">Your Answer: {answer.value}</span>
                          <span className="text-emerald-400">Correct: {step.data.correctAnswer}</span>
                        </div>
                      </div>
                    );
                  } else if (step.stepType === "complete_words") {
                    const question = step.data as CompleteWordsQuestion;
                    return (
                      <div key={step.id} className="p-4 rounded-xl bg-white/5 border border-red-500/20">
                        <p className="text-sm font-medium text-white mb-2">Complete the Word Passage Errors:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {question.blanks.map((blank, bIdx) => {
                            const userVal = (answer.value[blank.position] || "").toLowerCase().trim();
                            const correctVal = blank.answer.toLowerCase().trim();
                            if (userVal === correctVal) return null;
                            return (
                              <div key={bIdx} className="text-xs p-2 rounded bg-black/20 flex flex-col gap-1">
                                <span className="text-slate-500">For prefix "{blank.partialWord.replace(/_/g, '')}":</span>
                                <div className="flex justify-between">
                                  <span className="text-red-400">You typed: {userVal || "(blank)"}</span>
                                  <span className="text-emerald-400">Expected: {correctVal}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <button
              onClick={handleRestart}
              className="flex-1 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:from-cyan-400 hover:to-purple-400 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Start New Session
            </button>
          </div>

          <p className="mt-6 text-xs text-slate-500">
            All questions in this session were unique — no duplicates across modules.
          </p>
        </motion.div>
      </div>
    );
  }

  return null;
}
