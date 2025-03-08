"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
}
