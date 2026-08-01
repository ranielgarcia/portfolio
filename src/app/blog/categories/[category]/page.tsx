import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { BlogCard } from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import { getAllCategories, getPostsByCategory } from "@/lib/content";
import { ArrowLeft } from "@/components/icons";

export function generateStaticParams() {
  return getAllCategories().map((category) => ({ category: category.name }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const decoded = decodeURIComponent(category);
  return {
    title: `${decoded} posts`,
    description: `Posts in the “${decoded}” category.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const decoded = decodeURIComponent(category);
  const posts = getPostsByCategory(decoded);
  if (posts.length === 0) notFound();

  return (
    <>
      <PageHeader
        eyebrow="Category"
        title={decoded}
        description={`${posts.length} post${posts.length === 1 ? "" : "s"} in “${decoded}”.`}
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
