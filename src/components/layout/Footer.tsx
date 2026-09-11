"use client";

import { navLinks, personalInfo, socialLinks } from "@/data/portfolio";
import { FiTwitter, FiMail } from "react-icons/fi";

const iconMap: Record<string, React.ReactNode> = {
  twitter: <FiTwitter size={20} aria-hidden="true" />,
  email: <FiMail size={20} aria-hidden="true" />,
};

/** Site footer with social links, quick nav, and copyright */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="section-padding border-top"
      style={{
        borderColor: "rgba(255, 255, 255, 0.18)",
        background: "rgba(8, 10, 22, 0.18)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
      role="contentinfo"
    >
      <div className="section-container">
        <div className="row g-4 g-lg-5 mb-5">
          {/* Brand column */}
          <div className="col-lg-4">
            <a href="#home" className="text-decoration-none fw-bold fs-4 gradient-text">
              {personalInfo.name}
            </a>
            <p className="mt-3 mb-4 small leading-relaxed text-(--text-secondary)">
              {personalInfo.tagline}
            </p>
            <div className="d-flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center justify-content-center rounded-circle text-(--text-primary) footer-social-link"
                  style={{
                    width: 40,
                    height: 40,
                    background: "rgba(255, 255, 255, 0.12)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    transition: "all 0.2s ease",
                  }}
                  aria-label={link.label}
                >
                  {iconMap[link.icon]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="col-6 col-lg-4">
            <h3 className="fs-6 fw-medium mb-4 text-uppercase tracking-wider text-(--text-primary)">
              Quick Links
            </h3>
            <ul className="list-unstyled mb-0">
              {navLinks.map((link) => (
                <li key={link.href} className="mb-2">
                  <a
                    href={link.href}
                    className="text-decoration-none text-(--text-secondary) small hover-text-accent fw-normal"
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
            <h3 className="fs-6 fw-medium mb-4 text-uppercase tracking-wider text-(--text-primary)">
              Get In Touch
            </h3>
            <ul className="list-unstyled mb-0 small text-(--text-secondary)">
              {personalInfo.email && (
                <li className="mb-2">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-decoration-none text-(--accent-primary) hover:text-white transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </li>
              )}
              {personalInfo.phone && <li className="mb-2 text-(--text-secondary)">{personalInfo.phone}</li>}
              {personalInfo.location && <li className="text-(--text-secondary)">{personalInfo.location}</li>}
            </ul>
          </div>
        </div>

        <div
          className="pt-4 d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2 border-top"
          style={{ borderColor: "rgba(255, 255, 255, 0.15)" }}
        >
          <p className="small mb-0 text-(--text-muted)">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
