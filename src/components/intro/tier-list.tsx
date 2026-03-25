import React, { useState } from "react";
import { BoxIcon, LockIcon, TerminalIcon } from "lucide-react";

const LAYERS = [
  { id: "Build", label: "Build", color: "#c55575" },
  { id: "Framework", label: "Framework", color: "#8b5ca3" },
  { id: "Run", label: "Run", color: "#518c66" },
  { id: "Styling", label: "Styling", color: "#a17638" },
];

const TOGGLES = [
  { id: "monorepo", label: "Monorepo", bgClass: "bg-[#518c66]" },
  { id: "start", label: "Start", bgClass: "bg-[#f7df1e]" },
  { id: "hono", label: "Hono", bgClass: "bg-[#eab308]" },
  { id: "react", label: "React", bgClass: "bg-[#c55575]" },
  { id: "astro", label: "Astro", bgClass: "bg-[#8b5ca3]" },
  { id: "mui", label: "MUI", bgClass: "bg-[#3fc3e6]" },
];

interface Library {
  id: string;
  name: string;
  version: string;
  layerId: string;
  activeIn: string[];
  githubRepo: string;
  iconUrl?: string;
  FallbackIcon?: React.ElementType;
}

const LIBRARIES: Library[] = [
  // Build
  { id: "compiler", name: "Compiler", layerId: "Build", activeIn: ["react", "monorepo", "start"], githubRepo: "facebook/react", iconUrl: "https://cdn.simpleicons.org/react/61daf8", version: "v19.2.4" },
  { id: "vite", name: "Vite", layerId: "Build", activeIn: ["react", "astro", "monorepo", "hono", "start", "mui"], githubRepo: "vitejs/vite", iconUrl: "https://cdn.simpleicons.org/vite/646CFF", version: "v8.0.2" },
  { id: "oxlint", name: "Oxlint", layerId: "Build", activeIn: ["react", "astro", "monorepo", "hono", "start", "mui"], githubRepo: "oxc-project/oxc", FallbackIcon: BoxIcon, version: "v1.57.0" },
  { id: "oxfmt", name: "Oxfmt", layerId: "Build", activeIn: ["react", "astro", "monorepo", "hono", "start", "mui"], githubRepo: "oxc-project/oxc", FallbackIcon: TerminalIcon, version: "v1.57.0" },
  { id: "pnpm", name: "pnpm", layerId: "Build", activeIn: ["react", "astro", "monorepo", "hono", "start", "mui"], githubRepo: "pnpm/pnpm", iconUrl: "https://cdn.simpleicons.org/pnpm/F69220", version: "v10.33.0" },

  // Framework
  { id: "react", name: "React", layerId: "Framework", activeIn: ["react", "monorepo", "start", "mui"], githubRepo: "facebook/react", iconUrl: "https://cdn.simpleicons.org/react/61daf8", version: "v19.2.4" },
  { id: "start", name: "TanStack Start", layerId: "Framework", activeIn: ["monorepo", "start"], githubRepo: "TanStack/router", iconUrl: "https://cdn.simpleicons.org/tanstack/ffca28", version: "release-2026-03-24-2312" },
  { id: "router", name: "React Router", layerId: "Framework", activeIn: ["react", "mui"], githubRepo: "remix-run/react-router", iconUrl: "https://cdn.simpleicons.org/reactrouter/CA4245", version: "v7.13.2" },
  { id: "astro", name: "Astro", layerId: "Framework", activeIn: ["astro", "monorepo"], githubRepo: "withastro/astro", iconUrl: "https://cdn.simpleicons.org/astro/FF5D01", version: "@astrojs/cloudflare@13.1.3" },
  { id: "hono", name: "Hono", layerId: "Framework", activeIn: ["react", "hono", "monorepo"], githubRepo: "honojs/hono", iconUrl: "https://cdn.simpleicons.org/hono/E36002", version: "v4.12.9" },

  // Run
  { id: "query", name: "React Query", layerId: "Run", activeIn: ["react", "monorepo", "start", "mui"], githubRepo: "TanStack/query", iconUrl: "https://cdn.simpleicons.org/reactquery/FF4154", version: "release-2026-03-23-1536" },
  { id: "drizzle", name: "Drizzle ORM", layerId: "Run", activeIn: ["monorepo", "hono", "start"], githubRepo: "drizzle-team/drizzle-orm", iconUrl: "https://cdn.simpleicons.org/drizzle/C5F74F", version: "drizzle-kit@0.31.10" },
  { id: "betterauth", name: "Better Auth", layerId: "Run", activeIn: ["monorepo", "start"], githubRepo: "better-auth/better-auth", FallbackIcon: LockIcon, version: "v1.5.6" },
  { id: "zod", name: "Zod", layerId: "Run", activeIn: ["react", "monorepo", "hono", "start"], githubRepo: "colinhacks/zod", iconUrl: "https://cdn.simpleicons.org/zod/3E67B1", version: "v4.3.6" },

  // Styling
  { id: "tailwind", name: "Tailwind CSS", layerId: "Styling", activeIn: ["react", "astro", "monorepo", "start"], githubRepo: "tailwindlabs/tailwindcss", iconUrl: "https://cdn.simpleicons.org/tailwindcss/06b6d4", version: "v4.2.2" },
  { id: "shadcn", name: "shadcn/ui", layerId: "Styling", activeIn: ["react", "monorepo", "start"], githubRepo: "shadcn-ui/ui", iconUrl: "https://cdn.simpleicons.org/shadcnui/000000", version: "shadcn@4.1.0" },
  { id: "baseui", name: "Base UI", layerId: "Styling", activeIn: ["react", "monorepo", "start"], githubRepo: "mui/base-ui", iconUrl: "https://cdn.simpleicons.org/mui/007FFF", version: "v1.3.0" },
  { id: "mui", name: "Material UI", layerId: "Styling", activeIn: ["mui"], githubRepo: "mui/material-ui", iconUrl: "https://cdn.simpleicons.org/mui/007FFF", version: "v7.3.9" },
];

function LibraryCard({ 
  lib, 
  isOpacedOut, 
  layerColor,
  onMouseEnter,
  onMouseLeave
}: { 
  lib: Library; 
  isOpacedOut: boolean; 
  layerColor: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const IconComponent = lib.FallbackIcon;
  

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`group relative flex h-[85px] w-[70px] select-none flex-col transition-all duration-300 sm:h-[100px] sm:w-[85px] ${
        isOpacedOut ? "scale-95 saturate-0 opacity-30" : "opacity-100 hover:z-50 hover:scale-[1.03]"
      }`}
      style={{
        borderWidth: "3px",
        borderColor: isOpacedOut ? "#4a4a55" : layerColor,
        borderStyle: "solid",
        backgroundColor: "#ffffff",
      }}
    >
      <div className="pointer-events-none absolute -top-12 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center whitespace-nowrap rounded-md bg-neutral-900 px-3 py-1.5 text-xs text-white opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
        <span className="font-bold">{lib.name}</span>
        <span className="font-mono text-[10px] text-neutral-400">{lib.version}</span>
        <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-neutral-900"></div>
      </div>

      <div className="flex flex-1 items-center justify-center overflow-hidden p-2 sm:p-3">
        {lib.iconUrl ? (
          <img
            src={lib.iconUrl}
            alt={lib.name}
            className="pointer-events-none h-full w-full object-contain"
          />
        ) : IconComponent ? (
          <IconComponent className="h-5 w-5 text-neutral-800 sm:h-6 sm:w-6" />
        ) : (
          <div className="text-xl font-bold text-neutral-800 sm:text-2xl">
            {lib.name.substring(0, 1)}
          </div>
        )}
      </div>

      <div
        className="flex h- w-full items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap px-1 text-[9px] font-bold leading-none text-white sm:h-6 sm:text-[11px]"
        style={{ backgroundColor: isOpacedOut ? "#4a4a55" : layerColor }}
      >
        {lib.name}
      </div>
    </div>
  );
}

export function TierList({
  selectedType,
  onSelectType,
}: {
  selectedType: string | null;
  onSelectType: (id: string | null) => void;
}) {
  const [hoveredLibraryId, setHoveredLibraryId] = useState<string | null>(null);
  const [hoveredTypeId, setHoveredTypeId] = useState<string | null>(null);

  const toggleType = (id: string) => {
    onSelectType(selectedType === id ? null : id);
  };

  const getLayerLibraries = (layerId: string) => LIBRARIES.filter((l) => l.layerId === layerId);

  const effectiveType = hoveredTypeId || selectedType;
  const hoveredLibrary = hoveredLibraryId ? LIBRARIES.find(l => l.id === hoveredLibraryId) : null;

  return (
    <div className="mx-auto w-full max-w-6xl rounded-xl bg-[#2a2a2f] p-4 font-sans text-white shadow-2xl sm:p-6">
      <div className="mb-6 flex flex-wrap gap-2 rounded-md bg-[#222226] p-2 text-xs font-mono text-neutral-400 sm:text-sm lg:gap-4 lg:p-3">
        {TOGGLES.map((type) => {
          const isSelected = selectedType === type.id;
          const isHovered = hoveredTypeId === type.id;
          
          let isHoverSelected = false;
          let isHoverDimmed = false;

          if (hoveredLibrary) {
            if (hoveredLibrary.activeIn.includes(type.id)) {
              isHoverSelected = true;
            } else {
              isHoverDimmed = true;
            }
          }

          return (
            <button
              key={type.id}
              onClick={() => toggleType(type.id)}
              onMouseEnter={() => setHoveredTypeId(type.id)}
              onMouseLeave={() => setHoveredTypeId(null)}
              className={`flex items-center gap-2 rounded px-3 py-1.5 transition-all ${
                isSelected || isHovered || isHoverSelected
                  ? "bg-[#3a3a46] font-medium text-white shadow-sm" 
                  : "hover:bg-[#2d2d34]"
              } ${isHoverDimmed ? "scale-95 saturate-0 opacity-30" : "opacity-100"}`}
            >
              <span className={`size-3 shrink-0 rounded-[2px] ${type.bgClass}`} />
              <span className="tracking-tight">{type.label}</span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col rounded-lg border-2 border-[#1E1E24] bg-[#2a2a2f]">
        {LAYERS.map((layerData, index, array) => (
          <div
            key={layerData.id}
            className="relative flex border-b-2"
            style={{ borderBottomColor: index === array.length - 1 ? "transparent" : "#1e1e24" }}
          >
            <div
              className="flex w-12 shrink-0 items-center justify-center border-r-2 border-[#1E1E24] text-xs font-bold text-white sm:w-26 sm:text-md"
              style={{ backgroundColor: layerData.color }}
            >
              <span className="-rotate-90 tracking-widest uppercase sm:rotate-0 sm:tracking-normal sm:capitalize">
                {layerData.label}
              </span>
            </div>

            <div className="flex flex-1 flex-wrap gap-x-1.5 gap-y-1 bg-[#31313E] p-2 sm:gap-x-3 sm:gap-y-2 sm:p-3">
              {getLayerLibraries(layerData.id).map((lib) => {
                const isOpacedOut = effectiveType !== null && !lib.activeIn.includes(effectiveType);

                return (
                  <LibraryCard 
                    key={lib.id} 
                    lib={lib} 
                    isOpacedOut={isOpacedOut} 
                    layerColor={layerData.color} 
                    onMouseEnter={() => setHoveredLibraryId(lib.id)}
                    onMouseLeave={() => setHoveredLibraryId(null)}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
