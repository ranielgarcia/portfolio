import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Mdx } from "@/components/mdx";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllProjects, getProjectBySlug } from "@/lib/content";
import { getRepoMeta, RepoStats } from "@/lib/github";
import { ArrowLeft, Github, ExternalLink } from "@/components/icons";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const repoMeta = await getRepoMeta(project.github);

  return (
    <Container className="max-w-3xl py-12">
      <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2">
        <Link href="/projects">
          <ArrowLeft className="size-4" /> All projects
        </Link>
      </Button>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="text-lg text-muted-foreground">{project.summary}</p>

        {project.technologies && project.technologies.length > 0 ? (
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="font-normal">
                {tech}
              </Badge>
            ))}
          </div>
        ) : null}

        <div className="flex flex-wrap gap-3">
          {project.github ? (
            <Button asChild variant="outline" size="sm">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Github className="size-4" /> Repository
              </a>
            </Button>
          ) : null}
          {project.demo ? (
            <Button asChild size="sm">
              <a href={project.demo} target="_blank" rel="noreferrer noopener">
                <ExternalLink className="size-4" /> Live Demo
              </a>
            </Button>
          ) : null}
        </div>

        {repoMeta ? <RepoStats meta={repoMeta} /> : null}
      </div>

      <hr className="my-8 border-border" />

      <Mdx source={project.content} />
    </Container>
  );
}
