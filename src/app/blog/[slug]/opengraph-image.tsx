import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";
import { getAllPosts, getPostBySlug } from "@/lib/content";

export const alt = "Blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title ?? siteConfig.name;
  const category = post?.category ?? "Blog";

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
        background: "linear-gradient(135deg, #0b1120 0%, #111827 100%)",
        color: "white",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            borderRadius: 14,
            background: "#4f46e5",
            fontSize: 26,
            fontWeight: 700,
          }}
        >
          RG
        </div>
        <div style={{ fontSize: 26, color: "#c7d2fe" }}>{siteConfig.name}</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 28, color: "#a5b4fc", marginBottom: 20 }}>
          {category}
        </div>
        <div style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.12 }}>
          {title}
        </div>
      </div>

      <div style={{ fontSize: 26, color: "#94a3b8" }}>
        {`${siteConfig.url.replace("https://", "")}/blog`}
      </div>
    </div>,
    size,
  );
}
