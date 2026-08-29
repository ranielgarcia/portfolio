import type { NextConfig } from "next";

// BASE_PATH is injected by the GitHub Actions workflow (actions/configure-pages
// outputs base_path, e.g. "/portfolio" for a repo-based GitHub Pages site).
// Falls back to "" for local development.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",

  // Required for GitHub Pages sub-path deployments (e.g. /portfolio).
  // Without these, all asset URLs resolve from the domain root and return 404.
  basePath,
  assetPrefix: basePath,

  // Image optimization requires a running server; static exports must disable it.
  images: {
    unoptimized: true,
  },

  // Expose basePath to client-side components (e.g. MDX video elements) at
  // build time via process.env.NEXT_PUBLIC_BASE_PATH.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
