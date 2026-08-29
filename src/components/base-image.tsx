import NextImage, { type ImageProps } from "next/image";

// next/image with unoptimized:true in a static export does not prepend
// basePath to root-relative src strings. This wrapper does it manually
// so images resolve correctly on GitHub Pages (e.g. /portfolio/profile.png).
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function BaseImage({ src, ...props }: ImageProps) {
  const resolvedSrc =
    typeof src === "string" && src.startsWith("/")
      ? `${BASE_PATH}${src}`
      : src;

  return <NextImage src={resolvedSrc} {...props} />;
}
