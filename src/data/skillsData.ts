import { Skill, ProficiencyLevel } from './types';
import { profileData } from './profileData';

/**
 * Skill category definitions
 */
export const skillCategories = {
  frontend: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "HTML/CSS",
  ],
  backend: [
    "Node.js",
    "Git",
    "Python",
    "Automation"
  ],
  business: [
    "Statistics",
    "Marketing",
    "Analytics",
    "Project Management",
    "Strategic Planning"
  ]
};

/**
 * Skill proficiency definitions
 */
export const skillProficiencies: Record<string, { level: ProficiencyLevel, percentage: number }> = {
  "React": { level: "Expert", percentage: 95 },
  "JavaScript": { level: "Expert", percentage: 95 },
  "Next.js": { level: "Advanced", percentage: 85 },
  "HTML/CSS": { level: "Advanced", percentage: 85 },
  "Tailwind CSS": { level: "Advanced", percentage: 85 },
  "Git": { level: "Advanced", percentage: 85 },
  "Statistics": { level: "Advanced", percentage: 85 },
  "Node.js": { level: "Intermediate", percentage: 75 },
  "TypeScript": { level: "Intermediate", percentage: 75 },
  "Python": { level: "Intermediate", percentage: 70 },
  "Marketing": { level: "Intermediate", percentage: 65 },
  "Analytics": { level: "Intermediate", percentage: 65 },
  "Automation": { level: "Intermediate", percentage: 60 },
};

/**
 * Development focus areas for professional development section
 */
export const focusAreas = [
  "Advancing modern frontend architecture patterns",
  "Exploring best practices in React and Next.js",
  "Learning backend technologies to complement frontend expertise",
  "Studying UX design principles for better user experiences",
];

/**
 * Generate structured skills data from profile key skills
 */
export function generateSkillsData(): Skill[] {
  return profileData.keySkills.map((name) => {
    // Determine skill category
    let category: "frontend" | "backend" | "business" | "other" = "other";
    
    if (skillCategories.frontend.includes(name)) {
      category = "frontend";
    } else if (skillCategories.backend.includes(name)) {
      category = "backend";
    } else if (skillCategories.business.includes(name)) {
      category = "business";
    }
    
    // Get proficiency data or use default
    const proficiency = skillProficiencies[name] || { 
      level: "Intermediate" as ProficiencyLevel, 
      percentage: 65 
    };

    return { 
      name, 
      level: proficiency.level,
      category, 
      percentage: proficiency.percentage 
    };
  });
}

/**
 * Group skills by category
 */
export function getSkillsByCategory(skills: Skill[]) {
  return {
    frontend: skills.filter((skill) => skill.category === "frontend"),
    backend: skills.filter((skill) => skill.category === "backend"),
    business: skills.filter((skill) => skill.category === "business"),
    other: skills.filter((skill) => skill.category === "other"),
  };
}

/**
 * Get top skills by proficiency level
 */
export function getTopSkills(skills: Skill[], count: number = 6): Skill[] {
  return skills
    .filter((skill) => skill.level === "Expert" || skill.level === "Advanced")
    .sort((a, b) => (b.percentage || 0) - (a.percentage || 0))
    .slice(0, count);
} 