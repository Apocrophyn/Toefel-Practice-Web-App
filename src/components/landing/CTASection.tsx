"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "No credit card required",
  "5 free practice tests",
  "AI evaluation included",
  "Cancel anytime",
];

export function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-neutral-900 rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl" />
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Ace Your TOEFL?
            </h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-xl mx-auto">
              Start practicing today and join thousands of students who have
              improved their scores with our AI-powered platform.
            </p>

            {/* CTA Button */}
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-neutral-100 text-neutral-900 font-semibold rounded-xl transition-colors text-lg"
            >
              Start Free Practice
              <ArrowRight className="w-5 h-5" />
            </Link>

            {/* Benefits */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-neutral-400"
                >
                  <CheckCircle className="w-4 h-4 text-secondary-400" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
