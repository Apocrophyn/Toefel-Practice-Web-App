"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Headphones,
  Mic,
  PenTool,
  Play,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Full Mock Test",
    description: "67-85 min adaptive test",
    href: "/practice/mock",
    icon: Play,
    color: "from-primary-500 to-primary-600",
    featured: true,
  },
  {
    title: "Reading",
    description: "18-27 min",
    href: "/practice/reading",
    icon: BookOpen,
    color: "from-amber-500 to-amber-600",
  },
  {
    title: "Listening",
    description: "18-27 min",
    href: "/practice/listening",
    icon: Headphones,
    color: "from-pink-500 to-pink-600",
  },
  {
    title: "Speaking",
    description: "~8 min",
    href: "/practice/speaking",
    icon: Mic,
    color: "from-green-500 to-green-600",
  },
  {
    title: "Writing",
    description: "~23 min",
    href: "/practice/writing",
    icon: PenTool,
    color: "from-blue-500 to-blue-600",
  },
];

export function QuickActions() {
  return (
    <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-white">Quick Actions</h2>
        <Link
          href="/practice"
          className="text-sm text-primary-400 hover:text-primary-300 flex items-center gap-1"
        >
          View all
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {actions.map((action, index) => (
          <motion.div
            key={action.href}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link
              href={action.href}
              className={`block p-4 rounded-xl border transition-all hover:scale-[1.02] ${
                action.featured
                  ? "bg-gradient-to-br from-primary-600 to-primary-700 border-primary-500 col-span-2 sm:col-span-1"
                  : "bg-neutral-800/50 border-neutral-700 hover:border-neutral-600"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                  action.featured
                    ? "bg-white/20"
                    : `bg-gradient-to-br ${action.color}`
                }`}
              >
                <action.icon className="w-5 h-5 text-white" />
              </div>
              <p
                className={`font-semibold mb-0.5 ${
                  action.featured ? "text-white" : "text-white"
                }`}
              >
                {action.title}
              </p>
              <p
                className={`text-xs ${
                  action.featured ? "text-primary-200" : "text-neutral-400"
                }`}
              >
                {action.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
