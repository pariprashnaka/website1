"use client";

import { useEffect, useRef, useState } from "react";

const SERVICES = [
  "SaaS Development", "ERP Solutions", "AI Solutions", "Mobile App", "Web App",
  "CRM", "Automation", "Cloud", "Data", "Not sure yet",
];
const CODES = ["+91", "+1", "+44", "+61", "+971", "+65", "+49", "+81", "+966", "+880"];

type Step = "need" | "problem" | "name" | "email" | "phone" | "review";
const ORDER: Step[] = ["need", "problem", "name", "email", "phone", "review"];

export default function V2ContactForm() {
  const card = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [picked, setPicked] = useState<string[]>([]);
  const [f, setF] = useState({ name: "", email: "", company: "", phone: "", message: "", website: "" });
  const [code, setCode] = useState("+91");
  const [err, setErr] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "fail">("idle");
  const step = ORDER[i];

  useEffect(() => {
    const L = new URLSearchParams(window.location.search).get("layers");
    if (!L) return;
    const map: Record<string, string> = { saas: "SaaS Development", erp: "ERP Solutions", ai: "AI Solutions", mobile: "Mobile App", web: "Web App", crm: "CRM", automation: "Automation", cloud: "Cloud", data: "Data" };
    const p = L.split(",").map((x) => map[x]).filter(Boolean);
    if (p.length) { setPicked(p); setI(1); }
  }, []);

  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setErr("");
    setF((p) => ({ ...p, [k]: e.target.value }));
  };

  function glow(e: React.PointerEvent) {
    const el = card.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  function validate(): string {
    if (step === "problem" && !f.message.trim()) return "Tell us a little about it first.";
    if (step === "name" && !f.name.trim()) return "We'd like to know who we're talking to.";
    if (step === "email" && !/^\S+@\S+\.\S+$/.test(f.email)) return "That email doesn't look right.";
    return "";
  }
  function next() {
    const e = validate();
    if (e) return setErr(e);
    setErr(""); setDir(1); setI((n) => Math.min(n + 1, ORDER.length - 1));
  }
  function back() { setErr(""); setDir(-1); setI((n) => Math.max(n - 1, 0)); }
  function onKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !(e.target instanceof HTMLTextAreaElement && !e.metaKey && !e.ctrlKey)) {
      e.preventDefault();
      if (step === "review") send(); else next();
    }
  }

  async function send() {
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

  if (state === "done") {
    return (
      <div className="v2-cf-card" ref={card}>
        <div className="v2-cf-done">
          <svg viewBox="0 0 52 52" aria-hidden="true"><circle cx="26" cy="26" r="24" /><path d="M15 27l8 8 14-16" /></svg>
          <h3>Thank you{f.name ? `, ${f.name.split(" ")[0]}` : ""}.</h3>
          <p>We&rsquo;ll reply within two business days with real next steps.</p>
        </div>
      </div>
    );
  }

  const Q: Record<Step, string> = {
    need: "What are you looking to build?",
    problem: "What problem should it solve?",
    name: "Who are we speaking with?",
    email: "Where should we reply?",
    phone: "Prefer a call? Leave a number.",
    review: "Here's what we have.",
  };

  return (
    <div className="v2-cf-card" ref={card} onPointerMove={glow} onKeyDown={onKey}>
      <div className="v2-cf-glow" aria-hidden="true" />
      <div className="v2-cf-stage">
        <div className="v2-cf-progress" aria-hidden="true">
          {ORDER.map((_, n) => <span key={n} className={n <= i ? "on" : ""} />)}
        </div>
        <p className="v2-cf-count">{String(i + 1).padStart(2, "0")} / {String(ORDER.length).padStart(2, "0")}</p>

        <div key={step} className={`v2-cf-step ${dir > 0 ? "fwd" : "bwd"}`}>
          <h2 className="v2-cf-q">{Q[step]}</h2>
          <input className="v2-cf-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={f.website} onChange={set("website")} />

          {step === "need" && (
            <div className="v2-cf-chips">
              {SERVICES.map((s) => (
                <button type="button" key={s} className={picked.includes(s) ? "on" : ""} aria-pressed={picked.includes(s)}
                  onClick={() => setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]))}>{s}</button>
              ))}
            </div>
          )}
          {step === "problem" && (
            <textarea className="v2-cf-big" autoFocus rows={4} value={f.message} onChange={set("message")}
              placeholder="e.g. We track stock in registers and never know what's expiring." />
          )}
          {step === "name" && (
            <>
              <input className="v2-cf-big" autoFocus value={f.name} onChange={set("name")} placeholder="Your name" autoComplete="name" />
              <input className="v2-cf-big sm" value={f.company} onChange={set("company")} placeholder="Company (optional)" autoComplete="organization" />
            </>
          )}
          {step === "email" && (
            <input className="v2-cf-big" autoFocus type="email" value={f.email} onChange={set("email")} placeholder="you@company.com" autoComplete="email" />
          )}
          {step === "phone" && (
            <div className="v2-cf-phone2">
              <select value={code} onChange={(e) => setCode(e.target.value)} aria-label="Country code">
                {CODES.map((c) => <option key={c}>{c}</option>)}
              </select>
              <input className="v2-cf-big" autoFocus type="tel" value={f.phone} onChange={set("phone")} placeholder="Optional" autoComplete="tel-national" />
            </div>
          )}
          {step === "review" && (
            <dl className="v2-cf-review">
              <div><dt>Need</dt><dd>{picked.join(", ") || "Not sure yet"}</dd></div>
              <div><dt>Problem</dt><dd>{f.message}</dd></div>
              <div><dt>From</dt><dd>{f.name}{f.company ? `, ${f.company}` : ""}</dd></div>
              <div><dt>Reply to</dt><dd>{f.email}{f.phone ? ` · ${code} ${f.phone}` : ""}</dd></div>
            </dl>
          )}
          {err && <p className="v2-cf-err" role="alert">{err}</p>}
        </div>

        <div className="v2-cf-nav">
          <button type="button" className="v2-cf-back" onClick={back} disabled={i === 0}>← Back</button>
          {step === "review" ? (
            <button type="button" className="v2-cf-submit" onClick={send} disabled={state === "sending"}>
              {state === "sending" ? "Sending…" : "Send it"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </button>
          ) : (
            <button type="button" className="v2-cf-submit" onClick={next}>
              {step === "phone" && !f.phone ? "Skip" : "Continue"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </button>
          )}
        </div>
        {step !== "review" && <p className="v2-cf-hint">Press <kbd>Enter</kbd> to continue</p>}
        {state === "fail" && <p className="v2-cf-err">Something went wrong. Please try again, or email info@systemfriendly.com.</p>}
      </div>
    </div>
  );
}
