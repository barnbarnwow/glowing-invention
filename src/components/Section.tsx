"use client";

import React, { ReactNode } from "react";
import Heading from "./Heading";
import { motion } from "framer-motion";
import { animations } from "@/utils/animations";

// Grid layout options
type GridLayout = "1-col" | "2-col" | "3-col" | "sidebar-main" | "none";

// Background variants
type BackgroundVariant = "primary" | "secondary" | "tertiary" | "none";

// Margin sizes
type MarginSize = "small" | "medium" | "large" | "none";

interface SectionProps {
  /** Section title */
  title?: string;
  /** Section subtitle */
  subtitle?: string;
  /** Children content */
  children: ReactNode;
  /** Additional classes for the section */
  className?: string;
  /** Background color variant */
  background?: BackgroundVariant;
  /** Layout grid configuration */
  gridLayout?: GridLayout;
  /** Bottom margin size */
  marginBottom?: MarginSize;
  /** Whether to use animations */
  animate?: boolean;
  /** Optional data attribute for testing/selection */
  dataSection?: string;
  /** Whether to center the title */
  centerTitle?: boolean;
  /** Heading level for the title */
  titleLevel?: 2 | 3 | 4 | 5 | 6;
  /** Optional ID for anchor links */
  id?: string;
}

/**
 * Section Component
 *
 * A flexible section component for page content:
 * - Handles section titles and subtitles
 * - Configurable grid layouts
 * - Background variations
 * - Spacing controls
 * - Animation integration
 */
export default function Section({
  title,
  subtitle,
  children,
  className = "",
  background = "none",
  gridLayout = "none",
  marginBottom = "large",
  animate = true,
  dataSection,
  centerTitle = false,
  titleLevel = 2,
  id,
}: SectionProps) {
  // Get background class
  const bgClass =
    background === "none" ? "" : `bg-[var(--background-${background})]`;

  // Get margin class
  const marginClass =
    marginBottom === "none"
      ? ""
      : marginBottom === "small"
      ? "mb-8"
      : marginBottom === "medium"
      ? "mb-12"
      : "mb-16";

  // Get grid layout class
  const gridClass =
    gridLayout === "1-col"
      ? "grid grid-cols-1 gap-6"
      : gridLayout === "2-col"
      ? "grid grid-cols-1 md:grid-cols-2 gap-6"
      : gridLayout === "3-col"
      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      : gridLayout === "sidebar-main"
      ? "grid grid-cols-1 md:grid-cols-3 gap-8"
      : "";

  // Combine classes
  const sectionClasses = [marginClass, bgClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClasses} data-section={dataSection} id={id}>
      {title && (
        <div className="mb-6">
          <Heading
            level={titleLevel}
            align={centerTitle ? "center" : "left"}
            animate={animate}
          >
            {title}
          </Heading>

          {subtitle && (
            <motion.p
              className="text-[var(--foreground-secondary)] mt-2 font-serif"
              variants={animate ? animations.element.fadeUp : undefined}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      )}

      <div className={gridLayout !== "none" ? gridClass : ""}>{children}</div>
    </section>
  );
}
