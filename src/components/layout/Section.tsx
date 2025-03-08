"use client";

import React from "react";
import { Container } from "./Container";

type SectionPadding = "none" | "sm" | "md" | "lg";
type SectionBackground = "white" | "light" | "dark" | "black";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  padding?: SectionPadding;
  background?: SectionBackground;
  container?: boolean;
  containerWidth?: "sm" | "md" | "lg" | "xl" | "full";
}

export function Section({
  children,
  className = "",
  id,
  padding = "md",
  background = "white",
  container = true,
  containerWidth = "lg",
}: SectionProps) {
  // Vertical padding
  const paddingClasses = {
    none: "py-0",
    sm: "py-6 md:py-8",
    md: "py-12 md:py-16",
    lg: "py-16 md:py-24",
  }[padding];

  // Background color
  const backgroundClasses = {
    white: "bg-white dark:bg-gray-900",
    light: "bg-gray-100 dark:bg-gray-800",
    dark: "bg-gray-800 text-white dark:bg-gray-950",
    black: "bg-black text-white",
  }[background];

  // Content rendering
  const content = container ? (
    <Container width={containerWidth}>{children}</Container>
  ) : (
    children
  );

  return (
    <section
      id={id}
      className={`w-full ${paddingClasses} ${backgroundClasses} ${className}`}
    >
      {content}
    </section>
  );
}
