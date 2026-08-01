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
    "I'm a senior software engineer with a focus on backend and cloud-native development using .NET and Azure. I care deeply about designing systems that are correct, observable, and easy to evolve.",
    "My work spans domain modeling, API design, messaging and event-driven workflows, and building the infrastructure that keeps those systems running reliably in production.",
  ],
  yearsOfExperience: 8,
  industries: ["Education", "Fintech", "Logistics", "SaaS"],
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
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["C#", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "ASP.NET Core",
      "EF Core",
      "FastEndpoints",
      "SignalR",
      "Wolverine",
    ],
  },
  {
    title: "Frontend",
    icon: Layers,
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: [
      "Azure App Service",
      "Azure SQL",
      "Azure Storage",
      "Key Vault",
      "Application Insights",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL Server", "Azure SQL", "Cosmos DB", "MySQL"],
  },
  {
    title: "DevOps",
    icon: GitBranch,
    skills: [
      "Azure DevOps",
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "Terraform",
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
  achievements: string[];
};

export const experiences: Experience[] = [
  {
    company: "Northwind Cloud",
    role: "Senior Software Engineer",
    duration: "2022 — Present",
    location: "Remote",
    responsibilities: [
      "Lead the design of a multi-tenant SaaS platform on Azure using Clean Architecture and CQRS.",
      "Own the messaging backbone (Wolverine) for asynchronous, event-driven workflows.",
      "Mentor engineers on domain-driven design and testing strategy.",
    ],
    technologies: [
      "ASP.NET Core",
      "Wolverine",
      "Azure SQL",
      "Cosmos DB",
      "Kubernetes",
    ],
    achievements: [
      "Cut p95 API latency by 40% through query tuning and caching.",
      "Introduced trunk-based delivery with GitHub Actions, reducing lead time to hours.",
    ],
  },
  {
    company: "Meridian Fintech",
    role: "Software Engineer",
    duration: "2019 — 2022",
    location: "Manila, PH",
    responsibilities: [
      "Built real-time transaction dashboards with SignalR and React.",
      "Designed EF Core data access with a focus on correctness and performance.",
      "Implemented observability with Application Insights across services.",
    ],
    technologies: [
      "ASP.NET Core",
      "SignalR",
      "EF Core",
      "SQL Server",
      "Azure App Service",
    ],
    achievements: [
      "Delivered a fraud-signal pipeline processing millions of events per day.",
      "Reduced report generation time from minutes to seconds.",
    ],
  },
  {
    company: "BrightPath Solutions",
    role: "Full-Stack Developer",
    duration: "2017 — 2019",
    location: "Manila, PH",
    responsibilities: [
      "Migrated a legacy PHP application to a modern .NET stack.",
      "Developed customer-facing features across the front and back end.",
    ],
    technologies: ["ASP.NET Core", "MySQL", "JavaScript", "Docker"],
    achievements: [
      "Led a phased migration with zero unplanned downtime.",
      "Established the team's first automated CI pipeline.",
    ],
  },
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
