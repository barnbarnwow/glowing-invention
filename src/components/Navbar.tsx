"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Navigation items with their routes
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className="fixed w-full z-20 bg-transparent backdrop-blur-sm h-16 relative overflow-visible bg-[var(--background-primary)] bg-opacity-80"
      style={{ height: "64px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 font-medium text-lg">
            <Link href="/" className="text-[var(--foreground-primary)]">
              <span className="text-[var(--accent-primary)]">Barney</span>Jesse
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center h-full">
            <div className="ml-10 flex items-center space-x-6 h-full">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`px-2 py-1 text-sm font-medium transition-colors ${
                    pathname === item.path
                      ? "text-[var(--accent-primary)]"
                      : "text-[var(--foreground-secondary)] hover:text-[var(--foreground-primary)]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--foreground-secondary)] hover:text-[var(--foreground-primary)] focus:outline-none"
              aria-expanded="false"
              style={{ width: "36px", height: "36px" }}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-5 w-5`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-5 w-5`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[var(--background-primary)] shadow-sm">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`block px-3 py-2 text-sm font-medium ${
                pathname === item.path
                  ? "text-[var(--accent-primary)]"
                  : "text-[var(--foreground-secondary)] hover:text-[var(--foreground-primary)]"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
