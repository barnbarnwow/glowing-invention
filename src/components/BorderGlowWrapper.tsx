"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";

interface BorderGlowWrapperProps {
  children: ReactNode;
  className?: string;
  proximityThreshold?: number;
}

/**
 * A wrapper component that adds a glowing border effect when
 * the mouse cursor is near the element
 */
export default function BorderGlowWrapper({
  children,
  className = "",
  proximityThreshold = 100,
}: BorderGlowWrapperProps) {
  const [isGlowing, setIsGlowing] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Function to check proximity to mouse and activate glow
  useEffect(() => {
    // Track mouse movements to check proximity
    const handleMouseMove = (e: MouseEvent) => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();

        // Calculate center of the element
        const elementCenterX = rect.left + rect.width / 2;
        const elementCenterY = rect.top + rect.height / 2;

        // Calculate distance from mouse to element center
        const distance = Math.sqrt(
          Math.pow(e.clientX - elementCenterX, 2) +
            Math.pow(e.clientY - elementCenterY, 2)
        );

        // Activate glow if mouse is within proximity threshold
        setIsGlowing(distance < proximityThreshold);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [proximityThreshold]);

  return (
    <div
      ref={elementRef}
      className={`border-glow ${isGlowing ? "active" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
