"use client";

import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  liftEffect?: boolean;
}

/**
 * Standard Card component with optional lift effect
 * Using brutalist design system classes
 */
export default function Card({
  children,
  className = "",
  liftEffect = false,
}: CardProps) {
  return (
    <div
      className={`brutalist-card brutalist-border brutalist-shadow brutalist-transition ${
        liftEffect ? "brutalist-hover" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
