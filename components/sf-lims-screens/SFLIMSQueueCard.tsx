"use client";
import { useEffect, useRef, useState } from "react";

const TESTS = [
  { patient: "Arjun Singh", test: "Complete Blood Count", status: "In Progress", color: "var(--color-accent-blue)", bg: "#3B82F620" },
  { patient: "Priya Sharma", test: "Lipid Profile", status: "Pending", color: "#F59E0B", bg: "#F59E0B20" },
  { patient: "Ramesh Kumar", test: "Liver Function Test", status: "Done", color: "#22C55E", bg: "#22C55E20" },
];

export default function SFLIMSQueueCard() {
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
        <div style={{ fontSize: 9, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Lab Queue</div>
        <div style={{ fontSize: 8, background: "#3B82F620", color: "var(--color-accent-blue)", borderRadius: 4, padding: "2px 6px", fontWeight: 600 }}>6 Active</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
        {TESTS.map((t, i) => (
          <div
            key={t.patient}
            style={{
              padding: "8px 10px",
              background: "var(--color-bg-secondary)",
              border: "1px solid var(--color-border)",
              borderRadius: 8,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              opacity: active ? 1 : 0,
              transform: active ? "translateY(0)" : "translateY(6px)",
              transition: `opacity 0.4s ease ${i * 120}ms, transform 0.4s ease ${i * 120}ms`,
            }}
          >
            <div>
              <div style={{ fontSize: 10, fontWeight: 600, color: "var(--color-text-primary, inherit)", marginBottom: 2 }}>{t.patient}</div>
              <div style={{ fontSize: 8, color: "var(--color-text-muted)" }}>{t.test}</div>
            </div>
            <div style={{ fontSize: 8, fontWeight: 600, padding: "3px 7px", borderRadius: 4, background: t.bg, color: t.color, whiteSpace: "nowrap" }}>
              {t.status}
            </div>
          </div>
        ))}
      </div>

      <div style={{ fontSize: 8, color: "var(--color-text-muted)", borderTop: "1px solid var(--color-border)", paddingTop: 8 }}>
        Avg. turnaround · 2.4 hrs today
      </div>
    </div>
  );
}
