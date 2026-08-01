# Raniel Garcia — Personal Portfolio Implementation Plan

A statically-oriented, SEO-strong developer portfolio built with **Next.js (App Router)**,
**TypeScript**, **Tailwind CSS**, and **shadcn/ui**, using **MDX** as the content source and
deployed to **Vercel**. Built in phases: a working MVP first, then advanced content and search
features.

## Key Decisions

| Decision | Choice |
| --- | --- |
| Framework | Next.js (App Router) + TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| Content | MDX (blog + projects) via gray-matter + remark/rehype |
| Animation | Framer Motion (subtle) |
| Theme | next-themes (light/dark) |
| Deployment | Vercel (full Next.js features; no static export constraints) |
| Contact form | **Frontend only** — posts to a configurable endpoint (env var). Backend built separately. |
| Delivery | Phased (MVP → extras) |

## Tech Stack

- Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui
- Framer Motion, next-themes, Lucide Icons
- gray-matter, MDX (`next-mdx-remote` or `@next/mdx`)
- remark-gfm, rehype-slug, rehype-autolink-headings, rehype-pretty-code (Shiki)
- reading-time
- Fuse.js (search — Phase 2), RSS feed (Phase 2)

## Folder Structure

```text
/
├── app/                  # routes (home, about, experience, projects, blog, resume, contact)
├── components/           # UI + shadcn components
├── content/
│   ├── blog/             # *.mdx blog posts
│   └── projects/         # *.mdx project case studies
├── lib/                  # content loaders, mdx, reading-time, toc, search
├── public/               # images, resume PDF, OG assets
├── styles/               # global styles
└── portfolio-plan.md
```

---

## Phase 0 — Scaffold (foundation)

1. `create-next-app` with TypeScript, Tailwind, App Router, ESLint.
2. Initialize `shadcn/ui`; add base components: button, card, badge, input, textarea, dialog,
   sheet, dropdown-menu.
3. Install dependencies: `framer-motion`, `next-themes`, `gray-matter`, MDX packages,
   `remark-gfm`, `rehype-slug`, `rehype-autolink-headings`, `rehype-pretty-code`,
   `reading-time`, `lucide-react`.
4. Create folder structure (`content/blog`, `content/projects`, `lib`, `components`, etc.).
5. Root layout, header nav, footer, `next-themes` provider, and light/dark toggle.

## Phase 1 — MVP Pages

6. **Home** — hero (name, photo, role, intro) + CTAs: View Projects / Read Blog / Download Resume.
7. **About** — professional summary, years of experience, industries, software philosophy,
   fun facts + Skills grid (Languages, Backend, Frontend, Cloud, Databases, DevOps).
8. **Experience** — data-driven list (company, role, duration, responsibilities, technologies,
   achievements).
9. **Projects** — index reads `content/projects/*.mdx` via gray-matter; detail route
   `projects/[slug]` (overview, problem, solution, architecture, tech stack, screenshots,
   design decisions, lessons learned, future improvements, GitHub, demo).
10. **Blog** — index reads `content/blog/*.mdx`; post route `blog/[slug]` with MDX render,
    reading time, table of contents, and syntax highlighting.
11. **Resume** — view, download (PDF in `/public`), and printable version.
12. **Contact** — validated form (name, email, message) posting to a configurable env endpoint
    (backend intentionally absent) + LinkedIn / GitHub links.
13. SEO metadata per route, `sitemap.ts`, `robots`, responsive polish.

## Phase 2 — Extras

14. Search (Fuse.js) over blog + projects; tags and categories pages; related posts.
15. RSS feed route; Open Graph image generation (`next/og`).
16. Architecture Gallery (Clean Architecture, CQRS, DDD, Event-Driven, SignalR, Microservices).
17. Engineering Case Studies (MDX collection).
18. Recommendations / testimonials section, "Uses" page, GitHub repo metadata, project metrics.

---

## Library Helpers (`lib/`)

- `content.ts` — `getAllPosts`, `getPostBySlug`, `getAllProjects`, `getProjectBySlug`
  (filesystem + gray-matter).
- `mdx.ts` — compile MDX with remark/rehype plugins.
- `reading-time.ts`, `toc.ts`, `search.ts` (Phase 2).

## Front Matter

**Projects**

```yaml
---
title:
summary:
technologies:
github:
demo:
cover:
featured: true
---
```

**Blog**

```yaml
---
title:
summary:
date:
category:
tags:
cover:
---
```

## Verification

1. `npm run dev` and `npm run build` succeed with no type errors.
2. All seven nav routes render; light/dark toggle persists.
3. A sample MDX blog post and project detail render with syntax highlighting and a working TOC.
4. Contact form validates and issues a POST to the env endpoint (no backend implemented).
5. `sitemap.xml` is served; Lighthouse SEO + responsive checks pass.
