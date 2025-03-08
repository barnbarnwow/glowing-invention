"use client";

import { profileData } from "@/data/profileData";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/utils/animationVariants";
import BrutalistGrid from "./BrutalistGrid";
import BrutalistButton from "./BrutalistButton";
import BrutalistHeading from "./BrutalistHeading";
import BrutalistCard from "./BrutalistCard";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center px-4 clean-bg relative">
      {/* Brutalist grid lines background */}
      <BrutalistGrid opacity={5} animate={true} />

      <motion.div
        className="max-w-5xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{
          staggerChildren: 0.1,
          delayChildren: 0.1,
        }}
      >
        <BrutalistHeading level={1} outlined={true} animate={false}>
          Hi, I&apos;m <span className="block mt-2">{profileData.name}</span>
        </BrutalistHeading>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <motion.p
              className="text-2xl md:text-3xl text-[var(--foreground-primary)] mb-8 font-serif"
              variants={itemVariants}
            >
              {profileData.title}
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-[var(--foreground-tertiary)] mb-12 font-serif"
              variants={itemVariants}
            >
              {profileData.bioParagraphs[0]}
            </motion.p>
          </div>

          <div className="md:col-span-5">
            <BrutalistCard shadow="large" animate={false}>
              <BrutalistHeading level={3} animate={false}>
                Navigation
              </BrutalistHeading>
              <div className="flex flex-col space-y-4">
                <BrutalistButton href="/about" variant="outline">
                  About Me
                </BrutalistButton>

                <BrutalistButton href="/projects" variant="outline">
                  View My Work
                </BrutalistButton>

                <BrutalistButton href="/skills" variant="outline">
                  My Skills
                </BrutalistButton>
              </div>
            </BrutalistCard>
          </div>
        </div>

        <motion.div
          className="brutalist-divider mt-16"
          variants={itemVariants}
        />
      </motion.div>
    </section>
  );
}
