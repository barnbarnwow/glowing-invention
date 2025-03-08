"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";

// Light mode icon - ring shape with point at top
const LightModeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="transition-transform duration-500"
  >
    {/* Outer circle */}
    <circle cx="12" cy="12" r="8" />
    {/* Inner circle (cut out) */}
    <circle cx="12" cy="12" r="4" fill="currentColor" />
    {/* Point marker at the top - larger and with stroke */}
    <circle
      cx="12"
      cy="3.5"
      r="1.75"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.75"
    />
  </svg>
);

// Dark mode icon - circle with circle inside and point at bottom
const DarkModeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="rotate-180 transition-transform duration-500"
  >
    {/* Outer circle */}
    <circle cx="12" cy="12" r="8" />
    {/* Inner circle */}
    <circle cx="12" cy="12" r="4" />
    {/* Point marker at the top (appears at bottom due to rotation) - larger and with stroke */}
    <circle
      cx="12"
      cy="3.5"
      r="1.75"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.75"
    />
  </svg>
);

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="theme-toggle-footer group"
    >
      <div className="flex items-center justify-center">
        <div
          style={{
            width: "24px",
            height: "24px",
            display: "flex",
            marginRight: "8px",
          }}
        >
          {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </div>
        <span className="text-sm font-medium text-[var(--foreground-secondary)]">
          {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </span>
      </div>
    </button>
  );
}
