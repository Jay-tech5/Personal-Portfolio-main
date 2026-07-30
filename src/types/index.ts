/** Portfolio data type definitions */

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location?: string;
  responsibilities: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  university: string;
  year: string;
  description?: string;
}

export interface SkillItem {
  name: string;
  level: number;
  icon: string;
  category: "frontend" | "backend" | "tools" | "other";
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
  credentialUrl: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  year: string;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface CounterStat {
  label: string;
  value: number;
  suffix?: string;
}
