"use client";

import React, { useState, useEffect } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Set initial delay before showing the glow effect
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 1000);

    // Track mouse movement
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      clearTimeout(timer);
    };
  }, []);

  const glow = {
    left: `${mousePosition.x}px`,
    top: `${mousePosition.y}px`,
  };

  return (
    <div
      className={`cursor-glow ${isActive ? "active" : ""}`}
      style={glow}
      aria-hidden="true"
    ></div>
  );
}
