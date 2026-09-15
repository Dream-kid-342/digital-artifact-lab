import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-border bg-surface">
      <div aria-hidden className="bg-grid absolute inset-0 opacity-40" />
      <div aria-hidden className="bg-radial-soft absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <p className="label-eyebrow text-primary">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {intro}
            </p>
          ) : null}
          {children ? <div className="mt-7">{children}</div> : null}
        </Reveal>
      </div>
    </header>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  onInk = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  onInk?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className={`label-eyebrow ${onInk ? "text-cyan-accent" : "text-primary"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 text-2xl font-bold sm:text-3xl ${onInk ? "text-ink-foreground" : ""}`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-4 text-base leading-relaxed ${onInk ? "text-ink-muted" : "text-muted-foreground"}`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
