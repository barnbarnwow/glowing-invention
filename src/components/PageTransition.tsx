"use client";

import { motion } from "framer-motion";
import { pageVariants } from "@/utils/animationVariants";
import React from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen"
      style={{
        willChange: "opacity, transform",
        isolation: "isolate",
      }}
    >
      {children}
    </motion.div>
  );
}
