"use client";

import Link from "next/link";
import { profileData } from "@/data/profileData";
import Button from "../components/Button";
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
        transition={{
          staggerChildren: 0.05,
          delayChildren: 0.05,
        }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          variants={itemVariants}
        >
          Hi, I'm{" "}
          <span className="text-[var(--accent-primary)] italic">
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
          <Button href="/about" variant="primary">
            About Me
          </Button>
          <Button href="/projects" variant="secondary">
            View My Work
          </Button>
          <Button href="/contact" variant="outline">
            Contact Me
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
