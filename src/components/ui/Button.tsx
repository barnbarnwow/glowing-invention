"use client";

import React, { ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "outline" | "text";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  external?: boolean;
}

export function Button({
  href,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  isLoading = false,
  className = "",
  leftIcon,
  rightIcon,
  external,
  children,
  disabled,
  ...props
}: ButtonProps) {
  // Tailwind classes
  const baseClasses =
    "inline-flex items-center justify-center font-sans uppercase tracking-wider transition-all duration-200 border-2 border-solid";

  const sizeClasses = {
    small: "text-sm py-1 px-3 gap-1",
    medium: "text-base py-2 px-4 gap-2",
    large: "text-lg py-3 px-6 gap-2",
  }[size];

  const variantClasses = {
    primary:
      "border-black bg-black text-white hover:bg-gray-800 hover:border-gray-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:hover:border-gray-200",
    secondary:
      "border-black bg-gray-200 text-black hover:bg-gray-300 dark:border-white dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700",
    outline:
      "border-black bg-transparent text-black hover:bg-gray-100 dark:border-white dark:text-white dark:hover:bg-gray-800",
    text: "border-transparent bg-transparent text-black hover:text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:text-gray-300 dark:hover:bg-gray-800",
  }[variant];

  const widthClass = fullWidth ? "w-full" : "";
  const disabledClass =
    disabled || isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

  const buttonClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${widthClass} ${disabledClass} ${className}`;

  const content = (
    <>
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
}
