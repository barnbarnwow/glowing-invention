"use client";

import React from "react";
import { PageLayout, Section, ProjectCard } from "@/components";
import { projects } from "@/data/projectsData";

export default function ProjectsPage() {
  return (
    <PageLayout
      title="My Projects"
      centerTitle={true}
      description="A showcase of my recent work and projects"
    >
      <Section gridLayout="3-col" marginBottom="none">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            projectUrl={project.projectUrl}
            imageUrl={project.imageUrl}
          />
        ))}
      </Section>
    </PageLayout>
  );
}
