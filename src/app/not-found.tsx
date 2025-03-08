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
          staggerChildren: 0.1,
          delayChildren: 0.1,
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
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link href="/" className="standard-button lift-effect">
              Back to Home
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </PageTransition>
  );
}
