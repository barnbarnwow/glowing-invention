"use client";

import React, { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";

/**
 * Button Component
 *
 * A versatile button component that supports:
 * - Multiple variants: primary, secondary, outline, text
 * - Different sizes: small, medium, large
 * - Link functionality with Next.js Link
 * - Animation effects
 * - Full HTML button attributes
 */

interface ButtonBaseProps {
  /** Content to display inside the button */
  children: ReactNode;
  /** Button visual style */
  variant?: "primary" | "secondary" | "outline" | "text";
  /** Button size */
  size?: "small" | "medium" | "large";
  /** Optional icon to display before the text */
  leftIcon?: ReactNode;
  /** Optional icon to display after the text */
  rightIcon?: ReactNode;
  /** Whether to stretch button to full width */
  fullWidth?: boolean;
  /** Whether to apply hover animation effect */
  animated?: boolean;
  /** Optional CSS class name */
  className?: string;
  /** Whether to disable the button */
  disabled?: boolean;
}

// Props for regular button
interface ButtonAsButtonProps extends ButtonBaseProps {
  /** Indicates this is a regular button, not a link */
  as?: "button";
  /** URL is not used when button is rendered as a button */
  href?: never;
  /** Button type attribute */
  type?: "button" | "submit" | "reset";
  /** Click handler */
  onClick?: () => void;
}

// Props for link button
interface ButtonAsLinkProps extends ButtonBaseProps {
  /** Renders button as a Next.js Link component */
  as: "link";
  /** URL for the link */
  href: string;
  /** Whether to open link in new tab */
  external?: boolean;
  /** Type is not used when button is rendered as a link */
  type?: never;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  leftIcon,
  rightIcon,
  fullWidth = false,
  animated = true,
  className = "",
  disabled = false,
  ...rest
}: ButtonProps) {
  // Base classes with Tailwind utilities
  const baseClasses = "button-base";

  // Size classes with Tailwind utilities
  const sizeClasses = {
    small: "text-sm py-1 px-3",
    medium: "text-base py-2 px-4",
    large: "text-lg py-3 px-6",
  }[size];

  // Variant classes with Tailwind utilities
  const variantClasses = {
    primary:
      "bg-foreground-primary text-background-primary hover:bg-foreground-secondary hover:border-foreground-secondary",
    secondary:
      "bg-background-secondary text-foreground-primary hover:bg-background-tertiary",
    outline:
      "bg-transparent text-foreground-primary hover:bg-background-secondary",
    text: "bg-transparent text-foreground-primary border-transparent hover:border-foreground-tertiary hover:text-foreground-secondary",
  }[variant];

  // Additional Tailwind classes
  const widthClass = fullWidth ? "w-full" : "";
  const disabledClass = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  // Combine all classes
  const buttonClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${widthClass} ${disabledClass} ${className}`;

  // Animation variants
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.98, transition: { duration: 0.1 } },
  };

  // Common button children with icons
  const buttonContent = (
    <>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </>
  );

  // Render as link or button
  if ("as" in rest && rest.as === "link") {
    const { href, external, as, ...linkRest } = rest as ButtonAsLinkProps;

    return (
      <motion.div
        className="inline-block"
        initial="initial"
        whileHover={animated && !disabled ? "hover" : "initial"}
        whileTap={animated && !disabled ? "tap" : "initial"}
        variants={buttonVariants}
      >
        <Link
          href={href}
          className={buttonClasses}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          {...(linkRest as any)}
        >
          {buttonContent}
        </Link>
      </motion.div>
    );
  }

  // Regular button
  const {
    as,
    type = "button",
    onClick,
    ...buttonRest
  } = rest as ButtonAsButtonProps;

  const motionProps: HTMLMotionProps<"button"> = {
    className: buttonClasses,
    disabled,
    initial: "initial",
    whileHover: animated && !disabled ? "hover" : "initial",
    whileTap: animated && !disabled ? "tap" : "initial",
    variants: buttonVariants,
    type,
    onClick,
  };

  return <motion.button {...motionProps}>{buttonContent}</motion.button>;
}
