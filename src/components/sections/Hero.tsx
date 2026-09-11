"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import TypingAnimation from "@/components/ui/TypingAnimation";
import { FiDownload } from "react-icons/fi";
import { ANIMATION_DELAY, ANIMATION_DURATION } from "@/constants";

/** Hero section with profile, typing animation, and CTAs */
export default function Hero() {
  return (
    <section
      id="home"
      className="section-padding hero-section d-flex align-items-center min-vh-100"
      aria-labelledby="hero-heading"
    >
      <div className="section-container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7 order-2 order-lg-1 hero-copy">
            <motion.p
              className="fw-normal mb-2 small text-uppercase tracking-widest"
              style={{ color: "var(--text-secondary)", textShadow: "0 2px 18px rgba(15, 23, 42, 0.5)" }}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              id="hero-heading"
              className="display-3 fw-normal mb-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            <motion.div
              className="fs-4 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.15, ease: "easeOut" }}
            >
              <TypingAnimation texts={personalInfo.roles} className="fw-medium" />
            </motion.div>

            <motion.p
              className="mb-4 lead text-(--text-secondary)"
              style={{ maxWidth: 540, textShadow: "0 2px 18px rgba(15, 23, 42, 0.45)" }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.22, ease: "easeOut" }}
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="hero-ctas d-flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.28, ease: "easeOut" }}
            >
              <a href={personalInfo.resumeUrl} className="btn-gradient" download aria-label="Download resume">
                <FiDownload size={18} />
                Download Resume
              </a>
            </motion.div>
          </div>

          <div className="col-lg-5 order-1 order-lg-2 d-flex justify-content-center">
            <motion.div
              className="hero-avatar-wrap position-relative animate-float"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.6, delay: 0.25, ease: "easeOut" }}
            >
              <div
                className="position-absolute rounded-circle animate-pulse-glow"
                style={{
                  top: "50%",
                  left: "50%",
                  width: "110%",
                  height: "110%",
                  transform: "translate(-50%, -50%)",
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
                  src="/profile/luffy-profile.png"
                  alt={`${personalInfo.name} profile photo`}
                  width={280}
                  height={280}
                  priority
                  className="object-fit-cover w-100 h-100"
                />
              </div>

              {[
                { icon: "⚡", label: "Lightning bolt" },
                { icon: "☁️", label: "Cloud" },
                { icon: "💻", label: "Computer" },
              ].map((item, i) => {
                const delays = [
                  ANIMATION_DELAY.FLOATING_ICON_1,
                  ANIMATION_DELAY.FLOATING_ICON_2,
                  ANIMATION_DELAY.FLOATING_ICON_3,
                ];
                return (
                  <motion.span
                    key={item.icon}
                    className={`hero-floating-icon hero-floating-icon--${i === 2 ? "right" : "left"} position-absolute d-flex align-items-center justify-content-center rounded-circle glass-card fs-5`}
                    style={{
                      width: 44,
                      height: 44,
                      top: i === 0 ? "5%" : i === 1 ? "60%" : "30%",
                      left: i === 0 ? "-10%" : i === 1 ? "-15%" : "auto",
                      right: i === 2 ? "-10%" : "auto",
                    }}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: ANIMATION_DURATION.FLOATING_ICON / 1000,
                      repeat: Infinity,
                      delay: delays[i] / 1000,
                    }}
                    aria-label={item.label}
                  >
                    {item.icon}
                  </motion.span>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
