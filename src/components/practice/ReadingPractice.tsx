"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
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
  READING_CONFIG,
  type ReadingQuestionItem,
  type CompleteWordsQuestion,
  type DailyLifeQuestion,
  type AcademicQuestion
} from "@/data/questions/reading-2026";
import {
  buildReadingRouter,
  buildReadingSecondModule,
  type ReadingForm,
} from "@/lib/toefl/reading-form";
import { ROUTING, SECTIONS, moduleSeconds, routeToModule } from "@/data/toefl-2026-blueprint";
import { BoardButton, FlapClock, ScoreBoard } from "@/components/board";
import { DailyLifeArtefact } from "@/components/practice/DailyLifeArtefact";

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
  /** Read in Daily Life only: the artefact genre, used to pick a layout. */
  passageCategory?: string;
  parentId: string;
  fullAnswer?: any; // For review/feedback
}

interface Answer {
  stepId: string;
  value: any;
  isCorrect: boolean;
  /**
   * Raw points earned and available. A multiple-choice step is worth 1; a
   * Complete the Words paragraph is worth one point PER BLANK, because ten gaps
   * are ten scored items on the real test.
   */
  pointsEarned: number;
  pointsPossible: number;
  timeSpent: number;
}

export function ReadingPractice() {
  // Session manager for no duplicates
  const readingFormRef = useRef<ReadingForm | null>(null);

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
            passageCategory: (item as DailyLifeQuestion).category,
            parentId: item.id
          });
        });
      }
    });
    return flatSteps;
  }, []);



  // Router module: 33 items assembled to the blueprint's ITEM counts.
  const startModule1 = useCallback(() => {
    const form = buildReadingRouter();
    readingFormRef.current = form;
    if (form.router.shortfall.length) {
      console.warn("[Reading form] bank shortfall:", form.router.shortfall);
    }

    setSteps(flattenQuestions(form.router.items));
    setCurrentIndex(0);
    setCurrentModule("module1");
    setTimeRemaining(SECTIONS.reading.timing.routerSeconds ?? READING_CONFIG.MODULE1_TIME);
    setQuestionStartTime(Date.now());
    setAnswers({});
    setFlaggedSteps(new Set());
    setState("practice");
  }, [flattenQuestions]);

  // Second module: 17 further items, drawn from stimuli the router did not use.
  const startModule2 = useCallback((track: "easy" | "hard") => {
    const form = readingFormRef.current ?? buildReadingRouter();
    const route = track === "hard" ? "upper" : "lower";
    const module2 = buildReadingSecondModule(form, route);
    if (module2.shortfall.length) {
      console.warn("[Reading form] bank shortfall:", module2.shortfall);
    }

    setSteps(flattenQuestions(module2.items));
    setCurrentIndex(0);
    setCurrentModule(track === "hard" ? "module2_hard" : "module2_easy");
    // ETS gives the second reading module 9 minutes on both routes.
    setTimeRemaining(moduleSeconds("reading", route));
    setQuestionStartTime(Date.now());
    setState("practice");
  }, [flattenQuestions]);

  const handleAnswer = (val: any) => {
    const step = steps[currentIndex];
    const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000);

    // Each Complete the Words gap is its own scored item on the real test, so
    // the step is tracked in points rather than as a single boolean: a paragraph
    // with nine of ten gaps right must score nine, not zero.
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
        return total + (typed === answer || typed === answer.slice(stem.length) ? 1 : 0);
      }, 0);
    }

    setAnswers(prev => ({
      ...prev,
      [step.id]: {
        stepId: step.id,
        value: val,
        isCorrect: pointsEarned === pointsPossible,
        pointsEarned,
        pointsPossible,
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
  /**
   * Stats are in POINTS, not steps. A ten-gap paragraph counts for ten, exactly
   * as it does on the real test, so it cannot swing routing like a single
   * multiple-choice item.
   */
  const getModuleStats = useCallback(() => {
    const stepIds = steps.map(s => s.id);
    const moduleAnswers = stepIds.map(id => answers[id]).filter(Boolean);
    const earned = moduleAnswers.reduce((t, a) => t + a.pointsEarned, 0);
    const possible = steps.reduce(
      (t, step) => t + (step.stepType === "complete_words" ? (step.data as CompleteWordsQuestion).blanks.length : 1),
      0
    );
    return {
      total: possible,
      answered: possible,
      correct: earned,
      accuracy: possible > 0 ? earned / possible : 0
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
  }, [state, timeRemaining, handleModuleFinish]);

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
    readingFormRef.current = null;
    setAnswers({});
    setModule1Stats({ correct: 0, total: 0 });
    setFlaggedSteps(new Set());
    setState("setup");
  };

  // Setup Screen — the section's manifest, posted before it boards.
  if (state === "setup") {
    return (
      <div className="h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel rounded-panel p-8 h-full flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="relative">
              <div className="glass-plate w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
                <BrainCircuit className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Adaptive Reading</h1>
              <p className="text-slate-400">Official TOEFL 2026 Format • {SECTIONS.reading.totalItems} items</p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none text-slate-300 mb-8">
            <p className="text-lg">
              This practice session simulates the <strong>Multistage Adaptive</strong> format of the new TOEFL iBT effective <strong>January 21, 2026</strong>.
            </p>

            {/* Format Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-panel bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">Duration</span>
                </div>
                <p className="text-sm text-slate-400">
                  27-30 minutes (adaptive)<br />
                  Router 18-21 min + module 2 of 9 min
                </p>
              </div>
              <div className="p-4 rounded-panel bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-semibold">Questions</span>
                </div>
                <p className="text-sm text-slate-400">
                  {SECTIONS.reading.totalItems} items<br />
                  (33 router + 17 in module 2)
                </p>
              </div>
              <div className="p-4 rounded-panel bg-white/5 border border-white/10">
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
              <div className="p-4 rounded-panel bg-white/5 border border-white/10">
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs">1</div>
                  Module 1: Baseline
                </h3>
                <p className="text-sm text-slate-400">
                  Mixed difficulty questions including Complete the Words, Daily Life texts, and Academic passages. Performance determines your next path.
                </p>
              </div>
              <div className="p-4 rounded-panel bg-white/5 border border-white/10">
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
            <div className="bg-steel-900/70 mt-6 p-4 rounded-panel border border-cyan-500/20">
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
            className="bg-amber-400 w-full mt-auto px-6 py-4 text-concourse-deep rounded-panel transition-all duration-300 flex items-center justify-center gap-2 shadow-lg font-board uppercase tracking-[0.14em] font-bold"
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
    const isAdvanced = routeToModule(stats.correct, stats.answered) === "upper";

    return (
      <div className="h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel rounded-panel p-10 max-w-lg w-full text-center"
        >
          <div className={`glass-plate w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-xl ${isAdvanced
 ? " "
 : " "
 }`}>
            <CheckCircle className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">Module 1 Complete!</h2>
          <p className="text-steel-400 mb-4">
            You answered <span className="text-white font-semibold">{stats.answered}</span> questions
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-panel bg-white/5 border border-white/10">
              <div className="text-2xl font-bold text-white">{stats.correct}/{stats.answered}</div>
              <div className="text-sm text-steel-400">Correct</div>
            </div>
            <div className="p-4 rounded-panel bg-white/5 border border-white/10">
              <div className="text-2xl font-bold text-white">{Math.round(accuracy * 100)}%</div>
              <div className="text-sm text-steel-400">Accuracy</div>
            </div>
          </div>

          <div className={`p-5 rounded-panel border mb-8 text-left ${isAdvanced
 ? "bg-platform-500/10 border-platform-500/30"
 : "bg-amber-500/10 border-amber-500/30"
 }`}>
            <div className="flex items-center gap-2 mb-2">
              {isAdvanced ? (
                <TrendingUp className="w-5 h-5 text-platform-400" />
              ) : (
                <TrendingDown className="w-5 h-5 text-amber-400" />
              )}
              <p className="text-xs font-semibold text-steel-500 uppercase tracking-widest">NEXT UP</p>
            </div>
            <h3 className={`text-xl font-bold mb-1 ${isAdvanced ? "text-platform-400" : "text-amber-400"}`}>
              {isAdvanced ? "Advanced Track (Hard)" : "Standard Track (Easy)"}
            </h3>
            <p className="text-sm text-steel-400">
              {isAdvanced
                ? "Based on your strong performance (≥60%), you'll tackle advanced academic passages with complex inference and analysis questions."
                : "The next module focuses on daily life scenarios with practical reading comprehension. Build your accuracy before advancing."}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => startModule2(isAdvanced ? "hard" : "easy")}
            className={`bg-amber-400 w-full px-6 py-4 text-concourse-deep rounded-panel ${isAdvanced
 ? " "
 : " "
 } font-board uppercase tracking-[0.14em] font-bold`}
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

          // A fixed-width blank and a free-text field. This deliberately does NOT
          // reveal how many letters are missing: the previous renderer drew one
          // box per missing letter and even labelled it "N letters", which gave
          // away information the real test is not confirmed to give.
          const prefix = partial.replace(/_+/g, '');
          const userAnswer = userBlanks[blank.position] || "";

          elements.push(
            <span key={`input-${idx}`} className="inline-flex items-baseline mx-0.5">
              <span className="text-cyan-400 font-semibold">{prefix}</span>
              <input
                type="text"
                className="w-20 mx-0.5 px-1 bg-slate-800/40 border-b-2 border-slate-600 focus:border-cyan-400 focus:bg-cyan-500/10 outline-none text-white font-medium text-center transition-colors"
                value={userAnswer.slice(prefix.length) || ''}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                onChange={(e) => {
                  const letters = e.target.value.replace(/[^A-Za-z'-]/g, '').toLowerCase();
                  handleAnswer({ ...userBlanks, [blank.position]: prefix + letters });
                }}
                aria-label={`Complete the word beginning ${prefix}`}
              />
            </span>
          );
          lastIndex = start + partial.length;
        }
      });
      // Add remaining text
      elements.push(<span key="txt-end">{question.passage.substring(lastIndex)}</span>);

      return (
        <div className="leading-loose text-lg text-steel-300">
          {elements}
          <div className="mt-6 p-4 rounded-panel bg-cyan-500/10 border border-cyan-500/20">
            <p className="text-sm text-cyan-300 mb-2">Click a blank and type the missing letters.</p>
            <p className="text-xs text-slate-400">The blank does not show how many letters are missing. Use the sentence around it to work out the whole word, and check the spelling.</p>
          </div>
        </div>
      );
    };

    return (
      <div className="min-h-[calc(100vh-4rem)]">
        {/* Board strip — what is running, how far in, and how long is left.
            The clock is the single most consequential value on this screen, so
            it is set an order of magnitude larger than everything beside it. */}
        <div className="steel-grain mb-6 flex flex-wrap items-center gap-x-6 gap-y-4 rounded-panel border border-steel-800 px-4 py-3 sm:px-5">
          <div className="flex min-w-0 flex-1 items-center gap-4">
            <span
              className={`grid h-8 shrink-0 place-items-center rounded-flap border px-2.5 font-board text-[11px] font-bold uppercase tracking-[0.14em] ${
 currentModule === "module1"
 ? "border-steel-700 bg-concourse-deep text-steel-300"
 : currentModule === "module2_hard"
 ? "border-platform-700 bg-platform-900/60 text-platform-400"
 : "border-amber-800 bg-amber-900/50 text-amber-400"
 }`}
            >
              {currentModule === "module1"
                ? "Module 1"
                : currentModule === "module2_hard"
                  ? "Module 2 · Hard"
                  : "Module 2 · Standard"}
            </span>

            {/* Question track: one cell per question, the way a board reserves
                a row per departure. Answered cells are painted. */}
            <div className="flex min-w-0 items-center gap-[3px] overflow-hidden" role="list">
              {steps.slice(0, 20).map((_, idx) => {
                const answer = answers[steps[idx]?.id];
                const isCurrent = idx === currentIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => goToStep(idx)}
                    role="listitem"
                    aria-label={`Go to question ${idx + 1}${answer ? ", answered" : ""}`}
                    aria-current={isCurrent ? "true" : undefined}
                    className={`h-5 w-[9px] shrink-0 rounded-[1px] border transition-colors duration-150 ${
 isCurrent
 ? "border-amber-400 bg-amber-400"
 : answer
 ? "border-steel-600 bg-steel-500"
 : "border-steel-800 bg-concourse-deep hover:border-steel-600"
 }`}
                  />
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-5 sm:gap-7">
            <div className="hidden sm:block">
              <p className="board-label pb-1.5">Answered</p>
              <p className="board-name text-[15px] text-ivory">
                {stats.answered}
                <span className="text-steel-500">/{steps.length}</span>
              </p>
            </div>

            <div>
              <p className="board-label pb-1.5">Time remaining</p>
              <FlapClock seconds={timeRemaining} size="lg" />
            </div>

            <BoardButton onClick={handleModuleFinish} variant="quiet" size="sm">
              Finish section
            </BoardButton>
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-12rem)]">
          {/* Left Panel: Passage */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-panel rounded-panel p-6 overflow-y-auto"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className={`px-3 py-1 rounded-flap text-xs font-medium ${currentStep.parentTaskType === "academic"
 ? "bg-amber-500/20 text-amber-400"
 : currentStep.parentTaskType === "complete_words"
 ? "bg-amber-500/20 text-amber-400"
 : "bg-platform-500/20 text-platform-400"
 } font-board uppercase tracking-[0.14em]`}>
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
            ) : currentStep.parentTaskType === "daily_life" ? (
              /* The artefact's layout is part of the construct on this task. */
              <DailyLifeArtefact
                passage={currentStep.passageContent}
                category={currentStep.passageCategory}
              />
            ) : (
              <div className="prose prose-invert prose-sm max-w-none text-steel-300 whitespace-pre-wrap leading-relaxed">
                {renderTextWithFormatting(currentStep.passageContent)}
              </div>
            )}
          </motion.div>

          {/* Right Panel: Question & Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            key={currentStep.id}
            className="glass-panel rounded-panel flex flex-col h-full overflow-hidden"
          >
            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto p-6">
              {currentStep.stepType === "complete_words" ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-4">
                  <div className="glass-plate w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <PenTool className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Complete the Passage</h3>
                  <p className="text-steel-400 mb-4">
                    Type the missing letters in the input boxes to complete the words.
                    Use context clues from the passage!
                  </p>

                  {/* Show blank status */}
                  <div className="mt-4 p-4 rounded-panel bg-white/5 border border-white/10 w-full max-w-sm">
                    <p className="text-sm text-steel-400 mb-2">Blanks to complete:</p>
                    <div className="space-y-2">
                      {(currentStep.data as CompleteWordsQuestion).blanks.map((blank, idx) => {
                        const userBlanks = (currentAnswer as Record<number, string>) || {};
                        const userAnswer = userBlanks[blank.position] || "";
                        const hasInput = userAnswer.length > blank.partialWord.replace(/_/g, '').length;

                        return (
                          <div key={idx} className="flex items-center justify-between text-sm">
                            <span className="text-steel-300">{blank.partialWord}</span>
                            <span className={hasInput ? "text-platform-400" : "text-steel-600"}>
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
                      className={`p-2 rounded-flap ${isFlagged ? "text-amber-400 bg-amber-400/10" : "text-amber-900 hover:text-white"}`}
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
                          className={`w-full text-left p-4 rounded-panel border transition-all ${isSelected
 ? "bg-amber-500/20 border-amber-500 text-white"
 : "bg-white/5 border-transparent hover:bg-white/10 text-steel-300"
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
            <div className="p-6 border-t border-white/10 bg-steel-900/20 flex items-center justify-between mt-auto">
              <button
                onClick={() => goToStep(currentIndex - 1)}
                disabled={currentIndex === 0}
                className="flex items-center gap-2 text-steel-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed px-3 py-2 rounded-flap hover:bg-white/5 transition-colors"
                title="Previous Question"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>

              <div className="text-xs text-steel-500 font-medium hidden sm:block">
                Question {currentIndex + 1} of {steps.length}
              </div>

              <button
                onClick={() => goToStep(currentIndex + 1)}
                disabled={currentIndex === steps.length - 1}
                className="bg-amber-400 flex items-center gap-2 px-4 py-2 text-concourse-deep rounded-flap disabled:opacity-50 disabled:cursor-not-allowed shadow-lg disabled:shadow-none transition-all font-board uppercase tracking-[0.14em] font-bold"
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
      <ReadingReviewBoard
        band={score}
        correct={correct}
        total={total}
        percentage={percentage}
        trackTaken={trackTaken}
        module1={module1Stats}
        onRestart={handleRestart}
      >
          {/* Detailed Incorrect Answer Breakdown */}
          {allAnswers.some(a => !a.isCorrect) && (
            <div className="px-6 py-6 text-left sm:px-8">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-signal-400" />
                Review Incorrect Responses
              </h3>
              <div className="space-y-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {steps.map(step => {
                  const answer = answers[step.id];
                  if (!answer || answer.isCorrect) return null;

                  if (step.stepType === "multiple_choice") {
                    return (
                      <div key={step.id} className="p-4 rounded-panel bg-white/5 border border-signal-500/20">
                        <p className="text-sm font-medium text-white mb-1">{step.data.question}</p>
                        <div className="flex gap-4 text-xs">
                          <span className="text-signal-400">Your Answer: {answer.value}</span>
                          <span className="text-platform-400">Correct: {step.data.correctAnswer}</span>
                        </div>
                      </div>
                    );
                  } else if (step.stepType === "complete_words") {
                    const question = step.data as CompleteWordsQuestion;
                    return (
                      <div key={step.id} className="p-4 rounded-panel bg-white/5 border border-signal-500/20">
                        <p className="text-sm font-medium text-white mb-2">Complete the Word Passage Errors:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {question.blanks.map((blank, bIdx) => {
                            const userVal = (answer.value[blank.position] || "").toLowerCase().trim();
                            const correctVal = blank.answer.toLowerCase().trim();
                            if (userVal === correctVal) return null;
                            return (
                              <div key={bIdx} className="text-xs p-2 rounded bg-black/20 flex flex-col gap-1">
                                <span className="text-steel-500">For prefix "{blank.partialWord.replace(/_/g, '')}":</span>
                                <div className="flex justify-between">
                                  <span className="text-signal-400">You typed: {userVal || "(blank)"}</span>
                                  <span className="text-platform-400">Expected: {correctVal}</span>
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
      </ReadingReviewBoard>
    );
  }

  return null;
}

/* ---------------------------------------------------------------------------
   The Reading result, posted to the board: the band score at display scale,
   then a ruled manifest of how it was earned. The lamp on each row says
   whether that leg cleared the 60% routing threshold.
   --------------------------------------------------------------------------- */
function ReadingReviewBoard({
  band,
  correct,
  total,
  percentage,
  trackTaken,
  module1,
  onRestart,
  children,
}: {
  band: number;
  correct: number;
  total: number;
  percentage: number;
  trackTaken: string;
  module1: { correct: number; total: number };
  onRestart: () => void;
  children?: React.ReactNode;
}) {
  const m2Correct = correct - module1.correct;
  const m2Total = total - module1.total;
  const pct = (c: number, t: number) => (t > 0 ? Math.round((c / t) * 100) : 0);
  const cleared = (c: number, t: number) =>
    // Same cut the router itself uses. This previously read the legacy
    // READING_CONFIG.HARD_TRACK_THRESHOLD (0.60) while routing used the
    // blueprint's 0.65, so a 62% score was routed down but reported "cleared".
    t > 0 && c / t >= ROUTING.upperModuleThreshold ? "cleared" : "cancelled";

  return (
    <ScoreBoard
      section="Reading"
      band={band}
      rows={[
        {
          field: "Correct",
          value: `${correct}/${total}`,
          note: `${percentage}% across both modules`,
          state: cleared(correct, total),
        },
        {
          field: "Module 1",
          value: `${module1.correct}/${module1.total}`,
          note: `${pct(module1.correct, module1.total)}% — this is what set your routing`,
          state: cleared(module1.correct, module1.total),
        },
        {
          field: "Module 2",
          value: `${m2Correct}/${m2Total}`,
          note: `${pct(m2Correct, m2Total)}% on the ${trackTaken.toLowerCase()} track`,
          state: cleared(m2Correct, m2Total),
        },
        {
          field: "Track taken",
          value: trackTaken.split(" ")[0].toUpperCase(),
          note: trackTaken.includes("Hard")
            ? "C1–C2 academic passages"
            : "B1–B2 daily-life texts",
          state: trackTaken.includes("Hard") ? "cleared" : "live",
        },
      ]}
      footnote="Every question in this session was unique — nothing repeated across the two modules."
      actions={
        <BoardButton onClick={onRestart} icon={RotateCcw}>
          Start a new session
        </BoardButton>
      }
    >
      {children}
    </ScoreBoard>
  );
}
