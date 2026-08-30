import Link from "next/link";
import type { Post } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ArrowUpRight, Calendar, Clock } from "@/components/icons";
import { formatDate } from "@/lib/utils";

export function BlogCard({ post }: { post: Post }) {
  return (
    <Card className="card-interactive group relative h-full">
      <CardHeader className="gap-4 pb-1">
        <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
          <Badge variant="outline" className="font-normal text-brand">
            {post.category}
          </Badge>
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <Clock className="size-3.5" />
            {post.readingTime}
          </span>
        </div>
        <h3 className="text-lg font-semibold leading-snug">
          <Link
            href={`/blog/${post.slug}`}
            className="outline-none after:absolute after:inset-0"
          >
            {post.title}
          </Link>
        </h3>
      </CardHeader>
      <CardContent className="flex-1 pt-1">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {post.summary}
        </p>
      </CardContent>
      <CardFooter className="justify-between gap-3 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <Calendar className="size-3.5" />
          {formatDate(post.date)}
        </span>
        <span className="flex size-7 shrink-0 items-center justify-center rounded-md border bg-background text-muted-foreground transition-colors group-hover:text-brand group-focus-within:text-brand">
          <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </CardFooter>
    </Card>
  );
}
