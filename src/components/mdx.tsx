import NextImage from "next/image";
import Link from "next/link";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode, {
  type Options as PrettyCodeOptions,
} from "rehype-pretty-code";
import rehypeBasePath from "@/lib/rehype-base-path";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const prettyCodeOptions: PrettyCodeOptions = {
  theme: "github-dark",
  keepBackground: false,
  defaultLang: "plaintext",
};

/**
 * Rewrite root-relative src/href attrs in raw MDX source before compilation.
 *
 * Why here and not in a component or rehype plugin:
 *  - React components: Turbopack's static export SSG doesn't reliably inline
 *    process.env.BASE_PATH into RSC renders (not a NEXT_PUBLIC_ var).
 *  - Rehype plugin (hast): MDX JSX elements (<video />, <Image />) are
 *    represented as mdxJsxFlowElement nodes, not hast "element" nodes —
 *    the plugin never sees them.
 *
 * Doing it on the raw string before MDXRemote compiles it is guaranteed:
 * the substitution happens once at SSG build time, is baked into the HTML,
 * and works regardless of bundler behavior.
 */
function prefixMediaSrcs(source: string, basePath: string): string {
  if (!basePath) return source;
  // Match src="/<something>" and href="/<something>" but not src=""
  // or src="//external" (protocol-relative) or src="https://...".
  return source.replace(
    /\b(src|href)="(\/(?!\/))/g,
    `$1="${basePath}/`,
  );
}

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
  // The MDX source has already been prefixed by prefixMediaSrcs(), so use
  // plain next/image here — BaseImage would double-prefix the path.
  Image: NextImage,
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
  // Prefix all root-relative src/href values in the raw MDX source before
  // compilation. This is the most reliable method — it handles both JSX
  // elements (<video>, <Image>) and raw HTML markdown (<img>, <video>) in
  // one pass, with no runtime or bundler dependencies.
  const basePath = process.env.BASE_PATH ?? "";
  const prefixedSource = prefixMediaSrcs(source, basePath);

  const options: MDXRemoteProps["options"] = {
    blockJS: false,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        // Still keep the rehype plugin for any raw HTML <img>/<video> that
        // might come through the hast pipeline (e.g. from remark-gfm).
        rehypeBasePath,
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
      <MDXRemote source={prefixedSource} components={components} options={options} />
    </div>
  );
}
