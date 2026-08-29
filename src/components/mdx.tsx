import { BaseImage as Image } from "@/components/base-image";
import Link from "next/link";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode, {
  type Options as PrettyCodeOptions,
} from "rehype-pretty-code";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const prettyCodeOptions: PrettyCodeOptions = {
  theme: "github-dark",
  keepBackground: false,
  defaultLang: "plaintext",
};

// Resolve the basePath injected at build time (e.g. "/portfolio" on GitHub Pages).
// Falls back to "" in local development.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function Anchor({ href = "", className, ...props }: ComponentProps<"a">) {
  const isExternal = /^https?:\/\//.test(href);
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className={className}
        {...props}
      />
    );
  }
  return <Link href={href} className={className} {...props} />;
}

// Raw <video> elements in MDX bypass Next.js routing, so their root-relative
// src paths won't be rewritten with the basePath automatically. We prefix them
// here so they resolve correctly on GitHub Pages (e.g. /portfolio/projects/...).
function Video({ src, ...props }: ComponentProps<"video">) {
  // src can be string | Blob | MediaSource | MediaStream per React types;
  // we only need to rewrite root-relative string paths.
  const resolvedSrc =
    typeof src === "string" && src.startsWith("/")
      ? `${BASE_PATH}${src}`
      : src;
  return <video src={resolvedSrc as string | undefined} {...props} />;
}

const components = {
  a: Anchor,
  Image,
  video: Video,
  Callout({
    type = "info",
    children,
  }: {
    type?: "info" | "warning" | "success";
    children: React.ReactNode;
  }) {
    const styles: Record<string, string> = {
      info: "border-brand/40 bg-brand/5",
      warning: "border-amber-500/40 bg-amber-500/5",
      success: "border-emerald-500/40 bg-emerald-500/5",
    };
    return (
      <div
        className={cn("my-6 rounded-lg border-l-4 p-4 text-sm", styles[type])}
      >
        {children}
      </div>
    );
  },
};

export function Mdx({
  source,
  className,
}: {
  source: string;
  className?: string;
}) {
  const options: MDXRemoteProps["options"] = {
    blockJS: false,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [rehypePrettyCode, prettyCodeOptions],
        [
          rehypeAutolinkHeadings,
          {
            behavior: "wrap",
            properties: { className: ["no-underline"] },
          },
        ],
      ],
    },
  };

  return (
    <div
      className={cn(
        "prose prose-neutral max-w-none dark:prose-invert",
        "prose-headings:scroll-mt-24 prose-headings:font-semibold",
        "prose-pre:bg-transparent prose-pre:p-0",
        className,
      )}
    >
      <MDXRemote source={source} components={components} options={options} />
    </div>
  );
}
