import type { Metadata } from "next";
import type { ComponentType } from "react";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  CleanArchitectureDiagram,
  CqrsDiagram,
  DddDiagram,
  EventDrivenDiagram,
  SignalRDiagram,
  MicroservicesDiagram,
} from "@/components/diagrams";

export const metadata: Metadata = {
  title: "Architecture",
  description:
    "A visual gallery of architecture patterns I work with — Clean Architecture, CQRS, DDD, Event-Driven, SignalR, and Microservices.",
};

type Diagram = {
  title: string;
  description: string;
  Diagram: ComponentType;
};

const diagrams: Diagram[] = [
  {
    title: "Clean Architecture",
    description:
      "Concentric layers with dependencies pointing inward. The domain stays independent of frameworks, UI, and I/O.",
    Diagram: CleanArchitectureDiagram,
  },
  {
    title: "CQRS",
    description:
      "Commands and queries take separate paths, letting the write model guard invariants while read models optimize for the screen.",
    Diagram: CqrsDiagram,
  },
  {
    title: "Domain-Driven Design",
    description:
      "Bounded contexts isolate models. Aggregates enforce consistency boundaries and communicate through domain events.",
    Diagram: DddDiagram,
  },
  {
    title: "Event-Driven Architecture",
    description:
      "Producers publish events to a broker; independent consumers react asynchronously, decoupling workflows.",
    Diagram: EventDrivenDiagram,
  },
  {
    title: "SignalR Real-Time",
    description:
      "A hub pushes updates to connected clients over a persistent connection, with a backplane for horizontal scale.",
    Diagram: SignalRDiagram,
  },
  {
    title: "Microservices",
    description:
      "An API gateway routes to focused services, each owning its data store — independently deployable and scalable.",
    Diagram: MicroservicesDiagram,
  },
];

export default function ArchitecturePage() {
  return (
    <>
      <PageHeader
        eyebrow="Architecture"
        title="Architecture Gallery"
        description="Patterns I reach for, and how the pieces fit together."
      />
      <Container className="pb-8">
        <div className="grid gap-6 md:grid-cols-2">
          {diagrams.map(({ title, description, Diagram }) => (
            <Card key={title}>
              <CardHeader>
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-sm text-muted-foreground">{description}</p>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border bg-muted/30 p-4">
                  <Diagram />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}
