"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface BrutalistCardProps {
  children: ReactNode;
  className?: string;
  shadow?: "small" | "medium" | "large";
  hover?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
  animate?: boolean;
}

export default function BrutalistCard({
  children,
  className = "",
  shadow = "medium",
  hover = true,
  variant = "primary",
  animate = true,
}: BrutalistCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    hover: {
      x: -4,
      y: -4,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Determine shadow size
  let shadowSize = "6px 6px 0";
  if (shadow === "small") {
    shadowSize = "4px 4px 0";
  } else if (shadow === "large") {
    shadowSize = "8px 8px 0";
  }

  // Determine background color based on variant
  let bgColor = "var(--background-primary)";
  if (variant === "secondary") {
    bgColor = "var(--background-secondary)";
  } else if (variant === "tertiary") {
    bgColor = "var(--background-tertiary)";
  }

  return (
    <motion.div
      className={`border-2 border-[var(--foreground-primary)] relative p-6 ${className}`}
      style={{
        boxShadow: `${shadowSize} var(--foreground-secondary)`,
        backgroundColor: bgColor,
      }}
      variants={animate ? cardVariants : undefined}
      initial={animate ? "hidden" : undefined}
      animate={animate ? "visible" : undefined}
      whileHover={hover ? "hover" : undefined}
    >
      {children}
    </motion.div>
  );
}
