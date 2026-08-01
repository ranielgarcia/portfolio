# Raniel Garcia — Portfolio

A personal portfolio built with Next.js and MDX. It showcases projects, technical
blog posts, and in-depth case studies, all authored as MDX files under `content/`.

## Tech Stack

- **Framework:** Next.js 16 (App Router) + React 19
- **Styling:** Tailwind CSS v4, `@tailwindcss/typography`, shadcn/ui + Radix
- **Content:** MDX via `next-mdx-remote`, frontmatter parsed with `gray-matter`
- **Syntax highlighting:** `rehype-pretty-code` + Shiki
- **Animation:** Framer Motion
- **Language:** TypeScript

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Create a production build            |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint                           |

## Project Structure

```
content/          # MDX content (source of truth for the site)
  blog/           # Blog posts
  projects/       # Project write-ups
  case-studies/   # Case studies
src/
  app/            # Next.js App Router routes
  components/     # UI and MDX components
  lib/            # Content loading, search, and site config
public/           # Static assets
```

## Content Authoring

All content lives in the `content/` directory as `.mdx` files. Each file starts
with a **YAML frontmatter** block (between `---` fences) followed by MDX body
content. The **file name becomes the URL slug** (e.g. `content/blog/my-post.mdx`
→ `/blog/my-post`).

Content loading, sorting, and filtering is handled in
[src/lib/content.ts](src/lib/content.ts).

> **Drafts:** Set `draft: true` in the frontmatter to hide an entry in
> production. Drafts are still visible when running `npm run dev`.

### Adding a Project

1. Create a new file in `content/projects/`, e.g. `content/projects/my-app.mdx`.
2. Add the frontmatter and body:

```mdx
---
title: "My App — Short Tagline"
summary: "One or two sentences describing what the project is and does."
technologies:
  - ASP.NET Core
  - React
  - Azure SQL
github: "https://github.com/username/my-app"
demo: "https://my-app.example.com"
cover: ""
featured: true
order: 1
---

## Overview

Write the project details here using Markdown and MDX components.
```

**Frontmatter fields**

| Field          | Type       | Required | Description                                            |
| -------------- | ---------- | -------- | ------------------------------------------------------ |
| `title`        | string     | Yes      | Project title                                          |
| `summary`      | string     | Yes      | Short description shown on cards and listings          |
| `technologies` | string[]   | No       | Tech stack tags                                        |
| `github`       | string     | No       | Repository URL                                         |
| `demo`         | string     | No       | Live demo URL                                          |
| `cover`        | string     | No       | Cover image path                                       |
| `featured`     | boolean    | No       | Surface the project on the home page                   |
| `order`        | number     | No       | Sort order (ascending; lower appears first)            |
| `draft`        | boolean    | No       | Hide in production when `true`                          |

Projects are sorted by `order` (ascending).

### Adding a Blog Post

1. Create a new file in `content/blog/`, e.g. `content/blog/my-post.mdx`.
2. Add the frontmatter and body:

```mdx
---
title: "My Post Title"
summary: "A short summary used for previews and SEO."
date: "2026-08-02"
category: "Architecture"
tags:
  - dotnet
  - design
cover: ""
---

Write your post content here.
```

**Frontmatter fields**

| Field      | Type     | Required | Description                                       |
| ---------- | -------- | -------- | ------------------------------------------------- |
| `title`    | string   | Yes      | Post title                                        |
| `summary`  | string   | Yes      | Short description for previews and SEO            |
| `date`     | string   | Yes      | Publish date (`YYYY-MM-DD`)                       |
| `category` | string   | Yes      | Primary category (its own listing page)          |
| `tags`     | string[] | No       | Tags (each gets its own listing page)            |
| `cover`    | string   | No       | Cover image path                                  |
| `draft`    | boolean  | No       | Hide in production when `true`                     |

Posts are sorted by `date` (newest first). Category and tag listing pages are
generated automatically from the frontmatter.

### Adding a Case Study

1. Create a new file in `content/case-studies/`, e.g.
   `content/case-studies/my-study.mdx`.
2. Add the frontmatter and body:

```mdx
---
title: "Designing X for Y"
summary: "One or two sentences summarizing the problem and outcome."
date: "2026-08-02"
role: "Lead Engineer"
problem: "What problem did you set out to solve?"
outcome: "What was the measurable result?"
technologies:
  - ASP.NET Core
  - Redis
metrics:
  - label: "p95 latency"
    value: "480ms"
  - label: "Incidents"
    value: "0"
order: 1
---

## Context

Write the case study here.
```

**Frontmatter fields**

| Field          | Type                          | Required | Description                                   |
| -------------- | ----------------------------- | -------- | --------------------------------------------- |
| `title`        | string                        | Yes      | Case study title                              |
| `summary`      | string                        | Yes      | Short description for previews                 |
| `date`         | string                        | Yes      | Date (`YYYY-MM-DD`)                            |
| `role`         | string                        | No       | Your role on the project                      |
| `problem`      | string                        | No       | Problem statement                             |
| `outcome`      | string                        | No       | High-level outcome                            |
| `technologies` | string[]                      | No       | Tech stack tags                               |
| `metrics`      | `{ label, value }[]`          | No       | Key metrics displayed as highlights           |
| `order`        | number                        | No       | Sort order (ascending; lower appears first)   |
| `draft`        | boolean                       | No       | Hide in production when `true`                 |

Case studies are sorted by `order` (ascending).

## MDX Components

The following custom components are available inside any `.mdx` body without
importing them.

### Callout

```mdx
<Callout type="info">
  Use this to highlight an important note.
</Callout>
```

`type` accepts `"info"`, `"warning"`, or `"success"`.

### Diagrams

Architecture diagram components (from
[src/components/diagrams.tsx](src/components/diagrams.tsx)) can be embedded
directly:

- `<CleanArchitectureDiagram />`
- `<CqrsDiagram />`
- `<DddDiagram />`
- `<EventDrivenDiagram />`
- `<SignalRDiagram />`
- `<MicroservicesDiagram />`

Standard Markdown (headings, lists, tables, links) and fenced code blocks with
language hints (for syntax highlighting) are also supported.

## Deployment

The site is optimized for deployment on [Vercel](https://vercel.com). Push to the
default branch and connect the repository, or run `npm run build` to produce a
production build for any Node-compatible host.
