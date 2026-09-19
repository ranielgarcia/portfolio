import {
  Code2,
  Server,
  Cloud,
  Database,
  GitBranch,
  Layers,
  Bike,
  Dumbbell,
  Coffee,
  BookOpen,
  type LucideIcon,
} from "@/components/icons";

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const about = {
  summary: [
    "Senior Software Engineer with 8+ years of experience designing, developing, and maintaining enterprise applications using C#, .NET, REST APIs, SQL Server, and Microsoft Azure.",
    "Experienced across the full software development lifecycle, including backend services, web applications, database development, automated testing, CI/CD, and Infrastructure as Code using Terraform and Bicep.",
    "Strong background in modernizing existing systems, developing scalable APIs and services, and collaborating in Agile engineering teams. ",
    "Hands-on experience with React, Next.js, Azure DevOps, Docker, and cloud infrastructure.",
  ],
  yearsOfExperience: 8,
  industries: ["Semiconductor", "Retail", "Higher Education"],
  philosophy: [
    "Architecture is about deferring and isolating decisions, not adding layers for their own sake.",
    "Make the implicit explicit — model the domain, name the concepts, and let the code tell the story.",
    "Optimize for change: readable code, strong boundaries, and fast feedback loops beat premature cleverness.",
  ],
} as const;

export type FunFact = { icon: LucideIcon; label: string };

export const funFacts: FunFact[] = [
  { icon: Bike, label: "Weekend cyclist chasing new routes" },
  { icon: Dumbbell, label: "Consistency in the gym mirrors clean commits" },
  { icon: Coffee, label: "Powered by pour-over coffee" },
  { icon: BookOpen, label: "Collector of software architecture books" },
];

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  skills: string[];
  /** OKLCH accent: [light mode, dark mode] */
  accent: [string, string];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: Code2,
    accent: ["oklch(0.54 0.21 264)", "oklch(0.72 0.16 264)"],
    skills: ["C#", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Backend",
    icon: Server,
    accent: ["oklch(0.52 0.18 290)", "oklch(0.70 0.14 285)"],
    skills: [
      ".NET",
      ".NET Core",
      "ASP.NET Core",
      "EF Core",
      "Dapper",
      "REST APIs",
      "GraphQL",
      "gRPC",
    ],
  },
  {
    title: "Frontend",
    icon: Layers,
    accent: ["oklch(0.54 0.16 220)", "oklch(0.72 0.13 215)"],
    skills: ["React", "Next.js", "Node.js"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    accent: ["oklch(0.54 0.15 200)", "oklch(0.72 0.12 200)"],
    skills: [
      "Azure",
      "Azure DevOps",
      "Azure SQL",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Bicep",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    accent: ["oklch(0.52 0.15 172)", "oklch(0.70 0.12 170)"],
    skills: ["SQL Server", "T-SQL", "Azure SQL", "MySQL"],
  },
  {
    title: "Platform & Quality",
    icon: GitBranch,
    accent: ["oklch(0.52 0.14 145)", "oklch(0.70 0.11 145)"],
    skills: [
      "Git",
      "Unit Testing",
      "Integration Testing",
      "IIS",
      "Virtual Machines",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export type Experience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: "Accenture Philippines",
    role: "Senior App Development Specialist",
    duration: "Aug 2021 — Present",
    location: "Philippines",
    responsibilities: [
      "Developed comprehensive unit and integration test suites for .NET APIs and services, improving regression coverage and helping reduce the risk of defects during application changes and enhancements.",
      "Designed and developed standalone support tools that streamlined recurring operational tasks and improved the efficiency of the support team's day-to-day activities.",
      "Contributed to the end-to-end development of complex enterprise applications within an Agile team, participating across the frontend, backend, database design, and infrastructure layers throughout the software development lifecycle.",
      "Improved the performance of existing applications and services by optimizing data retrieval and processing logic, as well as SQL queries, resulting in a more responsive user experience.",
      "Designed and developed REST APIs consumed by downstream systems to retrieve and consolidate data from multiple sources, including Azure Cosmos DB, SQL Server, and SharePoint.",
      "Implemented new features and enhancements across an existing SharePoint application, backend APIs, and supporting services, while maintaining compatibility with existing functionality.",
      "Supported and maintained an inventory management application used across multiple states and time zones in Australia, contributing to application reliability, troubleshooting, and ongoing enhancements.",
      "Worked extensively with React, Next.js, Azure DevOps, Docker, and cloud infrastructure as part of application development, deployment, and maintenance activities.",
    ],
    technologies: [
      ".NET",
      "C#",
      "ASP.NET Core",
      "REST APIs",
      "Entity Framework Core",
      "React",
      "Next.js",
      "AG Grid",
      "GraphQL",
      "EF Core",
      "Docker",
      "Kubernetes",
      "ArgoCD",
      "SharePoint Online",
      "SQL Server/Database",
      "Azure Cosmos Db",
      "Azure",
      "Azure DevOps",
      "Terraform",
    ],
    highlights: [
      "Contributed to the end-to-end development of complex enterprise applications within an Agile team, participating across the frontend, backend, database design, and infrastructure layers throughout the software development lifecycle.",
      "Worked extensively with React, Next.js, Azure DevOps, Docker, and cloud infrastructure as part of application development, deployment, and maintenance activities.",
    ],
  },
  {
    company: "ON Semiconductor Philippines",
    role: "Applications Engineer",
    duration: "May 2017 — Jul 2021",
    location: "Tarlac, Philippines",
    responsibilities: [
      "Served as the primary liaison between Operations (Assembly & Test) and IT, ensuring the development of necessary automation and system improvements to support Manufacturing Operations.",
      "Led the development and maintenance of web-based applications and solutions deployed within operations.",
      "Provided support for the development, testing, and sustainment of IT applications used in manufacturing processes.",
    ],
    technologies: [
      "C#",
      "ASP.NET MVC",
      "PHP",
      "Dapper",
      "MySQL",
      "jQuery",
      "Bootstrap",
      "IIS",
      "Virtual Machines",
    ],
    highlights: [
      "Led the development and maintenance of web-based applications and solutions deployed within operations.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Education & certifications                                          */
/* ------------------------------------------------------------------ */

export type Education = {
  degree: string;
  institution: string;
  year: string;
};

export const education: Education[] = [
  {
    degree: "BS in Computer Science",
    institution: "Tarlac State University",
    year: "2017",
  },
];

export const certifications = [
  "AZ-900 - Microsoft Azure Fundamentals",
  "DP-900 - Microsoft Azure Data Fundamentals",
  "SC-900 - Microsoft Security, Compliance, and Identity Fundamentals",
  "AI-900 - Microsoft Azure AI Fundamentals",
  "AZ-200 - Azure Developer Associate",
  "AZ-104 - Microsoft Azure Administrator",
  "AZ-400 - Designing and Implementing Microsoft DevOps Solutions",
  "Terraform Associate (003) Certification",
];
/* ------------------------------------------------------------------ */
/* Recommendations                                                     */
/* ------------------------------------------------------------------ */

export type Recommendation = {
  name: string;
  position: string;
  company: string;
  avatar?: string;
  quote: string;
};

export const recommendations: Recommendation[] = [
  {
    name: "Alexan Ocampo",
    position: "Business Owner",
    company: "Upwork.com",
    quote:
      "Raniel is very knowledgeable and professional. He was able to deliver excellent quality work in a very timely manner and is very dedicated to deadlines. He completed the project in less time than expected with no issues or problems. Raniel is very polite and was easy to communicate with. He was fast to address feedback and was very patient in walking me thoroughly through the process of the project to help me better understand and learn. He had always provided me with detailed explanations and information which I really appreciate a lot. Beyond grateful to have been able to work on this project with Raniel. Would absolutely recommend!",
  },
  {
    name: "Sofia Delgado",
    position: "Engineering Manager",
    company: "Northwind Cloud",
    quote:
      "Raniel has a rare combination of deep technical skill and clear communication. He turns ambiguous requirements into well-modeled, maintainable systems.",
  },
  {
    name: "Marcus Lin",
    position: "Principal Architect",
    company: "Meridian Fintech",
    quote:
      "One of the most thoughtful engineers I've worked with. His architecture decisions consistently aged well as the product grew.",
  },
  {
    name: "Elena Rossi",
    position: "Product Lead",
    company: "BrightPath Solutions",
    quote:
      "Raniel bridges product and engineering effortlessly. He ships reliably and always keeps the long-term health of the codebase in mind.",
  },
];

/* ------------------------------------------------------------------ */
/* Uses                                                                */
/* ------------------------------------------------------------------ */

export type UsesItem = {
  name: string;
  description: string;
};

export type UsesGroup = {
  category: string;
  items: UsesItem[];
};

export const uses: UsesGroup[] = [
  {
    category: "Hardware",
    items: [
      {
        name: "Acer Nitro AN515-55 Laptop",
        description: "Primary machine for day-to-day development.",
      },
      {
        name: 'Dual 24" 4K monitors',
        description: "One for the editor, one for docs and terminals.",
      },
      {
        name: "Keychron K10 Pro",
        description: "Compact mechanical keyboard with brown switches.",
      },
      {
        name: "Logitech MX Master 3S",
        description: "Comfortable for long sessions and quick gestures.",
      },
    ],
  },
  {
    category: "Editor & Terminal",
    items: [
      {
        name: "Visual Studio & VS Code",
        description: "VS for heavy .NET work, VS Code for everything else.",
      },
      {
        name: "Visual Studio Community Edition",
        description:
          "Used for .NET development and other Microsoft ecosystem projects.",
      },
      {
        name: "JetBrains Rider",
        description:
          "When I want first-class refactoring on cross-platform projects.",
      },
      {
        name: "Windows Terminal + PowerShell",
        description: "With oh-my-posh for a readable prompt.",
      },
      {
        name: "GitHub Copilot",
        description: "Pair-programming for boilerplate and exploration.",
      },
    ],
  },
  {
    category: "Development",
    items: [
      {
        name: ".NET & ASP.NET Core",
        description: "The core of most of my backend work.",
      },
      {
        name: "Azure",
        description: "App Service, Container Apps, Service Bus, and SQL.",
      },
      {
        name: "Docker & GitHub Actions",
        description: "Reproducible builds and boring, frequent deploys.",
      },
      {
        name: "PostgreSQL & Redis",
        description: "Reliable defaults for storage and caching.",
      },
      {
        name: "Azure SQL Database",
        description: "Managed relational database service for structured data.",
      },
    ],
  },
  {
    category: "Productivity",
    items: [
      {
        name: "Obsidian",
        description: "Notes, decision records, and a personal knowledge base.",
      },
      {
        name: "Atlassian Jira and Confluence",
        description:
          "Team collaboration tools made by Atlassian that work together to connect project planning with documentation",
      },
    ],
  },
];
