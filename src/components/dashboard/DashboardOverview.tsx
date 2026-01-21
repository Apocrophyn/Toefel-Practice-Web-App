"use client";

import { TrendingUp, TrendingDown, Clock, Target, Award } from "lucide-react";

interface DashboardOverviewProps {
  overallScore: number | null;
  scoreChange: number | null;
  testsCompleted: number;
  totalTimeSeconds: number;
}

function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
}

export function DashboardOverview({
  overallScore,
  scoreChange,
  testsCompleted,
  totalTimeSeconds,
}: DashboardOverviewProps) {
  const cards = [
    {
      title: "Overall Score",
      value: overallScore?.toFixed(1) || "—",
      subtitle: scoreChange
        ? `${scoreChange > 0 ? "+" : ""}${scoreChange.toFixed(1)} from last test`
        : "Take a test to see your score",
      icon: Award,
      trend: scoreChange ? (scoreChange > 0 ? "up" : "down") : null,
      color: "from-primary-500 to-primary-600",
    },
    {
      title: "Target Score",
      value: "5.0",
      subtitle: "Set your goal in settings",
      icon: Target,
      trend: null,
      color: "from-secondary-500 to-secondary-600",
    },
    {
      title: "Tests Completed",
      value: testsCompleted.toString(),
      subtitle: "This month",
      icon: Award,
      trend: null,
      color: "from-accent-500 to-accent-600",
    },
    {
      title: "Practice Time",
      value: formatTime(totalTimeSeconds),
      subtitle: "Total time spent",
      icon: Clock,
      trend: null,
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-2xl p-5 hover:border-neutral-700 transition-colors"
        >
          <div className="flex items-start justify-between mb-3">
            <div
              className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center`}
            >
              <card.icon className="w-5 h-5 text-white" />
            </div>
            {card.trend && (
              <div
                className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                  card.trend === "up"
                    ? "bg-secondary-500/10 text-secondary-400"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                {card.trend === "up" ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                {Math.abs(scoreChange || 0).toFixed(1)}
              </div>
            )}
          </div>
          <p className="text-xs text-neutral-500 mb-1">{card.title}</p>
          <p className="text-2xl font-bold text-white mb-0.5">{card.value}</p>
          <p className="text-xs text-neutral-400">{card.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
