"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  PenTool,
  Clock,
  ChevronRight,
  RotateCcw,
  CheckCircle,
  AlertTriangle,
  Sparkles,
  Zap,
  Trophy,
  User,
  MessageSquare,
  GripVertical,
  Mail,
  BookOpen,
  Loader2
} from "lucide-react";
import { SectionBrief, GlassPlate, Lamp } from "@/components/board";
import {
  buildSentenceTasks,
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
import { BUILD_A_SENTENCE, WRITE_AN_EMAIL, WRITE_FOR_AN_ACADEMIC_DISCUSSION } from "@/data/toefl-2026-blueprint";

type PracticeState = "setup" | "practice" | "evaluating" | "review";
type TaskType = "build_sentence" | "email" | "academic_discussion";
type WritingTask = BuildASentenceItem | EmailTask | AcademicDiscussionTask;

/** Build a Sentence items carry `parts`; the essay tasks carry `type`. */
const isBuildASentence = (task: WritingTask): task is BuildASentenceItem => "parts" in task;

/** The discriminator, unified across both writing item shapes. */
const taskTypeOf = (task: WritingTask): TaskType =>
  isBuildASentence(task) ? "build_sentence" : task.type;

interface Answer {
  questionId: string;
  taskType: TaskType;
  text: string;
  wordCount: number;
  timeSpent: number;
  evaluation: {
    overall_score: number;
    grammar_score: number;
    vocabulary_score: number;
    organization_score: number;
    content_score: number;
    feedback: {
      strengths: string[];
      improvements: string[];
      grammar_notes: string;
      vocabulary_notes: string;
      organization_notes: string;
      content_notes: string;
    };
    task_specific_feedback?: {
      appropriateness?: string;
      critical_thinking?: string;
      sentence_accuracy?: string;
    };
  } | null;
}

export function WritingPractice() {
  const [state, setState] = useState<PracticeState>("setup");
  const [practiceMode, setPracticeMode] = useState<"all" | TaskType>("all");

  const [questions, setQuestions] = useState<WritingTask[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const [currentText, setCurrentText] = useState("");
  /** Build a Sentence answers: item id -> (slot index -> tile text). */
  const [placements, setPlacements] = useState<Record<string, Record<number, string | null>>>({});
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());

  const currentQuestion = questions[currentIndex];
  const wordCount = currentText.trim() ? currentText.trim().split(/\s+/).length : 0;

  // Timer logic


  const startPractice = () => {
    let selected: WritingTask[] = [];

    if (practiceMode === "all") {
      // Mix of all 3 types (default: 1 build sentence, 1 email, 1 discussion)
      const randomBuildSentence = buildASentenceItems[Math.floor(Math.random() * buildASentenceItems.length)];
      const randomEmail = emailTasks[Math.floor(Math.random() * emailTasks.length)];
      const randomDiscussion = academicDiscussionTasks[Math.floor(Math.random() * academicDiscussionTasks.length)];
      selected = [randomBuildSentence, randomEmail, randomDiscussion];
    } else if (practiceMode === "build_sentence") {
      // A full exam block is 10 items on one shared clock.
      const shuffled = [...buildASentenceItems].sort(() => Math.random() - 0.5);
      selected = shuffled.slice(0, BUILD_A_SENTENCE.items);
    } else if (practiceMode === "email") {
      // 3 email tasks
      const shuffled = [...emailTasks].sort(() => Math.random() - 0.5);
      selected = shuffled.slice(0, 3);
    } else if (practiceMode === "academic_discussion") {
      // 3 academic discussion tasks
      const shuffled = [...academicDiscussionTasks].sort(() => Math.random() - 0.5);
      selected = shuffled.slice(0, 3);
    }

    setQuestions(selected);
    setCurrentIndex(0);
    setAnswers(
      selected.map((q) => ({
        questionId: q.id,
        taskType: isBuildASentence(q) ? "build_sentence" : q.type,
        text: "",
        wordCount: 0,
        timeSpent: 0,
        evaluation: null,
      }))
    );
    setCurrentText("");
    setTimeRemaining(getTimeLimit(selected[0]));
    setStartTime(Date.now());
    setState("practice");
  };

  /**
   * The ten Build a Sentence items share ONE 6:50 clock on the real test, so the
   * timer is set when the block starts and is not reset per item.
   */
  const getTimeLimit = (question: WritingTask): number => {
    if (isBuildASentence(question)) return BUILD_A_SENTENCE.pooledSeconds;
    if (!isBuildASentence(question) && question.type === "email") return WRITE_AN_EMAIL.seconds;
    return WRITE_FOR_AN_ACADEMIC_DISCUSSION.seconds;
  };

  const getWordRequirements = (question: WritingTask) => {
    if (isBuildASentence(question)) return { min: 0, max: 999 };
    // ETS publishes no word count for the email, so this is a soft target only.
    if (!isBuildASentence(question) && question.type === "email") return { min: WRITE_AN_EMAIL.softTargetWords.min, max: WRITE_AN_EMAIL.softTargetWords.max };
    return { min: WRITE_FOR_AN_ACADEMIC_DISCUSSION.minimumResponseWords, max: 250 };
  };

  const evaluateAllAnswers = useCallback(async (answersToEvaluate: Answer[]) => {
    const evaluatedAnswers = [...answersToEvaluate];

    for (let i = 0; i < evaluatedAnswers.length; i++) {
      const answer = evaluatedAnswers[i];
      const question = questions[i];

      if (isBuildASentence(question)) {
        // Machine scored: 1 point only when every tile sits in the right slot.
        const correct = scoreBuildASentence(question, placements[question.id] ?? {});
        evaluatedAnswers[i] = {
          ...answer,
          evaluation: {
            overall_score: correct ? 6 : 1,
            grammar_score: correct ? 6 : 1,
            vocabulary_score: correct ? 6 : 1,
            organization_score: correct ? 6 : 1,
            content_score: correct ? 6 : 1,
            feedback: {
              strengths: correct ? ["Every word is in the correct position."] : [],
              improvements: correct
                ? []
                : [`The correct sentence is: "${question.sentence}"`],
              grammar_notes: `Target structure: ${question.grammarFocus.replace(/_/g, " ")}.`,
              vocabulary_notes: "",
              organization_notes: "",
              content_notes: correct
                ? "Scored 1 of 1."
                : "Scored 0 of 1. This task is all-or-nothing: every word must be in the right place.",
            },
          },
        };
        continue;
      }

      if (!answer.text.trim()) {
        // No answer provided
        evaluatedAnswers[i] = {
          ...answer,
          evaluation: null,
        };
        continue;
      }

      try {
        const requirements = getWordRequirements(question);

        const response = await fetch("/api/evaluate/writing", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: answer.text,
            taskType: taskTypeOf(question),
            prompt: getPromptText(question),
            minWords: requirements.min,
            maxWords: requirements.max,
          }),
        });

        if (!response.ok) {
          throw new Error("Evaluation failed");
        }

        const evaluation = await response.json();

        evaluatedAnswers[i] = {
          ...answer,
          evaluation: {
            overall_score: evaluation.overall_score,
            grammar_score: evaluation.grammar_score,
            vocabulary_score: evaluation.vocabulary_score,
            organization_score: evaluation.organization_score,
            content_score: evaluation.content_score,
            feedback: evaluation.feedback,
            task_specific_feedback: evaluation.task_specific_feedback,
          },
        };
      } catch (error) {
        console.error("Evaluation error:", error);
        // Use fallback scoring
        evaluatedAnswers[i] = {
          ...answer,
          evaluation: {
            overall_score: 3.5,
            grammar_score: 3.5,
            vocabulary_score: 3.5,
            organization_score: 3.5,
            content_score: 3.5,
            feedback: {
              strengths: ["Response submitted"],
              improvements: ["Evaluation unavailable - please try again"],
              grammar_notes: "Evaluation service unavailable",
              vocabulary_notes: "Evaluation service unavailable",
              organization_notes: "Evaluation service unavailable",
              content_notes: "Evaluation service unavailable",
            },
          },
        };
      }
    }

    setAnswers(evaluatedAnswers);
    setState("review");
  }, [questions, placements]);


  const handleSubmitCurrent = useCallback(async () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    const currentQuestion = questions[currentIndex];

    // Build a Sentence is machine scored all-or-nothing and never goes to the
    // AI evaluator; the assembled sentence is stored so review can show it.
    const assembled = isBuildASentence(currentQuestion)
      ? currentQuestion.parts
          .map((part, i) =>
            currentQuestion.lockedIndices.includes(i)
              ? part
              : (placements[currentQuestion.id] ?? {})[i] ?? "____"
          )
          .join(" ")
          .replace(/\s+([.?!,;:])/g, "$1")
          .trim()
      : currentText;

    const newAnswer: Answer = {
      questionId: currentQuestion.id,
      taskType: taskTypeOf(currentQuestion),
      text: assembled,
      wordCount: isBuildASentence(currentQuestion) ? assembled.split(/\s+/).filter(Boolean).length : wordCount,
      timeSpent,
      evaluation: null,
    };

    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentIndex] = newAnswer;
      return newAnswers;
    });

    // Move to next question or evaluating state
    if (currentIndex < questions.length - 1) {
      const next = questions[currentIndex + 1];
      setCurrentIndex((prev) => prev + 1);
      setCurrentText("");
      // The ten Build a Sentence items share one clock, so moving between two of
      // them must NOT restart the timer — only a change of task type does.
      const stayingInSameBlock = isBuildASentence(currentQuestion) && isBuildASentence(next);
      if (!stayingInSameBlock) setTimeRemaining(getTimeLimit(next));
      setStartTime(Date.now());
    } else {
      // All questions answered, start evaluation
      setState("evaluating");
      await evaluateAllAnswers([...answers.slice(0, currentIndex), newAnswer]);
    }
  }, [currentText, wordCount, currentIndex, questions, startTime, answers, evaluateAllAnswers, placements]);

  useEffect(() => {
    if (state !== "practice" || timeRemaining <= 0) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleSubmitCurrent();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [state, timeRemaining, handleSubmitCurrent]);
  const getPromptText = (question: WritingTask): string => {
    if (isBuildASentence(question)) return question.context;
    if (question.type === "email") return question.scenario;
    return question.professor.message;
  };

  const handleFinish = () => {
    handleSubmitCurrent();
  };

  const calculateOverallScore = () => {
    const scores = answers
      .filter((a) => a.evaluation !== null)
      .map((a) => a.evaluation!.overall_score);
    if (scores.length === 0) return 0;
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    return Math.round(avg * 2) / 2;
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // ============ SETUP SCREEN ============
  if (state === "setup") {
    const MODES = [
      { mode: "all" as const, label: "Full section", desc: "All three task types, in order · ~23 min", icon: BookOpen },
      { mode: "build_sentence" as const, label: "Build a Sentence", desc: "5 grammar tasks · ~5 min", icon: GripVertical },
      { mode: "email" as const, label: "Write an Email", desc: "3 email tasks · ~24 min", icon: Mail },
      { mode: "academic_discussion" as const, label: "Academic Discussion", desc: "3 discussion tasks · ~30 min", icon: MessageSquare },
    ];

    return (
      <SectionBrief
        icon={PenTool}
        title="Writing"
        standfirst="Three timed tasks, typed. Spell-check is off and paste is disabled, the way the real section runs."
        manifest={[
          { field: "Duration", value: "~23", note: "Minutes across the full section" },
          { field: "Tasks", value: "3", note: "Or run one task type on its own" },
          { field: "Scoring", value: "1–6", note: "AI band score on grammar, organisation, vocabulary and development" },
        ]}
        tasks={[
          { name: "Build a Sentence", detail: "Construct a sentence from given words and a structural cue", icon: GripVertical },
          { name: "Write an Email", detail: "80–120 words: a request, a complaint or an enquiry", icon: Mail },
          { name: "Academic Discussion", detail: "100+ words added to a class discussion thread", icon: MessageSquare },
        ]}
        action="Start writing"
        onAction={startPractice}
        footnote="The clock runs per task. A task submits itself when its time is up, so write to the word count early."
      >
        <div className="px-6 pb-2 pt-6 sm:px-8">
          <p className="board-label pb-3" id="writing-mode-label">
            What to run
          </p>
          <div
            className="divide-y divide-steel-800/80 border-y border-steel-800"
            role="radiogroup"
            aria-labelledby="writing-mode-label"
          >
            {MODES.map((option) => {
              const selected = practiceMode === option.mode;
              return (
                <button
                  key={option.mode}
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setPracticeMode(option.mode)}
                  className={`flex w-full items-center gap-4 px-1 py-3.5 text-left transition-colors duration-150 ${
 selected ? "bg-flap-lit/60" : "hover:bg-steel-900/60"
 }`}
                >
                  <GlassPlate icon={option.icon} size="sm" live={selected} />
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block font-board text-[13px] font-bold uppercase tracking-[0.12em] ${
 selected ? "text-ivory" : "text-steel-300"
 }`}
                    >
                      {option.label}
                    </span>
                    <span className="mt-0.5 block text-[12px] text-steel-500">
                      {option.desc}
                    </span>
                  </span>
                  <Lamp state={selected ? "live" : "off"} />
                </button>
              );
            })}
          </div>
        </div>
      </SectionBrief>
    );
  }

  // ============ PRACTICE SCREEN ============
  if (state === "practice" && questions.length > 0) {
    const requirements = getWordRequirements(currentQuestion);
    const isWordCountLow = !isBuildASentence(currentQuestion) && wordCount < requirements.min;
    const isWordCountHigh = wordCount > requirements.max;

    return (
      <div className="min-h-[calc(100vh-4rem)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-panel">
              <div className="glass-plate w-8 h-8 rounded-full flex items-center justify-center">
                {isBuildASentence(currentQuestion) && <GripVertical className="w-4 h-4 text-white" />}
                {!isBuildASentence(currentQuestion) && currentQuestion.type === "email" && <Mail className="w-4 h-4 text-white" />}
                {!isBuildASentence(currentQuestion) && currentQuestion.type === "academic_discussion" && <MessageSquare className="w-4 h-4 text-white" />}
              </div>
              <span className="text-sm font-medium text-white">
                {isBuildASentence(currentQuestion) && "Build Sentence"}
                {!isBuildASentence(currentQuestion) && currentQuestion.type === "email" && "Write Email"}
                {!isBuildASentence(currentQuestion) && currentQuestion.type === "academic_discussion" && "Academic Discussion"}
              </span>
            </div>
            <span className="text-sm text-steel-400">
              Task {currentIndex + 1} of {questions.length}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-panel transition-all duration-300 ${timeRemaining < 60
 ? "bg-signal-500/20 border border-signal-500/30 text-signal-400"
 : "glass-card text-white"
 } font-board uppercase tracking-[0.14em] font-bold`}
            >
              <Clock className={`w-4 h-4 ${timeRemaining < 60 ? "animate-pulse" : ""}`} />
              <span className="font-mono text-sm font-medium">
                {formatTime(timeRemaining)}
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleFinish}
              className="bg-amber-400 px-5 py-2 text-concourse-deep text-[12px] rounded-panel transition-all shadow-lg font-board uppercase tracking-[0.14em] font-bold"
            >
              Finish
            </motion.button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1.5 bg-steel-800/50 rounded-full mb-6 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            className="bg-amber-400 h-full rounded-full"
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        {/* ===== BUILD A SENTENCE ===== */}
        {isBuildASentence(currentQuestion) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="p-6 glass-panel rounded-panel">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Build a Sentence</h3>
                <span className="text-xs text-slate-500">
                  Sentence {currentIndex + 1} of {questions.length} &middot; one shared timer
                </span>
              </div>

              <BuildASentenceTask
                item={currentQuestion}
                placed={placements[currentQuestion.id] ?? {}}
                onChange={(placed) =>
                  setPlacements((prev) => ({ ...prev, [currentQuestion.id]: placed }))
                }
              />

              <div className="flex items-center justify-end mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubmitCurrent}
                  className="bg-amber-400 flex items-center gap-2 px-5 py-2.5 text-concourse-deep text-[12px] rounded-panel transition-all shadow-lg font-board uppercase tracking-[0.14em] font-bold"
                >
                  {currentIndex < questions.length - 1 ? "Submit & Next" : "Submit"}
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {/* ===== EMAIL TASK ===== */}
        {!isBuildASentence(currentQuestion) && currentQuestion.type === "email" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Scenario */}
            <div className="p-6 glass-panel rounded-panel">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Mail className="w-5 h-5 text-amber-400" />
                Write an Email
              </h3>
              <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-panel">
                <p className="text-sm text-steel-300 whitespace-pre-wrap">
                  {currentQuestion.scenario}
                </p>
              </div>
            </div>

            {/* Writing Area */}
            <div className="glass-panel rounded-panel p-6">
              <div className="mb-4">
                <textarea
                  value={currentText}
                  onChange={(e) => setCurrentText(e.target.value)}
                  placeholder="Start typing your email here..."
                  className="w-full h-64 bg-steel-900/50 border border-steel-700/50 rounded-panel p-4 text-white placeholder-steel-500 resize-none focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/25 transition-all"
                  spellCheck={false}
                />
              </div>

              {/* Word Count */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className={`text-[12px] px-3 py-1 rounded-flap ${isWordCountLow
 ? "bg-amber-500/20 text-amber-400"
 : isWordCountHigh
 ? "bg-signal-500/20 text-signal-400"
 : "bg-platform-500/20 text-platform-400"
 } font-board uppercase tracking-[0.14em] font-bold`}
                  >
                    {wordCount} words
                  </span>
                  {isWordCountLow && (
                    <span className="text-xs text-amber-400 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      Need {requirements.min}-{requirements.max} words
                    </span>
                  )}
                  {isWordCountHigh && (
                    <span className="text-xs text-signal-400 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      Exceeds maximum {requirements.max}
                    </span>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: wordCount >= 10 ? 1.05 : 1 }}
                  whileTap={{ scale: wordCount >= 10 ? 0.95 : 1 }}
                  onClick={handleSubmitCurrent}
                  disabled={wordCount < 10}
                  className="bg-amber-400 flex items-center gap-2 px-5 py-2.5 disabled:cursor-not-allowed text-concourse-deep text-[12px] rounded-panel transition-all shadow-lg disabled:shadow-none font-board uppercase tracking-[0.14em] font-bold"
                >
                  {currentIndex < questions.length - 1 ? "Submit & Next" : "Submit"}
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {/* ===== ACADEMIC DISCUSSION TASK ===== */}
        {!isBuildASentence(currentQuestion) && currentQuestion.type === "academic_discussion" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Professor Message */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center border-2 border-amber-200 flex-shrink-0">
                <User className="w-6 h-6 text-amber-600" />
              </div>
              <div className="bg-amber-900/40 p-4 rounded-panel rounded-tl-sm border border-amber-500/30 flex-1">
                <p className="text-amber-300 font-bold text-sm mb-1">
                  {currentQuestion.professor.name}
                </p>
                <p className="text-steel-200 text-sm leading-relaxed">
                  {currentQuestion.professor.message}
                </p>
              </div>
            </div>

            {/* Student Responses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQuestion.students.map((student, idx) => (
                <div key={idx} className="bg-steel-800/50 p-4 rounded-panel border border-steel-700">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
                      <User className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-steel-300">{student.name}</span>
                  </div>
                  <p className="text-sm text-steel-400 leading-relaxed">
                    {student.message}
                  </p>
                </div>
              ))}
            </div>

            {/* Writing Area */}
            <div className="glass-panel rounded-panel p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Your Response</h3>

              <div className="mb-4">
                <textarea
                  value={currentText}
                  onChange={(e) => setCurrentText(e.target.value)}
                  placeholder="Share your perspective on this discussion..."
                  className="w-full h-64 bg-steel-900/50 border border-steel-700/50 rounded-panel p-4 text-white placeholder-steel-500 resize-none focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/25 transition-all"
                  spellCheck={false}
                />
              </div>

              {/* Word Count */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className={`text-[12px] px-3 py-1 rounded-flap ${isWordCountLow
 ? "bg-amber-500/20 text-amber-400"
 : isWordCountHigh
 ? "bg-signal-500/20 text-signal-400"
 : "bg-platform-500/20 text-platform-400"
 } font-board uppercase tracking-[0.14em] font-bold`}
                  >
                    {wordCount} words
                  </span>
                  {isWordCountLow && (
                    <span className="text-xs text-amber-400 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      Need at least {requirements.min} words
                    </span>
                  )}
                  {isWordCountHigh && (
                    <span className="text-xs text-signal-400 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      Exceeds maximum {requirements.max}
                    </span>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: wordCount >= 10 ? 1.05 : 1 }}
                  whileTap={{ scale: wordCount >= 10 ? 0.95 : 1 }}
                  onClick={handleSubmitCurrent}
                  disabled={wordCount < 10}
                  className="bg-amber-400 flex items-center gap-2 px-5 py-2.5 disabled:cursor-not-allowed text-concourse-deep text-[12px] rounded-panel transition-all shadow-lg disabled:shadow-none font-board uppercase tracking-[0.14em] font-bold"
                >
                  {currentIndex < questions.length - 1 ? "Submit & Next" : "Submit"}
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    );
  }

  // ============ EVALUATING SCREEN ============
  if (state === "evaluating") {
    return (
      <div className="h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel rounded-panel p-12 text-center max-w-md"
        >
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <Loader2 className="w-16 h-16 text-amber-400 animate-spin" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Evaluating Your Responses</h2>
          <p className="text-steel-400 mb-6">
            Our AI is analyzing your writing for grammar, vocabulary, organization, and content...
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-lamp-pulse" style={{ animationDelay: "0ms" }} />
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-lamp-pulse" style={{ animationDelay: "150ms" }} />
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-lamp-pulse" style={{ animationDelay: "300ms" }} />
          </div>
        </motion.div>
      </div>
    );
  }

  // ============ REVIEW SCREEN ============
  if (state === "review") {
    const overallScore = calculateOverallScore();
    const totalWords = answers.reduce((acc, a) => acc + a.wordCount, 0);

    return (
      <div className="min-h-[calc(100vh-4rem)] flex flex-col">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel rounded-panel p-8 mb-6"
        >
          {/* Score Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="glass-plate inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 shadow-lg"
            >
              <Trophy className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold text-white mb-2">Writing Practice Complete!</h1>
            <p className="text-steel-400">Here's your performance summary</p>
          </div>

          {/* Score Display */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-panel p-6 text-center"
            >
              <p className="text-4xl font-bold text-gradient mb-1">{overallScore.toFixed(1)}</p>
              <p className="text-sm text-steel-400">Overall Band Score</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card rounded-panel p-6 text-center"
            >
              <p className="text-4xl font-bold text-white mb-1">{questions.length}</p>
              <p className="text-sm text-steel-400">Tasks Completed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-card rounded-panel p-6 text-center"
            >
              <p className="text-4xl font-bold text-white mb-1">{totalWords}</p>
              <p className="text-sm text-steel-400">Total Words Written</p>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setState("setup")}
              className="bg-amber-400 flex items-center justify-center gap-2 px-6 py-3 text-concourse-deep rounded-panel shadow-lg font-board uppercase tracking-[0.14em] font-bold"
            >
              <RotateCcw className="w-5 h-5" />
              Practice Again
            </motion.button>
          </div>
        </motion.div>

        {/* Detailed Review */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-panel rounded-panel p-6"
        >
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            Response Review
          </h2>

          <div className="space-y-6">
            {questions.map((question, index) => {
              const answer = answers[index];
              const evaluation = answer.evaluation;

              return (
                <motion.div
                  key={question.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="p-5 rounded-panel border bg-amber-500/5 border-amber-500/20"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span
                        className={`px-3 py-1 rounded-flap text-xs font-medium ${isBuildASentence(question)
 ? "bg-green-500/20 text-green-400 border border-green-500/30"
 : !isBuildASentence(question) && question.type === "email"
 ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
 : "bg-violet-500/20 text-violet-400 border border-violet-500/30"
 } font-board uppercase tracking-[0.14em]`}
                      >
                        {isBuildASentence(question) && "Build a Sentence"}
                        {!isBuildASentence(question) && question.type === "email" && "Email"}
                        {!isBuildASentence(question) && question.type === "academic_discussion" && "Academic Discussion"}
                      </span>
                      <h4 className="text-white font-medium mt-3">
                        {getPromptText(question).substring(0, 100)}...
                      </h4>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gradient">
                        {evaluation?.overall_score.toFixed(1) || "N/A"}
                      </p>
                      <p className="text-xs text-steel-500">Score</p>
                    </div>
                  </div>

                  {/* Response */}
                  <div className="mb-4 p-4 glass-card rounded-panel">
                    {isBuildASentence(question) && (
                      <div className="mb-3 p-3 bg-green-500/10 border border-green-500/20 rounded-flap">
                        <p className="text-xs text-green-300">
                          <strong>Correct sentence:</strong> {question.sentence}
                        </p>
                      </div>
                    )}
                    <p className="text-sm text-steel-300 whitespace-pre-wrap leading-relaxed">
                      {answer.text || "No response submitted"}
                    </p>
                    <p className="text-xs text-steel-500 mt-3">{answer.wordCount} words</p>
                  </div>

                  {/* AI Feedback */}
                  {evaluation && (
                    <>
                      {/* Scores Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        <div className="p-3 glass-card rounded-flap text-center">
                          <p className="text-lg font-bold text-amber-400">{evaluation.grammar_score.toFixed(1)}</p>
                          <p className="text-xs text-steel-400">Grammar</p>
                        </div>
                        <div className="p-3 glass-card rounded-flap text-center">
                          <p className="text-lg font-bold text-amber-400">{evaluation.vocabulary_score.toFixed(1)}</p>
                          <p className="text-xs text-steel-400">Vocabulary</p>
                        </div>
                        <div className="p-3 glass-card rounded-flap text-center">
                          <p className="text-lg font-bold text-amber-400">{evaluation.organization_score.toFixed(1)}</p>
                          <p className="text-xs text-steel-400">Organization</p>
                        </div>
                        <div className="p-3 glass-card rounded-flap text-center">
                          <p className="text-lg font-bold text-amber-400">{evaluation.content_score.toFixed(1)}</p>
                          <p className="text-xs text-steel-400">Content</p>
                        </div>
                      </div>

                      {/* Detailed Feedback */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                        {/* Strengths */}
                        <div className="p-4 glass-card rounded-panel">
                          <p className="text-xs font-medium text-platform-400 mb-3 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            Strengths
                          </p>
                          {evaluation.feedback.strengths.map((strength, i) => (
                            <p key={i} className="text-xs text-steel-300 mb-2 last:mb-0">
                              • {strength}
                            </p>
                          ))}
                        </div>

                        {/* Improvements */}
                        <div className="p-4 glass-card rounded-panel">
                          <p className="text-xs font-medium text-amber-400 mb-3 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4" />
                            Areas to Improve
                          </p>
                          {evaluation.feedback.improvements.map((improvement, i) => (
                            <p key={i} className="text-xs text-steel-300 mb-2 last:mb-0">
                              • {improvement}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* Detailed Notes */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="p-3 glass-card rounded-flap">
                          <p className="text-xs font-medium text-amber-400 mb-2">Grammar</p>
                          <p className="text-xs text-steel-300">{evaluation.feedback.grammar_notes}</p>
                        </div>
                        <div className="p-3 glass-card rounded-flap">
                          <p className="text-xs font-medium text-amber-400 mb-2">Vocabulary</p>
                          <p className="text-xs text-steel-300">{evaluation.feedback.vocabulary_notes}</p>
                        </div>
                        <div className="p-3 glass-card rounded-flap">
                          <p className="text-xs font-medium text-amber-400 mb-2">Organization</p>
                          <p className="text-xs text-steel-300">{evaluation.feedback.organization_notes}</p>
                        </div>
                        <div className="p-3 glass-card rounded-flap">
                          <p className="text-xs font-medium text-amber-400 mb-2">Content</p>
                          <p className="text-xs text-steel-300">{evaluation.feedback.content_notes}</p>
                        </div>
                      </div>

                      {/* Task-Specific Feedback */}
                      {evaluation.task_specific_feedback && (
                        <div className="mt-3 p-4 glass-card rounded-panel border border-amber-500/20">
                          <p className="text-xs font-medium text-amber-400 mb-2">Task-Specific Analysis</p>
                          <p className="text-xs text-steel-300">
                            {evaluation.task_specific_feedback.sentence_accuracy ||
                              evaluation.task_specific_feedback.appropriateness ||
                              evaluation.task_specific_feedback.critical_thinking}
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    );
  }

  return null;
}
