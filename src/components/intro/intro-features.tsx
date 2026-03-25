export function IntroFeatures() {
  return (
    <section className="mb-16 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
      <Feature
        title="Cloudflare Native"
        desc="Built seamlessly on Cloudflare Workers and robust service bindings."
      />
      <Feature
        title="All the Essentials"
        desc="Drizzle ORM for D1, KV caching, and R2 storage pre-configured out of the box."
      />
      <Feature
        title="End-to-end Type Safety"
        desc="Effortless type safety powered by strict TypeScript and tRPC/Hono integration."
      />
      <Feature
        title="Next-Gen Tooling"
        desc="Powered by Vite, Oxlint, and modern JS execution for blazing fast development."
      />
      <Feature
        title="Vitest"
        desc="Run tests with Vitest, a fast testing framework for JavaScript and TypeScript."
      />
      <Feature
        title="Cloudflare vite plugin"
        desc="Powered by miniflare through vite for local worker simulation."
      />
      <Feature
        title="Dev-ops"
        desc="Github actions for testing and cloudflare builds for deployment."
      />
      <Feature title="Playwright" desc="E2E regression testing for your application." />
    </section>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
    </div>
  );
}
