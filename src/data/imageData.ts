import { ImageData } from './types';

/**
 * Centralized image data for the entire site
 */
export const images: ImageData = {
  // Profile and personal images
  profile: {
    main: "https://media.licdn.com/dms/image/v2/D5603AQE2sSPaKA0bFg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1681984465273?e=1746662400&v=beta&t=p0YA1OBiizuxGTHr2cOlIaRnoBoj-t_6fLbGzoTW6EE",
    // Alternatively, you can use a local image path like: "/images/profile.jpg"
    // You would need to save the image to public/images/profile.jpg
    secondary: "/images/profile-secondary.jpg", // Example for a secondary profile image
  },
  
  // Project images
  projects: {
    project1: "/images/projects/luxury-vehicles.jpg", // Sports car and motorcycles
    project2: "/images/projects/texture-pattern.jpg", // Metal texture pattern
    project3: "/images/projects/bedroom-design.jpg", // Modern bedroom design
  },
  
  // Icons and logos
  icons: {
    github: "/images/icons/github.svg",
    linkedin: "/images/icons/linkedin.svg",
    twitter: "/images/icons/twitter.svg",
  },
  
  // Backgrounds
  backgrounds: {
    hero: "/images/backgrounds/hero-bg.jpg",
    about: "/images/backgrounds/about-bg.jpg",
  }
}; 