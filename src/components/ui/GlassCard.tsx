"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

/** Glassmorphism card — hover only (AOS handles scroll reveals to avoid double animation) */
export default function GlassCard({
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
