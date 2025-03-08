"use client";

import React from "react";
import Image from "next/image";
import { profileData } from "@/data/profileData";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariantsReverse,
} from "@/utils/animationVariants";
import Card from "./Card";

export default function ProfileImage() {
  // Check if the image is an external URL or local path
  const isExternalImage = profileData.profileImage?.startsWith("http");

  return (
    <Card useProximityBorder={true} className="p-0" liftEffect={true}>
      <div className="p-8 h-full flex flex-col items-center justify-center">
        {/* Use a non-visible container for animation coordination */}
        <motion.div
          variants={containerVariants}
          className="contents" // Makes this div have no visual representation
          transition={{
            staggerChildren: 0.05,
            delayChildren: 0.05,
          }}
        >
          {/* Image container with animations from opposite direction */}
          <motion.div
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-[var(--background-secondary)] shadow-lg mb-6 relative profile-image lift-effect"
            variants={itemVariantsReverse}
          >
            {profileData.profileImage ? (
              <Image
                src={profileData.profileImage}
                alt={profileData.name}
                fill
                sizes="(max-width: 768px) 192px, 256px"
                className="object-cover"
                style={{ objectPosition: "center" }}
                priority
                unoptimized={isExternalImage} // Disable Next.js optimization for external URLs
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[var(--foreground-tertiary)]">
                Profile Image
              </div>
            )}
          </motion.div>
          <motion.h3
            className="text-2xl font-bold text-[var(--foreground-primary)] mb-3"
            variants={itemVariantsReverse}
          >
            {profileData.name}
          </motion.h3>
          <motion.p
            className="text-[var(--foreground-secondary)] text-center mb-5"
            variants={itemVariantsReverse}
          >
            {profileData.title}
          </motion.p>
          <motion.div
            className="flex justify-center space-x-5"
            variants={itemVariantsReverse}
          >
            {profileData.socialMedia.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                className="text-[var(--foreground-tertiary)] hover:text-[var(--accent-primary)] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.platform}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Card>
  );
}
