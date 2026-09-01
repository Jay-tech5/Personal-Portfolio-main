"use client";

import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { BACK_TO_TOP_THRESHOLD, Z_INDEX } from "@/constants";

/** Floating back-to-top button */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setVisible(window.scrollY > BACK_TO_TOP_THRESHOLD);
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="position-fixed btn-gradient border-0 d-flex align-items-center justify-content-center"
      style={{
        bottom: "2rem",
        right: "2rem",
        width: 48,
        height: 48,
        borderRadius: "50%",
        padding: 0,
        zIndex: Z_INDEX.BACK_TO_TOP,
      }}
      aria-label="Back to top"
    >
      <FiArrowUp size={20} />
    </button>
  );
}
