import Image from "next/image";
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

const components = {
  a: Anchor,
  Image,
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
