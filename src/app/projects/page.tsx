import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { getAllProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Featured engineering projects and case studies — architecture, decisions, and lessons learned.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Things I've built"
        description="A selection of projects and case studies focused on architecture and engineering decisions."
      />
      <Container className="pb-8">
        {projects.length === 0 ? (
          <p className="text-muted-foreground">Projects are on the way.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
