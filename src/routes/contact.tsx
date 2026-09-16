import { createFileRoute } from "@tanstack/react-router";
import { Clock, ShieldCheck, Zap } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/portfolio";

const title = "Contact — Mitchel Ndinda Martin";
const description =
  "Get in touch with Mitchel Ndinda Martin, full-stack software developer based in Nairobi, Kenya. Contact via email, phone, GitHub, LinkedIn, or the automated contact form.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Let's build something exceptional."
        intro="Open to software engineering roles, full-stack freelance projects, technical collaborations, and consultations. Reach out anytime."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <ContactForm />
          </Reveal>

          {/* Value highlights */}
          <div className="mt-16 grid gap-6 border-t border-border/80 pt-12 sm:grid-cols-3">
            <div className="flex items-start gap-3 rounded-xl border border-border/70 bg-card/50 p-4 backdrop-blur-sm">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Clock className="size-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">Rapid Response</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  I typically respond within 24 hours. For urgent inquiries, reach out via WhatsApp or direct phone.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-border/70 bg-card/50 p-4 backdrop-blur-sm">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Zap className="size-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">Timezone & Location</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Based in Nairobi, Kenya (EAT, UTC+3). Accustomed to collaborating with remote and distributed teams.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-border/70 bg-card/50 p-4 backdrop-blur-sm">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ShieldCheck className="size-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">End-to-End Delivery</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  From UI design and database modeling to REST APIs and cloud deployment, your project is handled comprehensively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
