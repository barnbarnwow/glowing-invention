"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cardVariants } from "@/utils/animationVariants";

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
    <motion.div
      className="card bg-[var(--background-tertiary)] rounded-xl overflow-hidden shadow-lg border border-[var(--border-color)] hover:border-[var(--accent-primary)]"
      variants={cardVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
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
        <div className="flex flex-wrap gap-2 mb-6">
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
          className="px-4 py-2 rounded-md bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] font-medium transition-all hover:bg-[var(--accent-primary)]/20 inline-flex items-center"
        >
          View Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}
