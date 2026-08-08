"use client";


import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import TypingAnimation from "@/components/ui/TypingAnimation";
import { FiDownload, FiMail, FiCloud, FiDatabase } from "react-icons/fi";
import { RiJavaFill } from "react-icons/ri";

/** Hero section with profile, typing animation, and CTAs */
export default function Hero() {

  const badges = [
    { icon: <FiDatabase size={14} />, label: "Data Engineer" },
    { icon: <RiJavaFill size={14} />, label: "Java Developer" },
    { icon: <FiCloud size={14} />, label: "Cloud & DevOps Enthusiast" },
  ];

  return (
    <section
      id="home"
      className="section-padding d-flex align-items-center min-vh-100"
      aria-labelledby="hero-heading"
    >
      <div className="section-container">
        <div className="row align-items-center g-5">
          {/* Text content */}
          <div className="col-lg-7 order-2 order-lg-1">
            <motion.p
              className="text-[var(--accent-primary)] fw-semibold mb-2 small text-uppercase tracking-widest"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              id="hero-heading"
              className="display-3 fw-bold mb-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            <motion.div
              className="fs-4 text-[var(--text-secondary)] mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <TypingAnimation texts={personalInfo.roles} className="fw-medium" />
            </motion.div>

            <motion.p
              className="text-[var(--text-secondary)] mb-4 lead"
              style={{ maxWidth: 520 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {personalInfo.tagline} Passionate about building scalable applications
              and crafting exceptional user experiences.
            </motion.p>

            {/* Role badges */}
            <motion.div
              className="d-flex flex-wrap gap-2 mb-5"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.5,
                  },
                },
              }}
            >
              {badges.map((badge) => (
                <motion.span
                  key={badge.label}
                  className="hero-badge d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small glass-card"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6 },
                    },
                  }}
                >
                  {badge.icon}
                  {badge.label}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="d-flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a href={personalInfo.resumeUrl} className="btn-gradient" download aria-label="Download resume">
                <FiDownload size={18} />
                Download Resume
              </a>
              <a href="#contact" className="btn-outline-glass">
                <FiMail size={18} />
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Profile photo */}
          <div className="col-lg-5 order-1 order-lg-2 d-flex justify-content-center">
            <motion.div
              className="position-relative animate-float"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div
                className="position-absolute top-50 start-50 translate-middle rounded-circle animate-pulse-glow"
                style={{
                  width: "110%",
                  height: "110%",
                  background: "var(--gradient-primary)",
                  filter: "blur(30px)",
                }}
                aria-hidden="true"
              />
              <div
                className="position-relative rounded-circle overflow-hidden"
                style={{
                  width: 280,
                  height: 280,
                  border: "3px solid transparent",
                  backgroundImage:
                    "linear-gradient(var(--bg-primary), var(--bg-primary)), var(--gradient-primary)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }}
              >
                <Image
                  src="/profile/profile.png"
                  alt={`${personalInfo.name} profile photo`}
                  width={280}
                  height={280}
                  priority
                  className="object-fit-cover w-100 h-100"
                />
              </div>

              {/* Floating icons */}
              {["⚡", "☁️", "💻"].map((icon, i) => (
                <motion.span
                  key={icon}
                  className="position-absolute d-flex align-items-center justify-content-center rounded-circle glass-card fs-5"
                  style={{
                    width: 44,
                    height: 44,
                    top: i === 0 ? "5%" : i === 1 ? "60%" : "30%",
                    left: i === 0 ? "-10%" : i === 1 ? "-15%" : "auto",
                    right: i === 2 ? "-10%" : "auto",
                  }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  aria-hidden="true"
                >
                  {icon}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
