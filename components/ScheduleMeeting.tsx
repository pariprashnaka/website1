"use client";
import { useState, useEffect } from "react";
import { Calendar, Clock, Send, ChevronDown } from "lucide-react";
import { trackEvent } from "@/lib/gtag";

const inputStyle = {
  width: "100%", padding: "10px 12px", background: "var(--color-card)",
  border: "1px solid var(--color-border)", borderRadius: 8,
  color: "var(--color-text-white)", fontSize: 13,
};

const COMMON_TIMEZONES = [
  "Asia/Kolkata",
  "America/Los_Angeles",
  "America/New_York",
  "America/Chicago",
  "Europe/London",
  "Europe/Paris",
  "Asia/Dubai",
  "Asia/Singapore",
  "Asia/Tokyo",
  "Australia/Sydney",
];

export default function ScheduleMeeting() {
  const [expanded, setExpanded] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [timezone, setTimezone] = useState("");
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  useEffect(() => {
    const detected = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(detected || "Asia/Kolkata");
  }, []);

  async function handleSubmit() {
    if (!date || !time || !query || !email || !name) return;
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

  const today = new Date().toISOString().split("T")[0];

  // Build timezone options: detected first if not in list, then common ones
  const tzOptions = COMMON_TIMEZONES.includes(timezone)
    ? COMMON_TIMEZONES
    : [timezone, ...COMMON_TIMEZONES];

  return (
    <div className="panel overflow-hidden" style={{ transition: "all 0.3s ease" }}>
      {/* Header — always visible, clickable */}
      <button
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
        <ChevronDown
          size={16}
          color="var(--color-text-muted)"
          style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease", flexShrink: 0 }}
        />
      </button>

      {/* Expandable form */}
      {expanded && (
        <div className="flex flex-col gap-3 px-6 pb-6">
          <input style={inputStyle} placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
          <input style={inputStyle} placeholder="Your email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Calendar size={14} style={{ position:"absolute", left:10, top:"50%", transform:"translateY(-50%)", color:"var(--color-text-muted)", pointerEvents:"none" }} />
              <input type="date" min={today} style={{ ...inputStyle, paddingLeft: 30 }} value={date} onChange={e => setDate(e.target.value)} />
            </div>
            <div className="relative flex-1">
              <Clock size={14} style={{ position:"absolute", left:10, top:"50%", transform:"translateY(-50%)", color:"var(--color-text-muted)", pointerEvents:"none" }} />
              <input type="time" style={{ ...inputStyle, paddingLeft: 30 }} value={time} onChange={e => setTime(e.target.value)} />
            </div>
          </div>
          <select
            style={{ ...inputStyle, appearance: "none" }}
            value={timezone}
            onChange={e => setTimezone(e.target.value)}
          >
            {tzOptions.map(tz => (
              <option key={tz} value={tz}>{tz.replace(/_/g, " ")}</option>
            ))}
          </select>
          <textarea
            style={{ ...inputStyle, minHeight: 72, resize: "vertical" }}
            placeholder="What do you want to discuss?"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {status === "error" && <p className="text-[12px]" style={{ color: "var(--color-danger)" }}>Something went wrong. Please try again.</p>}
          <button
            onClick={handleSubmit}
            disabled={status === "loading" || !date || !time || !query || !email || !name}
            type="button"
            className="btn btn-primary w-full justify-center flex items-center gap-2"
            style={{ opacity: (!date || !time || !query || !email || !name) ? 0.5 : 1 }}
          >
            <Send size={14} />
            {status === "loading" ? "Sending…" : "Request Meeting"}
          </button>
        </div>
      )}
    </div>
  );
}
