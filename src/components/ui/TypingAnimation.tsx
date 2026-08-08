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
    if (!texts || texts.length === 0) return;
    const current = texts[textIndex % texts.length];

    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (charIndex < current.length) {
        timer = setTimeout(() => {
          setDisplayText(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, speed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setDisplayText(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, speed / 2);
      } else {
        setIsDeleting(false);
        setTextIndex((i) => (i + 1) % texts.length);
      }
    }

    return () => clearTimeout(timer);
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
