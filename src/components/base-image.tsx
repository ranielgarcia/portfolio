import NextImage, { type ImageProps } from "next/image";

// next/image with unoptimized:true in a static export does not prepend
// basePath to root-relative src strings. This wrapper does it manually
// so images resolve correctly on GitHub Pages (e.g. /portfolio/profile.png).
// Uses process.env.BASE_PATH (server-side, set by the CI workflow) so it
// works correctly in RSC context without NEXT_PUBLIC_ bundling quirks.
const BASE_PATH = process.env.BASE_PATH ?? "";

export function BaseImage({ src, ...props }: ImageProps) {
  const resolvedSrc =
    typeof src === "string" && src.startsWith("/")
      ? `${BASE_PATH}${src}`
      : src;

  return <NextImage src={resolvedSrc} {...props} />;
}
