import { ExternalLinkIcon } from "lucide-react";

export function IntroFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-border/40 py-8 text-sm md:flex-row">
      <div className="flex flex-col items-center gap-1 text-muted-foreground md:items-start">
        <div className="font-medium text-foreground">
          &copy; {currentYear} Edge boot. All rights reserved.
        </div>
        <p className="text-xs">
          Built with Cloudflare platform. Not officially affiliated with Cloudflare, Inc.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://developers.cloudflare.com/workers/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
        >
          Workers Docs
          <ExternalLinkIcon className="size-4" />
        </a>
      </div>
    </footer>
  );
}
