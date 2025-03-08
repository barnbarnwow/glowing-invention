import { motion } from "framer-motion";

interface ProgressBarProps {
  skill: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  percentage: number;
  index?: number;
}

/**
 * A component for displaying skill proficiency with an animated progress bar
 */
const ProgressBar = ({
  skill,
  level,
  percentage,
  index = 0,
}: ProgressBarProps) => {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between mb-1">
        <span className="text-[var(--foreground-secondary)]">{skill}</span>
        <span className="text-[var(--foreground-tertiary)]">{level}</span>
      </div>
      <div className="w-full h-2 bg-[var(--background-tertiary)] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[var(--accent-primary)] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
