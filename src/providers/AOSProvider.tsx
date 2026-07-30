"use client";

import { useEffect } from "react";
import AOS from "aos";

/** Initializes AOS scroll reveal animations on mount */
export default function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      disable: "phone",
    });
  }, []);

  return <>{children}</>;
}
