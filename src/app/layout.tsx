import type { Metadata } from "next";
import { Layout } from "@/components/layout/Layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modern Portfolio",
  description: "A modern portfolio website built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
