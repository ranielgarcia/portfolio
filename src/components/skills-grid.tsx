import { skillGroups } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function SkillsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group) => {
        const Icon = group.icon;
        return (
          <Card key={group.title}>
            <CardHeader className="flex-row items-center gap-3 space-y-0">
              <span className="flex size-9 items-center justify-center rounded-md bg-brand/10 text-brand">
                <Icon className="size-5" />
              </span>
              <h3 className="font-semibold">{group.title}</h3>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="font-normal">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
