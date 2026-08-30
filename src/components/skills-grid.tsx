import type React from "react";
import { skillGroups } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function SkillsGrid() {
  return (
    <div className="grid auto-rows-fr gap-px overflow-hidden rounded-md border bg-border/80 shadow-[0_14px_35px_-30px_color-mix(in_oklab,var(--foreground)_35%,transparent)] sm:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group) => {
        const Icon = group.icon;
        const [light, dark] = group.accent;

        return (
          <article
            key={group.title}
            style={
              {
                "--skill-accent": light,
                "--skill-accent-dark": dark,
                boxShadow:
                  "inset 0 2px 0 color-mix(in oklch, var(--skill-accent) 65%, transparent)",
              } as React.CSSProperties
            }
            className="flex h-full min-h-48 flex-col items-center justify-center bg-card px-6 py-8 text-center"
          >
            <div className="flex items-center justify-center gap-3">
              <span
                className="flex size-10 shrink-0 items-center justify-center rounded-md border border-current/10"
                style={
                  {
                    backgroundColor:
                      "color-mix(in oklch, var(--skill-accent) 12%, transparent)",
                    color: "var(--skill-accent)",
                  } as React.CSSProperties
                }
              >
                <Icon className="size-5" />
              </span>
              <h3 className="text-lg font-semibold">{group.title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap justify-center gap-1.5">
              {group.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="border border-foreground/5 bg-muted/70 font-normal text-muted-foreground"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}
