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
            <Card className="border-t-brand/40 bg-muted/15">
              <CardContent className="divide-y divide-border/80 py-1 text-sm">
                <Stat
                  label="Experience"
                  value={`${about.yearsOfExperience}+ years`}
                />
                <Stat label="Based in" value={siteConfig.location} />
                <div className="py-3 first:pt-0 last:pb-0">
                  <p className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    Industries
                  </p>
                  <p className="mt-1 font-medium leading-relaxed">
                    {about.industries.join(" · ")}
                  </p>
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
                <article
                  key={fact.label}
                  className="flex min-h-20 items-center gap-4 rounded-md border border-foreground/10 bg-card p-4 shadow-[0_1px_2px_color-mix(in_oklab,var(--foreground)_4%,transparent),0_10px_30px_-24px_color-mix(in_oklab,var(--foreground)_24%,transparent)]"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-brand/15 bg-brand/10 text-brand">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-sm font-medium leading-relaxed">
                    {fact.label}
                  </span>
                </article>
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
    <div className="py-3 first:pt-0 last:pb-0">
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 font-medium">{value}</p>
    </div>
  );
}
