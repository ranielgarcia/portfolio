"use client";

import { Button } from "@/components/ui/button";
import { FileText } from "@/components/icons";

export function DownloadResumeButton() {
  return (
    <Button asChild variant="outline">
      <a
        href="/documents/Resume.pdf"
        download="Raniel-Garcia-Resume.pdf"
        className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800"
      >
        <FileText className="size-4" /> Download Resume
      </a>
    </Button>
  );
}
