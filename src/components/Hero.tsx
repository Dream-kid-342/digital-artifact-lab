import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { ButtonLink, ButtonAnchor } from "@/components/Button";
import { LocalImage } from "@/components/LocalImage";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const step = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease, delay },
        };

  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div aria-hidden className="bg-grid absolute inset-0 opacity-50" />
      <div aria-hidden className="bg-radial-soft absolute inset-0" />
      <motion.div
        aria-hidden
        className="absolute -top-24 -right-24 size-[26rem] rounded-full bg-primary/10 blur-3xl"
        animate={reduce ? undefined : { y: [0, 18, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-28 pb-16 sm:px-8 sm:pt-32 sm:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <motion.p
            {...step(0.1)}
            className="label-eyebrow inline-flex items-center gap-2 text-primary"
          >
            <MapPin aria-hidden className="size-3.5" />
            Software Developer · Nairobi, Kenya
          </motion.p>

          <motion.h1
            {...step(0.22)}
            className="mt-5 text-4xl leading-[1.08] font-bold sm:text-5xl lg:text-[3.4rem]"
          >
            Building software
            <br />
            <span className="text-primary">that solves real problems.</span>
          </motion.h1>

          <motion.p
            {...step(0.36)}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I&apos;m {profile.name}, a Computer Science student and full-stack software
            developer focused on building practical, responsive, and maintainable digital
            products.
          </motion.p>

          <motion.div {...step(0.5)} className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink to="/projects">
              View My Work
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </ButtonLink>
            <ButtonAnchor
              variant="outline"
              href={profile.resumePdf}
              download
              target="_blank"
              rel="noreferrer noopener"
            >
              <Download aria-hidden className="size-4" />
              Download Resume
            </ButtonAnchor>
          </motion.div>

          <motion.div {...step(0.62)} className="mt-6">
            <ButtonLink to="/contact" variant="ghost" size="link">
              Get in Touch
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </ButtonLink>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.35 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div aria-hidden className="absolute -top-3 -left-3 size-16 rounded-tl-xl border-t-2 border-l-2 border-primary/40" />
          <div aria-hidden className="absolute -right-3 -bottom-3 size-16 rounded-br-xl border-r-2 border-b-2 border-primary/40" />
          <LocalImage
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            ratio="aspect-[4/5]"
            loading="eager"
            className="rounded-xl border-border bg-card shadow-lift"
          />
          <div className="mt-4 flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3">
            <span className="font-mono text-[11px] tracking-wide text-muted-foreground">
              BSc Computer Science · JKUAT
            </span>
            <span className="font-mono text-[11px] tracking-wide text-primary">2027</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
