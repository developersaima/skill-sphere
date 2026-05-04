"use client";

import { motion } from "motion/react";

export default function Tips() {
  return (
    <section className="py-8 px-4">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-pink-500">
            Learning Tips
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -5 }}
            className="card bg-base-100 border border-pink-100 p-5 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-base mb-2 text-pink-500">
              Stay Consistent
            </h3>
            <p className="text-sm opacity-70">
              Study regularly instead of long sessions once in a while.
            </p>
            <span className="badge border-pink-300 text-pink-500 mt-3">
              Habit
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            whileHover={{ y: -5 }}
            className="card bg-base-100 border border-pink-100 p-5 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-base mb-2 text-pink-500">
              Practice Daily
            </h3>
            <p className="text-sm opacity-70">
              Apply what you learn through small projects or exercises.
            </p>
            <span className="badge border-pink-300 text-pink-500 mt-3">
              Practice
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="card bg-base-100 border border-pink-100 p-5 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-base mb-2 text-pink-500">
              Take Notes
            </h3>
            <p className="text-sm opacity-70">
              Write key points to improve memory and understanding.
            </p>
            <span className="badge border-pink-300 text-pink-500 mt-3">
              Notes
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            whileHover={{ y: -5 }}
            className="card bg-base-100 border border-pink-100 p-5 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-base mb-2 text-pink-500">
              Stay Focused
            </h3>
            <p className="text-sm opacity-70">
              Avoid distractions and create a clean study environment.
            </p>
            <span className="badge border-pink-300 text-pink-500 mt-3">
              Focus
            </span>
          </motion.div>

        </div>

      </div>

    </section>
  );
}