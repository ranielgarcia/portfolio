import { socialLinks } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <Button
            key={link.label}
            asChild
            variant="ghost"
            size="icon"
            aria-label={link.label}
          >
            <a href={link.href} target="_blank" rel="noreferrer noopener">
              <Icon className="size-5" />
            </a>
          </Button>
        );
      })}
    </div>
  );
}
