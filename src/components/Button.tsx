"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  useProximityEffect?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
  useProximityEffect = true,
}: ButtonProps) {
  const [intensity, setIntensity] = useState(0);
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  // Function to calculate and set border intensity based on mouse distance
  useEffect(() => {
    if (!useProximityEffect) return;

    const proximityThreshold = 150;
    const levels = 10;

    // Track mouse movements to check proximity
    const handleMouseMove = (e: MouseEvent) => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();

        // Get closest point on the button from mouse position
        const closestX = Math.max(rect.left, Math.min(e.clientX, rect.right));
        const closestY = Math.max(rect.top, Math.min(e.clientY, rect.bottom));

        // Calculate distance from mouse to closest point
        const distance = Math.sqrt(
          Math.pow(e.clientX - closestX, 2) + Math.pow(e.clientY - closestY, 2)
        );

        // Calculate intensity based on distance
        if (distance > proximityThreshold) {
          setIntensity(0);
        } else {
          // Quadratic curve for more precision at closer distances
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
  }, [useProximityEffect]);

  // Define styles based on variant
  const baseStyles = "font-medium py-3 px-6 rounded-md transition-all";

  const variantStyles = {
    primary: "gradient-accent hover:translate-y-[-1px]",
    secondary: "gradient-accent hover:translate-y-[-1px]",
    outline: "gradient-accent hover:translate-y-[-1px]",
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${
    useProximityEffect
      ? "proximity-border animate-on-hover"
      : "animate-on-hover"
  } ${className}`;

  // If href is provided, render as Link
  if (href) {
    return (
      <Link
        href={href}
        className={buttonStyles}
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        data-intensity={intensity}
      >
        {children}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      data-intensity={intensity}
    >
      {children}
    </button>
  );
}
