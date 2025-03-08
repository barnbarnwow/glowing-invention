"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

/**
 * Card Component
 *
 * A versatile card component for displaying content in a contained box.
 * Supports various visual styles, animations, and hover effects.
 */

interface CardProps {
  /** Content to display inside the card */
  children: ReactNode;
  /** Card visual style */
  variant?: "primary" | "secondary" | "outline" | "minimal";
  /** Whether to add hover effects */
  interactive?: boolean;
  /** Whether to animate the card when it enters the viewport */
  animate?: boolean;
  /** Animation delay in seconds (if animated) */
  delay?: number;
  /** Optional header content */
  header?: ReactNode;
  /** Optional footer content */
  footer?: ReactNode;
  /** Optional CSS class name */
  className?: string;
  /** Optional click handler */
  onClick?: () => void;
}

export default function Card({
  children,
  variant = "primary",
  interactive = false,
  animate = true,
  delay = 0,
  header,
  footer,
  className = "",
  onClick,
}: CardProps) {
  // Create variant-specific styles with Tailwind
  const variantClasses = {
    primary: "bg-background-primary shadow-default",
    secondary: "bg-background-secondary",
    outline: "bg-transparent",
    minimal: "bg-transparent border-0",
  }[variant];

  // Compose final class string using our utility classes
  const cardClasses = `card-base ${variantClasses} ${
    interactive ? "card-interactive" : ""
  } ${className}`;

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay,
      },
    },
  };

  return (
    <motion.div
      className={cardClasses}
      onClick={onClick}
      initial={animate ? "hidden" : "visible"}
      animate="visible"
      variants={cardVariants}
      whileHover={interactive ? { scale: 1.02 } : undefined}
      whileTap={interactive ? { scale: 0.98 } : undefined}
    >
      {header && (
        <div className="p-4 border-b border-solid border-foreground-primary">
          {header}
        </div>
      )}

      <div className="p-4">{children}</div>

      {footer && (
        <div className="p-4 border-t border-solid border-foreground-primary">
          {footer}
        </div>
      )}
    </motion.div>
  );
}
