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
      className="fixed w-full z-20 bg-[var(--background-primary)] border-b-2 border-[var(--foreground-primary)]"
      style={{ height: "70px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 text-3xl tracking-widest">
            <Link href="/" className="text-[var(--foreground-primary)]">
              <span className="text-[var(--foreground-primary)] font-sans">
                Barney
              </span>
              <span className="text-[var(--foreground-primary)] font-sans">
                Jesse
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center h-full">
            <div className="ml-10 flex items-center space-x-10 h-full">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`px-3 py-1 text-lg tracking-wider transition-all relative ${
                    pathname === item.path
                      ? "text-[var(--background-primary)] bg-[var(--foreground-primary)]"
                      : "text-[var(--foreground-primary)] hover:translate-y(-2px)"
                  }`}
                  style={{
                    boxShadow:
                      pathname === item.path
                        ? "none"
                        : "3px 3px 0 var(--foreground-secondary)",
                    border: "2px solid var(--foreground-primary)",
                  }}
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
              className="inline-flex items-center justify-center p-2 border-2 border-[var(--foreground-primary)]"
              aria-expanded="false"
              style={{
                width: "40px",
                height: "40px",
                boxShadow: "3px 3px 0 var(--foreground-secondary)",
              }}
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
                  strokeLinecap="square"
                  strokeLinejoin="miter"
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
                  strokeLinecap="square"
                  strokeLinejoin="miter"
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
        <div className="px-4 pt-2 pb-3 space-y-3 border-t-2 border-[var(--foreground-primary)] bg-[var(--background-primary)]">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`block px-3 py-2 text-base tracking-wider ${
                pathname === item.path
                  ? "text-[var(--background-primary)] bg-[var(--foreground-primary)]"
                  : "text-[var(--foreground-primary)] border-2 border-[var(--foreground-primary)]"
              }`}
              style={{
                boxShadow:
                  pathname === item.path
                    ? "none"
                    : "3px 3px 0 var(--foreground-secondary)",
              }}
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
