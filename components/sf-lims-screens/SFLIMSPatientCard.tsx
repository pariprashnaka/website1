"use client";
import { useEffect, useRef, useState } from "react";

export default function SFLIMSPatientCard() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ width: "100%", height: "100%", background: "var(--color-card)", borderRadius: 12, padding: 16, boxSizing: "border-box", fontFamily: "var(--font-mono, monospace)", display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 9, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>New Registration</div>
        <div style={{ fontSize: 8, background: "#3B82F620", color: "var(--color-accent-blue)", borderRadius: 4, padding: "2px 6px", fontWeight: 600 }}>LF-2024-0142</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--color-accent-blue)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: "#fff", fontWeight: 700, flexShrink: 0 }}>R</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-primary, inherit)" }}>Ramesh Kumar</div>
          <div style={{ fontSize: 9, color: "var(--color-text-muted)" }}>45 years · Male · Ref: Dr. Sharma</div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 5, flex: 1 }}>
        <div style={{ fontSize: 9, color: "var(--color-text-muted)", marginBottom: 2 }}>Tests Ordered</div>
        {["Complete Blood Count (CBC)", "Liver Function Test (LFT)"].map(t => (
          <div key={t} style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 8px", background: "var(--color-bg-secondary)", border: "1px solid var(--color-border)", borderRadius: 6 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--color-accent-blue)", flexShrink: 0 }} />
            <span style={{ fontSize: 9, color: "var(--color-text-soft, var(--color-text-muted))" }}>{t}</span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--color-border)", paddingTop: 8 }}>
        <div style={{ fontSize: 8, color: "var(--color-text-muted)" }}>Sample pending collection</div>
        <div style={{
          fontSize: 8, fontWeight: 600, padding: "3px 8px", borderRadius: 4,
          background: active ? "#F59E0B20" : "transparent",
          color: "#F59E0B",
          border: "1px solid #F59E0B40",
          transition: "background 0.4s ease",
        }}>Awaiting Sample</div>
      </div>
    </div>
  );
}
