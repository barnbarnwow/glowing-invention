/**
 * Shared animation variants for consistent animations across the site
 */

// Standard fade-in animation for page transitions
export const pageVariants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      // Ensure animations propagate to children
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.15,
      ease: "easeInOut",
    },
  },
};

// Container animation with staggered children - synchronized for profile and bio
export const containerVariants = {
  hidden: {
    opacity: 1, // No opacity animation for containers
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

// Standard item animation for content inside containers
export const itemVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Opposite direction item animation (for profile content)
export const itemVariantsReverse = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Card animation for ProjectCard, SkillCard, etc.
export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 15,
    // Removed scale to avoid jumping effect
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}; 