"use client";

import React, { useMemo } from "react";
import PageTransition from "@/components/PageTransition";
import { profileData } from "@/data/profileData";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/utils/animationVariants";
import BrutalistGrid from "@/components/BrutalistGrid";
import BrutalistHeading from "@/components/BrutalistHeading";
import BrutalistCard from "@/components/BrutalistCard";
import BrutalistProgressBar from "@/components/BrutalistProgressBar";
import BrutalistBulletList from "@/components/BrutalistBulletList";

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

    // Filter to include skills from keySkills and limit to top 5
    return allProficiencies
      .filter((item) => keySkills.includes(item.skill))
      .sort((a, b) => b.percentage - a.percentage) // Sort by percentage (highest first)
      .slice(0, 5); // Limit to top 5
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
      <div className="min-h-screen pt-16 relative">
        <BrutalistGrid opacity={3} animate={true} rows={16} columns={16} />

        <section className="py-20 px-4 clean-bg relative z-10">
          <div className="max-w-5xl mx-auto">
            <BrutalistHeading level={1} align="center">
              My Skills
            </BrutalistHeading>

            <motion.div
              className="text-lg text-center mb-16 max-w-3xl mx-auto font-serif"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              I&apos;ve acquired a diverse set of skills throughout my journey
              as a developer. Here&apos;s a breakdown of my technical expertise
              and competencies.
            </motion.div>

            <div className="brutalist-divider mb-16"></div>

            <motion.div
              className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Professional Development - Left column */}
              <motion.div className="md:col-span-5" variants={itemVariants}>
                <BrutalistHeading level={2} withDivider={true}>
                  Professional Development
                </BrutalistHeading>

                <BrutalistCard
                  className="mb-8"
                  shadow="large"
                  variant="secondary"
                >
                  <p className="text-[var(--foreground-secondary)] mb-6 font-serif">
                    I&apos;m constantly expanding my skillset to stay current
                    with industry trends and emerging technologies. My approach
                    to learning is both hands-on and theoretical, ensuring a
                    well-rounded understanding of new concepts.
                  </p>

                  {relevantInterests.length > 0 && (
                    <BrutalistBulletList
                      title="Core Areas of Interest"
                      items={relevantInterests}
                      className="mb-8"
                    />
                  )}

                  <BrutalistBulletList
                    title="Recent Areas of Focus"
                    items={focusAreas}
                  />
                </BrutalistCard>

                {/* Featured Skills - Technical expertise categories */}
                {hasSkills && (
                  <>
                    <BrutalistHeading level={2} withDivider={true}>
                      Technical Expertise
                    </BrutalistHeading>
                    <p className="text-[var(--foreground-secondary)] mb-6 font-serif">
                      I specialize in modern web development technologies with a
                      focus on creating responsive, performant applications.
                    </p>

                    <div className="space-y-6">
                      {Object.entries(skillCategories).map(
                        ([category, skills]) => (
                          <BrutalistCard key={category} variant="tertiary">
                            <BrutalistHeading level={3} className="!mb-4">
                              {category}
                            </BrutalistHeading>
                            <div className="font-serif">
                              <ul className="space-y-2 brutalist-list">
                                {skills.map((skill) => (
                                  <li key={skill} className="!border-b-0 !py-2">
                                    <span className="inline-block w-6 text-[var(--foreground-primary)] font-mono mr-2">
                                      &gt;
                                    </span>
                                    <span className="text-[var(--foreground-secondary)]">
                                      {skill}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </BrutalistCard>
                        )
                      )}
                    </div>
                  </>
                )}
              </motion.div>

              {/* Skill Proficiency - Right column */}
              <motion.div className="md:col-span-7" variants={itemVariants}>
                <BrutalistHeading level={2} withDivider={true}>
                  Proficiency Levels
                </BrutalistHeading>

                <p className="text-[var(--foreground-secondary)] mb-8 font-serif">
                  My expertise spans various technologies with a focus on
                  frontend development. Here's a detailed breakdown of my
                  technical proficiency.
                </p>

                {skillProficiencies.map((item, index) => (
                  <BrutalistProgressBar
                    key={item.skill}
                    skill={item.skill}
                    level={item.level}
                    percentage={item.percentage}
                    index={index}
                  />
                ))}

                <div className="brutalist-divider my-12"></div>

                <BrutalistHeading level={2} withDivider={true}>
                  Skill Development Approach
                </BrutalistHeading>

                <BrutalistCard
                  className="mb-8"
                  shadow="medium"
                  variant="primary"
                >
                  <p className="text-[var(--foreground-secondary)] mb-4 font-serif">
                    My professional growth strategy focuses on both depth and
                    breadth, balancing deep expertise in core technologies with
                    exploration of emerging tools. I believe in practical,
                    project-based learning complemented by theoretical
                    understanding.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="border-2 border-[var(--foreground-primary)] p-4">
                      <h4 className="text-lg mb-2">Depth</h4>
                      <p className="text-sm font-serif">
                        Mastering core technologies through intensive practice
                      </p>
                    </div>
                    <div className="border-2 border-[var(--foreground-primary)] p-4">
                      <h4 className="text-lg mb-2">Breadth</h4>
                      <p className="text-sm font-serif">
                        Exploring complementary skills for versatility
                      </p>
                    </div>
                  </div>
                </BrutalistCard>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
