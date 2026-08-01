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
            <Card key={group.category}>
              <CardHeader>
                <h2 className="text-lg font-semibold">{group.category}</h2>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
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
