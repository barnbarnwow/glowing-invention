import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata: Metadata = {
  title: "Your Name | Web Developer & Designer",
  description:
    "Personal portfolio website showcasing my projects and skills as a web developer and designer.",
  // You can add more metadata here like open graph images, etc.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
