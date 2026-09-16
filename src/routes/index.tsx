import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillGrid } from "@/components/SkillGrid";
import { ButtonLink } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { about, projects, profile } from "@/data/portfolio";

const title = "Mitchel Ndinda Martin — Software Developer, Nairobi";
const description =
  "Full-stack developer and JKUAT Computer Science student building practical web applications with React, Python, REST APIs and PostgreSQL.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />

      {/* Short intro + capability summary */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="About Me"
              title="A developer who ships the whole application."
            />
            <ButtonLink to="/about" variant="ghost" size="link" className="mt-6">
              Read more about me
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </ButtonLink>
          </Reveal>
          <div className="space-y-4">
            {about.paragraphs.map((p, i) => (
              <Reveal key={p} delay={0.08 * i}>
                <p className="text-base leading-relaxed text-muted-foreground">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects — the centrepiece */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Selected Work"
              title="Projects, explained end to end."
              intro="Each project is written up as a case study: the problem it addresses, how it was built, the architecture behind it and the engineering decisions along the way."
            />
          </Reveal>
          <div className="mt-10 space-y-8">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <ButtonLink to="/projects" variant="outline">
              All projects
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* Skills on a dark section for contrast */}
      <section className="bg-ink">
        <div className="relative overflow-hidden">
          <div aria-hidden className="bg-grid-ink absolute inset-0 opacity-60" />
          <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <Reveal>
              <SectionHeading
                onInk
                eyebrow="Technical Skills"
                title="Tools I work with day to day."
                intro="Grouped by where they sit in an application rather than rated with arbitrary numbers."
              />
            </Reveal>
            <div className="mt-10 [&_*]:text-foreground">
              <div className="rounded-2xl bg-background/95 p-5 sm:p-8">
                <SkillGrid />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-border bg-surface/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="mb-12">
              <p className="label-eyebrow text-primary">Get In Touch</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Let&apos;s build something exceptional.
              </h2>
              <p className="mt-3 max-w-2xl text-base text-muted-foreground">
                Whether you need a full-stack web application, backend architecture, or want to discuss an opportunity, I&apos;m always ready to collaborate.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
