"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  // Define styles based on variant
  const baseStyles = "font-medium py-3 px-6 rounded-lg transition-all";

  const variantStyles = {
    primary:
      "gradient-accent text-white shadow-md hover:shadow-lg hover:translate-y-[-2px]",
    secondary:
      "bg-[var(--background-tertiary)] hover:bg-[var(--background-secondary)] text-[var(--foreground-primary)] border border-[var(--border-color)] hover:translate-y-[-2px]",
    outline:
      "bg-transparent hover:bg-[var(--background-tertiary)] text-[var(--accent-primary)] border border-[var(--accent-primary)] hover:translate-y-[-2px]",
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button type={type} className={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
}
