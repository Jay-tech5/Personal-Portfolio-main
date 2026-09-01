"use client";

import { memo, ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

/** Glassmorphism card — hover only (AOS handles scroll reveals to avoid double animation) */
function GlassCardBase({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={`glass-card p-4 ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      className={`glass-card p-4 ${className}`}
      whileHover={
        hover ? { y: -4, transition: { duration: 0.2 } } : undefined
      }
    >
      {children}
    </motion.div>
  );
}

export default memo(GlassCardBase);
