"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import { profileData } from "@/data/profileData";
import { motion } from "framer-motion";
import {
  containerVariants,
  cardVariants,
  itemVariants,
} from "@/utils/animationVariants";

// Skill Card Component
const SkillCard = ({ skill }: { skill: string }) => (
  <motion.div
    className="bg-[var(--background-secondary)] p-6 rounded-lg shadow-sm text-center border border-[var(--border-color)]"
    variants={cardVariants}
    style={{ willChange: "transform, opacity" }}
  >
    <motion.div variants={containerVariants}>
      <motion.span
        className="text-lg font-medium text-[var(--foreground-secondary)]"
        variants={itemVariants}
      >
        {skill}
      </motion.span>
    </motion.div>
  </motion.div>
);

export default function SkillsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
        {/* Skills Section */}
        <section className="py-20 px-4 clean-bg">
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-10 text-center text-[var(--foreground-primary)]"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              My Skills
            </motion.h2>

            <motion.div
              className="card bg-[var(--background-tertiary)] p-8 rounded-xl shadow-xl"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              style={{ willChange: "transform, opacity" }}
            >
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                variants={containerVariants}
              >
                {/* Skill Items */}
                {profileData.keySkills.map((skill) => (
                  <SkillCard key={skill} skill={skill} />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
