"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import ProfileImage from "@/components/ProfileImage";
import BiographyContent from "@/components/BiographyContent";
import { motion } from "framer-motion";
import { containerVariants } from "@/utils/animationVariants";

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
        {/* About Section */}
        <section className="py-20 px-4 gradient-primary">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{
                staggerChildren: 0.05,
                delayChildren: 0.05,
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
