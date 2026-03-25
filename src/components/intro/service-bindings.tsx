import { 
  DatabaseIcon, 
  KeyIcon, 
  BoxIcon, 
  SparklesIcon, 
  LayersIcon, 
  RocketIcon, 
  ListOrderedIcon, 
  ImageIcon, 
  ShieldAlertIcon, 
  ExternalLinkIcon 
} from "lucide-react";

const BINDINGS = [
  { id: "d1", name: "D1", desc: "Serverless SQL Database", icon: DatabaseIcon },
  { id: "kv", name: "KV", desc: "Global Key-Value Store", icon: KeyIcon },
  { id: "r2", name: "R2", desc: "S3-Compatible Storage", icon: BoxIcon },
  { id: "ai", name: "Workers AI", desc: "Serverless ML Models", icon: SparklesIcon },
  { id: "do", name: "Durable Objects", desc: "Strongly Consistent State", icon: LayersIcon },
  { id: "hyperdrive", name: "Hyperdrive", desc: "Accelerate Reg. Databases", icon: RocketIcon },
  { id: "queues", name: "Queues", desc: "Guaranteed Messaging", icon: ListOrderedIcon },
  { id: "images", name: "Images", desc: "Optimize & Serve Assets", icon: ImageIcon },
  { id: "rate-limiting", name: "Rate Limiting", desc: "Protect APIs & Endpoints", icon: ShieldAlertIcon },
];

export function ServiceBindings() {
  return (
    <section className="mb-16 mt-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-bold tracking-tight">Available Service Bindings</h2>
        <p className="max-w-2xl leading-relaxed text-muted-foreground">
          Cloudflare Workers provides rich bindings to external services. All of these are available through <span className="font-semibold text-foreground">Miniflare</span> during local development, with the option of connecting directly to remote resources.
        </p>
        
        <div className="mt-6 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {BINDINGS.map((binding) => {
            const Icon = binding.icon;
            return (
              <div 
                key={binding.id} 
                className="group relative flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-sm"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:bg-[#F38020]/10 group-hover:text-[#F38020]">
                  <Icon className="size-5" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <h3 className="font-semibold leading-none tracking-tight">{binding.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{binding.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <a 
          href="https://developers.cloudflare.com/workers/runtime-apis/bindings/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1 text-sm text-[#F38020] hover:underline"
        >
          View all 23+ bindings <ExternalLinkIcon className="size-3" />
        </a>
      </div>
    </section>
  );
}
