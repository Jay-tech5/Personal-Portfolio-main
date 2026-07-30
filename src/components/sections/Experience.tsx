"use client";

import { experiences } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { FiBriefcase, FiMapPin } from "react-icons/fi";

/** Experience timeline section */
export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding"
      style={{ background: "var(--bg-secondary)" }}
      aria-labelledby="experience-heading"
    >
      <div className="section-container">
        <SectionHeading
          subtitle="Experience"
          title="Work Journey"
          description="My professional experience and the roles I've held along the way."
        />

        <div className="position-relative">
          <div className="timeline-line d-none d-md-block" aria-hidden="true" />

          <div className="d-flex flex-column gap-4">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`row g-0 ${index % 2 === 0 ? "" : "flex-row-reverse"}`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                <div className="col-md-6 px-md-4 mb-3 mb-md-0">
                  <GlassCard delay={index * 0.1}>
                    <div className="d-flex align-items-start gap-3 mb-3">
                      <div
                        className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                        style={{
                          width: 48,
                          height: 48,
                          background: "var(--gradient-primary)",
                        }}
                        aria-hidden="true"
                      >
                        <FiBriefcase className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="fs-5 fw-bold mb-1">{exp.role}</h3>
                        <p className="text-[var(--accent-primary)] fw-semibold mb-1">
                          {exp.company}
                        </p>
                        <p className="text-[var(--text-muted)] small mb-0">{exp.duration}</p>
                        {exp.location && (
                          <p className="text-[var(--text-muted)] small d-flex align-items-center gap-1 mt-1 mb-0">
                            <FiMapPin size={12} />
                            {exp.location}
                          </p>
                        )}
                      </div>
                    </div>

                    <ul className="mb-0 ps-3">
                      {exp.responsibilities.map((item, i) => (
                        <li
                          key={`${exp.id}-resp-${i}`}
                          className="text-[var(--text-secondary)] small mb-2"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>

                {/* Spacer for alternating layout on desktop */}
                <div className="col-md-6 d-none d-md-block" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
