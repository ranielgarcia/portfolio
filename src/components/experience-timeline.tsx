import { experiences } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "@/components/icons";

export function ExperienceTimeline() {
  return (
    <ol className="relative ms-8 space-y-10 border-l border-border pl-8">
      {experiences.map((job) => (
        <li key={`${job.company}-${job.duration}`} className="relative">
          <span className="absolute -left-[41px] flex size-6 items-center justify-center rounded-full border bg-background text-brand">
            <Briefcase className="size-3.5" />
          </span>

          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-semibold">
              {job.role} · <span className="text-brand">{job.company}</span>
            </h3>
            <p className="text-sm text-muted-foreground">{job.duration}</p>
          </div>
          <p className="text-sm text-muted-foreground">{job.location}</p>

          <div className="mt-4 space-y-4 text-sm">
            <div>
              <p className="mb-1.5 font-medium">Responsibilities</p>
              <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                {job.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-1.5 font-medium">Achievements</p>
              <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                {job.achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {job.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="font-normal">
                {tech}
              </Badge>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}
