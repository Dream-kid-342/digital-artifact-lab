import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Github, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { PageHeader } from "@/components/PageHeader";
import { LocalImage } from "@/components/LocalImage";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const title = `${loaderData?.project.title} — Mitchel Ndinda Martin`;
    const description = loaderData?.project.description;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <>
      <div className="border-b border-border bg-surface/40 py-4">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-3.5" /> Back to all projects
          </Link>
        </div>
      </div>

      <PageHeader
        eyebrow={project.category}
        title={project.title}
        intro={project.tagline || project.description}
      />

      <article className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-16 px-5 sm:px-8">
          {/* Main Cover and Action Links */}
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="overflow-hidden rounded-2xl border border-border/80 bg-card p-2 shadow-card">
              <LocalImage
                src={project.cover}
                alt={`${project.title} dashboard screenshot`}
                loading="eager"
                className="rounded-xl"
              />
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-border/80 bg-card/70 p-6 backdrop-blur-md">
              <div>
                <h3 className="text-lg font-bold text-foreground">Project Summary</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.overview}
                </p>

                <div className="mt-6 border-t border-border/70 pt-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Technologies
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border/80 bg-surface px-2.5 py-1 font-mono text-xs text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 border-t border-border/70 pt-6">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-neon-sm hover:bg-primary/90"
                  >
                    Live Demo <ExternalLink className="size-4" />
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-lg border border-border/80 bg-background/80 px-4 py-2 text-sm font-semibold text-foreground hover:border-primary/50 hover:text-primary"
                  >
                    <Github className="size-4" /> View Code
                  </a>
                )}
                {project.links.pdf && (
                  <a
                    href={project.links.pdf}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-lg border border-border/80 bg-background/80 px-4 py-2 text-sm font-semibold text-foreground hover:border-primary/50 hover:text-primary"
                  >
                    <FileText className="size-4" /> Project Doc (PDF)
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Problem & Solution */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border/80 bg-card/60 p-6 backdrop-blur-md sm:p-8">
              <span className="label-eyebrow text-destructive">Challenge & Context</span>
              <h3 className="mt-2 text-xl font-bold text-foreground">The Problem</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {project.problem}
              </p>
            </div>

            <div className="rounded-2xl border border-primary/30 bg-card/60 p-6 backdrop-blur-md sm:p-8 shadow-[0_0_20px_oklch(0.86_0.22_145/0.12)]">
              <span className="label-eyebrow text-primary">Technical Approach</span>
              <h3 className="mt-2 text-xl font-bold text-foreground">The Solution</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Core Capabilities */}
          <div>
            <h3 className="text-xl font-bold text-foreground sm:text-2xl">Core Capabilities</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.capabilities.map((cap) => (
                <div
                  key={cap}
                  className="flex items-start gap-3 rounded-xl border border-border/70 bg-card/50 p-4"
                >
                  <CheckCircle2 className="size-5 shrink-0 text-primary mt-0.5" />
                  <span className="text-sm font-medium text-foreground">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Decisions */}
          {project.decisions && project.decisions.length > 0 && (
            <div className="rounded-2xl border border-border/80 bg-surface/50 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-foreground">Engineering Decisions</h3>
              <div className="mt-6 space-y-4">
                {project.decisions.map((d, i) => (
                  <div key={i} className="rounded-xl border border-border/70 bg-card/70 p-5">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                      Challenge
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">{d.challenge}</p>
                    <p className="mt-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Decision
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{d.decision}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Next Steps CTA */}
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-primary/30 bg-card/70 p-8 shadow-card">
            <div>
              <h3 className="text-xl font-bold text-foreground">Ready to discuss this project or your own?</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                I can walk you through the architecture, trade-offs, and codebase.
              </p>
            </div>
            <ButtonLink to="/contact">
              Get in Touch <ArrowRight className="size-4" />
            </ButtonLink>
          </div>
        </div>
      </article>
    </>
  );
}
