"use client";
import { useState, useEffect } from "react";
import { Calendar, Send, ChevronDown } from "lucide-react";
import { trackEvent } from "@/lib/gtag";

const TIMEZONES = [
  "Asia/Kolkata", "America/Los_Angeles", "America/New_York",
  "America/Chicago", "Europe/London", "Europe/Paris",
  "Asia/Dubai", "Asia/Singapore", "Asia/Tokyo", "Australia/Sydney",
];

const base: React.CSSProperties = {
  width: "100%", padding: "10px 12px",
  background: "var(--color-card)",
  border: "1px solid var(--color-border)",
  borderRadius: 8, color: "var(--color-text-white)",
  fontSize: 13, outline: "none",
  colorScheme: "dark",
};

export default function ScheduleMeeting() {
  const [expanded, setExpanded] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [timezone, setTimezone] = useState("Asia/Kolkata");
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz) setTimezone(TIMEZONES.includes(tz) ? tz : "Asia/Kolkata");
    } catch {}
  }, []);

  useEffect(() => {
    if (window.location.hash === "#schedule") setExpanded(true);
  }, []);

  const today = new Date().toISOString().split("T")[0];
  const canSubmit = !!(name.trim() && email.trim() && date && time && query.trim());

  async function handleRequest() {
    if (!canSubmit || status === "loading") return;
    setStatus("loading");
    try {
      const res = await fetch("/api/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, date, time, timezone, query }),
      });
      if (!res.ok) throw new Error();
      trackEvent({ action: "meeting_scheduled", category: "lead_gen", label: "schedule_panel" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="panel p-6 text-center">
        <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center mx-auto mb-3 border"
          style={{ background: "rgba(34,197,94,0.12)", borderColor: "var(--color-success)" }}>✓</div>
        <p className="text-[13.5px]" style={{ color: "var(--color-text-soft)" }}>
          Meeting request sent. We&apos;ll confirm your slot within one business day.
        </p>
      </div>
    );
  }

  return (
    <>
      <style>{`
        input[type="date"]::-webkit-calendar-picker-indicator,
        input[type="time"]::-webkit-calendar-picker-indicator {
          filter: invert(0.7);
          cursor: pointer;
        }
        input[type="date"], input[type="time"] {
          color-scheme: dark;
        }
      `}</style>

      <div className="panel overflow-hidden">
        <button
          type="button"
          onClick={() => setExpanded(e => !e)}
          className="w-full flex items-center gap-3 p-6"
          style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
        >
          <div className="w-[46px] h-[46px] rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(99,102,241,0.12)" }}>
            <Calendar size={20} color="var(--color-accent-blue)" />
          </div>
          <div className="flex-1">
            <div className="mono text-[11px] uppercase tracking-[.06em] mb-0.5" style={{ color: "var(--color-text-muted)" }}>Schedule a Meeting</div>
            <p className="text-[12.5px]" style={{ color: "var(--color-text-soft)" }}>Pick a slot, we&apos;ll confirm it</p>
          </div>
          <ChevronDown size={16} color="var(--color-text-muted)"
            style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease", flexShrink: 0 }} />
        </button>

        {expanded && (
          <div className="flex flex-col gap-3 px-6 pb-6">
            <input type="text" style={base} placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
            <input type="email" style={base} placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} />

            <div className="flex gap-2">
              <input
                type="date"
                min={today}
                style={{ ...base, flex: 1 }}
                value={date}
                onChange={e => setDate(e.target.value)}
              />
              <input
                type="time"
                style={{ ...base, flex: 1 }}
                value={time}
                onChange={e => setTime(e.target.value)}
              />
            </div>

            <select style={base} value={timezone} onChange={e => setTimezone(e.target.value)}>
              {TIMEZONES.map(tz => (
                <option key={tz} value={tz}>{tz.replace(/_/g, " ")}</option>
              ))}
            </select>

            <textarea
              style={{ ...base, minHeight: 72, resize: "vertical" }}
              placeholder="What do you want to discuss?"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />

            {status === "error" && (
              <p className="text-[12px]" style={{ color: "var(--color-danger)" }}>Something went wrong. Please try again.</p>
            )}

            <button
              type="button"
              onClick={handleRequest}
              disabled={!canSubmit || status === "loading"}
              className="btn btn-primary w-full justify-center flex items-center gap-2"
              style={{ opacity: canSubmit ? 1 : 0.5, cursor: canSubmit ? "pointer" : "not-allowed" }}
            >
              <Send size={14} />
              {status === "loading" ? "Sending…" : "Request Meeting"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
