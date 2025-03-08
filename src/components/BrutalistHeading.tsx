"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface BrutalistHeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  outlined?: boolean;
  className?: string;
  align?: "left" | "center" | "right";
  withDivider?: boolean;
  animate?: boolean;
}

export default function BrutalistHeading({
  children,
  level = 2,
  outlined = false,
  className = "",
  align = "left",
  withDivider = false,
  animate = true,
}: BrutalistHeadingProps) {
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Base classes for all headings
  let headingClasses = "tracking-brutalist";

  // Add alignment classes
  if (align === "center") {
    headingClasses += " text-center";
  } else if (align === "right") {
    headingClasses += " text-right";
  }

  // Add outlined text style if requested
  if (outlined) {
    headingClasses += " text-outlined";
  }

  // Add custom classes
  headingClasses += ` ${className}`;

  // Generate the appropriate heading tag based on level
  const renderHeading = () => {
    switch (level) {
      case 1:
        return (
          <motion.h1
            className={`text-6xl md:text-huge mb-6 ${headingClasses}`}
            variants={animate ? headingVariants : undefined}
          >
            {children}
          </motion.h1>
        );
      case 2:
        return (
          <motion.h2
            className={`text-4xl md:text-5xl mb-6 ${headingClasses}`}
            variants={animate ? headingVariants : undefined}
          >
            {children}
          </motion.h2>
        );
      case 3:
        return (
          <motion.h3
            className={`text-3xl md:text-4xl mb-4 ${headingClasses}`}
            variants={animate ? headingVariants : undefined}
          >
            {children}
          </motion.h3>
        );
      case 4:
        return (
          <motion.h4
            className={`text-2xl md:text-3xl mb-4 ${headingClasses}`}
            variants={animate ? headingVariants : undefined}
          >
            {children}
          </motion.h4>
        );
      case 5:
        return (
          <motion.h5
            className={`text-xl md:text-2xl mb-3 ${headingClasses}`}
            variants={animate ? headingVariants : undefined}
          >
            {children}
          </motion.h5>
        );
      case 6:
      default:
        return (
          <motion.h6
            className={`text-lg md:text-xl mb-3 ${headingClasses}`}
            variants={animate ? headingVariants : undefined}
          >
            {children}
          </motion.h6>
        );
    }
  };

  return (
    <>
      {renderHeading()}
      {withDivider && (
        <motion.div
          className="brutalist-divider mb-6"
          variants={
            animate
              ? {
                  hidden: { width: 0 },
                  visible: {
                    width: "100%",
                    transition: {
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      delay: 0.2,
                    },
                  },
                }
              : undefined
          }
          initial={animate ? "hidden" : undefined}
          animate={animate ? "visible" : undefined}
        />
      )}
    </>
  );
}
