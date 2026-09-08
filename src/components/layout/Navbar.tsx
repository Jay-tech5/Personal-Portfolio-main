"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";
import { FiMenu, FiX, FiPlay, FiPause } from "react-icons/fi";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Z_INDEX, SCROLL_OFFSET_THRESHOLD, NAV_ACTIVE_SECTION_OFFSET } from "@/constants";

interface NavbarProps {
  showLiveBackground: boolean;
  onToggleLiveBackground: () => void;
}

/** Responsive sticky navigation with mobile hamburger menu */
export default function Navbar({ showLiveBackground, onToggleLiveBackground }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const reducedMotion = useReducedMotion();
  const ticking = useRef(false);

  // Cache sections array to avoid recreation on every scroll
  const sectionsRef = useRef<string[]>([]);
  useEffect(() => {
    sectionsRef.current = navLinks.map((link) => link.href.replace("#", ""));
  }, []);

  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;

    requestAnimationFrame(() => {
      setScrolled(window.scrollY > SCROLL_OFFSET_THRESHOLD);

      for (const id of sectionsRef.current.slice().reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= NAV_ACTIVE_SECTION_OFFSET) {
          setActiveSection(id);
          break;
        }
      }
      ticking.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className="position-fixed top-0 start-0 w-100"
      style={{ zIndex: Z_INDEX.NAVBAR, height: "var(--nav-height)" }}
      role="banner"
    >
      <nav
        className="h-100 d-flex align-items-center"
        style={{
          background: scrolled ? "var(--nav-bg-scrolled)" : "var(--nav-bg)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--glass-border)",
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
        aria-label="Main navigation"
      >
        <div className="section-container d-flex align-items-center justify-content-between w-100">
          <a
            href="#home"
            className="text-decoration-none fw-bold fs-5 gradient-text"
            aria-label={`${personalInfo.name} - Home`}
            onClick={() => setMenuOpen(false)}
          >
            JD<span className="text-(--accent-primary)">.</span>
          </a>

          <ul className="d-none d-lg-flex list-unstyled mb-0 gap-1 align-items-center">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`px-3 py-2 text-decoration-none rounded-pill small fw-medium d-inline-block ${
                      isActive ? "nav-link-active" : "nav-link-inactive"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="d-flex align-items-center gap-3">
            <button
              type="button"
              onClick={onToggleLiveBackground}
              className="p-2 rounded-full glass-card border-0 d-flex align-items-center justify-content-center text-(--text-primary)"
              style={{ width: 40, height: 40, background: "var(--glass-bg)" }}
              aria-label={showLiveBackground ? "Hide live background" : "Show live background"}
              title={showLiveBackground ? "Hide live background" : "Show live background"}
            >
              {showLiveBackground ? <FiPause size={16} /> : <FiPlay size={16} />}
            </button>

            <ThemeToggle />

            <button
              type="button"
              className="d-lg-none btn p-2 border-0 d-flex align-items-center justify-content-center nav-icon-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="d-lg-none position-fixed start-0 w-100 d-flex flex-column"
            style={{
              top: "var(--nav-height)",
              height: "calc(100dvh - var(--nav-height))",
              background: "var(--bg-primary)",
              zIndex: Z_INDEX.NAVBAR_MOBILE_MENU,
              overflowY: "auto",
            }}
            initial={reducedMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="list-unstyled p-4 mb-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="d-block py-3 fs-5 text-decoration-none text-(--text-primary) border-bottom mobile-nav-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
