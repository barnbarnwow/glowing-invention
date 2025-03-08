"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface BrutalistButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  className?: string;
  animate?: boolean;
}

export default function BrutalistButton({
  href,
  onClick,
  children,
  variant = "primary",
  size = "medium",
  className = "",
  animate = true,
}: BrutalistButtonProps) {
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    hover: {
      x: -2,
      y: -2,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Base styles
  let buttonClasses = "border-2 border-[var(--foreground-primary)] relative";
  let buttonStyles = {
    boxShadow: "4px 4px 0 var(--foreground-secondary)",
    transition: "all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  };

  // Size styles
  if (size === "small") {
    buttonClasses += " py-2 px-4 text-base";
  } else if (size === "medium") {
    buttonClasses += " py-3 px-5 text-lg";
  } else if (size === "large") {
    buttonClasses += " py-4 px-6 text-xl";
  }

  // Variant styles
  if (variant === "primary") {
    buttonClasses +=
      " bg-[var(--foreground-primary)] text-[var(--background-primary)]";
  } else if (variant === "secondary") {
    buttonClasses +=
      " bg-[var(--background-secondary)] text-[var(--foreground-primary)]";
  } else if (variant === "outline") {
    buttonClasses += " bg-transparent text-[var(--foreground-primary)]";
  }

  // Add custom classes
  buttonClasses += ` ${className}`;

  const MotionComponent = motion.div;

  const button = (
    <MotionComponent
      className={buttonClasses}
      style={buttonStyles}
      variants={animate ? buttonVariants : undefined}
      initial={animate ? "hidden" : undefined}
      animate={animate ? "visible" : undefined}
      whileHover="hover"
      whileTap={{ x: 0, y: 0 }}
      onClick={onClick}
    >
      {children}
    </MotionComponent>
  );

  if (href) {
    return (
      <Link href={href} passHref className="block w-fit">
        {button}
      </Link>
    );
  }

  return button;
}
