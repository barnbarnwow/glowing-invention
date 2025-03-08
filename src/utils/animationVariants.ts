/**
 * Shared animation variants for consistent animations across the site
 * Optimized for sophisticated, performant animations with minimal lag
 */

// Engaging page transitions with subtle slide effect
export const pageVariants = {
  hidden: { 
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1.0], // Optimized cubic-bezier curve
    },
  },
  exit: {
    opacity: 0,
    y: -5,
    transition: {
      duration: 0.25,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

// Container animation with minimal staggered effect
export const containerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.05,
    },
  },
};

// Elegant fade-up animation for items
export const itemVariants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Subtle fade-in with slight scale for profile elements
export const itemVariantsReverse = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Refined card animation with subtle lift effect
export const cardVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}; 