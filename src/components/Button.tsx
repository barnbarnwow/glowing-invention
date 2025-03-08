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
  const baseStyles = "font-medium py-3 px-6 rounded-md transition-all";

  const variantStyles = {
    primary:
      "gradient-accent text-white shadow-md hover:shadow-lg hover:translate-y-[-1px]",
    secondary:
      "gradient-accent text-white shadow-md hover:shadow-lg hover:translate-y-[-1px]",
    outline:
      "gradient-accent text-white shadow-md hover:shadow-lg hover:translate-y-[-1px]",
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
