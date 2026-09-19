import { Resend, type CreateEmailOptions } from "resend";

const RECIPIENT_EMAIL = "bilal7haider7@gmail.com";
const MAX_REQUEST_BYTES = 20_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

type ContactSubmission = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  submissionId: string;
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

type EmailSender = (
  payload: CreateEmailOptions,
  options?: { idempotencyKey?: string },
) => Promise<{ data: { id: string } | null; error: unknown | null }>;

const rateLimits = new Map<string, RateLimitEntry>();

function jsonResponse(body: Record<string, string>, status: number, headers?: HeadersInit) {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      ...headers,
    },
  });
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string, now: number) {
  for (const [key, entry] of rateLimits) {
    if (entry.resetAt <= now) rateLimits.delete(key);
  }

  const current = rateLimits.get(ip);
  if (!current || current.resetAt <= now) {
    rateLimits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readString(
  payload: Record<string, unknown>,
  key: string,
  maxLength: number,
  required: boolean,
) {
  const value = payload[key];
  if (value === undefined && !required) return "";
  if (typeof value !== "string") return null;

  const trimmed = value.trim();
  if ((required && trimmed.length === 0) || trimmed.length > maxLength) return null;
  return trimmed;
}

function parseSubmission(payload: unknown): ContactSubmission | null {
  if (!isRecord(payload)) return null;

  const firstName = readString(payload, "firstName", 80, true);
  const lastName = readString(payload, "lastName", 80, true);
  const email = readString(payload, "email", 254, true);
  const phone = readString(payload, "phone", 40, false);
  const service = readString(payload, "service", 100, false);
  const message = readString(payload, "message", 5_000, true);
  const submissionId = readString(payload, "submissionId", 36, true);

  if (
    firstName === null ||
    lastName === null ||
    email === null ||
    phone === null ||
    service === null ||
    message === null ||
    submissionId === null
  ) {
    return null;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  const invalidName = /[\r\n]/.test(firstName) || /[\r\n]/.test(lastName);
  const invalidControlCharacter = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(message);

  if (!emailPattern.test(email) || invalidName || invalidControlCharacter || !uuidPattern.test(submissionId)) {
    return null;
  }

  return { firstName, lastName, email, phone, service, message, submissionId };
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });
}

function createEmail(submission: ContactSubmission, submittedAt: string): CreateEmailOptions {
  const fullName = `${submission.firstName} ${submission.lastName}`;
  const phone = submission.phone || "Not provided";
  const service = submission.service || "Not specified";
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim();
  const from = fromEmail || (process.env.NODE_ENV === "production" ? "" : "Portfolio <onboarding@resend.dev>");

  if (!from) {
    throw new Error("CONTACT_FROM_EMAIL is not configured.");
  }

  const text = [
    "NEW PORTFOLIO INQUIRY",
    "",
    `Name: ${fullName}`,
    `Email: ${submission.email}`,
    `Phone: ${phone}`,
    `Service: ${service}`,
    "",
    "Message:",
    submission.message,
    "",
    `Submitted: ${submittedAt}`,
  ].join("\n");

  const htmlMessage = escapeHtml(submission.message).replace(/\r?\n/g, "<br />");

  return {
    from,
    to: RECIPIENT_EMAIL,
    replyTo: submission.email,
    subject: `New Portfolio Inquiry — ${fullName}`,
    text,
    html: `
      <div style="font-family: Arial, sans-serif; color: #18181b; line-height: 1.6;">
        <h1 style="font-size: 22px; margin: 0 0 24px;">NEW PORTFOLIO INQUIRY</h1>
        <p><strong>Name:</strong><br />${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong><br />${escapeHtml(submission.email)}</p>
        <p><strong>Phone:</strong><br />${escapeHtml(phone)}</p>
        <p><strong>Service:</strong><br />${escapeHtml(service)}</p>
        <p><strong>Message:</strong><br />${htmlMessage}</p>
        <p style="color: #71717a; font-size: 13px; margin-top: 24px;">Submitted: ${escapeHtml(submittedAt)}</p>
      </div>
    `,
  };
}

async function sendWithResend(payload: CreateEmailOptions, options?: { idempotencyKey?: string }) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) throw new Error("RESEND_API_KEY is not configured.");

  return new Resend(apiKey).emails.send(payload, options);
}

export async function handleContactRequest(request: Request, sendEmail: EmailSender = sendWithResend) {
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return jsonResponse({ error: "Invalid request." }, 415);
  }

  const declaredLength = Number(request.headers.get("content-length") || 0);
  if (Number.isFinite(declaredLength) && declaredLength > MAX_REQUEST_BYTES) {
    return jsonResponse({ error: "Invalid request." }, 413);
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip, Date.now())) {
    return jsonResponse({ error: "Too many requests. Please try again later." }, 429, {
      "Retry-After": String(RATE_LIMIT_WINDOW_MS / 1000),
    });
  }

  let payload: unknown;
  try {
    const rawBody = await request.text();
    if (!rawBody || rawBody.length > MAX_REQUEST_BYTES) {
      return jsonResponse({ error: "Invalid request." }, 400);
    }
    payload = JSON.parse(rawBody);
  } catch {
    return jsonResponse({ error: "Invalid request." }, 400);
  }

  if (!isRecord(payload)) {
    return jsonResponse({ error: "Invalid request." }, 400);
  }

  const honeypot = payload.website;
  if (typeof honeypot !== "string" || honeypot.trim().length > 0) {
    return jsonResponse({ error: "Invalid request." }, 400);
  }

  const submission = parseSubmission(payload);
  if (!submission) {
    return jsonResponse({ error: "Please check the required fields and try again." }, 400);
  }

  try {
    const submittedAt = new Date().toISOString();
    const result = await sendEmail(createEmail(submission, submittedAt), {
      idempotencyKey: `portfolio-contact/${submission.submissionId}`,
    });

    if (result.error) throw result.error;

    return jsonResponse({ message: "Message sent successfully." }, 200);
  } catch (error) {
    console.error("Contact email delivery failed:", error);
    return jsonResponse({ error: "Email delivery failed." }, 502);
  }
}
