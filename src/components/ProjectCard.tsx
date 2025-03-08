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
      style={{ willChange: "opacity" }}
      whileHover={{
        y: -3,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
    >
      <motion.div className="h-full" variants={containerVariants}>
        <motion.div
          className="h-48 bg-[var(--background-secondary)] flex items-center justify-center relative group"
          variants={itemVariants}
          style={{ willChange: "opacity" }}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          ) : (
            <div className="text-4xl text-[var(--foreground-tertiary)]">
              {title.charAt(0).toUpperCase()}
            </div>
          )}

          <motion.div
            className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <Link
              href={projectUrl}
              className="px-5 py-2.5 bg-[var(--accent-primary)] text-white rounded-md hover:bg-[var(--accent-secondary)] transition-colors duration-300 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </Link>
          </motion.div>
        </motion.div>

        <motion.div className="p-6" variants={itemVariants}>
          <motion.h3 className="text-xl font-bold mb-3 text-[var(--foreground-primary)]">
            {title}
          </motion.h3>
          <motion.p className="text-[var(--foreground-secondary)] mb-4">
            {description}
          </motion.p>
          <motion.div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--accent-tertiary)] text-[var(--foreground-primary)]"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
