# Personal Portfolio Website Requirements

## Recommended Stack

**Recommendation:** Next.js (App Router)

Reasons: - Built-in Static Site Generation (SSG) - Excellent SEO -
File-based routing - Markdown/MDX support - Easy deployment to Vercel,
GitHub Pages (static export), or Azure Static Web Apps

### Tech Stack

-   Next.js (App Router)
-   TypeScript
-   Tailwind CSS
-   shadcn/ui
-   Framer Motion (subtle animations)
-   next-themes
-   gray-matter
-   remark / rehype
-   MDX (optional)
-   Lucide Icons

------------------------------------------------------------------------

# Site Structure

-   Home
-   About
-   Experience
-   Projects
-   Blog
-   Resume
-   Contact

------------------------------------------------------------------------

# Home

-   Full name
-   Professional photo
-   Quick introduction
-   Role / specialization
-   CTA buttons
    -   View Projects
    -   Read Blog
    -   Download Resume

------------------------------------------------------------------------

# About

Include: - Professional summary - Years of experience - Industries -
Software philosophy - Fun facts

------------------------------------------------------------------------

# Skills

## Languages

-   C#
-   TypeScript
-   JavaScript
-   SQL

## Backend

-   ASP.NET Core
-   EF Core
-   FastEndpoints
-   SignalR
-   Wolverine

## Frontend

-   React
-   Next.js
-   Tailwind CSS

## Cloud

-   Azure App Service
-   Azure SQL
-   Azure Storage
-   Key Vault
-   Application Insights

## Databases

-   SQL Server
-   Azure SQL
-   Cosmos DB
-   MySQL

## DevOps

-   Azure DevOps
-   GitHub Actions
-   Docker
-   Kubernetes
-   Terraform

------------------------------------------------------------------------

# Experience

Each experience should contain: - Company - Role - Duration -
Responsibilities - Technologies - Achievements

------------------------------------------------------------------------

# Featured Projects

Each project should have:

-   Overview
-   Problem
-   Solution
-   Architecture
-   Tech Stack
-   Screenshots
-   Design Decisions
-   Lessons Learned
-   Future Improvements
-   GitHub Repository
-   Live Demo (optional)

Store project details as Markdown.

    content/projects/
        enrolify.md
        portfolio.md

Suggested front matter:

``` yaml
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

------------------------------------------------------------------------

# Blogs

Generate blog pages from Markdown.

    content/blog/
        clean-architecture.md
        ddd.md
        signalr-vs-polling.md
        cqrs.md
        wolverine.md

Suggested categories:

-   Architecture
-   Azure
-   .NET
-   React
-   DevOps
-   Career

Blog features:

-   Reading time
-   Table of contents
-   Syntax highlighting
-   Related posts
-   Tags
-   Search
-   RSS feed

------------------------------------------------------------------------

# Architecture Gallery

Show diagrams for:

-   Clean Architecture
-   CQRS
-   DDD
-   Event Driven Architecture
-   SignalR
-   Microservices

------------------------------------------------------------------------

# Engineering Case Studies

Examples:

-   Designing a scheduling engine
-   Migrating legacy PHP to .NET
-   Multi-tenancy implementation
-   SQL performance optimization
-   Azure architecture decisions

------------------------------------------------------------------------

# Resume

Provide:

-   View Resume
-   Download Resume
-   Printable version

------------------------------------------------------------------------

# Contact

Include:

-   Contact form
-   LinkedIn
-   GitHub

Optional:

-   Stack Overflow
-   Dev.to

------------------------------------------------------------------------

# Recommendations

Display:

-   Photo
-   Name
-   Position
-   Company
-   Recommendation

------------------------------------------------------------------------

# Fun Section

Examples:

-   Cycling
-   Gym
-   Coffee
-   Reading software architecture books

------------------------------------------------------------------------

# Additional Features

-   Light/Dark mode
-   Responsive design
-   SEO
-   Sitemap
-   Open Graph images
-   GitHub repository metadata
-   Search (Fuse.js)
-   Tags
-   Categories
-   Reading time
-   Related posts
-   Project metrics
-   "Uses" page (hardware/software setup)

------------------------------------------------------------------------

# Suggested Folder Structure

``` text
/
├── app
├── components
├── content
│   ├── blog
│   └── projects
├── public
├── styles
└── lib
```

# Final Recommendation

Use **Next.js + TypeScript + Tailwind CSS + shadcn/ui** with
Markdown/MDX as the content source. Keep the site fully statically
generated, emphasizing engineering case studies, architecture
documentation, and technical blogs to showcase engineering
decision-making rather than only listing technologies.
