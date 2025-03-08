"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence
      mode="wait"
      initial={true} // Enable initial animation for more impact
      onExitComplete={() => {
        // Scroll to top on page change
        window.scrollTo({ top: 0 });
      }}
    >
      {children}
    </AnimatePresence>
  );
}
