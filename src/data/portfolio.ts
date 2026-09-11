import type {
  CertificationItem,
  CounterStat,
  EducationItem,
  ExperienceItem,
  NavLink,
  ProjectItem,
  SkillItem,
  SocialLink,
  TestimonialItem,
} from "@/types";

/** Personal info */
export const personalInfo = {
  name: "Jay Dixit",
  title: "Data Engineer",
  roles: ["Data Engineer"],
  email: "",
  phone: "",
  location: "India",
  resumeUrl: "/resume/jay-dixit-resume.html",
  about: `I build reliable data systems that turn raw information into something useful — scalable, efficient, and built for real-world use.

Focused on data engineering, I work with data pipelines, ETL processes, SQL, cloud platforms, and analytics. I enjoy designing systems that move, transform, and deliver data efficiently, from ingestion to production.`,
  tagline: "Building reliable data systems from ingestion to production.",
};

/** Navigation links */
export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
];

/** Social links */
export const socialLinks: SocialLink[] = [];

/** Counter stats for hero/about */
export const counterStats: CounterStat[] = [
  { label: "Data Pipelines Built", value: 12, suffix: "+" },
  { label: "Projects Completed", value: 15, suffix: "+" },
  { label: "Certifications", value: 4, suffix: "" },
];

/** Work experience timeline */
export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Deloitte",
    role: "Data Engineer (Full-time)",
    duration: "Present",
    location: "India",
    responsibilities: [
      "Designing, developing, and maintaining scalable data pipelines and ETL processes",
      "Optimizing data architecture, storage systems, and analytics workflows",
      "Collaborating with enterprise teams to deliver data-driven solutions and insights",
      "Ensuring data governance, quality, and high performance across big data platforms",
    ],
  },
  {
    id: "exp-2",
    company: "Oasis Infobyte",
    role: "Data Analyst (Internship)",
    duration: "Internship",
    location: "Remote",
    responsibilities: [
      "Performed exploratory data analysis, data cleaning, and data preprocessing",
      "Developed interactive dashboards and visual reports using Python and SQL",
      "Analyzed trends and business metrics to provide actionable insights",
      "Worked on end-to-end data analysis projects during internship period",
    ],
  },
];

/** Education */
export const education: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Computer Applications (BCA)",
    university: "IILM University",
    year: "2023 – 2026",
    description: "Pursuing BCA with a focus on Software Development, Web Technologies, and Computer Applications.",
  },
  {
    id: "edu-2",
    degree: "Senior Secondary Education (Class 12th)",
    university: "Kendriya Vidyalaya Agra Cantt",
    year: "Completed",
    description: "Higher Secondary Education (CBSE Board).",
  },
  {
    id: "edu-3",
    degree: "Secondary Education (Class 10th)",
    university: "Kendriya Vidyalaya Agra Cantt",
    year: "Completed",
    description: "High School Education (CBSE Board).",
  },
];

/** Skills with proficiency levels */
export const skills: SkillItem[] = [
  // Frontend
  { name: "HTML5", level: 78, icon: "html", category: "frontend" },
  { name: "CSS3", level: 72, icon: "css", category: "frontend" },
  { name: "JavaScript", level: 81, icon: "javascript", category: "frontend" },
  { name: "TypeScript", level: 68, icon: "typescript", category: "frontend" },
  { name: "React.js", level: 75, icon: "react", category: "frontend" },
  { name: "Next.js", level: 70, icon: "nextjs", category: "frontend" },
  { name: "Tailwind CSS", level: 82, icon: "tailwind", category: "frontend" },
  { name: "Bootstrap", level: 65, icon: "bootstrap", category: "frontend" },

  // Backend, Databases & APIs
  { name: "Node.js", level: 77, icon: "nodejs", category: "backend" },
  { name: "Express.js", level: 69, icon: "express", category: "backend" },
  { name: "Python", level: 76, icon: "python", category: "backend" },
  { name: "MongoDB", level: 71, icon: "mongodb", category: "backend" },
  { name: "SQL", level: 74, icon: "sql", category: "backend" },
  { name: "ETL/ELT", level: 82, icon: "etlelt", category: "backend" },
  { name: "AWS", level: 78, icon: "aws", category: "backend" },
  { name: "Apache Spark", level: 75, icon: "spark", category: "backend" },
  { name: "Data Warehousing", level: 80, icon: "datawarehouse", category: "backend" },
  { name: "Cloud (AWS / Azure / GCP)", level: 70, icon: "cloud", category: "backend" },
  { name: "Apache Airflow", level: 70, icon: "airflow", category: "backend" },
  { name: "REST API", level: 79, icon: "restapi", category: "backend" },
];

/** Project categories for filtering */
export const projectCategories = ["All", "Data Analytics", "Data Engineering", "Full Stack"];

/** Projects portfolio */
export const projects: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Sales & Business Performance Dashboard",
    description:
      "Interactive Power BI dashboard analyzing sales and regional performance across 5,000+ records, reducing manual reporting time by 40%.",
    image: "/projects/sales-dashboard.svg",
    technologies: ["SQL", "Power BI", "Excel"],
    category: "Data Analytics",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "proj-2",
    title: "Customer Churn Analysis",
    description:
      "Python-based churn analysis using Pandas and visualizations to identify customer behavior trends and support retention recommendations.",
    image: "/projects/churn-analysis.svg",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    category: "Data Analytics",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "proj-3",
    title: "Excel-Based Financial Reporting Automation",
    description:
      "Automated financial reports with Excel VBA, PivotTables, and SQL, cutting manual effort by 50% and reducing reporting errors.",
    image: "/projects/financial-report.svg",
    technologies: ["Excel", "VBA", "PivotTables", "SQL"],
    category: "Data Engineering",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "proj-4",
    title: "Expense Tracker System",
    description:
      "A full-featured expense tracking application with budgeting tools, spending analytics, expense categorization, and detailed financial reports for better money management.",
    image: "/projects/expense-tracker.svg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "#",
  },
];

/** Certifications */
export const certifications: CertificationItem[] = [
  {
    id: "cert-1",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    image: "/certificates/aws.svg",
    credentialUrl: "#",
  },
  {
    id: "cert-2",
    title: "DSA - Java",
    issuer: "Coding Platform",
    year: "2023",
    image: "/certificates/java.svg",
    credentialUrl: "#",
  },
  {
    id: "cert-3",
    title: "Coding Ninja - Data Science",
    issuer: "Coding Ninja",
    year: "2023",
    image: "/certificates/react.svg",
    credentialUrl: "#",
  },
  {
    id: "cert-4",
    title: "Google Cloud Associate",
    issuer: "Google Cloud",
    year: "2024",
    image: "/certificates/gcp.svg",
    credentialUrl: "#",
  },
];



export const testimonials: TestimonialItem[] = [];
