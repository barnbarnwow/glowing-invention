"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrutalistButton from "./BrutalistButton";

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
          <div className="flex-shrink-0 text-3xl tracking-brutalist">
            <Link href="/" className="text-[var(--foreground-primary)]">
              <span className="font-sans">Barney</span>
              <span className="font-sans">Jesse</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center h-full">
            <div className="ml-10 flex items-center space-x-6 h-full">
              {navItems.map((item) => (
                <BrutalistButton
                  key={item.name}
                  href={item.path}
                  size="small"
                  variant={pathname === item.path ? "primary" : "outline"}
                  animate={false}
                  className={
                    pathname === item.path ? "!py-1 !px-3" : "!py-1 !px-3"
                  }
                >
                  {item.name}
                </BrutalistButton>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <div
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 brutalist-border brutalist-shadow brutalist-transition cursor-pointer"
              style={{
                width: "40px",
                height: "40px",
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
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-4 pt-4 pb-4 space-y-4 border-t-2 border-[var(--foreground-primary)] bg-[var(--background-primary)]">
          {navItems.map((item) => (
            <BrutalistButton
              key={item.name}
              href={item.path}
              variant={pathname === item.path ? "primary" : "outline"}
              animate={false}
              fullWidth={true}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </BrutalistButton>
          ))}
        </div>
      </div>
    </nav>
  );
}
