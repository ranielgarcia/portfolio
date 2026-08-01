import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { ExperienceTimeline } from "@/components/experience-timeline";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience — roles, responsibilities, technologies, and achievements.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Where I've worked"
        description="Roles, the problems I worked on, and the impact along the way."
      />
      <Container className="pb-8">
        <ExperienceTimeline />
      </Container>
    </>
  );
}
