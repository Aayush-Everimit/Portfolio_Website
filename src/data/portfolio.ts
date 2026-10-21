// Single source of truth for all portfolio content.
// Update this file to customize the entire portfolio.

export const profile = {
  name: "Aayush Gautam",
  role: "AI-Native Full Stack Developer",
  tagline: "I build scalable software solutions, system monitoring tools, and AI-powered platforms using modern web technologies.",
  location: "Noida, India",
  email: "aayush_2006@outlook.com",
  availability: "Open for opportunities — B.Tech expected Jun 2028",
  resumeUrl: "#",
  social: {
    github: "https://github.com/Aayush-Everimit",
    linkedin: "https://www.linkedin.com/in/g-aayush/",
    instagram: "https://www.instagram.com/_wel_nown/",
  },
};


export const about = {
  heading: "Backend by craft. AI-powered by curiosity.",
  paragraphs: [
    "I'm a Computer Science undergraduate at Guru Gobind Singh Indraprastha University with a 9.2 CGPA, building a strong foundation in software engineering, backend development, and Artificial Intelligence.",
    "I work with Java, Spring Boot, Spring Cloud, Quarkus, React, Next.js, and PostgreSQL to build practical software systems, from microservices-based platforms to AI-powered applications and Linux utilities.",
    "Alongside software engineering, I'm expanding my expertise in Data Science, Machine Learning, and Generative AI through structured learning and hands-on practice with Python, NumPy, Pandas, embeddings, RAG, and LLM integrations. I also actively strengthen my problem-solving skills through DSA, with 100+ LeetCode problems solved.",
  ],
  stats: [
    { label: "B.Tech CGPA", value: "9.2" },
    { label: "LeetCode Problems", value: "100+" },
    { label: "Deloitte Dashboards", value: "10+" },
  ],
};



export const skills = [
  { name: "Java", level: 90, category: "Languages" },
  { name: "Python", level: 78, category: "Languages" },
  { name: "JavaScript & SQL", level: 85, category: "Languages" },

  { name: "Spring Boot & Spring MVC", level: 88, category: "Backend" },
  { name: "Spring Cloud & Microservices", level: 82, category: "Backend" },
  { name: "Quarkus & REST APIs", level: 82, category: "Backend" },

  { name: "React & Next.js", level: 82, category: "Frontend" },
  { name: "PostgreSQL & MySQL", level: 85, category: "Databases" },
  { name: "MongoDB", level: 75, category: "Databases" },
  { name: "Git, Docker & Linux", level: 82, category: "Tools & Platforms" },

  { name: "NumPy & Pandas", level: 65, category: "Data Science" },
  { name: "Machine Learning Fundamentals", level: 60, category: "AI & Machine Learning" },
  { name: "LLMs, Embeddings & RAG", level: 72, category: "Generative AI" },
  { name: "Gemini API & Ollama", level: 78, category: "AI Integration" },

  { name: "Data Structures & Algorithms", level: 85, category: "Computer Science" },
  { name: "OOP, DBMS & OS", level: 82, category: "Computer Science" },
  { name: "Authentication & Authorization", level: 80, category: "Security" },
];


export const techStack = [
  // Programming Languages
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "SQL",

  // Backend & Frameworks
  "Spring Boot",
  "Spring MVC",
  "Spring Security",
  "Spring Cloud",
  "Hibernate",
  "JPA",
  "Quarkus",
  "REST APIs",
  "Microservices",

  
  "React",
  "Next.js",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Tailwind CSS",

  
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Drizzle ORM",
  "Neon",

  
  "NumPy",
  "Pandas",
  "Machine Learning",
  "Generative AI",
  "LLM Integration",
  "Embeddings",
  "RAG",
  "Gemini API",
  "OpenRouter",
  "Ollama",

  
  "Clerk",
  "JWT",
  "OAuth 2.0",

  
  "Docker",
  "Docker Compose",
  "Git",
  "GitHub",
  "Linux",
  "Arch Linux",
  "Bash",
  "Maven",
  "Vercel",

  
  "DSA",
  "OOP",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
  "Theory of Computation",
  "System Design",
  "Full Stack Development",
];

export const experience = [
  {
    company: "CETPA Infotech Pvt. Ltd.",
    role: "Java Full Stack Intern",
    period: "December 2024 — September 2025",
    description: "Completed a 9-month Java Full Stack Development internship with Data Structures & Algorithms training. Developed an Enterprise Banking Management Platform, applying Java, object-oriented programming, database integration, and backend development concepts.",
    tags: ["Java", "Spring Boot", "SQL", "DSA"],
  },
  {
    company: "GeeksforGeeks Student Chapter, DTC",
    role: "Technical Lead",
    period: "September 2025 — June 2026",
    description: "Coordinated technical activities and supported coding workshops, technical events, and student learning initiatives. Collaborated with chapter members to prepare technical presentations and learning resources.",
    tags: ["Technical Leadership", "Collaboration", "Workshops"],
  },
  {
    company: "Deloitte Australia",
    role: "Data Analytics Virtual Experience",
    period: "June 2025",
    description: "Completed a virtual experience involving business data analysis and visualization. Created 10+ dashboards to present insights from business datasets and support data-driven decision-making.",
    tags: ["Data Analytics", "Data Visualization", "Dashboards"],
  },
];



export const projects = [
  {
    title: "Rido",
    category: "AI-Powered Microservices Ride-Hailing Platform",
    year: "2026",
    description:
      "A ride-hailing platform built around Java and Spring Boot microservices, with service discovery and centralized configuration through Spring Cloud Eureka and Config Server. Integrates a Python FastAPI-based AI service with the backend.",
    accent: "from-sky-400/40 to-indigo-500/10",
    tags: ["Java", "Spring Boot", "Spring Cloud", "PostgreSQL", "FastAPI", "Docker"],
    link: "https://github.com/Aayush-Everimit",
  },

  {
    title: "ArchAngel",
    category: "AI Linux System Assistant",
    year: "2026",
    description:
      "A local AI-assisted utility for Arch Linux that supports system inspection, diagnostics, log analysis, and update auditing. Combines a Java Quarkus backend with Python FastAPI services and a locally hosted LLM through Ollama.",
    accent: "from-amber-400/40 to-orange-500/10",
    tags: ["Java", "Quarkus", "Python", "FastAPI", "Ollama", "Linux"],
    link: "https://github.com/Kernal-Penguins/ArchAngel---An-AI-driven-CLI-Assistant-for-arch-based-sytems#-what-is-archangel",
  },

  {
    title: "Career Copilot",
    category: "AI Career Assistant",
    year: "2026",
    description:
      "An AI-powered career platform that evaluates resumes against job descriptions, identifies matching and missing skills, generates tailored cover letters, and provides interview preparation support using LLM APIs.",
    accent: "from-violet-500/40 to-fuchsia-500/10",
    tags: ["Next.js", "TypeScript", "Gemini API", "OpenRouter", "Clerk", "PostgreSQL"],
    link: "https://career-copilot-phi-ten.vercel.app/",
  },

  {
    title: "Expense Tracker",
    category: "Personal Finance Management",
    year: "2026",
    description:
      "A full-stack personal finance application for tracking transactions, managing budgets, and monitoring spending through interactive dashboards. Uses authentication, PostgreSQL persistence, and an ORM-backed data layer.",
    accent: "from-cyan-400/40 to-blue-500/10",
    tags: ["Next.js", "React", "Clerk", "PostgreSQL", "Drizzle ORM"],
    link: "https://expense-manager-three-beta.vercel.app",
  },

  {
    title: "Pulsora",
    category: "Disaster Response Platform",
    year: "2026",
    description:
      "A disaster management platform designed to support emergency reporting, alerts, and community feedback. Uses a Spring Boot backend, React frontend, and RabbitMQ for asynchronous event processing.",
    accent: "from-emerald-400/40 to-teal-500/10",
    tags: ["Spring Boot", "React", "PostgreSQL", "RabbitMQ"],
    link: "https://github.com/Aayush-Everimit/Pulsora_Alert_System#overview",
  },

  {
    title: "Profecto",
    category: "Freelance Marketplace",
    year: "2025",
    description:
      "A full-stack freelance marketplace for connecting opportunities with applicants. Supports job posting, candidate applications, and role management through a React frontend and Spring Boot backend.",
    accent: "from-rose-400/40 to-pink-500/10",
    tags: ["Spring Boot", "React", "PostgreSQL", "JWT"],
    link: "https://github.com/Aayush-Everimit/Profecto_Freelance_Platform",
  },

  {
    title: "OptiFORCE",
    category: "Enterprise Workforce Platform",
    year: "2026 • In Progress",
    description:
      "An in-progress workforce management platform focused on employee records, task scheduling, workload tracking, and operational analytics. Intended to bring workforce workflows and management insights into one application.",
    accent: "from-indigo-500/40 to-sky-500/10",
    tags: ["Spring Boot", "React", "PostgreSQL"],
    link: "https://github.com/Aayush-Everimit/OptiFORCE_",
  },
];



export const experiments = [
  "IPL Win Predictor",
  "AI-Powered Fitness App",
  "Weather Forecast Application",
  "Real-Time Currency Converter",
];



export const achievements = [
  {
    title: "Java Full Stack Development with DSA",
    org: "CETPA Infotech",
    year: "2025",
    certUrl: "/fullstack-certificate.pdf",
  },
  {
    title: "Data Science & AI Program",
    org: "IIT Roorkee E&ICT Academy",
    year: "2026 (Ongoing)",
    certUrl: null,
  },
  {
    title: "Technical Lead Appointment",
    org: "GeeksforGeeks Student Chapter, DTC",
    year: "2025",
    certUrl: "/gfg-offer-letter.pdf",
  },
  {
    title: "Data Analytics Virtual Experience",
    org: "Deloitte Australia",
    year: "2025",
    certUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_u7CrGrPpjEWiaJ9vc_1751094951487_completion_certificate.pdf",
  },
  {
    title: "Java Programming: 5-Star Gold Badge",
    org: "HackerRank",
    year: "2026",
    certUrl: null,
  },
  {
    title: "100+ Problems Solved",
    org: "LeetCode",
    year: "2026",
    certUrl: "https://leetcode.com/u/Codeimity/",
  },
];



export const hackathons = [
  { name: "FOSS Hack 2026", result: "Special Mention", year: "2026" },
  { name: "ET AI Hackathon 2.0", result: "Finalist", year: "2026" },
];

export const education = [
  {
    school: "Guru Gobind Singh Indraprastha University",
    degree: "B.Tech, Computer Science & Engineering",
    period: "2024 — Expected 2028",
    note: "CGPA: 9.2/10 • Expected Graduation: June 2028 • New Delhi, India",
  },
];



export const testimonials = [
  {
    quote: "I focus on building backend applications with Java, Spring Boot, REST APIs, and microservices, while strengthening my understanding of databases and core computer science fundamentals.",
    name: "Backend Engineering",
    role: "Technical Focus",
  },
  {
    quote: "I'm exploring Machine Learning, Data Science, and Generative AI through structured learning and projects involving LLM APIs, local models, and AI-powered applications.",
    name: "AI & Data Science",
    role: "Learning & Projects",
  },
  {
    quote: "I actively practice Data Structures and Algorithms, having solved 100+ LeetCode problems, and contribute to technical learning initiatives through my experience with the GeeksforGeeks Student Chapter at DTC.",
    name: "Problem Solving",
    role: "Practice & Leadership",
  },
];

