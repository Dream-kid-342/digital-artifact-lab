import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Contact form submission.
 *
 * Integration point: set the `CONTACT_WEBHOOK_URL` environment variable to a
 * real endpoint that delivers the message (for example an email-service webhook
 * or your own API). The URL is read on the server only, so no key is ever
 * shipped to the browser. While it is unset, the server reports that delivery
 * is not configured and the UI offers the direct email address instead — it
 * never claims a message was sent.
 */
export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data) =>
    z
      .object({
        name: z.string().min(2).max(100),
        email: z.string().email(),
        subject: z.string().min(2).max(150),
        message: z.string().min(10).max(5000),
      })
      .parse(data),
  )
  .handler(async ({ data }) => {
    const endpoint = process.env["CONTACT_WEBHOOK_URL"];

    if (!endpoint) {
      return {
        status: "not_configured" as const,
        message:
          "Message delivery is not configured yet. Please email me directly and I'll reply.",
      };
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...data, receivedAt: new Date().toISOString() }),
    });

    if (!response.ok) {
      return {
        status: "error" as const,
        message: "The message could not be delivered. Please try again or email me directly.",
      };
    }

    return { status: "sent" as const, message: "Thanks — your message was sent." };
  });
