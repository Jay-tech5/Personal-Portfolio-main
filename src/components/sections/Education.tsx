"use client";

import { education } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { FiBookOpen, FiCalendar } from "react-icons/fi";

/** Education section with degree cards */
export default function Education() {
  return (
    <section
      id="education"
      className="section-padding"
      aria-labelledby="education-heading"
    >
      <div className="section-container">
        <SectionHeading
          subtitle="Education"
          title="Academic Background"
          description="My educational qualifications and academic achievements."
        />

        <div className="row g-4 justify-content-center">
          {education.map((edu, i) => (
            <div
              key={edu.id}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <GlassCard className="h-100" delay={i * 0.1}>
                <div className="d-flex align-items-start gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                    style={{
                      width: 52,
                      height: 52,
                      background: "var(--gradient-secondary)",
                    }}
                    aria-hidden="true"
                  >
                    <FiBookOpen className="text-white" size={22} />
                  </div>
                  <div>
                    <h3 className="fs-5 fw-bold mb-2">{edu.degree}</h3>
                    <p className="text-[var(--accent-primary)] fw-medium mb-2">
                      {edu.university}
                    </p>
                    <p className="text-[var(--text-muted)] small d-flex align-items-center gap-2 mb-2">
                      <FiCalendar size={14} />
                      {edu.year}
                    </p>
                    {edu.description && (
                      <p className="text-[var(--text-secondary)] small mb-0">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
