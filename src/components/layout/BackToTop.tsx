"use client";

import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

/** Floating back-to-top button */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
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
        zIndex: 1000,
      }}
      aria-label="Back to top"
    >
      <FiArrowUp size={20} />
    </button>
  );
}
