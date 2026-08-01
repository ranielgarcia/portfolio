import {
  Github,
  Linkedin,
  Mail,
  StackOverflowIcon,
  type IconType,
} from "@/components/icons";

export const siteConfig = {
  name: "Raniel Garcia",
  role: "Senior Software Engineer",
  specialization: ".NET & Azure • Distributed Systems • Cloud Architecture",
  shortBio:
    "I design and build reliable, well-architected backend systems and cloud-native applications with .NET and Azure.",
  url: "https://ranielgarcia.dev",
  email: "hello@ranielgarcia.dev",
  location: "Manila, Philippines",
  locale: "en-US",
  ogImage: "/og.png",
  description:
    "Personal portfolio of Raniel Garcia — a senior software engineer specializing in .NET, Azure, and distributed systems. Case studies, architecture write-ups, and technical blogs.",
  keywords: [
    "Raniel Garcia",
    "Software Engineer",
    ".NET",
    "ASP.NET Core",
    "Azure",
    "Distributed Systems",
    "Software Architecture",
    "Clean Architecture",
    "CQRS",
    "DDD",
  ],
} as const;

export type NavItem = {
  title: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Experience", href: "/experience" },
  { title: "Projects", href: "/projects" },
  { title: "Blog", href: "/blog" },
  { title: "Resume", href: "/resume" },
  { title: "Contact", href: "/contact" },
];

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/ranielgarcia", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ranielgarcia",
    icon: Linkedin,
  },
  {
    label: "Stack Overflow",
    href: "https://stackoverflow.com/users/0000000/ranielgarcia",
    icon: StackOverflowIcon,
  },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
];
