"use client";

import React, { ReactNode } from "react";
import ProximityBorder from "./BorderGlowWrapper";

interface CardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Card component with border that changes color intensity based on mouse proximity
 */
export default function Card({ children, className = "" }: CardProps) {
  return (
    <ProximityBorder proximityThreshold={150} levels={5}>
      <div className={`card ${className}`}>{children}</div>
    </ProximityBorder>
  );
}
