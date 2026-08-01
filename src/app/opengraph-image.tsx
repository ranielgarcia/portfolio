import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "linear-gradient(135deg, #0b1120 0%, #111827 100%)",
        color: "white",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 16,
            background: "#4f46e5",
            fontSize: 34,
            fontWeight: 700,
          }}
        >
          RG
        </div>
        <div style={{ fontSize: 30, color: "#c7d2fe" }}>
          {siteConfig.url.replace("https://", "")}
        </div>
      </div>
      <div
        style={{
          fontSize: 68,
          fontWeight: 800,
          marginTop: 40,
          lineHeight: 1.1,
        }}
      >
        {siteConfig.name}
      </div>
      <div style={{ fontSize: 36, color: "#a5b4fc", marginTop: 12 }}>
        {siteConfig.role}
      </div>
      <div
        style={{ fontSize: 26, color: "#94a3b8", marginTop: 24, maxWidth: 900 }}
      >
        {siteConfig.specialization}
      </div>
    </div>,
    size,
  );
}
