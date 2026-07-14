import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(1, "Tell us a little about the project."),
  source: z.string().optional(),
});

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  // TODO: wire this up to a real email/CRM service (e.g. Resend, SendGrid, or a webhook into your CRM).
  console.log("New contact submission:", parsed.data);

  return NextResponse.json({ ok: true });
}
