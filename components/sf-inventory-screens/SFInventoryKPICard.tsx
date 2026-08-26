"use client";
import { useEffect, useRef, useState, useCallback } from "react";

const LOOP_MS = 15000;
function easeOut(t: number) { return 1 - Math.pow(1 - t, 3); }
function clamp(v: number, min = 0, max = 1) { return Math.min(Math.max(v, min), max); }
function seg(phase: number, s: number, e: number) { return easeOut(clamp((phase - s) / (e - s))); }

export default function SFInventoryKPICard() {
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

  // 0.00-0.53: count up
  // 0.53-0.80: hold + subtle pulse on cards
  // 0.80-0.93: glow
  // 0.93-1.00: fade out
  const fadeOut = phase > 0.93 ? seg(phase, 0.93, 1.0) : 0;
  const growP = phase < 0.53 ? seg(phase, 0, 0.53) : phase < 0.93 ? 1 : 1 - fadeOut;
  const glow = phase > 0.80 && phase < 0.93 ? Math.sin(seg(phase, 0.80, 0.93) * Math.PI) : 0;

  const revenue = Math.floor(growP * 124500);
  const invoices = Math.floor(growP * 34);
  const profit = Math.floor(growP * 38);

  return (
    <div ref={ref} style={{
      width: "100%", height: "100%",
      background: "var(--color-card)",
      borderRadius: 12, padding: 16,
      boxSizing: "border-box",
      fontFamily: "var(--font-mono, monospace)",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      opacity: 1 - fadeOut * 0.8,
    }}>
      <div style={{ fontSize: 9, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Today&apos;s Performance</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 10 }}>
        <div>
          <div style={{ fontSize: 9, color: "var(--color-text-muted)", marginBottom: 2 }}>Revenue</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: "var(--color-accent-blue)", letterSpacing: "-0.03em" }}>
            ₹{revenue.toLocaleString("en-IN")}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          <div style={{
            background: "var(--color-bg-secondary)", border: "1px solid var(--color-border)",
            borderRadius: 8, padding: "8px 10px",
            boxShadow: glow > 0.05 ? `0 0 ${10 * glow}px var(--color-accent-blue)` : "none",
          }}>
            <div style={{ fontSize: 8, color: "var(--color-text-muted)", marginBottom: 2 }}>Invoices</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "var(--color-accent-blue)" }}>{invoices}</div>
          </div>
          <div style={{
            background: "var(--color-bg-secondary)", border: "1px solid var(--color-border)",
            borderRadius: 8, padding: "8px 10px",
            boxShadow: glow > 0.05 ? `0 0 ${10 * glow}px var(--color-accent-purple)` : "none",
          }}>
            <div style={{ fontSize: 8, color: "var(--color-text-muted)", marginBottom: 2 }}>Gross Profit</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "var(--color-accent-purple)" }}>{profit}%</div>
          </div>
        </div>
      </div>
      <div style={{ fontSize: 8, color: "var(--color-text-muted)", marginTop: 10, borderTop: "1px solid var(--color-border)", paddingTop: 8 }}>Live · Updated just now</div>
    </div>
  );
}
