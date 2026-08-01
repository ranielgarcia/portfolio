import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type BlogFrontMatter = {
  title: string;
  summary: string;
  date: string;
  category: string;
  tags?: string[];
  cover?: string;
  draft?: boolean;
};

export type ProjectFrontMatter = {
  title: string;
  summary: string;
  technologies?: string[];
  github?: string;
  demo?: string;
  cover?: string;
  featured?: boolean;
  order?: number;
  draft?: boolean;
};

export type Post = {
  slug: string;
  content: string;
  readingTime: string;
} & BlogFrontMatter;

export type Project = {
  slug: string;
  content: string;
} & ProjectFrontMatter;

function readCollection(dir: string): { slug: string; raw: string }[] {
  const full = path.join(CONTENT_DIR, dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => ({
      slug: file.replace(/\.mdx?$/, ""),
      raw: fs.readFileSync(path.join(full, file), "utf8"),
    }));
}

/* ----------------------------- Blog ----------------------------- */

export function getAllPosts(): Post[] {
  return readCollection("blog")
    .map(({ slug, raw }) => {
      const { content, data } = matter(raw);
      const fm = data as BlogFrontMatter;
      return {
        slug,
        content,
        readingTime: readingTime(content).text,
        ...fm,
      };
    })
    .filter((post) => process.env.NODE_ENV === "development" || !post.draft)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getPostsByTag(tag: string): Post[] {
  const target = tag.toLowerCase();
  return getAllPosts().filter((post) =>
    (post.tags ?? []).some((t) => t.toLowerCase() === target),
  );
}

export function getPostsByCategory(category: string): Post[] {
  const target = category.toLowerCase();
  return getAllPosts().filter((post) => post.category.toLowerCase() === target);
}

export function getAllCategories(): { name: string; count: number }[] {
  const map = new Map<string, number>();
  for (const post of getAllPosts()) {
    map.set(post.category, (map.get(post.category) ?? 0) + 1);
  }
  return [...map.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

export function getAllTags(): string[] {
  const set = new Set<string>();
  for (const post of getAllPosts()) {
    for (const tag of post.tags ?? []) set.add(tag);
  }
  return [...set].sort();
}

export function getRelatedPosts(current: Post, limit = 2): Post[] {
  const currentTags = new Set(current.tags ?? []);
  return getAllPosts()
    .filter((post) => post.slug !== current.slug)
    .map((post) => {
      const shared = (post.tags ?? []).filter((t) => currentTags.has(t)).length;
      const sameCategory = post.category === current.category ? 1 : 0;
      return { post, score: shared * 2 + sameCategory };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.post);
}

/* --------------------------- Projects --------------------------- */

export function getAllProjects(): Project[] {
  return readCollection("projects")
    .map(({ slug, raw }) => {
      const { content, data } = matter(raw);
      const fm = data as ProjectFrontMatter;
      return { slug, content, ...fm };
    })
    .filter(
      (project) => process.env.NODE_ENV === "development" || !project.draft,
    )
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured);
}

/* ------------------------- Case Studies ------------------------- */

export type CaseStudyFrontMatter = {
  title: string;
  summary: string;
  date: string;
  role?: string;
  problem?: string;
  outcome?: string;
  technologies?: string[];
  metrics?: { label: string; value: string }[];
  draft?: boolean;
  order?: number;
};

export type CaseStudy = {
  slug: string;
  content: string;
  readingTime: string;
} & CaseStudyFrontMatter;

export function getAllCaseStudies(): CaseStudy[] {
  return readCollection("case-studies")
    .map(({ slug, raw }) => {
      const { content, data } = matter(raw);
      const fm = data as CaseStudyFrontMatter;
      return {
        slug,
        content,
        readingTime: readingTime(content).text,
        ...fm,
      };
    })
    .filter((cs) => process.env.NODE_ENV === "development" || !cs.draft)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return getAllCaseStudies().find((cs) => cs.slug === slug);
}
