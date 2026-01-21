"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  History,
  BookOpen,
  Headphones,
  Mic,
  PenTool,
  GraduationCap,
  Calendar,
  Clock,
  TrendingUp,
  TrendingDown,
  Minus,
  ChevronRight,
  Trash2,
  BarChart3,
  Sparkles,
} from "lucide-react";

interface TestRecord {
  id: string;
  date: string;
  type: "full" | "reading" | "listening" | "speaking" | "writing";
  overallScore: number;
  sectionScores?: {
    reading?: number;
    listening?: number;
    speaking?: number;
    writing?: number;
  };
  duration: number;
  questionsAnswered: number;
  totalQuestions: number;
}

const mockTestHistory: TestRecord[] = [
  {
    id: "1",
    date: "2026-01-15",
    type: "full",
    overallScore: 5.0,
    sectionScores: { reading: 5.5, listening: 4.5, speaking: 5.0, writing: 5.0 },
    duration: 72,
    questionsAnswered: 22,
    totalQuestions: 22,
  },
  {
    id: "2",
    date: "2026-01-14",
    type: "reading",
    overallScore: 5.5,
    duration: 15,
    questionsAnswered: 10,
    totalQuestions: 10,
  },
  {
    id: "3",
    date: "2026-01-13",
    type: "speaking",
    overallScore: 4.5,
    duration: 8,
    questionsAnswered: 4,
    totalQuestions: 4,
  },
  {
    id: "4",
    date: "2026-01-12",
    type: "listening",
    overallScore: 4.0,
    duration: 12,
    questionsAnswered: 5,
    totalQuestions: 5,
  },
  {
    id: "5",
    date: "2026-01-10",
    type: "full",
    overallScore: 4.5,
    sectionScores: { reading: 5.0, listening: 4.0, speaking: 4.5, writing: 4.5 },
    duration: 68,
    questionsAnswered: 22,
    totalQuestions: 22,
  },
  {
    id: "6",
    date: "2026-01-08",
    type: "writing",
    overallScore: 5.0,
    duration: 20,
    questionsAnswered: 3,
    totalQuestions: 3,
  },
  {
    id: "7",
    date: "2026-01-05",
    type: "full",
    overallScore: 4.0,
    sectionScores: { reading: 4.5, listening: 3.5, speaking: 4.0, writing: 4.0 },
    duration: 75,
    questionsAnswered: 20,
    totalQuestions: 22,
  },
];

const typeConfig = {
  full: { name: "Full Test", icon: GraduationCap, gradient: "from-emerald-400 to-green-500", glow: "shadow-emerald-500/25" },
  reading: { name: "Reading", icon: BookOpen, gradient: "from-amber-400 to-orange-500", glow: "shadow-amber-500/25" },
  listening: { name: "Listening", icon: Headphones, gradient: "from-pink-400 to-rose-500", glow: "shadow-pink-500/25" },
  speaking: { name: "Speaking", icon: Mic, gradient: "from-violet-400 to-purple-500", glow: "shadow-violet-500/25" },
  writing: { name: "Writing", icon: PenTool, gradient: "from-cyan-400 to-teal-500", glow: "shadow-cyan-500/25" },
};

export function HistorySection() {
  const [testHistory, setTestHistory] = useState<TestRecord[]>(mockTestHistory);
  const [filter, setFilter] = useState<string>("all");
  const [selectedTest, setSelectedTest] = useState<TestRecord | null>(null);

  const stats = {
    totalTests: testHistory.length,
    avgScore:
      testHistory.length > 0
        ? (testHistory.reduce((a, b) => a + b.overallScore, 0) / testHistory.length).toFixed(1)
        : "0.0",
    highestScore: testHistory.length > 0 ? Math.max(...testHistory.map((t) => t.overallScore)) : 0,
    totalTime: testHistory.reduce((a, b) => a + b.duration, 0),
    scoreChange:
      testHistory.length >= 2
        ? testHistory[0].overallScore - testHistory[testHistory.length - 1].overallScore
        : 0,
  };

  const filteredHistory =
    filter === "all" ? testHistory : testHistory.filter((t) => t.type === filter);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const deleteTest = (id: string) => {
    setTestHistory((prev) => prev.filter((t) => t.id !== id));
    if (selectedTest?.id === id) {
      setSelectedTest(null);
    }
  };

  const getScoreTrend = (score: number, index: number) => {
    if (index >= filteredHistory.length - 1) return "same";
    const prevScore = filteredHistory[index + 1].overallScore;
    if (score > prevScore) return "up";
    if (score < prevScore) return "down";
    return "same";
  };

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-2">
          <div className="relative">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-400 to-gray-500 flex items-center justify-center shadow-lg shadow-slate-500/25">
              <History className="w-7 h-7 text-white" />
            </div>
            <div className="absolute -top-1 -right-1">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Test History</h1>
            <p className="text-slate-400">Track your progress over time</p>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-xl p-5"
        >
          <div className="flex items-center gap-2 text-slate-400 mb-3">
            <BarChart3 className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-medium">Total Tests</span>
          </div>
          <p className="text-3xl font-bold text-white">{stats.totalTests}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass-card rounded-xl p-5"
        >
          <div className="flex items-center gap-2 text-slate-400 mb-3">
            <TrendingUp className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-medium">Avg Score</span>
          </div>
          <p className="text-3xl font-bold text-gradient">{stats.avgScore}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-xl p-5"
        >
          <div className="flex items-center gap-2 text-slate-400 mb-3">
            <GraduationCap className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-medium">Highest Score</span>
          </div>
          <p className="text-3xl font-bold text-white">{stats.highestScore.toFixed(1)}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass-card rounded-xl p-5"
        >
          <div className="flex items-center gap-2 text-slate-400 mb-3">
            <Clock className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-medium">Total Time</span>
          </div>
          <p className="text-3xl font-bold text-white">{stats.totalTime} <span className="text-lg text-slate-500">min</span></p>
        </motion.div>
      </div>

      {/* Score Trend */}
      {testHistory.length >= 2 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-panel rounded-2xl p-6 mb-8"
        >
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            Score Progress
          </h2>
          <div className="flex items-end justify-between h-32 gap-2">
            {testHistory.slice(0, 10).reverse().map((test) => {
              const height = ((test.overallScore - 1) / 5) * 100;
              const config = typeConfig[test.type];
              return (
                <div key={test.id} className="flex-1 flex flex-col items-center gap-2">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`w-full bg-gradient-to-t ${config.gradient} rounded-t-lg`}
                  />
                  <span className="text-xs text-slate-500">{test.overallScore}</span>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center mt-6">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
              stats.scoreChange > 0
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                : stats.scoreChange < 0
                ? "bg-red-500/20 text-red-400 border border-red-500/30"
                : "glass-card text-slate-400"
            }`}>
              {stats.scoreChange > 0 ? (
                <TrendingUp className="w-4 h-4" />
              ) : stats.scoreChange < 0 ? (
                <TrendingDown className="w-4 h-4" />
              ) : (
                <Minus className="w-4 h-4" />
              )}
              <span className="text-sm font-medium">
                {stats.scoreChange > 0 ? "+" : ""}{stats.scoreChange.toFixed(1)} from first test
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
            filter === "all"
              ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/20"
              : "glass-card text-slate-400 hover:text-white"
          }`}
        >
          All Tests
        </button>
        {Object.entries(typeConfig).map(([key, config]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
              filter === key
                ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/20"
                : "glass-card text-slate-400 hover:text-white"
            }`}
          >
            <config.icon className="w-4 h-4" />
            {config.name}
          </button>
        ))}
      </div>

      {/* Test History List */}
      <div className="space-y-3">
        {filteredHistory.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-panel rounded-2xl p-12 text-center"
          >
            <History className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">No tests found</h3>
            <p className="text-slate-400">
              {filter === "all"
                ? "Start practicing to see your test history here"
                : `No ${typeConfig[filter as keyof typeof typeConfig]?.name || filter} tests yet`}
            </p>
          </motion.div>
        ) : (
          filteredHistory.map((test, index) => {
            const config = typeConfig[test.type];
            const trend = getScoreTrend(test.overallScore, index);

            return (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`glass-panel rounded-xl p-5 transition-all cursor-pointer ${
                  selectedTest?.id === test.id
                    ? "border-cyan-500/50 shadow-lg shadow-cyan-500/10"
                    : "hover:border-slate-700"
                }`}
                onClick={() => setSelectedTest(selectedTest?.id === test.id ? null : test)}
              >
                <div className="flex items-center gap-4">
                  {/* Type Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${config.gradient} flex items-center justify-center flex-shrink-0 shadow-lg ${config.glow}`}>
                    <config.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-white">{config.name}</h3>
                      {trend === "up" && (
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                      )}
                      {trend === "down" && (
                        <TrendingDown className="w-4 h-4 text-red-400" />
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-400 mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(test.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {test.duration} min
                      </span>
                      <span className="text-slate-500">
                        {test.questionsAnswered}/{test.totalQuestions} answered
                      </span>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gradient">{test.overallScore.toFixed(1)}</p>
                    <p className="text-xs text-slate-500">Band Score</p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteTest(test.id);
                      }}
                      className="p-2.5 rounded-xl glass-card text-slate-500 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <ChevronRight className={`w-5 h-5 text-slate-500 transition-transform ${
                      selectedTest?.id === test.id ? "rotate-90" : ""
                    }`} />
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedTest?.id === test.id && test.sectionScores && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-5 pt-5 border-t border-slate-700/50"
                  >
                    <h4 className="text-sm font-medium text-slate-400 mb-4">Section Breakdown</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {test.sectionScores.reading !== undefined && (
                        <div className="glass-card rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <BookOpen className="w-4 h-4 text-amber-400" />
                            <span className="text-xs text-slate-400">Reading</span>
                          </div>
                          <p className="text-xl font-bold text-white">
                            {test.sectionScores.reading.toFixed(1)}
                          </p>
                        </div>
                      )}
                      {test.sectionScores.listening !== undefined && (
                        <div className="glass-card rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Headphones className="w-4 h-4 text-pink-400" />
                            <span className="text-xs text-slate-400">Listening</span>
                          </div>
                          <p className="text-xl font-bold text-white">
                            {test.sectionScores.listening.toFixed(1)}
                          </p>
                        </div>
                      )}
                      {test.sectionScores.speaking !== undefined && (
                        <div className="glass-card rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Mic className="w-4 h-4 text-violet-400" />
                            <span className="text-xs text-slate-400">Speaking</span>
                          </div>
                          <p className="text-xl font-bold text-white">
                            {test.sectionScores.speaking.toFixed(1)}
                          </p>
                        </div>
                      )}
                      {test.sectionScores.writing !== undefined && (
                        <div className="glass-card rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <PenTool className="w-4 h-4 text-cyan-400" />
                            <span className="text-xs text-slate-400">Writing</span>
                          </div>
                          <p className="text-xl font-bold text-white">
                            {test.sectionScores.writing.toFixed(1)}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
}
