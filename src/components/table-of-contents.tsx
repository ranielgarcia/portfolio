"use client";

import * as React from "react";
import type { TocEntry } from "@/lib/toc";
import { cn } from "@/lib/utils";

export function TableOfContents({ items }: { items: TocEntry[] }) {
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    if (items.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "0% 0% -80% 0%", threshold: 0 },
    );

    for (const item of items) {
      const el = document.getElementById(item.slug);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="space-y-2 text-sm">
      <p className="font-semibold">On this page</p>
      <ul className="space-y-1.5 border-l border-border">
        {items.map((item) => (
          <li key={item.slug} style={{ paddingLeft: (item.level - 2) * 12 }}>
            <a
              href={`#${item.slug}`}
              className={cn(
                "-ml-px block border-l border-transparent pl-3 text-muted-foreground transition-colors hover:text-foreground",
                activeId === item.slug &&
                  "border-brand font-medium text-foreground",
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
