"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeType = "light" | "dark";

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>("light");

  // Initial theme setup
  useEffect(() => {
    // Add no-transition class to prevent flash on page load
    document.documentElement.classList.add("no-transition");

    // Check if theme is stored in localStorage
    const storedTheme = localStorage.getItem("theme") as ThemeType | null;

    // If theme is stored, use it
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    }
    // Otherwise, use system preference
    else {
      const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setTheme(systemPreference);
      document.documentElement.setAttribute("data-theme", systemPreference);
    }

    // Remove no-transition class after a short delay
    setTimeout(() => {
      document.documentElement.classList.remove("no-transition");
      document.documentElement.classList.add("theme-transition");
    }, 100);
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    // Apply the theme change
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
