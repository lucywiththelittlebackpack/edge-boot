import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function IntroHeader() {
  return (
    <header className="mb-8">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.simpleicons.org/cloudflare/F38020"
            alt="Cloudflare logo"
            className="size-6 md:size-7"
          />
          <span className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
            Edge boot
          </span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/lucywiththelittlebackpack/cf-boot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-[1.2rem]"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span className="sr-only">GitHub repository</span>
            </Button>
          </a>
          <ThemeToggle />
        </div>
      </div>

      <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        The <span className="text-[#F38020]">ultimate</span> starter template for Cloudflare
        Workers.
      </h1>

      <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
        A fully-featured, opinionated foundation for building globally distributed full-stack
        applications on the Cloudflare developer platform.
      </p>
    </header>
  );
}
