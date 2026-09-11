"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "@/data/portfolio";
import { FiMenu, FiX } from "react-icons/fi";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Z_INDEX, SCROLL_OFFSET_THRESHOLD, NAV_ACTIVE_SECTION_OFFSET } from "@/constants";

/** Responsive sticky navigation with mobile hamburger menu */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const reducedMotion = useReducedMotion();
  const ticking = useRef(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!menuOpen) return;

    firstMenuLinkRef.current?.focus();

    const handleMenuKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) return;

      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleMenuKeyDown);
    return () => document.removeEventListener("keydown", handleMenuKeyDown);
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <header
      className="site-header position-fixed top-0 start-0 w-100"
      style={{ zIndex: Z_INDEX.NAVBAR, height: "var(--nav-height)" }}
      role="banner"
    >
      <nav
        className={`site-nav h-100 d-flex align-items-center${scrolled ? " site-nav--scrolled" : ""}`}
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
              ref={menuButtonRef}
              type="button"
              className="d-lg-none btn p-2 border-0 d-flex align-items-center justify-content-center nav-icon-btn"
              onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
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
            ref={menuRef}
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
                    ref={link === navLinks[0] ? firstMenuLinkRef : undefined}
                    href={link.href}
                    onClick={closeMenu}
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
