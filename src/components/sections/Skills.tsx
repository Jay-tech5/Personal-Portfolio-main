"use client";

import { useMemo } from "react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiPython,
  SiMongodb,
  SiApachespark,
  SiApacheairflow,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaAws, FaCloud, FaDatabase, FaWarehouse } from "react-icons/fa6";
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
  python: <SiPython size={28} color="#3776AB" />,
  mongodb: <SiMongodb size={28} color="#47A248" />,
  sql: <FaDatabase size={28} color="#00758F" />,
  etlelt: <FaDatabase size={28} color="#F59E0B" />,
  aws: <FaAws size={28} color="#FF9900" />,
  spark: <SiApachespark size={28} color="#E25A1C" />,
  cloud: <FaCloud size={28} color="#3B82F6" />,
  airflow: <SiApacheairflow size={28} color="#017CEE" />,
  datawarehouse: <FaWarehouse size={28} color="#4B5563" />,
  git: <SiGit size={28} color="#F05032" />,
  github: <SiGithub size={28} />,
};

/** Skills section with icon grid and animated bars */
export default function Skills() {
  // Optimize filtering with useMemo to avoid recalculating on every render
  const { frontendSkills, backendSkills } = useMemo(() => {
    return {
      frontendSkills: skills.filter((s) => s.category === "frontend"),
      backendSkills: skills.filter((s) => s.category === "backend"),
    };
  }, []);

  return (
    <section
      id="skills"
      className="section-padding"
      style={{ background: "var(--bg-secondary)" }}
      aria-labelledby="skills-heading"
    >
      <div className="section-container">
        <SectionHeading
          id="skills-heading"
          subtitle="Skills"
          title="Technical Expertise"
          description="Technologies, frameworks, databases, and APIs I work with."
        />

        {/* Skill icon grid */}
        <div
          className="row g-3 mb-5 justify-content-center"
          data-aos="fade-up"
        >
          {skills.map((skill) => {
            const icon = iconMap[skill.icon];
            if (!icon) return null; // Prevent rendering if icon not found
            return (
              <div key={skill.name} className="col-4 col-sm-3 col-md-2">
                <GlassCard className="text-center py-3 px-2">
                  <div className="mb-2 d-flex justify-content-center">
                    {icon}
                  </div>
                  <span className="small fw-medium">{skill.name}</span>
                </GlassCard>
              </div>
            );
          })}
        </div>

        {/* Animated skill bars */}
        <div className="row g-4">
          <div className="col-lg-6 col-md-6" data-aos="fade-right">
            <GlassCard hover={false}>
              <h3 className="fs-6 fw-semibold mb-4 text-uppercase tracking-wider">
                Frontend Development
              </h3>
              {frontendSkills.map((skill, i) => {
                const delay = i * 100;
                return (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={delay}
                  />
                );
              })}
            </GlassCard>
          </div>
          <div className="col-lg-6 col-md-6" data-aos="fade-up">
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
        </div>
      </div>
    </section>
  );
}
