/**
 * Animation Utilities
 * 
 * Centralized animation variants for consistent animations throughout the application.
 */

// Standard easing curves
export const easings = {
  smooth: [0.25, 0.1, 0.25, 1.0],
  gentle: [0.2, 0.0, 0.0, 1.0],
  bounce: [0.34, 1.56, 0.64, 1],
};

// Animation durations in seconds
export const durations = {
  fast: 0.2,
  medium: 0.3,
  slow: 0.5,
  page: 0.4,
};

// Core animation variants
export const animations = {
  // Page transitions
  page: {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: durations.page, ease: easings.smooth }
    },
    exit: {
      opacity: 0,
      y: -5,
      transition: { duration: durations.fast, ease: easings.smooth }
    }
  },
  
  // Containers with staggered children
  container: {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  },
  
  // Element animations
  element: {
    // Fade up (most common)
    fadeUp: {
      hidden: { opacity: 0, y: 15 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: durations.medium, ease: "easeOut" }
      }
    },
    
    // Simple fade
    fade: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: durations.medium, ease: "easeOut" }
      }
    },
    
    // Card with subtle scale
    card: {
      hidden: { opacity: 0, scale: 0.98 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: durations.medium, ease: easings.gentle }
      }
    },
    
    // Slide in from left/right
    slideInLeft: {
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: durations.medium, ease: easings.smooth }
      }
    },
    
    slideInRight: {
      hidden: { opacity: 0, x: 20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: durations.medium, ease: easings.smooth }
      }
    }
  },
  
  // Interactive animations
  interactive: {
    // Hover and tap for buttons
    button: {
      hover: { scale: 1.05, transition: { duration: durations.fast } },
      tap: { scale: 0.98, transition: { duration: 0.1 } }
    },
    
    // Hover for cards
    card: {
      hover: { 
        y: -4, 
        boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
        transition: { duration: durations.fast } 
      }
    }
  }
};

// Named exports for convenience
export const pageVariants = animations.page;
export const containerVariants = animations.container;
export const fadeUpVariants = animations.element.fadeUp;
export const fadeVariants = animations.element.fade;
export const cardVariants = animations.element.card;
export const buttonHoverVariants = animations.interactive.button;

// For backward compatibility
export const containerAnimations = {
  staggered: animations.container,
  grid: {
    ...animations.container,
    visible: {
      ...animations.container.visible,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.15
      }
    }
  }
};

export const elementAnimations = animations.element; 