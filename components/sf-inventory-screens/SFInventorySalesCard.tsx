"use client";
import { useEffect, useRef, useState, useCallback } from "react";

const SPARK = [42, 67, 53, 81, 74, 95, 100];
const LOOP_MS = 15000;
function easeOut(t: number) { return 1 - Math.pow(1 - t, 3); }
function clamp(v: number, min = 0, max = 1) { return Math.min(Math.max(v, min), max); }
function seg(phase: number, s: number, e: number) { return easeOut(clamp((phase - s) / (e - s))); }

export default function SFInventorySalesCard() {
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
  // sparkline draws 0-0.53
  const drawn = phase < 0.53 ? seg(phase, 0, 0.53) : phase < 0.93 ? 1 : 1 - fadeOut;
  // stats count up same window
  const statsP = phase < 0.53 ? seg(phase, 0, 0.53) : phase < 0.93 ? 1 : 1 - fadeOut;
  const revenue = Math.floor(statsP * 42000);
  const trend = Math.floor(statsP * 18);

  const W = 180, H = 44;
  const pts = SPARK.map((v, i) => ({
    x: (i / (SPARK.length - 1)) * W,
    y: H - (v / 100) * H,
  }));
  const count = Math.max(2, Math.ceil(drawn * pts.length));
  const visiblePts = pts.slice(0, count);
  const path = visiblePts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");

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
      <div style={{ fontSize: 9, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Top Seller · Today</div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-accent-blue)" }}>Premium Unit Pack</div>
        <div style={{ fontSize: 9, color: "var(--color-text-muted)", marginTop: 2 }}>SKU-00142 · 28 units sold</div>
      </div>
      <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ overflow: "visible", flex: 1 }}>
        <defs>
          <linearGradient id="sparkgrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-accent-blue)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--color-accent-blue)" stopOpacity="1" />
          </linearGradient>
        </defs>
        {drawn > 0 && <path d={path} fill="none" stroke="url(#sparkgrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />}
        {visiblePts.length > 1 && (
          <circle cx={visiblePts[visiblePts.length - 1].x} cy={visiblePts[visiblePts.length - 1].y} r="3.5" fill="var(--color-accent-blue)" />
        )}
      </svg>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
        <div style={{ background: "var(--color-bg-secondary)", border: "1px solid var(--color-border)", borderRadius: 7, padding: "6px 8px" }}>
          <div style={{ fontSize: 8, color: "var(--color-text-muted)", marginBottom: 2 }}>Revenue</div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-accent-blue)" }}>₹{revenue.toLocaleString("en-IN")}</div>
        </div>
        <div style={{ background: "var(--color-bg-secondary)", border: "1px solid var(--color-border)", borderRadius: 7, padding: "6px 8px" }}>
          <div style={{ fontSize: 8, color: "var(--color-text-muted)", marginBottom: 2 }}>7-Day Trend</div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#22C55E" }}>↑ {trend}%</div>
        </div>
      </div>
    </div>
  );
}
