import { cn } from "@/lib/utils";
import { Container } from "@/components/container";

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <Container className={cn("pt-12 pb-8 md:pt-16", className)}>
      {eyebrow ? (
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-brand">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      {description ? (
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {description}
        </p>
      ) : null}
    </Container>
  );
}
