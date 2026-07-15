import { NextResponse } from "next/server";
import { z } from "zod";
import { rateLimit, getClientIp } from "@/lib/rateLimit";

const contactSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(1, "Tell us a little about the project."),
  source: z.string().optional(),
  // Honeypot field — real users never fill this in (it's hidden via CSS).
  // Bots that auto-fill every field will trip it. No length constraint here
  // on purpose — we want this to pass normal validation and get caught by
  // our own check below, not surface an error that teaches bots to avoid it.
  website: z.string().optional(),
});

export async function POST(req: Request) {
  const ip = getClientIp(req);
  const { allowed } = rateLimit(`contact:${ip}`, 5, 10 * 60 * 1000); // 5 submissions per 10 minutes per IP

  if (!allowed) {
    return NextResponse.json({ ok: false, error: "Too many submissions. Please try again later." }, { status: 429 });
  }

  const body = await req.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  // Honeypot tripped — pretend success so bots don't learn to avoid the field, but don't process it.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  // TODO: wire this up to a real email/CRM service (e.g. Resend, SendGrid, or a webhook into your CRM).
  console.log("New contact submission:", parsed.data);

  return NextResponse.json({ ok: true });
}
