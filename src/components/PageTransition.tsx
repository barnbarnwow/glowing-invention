"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { pageVariants } from "@/utils/animationVariants";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const { theme } = useTheme();
  // Only track if we've completed the initial mount animation
  const [hasMounted, setHasMounted] = useState(false);

  // Mark mounted after component first renders
  useEffect(() => {
    if (!hasMounted) {
      // Use a short timeout to ensure we don't set this too early
      const timer = setTimeout(() => {
        setHasMounted(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [hasMounted]);

  return (
    <motion.div
      // Only use pathname as key, don't change keys after first render
      key={pathname}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageVariants}
      className="relative"
    >
      {children}
    </motion.div>
  );
}
