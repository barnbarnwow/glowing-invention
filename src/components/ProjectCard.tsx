"use client";

import React from "react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  projectUrl?: string;
  imageUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  projectUrl = "#",
  imageUrl,
}: ProjectCardProps) {
  return (
    <div className="card bg-[var(--background-tertiary)] rounded-xl overflow-hidden shadow-lg border border-[var(--border-color)] hover:border-[var(--accent-primary)]">
      <div className="h-48 bg-[var(--background-secondary)] flex items-center justify-center relative group">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full"
          />
        ) : (
          <span className="text-[var(--foreground-tertiary)]">
            Project Image
          </span>
        )}
        <div className="absolute inset-0 bg-[var(--accent-primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-[var(--foreground-primary)]">
          {title}
        </h3>
        <p className="text-[var(--foreground-secondary)] mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-[var(--accent-tertiary)]/10 text-[var(--accent-primary)] rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link
          href={projectUrl}
          className="text-[var(--accent-primary)] font-medium hover:underline inline-flex items-center group"
        >
          View Project{" "}
          <span className="ml-1 transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
