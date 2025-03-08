import React from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { profileData } from "@/data/profileData";

export default function Footer() {
  return (
    <footer className="py-6 px-4 bg-[var(--background-primary)] text-[var(--foreground-primary)] text-center border-t border-[var(--border-color)]">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center space-x-6 mb-5">
          {/* Social Media Links from profileData */}
          {profileData.socialMedia.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              className="text-[var(--foreground-secondary)] hover:text-[var(--foreground-primary)] transition-colors text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.platform}
            </a>
          ))}
        </div>
        <div className="mb-5">
          <nav className="flex flex-wrap justify-center gap-5 text-sm">
            <Link
              href="/"
              className="text-[var(--foreground-secondary)] hover:text-[var(--foreground-primary)] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[var(--foreground-secondary)] hover:text-[var(--foreground-primary)] transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-[var(--foreground-secondary)] hover:text-[var(--foreground-primary)] transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/skills"
              className="text-[var(--foreground-secondary)] hover:text-[var(--foreground-primary)] transition-colors"
            >
              Skills
            </Link>
            <Link
              href="/contact"
              className="text-[var(--foreground-secondary)] hover:text-[var(--foreground-primary)] transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-col items-center justify-center">
          {/* Theme Toggle */}
          <div className="mb-3">
            <ThemeToggle />
          </div>
          <p className="text-xs text-[var(--foreground-tertiary)]">
            © {new Date().getFullYear()} {profileData.name}. All rights
            reserved.
          </p>
          <p className="text-xs text-[var(--foreground-tertiary)] mt-1">
            Crafted with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
