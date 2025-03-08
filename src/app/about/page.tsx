"use client";

import React from "react";
import {
  PageLayout,
  Section,
  ProfileImage,
  BiographyContent,
  Interests,
  Separator,
} from "@/components";

export default function AboutPage() {
  return (
    <PageLayout
      title="About Me"
      centerTitle={true}
      description="Web developer and designer with a passion for creating engaging digital experiences"
      titleMarginBottom="mb-6"
    >
      <Section gridLayout="sidebar-main" className="mt-2">
        {/* Left column - Profile & Interests */}
        <div className="flex flex-col space-y-6">
          <ProfileImage />
          <Interests />
        </div>

        {/* Right column - Bio */}
        <div className="md:col-span-2">
          <BiographyContent />
        </div>
      </Section>
    </PageLayout>
  );
}
