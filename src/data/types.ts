/**
 * Centralized type definitions for the application data models
 */

// Skills and proficiency levels
export type ProficiencyLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export type SkillCategory = "frontend" | "backend" | "business" | "other";

export interface Skill {
  name: string;
  level: ProficiencyLevel;
  category: SkillCategory;
  percentage?: number;
}

// Profile data model
export interface SocialMediaLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  years: string;
  description?: string;
}

export interface BusinessSkillCategory {
  category: string;
  skills: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  profileImage?: string;
  socialMedia: SocialMediaLink[];
  bioParagraphs: string[];
  education: EducationItem[];
  interests: string[];
  keySkills: string[];
  businessSkills: BusinessSkillCategory[];
}

// Project data model
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  projectUrl: string;
  imageUrl?: string;
  featured?: boolean;
  category?: string;
  completionDate?: string;
}

// Image data model
export interface ImageData {
  profile: {
    main: string;
    secondary?: string;
  };
  projects: {
    [key: string]: string;
  };
  icons: {
    [key: string]: string;
  };
  backgrounds: {
    [key: string]: string;
  };
} 