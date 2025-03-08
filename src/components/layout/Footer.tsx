"use client";

import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Text } from "../ui/Text";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface SocialLink {
  platform: string;
  href: string;
  icon: React.ReactNode;
}

interface FooterProps {
  copyright?: string;
  links?: FooterLink[];
  social?: SocialLink[];
  className?: string;
}

// Default footer links
const defaultLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

// Default year for copyright
const currentYear = new Date().getFullYear();

export function Footer({
  copyright = `© ${currentYear} Portfolio. All rights reserved.`,
  links = defaultLinks,
  social = [],
  className = "",
}: FooterProps) {
  return (
    <footer
      className={`w-full bg-white dark:bg-gray-900 border-t-2 border-black dark:border-white py-8 ${className}`}
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo/Copyright Section */}
          <div>
            <Link
              href="/"
              className="text-xl uppercase tracking-wider font-sans"
            >
              Portfolio
            </Link>
            <Text variant="small" className="mt-4">
              {copyright}
            </Text>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-sans uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:underline uppercase text-sm"
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Section */}
          {social.length > 0 && (
            <div>
              <h3 className="text-lg font-sans uppercase tracking-wider mb-4">
                Connect
              </h3>
              <div className="flex space-x-4">
                {social.map((item) => (
                  <a
                    key={item.platform}
                    href={item.href}
                    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.platform}
                  >
                    {item.icon || item.platform}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
}
