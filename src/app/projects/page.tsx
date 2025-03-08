import React from "react";
import PageTransition from "@/components/PageTransition";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projectsData";

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
        {/* Projects Section */}
        <section className="py-20 px-4 texture">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[var(--foreground-primary)]">
              My Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
