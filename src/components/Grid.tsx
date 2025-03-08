"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * Grid Component
 *
 * A responsive grid overlay component that can be used for:
 * - Design system backgrounds
 * - Visual layout guides
 * - Decorative elements
 *
 * The component creates a non-interactive overlay with configurable opacity,
 * number of rows and columns, and animation options.
 */

interface GridProps {
  /** Opacity percentage (1-100) of the grid lines */
  opacity?: number;
  /** Whether to animate the grid in on mount */
  animate?: boolean;
  /** Number of horizontal rows */
  rows?: number;
  /** Number of vertical columns */
  columns?: number;
  /** Optional CSS class name to add to the grid container */
  className?: string;
  /** Optional children to render within the grid */
  children?: ReactNode;
}

export default function Grid({
  opacity = 5,
  animate = false,
  rows = 12,
  columns = 12,
  className = "",
  children,
}: GridProps) {
  // Animation variants for the grid
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: opacity / 100,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}
      initial={animate ? "hidden" : "visible"}
      animate="visible"
      variants={gridVariants}
      aria-hidden="true"
    >
      {/* Horizontal grid lines */}
      <div
        className="h-full w-full grid"
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {Array.from({ length: columns }).map((_, index) => (
          <div
            key={`col-${index}`}
            className="border-l-2 border-[var(--foreground-primary)] h-full"
          />
        ))}
      </div>

      {/* Vertical grid lines */}
      <div
        className="absolute inset-0 grid"
        style={{ gridTemplateRows: `repeat(${rows}, 1fr)` }}
      >
        {Array.from({ length: rows }).map((_, index) => (
          <div
            key={`row-${index}`}
            className="border-t-2 border-[var(--foreground-primary)] w-full"
          />
        ))}
      </div>

      {/* Optional content within the grid */}
      {children}
    </motion.div>
  );
}
