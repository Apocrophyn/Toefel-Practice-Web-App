"use client";

import Link from "next/link";
import {
  BookOpen,
  Headphones,
  Mic,
  PenTool,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import type { TestAttempt } from "@/types/database";

interface RecentActivityProps {
  attempts: TestAttempt[];
}

const testTypeIcons: Record<string, typeof BookOpen> = {
  reading: BookOpen,
  listening: Headphones,
  speaking: Mic,
  writing: PenTool,
  full_mock: GraduationCap,
};

const testTypeColors: Record<string, string> = {
  reading: "bg-amber-500",
  listening: "bg-pink-500",
  speaking: "bg-green-500",
  writing: "bg-blue-500",
  full_mock: "bg-primary-500",
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days === 0) {
    const hours = Math.floor(diff / (1000 * 60 * 60));
    if (hours === 0) {
      const minutes = Math.floor(diff / (1000 * 60));
      return `${minutes} min ago`;
    }
    return `${hours}h ago`;
  }
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function formatTestType(type: string): string {
  return type
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function RecentActivity({ attempts }: RecentActivityProps) {
  return (
    <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
        <Link
          href="/results"
          className="text-sm text-primary-400 hover:text-primary-300 flex items-center gap-1"
        >
          View all
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {attempts.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-neutral-500 mb-4">No recent activity</p>
          <Link
            href="/practice"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Start Practicing
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {attempts.slice(0, 5).map((attempt) => {
            const Icon = testTypeIcons[attempt.test_type] || GraduationCap;
            const color = testTypeColors[attempt.test_type] || "bg-neutral-600";

            return (
              <Link
                key={attempt.id}
                href={`/results/${attempt.id}`}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-neutral-800/50 transition-colors group"
              >
                <div
                  className={`w-10 h-10 ${color} rounded-lg flex items-center justify-center flex-shrink-0`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white group-hover:text-primary-400 transition-colors">
                    {formatTestType(attempt.test_type)}
                  </p>
                  <p className="text-xs text-neutral-500">
                    {formatDate(attempt.started_at)}
                  </p>
                </div>
                <div className="text-right">
                  {attempt.status === "completed" ? (
                    <>
                      <p className="text-lg font-bold text-white">
                        {attempt.overall_score?.toFixed(1) || "—"}
                      </p>
                      <p className="text-xs text-neutral-500">/ 6.0</p>
                    </>
                  ) : (
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        attempt.status === "in_progress"
                          ? "bg-amber-500/20 text-amber-400"
                          : "bg-neutral-700 text-neutral-400"
                      }`}
                    >
                      {attempt.status === "in_progress"
                        ? "In Progress"
                        : "Abandoned"}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
