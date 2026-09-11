"use client";

import { memo } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SectionHeadingProps {
  id?: string;
  subtitle: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

/** Reusable section heading with gradient accent */
function SectionHeadingBase({
  id,
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
        className="inline-block px-3 py-1 mb-3 rounded-full text-xs md:text-sm font-medium uppercase tracking-widest text-(--accent-primary) bg-[rgba(99,102,241,0.16)] border border-[rgba(99,102,241,0.4)] backdrop-blur-md shadow-sm"
      >
        {subtitle}
      </span>
      <h2 id={id} className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-3 text-shadow-sm text-(--text-primary)">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg leading-relaxed font-normal text-(--text-secondary)">
          {description}
        </p>
      )}
    </div>
  );
}

export default memo(SectionHeadingBase);
