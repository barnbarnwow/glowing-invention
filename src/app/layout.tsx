import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";
import { profileData } from "@/data/profileData";

export const metadata: Metadata = {
  title: {
    template: "%s | Barney Jesse",
    default: "Barney Jesse | Web Developer & Designer",
  },
  description:
    "Welcome to Barney Jesse's portfolio - A creative web developer with expertise in Next.js, React, and modern frontend technologies.",
  keywords:
    "web developer, designer, Next.js, React, TypeScript, frontend developer",
  authors: [{ name: profileData.name }],
  creator: profileData.name,
  openGraph: {
    title: "Barney Jesse | Web Developer & Designer",
    description:
      "Creative web developer specializing in modern frontend development.",
    url: "https://barneys-portfolio.vercel.app/",
    siteName: "Barney Jesse Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0070f3" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="overflow-hidden relative z-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
