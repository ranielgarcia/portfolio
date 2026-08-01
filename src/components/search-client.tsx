"use client";

import * as React from "react";
import Link from "next/link";
import type { SearchDoc } from "@/lib/search";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "@/components/icons";

/** Simple, dependency-free relevance scoring over title/summary/keywords. */
function score(doc: SearchDoc, query: string): number {
  const q = query.toLowerCase().trim();
  if (!q) return 0;
  const terms = q.split(/\s+/);
  const title = doc.title.toLowerCase();
  const summary = doc.summary.toLowerCase();
  const keywords = doc.keywords.join(" ").toLowerCase();

  let total = 0;
  for (const term of terms) {
    let s = 0;
    if (title.includes(term)) s += 10;
    if (title.startsWith(term)) s += 5;
    if (keywords.includes(term)) s += 6;
    if (summary.includes(term)) s += 3;
    if (s === 0) return 0; // every term must match somewhere
    total += s;
  }
  return total;
}

export function SearchClient({ docs }: { docs: SearchDoc[] }) {
  const [query, setQuery] = React.useState("");

  const results = React.useMemo(() => {
    if (!query.trim()) return [];
    return docs
      .map((doc) => ({ doc, score: score(doc, query) }))
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((entry) => entry.doc);
  }, [docs, query]);

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts, projects, and case studies…"
          className="pl-9"
          aria-label="Search"
        />
      </div>

      {query.trim() ? (
        results.length > 0 ? (
          <ul className="divide-y divide-border rounded-lg border">
            {results.map((doc) => (
              <li key={doc.href}>
                <Link
                  href={doc.href}
                  className="flex flex-col gap-1 p-4 transition-colors hover:bg-accent"
                >
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="font-normal">
                      {doc.type}
                    </Badge>
                    <span className="font-medium">{doc.title}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{doc.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">
            No results for &ldquo;{query}&rdquo;.
          </p>
        )
      ) : (
        <p className="text-sm text-muted-foreground">
          Start typing to search across the site.
        </p>
      )}
    </div>
  );
}
