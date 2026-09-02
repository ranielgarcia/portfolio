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
    "I'm a senior software engineer with over 8 years of experience building and maintaining web applications, services, and infrastructure in the .NET ecosystem.",
    "My work spans full-stack application development, REST APIs, cloud services, DevOps pipelines, testing, and infrastructure as code using Azure, Azure DevOps, Terraform, and Bicep.",
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
    ],
  },
  {
    title: "Frontend",
    icon: Layers,
    accent: ["oklch(0.54 0.16 220)", "oklch(0.72 0.13 215)"],
    skills: ["React", "Next.js", "Node.js", "AG Grid", "jQuery", "Bootstrap"],
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
      "Develop and maintain complex web applications, services, and infrastructure using Microsoft technologies.",
      "Upgrade and optimize web applications, APIs, databases, Azure DevOps pipelines, and Terraform infrastructure.",
      "Build complex applications from scratch in Agile delivery teams.",
    ],
    technologies: [
      ".NET",
      "C#",
      "ASP.NET Core",
      "React",
      "Next.js",
      "AG Grid",
      "GraphQL",
      "EF Core",
      "Azure SQL",
      "Azure DevOps",
      "Terraform",
    ],
    highlights: [
      "Contributed to a complex trade-planning system alongside senior developers, building .NET APIs and services, frontend components, Terraform infrastructure, and custom command-line tools.",
      "Implemented unit and integration tests to support system reliability.",
    ],
  },
  {
    company: "ON Semiconductor Philippines",
    role: "Applications Engineer",
    duration: "May 2017 — Jul 2021",
    location: "Tarlac, Philippines",
    responsibilities: [
      "Served as the primary liaison between Manufacturing Operations and IT for automation and system improvements supporting Assembly and Test operations.",
      "Developed and maintained web-based applications and solutions deployed within operations.",
      "Supported the development, testing, and sustainment of IT applications used in manufacturing processes.",
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
      "Delivered automation and web-based solutions that supported manufacturing operations.",
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
        name: '16" MacBook Pro (M3 Pro)',
        description: "Primary machine for day-to-day development.",
      },
      {
        name: 'Dual 27" 4K monitors',
        description: "One for the editor, one for docs and terminals.",
      },
      {
        name: "Keychron K3 (low-profile)",
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
        name: "Linear",
        description: "Lightweight issue tracking that stays out of the way.",
      },
      {
        name: "Raycast",
        description: "Launcher, clipboard history, and snippets.",
      },
    ],
  },
];
