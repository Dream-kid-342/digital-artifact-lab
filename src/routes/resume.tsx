import { createFileRoute } from "@tanstack/react-router";
import { Download, GraduationCap, Briefcase, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { ButtonAnchor, ButtonLink } from "@/components/Button";
import { experience, profile, skillGroups } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/ContactForm";

const title = "Resume — Mitchel Ndinda Martin";
const description =
  "Resume and professional background for Mitchel Ndinda Martin: Computer Science student at JKUAT and full-stack software developer in Nairobi, Kenya.";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <>
      <PageHeader
        eyebrow="Resume & Background"
        title="Engineering experience & qualifications."
        intro="Four years of building practical software with modern web stacks, relational databases, and REST APIs."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          {/* Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border/80 bg-card/70 p-5 shadow-card backdrop-blur-md">
            <div>
              <h2 className="text-xl font-bold text-foreground">{profile.name}</h2>
              <p className="text-xs text-muted-foreground">{profile.role}</p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <ButtonAnchor
                variant="primary"
                size="sm"
                href={profile.resumePdf}
                download
                target="_blank"
                rel="noreferrer noopener"
                className="shadow-neon-sm"
              >
                <Download className="size-4" /> Download Resume PDF
              </ButtonAnchor>
              <ButtonLink to="/contact" variant="outline" size="sm">
                Get in Touch
              </ButtonLink>
            </div>
          </div>

          {/* Quick Contact & Social Strip */}
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 rounded-lg border border-border/70 bg-card/50 p-3 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Mail className="size-3.5 text-primary" />
              <span className="truncate">{profile.email}</span>
            </a>
            <a
              href={`tel:${profile.phoneHref}`}
              className="flex items-center gap-2 rounded-lg border border-border/70 bg-card/50 p-3 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Phone className="size-3.5 text-primary" />
              <span>{profile.phoneFormatted || profile.phone}</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 rounded-lg border border-border/70 bg-card/50 p-3 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <GithubIcon className="size-3.5 text-primary" />
              <span>github.com/mitchel</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 rounded-lg border border-border/70 bg-card/50 p-3 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <LinkedinIcon className="size-3.5 text-primary" />
              <span>linkedin/mitchel-martin</span>
            </a>
          </div>

          {/* Education */}
          <div className="mt-12">
            <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
              <GraduationCap className="size-5 text-primary" /> Education
            </h3>
            <div className="mt-4 rounded-xl border border-border/70 bg-card/60 p-5 backdrop-blur-md">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="font-semibold text-foreground">{profile.education.degree}</h4>
                <span className="font-mono text-xs text-primary">{profile.education.expected}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{profile.education.school}</p>
              <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1.5">
                <MapPin className="size-3 text-primary" /> {profile.location}
              </p>
            </div>
          </div>

          {/* Work Experience */}
          <div className="mt-12">
            <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
              <Briefcase className="size-5 text-primary" /> Practical Experience
            </h3>
            <div className="mt-4 space-y-6">
              {experience.map((item) => (
                <div key={item.role} className="rounded-xl border border-border/70 bg-card/60 p-6 backdrop-blur-md">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h4 className="text-base font-bold text-foreground">{item.role}</h4>
                      <p className="text-xs text-primary font-mono">{item.company} · {item.mode}</p>
                    </div>
                    <span className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {item.summary}
                  </p>
                  <ul className="mt-4 space-y-2 border-t border-border/60 pt-4">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-xs text-foreground/90 sm:text-sm">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div className="mt-12">
            <h3 className="text-lg font-bold text-foreground">Technical Skill Set</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {skillGroups.map((grp) => (
                <div key={grp.title} className="rounded-xl border border-border/70 bg-card/60 p-4 backdrop-blur-md">
                  <p className="font-semibold text-xs uppercase tracking-wider text-primary">
                    {grp.title}
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {grp.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-border/80 bg-surface/70 px-2 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 flex items-center justify-between rounded-xl border border-primary/30 bg-primary/10 p-6">
            <div>
              <h4 className="font-bold text-foreground">Want to discuss opportunities?</h4>
              <p className="text-xs text-muted-foreground mt-1">Available for full-time roles and contracts.</p>
            </div>
            <ButtonLink to="/contact">
              Contact Me <ArrowRight className="size-4" />
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
