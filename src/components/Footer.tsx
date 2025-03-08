import React from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { profileData } from "@/data/profileData";

export default function Footer() {
  return (
    <footer className="py-6 px-4 bg-[var(--background-primary)] border-t-2 border-[var(--foreground-primary)]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section - Copyright & Credit */}
          <div className="text-left mb-4 md:mb-0">
            <p className="text-xs text-[var(--foreground-tertiary)] font-serif">
              © {new Date().getFullYear()} {profileData.name}. All rights
              reserved.
            </p>
            <p className="text-xs text-[var(--foreground-tertiary)] mt-1 font-serif">
              Crafted with Next.js & Tailwind CSS
            </p>
          </div>

          {/* Right Section - Navigation & Theme Toggle */}
          <div className="flex flex-col items-end">
            <div className="mb-4">
              <nav className="flex flex-wrap justify-end gap-5 text-sm">
                <Link
                  href="/"
                  className="brutalist-transition hover:text-[var(--foreground-primary)]"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="brutalist-transition hover:text-[var(--foreground-primary)]"
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className="brutalist-transition hover:text-[var(--foreground-primary)]"
                >
                  Projects
                </Link>
                <Link
                  href="/skills"
                  className="brutalist-transition hover:text-[var(--foreground-primary)]"
                >
                  Skills
                </Link>
                <Link
                  href="/contact"
                  className="brutalist-transition hover:text-[var(--foreground-primary)]"
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
                    className="brutalist-transition hover:text-[var(--foreground-primary)] text-sm"
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
