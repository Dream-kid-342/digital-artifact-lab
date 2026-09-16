import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Download, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { profile } from "@/data/portfolio";
import { ButtonLink, ButtonAnchor } from "@/components/Button";
import { LocalImage } from "@/components/LocalImage";
import { GithubIcon, LinkedinIcon } from "@/components/ContactForm";

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
      <div aria-hidden className="bg-grid absolute inset-0 opacity-40" />
      <div aria-hidden className="bg-radial-soft absolute inset-0" />
      <motion.div
        aria-hidden
        className="absolute -top-24 -right-24 size-[28rem] rounded-full bg-primary/15 blur-3xl"
        animate={reduce ? undefined : { y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-24 -left-24 size-[24rem] rounded-full bg-[oklch(0.78_0.16_195/0.12)] blur-3xl"
        animate={reduce ? undefined : { y: [0, -18, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-28 pb-16 sm:px-8 sm:pt-32 sm:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <motion.div {...step(0.1)} className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary shadow-[0_0_12px_oklch(0.86_0.22_145/0.25)]">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Available for Projects & Roles
            </span>
            <span className="label-eyebrow inline-flex items-center gap-1.5 text-muted-foreground">
              <MapPin aria-hidden className="size-3 text-primary" />
              Nairobi, Kenya
            </span>
          </motion.div>

          <motion.h1
            {...step(0.22)}
            className="mt-5 text-4xl leading-[1.08] font-bold sm:text-5xl lg:text-[3.4rem]"
          >
            Building software
            <br />
            <span className="text-primary drop-shadow-[0_0_24px_oklch(0.86_0.22_145/0.35)]">
              that solves real problems.
            </span>
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
            <ButtonLink to="/projects" className="shadow-neon">
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
            <ButtonLink to="/contact" variant="ghost" size="link" className="px-2">
              Get in Touch
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </ButtonLink>
          </motion.div>

          {/* Realistic Quick Social / Contact Links */}
          <motion.div {...step(0.62)} className="mt-8 flex flex-wrap items-center gap-2.5 pt-4 border-t border-border/70">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-1">
              Connect:
            </span>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub Profile"
              className="inline-flex items-center gap-1.5 rounded-md border border-border/80 bg-card/60 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-primary/50 hover:bg-card hover:text-primary hover:shadow-[0_0_12px_oklch(0.86_0.22_145/0.25)]"
            >
              <GithubIcon className="size-3.5" />
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn Profile"
              className="inline-flex items-center gap-1.5 rounded-md border border-border/80 bg-card/60 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-primary/50 hover:bg-card hover:text-primary hover:shadow-[0_0_12px_oklch(0.86_0.22_145/0.25)]"
            >
              <LinkedinIcon className="size-3.5" />
              LinkedIn
            </a>

            <a
              href={`tel:${profile.phoneHref}`}
              aria-label="Call Phone"
              className="inline-flex items-center gap-1.5 rounded-md border border-border/80 bg-card/60 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-primary/50 hover:bg-card hover:text-primary hover:shadow-[0_0_12px_oklch(0.86_0.22_145/0.25)]"
            >
              <Phone className="size-3.5" />
              {profile.phoneFormatted || profile.phone}
            </a>

            <a
              href={profile.whatsappHref}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Chat on WhatsApp"
              className="inline-flex items-center gap-1.5 rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1.5 text-xs font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              <MessageCircle className="size-3.5" />
              WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.35 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div aria-hidden className="absolute -top-3 -left-3 size-16 rounded-tl-xl border-t-2 border-l-2 border-primary shadow-[0_0_12px_oklch(0.86_0.22_145/0.6)]" />
          <div aria-hidden className="absolute -right-3 -bottom-3 size-16 rounded-br-xl border-r-2 border-b-2 border-primary shadow-[0_0_12px_oklch(0.86_0.22_145/0.6)]" />
          <div className="overflow-hidden rounded-xl border border-primary/40 bg-card p-1.5 shadow-lift">
            <LocalImage
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              ratio="aspect-[3/4]"
              loading="eager"
              imgClassName="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
              className="rounded-lg"
            />
          </div>
          <div className="mt-4 flex items-center justify-between rounded-lg border border-border/80 bg-card/80 px-4 py-3 shadow-card backdrop-blur-md">
            <span className="font-mono text-[11px] tracking-wide text-muted-foreground">
              BSc Computer Science · JKUAT
            </span>
            <span className="font-mono text-[11px] font-semibold tracking-wide text-primary">
              2027
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
