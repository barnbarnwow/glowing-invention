"use client";

import React, { useMemo } from "react";
import { PageLayout, Section, ContentCard, Button } from "@/components";
import { profileData } from "@/data/profileData";
import {
  generateSkillsData,
  getSkillsByCategory,
  getTopSkills,
  focusAreas,
} from "@/data/skillsData";

export default function SkillsPage() {
  // Generate structured skills data
  const skills = useMemo(() => generateSkillsData(), []);

  // Group skills by category
  const skillsByCategory = useMemo(() => getSkillsByCategory(skills), [skills]);

  // Get top skills for proficiency display
  const topSkills = useMemo(() => getTopSkills(skills), [skills]);

  return (
    <PageLayout
      meta={{
        title: "My Skills & Expertise",
        description:
          "Explore my professional skills across various technologies, tools, and methodologies.",
      }}
    >
      {/* Technical Expertise */}
      <Section
        title="Technical Expertise"
        gridLayout="3-col"
        marginBottom="large"
      >
        {/* Frontend */}
        <ContentCard
          title="Frontend"
          contentType="skill-list"
          items={skillsByCategory.frontend}
          dataCategory="frontend-skills"
          variant="primary"
          shadow="small"
        />

        {/* Backend */}
        <ContentCard
          title="Backend & Tools"
          contentType="skill-list"
          items={skillsByCategory.backend}
          dataCategory="backend-skills"
          variant="secondary"
          shadow="small"
        />

        {/* Business */}
        <ContentCard
          title="Business"
          contentType="skill-list"
          items={skillsByCategory.business}
          dataCategory="business-skills"
          variant="tertiary"
          shadow="small"
        />
      </Section>

      {/* Proficiency Levels */}
      <Section title="Proficiency Levels" marginBottom="large">
        <ContentCard
          contentType="progress-bars"
          items={topSkills}
          dataCategory="proficiency-levels"
        />
      </Section>

      {/* Professional Development */}
      <Section
        title="Professional Development"
        gridLayout="2-col"
        marginBottom="large"
      >
        <ContentCard
          contentType="bullet-list"
          title="Focus Areas"
          items={focusAreas}
          dataCategory="focus-areas"
        />

        <ContentCard
          contentType="bullet-list"
          title="Related Interests"
          items={profileData.interests.slice(0, 4)}
          dataCategory="interests"
        />
      </Section>

      {/* Call to action */}
      <div className="mt-12 text-center">
        <Button as="link" href="/projects" variant="outline">
          View My Projects
        </Button>
      </div>
    </PageLayout>
  );
}
