"use client";

import Head from "next/head";
import { usePathname } from "next/navigation";
import { profileData } from "@/data/profileData";

interface CustomHeadProps {
  title?: string;
  description?: string;
}

export default function CustomHead({
  title,
  description = "Welcome to Barney Jesse's portfolio - A creative web developer with expertise in Next.js, React, and modern frontend technologies.",
}: CustomHeadProps) {
  const pathname = usePathname();

  // Generate title based on current path if not provided
  const generateTitle = () => {
    if (title) return `${title} | Barney Jesse`;

    // Default titles based on path
    const pageTitles: Record<string, string> = {
      "/": "Barney Jesse | Web Developer & Designer",
      "/about": "About Me | Barney Jesse",
      "/projects": "Projects | Barney Jesse",
      "/skills": "Skills & Expertise | Barney Jesse",
      "/contact": "Contact Me | Barney Jesse",
    };

    return pageTitles[pathname] || "Barney Jesse | Web Developer & Designer";
  };

  return (
    <Head>
      <title>{generateTitle()}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content={profileData.name} />
      <meta
        name="keywords"
        content="web developer, designer, Next.js, React, TypeScript, frontend developer"
      />

      {/* Open Graph */}
      <meta property="og:title" content={generateTitle()} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://barneys-portfolio.vercel.app${pathname}`}
      />
      <meta property="og:site_name" content="Barney Jesse Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={generateTitle()} />
      <meta name="twitter:description" content={description} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Theme */}
      <meta name="theme-color" content="#0070f3" />
    </Head>
  );
}
