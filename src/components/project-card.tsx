import Link from "next/link";
import type { Project } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ArrowUpRight } from "@/components/icons";

export function ProjectCard({ project }: { project: Project }) {
  const technologies = project.technologies ?? [];
  const visibleTechnologies = technologies.slice(0, 4);
  const remainingTechnologies =
    technologies.length - visibleTechnologies.length;

  return (
    <Card className="card-interactive group relative h-full">
      <CardHeader className="gap-4 pb-1">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-brand">
            {project.featured ? "Featured project" : "Project"}
          </p>
          <span className="flex size-8 shrink-0 items-center justify-center rounded-md border bg-background/70 text-muted-foreground transition-colors group-hover:text-brand group-focus-within:text-brand">
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold leading-snug">
            <Link
              href={`/projects/${project.slug}`}
              className="outline-none after:absolute after:inset-0"
            >
              {project.title}
            </Link>
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
        </div>
      </CardHeader>
      <CardContent className="mt-auto pt-2">
        <div className="flex flex-wrap gap-1.5">
          {visibleTechnologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="font-normal text-muted-foreground"
            >
              {tech}
            </Badge>
          ))}
          {remainingTechnologies > 0 ? (
            <Badge
              variant="outline"
              className="font-normal text-muted-foreground"
            >
              +{remainingTechnologies}
            </Badge>
          ) : null}
        </div>
      </CardContent>
      {project.featured ? (
        <CardFooter className="justify-between text-xs text-muted-foreground">
          <span>Selected work</span>
          <span className="size-1.5 rounded-full bg-brand" aria-hidden />
        </CardFooter>
      ) : null}
    </Card>
  );
}
