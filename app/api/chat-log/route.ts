import { NextResponse } from "next/server";
import { z } from "zod";
import fs from "fs";
import path from "path";
import { rateLimit, getClientIp } from "@/lib/rateLimit";

// IMPORTANT: this writes to the local filesystem, which only persists on a
// server that stays running (your Mac in dev, or a traditional/VPS host).
// On serverless hosting (e.g. Vercel), the filesystem resets between
// invocations and these logs will NOT reliably persist. For production use
// on serverless hosting, swap this for a real database (e.g. Supabase's
// free tier) instead.

const LOG_DIR = path.join(process.cwd(), "logs");
const LOG_FILE = path.join(LOG_DIR, "chat-sessions.jsonl");

const logSchema = z.object({
  sessionId: z.string().min(1),
  role: z.enum(["bot", "user"]),
  text: z.string().min(1).max(2000),
});

export async function POST(req: Request) {
  const ip = getClientIp(req);
  const { allowed } = rateLimit(`chatlog:${ip}`, 60, 60 * 1000); // 60 messages/min per IP — generous for real chat use, blocks flooding

  if (!allowed) {
    return NextResponse.json({ ok: false }, { status: 429 });
  }

  const body = await req.json();
  const parsed = logSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  try {
    if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });
    const entry = {
      ...parsed.data,
      timestamp: new Date().toISOString(),
      ip,
    };
    fs.appendFileSync(LOG_FILE, JSON.stringify(entry) + "\n");
  } catch (err) {
    console.error("Failed to write chat log:", err);
    // Don't fail the request over logging — the chat should keep working even if logging breaks.
  }

  return NextResponse.json({ ok: true });
}
