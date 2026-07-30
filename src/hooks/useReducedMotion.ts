"use client";

import { useEffect, useState } from "react";

/** Returns true when the user prefers reduced motion */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const init = () => setReduced(mq.matches);
    init();

    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

/** True on touch-first or narrow viewports where heavy effects should be off */
export function useLiteMode() {
  const [lite, setLite] = useState(true);

  useEffect(() => {
    const update = () => {
      const touch =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches;
      const narrow = window.innerWidth < 768;
      setLite(touch || narrow);
    };

    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  return lite;
}
