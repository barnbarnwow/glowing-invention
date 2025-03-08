"use client";

import React, { useMemo } from "react";
import PageTransition from "@/components/PageTransition";
import { profileData } from "@/data/profileData";
import BrutalistHeading from "@/components/BrutalistHeading";
import BrutalistCard from "@/components/BrutalistCard";
import BrutalistButton from "@/components/BrutalistButton";

type ProficiencyLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

interface Skill {
  name: string;
  level: ProficiencyLevel;
  category: "frontend" | "backend" | "business" | "other";
}

export default function SkillsPage() {
  // Get skills from profileData
  const { keySkills } = profileData;

  // Map skills into structured format with categories
  const skills: Skill[] = useMemo(() => {
    const frontendSkills = [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "HTML/CSS",
    ];
    const backendSkills = ["Node.js", "Git", "Python", "Automation"];
    const businessSkills = ["Statistics", "Marketing", "Analytics"];

    return keySkills.map((name) => {
      let category: "frontend" | "backend" | "business" | "other" = "other";
      let level: ProficiencyLevel = "Intermediate";

      if (frontendSkills.includes(name)) {
        category = "frontend";
        // Assign expertise level based on skill name
        if (["React", "JavaScript"].includes(name)) {
          level = "Expert";
        } else if (["Next.js", "HTML/CSS", "Tailwind CSS"].includes(name)) {
          level = "Advanced";
        }
      } else if (backendSkills.includes(name)) {
        category = "backend";
        if (["Git"].includes(name)) {
          level = "Advanced";
        }
      } else if (businessSkills.includes(name)) {
        category = "business";
        if (["Statistics"].includes(name)) {
          level = "Advanced";
        }
      }

      return { name, level, category };
    });
  }, [keySkills]);

  // Group skills by category
  const skillsByCategory = useMemo(() => {
    return {
      frontend: skills.filter((skill) => skill.category === "frontend"),
      backend: skills.filter((skill) => skill.category === "backend"),
      business: skills.filter((skill) => skill.category === "business"),
    };
  }, [skills]);

  // Get top skills
  const topSkills = useMemo(() => {
    return skills
      .filter((skill) => skill.level === "Expert" || skill.level === "Advanced")
      .slice(0, 6);
  }, [skills]);

  return (
    <PageTransition>
      <div className="min-h-screen pt-16 pb-16">
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <BrutalistHeading level={1} align="center">
              Skills
            </BrutalistHeading>

            <div className="brutalist-divider my-8"></div>

            {/* Top Skills */}
            <div className="mb-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {topSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="border-2 border-[var(--foreground-primary)] p-4"
                  >
                    <div className="flex justify-between">
                      <span className="text-lg">{skill.name}</span>
                      <span className="text-[var(--foreground-tertiary)]">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* All Skills */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Frontend */}
              <BrutalistCard variant="primary" className="p-5" shadow="small">
                <h2 className="text-2xl mb-4 tracking-wider">Frontend</h2>
                <ul className="space-y-2">
                  {skillsByCategory.frontend.map((skill) => (
                    <li key={skill.name} className="flex justify-between">
                      <span>{skill.name}</span>
                      <span className="text-[var(--foreground-tertiary)]">
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </BrutalistCard>

              {/* Backend */}
              <BrutalistCard variant="secondary" className="p-5" shadow="small">
                <h2 className="text-2xl mb-4 tracking-wider">
                  Backend & Tools
                </h2>
                <ul className="space-y-2">
                  {skillsByCategory.backend.map((skill) => (
                    <li key={skill.name} className="flex justify-between">
                      <span>{skill.name}</span>
                      <span className="text-[var(--foreground-tertiary)]">
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </BrutalistCard>

              {/* Business */}
              <BrutalistCard variant="tertiary" className="p-5" shadow="small">
                <h2 className="text-2xl mb-4 tracking-wider">Business</h2>
                <ul className="space-y-2">
                  {skillsByCategory.business.map((skill) => (
                    <li key={skill.name} className="flex justify-between">
                      <span>{skill.name}</span>
                      <span className="text-[var(--foreground-tertiary)]">
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </BrutalistCard>
            </div>

            {/* Call to action */}
            <div className="mt-12 text-center">
              <BrutalistButton href="/projects" variant="outline">
                See Skills in Action
              </BrutalistButton>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
