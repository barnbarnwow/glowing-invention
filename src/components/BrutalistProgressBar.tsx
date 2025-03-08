"use client";

import { motion } from "framer-motion";

interface BrutalistProgressBarProps {
  skill: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  percentage: number;
  index?: number;
}

export default function BrutalistProgressBar({
  skill,
  level,
  percentage,
  index = 0,
}: BrutalistProgressBarProps) {
  // Map skill levels to visual indicators
  const getLevelIndicator = () => {
    switch (level) {
      case "Expert":
        return "▮▮▮▮";
      case "Advanced":
        return "▮▮▮";
      case "Intermediate":
        return "▮▮";
      case "Beginner":
        return "▮";
      default:
        return "";
    }
  };

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.1 + index * 0.1,
      },
    },
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${percentage}%`,
      transition: {
        duration: 0.7,
        delay: 0.3 + index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      className="mb-6 last:mb-0 border-2 border-[var(--foreground-primary)] p-4"
      style={{ boxShadow: "4px 4px 0 var(--foreground-secondary)" }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
        <h3 className="text-xl mb-1 md:mb-0">{skill}</h3>
        <div className="flex items-center space-x-3">
          <span className="font-mono text-[var(--foreground-primary)] tracking-wider">
            {getLevelIndicator()}
          </span>
          <span className="text-[var(--foreground-tertiary)]">{level}</span>
        </div>
      </div>

      <div className="relative w-full h-8 border-2 border-[var(--foreground-primary)] bg-[var(--background-tertiary)]">
        <motion.div
          className="h-full bg-[var(--foreground-primary)]"
          variants={barVariants}
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)",
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-4">
          {[25, 50, 75].map((mark) => (
            <div key={mark} className="relative h-full">
              <div className="absolute right-0 top-0 bottom-0 w-1 border-r-2 border-[var(--foreground-primary)] opacity-40" />
            </div>
          ))}
        </div>
        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs font-mono">
          {percentage}%
        </span>
      </div>
    </motion.div>
  );
}
