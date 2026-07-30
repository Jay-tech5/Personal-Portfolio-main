"use client";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiPython,
  SiMongodb,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";
import { skills } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import SkillBar from "@/components/ui/SkillBar";

const iconMap: Record<string, React.ReactNode> = {
  html: <SiHtml5 size={28} color="#E34F26" />,
  css: <SiCss size={28} color="#1572B6" />,
  javascript: <SiJavascript size={28} color="#F7DF1E" />,
  typescript: <SiTypescript size={28} color="#3178C6" />,
  react: <SiReact size={28} color="#61DAFB" />,
  nextjs: <SiNextdotjs size={28} />,
  tailwind: <SiTailwindcss size={28} color="#06B6D4" />,
  bootstrap: <SiBootstrap size={28} color="#7952B3" />,
  nodejs: <SiNodedotjs size={28} color="#339933" />,
  express: <SiExpress size={28} />,
  springboot: <SiSpringboot size={28} color="#6DB33F" />,
  java: <FaJava size={28} color="#5382A1" />,
  python: <SiPython size={28} color="#3776AB" />,
  mongodb: <SiMongodb size={28} color="#47A248" />,
  sql: <FaDatabase size={28} color="#00758F" />,
  restapi: <TbApi size={28} color="#6366F1" />,
  git: <SiGit size={28} color="#F05032" />,
  github: <SiGithub size={28} />,
};

/** Skills section with icon grid and animated bars */
export default function Skills() {
  const frontendSkills = skills.filter((s) => s.category === "frontend");
  const backendSkills = skills.filter((s) => s.category === "backend");
  const toolSkills = skills.filter((s) => s.category === "tools");

  return (
    <section
      id="skills"
      className="section-padding"
      style={{ background: "var(--bg-secondary)" }}
      aria-labelledby="skills-heading"
    >
      <div className="section-container">
        <SectionHeading
          subtitle="Skills"
          title="Technical Expertise"
          description="Technologies, frameworks, databases, and APIs I work with."
        />

        {/* Skill icon grid */}
        <div
          className="row g-3 mb-5 justify-content-center"
          data-aos="fade-up"
        >
          {skills.map((skill, i) => (
            <div key={skill.name} className="col-4 col-sm-3 col-md-2">
              <GlassCard
                className="text-center py-3 px-2"
                delay={i * 0.05}
              >
                <div className="mb-2 d-flex justify-content-center">
                  {iconMap[skill.icon]}
                </div>
                <span className="small fw-medium">{skill.name}</span>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* Animated skill bars */}
        <div className="row g-4">
          <div className="col-lg-4 col-md-6" data-aos="fade-right">
            <GlassCard hover={false}>
              <h3 className="fs-6 fw-semibold mb-4 text-uppercase tracking-wider">
                Frontend Development
              </h3>
              {frontendSkills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={i * 100}
                />
              ))}
            </GlassCard>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up">
            <GlassCard hover={false}>
              <h3 className="fs-6 fw-semibold mb-4 text-uppercase tracking-wider">
                Backend, Databases & APIs
              </h3>
              {backendSkills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={i * 100}
                />
              ))}
            </GlassCard>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-left">
            <GlassCard hover={false}>
              <h3 className="fs-6 fw-semibold mb-4 text-uppercase tracking-wider">
                Tools & Platforms
              </h3>
              {toolSkills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={i * 100}
                />
              ))}
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
