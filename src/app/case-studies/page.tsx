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
            {caseStudies.map((cs) => (
              <Card
                key={cs.slug}
                className="group relative flex h-full flex-col transition-colors hover:border-brand/50"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-lg font-semibold">
                      <Link
                        href={`/case-studies/${cs.slug}`}
                        className="after:absolute after:inset-0"
                      >
                        {cs.title}
                      </Link>
                    </h2>
                    <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                  </div>
                  <p className="text-sm text-muted-foreground">{cs.summary}</p>
                </CardHeader>
                <CardContent className="mt-auto flex flex-wrap gap-1.5">
                  {(cs.technologies ?? []).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
