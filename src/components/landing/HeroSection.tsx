"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, CheckCircle2 } from "lucide-react";

const highlights = [
  "New 2026 Format",
  "AI-Powered Feedback",
  "Adaptive Testing",
  "Instant Scoring",
];

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">
              Updated for TOEFL 2026 Format
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight mb-6"
          >
            Master the TOEFL iBT with{" "}
            <span className="gradient-text">AI-Powered</span> Practice
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto"
          >
            The first platform to fully simulate the new 2026 TOEFL format.
            Get instant AI feedback on Speaking & Writing, adaptive difficulty,
            and detailed analytics to reach your target score.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link
              href="/signup"
              className="flex items-center gap-2 px-6 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-primary-500/25"
            >
              Start Free Practice
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button className="flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-neutral-50 text-neutral-700 font-semibold rounded-xl border border-neutral-200 transition-colors">
              <Play className="w-4 h-4" />
              Watch Demo
            </button>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-neutral-600"
              >
                <CheckCircle2 className="w-4 h-4 text-secondary-500" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero Image / Mock Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 relative"
        >
          <div className="relative mx-auto max-w-5xl">
            {/* Browser chrome mockup */}
            <div className="bg-neutral-900 rounded-t-xl p-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 bg-neutral-800 rounded-md px-4 py-1.5 text-center">
                <span className="text-xs text-neutral-400">
                  toeflpractice.com/dashboard
                </span>
              </div>
            </div>
            {/* Dashboard preview */}
            <div className="bg-neutral-950 rounded-b-xl p-6 sm:p-8 border-x border-b border-neutral-800">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Score Card */}
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-5">
                  <p className="text-xs text-neutral-500 mb-2">Overall Score</p>
                  <p className="text-3xl font-bold text-white mb-1">4.5</p>
                  <p className="text-sm text-secondary-400">
                    +0.5 from last test
                  </p>
                </div>
                {/* Progress Card */}
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-5">
                  <p className="text-xs text-neutral-500 mb-2">Tests Completed</p>
                  <p className="text-3xl font-bold text-white mb-1">12</p>
                  <p className="text-sm text-neutral-400">This month</p>
                </div>
                {/* Time Card */}
                <div className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-xl p-5">
                  <p className="text-xs text-neutral-500 mb-2">Practice Time</p>
                  <p className="text-3xl font-bold text-white mb-1">18h</p>
                  <p className="text-sm text-neutral-400">Total</p>
                </div>
              </div>
              {/* Section Progress */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {["Reading", "Listening", "Speaking", "Writing"].map(
                  (section, i) => (
                    <div
                      key={section}
                      className="bg-neutral-800/50 rounded-lg p-3"
                    >
                      <p className="text-xs text-neutral-400 mb-1">{section}</p>
                      <div className="h-1.5 bg-neutral-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                          style={{ width: `${65 + i * 8}%` }}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
