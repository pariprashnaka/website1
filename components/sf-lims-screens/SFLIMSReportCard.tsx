"use client";
import { useEffect, useRef, useState } from "react";

export default function SFLIMSReportCard() {
  const [active, setActive] = useState(false);
  const [sent, setSent] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setSent(true), 900);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div ref={ref} style={{ width: "100%", height: "100%", background: "var(--color-card)", borderRadius: 12, padding: 16, boxSizing: "border-box", fontFamily: "var(--font-mono, monospace)", display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 9, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Report Ready</div>
        <div style={{ fontSize: 8, background: "#22C55E20", color: "#22C55E", borderRadius: 4, padding: "2px 6px", fontWeight: 600 }}>Released</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--color-accent-purple)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: "#fff", fontWeight: 700, flexShrink: 0 }}>P</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-primary, inherit)" }}>Priya Sharma</div>
          <div style={{ fontSize: 9, color: "var(--color-text-muted)" }}>32 years · Female · LF-2024-0139</div>
        </div>
      </div>

      <div style={{ padding: "8px 10px", background: "var(--color-bg-secondary)", border: "1px solid var(--color-border)", borderRadius: 8 }}>
        <div style={{ fontSize: 8, color: "var(--color-text-muted)", marginBottom: 4 }}>Test Completed</div>
        <div style={{ fontSize: 10, fontWeight: 600, color: "var(--color-text-primary, inherit)" }}>Thyroid Profile (T3, T4, TSH)</div>
        <div style={{ fontSize: 8, color: "var(--color-text-muted)", marginTop: 2 }}>All values within reference range</div>
      </div>

      <div style={{ flex: 1, display: "flex", alignItems: "flex-end" }}>
        <div
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: 8,
            background: sent ? "#25D36620" : "var(--color-bg-secondary)",
            border: `1px solid ${sent ? "#25D36660" : "var(--color-border)"}`,
            display: "flex",
            alignItems: "center",
            gap: 8,
            transition: "all 0.5s ease",
          }}
        >
          <div style={{ fontSize: 16 }}>💬</div>
          <div>
            <div style={{ fontSize: 9, fontWeight: 700, color: sent ? "#25D366" : "var(--color-text-muted)" }}>
              {sent ? "Delivered via WhatsApp ✓" : "Sending via WhatsApp..."}
            </div>
            <div style={{ fontSize: 8, color: "var(--color-text-muted)", marginTop: 1 }}>+91 98765 43210</div>
          </div>
        </div>
      </div>
    </div>
  );
}
