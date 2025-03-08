"use client";

import React, { useState, useEffect, useRef } from "react";

/**
 * Interface for mouse position coordinates
 */
interface MousePosition {
  x: number;
  y: number;
}

/**
 * NavbarGlow component that creates an inverted glow effect for the navbar
 */
export default function NavbarGlow() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [targetPosition, setTargetPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [isActive, setIsActive] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set a timer to activate the glow effect after a short delay
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 1000);

    // Animation frame for smooth cursor following with delay
    let animationFrameId: number;

    const animatePosition = () => {
      if (isHovering) {
        setMousePosition((prev) => ({
          x: prev.x + (targetPosition.x - prev.x) * 0.05, // Reduced speed factor
          y: prev.y + (targetPosition.y - prev.y) * 0.05,
        }));
      }

      animationFrameId = requestAnimationFrame(animatePosition);
    };

    // Track mouse movements but only activate when hovering navbar
    const updateMousePosition = (e: MouseEvent) => {
      // Get navbar element bounds
      if (navbarRef.current) {
        const navbarRect = navbarRef.current.getBoundingClientRect();

        // Only track mouse when it's within or near the navbar
        if (
          e.clientY <= navbarRect.bottom + 50 &&
          e.clientY >= navbarRect.top - 50
        ) {
          setTargetPosition({ x: e.clientX, y: e.clientY });
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      }
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
  }, [targetPosition, isHovering]);

  return (
    <>
      <div ref={navbarRef} className="absolute inset-0 pointer-events-none" />
      <div
        className={`navbar-glow ${isActive && isHovering ? "active" : ""}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
    </>
  );
}
