import React from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { profileData } from "@/data/profileData";

export default function Footer() {
  return (
    <footer className="py-6 px-4 bg-[var(--background-primary)] text-[var(--foreground-primary)] border-t border-[var(--border-color)]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section - Copyright & Credit */}
          <div className="text-left mb-4 md:mb-0">
            <p className="text-xs text-[var(--foreground-tertiary)]">
              © {new Date().getFullYear()} {profileData.name}. All rights
              reserved.
            </p>
            <p className="text-xs text-[var(--foreground-tertiary)] mt-1">
              Crafted with Next.js & Tailwind CSS
            </p>
          </div>

          {/* Right Section - Navigation & Theme Toggle */}
          <div className="flex flex-col items-end">
            <div className="mb-4">
              <nav className="flex flex-wrap justify-end gap-5 text-sm">
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

            <div className="flex items-center space-x-4">
              {/* Social Media Links */}
              <div className="flex space-x-3">
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

              {/* Theme Toggle */}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
