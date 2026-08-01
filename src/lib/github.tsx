import { Star, GitFork } from "@/components/icons";

export type RepoMeta = {
  stars: number;
  forks: number;
  updatedAt: string;
};

/**
 * Best-effort fetch of public repository metadata from the GitHub REST API.
 * Never throws — returns null on any failure (rate limits, network, 404) so
 * it can be used safely during static generation without breaking the build.
 */
export async function getRepoMeta(
  githubUrl: string | undefined,
): Promise<RepoMeta | null> {
  if (!githubUrl) return null;

  const match = githubUrl.match(/github\.com\/([^/]+)\/([^/#?]+)/i);
  if (!match) return null;

  const owner = match[1];
  const repo = match[2].replace(/\.git$/, "");

  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 60 * 60 * 6 },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      stargazers_count?: number;
      forks_count?: number;
      updated_at?: string;
    };
    return {
      stars: data.stargazers_count ?? 0,
      forks: data.forks_count ?? 0,
      updatedAt: data.updated_at ?? "",
    };
  } catch {
    return null;
  }
}

export function RepoStats({ meta }: { meta: RepoMeta }) {
  return (
    <div className="flex items-center gap-4 text-sm text-muted-foreground">
      <span className="inline-flex items-center gap-1.5">
        <Star className="size-4" /> {meta.stars.toLocaleString()}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <GitFork className="size-4" /> {meta.forks.toLocaleString()}
      </span>
    </div>
  );
}
