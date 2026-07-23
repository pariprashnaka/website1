import { NextResponse } from "next/server";
import { z } from "zod";
import { rateLimit, getClientIp } from "@/lib/rateLimit";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  date: z.string().min(1),
  time: z.string().min(1),
  query: z.string().min(1),
  timezone: z.string().optional(),
});

export async function POST(req: Request) {
  const ip = getClientIp(req);
  const { allowed } = rateLimit(`schedule:${ip}`, 5, 10 * 60 * 1000);
  if (!allowed) return NextResponse.json({ ok: false }, { status: 429 });

  const parsed = schema.safeParse(await req.json());
  if (!parsed.success) return NextResponse.json({ ok: false }, { status: 400 });

  const { name, email, date, time, timezone, query } = parsed.data;

  await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      accessToken: process.env.EMAILJS_PRIVATE_KEY,
      template_params: {
        name,
        email,
        company: "—",
        service: `Meeting Request — ${date} at ${time} (${timezone || "TZ not specified"})`,
        message: query,
      },
    }),
  });

  return NextResponse.json({ ok: true });
}
