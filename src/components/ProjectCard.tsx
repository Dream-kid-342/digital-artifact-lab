import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Github, FileText } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { LocalImage } from "@/components/LocalImage";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group grid gap-6 overflow-hidden rounded-xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift sm:p-6 lg:grid-cols-2 lg:gap-8">
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        aria-label={`Read the ${project.title} case study`}
        className="block"
      >
        <LocalImage
          src={project.cover}
          alt={`${project.title} interface screenshot`}
          imgClassName="group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-col">
        <p className="label-eyebrow text-primary">{project.category}</p>
        <h3 className="mt-3 text-xl font-bold sm:text-2xl">
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="transition-colors hover:text-primary"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-4 space-y-1.5">
          {project.capabilities.slice(0, 4).map((c) => (
            <li key={c} className="flex gap-2 text-sm text-foreground">
              <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
              {c}
            </li>
          ))}
        </ul>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-5 text-sm font-semibold">
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="inline-flex items-center gap-1.5 text-primary"
          >
            View Case Study
            <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-foreground hover:text-primary"
            >
              Live Demo <ExternalLink aria-hidden className="size-4" />
            </a>
          ) : null}
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-foreground hover:text-primary"
            >
              GitHub <Github aria-hidden className="size-4" />
            </a>
          ) : null}
          {project.links.pdf ? (
            <a
              href={project.links.pdf}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-foreground hover:text-primary"
            >
              Documentation <FileText aria-hidden className="size-4" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
