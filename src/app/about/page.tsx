"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import ProfileImage from "@/components/ProfileImage";
import BiographyContent from "@/components/BiographyContent";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/utils/animationVariants";

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
        {/* About Section */}
        <section className="py-20 px-4 clean-bg">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-10 text-center text-[var(--foreground-primary)]"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              About Me
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{
                staggerChildren: 0.1,
                delayChildren: 0.1,
              }}
            >
              {/* Left column - Profile */}
              <div className="md:col-span-1">
                <ProfileImage />
              </div>

              {/* Right column - Bio */}
              <div className="md:col-span-2">
                <BiographyContent />
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
