import { useState } from "react";
import { toast } from "sonner";
import { CheckIcon, CopyIcon, TerminalIcon } from "lucide-react";

export function CloneCommand({ selectedType }: { selectedType: string | null }) {
  const [isCopied, setIsCopied] = useState(false);
  
  const cloneCommand = (selectedType !== null && selectedType !== "monorepo")
    ? `npx edge-boot@latest create --framework=${selectedType}`
    : "npx edge-boot@latest create";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(cloneCommand);
      setIsCopied(true);
      toast.success("Command copied to clipboard", { position: "top-center", richColors: false });

      setTimeout(() => {
        setIsCopied(false);
      }, 4000);
    } catch {
      toast.error("Failed to copy command", { position: "top-center" });
    }
  };

  return (
    <section className="mb-12">
      <div className="rounded-xl border border-border bg-card p-1 shadow-2xl">
        <div className="group flex items-center justify-between rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-3 overflow-hidden">
            <TerminalIcon className="hidden size-4 shrink-0 text-muted-foreground/70 sm:inline" />
            <code className="overflow-hidden font-mono text-sm text-ellipsis whitespace-nowrap text-primary md:text-base">
              <span className="mr-2 hidden text-muted-foreground/70 select-none sm:inline">
                $
              </span>
              {/* oxlint-disable-next-line eslint-plugin-jsx-a11y/click-events-have-key-events eslint-plugin-jsx-a11y/no-static-element-interactions */}
              <span className="select-all" onClick={copyToClipboard} tabIndex={0}>
                {cloneCommand}
              </span>
            </code>
          </div>
          <button
            onClick={copyToClipboard}
            className="ml-4 shrink-0 rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            title="Copy command"
          >
            {isCopied ? (
              <CheckIcon className="size-5 text-primary" />
            ) : (
              <CopyIcon className="size-5" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
