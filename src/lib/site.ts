import { Github, Linkedin, Mail, type IconType } from "@/components/icons";

export const siteConfig = {
  name: "Raniel Garcia",
  role: "Senior Software Engineer",
  specialization: ".NET & Azure | Full-Stack Development | DevOps",
  shortBio:
    "I build web applications, APIs, and cloud infrastructure with .NET, Azure, and modern JavaScript frameworks.",
  url: "https://ranielgarcia.dev",
  email: "ranielgarcia2020@gmail.com",
  location: "Tarlac City, Philippines",
  locale: "en-US",
  ogImage: "/og.png",
  description:
    "Personal portfolio of Raniel Garcia, a senior software engineer with over 8 years of experience building .NET, Azure, full-stack, DevOps, and infrastructure-as-code solutions.",
  keywords: [
    "Raniel Garcia",
    "Software Engineer",
    ".NET",
    "ASP.NET Core",
    "Azure",
    "React",
    "Next.js",
    "Azure DevOps",
    "Terraform",
    "Bicep",
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
    href: "https://www.linkedin.com/in/ranielgarcia2020",
    icon: Linkedin,
  },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
];
