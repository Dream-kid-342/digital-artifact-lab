import { cva, type VariantProps } from "class-variance-authority";
import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const buttonStyles = cva(
  "group inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-card hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lift",
        outline:
          "border border-input bg-card text-foreground hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary",
        onInk:
          "border border-ink-border bg-ink-foreground/5 text-ink-foreground hover:-translate-y-0.5 hover:border-ink-foreground/40 hover:bg-ink-foreground/10",
        ghost: "text-primary hover:text-primary/80",
      },
      size: {
        md: "h-11 px-5",
        sm: "h-9 px-4 text-[13px]",
        link: "h-auto p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Variants = VariantProps<typeof buttonStyles>;

export function Button({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"button"> & Variants) {
  return (
    <button className={cn(buttonStyles({ variant, size }), className)} {...props} />
  );
}

export function ButtonLink({
  className,
  variant,
  size,
  ...props
}: ComponentProps<typeof Link> & Variants) {
  return <Link className={cn(buttonStyles({ variant, size }), className)} {...props} />;
}

export function ButtonAnchor({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"a"> & Variants) {
  return <a className={cn(buttonStyles({ variant, size }), className)} {...props} />;
}
