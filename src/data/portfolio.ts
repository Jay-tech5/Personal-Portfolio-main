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
  about: `I'm a passionate Data Engineer with a strong foundation in data pipeline architecture and a growing expertise in modern data technologies. I love building scalable data solutions, exploring cloud infrastructure, and crafting efficient data workflows.

With experience across the full development lifecycle, I bring together data robustness and analytical elegance. I'm constantly learning new technologies and contributing to data-driven projects.`,
  tagline: "Building elegant solutions with code & cloud.",
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
export const counterStats: CounterStat[] = [];

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
  { name: "ETL / ELT", level: 74, icon: "etl", category: "backend" },
  { name: "Apache Spark / PySpark", level: 72, icon: "spark", category: "backend" },
  { name: "Cloud (AWS / Azure / GCP)", level: 70, icon: "cloud", category: "backend" },
  { name: "Data Warehousing & Data Modeling", level: 73, icon: "sql", category: "backend" },
  { name: "Apache Airflow", level: 70, icon: "airflow", category: "backend" },
  { name: "REST API", level: 79, icon: "restapi", category: "backend" },
];

/** Project categories for filtering */
export const projectCategories = ["All", "AI / ML", "Full Stack", "Java"];

/** Projects portfolio */
export const projects: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Swift Bites",
    description:
      "A modern food delivery application with real-time order tracking, seamless payment integration, and an intuitive user interface for browsing and ordering food.",
    image: "/projects/blog.svg",
    technologies: ["Python", "LangChain", "FAISS", "LLM APIs"],
    category: "AI / ML",
    liveUrl: "https://swift-bites-lovat.vercel.app/",
    githubUrl: "#",
  },
  {
    id: "proj-2",
    title: "Smart-form validator",
    description:
      "An intelligent form validation library with real-time error handling, custom validation rules, and comprehensive user feedback mechanisms for web applications.",
    image: "/projects/design-system.svg",
    technologies: ["Python", "OpenAI Function Calling", "REST APIs"],
    category: "AI / ML",
    liveUrl: "https://smart-form-validator-main.vercel.app/",
    githubUrl: "#",
  },
  {
    id: "proj-3",
    title: "to-do list",
    description:
      "A comprehensive task management application that helps users organize, prioritize, and track their daily tasks with deadline notifications and category management.",
    image: "/projects/portfolio.svg",
    technologies: ["Java", "OOP", "Algorithms", "Data Structures"],
    category: "Java",
    liveUrl: "https://to-do-list-five-omega-82.vercel.app/",
    githubUrl: "#",
  },
  {
    id: "proj-4",
    title: "expense tracker system",
    description:
      "A full-featured expense tracking application with budgeting tools, spending analytics, expense categorization, and detailed financial reports for better money management.",
    image: "/projects/taskmanager.svg",
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



/** Testimonials */
export const testimonials: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Sarah Johnson",
    role: "Engineering Manager",
    company: "Tech Solutions",
    content:
      "Jay is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
    avatar: "/avatars/avatar-1.svg",
    rating: 5,
  },
  {
    id: "test-2",
    name: "Michael Chen",
    role: "Senior Developer",
    company: "Innovate Digital",
    content:
      "Working with Jay was a pleasure. He quickly grasped complex requirements and implemented elegant solutions. Highly recommended!",
    avatar: "/avatars/avatar-2.svg",
    rating: 5,
  },
  {
    id: "test-3",
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "StartUp Hub",
    content:
      "Jay's ability to bridge frontend and backend development made him invaluable to our team. Great communicator and team player.",
    avatar: "/avatars/avatar-3.svg",
    rating: 5,
  },
];
