"use client";

import React from "react";

type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | "auto-fill";
type GridGap = "none" | "sm" | "md" | "lg";

interface GridProps {
  children: React.ReactNode;
  className?: string;
  cols?: GridCols;
  colsMd?: GridCols;
  colsLg?: GridCols;
  gap?: GridGap;
  items?: "start" | "center" | "end" | "stretch";
  flow?: "row" | "col";
}

export function Grid({
  children,
  className = "",
  cols = 1,
  colsMd = 2,
  colsLg = 3,
  gap = "md",
  items = "stretch",
  flow = "row",
}: GridProps) {
  // Columns based on screen size
  const getColsClass = (colCount: GridCols, prefix = "") => {
    if (colCount === "auto-fill") {
      return `${prefix}grid-cols-auto-fill`;
    }
    return `${prefix}grid-cols-${colCount}`;
  };

  const colsClasses = `
    ${getColsClass(cols)}
    ${colsMd ? `md:${getColsClass(colsMd)}` : ""}
    ${colsLg ? `lg:${getColsClass(colsLg)}` : ""}
  `;

  // Gap between grid items
  const gapClasses = {
    none: "gap-0",
    sm: "gap-2 md:gap-4",
    md: "gap-4 md:gap-6",
    lg: "gap-6 md:gap-8",
  }[gap];

  // Item alignment
  const itemsClasses = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  }[items];

  // Flow direction
  const flowClasses = flow === "col" ? "grid-flow-col" : "grid-flow-row";

  return (
    <div
      className={`grid ${colsClasses} ${gapClasses} ${itemsClasses} ${flowClasses} ${className}`}
    >
      {children}
    </div>
  );
}
