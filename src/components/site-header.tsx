"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Search } from "@/components/icons";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  const mobileNav = (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle>{siteConfig.name}</SheetTitle>
        </SheetHeader>
        <nav className="mt-2 flex flex-col gap-1 px-2">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent",
                isActive(pathname, item.href)
                  ? "bg-accent text-foreground"
                  : "text-muted-foreground",
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85"
      style={{
        borderTop: "2px solid color-mix(in oklab, var(--brand) 60%, transparent)",
      }}
    >
      <Container className="flex h-[3.75rem] items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-semibold">
          <span className="flex size-8 items-center justify-center rounded-md bg-brand font-mono text-xs font-bold text-brand-foreground">
            RG
          </span>
          <span className="hidden text-[0.875rem] tracking-[-0.01em] sm:inline">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-stretch gap-0 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative flex items-center px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                isActive(pathname, item.href)
                  ? "text-foreground after:absolute after:bottom-0 after:left-3 after:right-3 after:h-px after:bg-brand"
                  : "text-muted-foreground",
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button asChild variant="ghost" size="icon" aria-label="Search">
            <Link href="/search">
              <Search className="size-5" />
            </Link>
          </Button>
          <ModeToggle />
          {mobileNav}
        </div>
      </Container>
    </header>
  );
}

