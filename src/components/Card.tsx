"use client";

import React, { ReactNode } from "react";
import BorderGlowWrapper from "./BorderGlowWrapper";

interface CardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Card component with glowing border effect when mouse is nearby
 */
export default function Card({ children, className = "" }: CardProps) {
  return (
    <BorderGlowWrapper proximityThreshold={150}>
      <div className={`card ${className}`}>{children}</div>
    </BorderGlowWrapper>
  );
}
