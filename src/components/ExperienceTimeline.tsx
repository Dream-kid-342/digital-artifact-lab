import { Check } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

export function ExperienceTimeline() {
  return (
    <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-8">
      {experience.map((job, i) => (
        <Reveal as="li" key={job.role + job.period} delay={i * 0.08} className="relative">
          <span
            aria-hidden
            className="absolute top-2 -left-[1.9rem] size-3 rounded-full border-2 border-primary bg-background shadow-[0_0_10px_oklch(0.86_0.22_145/0.9)] sm:-left-[2.4rem]"
          />
          <div className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-7">
            <p className="label-eyebrow text-primary">{job.period}</p>
            <h3 className="mt-3 text-xl font-bold sm:text-2xl">{job.role}</h3>
            <p className="mt-1 text-sm font-semibold text-muted-foreground">
              {job.company} · {job.mode}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {job.summary}
            </p>
            <ul className="mt-5 grid gap-2.5">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-2.5 text-sm leading-relaxed">
                  <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
