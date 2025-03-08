"use client";

import { motion } from "framer-motion";

interface BrutalistGridProps {
  opacity?: number;
  animate?: boolean;
  rows?: number;
  columns?: number;
}

export default function BrutalistGrid({
  opacity = 5,
  animate = false,
  rows = 12,
  columns = 12,
}: BrutalistGridProps) {
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: opacity / 100, transition: { duration: 1.5 } },
  };

  return (
    <motion.div
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      initial={animate ? "hidden" : "visible"}
      animate="visible"
      variants={gridVariants}
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
    </motion.div>
  );
}
