"use client";

import React, { useState, useEffect } from "react";

/**
 * Interface for mouse position coordinates
 */
interface MousePosition {
  x: number;
  y: number;
}

/**
 * CursorGlow component that creates a subtle light effect following the mouse
 */
export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [targetPosition, setTargetPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Set a timer to activate the glow effect after a short delay
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 1000);

    // Animation frame for smooth cursor following with delay
    let animationFrameId: number;

    const animatePosition = () => {
      // Update glow position (slightly faster than before)
      setMousePosition((prev) => ({
        x: prev.x + (targetPosition.x - prev.x) * 0.08,
        y: prev.y + (targetPosition.y - prev.y) * 0.08,
      }));

      animationFrameId = requestAnimationFrame(animatePosition);
    };

    // Track mouse movements
    const updateMousePosition = (e: MouseEvent) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
    };

    // Start animation
    animationFrameId = requestAnimationFrame(animatePosition);

    // Add event listener for mouse movement
    window.addEventListener("mousemove", updateMousePosition);

    // Clean up event listeners and timers
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      clearTimeout(timer);
      cancelAnimationFrame(animationFrameId);
    };
  }, [targetPosition]);

  return (
    <div
      className={`cursor-glow ${isActive ? "active" : ""}`}
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
      }}
    />
  );
}
