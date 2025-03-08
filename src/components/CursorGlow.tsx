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
 * CursorGlow component that creates a subtle light effect following the mouse with a trail
 */
export default function CursorGlow() {
  const [primaryGlow, setPrimaryGlow] = useState<MousePosition>({ x: 0, y: 0 });
  const [trailGlow, setTrailGlow] = useState<MousePosition>({ x: 0, y: 0 });
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
      // Update primary glow position (slightly faster than before - 0.08 instead of 0.05)
      setPrimaryGlow((prev) => ({
        x: prev.x + (targetPosition.x - prev.x) * 0.08,
        y: prev.y + (targetPosition.y - prev.y) * 0.08,
      }));

      // Update trail glow position (follows the primary glow with a delay)
      setTrailGlow((prev) => ({
        x: prev.x + (primaryGlow.x - prev.x) * 0.05,
        y: prev.y + (primaryGlow.y - prev.y) * 0.05,
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
    <>
      {/* Primary glow that follows cursor closely */}
      <div
        className={`cursor-glow ${isActive ? "active" : ""}`}
        style={{
          left: `${primaryGlow.x}px`,
          top: `${primaryGlow.y}px`,
          opacity: isActive ? 0.8 : 0,
        }}
      />

      {/* Trail glow that follows with a delay */}
      <div
        className={`cursor-glow ${isActive ? "active" : ""}`}
        style={{
          left: `${trailGlow.x}px`,
          top: `${trailGlow.y}px`,
          opacity: isActive ? 0.4 : 0,
          width: "calc(var(--glow-size) * 0.7)",
          height: "calc(var(--glow-size) * 0.7)",
        }}
      />
    </>
  );
}
