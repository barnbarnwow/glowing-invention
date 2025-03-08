"use client";

import React, { useMemo } from "react";
import PageTransition from "@/components/PageTransition";
import { profileData } from "@/data/profileData";
import { motion } from "framer-motion";
import {
  containerVariants,
  cardVariants,
  itemVariants,
} from "@/utils/animationVariants";
import SkillCategory from "@/components/SkillCategory";
import ProgressBar from "@/components/ProgressBar";
import BulletItem from "@/components/BulletItem";
import Card from "@/components/Card";

// Define skill category mapping type for better type safety
type SkillCategoryMap = {
  [category: string]: string[];
};

// Define proficiency level type for type safety
type ProficiencyLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

// Define skill proficiency type
interface SkillProficiency {
  skill: string;
  level: ProficiencyLevel;
  percentage: number;
}

export default function SkillsPage() {
  // Get skills from profileData
  const { keySkills, interests } = profileData;

  // Use memoization for category mapping to avoid recalculation on re-renders
  const skillCategories: SkillCategoryMap = useMemo(() => {
    // Define category mappings
    const categoryMap: Record<string, string[]> = {
      "Frontend Development": [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "HTML/CSS",
      ],
      "Backend & Tools": ["Node.js", "Git", "Python", "Automation"],
      "Business & Analytics": ["Statistics", "Marketing", "Analytics"],
    };

    // Create filtered categories based on what's available in keySkills
    return Object.entries(categoryMap).reduce((acc, [category, skillList]) => {
      const availableSkills = keySkills.filter((skill) =>
        skillList.includes(skill)
      );

      if (availableSkills.length > 0) {
        acc[category] = availableSkills;
      }

      return acc;
    }, {} as SkillCategoryMap);
  }, [keySkills]);

  // Memoize skill proficiencies to avoid recalculation
  const skillProficiencies: SkillProficiency[] = useMemo(() => {
    // Define all possible proficiencies
    const allProficiencies: SkillProficiency[] = [
      { skill: "React", level: "Expert", percentage: 90 },
      { skill: "Next.js", level: "Advanced", percentage: 85 },
      { skill: "Tailwind CSS", level: "Advanced", percentage: 80 },
      { skill: "TypeScript", level: "Intermediate", percentage: 75 },
      { skill: "Node.js", level: "Intermediate", percentage: 70 },
      { skill: "JavaScript", level: "Expert", percentage: 92 },
      { skill: "HTML/CSS", level: "Advanced", percentage: 88 },
      { skill: "Python", level: "Intermediate", percentage: 65 },
      { skill: "Git", level: "Advanced", percentage: 78 },
    ];

    // Filter to only include skills from keySkills
    return allProficiencies.filter((item) => keySkills.includes(item.skill));
  }, [keySkills]);

  // Professional development focus areas
  const focusAreas = [
    "Modern frontend architecture patterns",
    "Performance optimization techniques",
    "Advanced animation and interaction design",
  ];

  // Memoize relevant interests to avoid recalculation
  const relevantInterests = useMemo(
    () =>
      interests.filter((interest) =>
        ["Web Development", "UI/UX Design"].includes(interest)
      ),
    [interests]
  );

  // Check if there are any skills to display
  const hasSkills = Object.values(skillCategories).some(
    (skills) => skills.length > 0
  );

  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
        <section className="py-20 px-4 clean-bg">
          <div className="max-w-4xl mx-auto">
            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-6 text-center text-[var(--foreground-primary)]"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              My Skills
            </motion.h1>

            <motion.p
              className="text-lg text-center text-[var(--foreground-secondary)] mb-12 max-w-2xl mx-auto"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              I've acquired a diverse set of skills throughout my journey as a
              developer. Here's a breakdown of my technical expertise and
              competencies.
            </motion.p>

            <motion.div
              className="relative z-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Featured Skills - Only render if we have skills */}
              {hasSkills && (
                <motion.div className="mb-12" variants={itemVariants}>
                  <h2 className="text-2xl font-medium mb-6 text-[var(--foreground-primary)]">
                    Technical Expertise
                  </h2>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                  >
                    {Object.entries(skillCategories).map(
                      ([category, skills]) => (
                        <SkillCategory
                          key={category}
                          title={category}
                          skills={skills}
                        />
                      )
                    )}
                  </motion.div>
                </motion.div>
              )}

              {/* Skill Proficiency - Only render if we have proficiencies */}
              {skillProficiencies.length > 0 && (
                <motion.div className="mb-12" variants={itemVariants}>
                  <h2 className="text-2xl font-medium mb-6 text-[var(--foreground-primary)]">
                    Proficiency Levels
                  </h2>
                  <Card className="p-6 rounded-xl">
                    {skillProficiencies.map((item, index) => (
                      <ProgressBar
                        key={item.skill}
                        skill={item.skill}
                        level={item.level}
                        percentage={item.percentage}
                        index={index}
                      />
                    ))}
                  </Card>
                </motion.div>
              )}

              {/* Professional Development */}
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-medium mb-6 text-[var(--foreground-primary)]">
                  Professional Development
                </h2>
                <Card className="p-6 rounded-xl">
                  <p className="text-[var(--foreground-secondary)] mb-4">
                    I'm constantly expanding my skillset to stay current with
                    industry trends and emerging technologies. My approach to
                    learning is both hands-on and theoretical, ensuring a
                    well-rounded understanding of new concepts.
                  </p>

                  {relevantInterests.length > 0 && (
                    <div className="mb-4">
                      <p className="text-[var(--foreground-secondary)] mb-2">
                        Core areas of interest:
                      </p>
                      <ul className="mt-2 space-y-2">
                        {relevantInterests.map((interest) => (
                          <BulletItem key={interest} text={interest} />
                        ))}
                      </ul>
                    </div>
                  )}

                  <p className="text-[var(--foreground-secondary)]">
                    Recent areas of focus:
                  </p>
                  <ul className="mt-2 space-y-2">
                    {focusAreas.map((area) => (
                      <BulletItem key={area} text={area} />
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
