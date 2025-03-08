"use client";

import React from "react";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/utils/animationVariants";

export default function NotFound() {
  return (
    <PageTransition>
      <motion.div
        className="min-h-screen flex flex-col items-center justify-center px-4 clean-bg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{
          staggerChildren: 0.05,
          delayChildren: 0.05,
        }}
      >
        <div className="relative z-10">
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-[var(--accent-primary)] mb-4"
            variants={itemVariants}
          >
            404
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-6 text-[var(--foreground-primary)]"
            variants={itemVariants}
          >
            Page Not Found
          </motion.h2>
          <motion.p
            className="text-lg text-[var(--foreground-secondary)] mb-8 text-center max-w-md"
            variants={itemVariants}
          >
            The page you're looking for doesn't exist or has been moved.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              href="/"
              className="gradient-accent text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-lg shadow-[var(--accent-primary)]/20 hover:shadow-[var(--accent-primary)]/30"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </PageTransition>
  );
}
