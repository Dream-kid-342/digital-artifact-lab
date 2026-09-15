import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Loader2, Send, CheckCircle2, AlertTriangle } from "lucide-react";
import { sendContactMessage } from "@/lib/contact.functions";
import { profile } from "@/data/portfolio";
import { Button } from "@/components/Button";

type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", email: "", subject: "", message: "" };

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (values.subject.trim().length < 2) errors.subject = "Please add a subject.";
  if (values.message.trim().length < 10)
    errors.message = "Please write at least a sentence or two.";
  return errors;
}

const fieldClass =
  "w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

export function ContactForm() {
  const send = useServerFn(sendContactMessage);
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState<{
    status: "sent" | "error" | "not_configured";
    message: string;
  } | null>(null);

  const update = (key: keyof Fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setResult(null);
    if (Object.keys(found).length > 0) return;

    setPending(true);
    try {
      const response = await send({ data: values });
      setResult(response);
      if (response.status === "sent") setValues(empty);
    } catch {
      setResult({
        status: "error",
        message: "Something went wrong sending the message. Please email me directly.",
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-7"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            className={fieldClass}
            value={values.name}
            onChange={update("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            value={values.email}
            onChange={update("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>
      </div>

      <div className="mt-4">
        <Field id="subject" label="Subject" error={errors.subject}>
          <input
            id="subject"
            name="subject"
            className={fieldClass}
            value={values.subject}
            onChange={update("subject")}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
          />
        </Field>
      </div>

      <div className="mt-4">
        <Field id="message" label="Message" error={errors.message}>
          <textarea
            id="message"
            name="message"
            rows={6}
            className={`${fieldClass} resize-y`}
            value={values.message}
            onChange={update("message")}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
        </Field>
      </div>

      <Button type="submit" disabled={pending} className="mt-6 w-full sm:w-auto">
        {pending ? (
          <>
            <Loader2 aria-hidden className="size-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send aria-hidden className="size-4" /> Send Message
          </>
        )}
      </Button>

      <div aria-live="polite" className="mt-4 empty:mt-0">
        {result ? (
          <p
            className={`flex items-start gap-2 rounded-md border p-3 text-sm ${
              result.status === "sent"
                ? "border-primary/30 bg-accent/50 text-accent-foreground"
                : "border-destructive/30 bg-destructive/8 text-foreground"
            }`}
          >
            {result.status === "sent" ? (
              <CheckCircle2 aria-hidden className="mt-0.5 size-4 shrink-0" />
            ) : (
              <AlertTriangle aria-hidden className="mt-0.5 size-4 shrink-0 text-destructive" />
            )}
            <span>
              {result.message}{" "}
              {result.status !== "sent" ? (
                <a className="font-semibold text-primary underline" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              ) : null}
            </span>
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-foreground">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
