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
      boxShadow: "6px 6px 0 var(--foreground-secondary)",
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Determine shadow size
  let shadowSize = "var(--shadow-default)";
  if (shadow === "small") {
    shadowSize = "3px 3px 0";
  } else if (shadow === "large") {
    shadowSize = "5px 5px 0";
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
      className={`brutalist-border brutalist-transition ${className}`}
      style={{
        boxShadow: `${shadowSize} var(--foreground-secondary)`,
        backgroundColor: bgColor,
        transformOrigin: "center center",
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
