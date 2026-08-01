import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { SearchClient } from "@/components/search-client";
import { getSearchDocuments } from "@/lib/search";

export const metadata: Metadata = {
  title: "Search",
  description: "Search across blog posts, projects, and case studies.",
};

export default function SearchPage() {
  const docs = getSearchDocuments();

  return (
    <>
      <PageHeader
        eyebrow="Search"
        title="Find something"
        description="Search across blog posts, projects, and engineering case studies."
      />
      <Container className="max-w-2xl pb-8">
        <SearchClient docs={docs} />
      </Container>
    </>
  );
}
