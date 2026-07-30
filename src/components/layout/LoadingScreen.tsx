"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** Brief loading screen — dismisses when page is ready */
export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const maxWait = reducedMotion ? 200 : 600;

    const finish = () => setLoading(false);

    if (document.readyState === "complete") {
      const timer = setTimeout(finish, maxWait);
      return () => clearTimeout(timer);
    }

    const onLoad = () => setTimeout(finish, maxWait);
    window.addEventListener("load", onLoad);
    const fallback = setTimeout(finish, 1200);

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(fallback);
    };
  }, [reducedMotion]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center"
          style={{ background: "var(--bg-primary)", zIndex: 10000 }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0.1 : 0.35 }}
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          <div className="loader-ring mb-4" />
          <p className="gradient-text fs-4 fw-bold mb-0">{personalInfo.name}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
