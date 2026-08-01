import type { LucideIcon, LucideProps } from "lucide-react";
import type { ComponentType } from "react";

export {
  Mail,
  Menu,
  X,
  Sun,
  Moon,
  Monitor,
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  Download,
  ExternalLink,
  FileText,
  Clock,
  Calendar,
  Tag,
  Search,
  Code2,
  Server,
  Cloud,
  Database,
  GitBranch,
  Layers,
  Cpu,
  Coffee,
  Bike,
  Dumbbell,
  BookOpen,
  Briefcase,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Quote,
  Rss,
} from "lucide-react";

export type { LucideIcon };
export type IconType = ComponentType<LucideProps>;

function BrandSvg({
  children,
  ...props
}: LucideProps & { children: React.ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={props.size ?? 24}
      height={props.size ?? 24}
      {...props}
    >
      {children}
    </svg>
  );
}

export function Github(props: LucideProps) {
  return (
    <BrandSvg {...props}>
      <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58l-.01-2.05c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.53.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.23 0 4.63-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
    </BrandSvg>
  );
}

export function Linkedin(props: LucideProps) {
  return (
    <BrandSvg {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </BrandSvg>
  );
}

export function StackOverflowIcon(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={props.size ?? 24}
      height={props.size ?? 24}
      {...props}
    >
      <path d="M17 21v-4H7v4" />
      <path d="M7 17h10" />
      <path d="m9 13 8 1.5" />
      <path d="m9.5 9.5 7.5 3" />
      <path d="m11 6 6.5 4.5" />
      <path d="M13.5 3 18 9" />
    </svg>
  );
}
