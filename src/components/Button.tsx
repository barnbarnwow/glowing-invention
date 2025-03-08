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
  liftEffect?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
  liftEffect = true,
}: ButtonProps) {
  // Define styles based on variant
  const baseStyles = "font-medium py-3 px-6 rounded-md transition-all";

  const variantStyles = {
    primary: "standard-button",
    secondary: "standard-button",
    outline: "standard-button outline",
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${
    liftEffect ? "lift-effect" : ""
  } ${className}`;

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
