"use client";

import { useEffect, useRef, ReactNode } from "react";

export function Lenis({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scrolling is handled by CSS scroll-behavior: smooth
    // This component exists for future smooth scrolling library integration
    return () => {};
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
