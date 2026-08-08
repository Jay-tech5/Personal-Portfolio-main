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
  roles: ["Data Engineer", "Java Developer", "Cloud & DevOps Enthusiast"],
  email: "",
  phone: "",
  location: "India",
  resumeUrl: "/resume/jay-dixit-resume.html",
  about: `I'm a passionate Software Engineer with a strong foundation in Java development and a growing expertise in modern frontend technologies. I love building scalable applications, exploring cloud infrastructure, and crafting intuitive user experiences.

With experience across the full development lifecycle, I bring together backend robustness and frontend elegance. I'm constantly learning new technologies and contributing to open-source projects.`,
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
  { label: "Contact", href: "#contact" },
];

/** Social links */
export const socialLinks: SocialLink[] = [];

/** Counter stats for hero/about */
export const counterStats: CounterStat[] = [
  { label: "Projects Completed", value: 25, suffix: "+" },
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
  { label: "Happy Clients", value: 12, suffix: "+" },
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
  { name: "HTML5", level: 95, icon: "html", category: "frontend" },
  { name: "CSS3", level: 90, icon: "css", category: "frontend" },
  { name: "JavaScript", level: 88, icon: "javascript", category: "frontend" },
  { name: "TypeScript", level: 85, icon: "typescript", category: "frontend" },
  { name: "React.js", level: 90, icon: "react", category: "frontend" },
  { name: "Next.js", level: 85, icon: "nextjs", category: "frontend" },
  { name: "Tailwind CSS", level: 92, icon: "tailwind", category: "frontend" },
  { name: "Bootstrap", level: 88, icon: "bootstrap", category: "frontend" },

  // Backend, Databases & APIs
  { name: "Node.js", level: 85, icon: "nodejs", category: "backend" },
  { name: "Express.js", level: 82, icon: "express", category: "backend" },
  { name: "Spring Boot", level: 85, icon: "springboot", category: "backend" },
  { name: "Java", level: 88, icon: "java", category: "backend" },
  { name: "Python", level: 85, icon: "python", category: "backend" },
  { name: "MongoDB", level: 85, icon: "mongodb", category: "backend" },
  { name: "SQL", level: 88, icon: "sql", category: "backend" },
  { name: "REST API", level: 90, icon: "restapi", category: "backend" },

  // Tools & Version Control
  { name: "Git", level: 90, icon: "git", category: "tools" },
  { name: "GitHub", level: 92, icon: "github", category: "tools" },
];

/** Project categories for filtering */
export const projectCategories = ["All", "AI / ML", "Full Stack", "Java"];

/** Projects portfolio */
export const projects: ProjectItem[] = [
  {
    id: "proj-1",
    title: "RAG-Based Document Q&A System",
    description:
      "Retrieval-Augmented Generation pipeline using LangChain, FAISS, and LLM APIs for semantic document search and Q&A.",
    image: "/projects/blog.svg",
    technologies: ["Python", "LangChain", "FAISS", "LLM APIs"],
    category: "AI / ML",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "proj-2",
    title: "AI Task Automation Agent",
    description:
      "Autonomous agent for planning and executing multi-step tasks using OpenAI function calling and tool-selection logic.",
    image: "/projects/design-system.svg",
    technologies: ["Python", "OpenAI Function Calling", "REST APIs"],
    category: "AI / ML",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "proj-3",
    title: "DSA Visualizer & Algorithm Playground",
    description:
      "Interactive visualization tool for data structures and algorithms using object-oriented Java design.",
    image: "/projects/portfolio.svg",
    technologies: ["Java", "OOP", "Algorithms", "Data Structures"],
    category: "Java",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "proj-4",
    title: "Full-Stack Task Management Web App",
    description:
      "Full-stack CRUD application with RESTful APIs, JWT authentication, and responsive React frontend.",
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
    title: "Oracle Certified Java Programmer",
    issuer: "Oracle",
    year: "2023",
    image: "/certificates/java.svg",
    credentialUrl: "#",
  },
  {
    id: "cert-3",
    title: "React Developer Certification",
    issuer: "Meta",
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
