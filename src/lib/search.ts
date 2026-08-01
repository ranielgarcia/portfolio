import { getAllPosts, getAllProjects, getAllCaseStudies } from "@/lib/content";

export type SearchDoc = {
  title: string;
  summary: string;
  href: string;
  type: "Blog" | "Project" | "Case Study";
  keywords: string[];
};

export function getSearchDocuments(): SearchDoc[] {
  const posts: SearchDoc[] = getAllPosts().map((post) => ({
    title: post.title,
    summary: post.summary,
    href: `/blog/${post.slug}`,
    type: "Blog",
    keywords: [post.category, ...(post.tags ?? [])],
  }));

  const projects: SearchDoc[] = getAllProjects().map((project) => ({
    title: project.title,
    summary: project.summary,
    href: `/projects/${project.slug}`,
    type: "Project",
    keywords: project.technologies ?? [],
  }));

  const caseStudies: SearchDoc[] = getAllCaseStudies().map((cs) => ({
    title: cs.title,
    summary: cs.summary,
    href: `/case-studies/${cs.slug}`,
    type: "Case Study",
    keywords: cs.technologies ?? [],
  }));

  return [...posts, ...projects, ...caseStudies];
}
