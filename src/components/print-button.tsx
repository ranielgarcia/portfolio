"use client";

import { Button } from "@/components/ui/button";
import { FileText } from "@/components/icons";

export function PrintButton() {
  return (
    <Button variant="outline" onClick={() => window.print()}>
      <FileText className="size-4" /> Print
    </Button>
  );
}
