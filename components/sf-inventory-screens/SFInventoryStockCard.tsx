"use client";
import { useEffect, useRef, useState, useCallback } from "react";

const LOOP_MS = 15000;
function easeOut(t: number) { return 1 - Math.pow(1 - t, 3); }
function clamp(v: number, min = 0, max = 1) { return Math.min(Math.max(v, min), max); }
function seg(phase: number, s: number, e: number) { return easeOut(clamp((phase - s) / (e - s))); }

const ITEMS = [
  { name: "Item A — Unit Pack", status: "low", qty: "3 left", color: "#EF4444" },
  { name: "Item B — Bulk Box", status: "low", qty: "1 left", color: "#EF4444" },
  { name: "Item C — Standard", status: "ok", qty: "142 left", color: "#22C55E" },
  { name: "Item D — Premium", status: "ok", qty: "87 left", color: "#22C55E" },
];

export default function SFInventoryStockCard() {
  const [phase, setPhase] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);
  const visibleRef = useRef(false);

  const tick = useCallback(() => {
    if (!visibleRef.current) return;
    const p = ((Date.now() - startRef.current) % LOOP_MS) / LOOP_MS;
    setPhase(p);
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      visibleRef.current = e.isIntersecting;
      if (e.isIntersecting) {
        startRef.current = Date.now();
        rafRef.current = requestAnimationFrame(tick);
      } else {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => { obs.disconnect(); if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [tick]);

  const fadeOut = phase > 0.93 ? seg(phase, 0.93, 1.0) : 0;
  // items slide in staggered 0-0.53
  const itemP = (i: number) => {
    const s = i * 0.10;
    if (phase > 0.93) return 1 - fadeOut;
    return seg(phase, s, s + 0.15);
  };
  // pulse on low stock items 0.53-0.93
  const pulse = phase > 0.53 && phase < 0.93
    ? Math.sin(((phase - 0.53) / 0.40) * Math.PI * 6) * 0.5 + 0.5
    : 0;

  return (
    <div ref={ref} style={{
      width: "100%", height: "100%",
      background: "var(--color-card)",
      borderRadius: 12, padding: 16,
      boxSizing: "border-box",
      fontFamily: "var(--font-mono, monospace)",
      display: "flex", flexDirection: "column", gap: 10,
      opacity: 1 - fadeOut * 0.8,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 9, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Inventory Health</div>
        <div style={{ fontSize: 8, background: "rgba(239,68,68,0.12)", color: "#EF4444", borderRadius: 4, padding: "2px 6px", fontWeight: 600 }}>2 Low Stock</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
        {ITEMS.map((item, i) => {
          const p = itemP(i);
          return (
            <div key={item.name} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "6px 8px",
              background: "var(--color-bg-secondary)",
              border: "1px solid var(--color-border)",
              borderRadius: 7,
              opacity: p,
              transform: `translateX(${(1 - p) * -10}px)`,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <div style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: item.color, flexShrink: 0,
                  boxShadow: item.status === "low" ? `0 0 0 ${3 * pulse}px rgba(239,68,68,${0.25 * pulse})` : "none",
                }} />
                <span style={{ fontSize: 9, color: "var(--color-text-muted)" }}>{item.name}</span>
              </div>
              <span style={{ fontSize: 9, fontWeight: 600, color: item.color }}>{item.qty}</span>
            </div>
          );
        })}
      </div>
      <div style={{ fontSize: 8, color: "var(--color-text-muted)", borderTop: "1px solid var(--color-border)", paddingTop: 8 }}>247 total SKUs · 2 warehouses</div>
    </div>
  );
}
