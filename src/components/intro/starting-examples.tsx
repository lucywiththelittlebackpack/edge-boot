import { ArrowRightIcon } from "lucide-react";

export function StartingExamples() {
  const EXAMPLES = [
    { name: "Blog", url: "#" },
    { name: "E-Commerce", url: "#" },
    { name: "Hotel Finder", url: "#" },
    { name: "SaaS", url: "#" },
    { name: "Dashboard", url: "#" },
  ];

  return (
    <section className="mb-16 rounded-xl border border-border bg-card p-6 text-center shadow-sm md:p-8">
      <h2 className="mb-3 text-2xl font-bold tracking-tight">Starting Examples</h2>
      <p className="mx-auto mb-6 max-w-xl text-muted-foreground">
        Jumpstart your development with one of our pre-built examples tailored for the Cloudflare
        ecosystem.
      </p>

      <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
        {EXAMPLES.map((example) => (
          <li key={example.name}>
            <a
              href={example.url}
              className="group flex items-center gap-1.5 font-medium text-[#F38020] transition-colors hover:text-[#d9721c]"
            >
              <span className="underline decoration-transparent transition-colors group-hover:decoration-current">
                {example.name}
              </span>
              <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
