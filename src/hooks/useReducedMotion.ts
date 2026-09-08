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

/** True on narrow viewports where the landing video should stay off */
export function useLiteMode() {
  const [lite, setLite] = useState(false);

  useEffect(() => {
    const update = () => {
      setLite(window.innerWidth < 768);
    };

    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  return lite;
}
