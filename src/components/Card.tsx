"use client";

import React, { ReactNode } from "react";
import ProximityBorder from "./BorderGlowWrapper";

interface CardProps {
  children: ReactNode;
  className?: string;
  useProximityBorder?: boolean;
  proximityThreshold?: number;
  levels?: number;
  liftEffect?: boolean;
}

/**
 * Standard Card component with optional proximity border effect
 */
export default function Card({
  children,
  className = "",
  useProximityBorder = true,
  proximityThreshold = 150,
  levels = 10,
  liftEffect = true,
}: CardProps) {
  const cardContent = (
    <div
      className={`card animate-on-hover ${
        liftEffect ? "lift-effect" : ""
      } ${className}`}
    >
      {children}
    </div>
  );

  if (!useProximityBorder) {
    return cardContent;
  }

  return (
    <ProximityBorder proximityThreshold={proximityThreshold} levels={levels}>
      {cardContent}
    </ProximityBorder>
  );
}
