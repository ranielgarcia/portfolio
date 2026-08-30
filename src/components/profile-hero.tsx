import type { ReactNode } from "react";

import { BaseImage as Image } from "@/components/base-image";
import { siteConfig } from "@/lib/site";

const token = {
  tag: "text-[#f778ba]",
  attribute: "text-[#79c0ff]",
  string: "text-[#a5d6ff]",
  punctuation: "text-[#8b949e]",
  text: "text-[#c9d1d9]",
};

function CodeLine({
  number,
  children,
}: {
  number: number;
  children: ReactNode;
}) {
  return (
    <div className="grid grid-cols-[2rem_minmax(0,1fr)] gap-4 leading-6 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-5">
      <span aria-hidden className="select-none text-right text-[#484f58]">
        {number}
      </span>
      <span className="wrap-break-word whitespace-pre-wrap">{children}</span>
    </div>
  );
}

export function ProfileHero() {
  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
      <figure className="min-w-0 overflow-hidden rounded-lg border border-white/10 bg-[#0d1117] shadow-2xl shadow-black/15 ring-1 ring-black/10">
        <figcaption className="flex h-11 items-center justify-between border-b border-white/10 bg-[#161b22] px-4">
          <div aria-hidden className="flex gap-2">
            <span className="size-2.5 rounded-full bg-[#f85149]" />
            <span className="size-2.5 rounded-full bg-[#d29922]" />
            <span className="size-2.5 rounded-full bg-[#3fb950]" />
          </div>
          <span className="font-mono text-[11px] text-[#8b949e]">
            profile.tsx
          </span>
        </figcaption>

        <div
          className="overflow-x-auto px-3 py-5 font-mono text-xs sm:px-4 sm:py-6 sm:text-[13px]"
          aria-label="JSX source code for Raniel Garcia's profile card"
        >
          <CodeLine number={1}>
            <span className={token.punctuation}>&lt;</span>
            <span className={token.tag}>div</span>{" "}
            <span className={token.attribute}>className</span>
            <span className={token.punctuation}>=</span>
            <span className={token.string}>&quot;profile-card&quot;</span>
            <span className={token.punctuation}>&gt;</span>
          </CodeLine>
          <CodeLine number={2}>
            {"  "}
            <span className={token.punctuation}>&lt;</span>
            <span className={token.tag}>Image</span>
          </CodeLine>
          <CodeLine number={3}>
            {"    "}
            <span className={token.attribute}>src</span>
            <span className={token.punctuation}>=</span>
            <span className={token.string}>&quot;/profile.png&quot;</span>
          </CodeLine>
          <CodeLine number={4}>
            {"    "}
            <span className={token.attribute}>alt</span>
            <span className={token.punctuation}>=</span>
            <span className={token.string}>&quot;{siteConfig.name}&quot;</span>
          </CodeLine>
          <CodeLine number={5}>
            {"  "}
            <span className={token.punctuation}>/&gt;</span>
          </CodeLine>
          <CodeLine number={6}>
            {"  "}
            <span className={token.punctuation}>&lt;</span>
            <span className={token.tag}>div</span>
            <span className={token.punctuation}>&gt;</span>
          </CodeLine>
          <CodeLine number={7}>
            {"    "}
            <span className={token.punctuation}>&lt;</span>
            <span className={token.tag}>span</span>
            <span className={token.punctuation}>&gt;</span>
            <span className={token.text}>{siteConfig.role}</span>
            <span className={token.punctuation}>&lt;/</span>
            <span className={token.tag}>span</span>
            <span className={token.punctuation}>&gt;</span>
          </CodeLine>
          <CodeLine number={8}>
            {"    "}
            <span className={token.punctuation}>&lt;</span>
            <span className={token.tag}>h1</span>
            <span className={token.punctuation}>&gt;</span>
            <span className={token.text}>{siteConfig.name}</span>
            <span className={token.punctuation}>&lt;/</span>
            <span className={token.tag}>h1</span>
            <span className={token.punctuation}>&gt;</span>
          </CodeLine>
          <CodeLine number={9}>
            {"    "}
            <span className={token.punctuation}>&lt;</span>
            <span className={token.tag}>p</span>
            <span className={token.punctuation}>&gt;</span>
            <span className={token.text}>{siteConfig.specialization}</span>
            <span className={token.punctuation}>&lt;/</span>
            <span className={token.tag}>p</span>
            <span className={token.punctuation}>&gt;</span>
          </CodeLine>
          <CodeLine number={10}>
            {"    "}
            <span className={token.punctuation}>&lt;</span>
            <span className={token.tag}>p</span>
            <span className={token.punctuation}>&gt;</span>
            <span className={token.text}>{siteConfig.shortBio}</span>
            <span className={token.punctuation}>&lt;/</span>
            <span className={token.tag}>p</span>
            <span className={token.punctuation}>&gt;</span>
          </CodeLine>
          <CodeLine number={11}>
            {"    "}
            <span className={token.punctuation}>&lt;</span>
            <span className={token.tag}>span</span>
            <span className={token.punctuation}>&gt;</span>
            <span className={token.text}>{siteConfig.location}</span>
            <span className={token.punctuation}>&lt;/</span>
            <span className={token.tag}>span</span>
            <span className={token.punctuation}>&gt;</span>
          </CodeLine>
          <CodeLine number={12}>
            {"  "}
            <span className={token.punctuation}>&lt;/</span>
            <span className={token.tag}>div</span>
            <span className={token.punctuation}>&gt;</span>
          </CodeLine>
          <CodeLine number={13}>
            <span className={token.punctuation}>&lt;/</span>
            <span className={token.tag}>div</span>
            <span className={token.punctuation}>&gt;</span>
          </CodeLine>
        </div>
      </figure>

      <div className="relative isolate flex min-h-96 min-w-0 items-center overflow-hidden rounded-lg border border-border bg-card p-5 sm:p-8 lg:min-h-0">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "radial-gradient(circle, color-mix(in oklab, var(--foreground) 22%, transparent) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-3 rounded-md border border-border/70"
        >
          <span className="absolute -top-px -right-px size-5 border-t border-r border-brand/70" />
          <span className="absolute -bottom-px -left-px size-5 border-b border-l border-brand/70" />
        </div>

        <article className="relative z-10 grid w-full grid-cols-[minmax(0,1fr)] items-center gap-6 text-center sm:grid-cols-[8rem_minmax(0,1fr)] sm:text-left lg:grid-cols-[7.5rem_minmax(0,1fr)]">
          <div className="relative mx-auto size-32 sm:mx-0 lg:size-30">
            <span
              aria-hidden
              className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-md border border-brand/40 bg-brand/10"
            />
            <Image
              src="/profile.png"
              alt={siteConfig.name}
              width={168}
              height={168}
              priority
              className="relative size-full rounded-md border border-border object-cover shadow-lg"
            />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase text-brand">
              {siteConfig.role}
            </p>
            <h1 className="mt-2 text-2xl font-bold">{siteConfig.name}</h1>
            <p className="mt-3 text-sm font-medium text-foreground/80">
              {siteConfig.specialization}
            </p>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {siteConfig.shortBio}
            </p>
            <p className="mt-5 font-mono text-xs text-muted-foreground">
              {siteConfig.location}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
