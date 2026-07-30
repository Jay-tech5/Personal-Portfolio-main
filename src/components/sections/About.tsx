"use client";

import { counterStats, personalInfo } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

/** About Me section with bio and animated stats */
export default function About() {
  return (
    <section
      id="about"
      className="section-padding"
      aria-labelledby="about-heading"
      data-aos="fade-up"
    >
      <div className="section-container">
        <SectionHeading
          subtitle="About Me"
          title="Who I Am"
          description="Get to know more about my journey, passion, and what drives me."
        />

        <div className="row g-4 g-lg-5 align-items-center">
          <div className="col-lg-7">
            <GlassCard hover={false}>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                {personalInfo.about.split("\n\n")[0]}
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-0">
                {personalInfo.about.split("\n\n")[1]}
              </p>

              <div className="mt-4 pt-4 border-top d-flex flex-column gap-2" style={{ borderColor: "var(--glass-border)" }}>
                {personalInfo.location && (
                  <div className="d-flex align-items-center gap-3 text-[var(--text-secondary)] small">
                    <FiMapPin className="text-[var(--accent-primary)]" />
                    {personalInfo.location}
                  </div>
                )}
                {personalInfo.email && (
                  <div className="d-flex align-items-center gap-3 text-[var(--text-secondary)] small">
                    <FiMail className="text-[var(--accent-primary)]" />
                    <a href={`mailto:${personalInfo.email}`} className="text-decoration-none text-[var(--text-secondary)]">
                      {personalInfo.email}
                    </a>
                  </div>
                )}
                {personalInfo.phone && (
                  <div className="d-flex align-items-center gap-3 text-[var(--text-secondary)] small">
                    <FiPhone className="text-[var(--accent-primary)]" />
                    {personalInfo.phone}
                  </div>
                )}
              </div>
            </GlassCard>
          </div>

          {/* Animated counters */}
          <div className="col-lg-5">
            <div className="row g-3">
              {counterStats.map((stat, i) => (
                <div key={stat.label} className="col-6" data-aos="zoom-in" data-aos-delay={i * 100}>
                  <GlassCard className="text-center py-4" delay={i * 0.1}>
                    <div className="display-6 fw-bold gradient-text mb-1">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-[var(--text-muted)] small mb-0">{stat.label}</p>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
