"use client";

import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  liftEffect?: boolean;
}

/**
 * Standard Card component with optional lift effect
 */
export default function Card({
  children,
  className = "",
  liftEffect = true,
}: CardProps) {
  return (
    <div
      className={`card animate-on-hover ${
        liftEffect ? "lift-effect" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
