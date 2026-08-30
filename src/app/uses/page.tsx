import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { uses } from "@/lib/data";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "The hardware, software, and tools I use every day to build software.",
};

export default function UsesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Uses"
        title="What I Use"
        description="The gear and tools behind my day-to-day development workflow."
      />
      <Container className="pb-8">
        <div className="grid gap-6 md:grid-cols-2">
          {uses.map((group) => (
            <Card key={group.category} className="h-full border-t-brand/35">
              <CardHeader className="border-b pb-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-brand/10 text-xs font-bold text-brand">
                    {group.category.slice(0, 2).toUpperCase()}
                  </span>
                  <h2 className="text-lg font-semibold">{group.category}</h2>
                </div>
              </CardHeader>
              <CardContent className="pt-1">
                <ul className="divide-y divide-border/80">
                  {group.items.map((item) => (
                    <li key={item.name} className="py-3 first:pt-0 last:pb-0">
                      <p className="font-medium">{item.name}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}
