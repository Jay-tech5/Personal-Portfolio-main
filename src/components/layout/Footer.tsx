"use client";

import { navLinks, personalInfo, socialLinks } from "@/data/portfolio";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiHeart,
} from "react-icons/fi";
import BackToTop from "./BackToTop";

const iconMap: Record<string, React.ReactNode> = {
  github: <FiGithub size={20} />,
  linkedin: <FiLinkedin size={20} />,
  twitter: <FiTwitter size={20} />,
  email: <FiMail size={20} />,
};

/** Site footer with social links, quick nav, and copyright */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="section-padding border-top"
      style={{ borderColor: "var(--glass-border)", background: "var(--bg-secondary)" }}
      role="contentinfo"
    >
      <div className="section-container">
        <div className="row g-4 g-lg-5 mb-5">
          {/* Brand column */}
          <div className="col-lg-4">
            <a href="#home" className="text-decoration-none fw-bold fs-4 gradient-text">
              {personalInfo.name}
            </a>
            <p className="text-[var(--text-secondary)] mt-3 mb-4 small leading-relaxed">
              {personalInfo.tagline}
            </p>
            <div className="d-flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center justify-content-center rounded-circle text-[var(--text-secondary)]"
                  style={{
                    width: 40,
                    height: 40,
                    background: "var(--glass-bg)",
                    border: "1px solid var(--glass-border)",
                    transition: "all 0.3s ease",
                  }}
                  aria-label={link.label}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--accent-primary)";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--glass-bg)";
                    e.currentTarget.style.color = "";
                  }}
                >
                  {iconMap[link.icon]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="col-6 col-lg-4">
            <h3 className="fs-6 fw-semibold mb-4 text-uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="list-unstyled mb-0">
              {navLinks.map((link) => (
                <li key={link.href} className="mb-2">
                  <a
                    href={link.href}
                    className="text-decoration-none text-[var(--text-secondary)] small hover-text-accent"
                    style={{ transition: "color 0.2s" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="col-6 col-lg-4">
            <h3 className="fs-6 fw-semibold mb-4 text-uppercase tracking-wider">
              Get In Touch
            </h3>
            <ul className="list-unstyled mb-0 text-[var(--text-secondary)] small">
              {personalInfo.email && (
                <li className="mb-2">
                  <a href={`mailto:${personalInfo.email}`} className="text-decoration-none text-[var(--text-secondary)]">
                    {personalInfo.email}
                  </a>
                </li>
              )}
              {personalInfo.phone && <li className="mb-2">{personalInfo.phone}</li>}
              {personalInfo.location && <li>{personalInfo.location}</li>}
            </ul>
          </div>
        </div>

        <div
          className="pt-4 d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2 border-top"
          style={{ borderColor: "var(--glass-border)" }}
        >
          <p className="text-[var(--text-muted)] small mb-0">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-[var(--text-muted)] small mb-0 d-flex align-items-center gap-1">
            Built with <FiHeart className="text-danger" size={14} aria-hidden="true" /> using React & Next.js
          </p>
        </div>
      </div>

      <BackToTop />
    </footer>
  );
}
