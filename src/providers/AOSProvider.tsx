"use client";

import { useEffect } from "react";
import AOS from "aos";

/** Initializes AOS scroll reveal animations on mount */
export default function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-out-quad",
      once: true,
      offset: 30,
      disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  return <>{children}</>;
}
