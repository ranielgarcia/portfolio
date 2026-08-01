import GithubSlugger from "github-slugger";

export type TocEntry = {
  level: number;
  text: string;
  slug: string;
};

/**
 * Extracts h2/h3 headings from raw markdown/MDX content, skipping fenced
 * code blocks. Slugs match rehype-slug's output via github-slugger.
 */
export function getTableOfContents(content: string): TocEntry[] {
  const slugger = new GithubSlugger();
  const lines = content.split("\n");
  const entries: TocEntry[] = [];
  let inCodeBlock = false;

  for (const line of lines) {
    if (/^\s*```/.test(line)) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;

    const match = /^(#{2,3})\s+(.*)$/.exec(line);
    if (!match) continue;

    const level = match[1].length;
    const text = match[2].replace(/[*_`]/g, "").trim();
    entries.push({ level, text, slug: slugger.slug(text) });
  }

  return entries;
}
