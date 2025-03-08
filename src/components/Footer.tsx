import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-[var(--background-secondary)] text-[var(--foreground-primary)] text-center border-t border-[var(--border-color)]">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center space-x-6 mb-6">
          {/* Social Media Icons Placeholders */}
          {[
            { name: "GitHub", url: "#" },
            { name: "LinkedIn", url: "#" },
            { name: "Twitter", url: "#" },
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              className="text-[var(--foreground-secondary)] hover:text-[var(--accent-primary)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.name}
            </a>
          ))}
        </div>
        <div className="mb-4">
          <nav className="flex flex-wrap justify-center gap-6 mb-4">
            <Link
              href="/"
              className="text-[var(--foreground-secondary)] hover:text-[var(--accent-primary)] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[var(--foreground-secondary)] hover:text-[var(--accent-primary)] transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-[var(--foreground-secondary)] hover:text-[var(--accent-primary)] transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/skills"
              className="text-[var(--foreground-secondary)] hover:text-[var(--accent-primary)] transition-colors"
            >
              Skills
            </Link>
            <Link
              href="/contact"
              className="text-[var(--foreground-secondary)] hover:text-[var(--accent-primary)] transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
        <p className="text-[var(--foreground-tertiary)]">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
