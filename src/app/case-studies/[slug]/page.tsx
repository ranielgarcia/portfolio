import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Mdx } from "@/components/mdx";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/content";
import { ArrowLeft } from "@/components/icons";

export function generateStaticParams() {
  return getAllCaseStudies().map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};
  return {
    title: cs.title,
    description: cs.summary,
    openGraph: { title: cs.title, description: cs.summary },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  return (
    <Container className="max-w-3xl py-12">
      <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2">
        <Link href="/case-studies">
          <ArrowLeft className="size-4" /> All case studies
        </Link>
      </Button>

      <div className="space-y-4">
        {cs.role ? (
          <p className="text-sm font-medium text-brand">{cs.role}</p>
        ) : null}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {cs.title}
        </h1>
        <p className="text-lg text-muted-foreground">{cs.summary}</p>

        {cs.technologies && cs.technologies.length > 0 ? (
          <div className="flex flex-wrap gap-1.5">
            {cs.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="font-normal">
                {tech}
              </Badge>
            ))}
          </div>
        ) : null}
      </div>

      {(cs.problem || cs.outcome) && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {cs.problem ? (
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Problem
                </h2>
                <p className="mt-2 text-sm">{cs.problem}</p>
              </CardContent>
            </Card>
          ) : null}
          {cs.outcome ? (
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Outcome
                </h2>
                <p className="mt-2 text-sm">{cs.outcome}</p>
              </CardContent>
            </Card>
          ) : null}
        </div>
      )}

      {cs.metrics && cs.metrics.length > 0 ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {cs.metrics.map((metric) => (
            <Card key={metric.label}>
              <CardContent className="pt-6 text-center">
                <p className="text-2xl font-bold text-brand">{metric.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {metric.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : null}

      <hr className="my-8 border-border" />

      <Mdx source={cs.content} />
    </Container>
  );
}
