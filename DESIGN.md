---
name: Raniel Garcia Portfolio
description: Senior software engineer portfolio — reliable, well-architected, technically precise.
colors:
  brand: "oklch(0.54 0.21 264)"
  brand-dark: "oklch(0.72 0.16 264)"
  background: "oklch(1 0 0)"
  background-dark: "oklch(0.145 0 0)"
  foreground: "oklch(0.145 0 0)"
  foreground-dark: "oklch(0.985 0 0)"
  muted: "oklch(0.97 0 0)"
  muted-dark: "oklch(0.269 0 0)"
  muted-foreground: "oklch(0.556 0 0)"
  muted-foreground-dark: "oklch(0.708 0 0)"
  border: "oklch(0.922 0 0)"
  border-dark: "oklch(1 0 0 / 10%)"
  card: "oklch(1 0 0)"
  card-dark: "oklch(0.205 0 0)"
  destructive: "oklch(0.577 0.245 27.325)"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
  code:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.875em"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "0.375rem"
  md: "0.5rem"
  lg: "0.625rem"
  xl: "0.875rem"
  full: "9999px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "3rem"
  3xl: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.foreground}"
    textColor: "{colors.background}"
    rounded: "{rounded.md}"
    padding: "0.625rem 1rem"
  button-primary-hover:
    backgroundColor: "oklch(0.32 0 0)"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    padding: "0.625rem 1rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    padding: "0.5rem"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: "1.5rem"
  badge-secondary:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    padding: "0.125rem 0.625rem"
  badge-brand:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.background}"
    rounded: "{rounded.md}"
    padding: "0.125rem 0.625rem"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    padding: "0.5rem 0.75rem"
---

# Design System: Raniel Garcia Portfolio

## Overview

**Creative North Star: "The Precision Instrument"**

This portfolio works the way a well-engineered system works: every element is load-bearing, nothing wastes cycles. The design earns credibility through restraint — a near-monochrome palette with a single periwinkle-indigo accent that signals precision without warmth. The surface feels like polished engineering documentation that happens to be beautiful: not a canvas for expression, but evidence of judgment.

Density is professional but not cramped. Headings are heavy and tight; body text is comfortable and unhurried. The type scale has obvious steps so hierarchy lands on first glance. Dark and light modes are true inverses — the design holds its authority in both.

**Key Characteristics:**
- Near-monochrome with one chromatic accent (periwinkle-indigo, hue 264)
- Heavy tracking-tight headings contrast with airy body copy
- Borders and hover-lift are the depth vocabulary — no ambient shadows
- Cards use border + background-match, never elevation
- Inter Sans throughout; Geist Mono for code only

**Anti-reference:** Agency portfolio theatrics, gradient showcases, neon glow effects, large decorative illustrations, or anything that performs creative rather than demonstrating engineering judgment.

## Colors

Effectively monochrome with a single chromatic accent. The palette carries authority in both light and dark.

### Primary
- **Periwinkle Indigo** (oklch(0.54 0.21 264) / oklch(0.72 0.16 264) in dark): The portfolio's sole chromatic accent. Used for the logo mark, interactive links, badge fills, icon accents, and hover state indicators. Shifts lighter in dark mode to maintain contrast.

### Neutral
- **Surface White** (oklch(1 0 0)): Page background in light mode.
- **Void** (oklch(0.145 0 0)): Page background in dark mode; also the primary button fill in light mode.
- **Ink** (oklch(0.145 0 0) / oklch(0.985 0 0) dark): Primary text. True black/white, not off-tone.
- **Ash** (oklch(0.556 0 0) / oklch(0.708 0 0) dark): Secondary text — descriptions, metadata, supporting copy.
- **Whisper** (oklch(0.97 0 0) / oklch(0.269 0 0) dark): Muted surfaces — badge backgrounds, code inline, muted input fill.
- **Chalk** (oklch(0.922 0 0) / oklch(1 0 0 / 10%) dark): Borders on cards, inputs, separators.

## Typography

Inter Sans everywhere except code. Bold, tight headings against comfortable body prose.

- **Display** (2.25–3rem / bold / -0.025em): Hero heading — "Hi, I'm Raniel Garcia"
- **Headline** (1.875rem / bold / -0.025em): Page-level `<h1>` titles
- **Title** (1.25rem / semibold / -0.01em): Section headings, card titles
- **Body** (1rem / regular / normal leading): Prose and descriptions
- **Label** (0.875rem / medium): Nav items, metadata, badge text
- **Code** (Geist Mono / 0.875em): Inline code, code blocks, technical identifiers only — not decorative

## Layout

- **Container**: `max-w-screen-lg` with `px-4 sm:px-6 lg:px-8`, centered
- **Page top**: `pt-12 md:pt-16` for inner pages; hero gets `pt-16 md:pt-24`
- **Section rhythm**: `py-12` between major homepage sections; `space-y-16` inside page containers
- **Card grids**: 1-col mobile → 2-col sm → 3-col lg with `gap-4`
- **Breakpoints**: sm 640px, md 768px, lg 1024px (Tailwind defaults)

## Elevation & Depth

The system is essentially flat. Depth comes from borders and background contrast, not shadows.

- **Border as container boundary**: `border border-border/60` on header and footer; `border` on cards
- **Hover lift**: `hover:border-brand/50` on interactive cards — color shift, not translate
- **Shadow exception**: profile image uses `shadow-xl` as a contained element that needs visual lift against an open background
- **Never**: ambient glow, large blurred radial fills used as decoration, `blur-2xl` halos

## Shapes

- **Base radius**: 0.625rem (10px) — applies to all cards, buttons, inputs, badges
- **Tighter**: 0.375rem for small badges and inline elements
- **Pill**: `rounded-full` reserved for the logo mark and avatar initials only
- **Consistent**: all interactive surfaces share the same radius; no mixing of sharp and rounded within a context

## Components

### Navigation Header
- Sticky, `bg-background/80 backdrop-blur` — the only sanctioned backdrop blur use (navigation orientation, not decoration)
- Active nav link: full foreground color; inactive: muted-foreground with hover-to-foreground transition
- Logo: `bg-brand rounded-md` with white mono initials

### Cards
- `bg-card border rounded-lg` — no shadow, no tonal lift
- Hover: `hover:border-brand/50` via the `group` pattern
- Arrow icon (`ArrowUpRight`) animates on group-hover: `-translate-y-0.5 translate-x-0.5`
- Cards never nest

### Buttons
- Three levels: primary (solid), outline (bordered), ghost (transparent)
- Primary uses near-black/near-white fill — not brand color — for maximum contrast
- Brand color on buttons is reserved for badges only
- Size hierarchy: `size-lg` default on CTAs; `size-icon` for toolbar buttons

### Badges
- `secondary` (muted fill) for technology tags
- `outline` for category filters
- `bg-brand` fill only for the "Featured" label
- Font weight: `font-normal` — badge text is metadata, not emphasis

### Experience Timeline
- Left-border vertical rule (`border-l border-border`)
- Dot icon at each entry: small `Briefcase` in a `rounded-full border bg-background`
- Role in brand color, company in foreground

### Page Headers
- `pt-12 md:pt-16` top padding, `pb-8` bottom
- `<h1>` at headline scale; optional description at `text-lg text-muted-foreground max-w-2xl`
- No eyebrow label above the heading

## Do's and Don'ts

**Do:**
- Use `text-brand` for a single name or label in a heading to create focal weight
- Use borders and `hover:border-brand/50` for interactive card feedback
- Let the Inter weight and scale speak — headings are already bold; no further decoration needed
- Restrict `backdrop-blur` to the sticky header only

**Don't:**
- Gradient text — emphasis comes from weight or brand color
- Decorative `blur-2xl` halos or glow fills behind images
- Eyebrow/kicker labels above headings (hard ban)
- Section numbers (01 / 02 / 03)
- Monospace for non-code text
- More than one chromatic accent
