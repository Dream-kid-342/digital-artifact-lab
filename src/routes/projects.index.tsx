import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import { projects } from "@/data/portfolio";

const title = "Projects — Mitchel Ndinda Martin";
const description =
  "Case studies and applications built by Mitchel Ndinda Martin: full-stack web platforms, REST APIs, databases, and responsive software.";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ProjectsIndexPage,
});

function ProjectsIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected Work"
        title="Software applications, explained end to end."
        intro="A collection of web applications, platforms, and tools built across frontend, backend, database design, and deployment."
      />

      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="space-y-10">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-border/80 bg-card/60 p-8 text-center backdrop-blur-md">
            <h3 className="text-xl font-bold text-foreground sm:text-2xl">
              Interested in collaborating on a new project?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Have an idea or looking for a developer to join your team? Let&apos;s talk about how I can help.
            </p>
            <div className="mt-6">
              <ButtonLink to="/contact">
                Start a Conversation
                <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
