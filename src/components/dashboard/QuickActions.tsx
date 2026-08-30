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
    description: "83-89 min adaptive test",
    href: "/practice/mock",
    icon: Play,
    color: "from-amber-500 to-amber-600",
    featured: true,
  },
  {
    title: "Reading",
    description: "27-30 min",
    href: "/practice/reading",
    icon: BookOpen,
    color: "from-amber-500 to-amber-600",
  },
  {
    title: "Listening",
    description: "25-29 min",
    href: "/practice/listening",
    icon: Headphones,
    color: "from-amber-500 to-amber-600",
  },
  {
    title: "Speaking",
    description: "~8 min",
    href: "/practice/speaking",
    icon: Mic,
    color: "from-platform-500 to-platform-600",
  },
  {
    title: "Writing",
    description: "~23 min",
    href: "/practice/writing",
    icon: PenTool,
    color: "from-amber-500 to-amber-600",
  },
];

export function QuickActions() {
  return (
    <div className="bg-steel-900/50 backdrop-blur border border-steel-800 rounded-panel p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-white">Quick Actions</h2>
        <Link
          href="/practice"
          className="text-sm text-amber-400 hover:text-amber-300 flex items-center gap-1"
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
              className={`bg-amber-400 block p-4 rounded-panel border transition-all hover:scale-[1.02] ${
 action.featured
 ? " border-amber-500 col-span-2 sm:col-span-1"
 : "bg-steel-800/50 border-steel-700 hover:border-steel-600"
 }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${
 action.featured
 ? "bg-white/20"
 :`bg-gradient-to-br ${action.color}`
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
 action.featured ? "text-amber-200" : "text-steel-400"
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
