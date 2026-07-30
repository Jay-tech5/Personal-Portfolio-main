"use client";

import { useEffect, useState } from "react";

interface TypingAnimationProps {
  texts: string[];
  speed?: number;
  pauseDuration?: number;
  className?: string;
}

/** Cycles through strings with a typewriter effect */
export default function TypingAnimation({
  texts,
  speed = 80,
  pauseDuration = 2000,
  className = "",
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < current.length) {
            setDisplayText(current.slice(0, charIndex + 1));
            setCharIndex((c) => c + 1);
          } else {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(current.slice(0, charIndex - 1));
            setCharIndex((c) => c - 1);
          } else {
            setIsDeleting(false);
            setTextIndex((i) => (i + 1) % texts.length);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, pauseDuration]);

  return (
    <span className={className} aria-live="polite">
      {displayText}
      <span className="animate-pulse text-[var(--accent-primary)]" aria-hidden="true">
        |
      </span>
    </span>
  );
}
