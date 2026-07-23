"use client";
import { useState } from "react";
import { Calendar, Clock, Send } from "lucide-react";
import { trackEvent } from "@/lib/gtag";

const inputStyle = {
  width: "100%", padding: "10px 12px", background: "var(--color-card)",
  border: "1px solid var(--color-border)", borderRadius: 8,
  color: "var(--color-text-white)", fontSize: 13,
};

export default function ScheduleMeeting() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  async function handleSubmit() {
    if (!date || !time || !query || !email || !name) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, date, time, query }),
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

  return (
    <div className="panel p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-[46px] h-[46px] rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: "rgba(99,102,241,0.12)" }}>
          <Calendar size={20} color="var(--color-accent-blue)" />
        </div>
        <div>
          <div className="mono text-[11px] uppercase tracking-[.06em] mb-0.5" style={{ color: "var(--color-text-muted)" }}>Schedule a Meeting</div>
          <p className="text-[12.5px]" style={{ color: "var(--color-text-soft)" }}>Pick a slot, we&apos;ll confirm it</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
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
          className="btn btn-primary w-full justify-center flex items-center gap-2"
          style={{ opacity: (!date || !time || !query || !email || !name) ? 0.5 : 1 }}
        >
          <Send size={14} />
          {status === "loading" ? "Sending…" : "Request Meeting"}
        </button>
      </div>
    </div>
  );
}
