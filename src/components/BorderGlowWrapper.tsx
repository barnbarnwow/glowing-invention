"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";

interface ProximityBorderProps {
  children: ReactNode;
  className?: string;
  proximityThreshold?: number;
  levels?: number;
  disabled?: boolean;
}

/**
 * A wrapper component that changes border color intensity
 * based on mouse proximity to the element with a shimmering effect
 */
export default function ProximityBorder({
  children,
  className = "",
  proximityThreshold = 150,
  levels = 10,
  disabled = false,
}: ProximityBorderProps) {
  const [intensity, setIntensity] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  // Function to calculate and set border intensity based on mouse distance
  useEffect(() => {
    if (disabled) return;

    // Track mouse movements to check proximity
    const handleMouseMove = (e: MouseEvent) => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();

        // Get closest point on the element from mouse position
        // This makes the effect work better for larger elements
        const closestX = Math.max(rect.left, Math.min(e.clientX, rect.right));
        const closestY = Math.max(rect.top, Math.min(e.clientY, rect.bottom));

        // Calculate distance from mouse to closest point on element
        const distance = Math.sqrt(
          Math.pow(e.clientX - closestX, 2) + Math.pow(e.clientY - closestY, 2)
        );

        // Calculate intensity level based on distance and threshold
        if (distance > proximityThreshold) {
          setIntensity(0); // Outside threshold - no effect
        } else {
          // Map distance to intensity levels with a quadratic curve for more precision at closer distances
          const normalizedDistance = distance / proximityThreshold;
          const curvedIntensity = Math.pow(1 - normalizedDistance, 2);
          const newIntensity = Math.floor(curvedIntensity * levels);
          setIntensity(Math.min(Math.max(newIntensity, 0), levels));
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [proximityThreshold, levels, disabled]);

  // Apply rounded corners to match the child element if it's a card
  const borderStyles = elementRef.current?.querySelector(".card")
    ? { borderRadius: "0.5rem" }
    : {};

  if (disabled) {
    return <>{children}</>;
  }

  return (
    <div
      ref={elementRef}
      className={`proximity-border ${className}`}
      data-intensity={intensity}
      style={borderStyles}
    >
      {children}
    </div>
  );
}
