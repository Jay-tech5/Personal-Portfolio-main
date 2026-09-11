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
          id="about-heading"
          subtitle="About Me"
          title="Who I Am"
          description="Get to know more about my journey, passion, and what drives me."
        />

        <div className="row g-4 g-lg-5 align-items-center">
          <div className="col-lg-7">
            <GlassCard hover={false}>
              <p className="leading-relaxed mb-4 text-(--text-secondary)">
                {personalInfo.about.split("\n\n")[0]}
              </p>
              <p className="leading-relaxed mb-0 text-(--text-secondary)">
                {personalInfo.about.split("\n\n")[1]}
              </p>

              <div className="mt-4 pt-4 border-top d-flex flex-column gap-2" style={{ borderColor: "var(--glass-border)" }}>
                {personalInfo.location && (
                  <div className="d-flex align-items-center gap-3 small text-(--text-secondary)">
                    <FiMapPin className="text-(--accent-primary)" />
                    {personalInfo.location}
                  </div>
                )}
                {personalInfo.email && (
                  <div className="d-flex align-items-center gap-3 small text-(--text-secondary)">
                    <FiMail className="text-(--accent-primary)" />
                    <a href={`mailto:${personalInfo.email}`} className="text-decoration-none text-(--text-secondary)">
                      {personalInfo.email}
                    </a>
                  </div>
                )}
                {personalInfo.phone && (
                  <div className="d-flex align-items-center gap-3 small text-(--text-secondary)">
                    <FiPhone className="text-(--accent-primary)" />
                    {personalInfo.phone}
                  </div>
                )}
              </div>
            </GlassCard>
          </div>

          {/* Animated counters */}
          {counterStats.length > 0 && (
            <div className="col-lg-5">
              <div className="row g-3">
                {counterStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={counterStats.length === 3 ? "col-12 col-sm-4 col-lg-12" : "col-6"}
                    data-aos="zoom-in"
                    data-aos-delay={i * 100}
                  >
                    <GlassCard className="text-center py-3 px-3">
                      <div className="fs-3 fw-bold gradient-text mb-1">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <p className="small mb-0 fw-medium text-(--text-muted)">{stat.label}</p>
                    </GlassCard>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
