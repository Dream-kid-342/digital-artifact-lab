import { useState } from "react";
import { Sparkles, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

type LocalImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** Aspect ratio class, e.g. aspect-[16/10] or aspect-[4/5] */
  ratio?: string;
  loading?: "lazy" | "eager";
};

/**
 * High-fidelity local image component with elegant dark navy & neon green fallback placeholder.
 */
export function LocalImage({
  src,
  alt,
  className,
  imgClassName,
  ratio = "aspect-[16/10]",
  loading = "lazy",
}: LocalImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-lg border border-border/80 bg-card/80",
        ratio,
        className,
      )}
    >
      {failed ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-card via-surface to-background p-6 text-center">
          <div className="relative flex size-12 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 text-primary shadow-[0_0_16px_oklch(0.86_0.22_145/0.25)]">
            <Code2 className="size-6" />
            <span className="absolute -top-1 -right-1 flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
            </span>
          </div>

          <div>
            <p className="font-display text-sm font-bold tracking-tight text-foreground flex items-center justify-center gap-1.5">
              <Sparkles className="size-3.5 text-primary" /> Visual Asset
            </p>
            <p className="mt-1 font-mono text-xs text-muted-foreground break-all">
              {src.replace(/^\//, "")}
            </p>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          onError={() => setFailed(true)}
          className={cn(
            "size-full object-cover transition-transform duration-500",
            imgClassName,
          )}
        />
      )}
    </div>
  );
}
