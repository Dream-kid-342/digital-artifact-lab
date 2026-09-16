import {
  Code2,
  LayoutTemplate,
  Server,
  Database,
  GitBranch,
  Terminal,
} from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

const icons = {
  code: Code2,
  layout: LayoutTemplate,
  server: Server,
  database: Database,
  gitBranch: GitBranch,
  terminal: Terminal,
} as const;

export function SkillGrid() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group, i) => {
        const Icon = icons[group.icon];
        return (
          <Reveal as="li" key={group.title} delay={i * 0.06}>
            <div className="h-full rounded-xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
                  <Icon aria-hidden className="size-4.5" />
                </span>
                <h3 className="text-base font-bold">{group.title}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[11.5px] text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        );
      })}
    </ul>
  );
}
