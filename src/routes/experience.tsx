import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ButtonLink } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

const title = "Experience — Mitchel Ndinda Martin";
const description =
  "Independent web and software development since 2022: full-stack applications, REST APIs, PostgreSQL database design, testing and deployment.";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Independent development work, 2022 to now."
        intro="Self-directed and academic projects taken from requirements through to a deployed application."
      />
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
          <ExperienceTimeline />
          <Reveal className="mt-10" delay={0.1}>
            <ButtonLink to="/projects" variant="outline">
              See the projects behind this
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
