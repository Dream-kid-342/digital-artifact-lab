import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

type LocalImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** Shown inside the placeholder so the file to add is obvious. */
  ratio?: string;
  loading?: "lazy" | "eager";
};

/**
 * Renders a local image, and — until the file exists — a clearly marked
 * placeholder naming the path where the real asset should be dropped in.
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
        "relative w-full overflow-hidden rounded-lg border border-border bg-surface",
        ratio,
        className,
      )}
    >
      {failed ? (
        <div className="placeholder-frame absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
          <ImageOff aria-hidden className="size-5 text-muted-foreground" />
          <p className="text-xs font-semibold text-foreground">Image placeholder</p>
          <code className="max-w-full truncate font-mono text-[11px] text-muted-foreground">
            public{src}
          </code>
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
