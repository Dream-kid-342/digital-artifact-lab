import { Link } from "@tanstack/react-router";
import { ArrowUp, Phone, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/ContactForm";

export function SiteFooter() {
  return (
    <footer className="no-print border-t border-ink-border bg-ink text-ink-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-primary shadow-[0_0_8px_oklch(0.86_0.22_145/0.8)]" />
            <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-foreground">
              {profile.name}
            </p>
          </div>
          <p className="mt-2 text-sm text-ink-muted leading-relaxed">
            {profile.role} · Based in {profile.location}. Building modern, full-stack, and maintainable software.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub Profile"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-ink-border bg-ink-soft text-ink-muted transition-all hover:border-primary/50 hover:bg-card hover:text-primary hover:shadow-[0_0_12px_oklch(0.86_0.22_145/0.3)]"
            >
              <GithubIcon className="size-4" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn Profile"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-ink-border bg-ink-soft text-ink-muted transition-all hover:border-primary/50 hover:bg-card hover:text-primary hover:shadow-[0_0_12px_oklch(0.86_0.22_145/0.3)]"
            >
              <LinkedinIcon className="size-4" />
            </a>

            <a
              href={`tel:${profile.phoneHref}`}
              aria-label={`Call ${profile.phone}`}
              className="inline-flex size-9 items-center justify-center rounded-lg border border-ink-border bg-ink-soft text-ink-muted transition-all hover:border-primary/50 hover:bg-card hover:text-primary hover:shadow-[0_0_12px_oklch(0.86_0.22_145/0.3)]"
            >
              <Phone className="size-4" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              aria-label={`Email ${profile.email}`}
              className="inline-flex size-9 items-center justify-center rounded-lg border border-ink-border bg-ink-soft text-ink-muted transition-all hover:border-primary/50 hover:bg-card hover:text-primary hover:shadow-[0_0_12px_oklch(0.86_0.22_145/0.3)]"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Navigation
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-ink-muted transition-colors hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-ink-muted transition-colors hover:text-primary">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-ink-muted transition-colors hover:text-primary">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-ink-muted transition-colors hover:text-primary">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-ink-muted transition-colors hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Direct Contact
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="font-mono text-xs text-ink-muted transition-colors hover:text-primary break-all"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phoneHref}`}
                  className="font-mono text-xs text-ink-muted transition-colors hover:text-primary"
                >
                  {profile.phoneFormatted || profile.phone}
                </a>
              </li>
              <li>
                <a
                  href={profile.whatsappHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-xs text-primary transition-colors hover:underline"
                >
                  WhatsApp Direct
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col-reverse items-start gap-3 border-t border-ink-border px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-xs text-ink-muted">© 2026 Mitch. All rights reserved.</p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-muted transition-colors hover:text-primary"
        >
          Back to top <ArrowUp aria-hidden className="size-3.5" />
        </button>
      </div>
    </footer>
  );
}
