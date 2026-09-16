import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { SkillGrid } from "@/components/SkillGrid";

const title = "Skills — Mitchel Ndinda Martin";
const description =
  "Technical capabilities across programming languages, frontend, backend, databases, software engineering practice and developer tooling.";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Technical Skills"
        title="Capabilities, grouped by where they live in an application."
        intro="No percentage bars — those numbers are arbitrary. This is the ground I actually work on, from language fundamentals through to deployment tooling."
      />
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <SkillGrid />
        </div>
      </section>
    </>
  );
}
