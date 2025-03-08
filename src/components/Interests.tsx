"use client";

import React from "react";
import { profileData } from "@/data/profileData";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  cardVariants,
} from "@/utils/animationVariants";

export default function Interests() {
  // Only render if there are interests
  if (!profileData.interests || profileData.interests.length === 0) {
    return null;
  }

  return (
    <motion.div
      className="card bg-[var(--background-tertiary)] rounded-xl overflow-hidden shadow-lg mt-6"
      variants={cardVariants}
      style={{ willChange: "opacity" }}
      whileHover={{
        y: -2,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
    >
      <motion.div className="p-6" variants={containerVariants}>
        <motion.h3
          className="text-xl font-semibold mb-3 text-[var(--foreground-primary)]"
          variants={itemVariants}
        >
          Interests
        </motion.h3>
        <motion.div
          className="flex flex-wrap gap-2"
          variants={containerVariants}
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
    </motion.div>
  );
}
