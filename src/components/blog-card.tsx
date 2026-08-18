import Link from "next/link";
import type { Post } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Clock } from "@/components/icons";
import { formatDate } from "@/lib/utils";

export function BlogCard({ post }: { post: Post }) {
  return (
    <div className="card-interactive h-full rounded-xl">
    <Card className="group relative flex h-full flex-col transition-colors hover:border-brand/50">
      <CardHeader>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Badge variant="secondary" className="font-normal">
            {post.category}
          </Badge>
        </div>
        <h3 className="mt-1 text-lg font-semibold leading-snug">
          <Link
            href={`/blog/${post.slug}`}
            className="after:absolute after:inset-0"
          >
            {post.title}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground">{post.summary}</p>
      </CardHeader>
      <CardContent className="mt-auto flex items-center gap-4 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <Calendar className="size-3.5" />
          {formatDate(post.date)}
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock className="size-3.5" />
          {post.readingTime}
        </span>
      </CardContent>
    </Card>
    </div>
  );
}
