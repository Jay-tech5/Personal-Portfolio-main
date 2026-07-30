"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

/** Contact form with frontend-only validation (no backend submission) */
export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Name is required";
    else if (form.name.trim().length < 2) errs.name = "Name must be at least 2 characters";

    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Please enter a valid email address";

    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.trim().length < 10)
      errs.message = "Message must be at least 10 characters";

    return errs;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Frontend-only: simulate success without backend
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section
      id="contact"
      className="section-padding"
      aria-labelledby="contact-heading"
    >
      <div className="section-container">
        <SectionHeading
          subtitle="Contact"
          title="Get In Touch"
          description="Have a project in mind or want to connect? Send me a message."
        />

        <div className="row g-4 g-lg-5 justify-content-center">
          <div className="col-lg-5" data-aos="fade-right">
            <GlassCard hover={false} className="h-100">
              <h3 className="fs-5 fw-bold mb-4">Let&apos;s talk</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                I&apos;m always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <ul className="list-unstyled mb-0">
                {personalInfo.email && (
                  <li className="mb-3">
                    <span className="text-[var(--text-muted)] small d-block">Email</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-decoration-none text-[var(--accent-primary)] fw-medium"
                    >
                      {personalInfo.email}
                    </a>
                  </li>
                )}
                {personalInfo.phone && (
                  <li className="mb-3">
                    <span className="text-[var(--text-muted)] small d-block">Phone</span>
                    <span className="fw-medium">{personalInfo.phone}</span>
                  </li>
                )}
                {personalInfo.location && (
                  <li>
                    <span className="text-[var(--text-muted)] small d-block">Location</span>
                    <span className="fw-medium">{personalInfo.location}</span>
                  </li>
                )}
              </ul>
            </GlassCard>
          </div>

          <div className="col-lg-7" data-aos="fade-left">
            <GlassCard hover={false}>
              {submitted && (
                <motion.div
                  className="alert d-flex align-items-center gap-2 mb-4 border-0"
                  style={{ background: "rgba(16, 185, 129, 0.15)", color: "#10b981" }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                >
                  <FiCheckCircle />
                  Thank you! Your message has been validated and sent successfully.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div className="mb-3">
                  <label htmlFor="contact-name" className="form-label small fw-medium">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <div id="name-error" className="invalid-feedback d-flex align-items-center gap-1">
                      <FiAlertCircle size={12} />
                      {errors.name}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="contact-email" className="form-label small fw-medium">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <div id="email-error" className="invalid-feedback d-flex align-items-center gap-1">
                      <FiAlertCircle size={12} />
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="contact-message" className="form-label small fw-medium">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    className={`form-control ${errors.message ? "is-invalid" : ""}`}
                    rows={5}
                    placeholder="Your message..."
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <div id="message-error" className="invalid-feedback d-flex align-items-center gap-1">
                      <FiAlertCircle size={12} />
                      {errors.message}
                    </div>
                  )}
                </div>

                <button type="submit" className="btn-gradient w-100 justify-content-center">
                  <FiSend size={16} />
                  Send Message
                </button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
