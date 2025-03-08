"use client";

import React, { useState, useEffect, useRef } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export default function NavbarGlow() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [isActive, setIsActive] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial delay before showing the glow effect
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 1000);

    // Track mouse movement but only when inside the navbar
    const updateMousePosition = (e: MouseEvent) => {
      if (navbarRef.current) {
        const rect = navbarRef.current.getBoundingClientRect();
        // Check if mouse is within navbar bounds
        if (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        ) {
          setMousePosition({ x: e.clientX, y: e.clientY });
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      }
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
    <div ref={navbarRef} className="w-full h-full absolute top-0 left-0">
      <div
        className={`navbar-glow ${isActive && isHovering ? "active" : ""}`}
        style={glow}
        aria-hidden="true"
      ></div>
    </div>
  );
}
