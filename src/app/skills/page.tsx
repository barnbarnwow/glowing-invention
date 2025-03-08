"use client";

import React, { useMemo } from "react";
import PageTransition from "@/components/PageTransition";
import { profileData } from "@/data/profileData";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/utils/animationVariants";
import BrutalistGrid from "@/components/BrutalistGrid";
import BrutalistHeading from "@/components/BrutalistHeading";
import BrutalistCard from "@/components/BrutalistCard";
import BrutalistBulletList from "@/components/BrutalistBulletList";
import BrutalistButton from "@/components/BrutalistButton";

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

  // Memoize skill proficiencies to avoid recalculation
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

    // Filter to include skills from keySkills
    return allProficiencies
      .filter((item) => keySkills.includes(item.skill))
      .sort((a, b) => b.percentage - a.percentage); // Sort by percentage (highest first)
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

  // Get the top 4 skills for the main display
  const topSkills = skillProficiencies.slice(0, 4);
  // Get the remaining skills for the secondary display
  const otherSkills = skillProficiencies.slice(4);

  return (
    <PageTransition>
      <div className="min-h-screen pt-16 pb-16 relative">
        {/* Background grid */}
        <BrutalistGrid opacity={3} animate={true} rows={16} columns={16} />

        <section className="py-16 px-4 clean-bg relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <header className="mb-16 text-center">
              <BrutalistHeading level={1} align="center">
                My Skills
              </BrutalistHeading>

              <motion.div
                className="text-lg md:text-xl text-center mt-8 mb-8 max-w-3xl mx-auto font-serif"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
              >
                I&apos;ve acquired a diverse set of skills throughout my journey
                as a developer. Here&apos;s a breakdown of my technical
                expertise and competencies.
              </motion.div>

              <div className="brutalist-divider mb-8"></div>
            </header>

            {/* Top Skills Overview - single row */}
            <motion.div
              className="mb-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <BrutalistHeading level={2} withDivider={true} align="center">
                Key Proficiencies
              </BrutalistHeading>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {topSkills.map((skill, index) => (
                  <BrutalistCard
                    key={skill.skill}
                    className="text-center p-6"
                    shadow="medium"
                    variant="secondary"
                    animate={true}
                  >
                    <h3 className="text-2xl mb-2">{skill.skill}</h3>
                    <div className="text-lg font-mono mb-4 text-[var(--foreground-tertiary)]">
                      {skill.level}
                    </div>
                    <div className="w-full h-4 border-2 border-[var(--foreground-primary)] relative">
                      <div
                        className="h-full bg-[var(--foreground-primary)]"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                    <div className="mt-2 text-right text-sm font-mono">
                      {skill.percentage}%
                    </div>
                  </BrutalistCard>
                ))}
              </div>
            </motion.div>

            {/* Main content - two columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left column */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <BrutalistHeading level={2} withDivider={true}>
                  Professional Development
                </BrutalistHeading>

                <BrutalistCard
                  className="mb-10"
                  shadow="medium"
                  variant="secondary"
                >
                  <p className="text-[var(--foreground-secondary)] mb-8 font-serif">
                    I&apos;m constantly expanding my skillset to stay current
                    with industry trends and emerging technologies. My approach
                    to learning is both hands-on and theoretical, ensuring a
                    well-rounded understanding of new concepts.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      {relevantInterests.length > 0 && (
                        <BrutalistBulletList
                          title="Core Areas of Interest"
                          items={relevantInterests}
                        />
                      )}
                    </div>

                    <div>
                      <BrutalistBulletList
                        title="Recent Areas of Focus"
                        items={focusAreas}
                      />
                    </div>
                  </div>
                </BrutalistCard>

                {/* Additional Skills - if there are more than 4 */}
                {otherSkills.length > 0 && (
                  <>
                    <BrutalistHeading level={2} withDivider={true}>
                      Additional Proficiencies
                    </BrutalistHeading>

                    <BrutalistCard shadow="small" variant="tertiary">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {otherSkills.map((skill) => (
                          <div
                            key={skill.skill}
                            className="border-2 border-[var(--foreground-primary)] p-3 flex justify-between items-center"
                          >
                            <span className="font-mono">{skill.skill}</span>
                            <span className="text-[var(--foreground-tertiary)] text-sm">
                              {skill.level}
                            </span>
                          </div>
                        ))}
                      </div>
                    </BrutalistCard>
                  </>
                )}
              </motion.div>

              {/* Right column */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {hasSkills && (
                  <>
                    <BrutalistHeading level={2} withDivider={true}>
                      Technical Expertise
                    </BrutalistHeading>

                    <div className="space-y-8">
                      {Object.entries(skillCategories).map(
                        ([category, skills]) => (
                          <BrutalistCard
                            key={category}
                            shadow="medium"
                            variant="primary"
                          >
                            <BrutalistHeading level={3} className="!mb-6">
                              {category}
                            </BrutalistHeading>

                            <div className="grid grid-cols-2 gap-3">
                              {skills.map((skill) => (
                                <div
                                  key={skill}
                                  className="border-2 border-[var(--foreground-primary)] p-3"
                                >
                                  <span className="font-mono text-[var(--foreground-primary)]">
                                    {skill}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </BrutalistCard>
                        )
                      )}
                    </div>

                    <div className="mt-12 text-center">
                      <BrutalistButton
                        href="/projects"
                        variant="outline"
                        size="medium"
                      >
                        See Skills in Action
                      </BrutalistButton>
                    </div>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
