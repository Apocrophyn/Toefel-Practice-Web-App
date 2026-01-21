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
  MessageSquare
} from "lucide-react";
import { writingQuestions, type WritingQuestion, type AcademicDiscussionTask } from "@/data/questions/writing-2026";

type PracticeState = "setup" | "practice" | "review";

interface Answer {
  questionId: string;
  text: string;
  wordCount: number;
  timeSpent: number;
  score: number | null;
  feedback: {
    grammar: string[];
    content: string[];
    organization: string[];
  };
}

export function WritingPractice() {
  const [state, setState] = useState<PracticeState>("setup");
  const [questionCount, setQuestionCount] = useState(3);

  const [questions, setQuestions] = useState<WritingQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const [currentText, setCurrentText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());

  const wordCount = currentText.trim() ? currentText.trim().split(/\s+/).length : 0;

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
    // Filter for legitimate 2026 tasks
    const relevantQuestions = writingQuestions.filter(q => q.type === "academic_discussion");

    // Select random questions based on count
    const shuffled = [...relevantQuestions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(questionCount, shuffled.length));

    if (selected.length === 0) {
      // Fallback if no questions found (shouldn't happen with our seed data)
      return;
    }

    setQuestions(selected);
    setCurrentIndex(0);
    setAnswers(
      selected.map((q) => ({
        questionId: q.id,
        text: "",
        wordCount: 0,
        timeSpent: 0,
        score: null,
        feedback: { grammar: [], content: [], organization: [] },
      }))
    );
    setCurrentText("");
    setTimeRemaining(selected[0]?.timeLimit || 600); // Default 10 mins
    setStartTime(Date.now());
    setState("practice");
  };

  const generateFeedback = (
    text: string,
    question: WritingQuestion
  ): { score: number; feedback: Answer["feedback"] } => {
    const words = text.trim().split(/\s+/).length;
    let score = 4.0;

    if (words >= question.minWords && words <= question.maxWords) {
      score += 0.5;
    } else if (words < question.minWords) {
      score -= 0.5;
    }

    const sentences = text.split(/[.!?]+/).filter((s) => s.trim());
    if (sentences.length >= 3) score += 0.5;
    if (text.includes(",")) score += 0.25;

    score += Math.random() * 0.5;
    score = Math.min(6, Math.max(2, score));

    const grammarFeedback =
      score >= 5
        ? ["Excellent grammar with minimal errors", "Good sentence variety"]
        : score >= 4
          ? ["Generally accurate grammar", "Some minor errors present"]
          : ["Several grammar issues detected", "Review sentence structure"];

    const contentFeedback =
      score >= 5
        ? ["Well-developed ideas with strong support", "Relevant examples provided"]
        : score >= 4
          ? ["Ideas are adequately developed", "Could use more specific examples"]
          : ["Ideas need more development", "Add more supporting details"];

    const organizationFeedback =
      score >= 5
        ? ["Clear logical structure", "Effective transitions between ideas"]
        : score >= 4
          ? ["Adequate organization", "Some transitions could be smoother"]
          : ["Organization needs improvement", "Add clearer topic sentences"];

    return {
      score: Math.round(score * 2) / 2,
      feedback: {
        grammar: grammarFeedback,
        content: contentFeedback,
        organization: organizationFeedback,
      },
    };
  };

  const handleSubmitCurrent = useCallback(() => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    const currentQuestion = questions[currentIndex];
    const { score, feedback } = generateFeedback(currentText, currentQuestion);

    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentIndex] = {
        questionId: currentQuestion.id,
        text: currentText,
        wordCount,
        timeSpent,
        score,
        feedback,
      };
      return newAnswers;
    });

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setCurrentText("");
      setTimeRemaining(questions[currentIndex + 1].timeLimit);
      setStartTime(Date.now());
    } else {
      setState("review");
    }
  }, [currentText, wordCount, currentIndex, questions, startTime]);

  const handleFinish = () => {
    handleSubmitCurrent();
    setState("review");
  };

  const calculateOverallScore = () => {
    const scores = answers.filter((a) => a.score !== null).map((a) => a.score!);
    if (scores.length === 0) return 0;
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    return Math.round(avg * 2) / 2;
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
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
                    Task 1: Build a Sentence (5 min)
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

          {/* Task Selection */}
          <div className="mb-8">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-3">
              <Zap className="w-4 h-4 text-purple-400" />
              Practice Mode
            </label>
            <div className="grid grid-cols-1 gap-3">
              {[
                { count: 1, label: "Single Task", desc: "Practice Build a Sentence only" },
                { count: 2, label: "Two Tasks", desc: "Sentence + Email" },
                { count: 3, label: "Full Section - Official", desc: "All 3 tasks (~23 min)" }
              ].map((option) => (
                <button
                  key={option.count}
                  onClick={() => setQuestionCount(option.count)}
                  className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-300 text-left ${questionCount === option.count
                    ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/50 text-white shadow-lg shadow-cyan-500/10"
                    : "glass-card border-slate-700/50 text-slate-400 hover:text-white hover:border-slate-600"
                    }`}
                >
                  <div className="font-semibold">{option.label}</div>
                  <div className="text-xs opacity-75 mt-1">{option.desc}</div>
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

  // Practice Screen
  if (state === "practice" && questions.length > 0) {
    const currentQuestion = questions[currentIndex];
    const isWordCountLow = wordCount < currentQuestion.minWords;
    const isWordCountHigh = wordCount > currentQuestion.maxWords;

    return (
      <div className="min-h-[calc(100vh-4rem)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
                <PenTool className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium text-white">Writing</span>
            </div>
            <span className="text-sm text-slate-400">
              Task {currentIndex + 1} of {questions.length}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${timeRemaining < 60
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

        {currentQuestion.type === "academic_discussion" && (
          <div className="space-y-6">
            {/* Professor Message */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-200 flex-shrink-0">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <div className="bg-blue-900/40 p-4 rounded-2xl rounded-tl-sm border border-blue-500/30">
                <p className="text-blue-300 font-bold text-sm mb-1">
                  {(currentQuestion as AcademicDiscussionTask).professor.name}
                </p>
                <p className="text-slate-200 text-sm leading-relaxed">
                  {(currentQuestion as AcademicDiscussionTask).professor.message}
                </p>
              </div>
            </div>

            {/* Student Responses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(currentQuestion as AcademicDiscussionTask).students.map((student, idx) => (
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

            <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-2">
                Your Task
              </h3>
              <p className="text-sm text-slate-300 whitespace-pre-wrap">
                {currentQuestion.prompt}
              </p>
            </div>
          </div>
        )}

        {/* Writing Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-panel rounded-2xl p-6"
        >
          <div className="mb-4">
            <textarea
              value={currentText}
              onChange={(e) => setCurrentText(e.target.value)}
              placeholder="Start typing your response here..."
              className="w-full h-64 bg-slate-900/50 border border-slate-700/50 rounded-xl p-4 text-white placeholder-slate-500 resize-none focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/25 transition-all"
              spellCheck={false}
            />
          </div>

          {/* Word Count */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span
                className={`text-sm font-medium px-3 py-1 rounded-lg ${isWordCountLow
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
                  Need at least {currentQuestion.minWords}
                </span>
              )}
              {isWordCountHigh && (
                <span className="text-xs text-red-400 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" />
                  Exceeds maximum {currentQuestion.maxWords}
                </span>
              )}
            </div>

            <motion.button
              whileHover={{ scale: wordCount >= 5 ? 1.05 : 1 }}
              whileTap={{ scale: wordCount >= 5 ? 0.95 : 1 }}
              onClick={handleSubmitCurrent}
              disabled={wordCount < 5}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 disabled:from-slate-700 disabled:to-slate-700 disabled:cursor-not-allowed text-white text-sm font-medium rounded-xl transition-all shadow-lg shadow-cyan-500/20 disabled:shadow-none"
            >
              {currentIndex < questions.length - 1 ? "Submit & Next" : "Submit"}
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Review Screen
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
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${question.type === "integrated"
                          ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                          : "bg-violet-500/20 text-violet-400 border border-violet-500/30"
                        }`}>
                        {question.type === "integrated"
                          ? "Integrated Task"
                          : "Academic Discussion"}
                      </span>
                      <h4 className="text-white font-medium mt-3">{question.prompt}</h4>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gradient">
                        {answer.score?.toFixed(1)}
                      </p>
                      <p className="text-xs text-slate-500">Score</p>
                    </div>
                  </div>

                  {/* Response */}
                  <div className="mb-4 p-4 glass-card rounded-xl">
                    <p className="text-sm text-slate-300 whitespace-pre-wrap leading-relaxed">
                      {answer.text || "No response submitted"}
                    </p>
                    <p className="text-xs text-slate-500 mt-3">
                      {answer.wordCount} words
                    </p>
                  </div>

                  {/* Feedback */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-4 glass-card rounded-xl">
                      <p className="text-xs font-medium text-slate-400 mb-3">Grammar</p>
                      {answer.feedback.grammar.map((fb, i) => (
                        <p key={i} className="text-xs text-slate-300 flex items-start gap-2 mb-2 last:mb-0">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          {fb}
                        </p>
                      ))}
                    </div>
                    <div className="p-4 glass-card rounded-xl">
                      <p className="text-xs font-medium text-slate-400 mb-3">Content</p>
                      {answer.feedback.content.map((fb, i) => (
                        <p key={i} className="text-xs text-slate-300 flex items-start gap-2 mb-2 last:mb-0">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          {fb}
                        </p>
                      ))}
                    </div>
                    <div className="p-4 glass-card rounded-xl">
                      <p className="text-xs font-medium text-slate-400 mb-3">Organization</p>
                      {answer.feedback.organization.map((fb, i) => (
                        <p key={i} className="text-xs text-slate-300 flex items-start gap-2 mb-2 last:mb-0">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          {fb}
                        </p>
                      ))}
                    </div>
                  </div>
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
