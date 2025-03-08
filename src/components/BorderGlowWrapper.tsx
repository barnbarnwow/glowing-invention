"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";

interface ProximityBorderProps {
  children: ReactNode;
  className?: string;
  proximityThreshold?: number;
  levels?: number;
}

/**
 * A wrapper component that changes border color intensity
 * based on mouse proximity to the element
 */
export default function ProximityBorder({
  children,
  className = "",
  proximityThreshold = 150,
  levels = 5,
}: ProximityBorderProps) {
  const [intensity, setIntensity] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  // Function to calculate and set border intensity based on mouse distance
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

        // Calculate intensity level based on distance and threshold
        if (distance > proximityThreshold) {
          setIntensity(0); // Outside threshold - no effect
        } else {
          // Map distance to intensity levels (reversed so closer = higher intensity)
          const newIntensity = Math.floor(
            (1 - distance / proximityThreshold) * levels
          );
          setIntensity(Math.min(Math.max(newIntensity, 0), levels));
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [proximityThreshold, levels]);

  return (
    <div
      ref={elementRef}
      className={`proximity-border ${className}`}
      data-intensity={intensity}
    >
      {children}
    </div>
  );
}
