import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAllPosts, getAllProjects, getAllCaseStudies } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const routes = [
    "",
    "/about",
    "/experience",
    "/projects",
    "/blog",
    "/case-studies",
    "/architecture",
    "/uses",
    "/search",
    "/resume",
    "/contact",
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const projects = getAllProjects().map((project) => ({
    url: `${base}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const caseStudies = getAllCaseStudies().map((cs) => ({
    url: `${base}/case-studies/${cs.slug}`,
    lastModified: new Date(cs.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...projects, ...caseStudies, ...posts];
}
