"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  cardVariants,
  containerVariants,
  itemVariants,
} from "@/utils/animationVariants";

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
      className="card bg-[var(--background-tertiary)] rounded-xl overflow-hidden shadow-lg"
      variants={cardVariants}
    >
      <motion.div
        className="h-full"
        variants={containerVariants}
        transition={{
          staggerChildren: 0.1,
          delayChildren: 0.1,
        }}
      >
        <motion.div
          className="h-48 bg-[var(--background-secondary)] flex items-center justify-center relative group"
          variants={itemVariants}
        >
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
        </motion.div>
        <div className="p-6">
          <motion.h3
            className="text-xl font-bold mb-3 text-[var(--foreground-primary)]"
            variants={itemVariants}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-[var(--foreground-secondary)] mb-4"
            variants={itemVariants}
          >
            {description}
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            variants={itemVariants}
          >
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-[var(--accent-tertiary)]/10 text-[var(--accent-primary)] rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link href={projectUrl} className="standard-button outline">
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
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
