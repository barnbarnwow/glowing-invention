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
}

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const [isGlowing, setIsGlowing] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  // Function to check proximity to mouse and activate glow
  useEffect(() => {
    // Track mouse movements to check proximity
    const handleMouseMove = (e: MouseEvent) => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const buttonCenterX = rect.left + rect.width / 2;
        const buttonCenterY = rect.top + rect.height / 2;

        // Calculate distance from mouse to button center
        const distance = Math.sqrt(
          Math.pow(e.clientX - buttonCenterX, 2) +
            Math.pow(e.clientY - buttonCenterY, 2)
        );

        // Activate glow if mouse is within 100px
        setIsGlowing(distance < 100);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Define styles based on variant
  const baseStyles = "font-medium py-3 px-6 rounded-md transition-all";

  const variantStyles = {
    primary: "gradient-accent hover:translate-y-[-1px]",
    secondary: "gradient-accent hover:translate-y-[-1px]",
    outline: "gradient-accent hover:translate-y-[-1px]",
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} border-glow ${
    isGlowing ? "active" : ""
  } ${className}`;

  // If href is provided, render as Link
  if (href) {
    return (
      <Link
        href={href}
        className={buttonStyles}
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
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
    >
      {children}
    </button>
  );
}
