"use client";

import React, { createElement } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingVariant = "default" | "display" | "mono";
type HeadingWeight = "normal" | "bold";
type TextAlignment = "left" | "center" | "right";

interface HeadingProps {
  level?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
  variant?: HeadingVariant;
  weight?: HeadingWeight;
  align?: TextAlignment;
  uppercase?: boolean;
  id?: string;
}

export function Heading({
  level = 2,
  children,
  className = "",
  variant = "default",
  weight = "normal",
  align = "left",
  uppercase = true,
  id,
}: HeadingProps) {
  // Heading styles based on level
  const sizeClasses = {
    1: "text-4xl md:text-5xl lg:text-6xl",
    2: "text-3xl md:text-4xl",
    3: "text-2xl md:text-3xl",
    4: "text-xl md:text-2xl",
    5: "text-lg md:text-xl",
    6: "text-base md:text-lg",
  }[level];

  // Font family based on variant
  const fontClasses = {
    default: "font-sans",
    display: "font-sans",
    mono: "font-mono",
  }[variant];

  // Font weight
  const weightClasses = {
    normal: "font-normal",
    bold: "font-bold",
  }[weight];

  // Text alignment
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  // Optional uppercase
  const caseClasses = uppercase ? "uppercase tracking-wider" : "";

  // Common styles for all headings
  const commonClasses = "mb-4 leading-tight";

  // Combine all classes
  const headingClasses = `${sizeClasses} ${fontClasses} ${weightClasses} ${alignClasses} ${caseClasses} ${commonClasses} ${className}`;

  // Create the appropriate heading element using createElement
  return createElement(
    `h${level}`,
    { className: headingClasses, id },
    children
  );
}
