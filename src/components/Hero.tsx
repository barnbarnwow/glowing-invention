"use client";

import Link from "next/link";
import { profileData } from "@/data/profileData";
import Button from "../components/Button";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center px-4 texture">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="text-[var(--accent-primary)] italic">
            {profileData.name}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-[var(--foreground-secondary)] mb-8">
          {profileData.title}
        </p>
        <p className="text-lg text-[var(--foreground-tertiary)] mb-12 max-w-2xl mx-auto">
          {profileData.bioParagraphs[0]}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/about" variant="primary">
            About Me
          </Button>
          <Button href="/projects" variant="secondary">
            View My Work
          </Button>
          <Button href="/contact" variant="outline">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
