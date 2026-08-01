import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { BlogCard } from "@/components/blog-card";
import { Badge } from "@/components/ui/badge";
import { getAllPosts, getAllCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing on software architecture, .NET, Azure, and engineering decision-making.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Writing"
        description="Notes on architecture, .NET, Azure, and building software that lasts."
      />
      <Container className="pb-8">
        {categories.length > 0 ? (
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category.name}
                variant="outline"
                className="font-normal"
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        ) : null}

        {posts.length === 0 ? (
          <p className="text-muted-foreground">Posts are on the way.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
