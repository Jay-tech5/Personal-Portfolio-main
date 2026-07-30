"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

/** Reusable section heading with gradient accent */
export default function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const reducedMotion = useReducedMotion();
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div
      className={`mb-12 md:mb-16 max-w-2xl ${alignClass}`}
      data-aos={reducedMotion ? undefined : "fade-up"}
    >
      <span
        className="inline-block text-sm font-semibold uppercase tracking-widest mb-3 gradient-text"
        aria-hidden="true"
      >
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
      {description && (
        <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
