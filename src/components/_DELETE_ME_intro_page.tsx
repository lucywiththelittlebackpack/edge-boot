import { useState } from "react";
import { IntroHeader } from "./intro/intro-header";
import { CloneCommand } from "./intro/clone-command";
import { TierList } from "./intro/tier-list";
import { ServiceBindings } from "./intro/service-bindings";
import { IntroFeatures } from "./intro/intro-features";
import { IntroFooter } from "./intro/intro-footer";
import { StartingExamples } from "./intro/starting-examples";
import { BootSource } from "./intro/boot-source";

/**
 * This is the intro component for TanStarter, which you may delete after creating the project.
 * Have fun!
 */
export function IntroPageDeleteMe() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-8 md:pt-12">
        <IntroHeader />
        
        <CloneCommand selectedType={selectedType} />

        <section className="mb-12">
          <TierList selectedType={selectedType} onSelectType={setSelectedType} />
        </section>

        <BootSource />

        <StartingExamples />

        <ServiceBindings />
        
        <IntroFeatures />

        <IntroFooter />
      </div>
    </div>
  );
}
