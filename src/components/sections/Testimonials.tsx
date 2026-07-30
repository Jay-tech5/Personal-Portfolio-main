"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

/** Testimonials carousel section */
export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const active = testimonials[current];

  return (
    <section
      id="testimonials"
      className="section-padding"
      style={{ background: "var(--bg-secondary)" }}
      aria-labelledby="testimonials-heading"
    >
      <div className="section-container">
        <SectionHeading
          subtitle="Testimonials"
          title="What People Say"
          description="Feedback from colleagues and clients I've worked with."
        />

        <div className="row justify-content-center" data-aos="fade-up">
          <div className="col-lg-8 position-relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <GlassCard className="p-4 p-lg-5 text-center" hover={false}>
                  {/* Star rating */}
                  <div className="d-flex justify-content-center gap-1 mb-4" aria-label={`${active.rating} out of 5 stars`}>
                    {Array.from({ length: active.rating }).map((_, i) => (
                      <FiStar
                        key={i}
                        size={18}
                        className="text-warning"
                        fill="currentColor"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <blockquote className="mb-4">
                    <p className="fs-5 fst-italic text-[var(--text-secondary)] leading-relaxed mb-0">
                      &ldquo;{active.content}&rdquo;
                    </p>
                  </blockquote>

                  <div className="d-flex align-items-center justify-content-center gap-3">
                    <Image
                      src={active.avatar}
                      alt={active.name}
                      width={48}
                      height={48}
                      className="rounded-circle"
                    />
                    <div className="text-start">
                      <p className="fw-bold mb-0">{active.name}</p>
                      <p className="text-[var(--text-muted)] small mb-0">
                        {active.role}, {active.company}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
              <button
                type="button"
                onClick={prev}
                className="btn btn-outline-glass rounded-circle d-flex align-items-center justify-content-center p-0"
                style={{ width: 40, height: 40 }}
                aria-label="Previous testimonial"
              >
                <FiChevronLeft size={18} />
              </button>

              <div className="d-flex gap-2" role="tablist" aria-label="Testimonial navigation">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={i === current}
                    onClick={() => setCurrent(i)}
                    className="border-0 rounded-circle p-0"
                    style={{
                      width: i === current ? 24 : 8,
                      height: 8,
                      background: i === current ? "var(--accent-primary)" : "var(--glass-border)",
                      transition: "all 0.3s ease",
                    }}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                className="btn btn-outline-glass rounded-circle d-flex align-items-center justify-content-center p-0"
                style={{ width: 40, height: 40 }}
                aria-label="Next testimonial"
              >
                <FiChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
