"use client";

import React, { useMemo } from "react";
import PageTransition from "@/components/PageTransition";
import { profileData } from "@/data/profileData";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/utils/animationVariants";
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

// Define BusinessSkill type
interface BusinessSkillsGroup {
  category: string;
  skills: string[];
}

export default function SkillsPage() {
  // Get skills from profileData
  const { keySkills, interests, businessSkills } = profileData;

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

  // Memoize skill proficiencies to avoid recalculation - limit to top 3 skills
  const skillProficiencies: SkillProficiency[] = useMemo(() => {
    // Define all possible proficiencies
    const allProficiencies: SkillProficiency[] = [
      { skill: "React", level: "Expert", percentage: 90 },
      { skill: "JavaScript", level: "Expert", percentage: 92 },
      { skill: "Next.js", level: "Advanced", percentage: 85 },
      { skill: "Tailwind CSS", level: "Advanced", percentage: 80 },
      { skill: "TypeScript", level: "Intermediate", percentage: 75 },
      { skill: "Node.js", level: "Intermediate", percentage: 70 },
      { skill: "HTML/CSS", level: "Advanced", percentage: 88 },
      { skill: "Python", level: "Intermediate", percentage: 65 },
      { skill: "Git", level: "Advanced", percentage: 78 },
      { skill: "Project Management", level: "Advanced", percentage: 85 },
      { skill: "Business Analysis", level: "Advanced", percentage: 82 },
      { skill: "Marketing Strategy", level: "Intermediate", percentage: 75 },
    ];

    // Filter to include skills from keySkills and limit to top 3
    return allProficiencies
      .filter((item) => keySkills.includes(item.skill))
      .sort((a, b) => b.percentage - a.percentage) // Sort by percentage (highest first)
      .slice(0, 3); // Limit to top 3
  }, [keySkills]);

  // Professional development focus areas
  const focusAreas = [
    "Modern frontend architecture patterns",
    "Performance optimization techniques",
    "Advanced animation and interaction design",
    "Business strategy in tech environments",
    "Client-focused development practices",
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
              I&apos;ve acquired a diverse set of skills throughout my journey
              as a developer. Here&apos;s a breakdown of my technical expertise
              and competencies.
            </motion.p>

            <motion.div
              className="relative z-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Professional Development - Moved to the top */}
              <motion.div className="mb-12" variants={itemVariants}>
                <h2 className="text-2xl font-medium mb-6 text-[var(--foreground-primary)]">
                  Professional Development
                </h2>
                <Card className="p-6 rounded-xl">
                  <p className="text-[var(--foreground-secondary)] mb-4">
                    I&apos;m constantly expanding my skillset to stay current
                    with industry trends and emerging technologies. My approach
                    to learning is both hands-on and theoretical, ensuring a
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

              {/* Skill Proficiency - Only render if we have proficiencies */}
              {skillProficiencies.length > 0 && (
                <motion.div className="mb-12" variants={itemVariants}>
                  <h2 className="text-2xl font-medium mb-6 text-[var(--foreground-primary)]">
                    Top Proficiency Levels
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

              {/* Featured Skills - Only render if we have skills */}
              {hasSkills && (
                <motion.div className="mb-12" variants={itemVariants}>
                  <h2 className="text-2xl font-medium mb-6 text-[var(--foreground-primary)]">
                    Technical Expertise
                  </h2>
                  <p className="text-[var(--foreground-secondary)] mb-6">
                    I specialize in modern web development technologies with a
                    focus on creating responsive, performant applications. My
                    technical skills span frontend frameworks, backend systems,
                    and development tools that enable me to build comprehensive
                    solutions.
                  </p>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                  >
                    {Object.entries(skillCategories).map(
                      ([category, skills]) => (
                        <Card key={category} className="p-6 rounded-xl">
                          <h3 className="text-xl font-medium mb-4 text-[var(--foreground-primary)]">
                            {category}
                          </h3>
                          <div className="space-y-2">
                            {skills.map((skill) => (
                              <motion.div
                                key={skill}
                                className="flex items-center space-x-2"
                                variants={itemVariants}
                              >
                                <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)]"></span>
                                <span className="text-[var(--foreground-secondary)]">
                                  {skill}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </Card>
                      )
                    )}
                  </motion.div>
                </motion.div>
              )}

              {/* Business Skills Section */}
              <motion.div className="mb-12" variants={itemVariants}>
                <h2 className="text-2xl font-medium mb-6 text-[var(--foreground-primary)]">
                  Business Skills
                </h2>
                <p className="text-[var(--foreground-secondary)] mb-6">
                  With a background in Business Administration, I bring a unique
                  blend of technical and business acumen to my development
                  projects, ensuring solutions that are not only technically
                  sound but also aligned with business objectives.
                </p>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={containerVariants}
                >
                  {businessSkills.map((skillGroup: BusinessSkillsGroup) => (
                    <Card key={skillGroup.category} className="p-6 rounded-xl">
                      <h3 className="text-xl font-medium mb-4 text-[var(--foreground-primary)]">
                        {skillGroup.category}
                      </h3>
                      <div className="space-y-2">
                        {skillGroup.skills.map((skill) => (
                          <motion.div
                            key={skill}
                            className="flex items-center space-x-2"
                            variants={itemVariants}
                          >
                            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)]"></span>
                            <span className="text-[var(--foreground-secondary)]">
                              {skill}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </Card>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
