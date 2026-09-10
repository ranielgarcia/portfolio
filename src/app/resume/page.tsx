import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { PrintButton } from "@/components/print-button";
import {
  about,
  certifications,
  education,
  experiences,
  skillGroups,
} from "@/lib/data";
import { siteConfig, socialLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${siteConfig.name} — ${siteConfig.role}.`,
};

export default function ResumePage() {
  return (
    <Container className="max-w-3xl py-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between print:hidden">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
          <p className="mt-1 text-muted-foreground">
            Review my professional experience and qualifications.
          </p>
        </div>
        <PrintButton />
      </div>

      <article className="mt-10 space-y-8">
        <header className="space-y-1 border-b pb-6">
          <h2 className="text-2xl font-bold">{siteConfig.name}</h2>
          <p className="text-brand">{siteConfig.role}</p>
          <p className="text-sm text-muted-foreground">
            {siteConfig.location} · {siteConfig.email}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1 text-sm text-muted-foreground">
            {socialLinks
              .filter((l) => l.label !== "Email")
              .map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
          </div>
        </header>

        <section>
          <h3 className="mb-2 text-xs font-semibold tracking-wide text-muted-foreground">
            Summary
          </h3>
          <p className="text-sm text-muted-foreground">{about.summary[0]}</p>
        </section>

        <section>
          <h3 className="mb-4 text-xs font-semibold tracking-wide text-muted-foreground">
            Experience
          </h3>
          <div className="space-y-6">
            {experiences.map((job) => (
              <div key={`${job.company}-${job.duration}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-semibold">
                    {job.role} · {job.company}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {job.duration}
                  </p>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="mb-3 text-xs font-semibold tracking-wide text-muted-foreground">
            Skills
          </h3>
          <div className="space-y-2 text-sm">
            {skillGroups.map((group) => (
              <div key={group.title} className="flex flex-wrap gap-2">
                <span className="w-24 shrink-0 font-medium">{group.title}</span>
                <span className="flex flex-1 flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="font-normal"
                    >
                      {skill}
                    </Badge>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="mb-3 text-xs font-semibold tracking-wide text-muted-foreground">
            Education
          </h3>
          <div className="space-y-3">
            {education.map((item) => (
              <div
                key={`${item.institution}-${item.degree}`}
                className="flex flex-wrap items-baseline justify-between gap-2 text-sm"
              >
                <p className="font-semibold">{item.degree}</p>
                <p className="text-muted-foreground">{item.year}</p>
                <p className="basis-full text-muted-foreground">
                  {item.institution}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="mb-3 text-xs font-semibold tracking-wide text-muted-foreground">
            Certifications
          </h3>
          <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            {certifications.map((certification) => (
              <li key={certification}>{certification}</li>
            ))}
          </ul>
        </section>
      </article>
    </Container>
  );
}
