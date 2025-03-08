"use client";

import Link from "next/link";
import { profileData } from "@/data/profileData";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/utils/animationVariants";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center px-4 clean-bg">
      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{
          staggerChildren: 0.1,
          delayChildren: 0.1,
        }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          variants={itemVariants}
        >
          Hi, I&apos;m{" "}
          <span className="text-[var(--accent-primary)] font-serif tracking-wide">
            {profileData.name}
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-[var(--foreground-secondary)] mb-4"
          variants={itemVariants}
        >
          {profileData.title}
        </motion.p>

        <motion.p
          className="text-md md:text-lg text-[var(--accent-primary)] mb-6"
          variants={itemVariants}
        >
          Blending Technical Expertise with Business Acumen
        </motion.p>

        <motion.p
          className="text-lg text-[var(--foreground-tertiary)] mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {profileData.bioParagraphs[0]}
        </motion.p>

        <motion.div
          className="flex justify-center gap-4 mb-10"
          variants={itemVariants}
        >
          <motion.span className="px-3 py-1 bg-[var(--accent-tertiary)]/10 text-[var(--foreground-primary)] rounded-full text-sm inline-flex items-center">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] mr-2"></span>
            Web Development
          </motion.span>
          <motion.span className="px-3 py-1 bg-[var(--accent-tertiary)]/10 text-[var(--foreground-primary)] rounded-full text-sm inline-flex items-center">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] mr-2"></span>
            Business Strategy
          </motion.span>
          <motion.span className="px-3 py-1 bg-[var(--accent-tertiary)]/10 text-[var(--foreground-primary)] rounded-full text-sm inline-flex items-center">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] mr-2"></span>
            Project Management
          </motion.span>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          variants={itemVariants}
        >
          <Link href="/about" className="standard-button lift-effect">
            About Me
          </Link>
          <Link href="/projects" className="standard-button lift-effect">
            View My Work
          </Link>
          <Link href="/skills" className="standard-button lift-effect">
            My Skills
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
