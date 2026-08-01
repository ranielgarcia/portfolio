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
  return (
    <Card className="group relative flex h-full flex-col transition-colors hover:border-brand/50">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold">
            <Link
              href={`/projects/${project.slug}`}
              className="after:absolute after:inset-0"
            >
              {project.title}
            </Link>
          </h3>
          <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
        </div>
        <p className="text-sm text-muted-foreground">{project.summary}</p>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="flex flex-wrap gap-1.5">
          {(project.technologies ?? []).slice(0, 5).map((tech) => (
            <Badge key={tech} variant="secondary" className="font-normal">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      {project.featured ? (
        <CardFooter>
          <Badge className="bg-brand text-brand-foreground">Featured</Badge>
        </CardFooter>
      ) : null}
    </Card>
  );
}
