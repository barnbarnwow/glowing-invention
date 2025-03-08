"use client";

import Link from "next/link";
import { profileData } from "@/data/profileData";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { containerVariants, itemVariants } from "@/utils/animationVariants";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section className="h-screen flex items-center justify-center px-4 clean-bg">
      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          variants={itemVariants}
        >
          Hi, I'm{" "}
          <span className="text-[var(--accent-primary)] font-serif tracking-wide">
            {profileData.name}
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-[var(--foreground-secondary)] mb-8"
          variants={itemVariants}
        >
          {profileData.title}
        </motion.p>

        <motion.p
          className="text-lg text-[var(--foreground-tertiary)] mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {profileData.bioParagraphs[0]}
        </motion.p>

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
          <Link href="/contact" className="standard-button lift-effect">
            Contact Me
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
