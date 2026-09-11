"use client";

import { useState } from "react";
import Image from "next/image";
import { certifications } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { FiAward } from "react-icons/fi";

/** Certifications gallery with lightbox-style selection */
export default function Certifications() {
  const [selected, setSelected] = useState(
    certifications.length > 0 ? certifications[0].id : undefined
  );

  const active = certifications.find((c) => c.id === selected) ?? certifications[0];

  if (!active) {
    return (
      <section
        id="certifications"
        className="section-padding"
        style={{ background: "var(--bg-secondary)" }}
        aria-labelledby="certifications-heading"
      >
        <div className="section-container">
          <SectionHeading
            id="certifications-heading"
            subtitle="Certifications"
            title="Credentials & Badges"
            description="Professional certifications validating my expertise."
          />
          <p className="text-center text-(--text-muted)">No certifications available.</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="certifications"
      className="section-padding"
      style={{ background: "var(--bg-secondary)" }}
      aria-labelledby="certifications-heading"
    >
      <div className="section-container">
        <SectionHeading
          id="certifications-heading"
          subtitle="Certifications"
          title="Credentials & Badges"
          description="Professional certifications validating my expertise."
        />

        <div className="row g-4 align-items-center">
          {/* Gallery thumbnails */}
          <div className="col-lg-5" data-aos="fade-right">
            <div className="row g-3">
              {certifications.map((cert) => (
                <div key={cert.id} className="col-6">
                  <button
                    type="button"
                    onClick={() => setSelected(cert.id)}
                    className={`w-100 border-0 p-0 rounded-3 overflow-hidden transition-all ${
                      selected === cert.id ? "ring-2" : ""
                    }`}
                    style={{
                      outline: selected === cert.id ? "2px solid var(--accent-primary)" : "none",
                      transform: selected === cert.id ? "scale(1.02)" : "scale(1)",
                      transition: "all 0.3s ease",
                      background: "transparent",
                    }}
                    aria-pressed={selected === cert.id}
                    aria-label={`View ${cert.title} certificate`}
                  >
                    <GlassCard className="p-3 text-center" hover={selected !== cert.id}>
                      <div
                        className="d-flex align-items-center justify-content-center mx-auto mb-2 rounded-3"
                        style={{
                          width: 64,
                          height: 64,
                          background: "var(--glass-bg)",
                        }}
                      >
                        <Image
                          src={cert.image}
                          alt=""
                          width={40}
                          height={40}
                          aria-hidden="true"
                        />
                      </div>
                      <p className="small fw-medium mb-0 text-truncate">{cert.title}</p>
                    </GlassCard>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Selected certificate detail */}
          <div className="col-lg-7" data-aos="fade-left">
            <GlassCard className="p-4 p-lg-5" hover={false}>
              <div className="d-flex flex-column flex-sm-row align-items-start gap-4">
                <div
                  className="d-flex align-items-center justify-content-center rounded-4 flex-shrink-0 mx-auto mx-sm-0"
                  style={{
                    width: 120,
                    height: 120,
                    background: "var(--gradient-primary)",
                  }}
                >
                  <Image
                    src={active.image}
                    alt={active.title}
                    width={72}
                    height={72}
                  />
                </div>
                <div className="flex-grow-1 text-center text-sm-start">
                  <div className="d-flex align-items-center gap-2 mb-2 justify-content-center justify-content-sm-start">
                    <FiAward className="text-(--accent-primary)" />
                    <span className="small text-(--text-muted)">{active.year}</span>
                  </div>
                  <h3 className="fs-4 fw-bold mb-2">{active.title}</h3>
                  <p className="fw-medium mb-3 text-(--accent-primary)">
                    {active.issuer}
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
