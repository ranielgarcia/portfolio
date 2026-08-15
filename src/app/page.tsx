import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SocialLinks } from "@/components/social-links";
import { SkillsGrid } from "@/components/skills-grid";
import { ProjectCard } from "@/components/project-card";
import { BlogCard } from "@/components/blog-card";
import { Recommendations } from "@/components/recommendations";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
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
        <Container className="flex flex-col-reverse items-center gap-10 pt-16 pb-12 md:flex-row md:justify-between md:pt-24">
          <Reveal className="max-w-xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Hi, I&apos;m <span className="text-brand">Raniel Garcia</span>
            </h1>
            <p className="mt-3 text-lg font-medium text-muted-foreground">
              {siteConfig.specialization}
            </p>
            <p className="mt-4 text-muted-foreground">{siteConfig.shortBio}</p>

            <div className="mt-8 flex flex-wrap gap-3">
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

            <SocialLinks className="mt-6 -ml-2" />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative">
              <Image
                src="/profile.png"
                alt={siteConfig.name}
                width={260}
                height={260}
                priority
                className="size-52 rounded-full border-4 border-background object-cover shadow-xl sm:size-64"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Featured Projects */}
      {featured.length > 0 && (
        <Container className="py-12">
          <SectionTitle
            title="Featured Projects"
            href="/projects"
            linkLabel="All projects"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      )}

      {/* Skills */}
      <Container className="py-12">
        <SectionTitle title="Skills &amp; Tooling" />
        <SkillsGrid />
      </Container>

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <Container className="py-12">
          <SectionTitle
            title="From the Blog"
            href="/blog"
            linkLabel="All posts"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      )}

      {/* Recommendations */}
      <Container className="py-12">
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
    <div className="mb-6 flex items-end justify-between">
      <h2
        className="text-2xl font-bold tracking-tight"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {href && linkLabel ? (
        <Link
          href={href}
          className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
        >
          {linkLabel} <ArrowRight className="size-4" />
        </Link>
      ) : null}
    </div>
  );
}
