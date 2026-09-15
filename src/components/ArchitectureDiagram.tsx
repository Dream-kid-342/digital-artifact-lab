import { ArrowDown } from "lucide-react";

/** Simple vertical architecture diagram built from CSS + text — no chart library. */
export function ArchitectureDiagram({ layers }: { layers: string[] }) {
  return (
    <figure className="rounded-xl border border-border bg-card p-5 sm:p-7">
      <ul className="flex flex-col items-center gap-0">
        {layers.map((layer, i) => (
          <li key={layer} className="flex w-full max-w-md flex-col items-center">
            <div className="w-full rounded-lg border border-primary/25 bg-accent/50 px-4 py-3 text-center font-mono text-[13px] font-medium text-accent-foreground">
              {layer}
            </div>
            {i < layers.length - 1 ? (
              <ArrowDown aria-hidden className="my-2 size-4 shrink-0 text-primary/60" />
            ) : null}
          </li>
        ))}
      </ul>
      <figcaption className="mt-5 text-center text-xs text-muted-foreground">
        Request flow from the interface down to persistent storage.
      </figcaption>
    </figure>
  );
}
