"use client";

import React from "react";
import Image from "next/image";
import { profileData } from "@/data/profileData";

export default function ProfileImage() {
  // Check if the image is an external URL or local path
  const isExternalImage = profileData.profileImage?.startsWith("http");

  return (
    <div className="card bg-[var(--background-tertiary)] p-8 h-full flex flex-col items-center justify-center shadow-xl border border-[var(--border-color)]">
      {/* Image container with proper aspect ratio */}
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-[var(--background-secondary)] border-4 border-[var(--accent-primary)] shadow-lg mb-6 relative">
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
      </div>
      <h3 className="text-2xl font-bold text-[var(--foreground-primary)] mb-3">
        {profileData.name}
      </h3>
      <p className="text-[var(--foreground-secondary)] text-center mb-5">
        {profileData.title}
      </p>
      <div className="flex justify-center space-x-5">
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
      </div>
    </div>
  );
}
