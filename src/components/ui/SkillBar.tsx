"use client";

import { useInView } from "@/hooks/useScrollProgress";

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

/** Animated horizontal skill proficiency bar */
export default function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  const { setRef, inView } = useInView(0.3);

  return (
    <div className="mb-5" ref={setRef}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-[var(--text-muted)]">{level}%</span>
      </div>
      <div
        className="h-2 rounded-full overflow-hidden"
        style={{ background: "var(--glass-border)" }}
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency`}
      >
        <div
          className="skill-bar-fill h-full rounded-full"
          style={{
            width: inView ? `${level}%` : "0%",
            background: "var(--gradient-primary)",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}
