"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Bot, X, Send } from "lucide-react";
import { trackEvent } from "@/lib/gtag";

type Row = {
  Category: string;
  Question: string;
  Answer: string;
  Keywords: string;
  QuickReply: string;
};

type Cta = { label: string; href: string };
type Message = { role: "bot" | "user"; text: string; ctas?: Cta[] };

const WELCOME = "Hi! I'm Sutra Bot, SystemFriendly Labs' assistant. Ask me anything, or tap a question below.";
const FALLBACK =
  "I don't have a solid answer for that one — but I can put you in touch directly, no need to keep guessing.";
const TYPING_DELAY_MS = 750;
const SESSION_KEY = "sfl_chat_session_id";

function scoreMatch(query: string, row: Row): number {
  const rawQ = query.toLowerCase();
  // Normalize the query the same way we already normalize dataset questions below —
  // otherwise a stray character (e.g. "what can. you do") silently breaks substring matching.
  const q = (rawQ.match(/[a-z0-9']+/g) ?? []).join(" ");
  const keywords = row.Keywords.toLowerCase().split(",").map((k) => k.trim());
  let score = 0;
  keywords.forEach((k) => {
    if (k && q.includes(k)) score += 2;
  });
  const questionWords = row.Question.toLowerCase().match(/[a-z0-9']+/g) ?? [];
  questionWords.forEach((w) => {
    if (w.length > 3 && q.includes(w)) score += 1;
  });
  return score;
}

function getSessionId(): string {
  if (typeof window === "undefined") return "server";
  let id = window.sessionStorage.getItem(SESSION_KEY);
  if (!id) {
    id = crypto.randomUUID();
    window.sessionStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

function getContactCtas(): Cta[] {
  const ctas: Cta[] = [];
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  if (number) {
    const message = encodeURIComponent("Hi, I chatted with your website assistant and want to talk to someone directly.");
    ctas.push({ label: "Message us on WhatsApp", href: `https://wa.me/${number}?text=${message}` });
  }
  ctas.push({ label: "Email us", href: "mailto:info@systemfriendly.com" });
  return ctas;
}

const LINK_PATTERN = /\[([^\]]+)\]\((\/[^\)]+)\)/g;

function renderMessageText(text: string) {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  LINK_PATTERN.lastIndex = 0;
  while ((match = LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    parts.push(
      <Link
        key={key++}
        href={match[2]}
        className="underline underline-offset-2 font-medium"
        style={{ color: "var(--color-accent-cyan)" }}
      >
        {match[1]}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState<Row[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/NEXORA_Chatbot_Data.xlsx")
      .then((res) => res.arrayBuffer())
      .then(async (buf) => {
        const XLSX = await import("xlsx");
        const wb = XLSX.read(buf, { type: "array" });
        const sheet = wb.Sheets[wb.SheetNames[0]];
        const data = XLSX.utils.sheet_to_json<Row>(sheet);
        setRows(data);
      })
      .catch(() => setRows([]));
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  function logMessage(role: "bot" | "user", text: string) {
    fetch("/api/chat-log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId: getSessionId(), role, text }),
    }).catch(() => {});
  }

  function toggleOpen() {
    const willOpen = !open;
    setOpen(willOpen);
    if (willOpen && messages.length === 0) {
      setMessages([{ role: "bot", text: WELCOME }]);
      logMessage("bot", WELCOME);
      trackEvent({ action: "chatbot_opened", category: "lead_gen", label: "faq_chatbot" });
    }
  }

  const GREETINGS = ["hi", "hii", "hiii", "hello", "hey", "yo", "good morning", "good afternoon", "good evening", "namaste"];
  const GREETING_REPLY = "Hey there! What can I help you with — feel free to ask about our services, products, pricing, or tap a question below.";

  function respond(query: string) {
    setMessages((m) => [...m, { role: "user", text: query }]);
    logMessage("user", query);
    setTyping(true);
    trackEvent({ action: "chatbot_question", category: "lead_gen", label: query.slice(0, 60) });

    const normalizedQuery = query.trim().toLowerCase().replace(/[!.?]/g, "");
    if (GREETINGS.includes(normalizedQuery)) {
      setTimeout(() => {
        setMessages((m) => [...m, { role: "bot", text: GREETING_REPLY }]);
        logMessage("bot", GREETING_REPLY);
        setTyping(false);
      }, 500);
      return;
    }

    setTimeout(() => {
      const scored = rows.map((r) => ({ row: r, score: scoreMatch(query, r) })).sort((a, b) => b.score - a.score);
      const MIN_CONFIDENT_SCORE = 2;
      const best = scored[0];
      const matched = best && best.score >= MIN_CONFIDENT_SCORE ? best.row : null;
      const answer = matched ? matched.Answer : FALLBACK;

      let ctas: Cta[] | undefined;
      if (!matched) {
        trackEvent({ action: "chatbot_fallback", category: "lead_gen", label: query.slice(0, 60) });
        ctas = getContactCtas();
      } else if (matched.Category === "Contact" || matched.Category === "Pricing") {
        ctas = getContactCtas();
      }

      setMessages((m) => [...m, { role: "bot", text: answer, ctas }]);
      logMessage("bot", answer);
      setTyping(false);
    }, TYPING_DELAY_MS);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    respond(input.trim());
    setInput("");
  }

  const quickReplies = rows.filter((r) => r.QuickReply === "Yes").slice(0, 8);

  return (
    <>
      <button
        onClick={toggleOpen}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-[150] flex items-center justify-center w-[54px] h-[54px] rounded-full shadow-lg transition-transform hover:scale-105"
        style={{ background: "var(--color-text-white)", boxShadow: "0 8px 24px -6px rgba(0,212,255,0.35)" }}
      >
        {open ? <X size={22} color="var(--color-bg-primary)" /> : <Bot size={22} color="var(--color-bg-primary)" />}
      </button>

      {open && (
        <div
          className="fixed bottom-24 right-6 z-[150] w-[360px] max-w-[90vw] rounded-2xl border flex flex-col overflow-hidden"
          style={{ background: "var(--color-card)", borderColor: "var(--color-border-strong)", height: 480, maxHeight: "70vh" }}
        >
          <div className="px-5 py-4 border-b flex items-center gap-3" style={{ borderColor: "var(--color-border)" }}>
            <div
              className="w-[34px] h-[34px] rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(0,212,255,0.12)", border: "1px solid rgba(0,212,255,0.3)" }}
            >
              <Bot size={17} color="var(--color-accent-cyan)" />
            </div>
            <div>
              <div className="text-[14px] font-medium" style={{ color: "var(--color-text-white)" }}>Sutra Bot</div>
              <div className="mono text-[11px]" style={{ color: "var(--color-text-muted)" }}>
                <span className="status-dot" style={{ marginRight: 6 }} />Usually replies instantly
              </div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
            {messages.map((m, i) => (
              <div key={i} className="flex flex-col gap-2" style={{ alignSelf: m.role === "user" ? "flex-end" : "flex-start", maxWidth: "85%" }}>
                <div
                  className="text-[13.5px] leading-[1.5] px-3.5 py-2.5 rounded-xl"
                  style={{
                    background: m.role === "user" ? "var(--color-accent-blue)" : "var(--color-bg-secondary)",
                    color: m.role === "user" ? "white" : "var(--color-text-soft)",
                  }}
                >
                  {renderMessageText(m.text)}
                </div>
                {m.ctas && m.ctas.length > 0 && (
                  <div className="flex flex-col gap-1.5 w-full">
                    {m.ctas.map((cta) => (
                      <Link
                        key={cta.label}
                        href={cta.href}
                        target={cta.href.startsWith("http") ? "_blank" : undefined}
                        rel={cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        onClick={() => trackEvent({ action: "chatbot_cta_click", category: "lead_gen", label: cta.label })}
                        className="text-[12.5px] font-medium px-3.5 py-2 rounded-lg text-center"
                        style={{ background: "var(--color-accent-cyan)", color: "var(--color-bg-primary)" }}
                      >
                        {cta.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {typing && (
              <div className="text-[13px] px-3.5 py-2.5 rounded-xl self-start" style={{ background: "var(--color-bg-secondary)", color: "var(--color-text-muted)" }}>
                typing…
              </div>
            )}

            {messages.length <= 1 && quickReplies.length > 0 && (
              <div className="flex flex-col gap-2 mt-2">
                {quickReplies.map((q) => (
                  <button
                    key={q.Question}
                    onClick={() => respond(q.Question)}
                    className="text-left text-[12.5px] px-3.5 py-2.5 rounded-lg border transition-colors hover:border-cyan-400"
                    style={{ borderColor: "var(--color-border)", color: "var(--color-text-soft)" }}
                  >
                    {q.Question}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-3 border-t flex gap-2" style={{ borderColor: "var(--color-border)" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question…"
              className="flex-1 text-[13px] px-3 py-2.5 rounded-lg outline-none"
              style={{ background: "var(--color-bg-secondary)", border: "1px solid var(--color-border)", color: "var(--color-text-white)" }}
            />
            <button type="submit" aria-label="Send" className="w-[38px] h-[38px] rounded-lg flex items-center justify-center" style={{ background: "var(--color-accent-cyan)" }}>
              <Send size={16} color="var(--color-bg-primary)" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
