"use client";

import React, { ReactNode, createElement } from "react";
import { motion } from "framer-motion";

/**
 * Heading Component
 *
 * A versatile heading component that provides:
 * - Consistent typography across the application
 * - Optional animations and decorative elements
 * - Semantic HTML heading levels (h1-h6)
 */

interface HeadingProps {
  /** Heading content */
  children: ReactNode;
  /** HTML heading level (h1-h6) */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Visual style variant */
  variant?: "primary" | "secondary" | "minimal";
  /** Whether to animate the heading */
  animate?: boolean;
  /** Whether to add a decorative underline */
  underline?: boolean;
  /** Whether to apply uppercase styling */
  uppercase?: boolean;
  /** Optional CSS class name */
  className?: string;
  /** ID for linking (anchor links) */
  id?: string;
  /** Text alignment */
  align?: "left" | "center" | "right";
}

export default function Heading({
  children,
  level = 2,
  variant = "primary",
  animate = false,
  underline = false,
  uppercase = true,
  className = "",
  id,
  align = "left",
}: HeadingProps) {
  // Style based on heading level
  const sizeClasses =
    level === 1
      ? "text-4xl md:text-5xl"
      : level === 2
      ? "text-3xl md:text-4xl"
      : level === 3
      ? "text-2xl md:text-3xl"
      : level === 4
      ? "text-xl md:text-2xl"
      : level === 5
      ? "text-lg md:text-xl"
      : "text-base md:text-lg"; // h6

  // Style based on variant
  const variantClasses =
    variant === "primary"
      ? "font-sans font-bold"
      : variant === "secondary"
      ? "font-serif"
      : "font-mono"; // minimal

  // Optional styles
  const uppercaseClass = uppercase ? "uppercase tracking-wider" : "";
  const underlineClass = underline
    ? "border-b-2 border-solid border-[var(--foreground-primary)] pb-2"
    : "";
  const alignClass =
    align === "center"
      ? "text-center"
      : align === "right"
      ? "text-right"
      : "text-left";

  // Combine all classes
  const headingClasses = `
    ${sizeClasses}
    ${variantClasses}
    ${uppercaseClass}
    ${underlineClass}
    ${alignClass}
    mb-4
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Create the heading element - using createElement instead of JSX for dynamic tag
  const headingElement = createElement(
    `h${level}`,
    { id, className: headingClasses },
    children
  );

  // Apply animations conditionally
  if (animate) {
    return (
      <motion.div initial="hidden" animate="visible" variants={headingVariants}>
        {headingElement}
      </motion.div>
    );
  }

  // Regular non-animated heading
  return headingElement;
}
