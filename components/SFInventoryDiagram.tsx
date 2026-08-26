"use client";
import { useEffect, useRef, useState, useCallback } from "react";

const BARS = [42000, 67000, 53000, 81000, 74000, 95000, 112000];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MAX = 120000;
const LOOP_MS = 15000;

function fmt(n: number) {
  if (n >= 100000) return "₹" + (n / 100000).toFixed(1) + "L";
  if (n >= 1000) return "₹" + (n / 1000).toFixed(0) + "K";
  return "₹" + n;
}
function easeOut(t: number) { return 1 - Math.pow(1 - t, 3); }
function clamp(v: number, min = 0, max = 1) { return Math.min(Math.max(v, min), max); }
function seg(phase: number, s: number, e: number) { return easeOut(clamp((phase - s) / (e - s))); }

export default function SFInventoryDiagram() {
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

  // Timeline (15s loop):
  // 0.00–0.53 (0–8s):  KPIs + all bars grow simultaneously
  // 0.53–0.67 (8–10s): alerts fade in + pulse
  // 0.67–0.80 (10–12s): KPI glow
  // 0.80–0.93 (12–14s): hold
  // 0.93–1.00 (14–15s): fade out, reset

  const fadeOut = phase > 0.93 ? seg(phase, 0.93, 1.0) : 0;
  const globalOpacity = 1 - fadeOut * 0.8;

  // KPIs and bars all use the same progress curve 0→0.53
  const growP = phase < 0.53 ? seg(phase, 0, 0.53) : phase < 0.93 ? 1 : 1 - fadeOut;

  const revenue = Math.floor(growP * 124500);
  const profit = Math.floor(growP * 38);
  const stock = Math.floor(growP * 320000);

  // bars stagger slightly within the same grow window so they feel alive
  const barP = (i: number) => {
    const staggerStart = i * (0.06 / 7); // tiny stagger: first bar slightly ahead
    const localP = clamp((phase - staggerStart) / (0.53 - staggerStart));
    if (phase > 0.93) return 1 - fadeOut;
    return easeOut(localP);
  };

  const kpiGlow = phase > 0.67 && phase < 0.80
    ? Math.sin(seg(phase, 0.67, 0.80) * Math.PI)
    : 0;

  const alertP = phase > 0.53 && phase < 0.93
    ? seg(phase, 0.53, 0.63)
    : phase >= 0.93 ? 1 - fadeOut : 0;

  const pulse = alertP > 0 && phase < 0.93
    ? Math.sin(((phase - 0.53) / 0.40) * Math.PI * 6) * 0.5 + 0.5
    : 0;

  return (
    <div ref={ref} style={{
      width: "100%", height: "100%", minHeight: 300,
      background: "var(--color-card)",
      borderRadius: 16, padding: "20px 20px 16px",
      display: "flex", flexDirection: "column", gap: 14,
      boxSizing: "border-box",
      fontFamily: "var(--font-mono, monospace)",
      opacity: globalOpacity,
    }}>

      {/* KPI row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
        {[
          { label: "Revenue", value: fmt(revenue), accent: "var(--color-accent-blue)" },
          { label: "Gross Profit", value: profit + "%", accent: "var(--color-accent-purple)" },
          { label: "Stock Value", value: fmt(stock), accent: "var(--color-warning, #F59E0B)" },
        ].map(k => (
          <div key={k.label} style={{
            background: "var(--color-bg-secondary)",
            border: "1px solid var(--color-border)",
            borderRadius: 10, padding: "10px 10px 8px",
            boxShadow: kpiGlow > 0.05 ? `0 0 ${14 * kpiGlow}px ${k.accent}` : "none",
          }}>
            <div style={{ fontSize: 9, color: "var(--color-text-muted)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>{k.label}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: k.accent, letterSpacing: "-0.02em" }}>{k.value}</div>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ fontSize: 9, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>7-Day Sales (₹)</div>
        <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: 5, minHeight: 90 }}>
          {BARS.map((v, i) => {
            const p = barP(i);
            const isToday = i === 6;
            return (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, height: "100%" }}>
                <div style={{ fontSize: 7, color: "var(--color-text-muted)", opacity: p }}>{fmt(v)}</div>
                <div style={{ flex: 1, width: "100%", display: "flex", alignItems: "flex-end" }}>
                  <div style={{
                    width: "100%",
                    height: p * (v / MAX) * 100 + "%",
                    minHeight: p > 0.01 ? 2 : 0,
                    background: isToday ? "var(--color-accent-blue)" : "rgba(59,130,246,0.25)",
                    border: isToday ? "none" : "1px solid rgba(59,130,246,0.35)",
                    borderRadius: "4px 4px 0 0",
                  }} />
                </div>
                <div style={{ fontSize: 7, color: "var(--color-text-muted)" }}>{DAYS[i]}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Low stock alerts */}
      <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: 10, opacity: alertP }}>
        <div style={{ fontSize: 9, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>⚠ Low Stock Alerts</div>
        {[
          { name: "Item A — Unit Pack", qty: "3 units left" },
          { name: "Item B — Bulk Box", qty: "1 unit left" },
        ].map(item => (
          <div key={item.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{
                width: 7, height: 7, borderRadius: "50%",
                background: "#EF4444",
                boxShadow: `0 0 0 ${4 * pulse}px rgba(239,68,68,${0.3 * pulse})`,
              }} />
              <span style={{ fontSize: 10, color: "var(--color-text-muted)" }}>{item.name}</span>
            </div>
            <span style={{ fontSize: 10, color: "#EF4444", fontWeight: 600 }}>{item.qty}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
