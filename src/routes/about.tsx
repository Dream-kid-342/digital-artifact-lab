import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, MapPin, Mail, Phone } from "lucide-react";
import { PageHeader, SectionHeading } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { about, profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/ContactForm";

const title = "About — Mitchel Ndinda Martin";
const description =
  "Computer Science student at JKUAT and full-stack developer with four years of hands-on programming across frontend, backend, databases, APIs and deployment.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Me"
        title="Computer Science student, full-stack developer."
        intro="Four years of hands-on programming, most of it spent building applications from the database up."
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={p} delay={i * 0.08}>
                <p className="text-base leading-relaxed text-muted-foreground">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <dl className="space-y-4 rounded-xl border border-border bg-card p-5 shadow-card sm:p-6">
              <Fact icon={<GraduationCap aria-hidden className="size-4" />} label="Education">
                {profile.education.degree}
                <span className="mt-1 block text-muted-foreground">
                  {profile.education.school} · {profile.education.expected}
                </span>
              </Fact>
              <Fact icon={<MapPin aria-hidden className="size-4" />} label="Location">
                {profile.location}
              </Fact>
              <Fact icon={<Mail aria-hidden className="size-4" />} label="Email">
                <a className="text-primary hover:underline font-mono" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </Fact>
              <Fact icon={<Phone aria-hidden className="size-4" />} label="Phone">
                <a className="text-primary hover:underline font-mono" href={`tel:${profile.phoneHref}`}>
                  {profile.phoneFormatted || profile.phone}
                </a>
              </Fact>
              <Fact icon={<GithubIcon className="size-4" />} label="GitHub">
                <a
                  className="text-primary hover:underline font-mono"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  github.com/mitchel
                </a>
              </Fact>
              <Fact icon={<LinkedinIcon className="size-4" />} label="LinkedIn">
                <a
                  className="text-primary hover:underline font-mono"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  linkedin/mitchel-martin
                </a>
              </Fact>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <SectionHeading eyebrow="Technical Journey" title="How the work developed." />
          </Reveal>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {about.timeline.map((item, i) => (
              <Reveal as="li" key={item.period} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-border bg-card p-5 shadow-card">
                  <p className="label-eyebrow text-primary">{item.period}</p>
                  <h3 className="mt-3 text-base font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

function Fact({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className="flex items-center gap-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        <span className="text-primary">{icon}</span>
        {label}
      </dt>
      <dd className="mt-1.5 text-sm font-medium">{children}</dd>
    </div>
  );
}
