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
import {
  buildSentenceTasks,
  emailTasks,
  academicDiscussionTasks,
  type BuildSentenceTask,
  type EmailTask,
  type AcademicDiscussionTask
} from "@/data/questions/writing-massive";

type PracticeState = "setup" | "practice" | "evaluating" | "review";
type TaskType = "build_sentence" | "email" | "academic_discussion";
type WritingTask = BuildSentenceTask | EmailTask | AcademicDiscussionTask;

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
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());

  const currentQuestion = questions[currentIndex];
  const wordCount = currentText.trim() ? currentText.trim().split(/\s+/).length : 0;

  // Timer logic
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
  }, [state, timeRemaining]);

  const startPractice = () => {
    let selected: WritingTask[] = [];

    if (practiceMode === "all") {
      // Mix of all 3 types (default: 1 build sentence, 1 email, 1 discussion)
      const randomBuildSentence = buildSentenceTasks[Math.floor(Math.random() * buildSentenceTasks.length)];
      const randomEmail = emailTasks[Math.floor(Math.random() * emailTasks.length)];
      const randomDiscussion = academicDiscussionTasks[Math.floor(Math.random() * academicDiscussionTasks.length)];
      selected = [randomBuildSentence, randomEmail, randomDiscussion];
    } else if (practiceMode === "build_sentence") {
      // 5 build sentence tasks
      const shuffled = [...buildSentenceTasks].sort(() => Math.random() - 0.5);
      selected = shuffled.slice(0, 5);
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
        taskType: q.type,
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

  const getTimeLimit = (question: WritingTask): number => {
    if (question.type === "build_sentence") return 60; // 1 min per sentence
    if (question.type === "email") return 480; // 8 min
    if (question.type === "academic_discussion") return 600; // 10 min
    return 600;
  };

  const getWordRequirements = (question: WritingTask) => {
    if (question.type === "build_sentence") return { min: 0, max: 999 };
    if (question.type === "email") return { min: 80, max: 120 };
    if (question.type === "academic_discussion") return { min: 100, max: 200 };
    return { min: 0, max: 999 };
  };

  const handleSubmitCurrent = useCallback(async () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    const currentQuestion = questions[currentIndex];

    // Save answer with placeholder evaluation
    const newAnswer: Answer = {
      questionId: currentQuestion.id,
      taskType: currentQuestion.type,
      text: currentText,
      wordCount,
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
      setCurrentIndex((prev) => prev + 1);
      setCurrentText("");
      setTimeRemaining(getTimeLimit(questions[currentIndex + 1]));
      setStartTime(Date.now());
    } else {
      // All questions answered, start evaluation
      setState("evaluating");
      await evaluateAllAnswers([...answers.slice(0, currentIndex), newAnswer]);
    }
  }, [currentText, wordCount, currentIndex, questions, startTime, answers]);

  const evaluateAllAnswers = async (answersToEvaluate: Answer[]) => {
    const evaluatedAnswers = [...answersToEvaluate];

    for (let i = 0; i < evaluatedAnswers.length; i++) {
      const answer = evaluatedAnswers[i];
      const question = questions[i];

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
            taskType: question.type,
            prompt: getPromptText(question),
            expectedAnswer: question.type === "build_sentence" ? question.correctAnswer : undefined,
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
  };

  const getPromptText = (question: WritingTask): string => {
    if (question.type === "build_sentence") {
      return `Rearrange these words into a grammatically correct sentence: ${question.scrambledWords.join(", ")}`;
    }
    if (question.type === "email") {
      return question.scenario;
    }
    if (question.type === "academic_discussion") {
      return question.professor.message;
    }
    return "";
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
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <PenTool className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Writing Practice</h1>
              <p className="text-slate-400">Configure your practice session</p>
            </div>
          </div>

          {/* Format Information */}
          <div className="mb-6 p-4 glass-card rounded-xl border border-cyan-500/30">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <PenTool className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-cyan-400 font-medium mb-2">2026 TOEFL iBT Writing Format</p>
                <ul className="text-xs text-slate-400 space-y-1.5">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-400" />
                    Official: 3 tasks, ~23 minutes total
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-400" />
                    Task 1: Build a Sentence (5 min, grammar accuracy)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-400" />
                    Task 2: Write an Email (8 min, 80-120 words)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-400" />
                    Task 3: Academic Discussion (10 min, 100+ words)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Practice Mode Selection */}
          <div className="mb-8">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-3">
              <Zap className="w-4 h-4 text-purple-400" />
              Practice Mode
            </label>
            <div className="grid grid-cols-1 gap-3">
              {[
                { mode: "all" as const, label: "Full Section - Official", desc: "All 3 task types (~23 min)", icon: BookOpen },
                { mode: "build_sentence" as const, label: "Build Sentence Only", desc: "5 grammar tasks (~5 min)", icon: GripVertical },
                { mode: "email" as const, label: "Email Writing Only", desc: "3 email tasks (~24 min)", icon: Mail },
                { mode: "academic_discussion" as const, label: "Academic Discussion Only", desc: "3 discussion tasks (~30 min)", icon: MessageSquare },
              ].map((option) => (
                <button
                  key={option.mode}
                  onClick={() => setPracticeMode(option.mode)}
                  className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-300 text-left ${
                    practiceMode === option.mode
                      ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/50 text-white shadow-lg shadow-cyan-500/10"
                      : "glass-card border-slate-700/50 text-slate-400 hover:text-white hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <option.icon className="w-5 h-5" />
                    <div>
                      <div className="font-semibold">{option.label}</div>
                      <div className="text-xs opacity-75 mt-1">{option.desc}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <div className="mt-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={startPractice}
              className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
            >
              Start Practice
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  // ============ PRACTICE SCREEN ============
  if (state === "practice" && questions.length > 0) {
    const requirements = getWordRequirements(currentQuestion);
    const isWordCountLow = currentQuestion.type !== "build_sentence" && wordCount < requirements.min;
    const isWordCountHigh = wordCount > requirements.max;

    return (
      <div className="min-h-[calc(100vh-4rem)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
                {currentQuestion.type === "build_sentence" && <GripVertical className="w-4 h-4 text-white" />}
                {currentQuestion.type === "email" && <Mail className="w-4 h-4 text-white" />}
                {currentQuestion.type === "academic_discussion" && <MessageSquare className="w-4 h-4 text-white" />}
              </div>
              <span className="text-sm font-medium text-white">
                {currentQuestion.type === "build_sentence" && "Build Sentence"}
                {currentQuestion.type === "email" && "Write Email"}
                {currentQuestion.type === "academic_discussion" && "Academic Discussion"}
              </span>
            </div>
            <span className="text-sm text-slate-400">
              Task {currentIndex + 1} of {questions.length}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                timeRemaining < 60
                  ? "bg-red-500/20 border border-red-500/30 text-red-400"
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
              onClick={handleFinish}
              className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium rounded-xl transition-all shadow-lg shadow-cyan-500/20"
            >
              Finish
            </motion.button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1.5 bg-slate-800/50 rounded-full mb-6 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        {/* ===== BUILD SENTENCE TASK ===== */}
        {currentQuestion.type === "build_sentence" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="p-6 glass-panel rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-2">Build a Sentence</h3>
              <p className="text-sm text-slate-300 mb-4">
                Rearrange these words to form a grammatically correct sentence:
              </p>

              {/* Scrambled Words */}
              <div className="flex flex-wrap gap-2 mb-6 p-4 glass-card rounded-xl">
                {currentQuestion.scrambledWords.map((word, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-white font-medium text-sm"
                  >
                    {word}
                  </span>
                ))}
              </div>

              {/* Context */}
              <div className="mb-4 p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                <p className="text-xs text-purple-300">
                  <strong>Context:</strong> {currentQuestion.context}
                </p>
              </div>

              {/* Input Area */}
              <div className="mb-4">
                <textarea
                  value={currentText}
                  onChange={(e) => setCurrentText(e.target.value)}
                  placeholder="Type your sentence here..."
                  className="w-full h-32 bg-slate-900/50 border border-slate-700/50 rounded-xl p-4 text-white placeholder-slate-500 resize-none focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/25 transition-all"
                  spellCheck={false}
                />
              </div>

              <div className="flex items-center justify-end">
                <motion.button
                  whileHover={{ scale: currentText.trim() ? 1.05 : 1 }}
                  whileTap={{ scale: currentText.trim() ? 0.95 : 1 }}
                  onClick={handleSubmitCurrent}
                  disabled={!currentText.trim()}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 disabled:from-slate-700 disabled:to-slate-700 disabled:cursor-not-allowed text-white text-sm font-medium rounded-xl transition-all shadow-lg shadow-cyan-500/20 disabled:shadow-none"
                >
                  {currentIndex < questions.length - 1 ? "Submit & Next" : "Submit"}
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {/* ===== EMAIL TASK ===== */}
        {currentQuestion.type === "email" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Scenario */}
            <div className="p-6 glass-panel rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                Write an Email
              </h3>
              <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                <p className="text-sm text-slate-300 whitespace-pre-wrap">
                  {currentQuestion.scenario}
                </p>
              </div>
            </div>

            {/* Writing Area */}
            <div className="glass-panel rounded-2xl p-6">
              <div className="mb-4">
                <textarea
                  value={currentText}
                  onChange={(e) => setCurrentText(e.target.value)}
                  placeholder="Start typing your email here..."
                  className="w-full h-64 bg-slate-900/50 border border-slate-700/50 rounded-xl p-4 text-white placeholder-slate-500 resize-none focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/25 transition-all"
                  spellCheck={false}
                />
              </div>

              {/* Word Count */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-lg ${
                      isWordCountLow
                        ? "bg-amber-500/20 text-amber-400"
                        : isWordCountHigh
                          ? "bg-red-500/20 text-red-400"
                          : "bg-emerald-500/20 text-emerald-400"
                    }`}
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
                    <span className="text-xs text-red-400 flex items-center gap-1">
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
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 disabled:from-slate-700 disabled:to-slate-700 disabled:cursor-not-allowed text-white text-sm font-medium rounded-xl transition-all shadow-lg shadow-cyan-500/20 disabled:shadow-none"
                >
                  {currentIndex < questions.length - 1 ? "Submit & Next" : "Submit"}
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {/* ===== ACADEMIC DISCUSSION TASK ===== */}
        {currentQuestion.type === "academic_discussion" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Professor Message */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-200 flex-shrink-0">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <div className="bg-blue-900/40 p-4 rounded-2xl rounded-tl-sm border border-blue-500/30 flex-1">
                <p className="text-blue-300 font-bold text-sm mb-1">
                  {currentQuestion.professor.name}
                </p>
                <p className="text-slate-200 text-sm leading-relaxed">
                  {currentQuestion.professor.message}
                </p>
              </div>
            </div>

            {/* Student Responses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQuestion.students.map((student, idx) => (
                <div key={idx} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                      <User className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-slate-300">{student.name}</span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {student.message}
                  </p>
                </div>
              ))}
            </div>

            {/* Writing Area */}
            <div className="glass-panel rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Your Response</h3>

              <div className="mb-4">
                <textarea
                  value={currentText}
                  onChange={(e) => setCurrentText(e.target.value)}
                  placeholder="Share your perspective on this discussion..."
                  className="w-full h-64 bg-slate-900/50 border border-slate-700/50 rounded-xl p-4 text-white placeholder-slate-500 resize-none focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/25 transition-all"
                  spellCheck={false}
                />
              </div>

              {/* Word Count */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-lg ${
                      isWordCountLow
                        ? "bg-amber-500/20 text-amber-400"
                        : isWordCountHigh
                          ? "bg-red-500/20 text-red-400"
                          : "bg-emerald-500/20 text-emerald-400"
                    }`}
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
                    <span className="text-xs text-red-400 flex items-center gap-1">
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
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 disabled:from-slate-700 disabled:to-slate-700 disabled:cursor-not-allowed text-white text-sm font-medium rounded-xl transition-all shadow-lg shadow-cyan-500/20 disabled:shadow-none"
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
          className="glass-panel rounded-2xl p-12 text-center max-w-md"
        >
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <Loader2 className="w-16 h-16 text-cyan-400 animate-spin" />
              <Sparkles className="w-6 h-6 text-purple-400 absolute top-0 right-0 animate-pulse" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Evaluating Your Responses</h2>
          <p className="text-slate-400 mb-6">
            Our AI is analyzing your writing for grammar, vocabulary, organization, and content...
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "0ms" }} />
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: "150ms" }} />
            <div className="w-2 h-2 rounded-full bg-pink-400 animate-bounce" style={{ animationDelay: "300ms" }} />
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
          className="glass-panel rounded-2xl p-8 mb-6"
        >
          {/* Score Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 mb-4 shadow-lg shadow-cyan-500/25"
            >
              <Trophy className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold text-white mb-2">Writing Practice Complete!</h1>
            <p className="text-slate-400">Here's your performance summary</p>
          </div>

          {/* Score Display */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-xl p-6 text-center"
            >
              <p className="text-4xl font-bold text-gradient mb-1">{overallScore.toFixed(1)}</p>
              <p className="text-sm text-slate-400">Overall Band Score</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card rounded-xl p-6 text-center"
            >
              <p className="text-4xl font-bold text-white mb-1">{questions.length}</p>
              <p className="text-sm text-slate-400">Tasks Completed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-card rounded-xl p-6 text-center"
            >
              <p className="text-4xl font-bold text-white mb-1">{totalWords}</p>
              <p className="text-sm text-slate-400">Total Words Written</p>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setState("setup")}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25"
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
          className="glass-panel rounded-2xl p-6"
        >
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
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
                  className="p-5 rounded-xl border bg-cyan-500/5 border-cyan-500/20"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          question.type === "build_sentence"
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : question.type === "email"
                              ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                              : "bg-violet-500/20 text-violet-400 border border-violet-500/30"
                        }`}
                      >
                        {question.type === "build_sentence" && "Build Sentence"}
                        {question.type === "email" && "Email"}
                        {question.type === "academic_discussion" && "Academic Discussion"}
                      </span>
                      <h4 className="text-white font-medium mt-3">
                        {getPromptText(question).substring(0, 100)}...
                      </h4>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gradient">
                        {evaluation?.overall_score.toFixed(1) || "N/A"}
                      </p>
                      <p className="text-xs text-slate-500">Score</p>
                    </div>
                  </div>

                  {/* Response */}
                  <div className="mb-4 p-4 glass-card rounded-xl">
                    {question.type === "build_sentence" && (
                      <div className="mb-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                        <p className="text-xs text-green-300">
                          <strong>Correct Answer:</strong> {question.correctAnswer}
                        </p>
                      </div>
                    )}
                    <p className="text-sm text-slate-300 whitespace-pre-wrap leading-relaxed">
                      {answer.text || "No response submitted"}
                    </p>
                    <p className="text-xs text-slate-500 mt-3">{answer.wordCount} words</p>
                  </div>

                  {/* AI Feedback */}
                  {evaluation && (
                    <>
                      {/* Scores Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        <div className="p-3 glass-card rounded-lg text-center">
                          <p className="text-lg font-bold text-cyan-400">{evaluation.grammar_score.toFixed(1)}</p>
                          <p className="text-xs text-slate-400">Grammar</p>
                        </div>
                        <div className="p-3 glass-card rounded-lg text-center">
                          <p className="text-lg font-bold text-purple-400">{evaluation.vocabulary_score.toFixed(1)}</p>
                          <p className="text-xs text-slate-400">Vocabulary</p>
                        </div>
                        <div className="p-3 glass-card rounded-lg text-center">
                          <p className="text-lg font-bold text-pink-400">{evaluation.organization_score.toFixed(1)}</p>
                          <p className="text-xs text-slate-400">Organization</p>
                        </div>
                        <div className="p-3 glass-card rounded-lg text-center">
                          <p className="text-lg font-bold text-amber-400">{evaluation.content_score.toFixed(1)}</p>
                          <p className="text-xs text-slate-400">Content</p>
                        </div>
                      </div>

                      {/* Detailed Feedback */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                        {/* Strengths */}
                        <div className="p-4 glass-card rounded-xl">
                          <p className="text-xs font-medium text-emerald-400 mb-3 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            Strengths
                          </p>
                          {evaluation.feedback.strengths.map((strength, i) => (
                            <p key={i} className="text-xs text-slate-300 mb-2 last:mb-0">
                              • {strength}
                            </p>
                          ))}
                        </div>

                        {/* Improvements */}
                        <div className="p-4 glass-card rounded-xl">
                          <p className="text-xs font-medium text-amber-400 mb-3 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4" />
                            Areas to Improve
                          </p>
                          {evaluation.feedback.improvements.map((improvement, i) => (
                            <p key={i} className="text-xs text-slate-300 mb-2 last:mb-0">
                              • {improvement}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* Detailed Notes */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="p-3 glass-card rounded-lg">
                          <p className="text-xs font-medium text-cyan-400 mb-2">Grammar</p>
                          <p className="text-xs text-slate-300">{evaluation.feedback.grammar_notes}</p>
                        </div>
                        <div className="p-3 glass-card rounded-lg">
                          <p className="text-xs font-medium text-purple-400 mb-2">Vocabulary</p>
                          <p className="text-xs text-slate-300">{evaluation.feedback.vocabulary_notes}</p>
                        </div>
                        <div className="p-3 glass-card rounded-lg">
                          <p className="text-xs font-medium text-pink-400 mb-2">Organization</p>
                          <p className="text-xs text-slate-300">{evaluation.feedback.organization_notes}</p>
                        </div>
                        <div className="p-3 glass-card rounded-lg">
                          <p className="text-xs font-medium text-amber-400 mb-2">Content</p>
                          <p className="text-xs text-slate-300">{evaluation.feedback.content_notes}</p>
                        </div>
                      </div>

                      {/* Task-Specific Feedback */}
                      {evaluation.task_specific_feedback && (
                        <div className="mt-3 p-4 glass-card rounded-xl border border-cyan-500/20">
                          <p className="text-xs font-medium text-cyan-400 mb-2">Task-Specific Analysis</p>
                          <p className="text-xs text-slate-300">
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
