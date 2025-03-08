import React from "react";
import { profileData } from "@/data/profileData";

export default function BiographyContent() {
  return (
    <div className="card bg-[var(--background-tertiary)] p-8 h-full shadow-xl border border-[var(--border-color)]">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--foreground-primary)] border-b border-[var(--border-color)] pb-3">
        About Me
      </h2>
      <div className="space-y-4">
        {/* Map through biography paragraphs */}
        {profileData.bioParagraphs.map((paragraph, index) => (
          <p key={index} className="text-lg text-[var(--foreground-secondary)]">
            {paragraph}
          </p>
        ))}

        {/* Education section - only show if there are education items */}
        {profileData.education.length > 0 && (
          <div className="pt-4 border-t border-[var(--border-color)] mt-6">
            <h3 className="text-xl font-semibold mb-3 text-[var(--foreground-primary)]">
              Education
            </h3>
            {profileData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <p className="font-medium text-[var(--foreground-primary)] text-lg">
                  {edu.degree}
                </p>
                <p className="text-[var(--foreground-secondary)]">
                  {edu.institution},{" "}
                  <span className="text-[var(--accent-primary)]">
                    {edu.years}
                  </span>
                </p>
                {edu.description && (
                  <p className="text-[var(--foreground-tertiary)] text-sm mt-1">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Interests section - only show if there are interests */}
        {profileData.interests.length > 0 && (
          <div className="pt-4 border-t border-[var(--border-color)] mt-6">
            <h3 className="text-xl font-semibold mb-3 text-[var(--foreground-primary)]">
              Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {profileData.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 bg-[var(--accent-tertiary)]/10 text-[var(--accent-primary)] rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
