import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getAllCaseStudies } from "@/lib/content";
import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "In-depth engineering case studies — the problem, the approach, the trade-offs, and the results.",
};

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="Engineering Case Studies"
        description="Deeper write-ups focused on decision-making, trade-offs, and measurable outcomes."
      />
      <Container className="pb-8">
        {caseStudies.length === 0 ? (
          <p className="text-muted-foreground">Case studies are on the way.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {caseStudies.map((cs) => {
              const technologies = cs.technologies ?? [];
              const visibleTechnologies = technologies.slice(0, 5);
              const remainingTechnologies =
                technologies.length - visibleTechnologies.length;

              return (
                <Card
                  key={cs.slug}
                  className="card-interactive group relative h-full"
                >
                  <CardHeader className="gap-4 pb-1">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-brand">
                        Case study
                      </p>
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-md border bg-background/70 text-muted-foreground transition-colors group-hover:text-brand group-focus-within:text-brand">
                        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-lg font-semibold leading-snug">
                        <Link
                          href={`/case-studies/${cs.slug}`}
                          className="outline-none after:absolute after:inset-0"
                        >
                          {cs.title}
                        </Link>
                      </h2>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {cs.summary}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="mt-auto flex flex-wrap gap-1.5 pt-2">
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
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </Container>
    </>
  );
}
