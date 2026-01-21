"use client";

import { BookOpen, Headphones, Mic, PenTool } from "lucide-react";
import type { TestAttempt } from "@/types/database";

interface SectionProgressProps {
  attempts: TestAttempt[];
}

const sections = [
  {
    name: "Reading",
    key: "reading_score" as const,
    icon: BookOpen,
    color: "bg-amber-500",
  },
  {
    name: "Listening",
    key: "listening_score" as const,
    icon: Headphones,
    color: "bg-pink-500",
  },
  {
    name: "Speaking",
    key: "speaking_score" as const,
    icon: Mic,
    color: "bg-green-500",
  },
  {
    name: "Writing",
    key: "writing_score" as const,
    icon: PenTool,
    color: "bg-blue-500",
  },
];

export function SectionProgress({ attempts }: SectionProgressProps) {
  // Calculate average score for each section
  const sectionAverages = sections.map((section) => {
    const scores = attempts
      .map((a) => a[section.key])
      .filter((s): s is number => s !== null);

    if (scores.length === 0) return { ...section, average: null, progress: 0 };

    const average = scores.reduce((a, b) => a + b, 0) / scores.length;
    const progress = (average / 6) * 100;

    return { ...section, average, progress };
  });

  return (
    <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-2xl p-6">
      <h2 className="text-lg font-semibold text-white mb-5">
        Section Progress
      </h2>

      <div className="space-y-4">
        {sectionAverages.map((section) => (
          <div key={section.name}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 ${section.color} rounded-lg flex items-center justify-center`}
                >
                  <section.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-white">
                  {section.name}
                </span>
              </div>
              <span className="text-sm font-semibold text-white">
                {section.average ? section.average.toFixed(1) : "—"} / 6.0
              </span>
            </div>
            <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
              <div
                className={`h-full ${section.color} rounded-full transition-all duration-500`}
                style={{ width: `${section.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {attempts.length === 0 && (
        <p className="text-sm text-neutral-500 text-center mt-4">
          Complete a test to see your progress
        </p>
      )}
    </div>
  );
}
