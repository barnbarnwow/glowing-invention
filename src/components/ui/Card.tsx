"use client";

import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "filled";
  padding?: "none" | "small" | "medium" | "large";
  hover?: boolean;
  onClick?: () => void;
}

export function Card({
  children,
  className = "",
  variant = "default",
  padding = "medium",
  hover = false,
  onClick,
}: CardProps) {
  // Base classes
  const baseClasses = "rounded-none overflow-hidden transition-all";

  // Variant classes
  const variantClasses = {
    default:
      "bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:bg-gray-900 dark:border-white dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]",
    outline: "bg-transparent border-2 border-black dark:border-white",
    filled: "bg-gray-100 dark:bg-gray-800",
  }[variant];

  // Padding classes
  const paddingClasses = {
    none: "",
    small: "p-2",
    medium: "p-4",
    large: "p-6",
  }[padding];

  // Hover classes
  const hoverClasses = hover
    ? "hover:translate-y-[-4px] hover:translate-x-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] cursor-pointer"
    : "";

  // Click handler
  const handleClick = onClick ? { onClick } : {};

  return (
    <div
      className={`${baseClasses} ${variantClasses} ${paddingClasses} ${hoverClasses} ${className}`}
      {...handleClick}
    >
      {children}
    </div>
  );
}
