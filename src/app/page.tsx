import Link from "next/link";
import { Container } from "@/components/container";
import { ProfileHero } from "@/components/profile-hero";
import { Reveal } from "@/components/reveal";
import { SocialLinks } from "@/components/social-links";
import { SkillsGrid } from "@/components/skills-grid";
import { ProjectCard } from "@/components/project-card";
import { BlogCard } from "@/components/blog-card";
import { Recommendations } from "@/components/recommendations";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getFeaturedProjects, getAllPosts } from "@/lib/content";
import { ArrowRight, Download, BookOpen } from "@/components/icons";

export default function HomePage() {
  const featured = getFeaturedProjects().slice(0, 3);
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]"
          style={{
            backgroundImage:
              "radial-gradient(40rem 20rem at 50% -10%, color-mix(in oklab, var(--brand) 25%, transparent), transparent)",
          }}
        />
        <Container className="pt-20 pb-16 md:pt-28 md:pb-24">
          <Reveal>
            <ProfileHero />
          </Reveal>

          <Reveal
            delay={0.1}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-between"
          >
            <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
              <Button asChild size="lg">
                <Link href="/projects">
                  View Projects <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/blog">
                  <BookOpen className="size-4" /> Read Blog
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link href="/resume">
                  <Download className="size-4" /> Download Resume
                </Link>
              </Button>
            </div>
            <SocialLinks />
          </Reveal>
        </Container>
      </section>

      {/* Featured Projects */}
      {featured.length > 0 && (
        <>
          <Separator className="opacity-50" />
          <Container className="py-16">
            <SectionTitle
              title="Featured Projects"
              href="/projects"
              linkLabel="All projects"
            />
            <div className="grid gap-5 md:grid-cols-3">
              {featured.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </Container>
        </>
      )}

      {/* Skills */}
      <Separator className="opacity-50" />
      <Container className="py-16">
        <SectionTitle title="Skills &amp; Tooling" />
        <SkillsGrid />
      </Container>

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <>
          <Separator className="opacity-50" />
          <Container className="py-16">
            <SectionTitle
              title="From the Blog"
              href="/blog"
              linkLabel="All posts"
            />
            <div className="grid gap-5 md:grid-cols-3">
              {recentPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </Container>
        </>
      )}

      {/* Recommendations */}
      <Separator className="opacity-50" />
      <Container className="py-16">
        <SectionTitle title="What People Say" />
        <Recommendations />
      </Container>
    </>
  );
}

function SectionTitle({
  title,
  href,
  linkLabel,
}: {
  title: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <h2
        className="text-2xl font-bold tracking-tight sm:text-3xl"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {href && linkLabel ? (
        <Link
          href={href}
          className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-brand hover:underline"
        >
          {linkLabel} <ArrowRight className="size-4" />
        </Link>
      ) : null}
    </div>
  );
}
