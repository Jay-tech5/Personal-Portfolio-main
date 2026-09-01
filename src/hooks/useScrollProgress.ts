"use client";

import { useEffect, useState, useRef } from "react";
import { DEBOUNCE_DELAY } from "@/constants";

/** Tracks vertical scroll progress as a percentage (0–100) with throttle */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const lastUpdateRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      // Throttle updates to 100ms to reduce state updates
      if (now - lastUpdateRef.current < DEBOUNCE_DELAY.SCROLL) return;

      lastUpdateRef.current = now;
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(pct, 100));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}

/** Returns true when element is in viewport */
export function useInView(threshold = 0.2) {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return { setRef, inView };
}
