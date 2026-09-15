import { Link } from "@tanstack/react-router";
import { ArrowUp } from "lucide-react";
import { profile, socials } from "@/data/portfolio";

export function SiteFooter() {
  const links = socials.filter((s) => s.url);

  return (
    <footer className="no-print border-t border-ink-border bg-ink text-ink-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.14em]">
            {profile.name}
          </p>
          <p className="mt-2 text-sm text-ink-muted">
            {profile.shortRole} · {profile.location}
          </p>
        </div>

        <nav aria-label="Footer links" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {links.map((s) => (
            <a
              key={s.label}
              href={s.url as string}
              target="_blank"
              rel="noreferrer noopener"
              className="text-ink-muted transition-colors hover:text-ink-foreground"
            >
              {s.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="text-ink-muted transition-colors hover:text-ink-foreground"
          >
            Email
          </a>
          <Link to="/projects" className="text-ink-muted transition-colors hover:text-ink-foreground">
            Projects
          </Link>
        </nav>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col-reverse items-start gap-3 border-t border-ink-border px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-xs text-ink-muted">© 2026 {profile.name}</p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-muted transition-colors hover:text-ink-foreground"
        >
          Back to top <ArrowUp aria-hidden className="size-3.5" />
        </button>
      </div>
    </footer>
  );
}
