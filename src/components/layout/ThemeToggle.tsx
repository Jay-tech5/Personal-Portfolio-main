"use client";

import { useTheme } from "@/providers/ThemeProvider";
import { FiMoon, FiSun } from "react-icons/fi";

/** Dark/light mode toggle button */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-full glass-card border-0 d-flex align-items-center justify-content-center"
      style={{ width: 40, height: 40, background: "var(--glass-bg)" }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <FiSun size={18} className="text-warning" />
      ) : (
        <FiMoon size={18} className="text-primary" />
      )}
    </button>
  );
}
