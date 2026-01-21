"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Mic,
  PenTool,
  Headphones,
  BookOpen,
  BarChart3,
  Clock,
  Target,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Evaluation",
    description:
      "Get instant, detailed feedback on Speaking and Writing using advanced AI models trained on TOEFL rubrics.",
    color: "from-purple-500 to-indigo-500",
    gridClass: "sm:col-span-2",
  },
  {
    icon: Target,
    title: "Adaptive Difficulty",
    description:
      "Practice adapts to your level, just like the real TOEFL 2026 multistage format.",
    color: "from-orange-500 to-red-500",
    gridClass: "",
  },
  {
    icon: Mic,
    title: "Speaking Practice",
    description:
      "Record responses, get pronunciation & fluency scores, and detailed improvement tips.",
    color: "from-green-500 to-emerald-500",
    gridClass: "",
  },
  {
    icon: PenTool,
    title: "Writing Feedback",
    description:
      "Grammar, vocabulary, organization, and content analysis in seconds.",
    color: "from-blue-500 to-cyan-500",
    gridClass: "",
  },
  {
    icon: Headphones,
    title: "Listening Section",
    description:
      "Campus conversations, announcements, and academic lectures with real audio.",
    color: "from-pink-500 to-rose-500",
    gridClass: "",
  },
  {
    icon: BookOpen,
    title: "Reading Section",
    description:
      "Daily life texts and academic passages with comprehension questions.",
    color: "from-amber-500 to-yellow-500",
    gridClass: "",
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description:
      "Track progress, identify weak areas, and see score predictions over time.",
    color: "from-teal-500 to-green-500",
    gridClass: "sm:col-span-2",
  },
  {
    icon: Clock,
    title: "Exam-Accurate Timing",
    description:
      "Practice with real time limits (67-85 min) to build test stamina.",
    color: "from-violet-500 to-purple-500",
    gridClass: "",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description:
      "Get your band score (1-6) immediately after completing each section.",
    color: "from-sky-500 to-blue-500",
    gridClass: "",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function FeaturesGrid() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Comprehensive practice tools designed to match the exact TOEFL 2026
            format with AI-powered feedback.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`group bg-white rounded-2xl p-6 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all duration-300 ${feature.gridClass}`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
