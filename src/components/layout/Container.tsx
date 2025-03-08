"use client";

import React from "react";

type ContainerWidth = "sm" | "md" | "lg" | "xl" | "full";
type ContainerPadding = "none" | "sm" | "md" | "lg";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  width?: ContainerWidth;
  padding?: ContainerPadding;
  center?: boolean;
}

export function Container({
  children,
  className = "",
  width = "lg",
  padding = "md",
  center = true,
}: ContainerProps) {
  // Container max-width
  const widthClasses = {
    sm: "max-w-3xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  }[width];

  // Padding on x-axis
  const paddingClasses = {
    none: "px-0",
    sm: "px-2 sm:px-4",
    md: "px-4 sm:px-6 md:px-8",
    lg: "px-6 sm:px-8 md:px-12",
  }[padding];

  // Center content
  const centerClasses = center ? "mx-auto" : "";

  return (
    <div
      className={`w-full ${widthClasses} ${paddingClasses} ${centerClasses} ${className}`}
    >
      {children}
    </div>
  );
}
