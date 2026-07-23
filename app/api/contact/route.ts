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
  countryCode: z.string().optional(),
  phone: z.string().optional(),
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

  // Send the real email via EmailJS's REST API. This works from a server route since it's
  // a plain HTTP call — no browser-only SDK needed here.
  try {
    const emailRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        accessToken: process.env.EMAILJS_PRIVATE_KEY,
        template_params: {
          name: parsed.data.name || "Not provided",
          email: parsed.data.email,
          company: parsed.data.company || "Not provided",
          service: parsed.data.service || "Not specified",
          message: parsed.data.message,
          phone: parsed.data.phone ? `${parsed.data.countryCode || ""} ${parsed.data.phone}` : "Not provided",
        },
      }),
    });

    if (!emailRes.ok) {
      const errText = await emailRes.text();
      console.error("EmailJS send failed:", emailRes.status, errText);
      console.log("New contact submission (email send failed, logging as fallback):", parsed.data);
    }
  } catch (err) {
    console.error("EmailJS request error:", err);
    console.log("New contact submission (email send errored, logging as fallback):", parsed.data);
  }

  return NextResponse.json({ ok: true });
}
