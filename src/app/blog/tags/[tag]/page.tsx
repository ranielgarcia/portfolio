import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { BlogCard } from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import { getAllTags, getPostsByTag } from "@/lib/content";
import { ArrowLeft } from "@/components/icons";

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  return {
    title: `#${decoded}`,
    description: `Posts tagged “${decoded}”.`,
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const posts = getPostsByTag(decoded);
  if (posts.length === 0) notFound();

  return (
    <>
      <PageHeader
        eyebrow="Tag"
        title={`#${decoded}`}
        description={`${posts.length} post${posts.length === 1 ? "" : "s"} tagged “${decoded}”.`}
      />
      <Container className="pb-8">
        <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2">
          <Link href="/blog">
            <ArrowLeft className="size-4" /> All posts
          </Link>
        </Button>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </>
  );
}
