import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { SkillsGrid } from "@/components/skills-grid";
import { Card, CardContent } from "@/components/ui/card";
import { about, funFacts } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { CheckCircle2 } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name} — professional summary, philosophy, and skills.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A bit about me"
        description={siteConfig.shortBio}
      />

      <Container className="pb-8">
        <section className="grid gap-8 border-b construction-divider py-12 md:grid-cols-3">
          <div className="space-y-4 md:col-span-2">
            {about.summary.map((paragraph) => (
              <p key={paragraph} className="text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="space-y-4">
            <Card>
              <CardContent className="space-y-3 pt-6 text-sm">
                <Stat
                  label="Experience"
                  value={`${about.yearsOfExperience}+ years`}
                />
                <Stat label="Based in" value={siteConfig.location} />
                <div>
                  <p className="text-muted-foreground">Industries</p>
                  <p className="font-medium">{about.industries.join(" · ")}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="border-b construction-divider py-12">
          <h2 className="mb-4 text-2xl font-bold tracking-tight">
            Software Philosophy
          </h2>
          <ul className="space-y-3">
            {about.philosophy.map((item) => (
              <li key={item} className="flex gap-3 text-muted-foreground">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-b construction-divider py-12">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">
            Skills &amp; Tooling
          </h2>
          <SkillsGrid />
        </section>

        <section className="py-12">
          <h2 className="mb-4 text-2xl font-bold tracking-tight">Fun Facts</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {funFacts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div
                  key={fact.label}
                  className="flex items-center gap-3 rounded-lg border p-4"
                >
                  <span className="flex size-9 items-center justify-center rounded-md bg-brand/10 text-brand">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-sm">{fact.label}</span>
                </div>
              );
            })}
          </div>
        </section>
      </Container>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-muted-foreground">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
