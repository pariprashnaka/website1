"use client";

import { useRef, useState } from "react";

const SERVICES = [
  "SaaS Development", "ERP Solutions", "AI Solutions", "Mobile App", "Web App",
  "CRM", "Automation", "Cloud", "Data", "Not sure yet",
];
const CODES = ["+91", "+1", "+44", "+61", "+971", "+65", "+49", "+81", "+966", "+880"];

export default function V2ContactForm() {
  const card = useRef<HTMLDivElement>(null);
  const [picked, setPicked] = useState<string[]>([]);
  const [f, setF] = useState({ name: "", email: "", company: "", phone: "", message: "", website: "" });
  const [code, setCode] = useState("+91");
  const [err, setErr] = useState<Record<string, string>>({});
  const [state, setState] = useState<"idle" | "sending" | "done" | "fail">("idle");

  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }));

  function glow(e: React.PointerEvent) {
    const el = card.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const er: Record<string, string> = {};
    if (!f.name.trim()) er.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(f.email)) er.email = "Please enter a valid email.";
    if (!f.message.trim()) er.message = "Tell us a little about the project.";
    setErr(er);
    if (Object.keys(er).length) return;
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...f, countryCode: code, service: picked.join(", ") || "Not specified", source: "v2-contact" }),
      });
      if (!res.ok) throw new Error();
      setState("done");
    } catch {
      setState("fail");
    }
  }

  return (
    <div className="v2-cf-card" ref={card} onPointerMove={glow}>
      <div className="v2-cf-glow" aria-hidden="true" />
      {state === "done" ? (
        <div className="v2-cf-done">
          <svg viewBox="0 0 52 52" aria-hidden="true"><circle cx="26" cy="26" r="24" /><path d="M15 27l8 8 14-16" /></svg>
          <h3>Message received.</h3>
          <p>We&rsquo;ll reply within two business days with real next steps.</p>
        </div>
      ) : (
        <form onSubmit={submit} noValidate>
          <input className="v2-cf-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={f.website} onChange={set("website")} />
          <p className="v2-cf-label">What do you need?</p>
          <div className="v2-cf-chips">
            {SERVICES.map((s) => (
              <button
                type="button" key={s}
                className={picked.includes(s) ? "on" : ""}
                aria-pressed={picked.includes(s)}
                onClick={() => setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]))}
              >{s}</button>
            ))}
          </div>

          <div className="v2-cf-row">
            <label className="v2-cf-field">
              <input value={f.name} onChange={set("name")} placeholder=" " autoComplete="name" />
              <span>Full name</span>
              {err.name && <em>{err.name}</em>}
            </label>
            <label className="v2-cf-field">
              <input value={f.email} onChange={set("email")} placeholder=" " type="email" autoComplete="email" />
              <span>Work email</span>
              {err.email && <em>{err.email}</em>}
            </label>
          </div>
          <div className="v2-cf-row">
            <label className="v2-cf-field">
              <input value={f.company} onChange={set("company")} placeholder=" " autoComplete="organization" />
              <span>Company</span>
            </label>
            <div className="v2-cf-phone">
              <select value={code} onChange={(e) => setCode(e.target.value)} aria-label="Country code">
                {CODES.map((c) => <option key={c}>{c}</option>)}
              </select>
              <label className="v2-cf-field">
                <input value={f.phone} onChange={set("phone")} placeholder=" " type="tel" autoComplete="tel-national" />
                <span>Phone (optional)</span>
              </label>
            </div>
          </div>
          <label className="v2-cf-field">
            <textarea value={f.message} onChange={set("message")} placeholder=" " rows={5} />
            <span>Tell us about the problem</span>
            {err.message && <em>{err.message}</em>}
          </label>

          <button className="v2-cf-submit" disabled={state === "sending"}>
            {state === "sending" ? "Sending…" : "Send message"}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </button>
          {state === "fail" && (
            <p className="v2-cf-fail">Something went wrong. Please try again, or email info@systemfriendly.com.</p>
          )}
        </form>
      )}
    </div>
  );
}
