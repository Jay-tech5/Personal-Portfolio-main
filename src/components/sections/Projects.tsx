"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { projects } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { FiExternalLink, FiGithub, FiSearch } from "react-icons/fi";

/** Projects section with search */
export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query));
      return matchesSearch;
    });
  }, [searchQuery]);

  return (
    <section
      id="projects"
      className="section-padding"
      aria-labelledby="projects-heading"
    >
      <div className="section-container">
        <SectionHeading
          subtitle="Projects"
          title="Featured Work"
          description="A selection of projects showcasing my skills and experience."
        />

        {/* Search controls */}
        <div
          className="d-flex justify-content-center mb-5"
          data-aos="fade-up"
        >
          <div className="position-relative" style={{ maxWidth: 320 }}>
            <FiSearch
              className="position-absolute top-50 translate-middle-y text-[var(--text-muted)]"
              style={{ left: 14 }}
              size={16}
              aria-hidden="true"
            />
            <input
              type="search"
              className="form-control rounded-pill ps-5 py-2"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search projects"
            />
          </div>
        </div>

        {/* Project cards grid */}
        <div className="row g-4">
          {filteredProjects.length === 0 ? (
            <div className="col-12 text-center py-5">
              <p className="text-[var(--text-muted)]">
                No projects found matching your criteria.
              </p>
            </div>
          ) : (
            filteredProjects.map((project, i) => (
              <div
                key={project.id}
                className="col-md-6 col-lg-4"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <GlassCard className="h-100 p-0 overflow-hidden d-flex flex-column">
                  <div
                    className="position-relative overflow-hidden"
                    style={{ height: 180 }}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className="object-fit-cover transition-transform"
                      style={{ transition: "transform 0.4s ease" }}
                    />
                  </div>

                  <div className="p-4 d-flex flex-column flex-grow-1">
                    <h3 className="fs-5 fw-bold mb-2">{project.title}</h3>
                    <p className="text-[var(--text-secondary)] small mb-3 flex-grow-1">
                      {project.description}
                    </p>

                    <div className="d-flex gap-2">
                      <a
                        href={project.liveUrl}
                        className="btn-gradient btn-sm flex-grow-1 justify-content-center"
                        target={project.liveUrl !== "#" ? "_blank" : undefined}
                        rel={project.liveUrl !== "#" ? "noopener noreferrer" : undefined}
                        aria-label={`Live demo of ${project.title}`}
                      >
                        <FiExternalLink size={14} />
                        Live Demo
                      </a>
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          className="btn-outline-glass btn-sm flex-grow-1 justify-content-center"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <FiGithub size={14} />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
