import { useState } from "react";
import {
  Send,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { profile, socials } from "@/data/portfolio";
import { Button } from "@/components/Button";

type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", email: "", subject: "", message: "" };

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (values.subject.trim().length < 2) errors.subject = "Please enter a subject.";
  if (values.message.trim().length < 8)
    errors.message = "Please write a brief message.";
  return errors;
}

// Brand SVG Icons for crisp high-fidelity rendering
export function GithubIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function LinkedinIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const inputClass =
  "w-full rounded-lg border border-border/80 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-200 focus:border-primary focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:shadow-[0_0_16px_oklch(0.86_0.22_145/0.25)]";

export function ContactForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [preparedDraft, setPreparedDraft] = useState<{
    subject: string;
    body: string;
    mailtoUrl: string;
    gmailUrl: string;
  } | null>(null);

  const update =
    (key: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [key]: e.target.value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  function copyToClipboard(text: string, type: "email" | "phone") {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setIsSubmitting(true);

    const emailSubject = `[Portfolio Contact] ${values.subject}`;
    const emailBody = `Hi Mitchel,

${values.message}

---
From: ${values.name}
Reply To: ${values.email}
Sent via Portfolio Contact Form`;

    const mailtoUrl = `mailto:${encodeURIComponent(profile.email)}?subject=${encodeURIComponent(
      emailSubject,
    )}&body=${encodeURIComponent(emailBody)}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      profile.email,
    )}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    setPreparedDraft({
      subject: emailSubject,
      body: emailBody,
      mailtoUrl,
      gmailUrl,
    });

    // Automatically trigger email client
    try {
      window.location.href = mailtoUrl;
    } catch {
      // fallback
    }

    setSubmissionSuccess(true);
    setIsSubmitting(false);
  }

  const githubSocial = socials.find((s) => s.label.toLowerCase() === "github");
  const linkedinSocial = socials.find((s) => s.label.toLowerCase() === "linkedin");

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
      {/* Contact Details & Social Channels */}
      <div className="flex flex-col justify-between space-y-6">
        <div>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary shadow-[0_0_16px_oklch(0.86_0.22_145/0.2)]">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
            </span>
            {profile.availability}
          </div>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Get in touch directly
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Have a project in mind, want to discuss software engineering, or explore an opportunity?
            Reach out through any channel below or use the instant form.
          </p>
        </div>

        {/* Detailed Contact Cards */}
        <div className="grid gap-3.5 sm:grid-cols-2">
          {/* Email Card */}
          <div className="group relative overflow-hidden rounded-xl border border-border/70 bg-card/70 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card hover:shadow-[0_0_20px_oklch(0.86_0.22_145/0.15)]">
            <div className="flex items-center justify-between">
              <div className="flex size-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary shadow-sm">
                <Mail aria-hidden className="size-5" />
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(profile.email, "email")}
                aria-label="Copy email address"
                className="inline-flex items-center gap-1 rounded-md border border-border/80 bg-background/60 px-2 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                {copiedEmail ? (
                  <>
                    <Check className="size-3 text-primary" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="size-3" /> Copy
                  </>
                )}
              </button>
            </div>
            <p className="mt-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Email Address
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-1 block font-mono text-sm font-semibold text-foreground transition-colors hover:text-primary break-all"
            >
              {profile.email}
            </a>
          </div>

          {/* Phone Card */}
          <div className="group relative overflow-hidden rounded-xl border border-border/70 bg-card/70 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card hover:shadow-[0_0_20px_oklch(0.86_0.22_145/0.15)]">
            <div className="flex items-center justify-between">
              <div className="flex size-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary shadow-sm">
                <Phone aria-hidden className="size-5" />
              </div>
              <div className="flex items-center gap-1.5">
                <a
                  href={profile.whatsappHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Chat on WhatsApp"
                  className="inline-flex items-center gap-1 rounded-md border border-primary/30 bg-primary/15 px-2 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <MessageCircle className="size-3" /> WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard(profile.phoneFormatted || profile.phone, "phone")}
                  aria-label="Copy phone number"
                  className="inline-flex items-center gap-1 rounded-md border border-border/80 bg-background/60 px-2 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="size-3 text-primary" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="size-3" /> Copy
                    </>
                  )}
                </button>
              </div>
            </div>
            <p className="mt-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Phone / Mobile
            </p>
            <a
              href={`tel:${profile.phoneHref}`}
              className="mt-1 block font-mono text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              {profile.phoneFormatted || profile.phone}
            </a>
          </div>

          {/* GitHub Card */}
          <a
            href={githubSocial?.url || profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="group relative overflow-hidden rounded-xl border border-border/70 bg-card/70 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card hover:shadow-[0_0_20px_oklch(0.86_0.22_145/0.15)]"
          >
            <div className="flex items-center justify-between">
              <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-background/80 text-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary">
                <GithubIcon className="size-5" />
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground group-hover:text-primary">
                Profile <ExternalLink className="size-3" />
              </span>
            </div>
            <p className="mt-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              GitHub Repositories
            </p>
            <span className="mt-1 block font-mono text-sm font-semibold text-foreground group-hover:text-primary truncate">
              {(githubSocial?.url || profile.github).replace(/^https?:\/\//, "")}
            </span>
          </a>

          {/* LinkedIn Card */}
          <a
            href={linkedinSocial?.url || profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="group relative overflow-hidden rounded-xl border border-border/70 bg-card/70 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card hover:shadow-[0_0_20px_oklch(0.86_0.22_145/0.15)]"
          >
            <div className="flex items-center justify-between">
              <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-background/80 text-[#0077b5] transition-colors group-hover:border-primary/40 group-hover:text-primary">
                <LinkedinIcon className="size-5" />
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground group-hover:text-primary">
                Connect <ExternalLink className="size-3" />
              </span>
            </div>
            <p className="mt-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              LinkedIn Network
            </p>
            <span className="mt-1 block font-mono text-sm font-semibold text-foreground group-hover:text-primary truncate">
              {(linkedinSocial?.url || profile.linkedin).replace(/^https?:\/\/(www\.)?/, "")}
            </span>
          </a>
        </div>

        {/* Location & University info badge */}
        <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-surface/50 px-4 py-3 text-xs text-muted-foreground">
          <MapPin className="size-4 shrink-0 text-primary" />
          <span>
            Based in <strong className="font-semibold text-foreground">{profile.location}</strong> ·{" "}
            {profile.education.school}
          </span>
        </div>
      </div>

      {/* Contact Form with Automatic Email Dispatch */}
      <div className="relative rounded-2xl border border-border/80 bg-card/80 p-6 shadow-card backdrop-blur-xl sm:p-8">
        <div className="mb-5 flex items-center justify-between border-b border-border/60 pb-4">
          <div>
            <h3 className="text-lg font-bold text-foreground">Send an Email Message</h3>
            <p className="text-xs text-muted-foreground">
              Automatically composes & sends directly to {profile.email}
            </p>
          </div>
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Sparkles className="size-4" />
          </div>
        </div>

        <form onSubmit={handleFormSubmit} noValidate className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Your Name <span className="text-primary">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                placeholder="Alex Mercer"
                autoComplete="name"
                className={inputClass}
                value={values.name}
                onChange={update("name")}
              />
              {errors.name && (
                <p className="mt-1 text-xs font-medium text-destructive">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="contact-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Your Email <span className="text-primary">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="alex@example.com"
                autoComplete="email"
                className={inputClass}
                value={values.email}
                onChange={update("email")}
              />
              {errors.email && (
                <p className="mt-1 text-xs font-medium text-destructive">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="contact-subject" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Subject <span className="text-primary">*</span>
            </label>
            <input
              id="contact-subject"
              name="subject"
              placeholder="Project Inquiry / Opportunity"
              className={inputClass}
              value={values.subject}
              onChange={update("subject")}
            />
            {errors.subject && (
              <p className="mt-1 text-xs font-medium text-destructive">{errors.subject}</p>
            )}
          </div>

          <div>
            <label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Message <span className="text-primary">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="Write your message here... On clicking Send, your email application will automatically open with everything pre-filled."
              className={`${inputClass} resize-y`}
              value={values.message}
              onChange={update("message")}
            />
            {errors.message && (
              <p className="mt-1 text-xs font-medium text-destructive">{errors.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full shadow-neon"
          >
            <Send aria-hidden className="size-4" />
            Send Message Automatically
          </Button>

          {/* Success state & 1-click email launch fallbacks */}
          {submissionSuccess && preparedDraft && (
            <div className="mt-5 rounded-xl border border-primary/40 bg-primary/10 p-4 text-foreground shadow-[0_0_24px_oklch(0.86_0.22_145/0.2)]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="size-5 shrink-0 text-primary mt-0.5" />
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-primary">
                    Email Client Launched Automatically!
                  </p>
                  <p className="text-xs text-foreground/90 leading-relaxed">
                    Your message addressed to <strong className="text-primary font-mono">{profile.email}</strong> has been formatted. If your email app did not open automatically, choose an option below:
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <a
                      href={preparedDraft.gmailUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                    >
                      Open in Gmail Web <ExternalLink className="size-3" />
                    </a>

                    <a
                      href={preparedDraft.mailtoUrl}
                      className="inline-flex items-center gap-1.5 rounded-md border border-primary/40 bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      Retry Default Mail App
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(preparedDraft.body);
                        setCopiedEmail(true);
                        setTimeout(() => setCopiedEmail(false), 2000);
                      }}
                      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Copy className="size-3" /> Copy Message Draft
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
