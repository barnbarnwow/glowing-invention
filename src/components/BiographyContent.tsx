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
      style={{ willChange: "opacity" }}
      whileHover={{
        y: -2,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
    >
      <motion.div className="p-8 h-full" variants={containerVariants}>
        {/* Map through biography paragraphs */}
        {profileData.bioParagraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            className="text-lg text-[var(--foreground-secondary)] mb-4"
            variants={itemVariants}
            style={{ willChange: "opacity" }}
          >
            {paragraph}
          </motion.p>
        ))}

        {/* Business Background highlight */}
        <motion.div
          className="bg-[var(--accent-tertiary)]/10 p-4 rounded-lg my-6 border-l-4 border-[var(--accent-primary)]"
          variants={itemVariants}
        >
          <motion.h3
            className="text-xl font-semibold mb-2 text-[var(--foreground-primary)]"
            variants={itemVariants}
          >
            Business & Tech Integration
          </motion.h3>
          <motion.p
            className="text-[var(--foreground-secondary)]"
            variants={itemVariants}
          >
            With a strong foundation in Business Administration and technical
            development, I bridge the gap between business objectives and
            technical solutions. My unique skill set allows me to understand
            both client requirements from a business perspective and implement
            them with technical precision.
          </motion.p>
        </motion.div>

        {/* Education section - only show if there are education items */}
        {profileData.education && profileData.education.length > 0 && (
          <motion.div
            className="pt-4 border-t border-[var(--border-color)] mt-6"
            variants={itemVariants}
            style={{ willChange: "opacity" }}
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

        {/* Key business skills highlight - showcase select business skills */}
        <motion.div
          className="pt-4 border-t border-[var(--border-color)] mt-6"
          variants={itemVariants}
          style={{ willChange: "opacity" }}
        >
          <motion.h3
            className="text-xl font-semibold mb-3 text-[var(--foreground-primary)]"
            variants={itemVariants}
          >
            Key Business Competencies
          </motion.h3>
          <motion.div
            className="grid grid-cols-2 gap-2"
            variants={containerVariants}
          >
            {profileData.businessSkills &&
              profileData.businessSkills
                .flatMap((group) => group.skills.slice(0, 2))
                .slice(0, 6)
                .map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="flex items-center space-x-2"
                    variants={itemVariants}
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)]"></span>
                    <span className="text-[var(--foreground-secondary)]">
                      {skill}
                    </span>
                  </motion.div>
                ))}
          </motion.div>
          <motion.p
            className="text-sm text-[var(--foreground-tertiary)] mt-2"
            variants={itemVariants}
          >
            <a
              href="/skills"
              className="text-[var(--accent-primary)] hover:underline"
            >
              View all business skills →
            </a>
          </motion.p>
        </motion.div>

        {/* Interests section - only show if there are interests */}
        {profileData.interests && profileData.interests.length > 0 && (
          <motion.div
            className="pt-4 border-t border-[var(--border-color)] mt-6"
            variants={itemVariants}
            style={{ willChange: "opacity" }}
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
                  className="px-3 py-1 bg-[var(--accent-tertiary)]/10 text-[var(--accent-primary)] rounded-full text-sm"
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
