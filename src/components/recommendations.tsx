import { recommendations } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "@/components/icons";

export function Recommendations() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {recommendations.map((rec) => (
        <Card key={rec.name} className="flex h-full flex-col">
          <CardContent className="flex flex-1 flex-col gap-5 pt-6">
            <Quote className="size-6 text-brand" />
            <p className="flex-1 text-base leading-relaxed text-foreground">
              {rec.quote}
            </p>
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand">
                {rec.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </span>
              <div>
                <p className="text-sm font-semibold">{rec.name}</p>
                <p className="text-xs text-muted-foreground">
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
