"use client";

import { motion } from "framer-motion";
import { BookOpen, Headphones, Mic, PenTool, Clock, Layers } from "lucide-react";

const sections = [
  {
    icon: BookOpen,
    name: "Reading",
    duration: "18-27 min",
    format: "Adaptive",
    tasks: ["Complete the Words", "Read in Daily Life", "Academic Text"],
    color: "bg-amber-500",
  },
  {
    icon: Headphones,
    name: "Listening",
    duration: "18-27 min",
    format: "Adaptive",
    tasks: ["Choose a Response", "Conversation", "Announcement", "Lecture"],
    color: "bg-pink-500",
  },
  {
    icon: Mic,
    name: "Speaking",
    duration: "~8 min",
    format: "4 Tasks",
    tasks: ["Listen & Repeat", "Interview (4 questions)", "Integrated Tasks"],
    color: "bg-green-500",
  },
  {
    icon: PenTool,
    name: "Writing",
    duration: "~23 min",
    format: "3 Tasks",
    tasks: ["Build a Sentence", "Write an Email", "Academic Discussion"],
    color: "bg-blue-500",
  },
];

export function TestFormatSection() {
  return (
    <section id="format" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-50 border border-secondary-100 rounded-full mb-6"
          >
            <Layers className="w-4 h-4 text-secondary-600" />
            <span className="text-sm font-medium text-secondary-700">
              TOEFL 2026 Format
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4"
          >
            Practice the Exact Test Format
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            The new TOEFL iBT is 67-85 minutes with adaptive Reading & Listening
            and the new 1-6 band scoring system.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-neutral-200 -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {sections.map((section, index) => (
              <motion.div
                key={section.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-neutral-200 p-6 hover:shadow-xl hover:border-neutral-300 transition-all duration-300 relative z-10"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 ${section.color} rounded-xl flex items-center justify-center mb-5`}
                >
                  <section.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {section.name}
                </h3>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-neutral-100 rounded-md text-xs font-medium text-neutral-600">
                    <Clock className="w-3 h-3" />
                    {section.duration}
                  </span>
                  <span className="text-xs font-medium text-neutral-500">
                    {section.format}
                  </span>
                </div>

                {/* Tasks */}
                <ul className="space-y-2">
                  {section.tasks.map((task, i) => (
                    <li
                      key={i}
                      className="text-sm text-neutral-600 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 flex-shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Total Duration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-neutral-900 rounded-2xl">
            <div className="text-left">
              <p className="text-xs text-neutral-400 uppercase tracking-wider">
                Total Duration
              </p>
              <p className="text-2xl font-bold text-white">67-85 minutes</p>
            </div>
            <div className="w-px h-12 bg-neutral-700" />
            <div className="text-left">
              <p className="text-xs text-neutral-400 uppercase tracking-wider">
                Scoring
              </p>
              <p className="text-2xl font-bold text-white">1-6 Bands</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
