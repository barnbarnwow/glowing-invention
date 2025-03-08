import React from "react";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

export default function NotFound() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 texture">
        <h1 className="text-6xl md:text-8xl font-bold text-[var(--accent-primary)] mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[var(--foreground-primary)]">
          Page Not Found
        </h2>
        <p className="text-lg text-[var(--foreground-secondary)] mb-8 text-center max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="gradient-accent text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-lg shadow-[var(--accent-primary)]/20 hover:shadow-[var(--accent-primary)]/30"
        >
          Back to Home
        </Link>
      </div>
    </PageTransition>
  );
}
