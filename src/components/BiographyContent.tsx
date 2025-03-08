"use client";

import React from "react";
import { profileData } from "@/data/profileData";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  cardVariants,
} from "@/utils/animationVariants";

export default function BiographyContent() {
  return (
    <motion.div
      className="card bg-[var(--background-tertiary)] rounded-xl overflow-hidden shadow-lg"
      variants={cardVariants}
    >
      <motion.div
        className="p-8 h-full"
        variants={containerVariants}
        transition={{
          staggerChildren: 0.1,
          delayChildren: 0.1,
        }}
      >
        {/* Map through biography paragraphs */}
        {profileData.bioParagraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            className="text-lg text-[var(--foreground-secondary)] mb-4"
            variants={itemVariants}
          >
            {paragraph}
          </motion.p>
        ))}

        {/* Education section - only show if there are education items */}
        {profileData.education && profileData.education.length > 0 && (
          <motion.div
            className="pt-4 border-t border-[var(--border-color)] mt-6"
            variants={itemVariants}
          >
            <motion.h3
              className="text-xl font-semibold mb-3 text-[var(--foreground-primary)]"
              variants={itemVariants}
            >
              Education
            </motion.h3>
            {profileData.education.map((edu, index) => (
              <motion.div key={index} className="mb-4" variants={itemVariants}>
                <p className="font-medium text-[var(--foreground-primary)] text-lg">
                  {edu.degree}
                </p>
                <p className="text-[var(--foreground-secondary)]">
                  {edu.institution},{" "}
                  <span className="text-[var(--accent-primary)]">
                    {edu.years}
                  </span>
                </p>
                {edu.description && (
                  <p className="text-[var(--foreground-tertiary)] text-sm mt-1">
                    {edu.description}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Interests section - only show if there are interests */}
        {profileData.interests && profileData.interests.length > 0 && (
          <motion.div
            className="pt-4 border-t border-[var(--border-color)] mt-6"
            variants={itemVariants}
          >
            <motion.h3
              className="text-xl font-semibold mb-3 text-[var(--foreground-primary)]"
              variants={itemVariants}
            >
              Interests
            </motion.h3>
            <motion.div
              className="flex flex-wrap gap-2"
              variants={itemVariants}
            >
              {profileData.interests.map((interest) => (
                <motion.span
                  key={interest}
                  className="px-3 py-1 bg-[var(--accent-tertiary)]/10 text-[var(--accent-primary)] rounded-full text-sm sunken-effect"
                  variants={itemVariants}
                >
                  {interest}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
