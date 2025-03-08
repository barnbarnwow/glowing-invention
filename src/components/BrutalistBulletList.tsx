"use client";

import { motion } from "framer-motion";

interface BrutalistBulletListProps {
  items: string[];
  title?: string;
  className?: string;
}

export default function BrutalistBulletList({
  items,
  title,
  className = "",
}: BrutalistBulletListProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className={`${className}`}>
      {title && (
        <h4 className="text-[var(--foreground-primary)] mb-3 text-lg">
          {title}
        </h4>
      )}
      <motion.ul
        className="border-l-4 border-[var(--foreground-primary)] pl-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {items.map((item, index) => (
          <motion.li
            key={index}
            className="mb-3 last:mb-0 flex"
            variants={itemVariants}
          >
            <span className="inline-block w-6 text-[var(--foreground-primary)] font-mono mr-2">
              &#9642;
            </span>
            <span className="text-[var(--foreground-secondary)] font-serif">
              {item}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
