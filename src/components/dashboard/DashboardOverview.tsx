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
      color: "from-amber-500 to-amber-600",
    },
    {
      title: "Target Score",
      value: "5.0",
      subtitle: "Set your goal in settings",
      icon: Target,
      trend: null,
      color: "from-platform-500 to-platform-600",
    },
    {
      title: "Tests Completed",
      value: testsCompleted.toString(),
      subtitle: "This month",
      icon: Award,
      trend: null,
      color: "from-amber-500 to-amber-600",
    },
    {
      title: "Practice Time",
      value: formatTime(totalTimeSeconds),
      subtitle: "Total time spent",
      icon: Clock,
      trend: null,
      color: "from-amber-500 to-amber-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-steel-900/50 backdrop-blur border border-steel-800 rounded-panel p-5 hover:border-steel-700 transition-colors"
        >
          <div className="flex items-start justify-between mb-3">
            <div
              className={`glass-plate w-10 h-10 rounded-full ${card.color} flex items-center justify-center`}
            >
              <card.icon className="w-5 h-5 text-white" />
            </div>
            {card.trend && (
              <div
                className={`flex items-center gap-1 px-2 py-1 rounded-flap text-xs font-medium ${
 card.trend === "up"
 ? "bg-platform-500/10 text-platform-400"
 : "bg-signal-500/10 text-signal-400"
 } font-board uppercase tracking-[0.14em]`}
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
          <p className="text-xs text-steel-500 mb-1">{card.title}</p>
          <p className="text-2xl font-bold text-white mb-0.5">{card.value}</p>
          <p className="text-xs text-steel-400">{card.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
