import { recommendations } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "@/components/icons";

export function Recommendations() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {recommendations.map((rec) => (
        <Card key={rec.name} className="relative h-full border-t-brand/35">
          <CardContent className="flex flex-1 flex-col pt-2">
            <span className="mb-5 flex size-9 items-center justify-center rounded-md bg-brand/10 text-brand">
              <Quote className="size-4.5" />
            </span>
            <blockquote className="flex-1 text-[0.9375rem] leading-7 text-foreground">
              {rec.quote}
            </blockquote>
            <div className="mt-6 flex items-center gap-3 border-t pt-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md border bg-muted/50 text-xs font-semibold text-brand">
                {rec.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{rec.name}</p>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {rec.position}, {rec.company}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
