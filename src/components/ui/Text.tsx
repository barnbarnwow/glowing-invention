"use client";

import React, { ElementType } from "react";

type TextVariant = "body" | "lead" | "small" | "caption" | "mono";
type TextSize = "xs" | "sm" | "base" | "lg" | "xl";
type TextAlignment = "left" | "center" | "right" | "justify";

interface TextProps {
  children: React.ReactNode;
  className?: string;
  variant?: TextVariant;
  size?: TextSize;
  align?: TextAlignment;
  as?: ElementType;
}

export function Text({
  children,
  className = "",
  variant = "body",
  size = "base",
  align = "left",
  as: Component = "p",
}: TextProps) {
  // Font family based on variant
  const fontClasses = {
    body: "font-serif",
    lead: "font-serif",
    small: "font-sans",
    caption: "font-sans",
    mono: "font-mono",
  }[variant];

  // Font size based on size prop
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  }[size];

  // Text alignment
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  }[align];

  // Additional variant-specific styling
  const variantClasses = {
    body: "leading-relaxed mb-4",
    lead: "leading-relaxed text-lg md:text-xl mb-6",
    small: "leading-normal",
    caption: "text-sm text-gray-600 dark:text-gray-400",
    mono: "font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded",
  }[variant];

  // Complete class string
  const textClasses = `${fontClasses} ${sizeClasses} ${alignClasses} ${variantClasses} ${className}`;

  return <Component className={textClasses}>{children}</Component>;
}
