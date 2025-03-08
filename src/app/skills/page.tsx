import React from "react";
import PageTransition from "@/components/PageTransition";
import { profileData } from "@/data/profileData";

// Skill Card Component
const SkillCard = ({ skill }: { skill: string }) => (
  <div className="bg-[var(--background-secondary)] p-6 rounded-lg shadow-sm text-center border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-all hover:transform hover:scale-105 group">
    <span className="text-lg font-medium text-[var(--foreground-secondary)] group-hover:text-[var(--accent-primary)] transition-colors">
      {skill}
    </span>
  </div>
);

export default function SkillsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
        {/* Skills Section */}
        <section className="py-20 px-4 gradient-primary">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[var(--foreground-primary)]">
              My Skills
            </h2>

            <div className="card bg-[var(--background-tertiary)] p-8 rounded-xl shadow-xl">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Skill Items */}
                {profileData.keySkills.map((skill) => (
                  <SkillCard key={skill} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
