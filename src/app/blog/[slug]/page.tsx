import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Mdx } from "@/components/mdx";
import { TableOfContents } from "@/components/table-of-contents";
import { BlogCard } from "@/components/blog-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/content";
import { getTableOfContents } from "@/lib/toc";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, Calendar, Clock } from "@/components/icons";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const toc = getTableOfContents(post.content);
  const related = getRelatedPosts(post);

  return (
    <Container className="py-12">
      <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2">
        <Link href="/blog">
          <ArrowLeft className="size-4" /> All posts
        </Link>
      </Button>

      <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12">
        <article className="min-w-0">
          <header className="space-y-4">
            <Badge variant="secondary" className="font-normal">
              {post.category}
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground">{post.summary}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-4" />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4" />
                {post.readingTime}
              </span>
            </div>
          </header>

          <hr className="my-8 border-border" />

          <Mdx source={post.content} />

          {post.tags && post.tags.length > 0 ? (
            <div className="mt-10 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="font-normal">
                  #{tag}
                </Badge>
              ))}
            </div>
          ) : null}
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <TableOfContents items={toc} />
          </div>
        </aside>
      </div>

      {related.length > 0 ? (
        <section className="mt-16">
          <h2 className="mb-6 text-xl font-bold tracking-tight">
            Related posts
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {related.map((item) => (
              <BlogCard key={item.slug} post={item} />
            ))}
          </div>
        </section>
      ) : null}
    </Container>
  );
}
