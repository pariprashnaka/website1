"use client";
import { useEffect, useRef, useState, useCallback } from "react";

const STAGES = [
  { label: "Registered", icon: "👤", count: 12 },
  { label: "Sample Collected", icon: "🧪", count: 9 },
  { label: "In Lab", icon: "🔬", count: 6 },
  { label: "Report Ready", icon: "📄", count: 4 },
  { label: "Billed", icon: "✓", count: 3 },
];

const LOOP_MS = 15000;
function easeOut(t: number) { return 1 - Math.pow(1 - t, 3); }
function easeInOut(t: number) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }
function clamp(v: number, min = 0, max = 1) { return Math.min(Math.max(v, min), max); }
function seg(phase: number, s: number, e: number) { return easeOut(clamp((phase - s) / (e - s))); }

const STAGE_FRACTIONS = [0, 0.25, 0.50, 0.75, 1.0];

export default function SFLIMSDiagram() {
  const [phase, setPhase] = useState(0);
  const [centers, setCenters] = useState<{ x: number; y: number }[]>([]);
  const [svgW, setSvgW] = useState(0);
  const [svgH, setSvgH] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);
  const visibleRef = useRef(false);

  const tick = useCallback(() => {
    if (!visibleRef.current) return;
    const p = ((Date.now() - startRef.current) % LOOP_MS) / LOOP_MS;
    setPhase(p);
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const measureCenters = useCallback(() => {
    if (!containerRef.current || !rowRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const rowRect = rowRef.current.getBoundingClientRect();
    const measured = circleRefs.current.map(el => {
      if (!el) return { x: 0, y: 0 };
      const r = el.getBoundingClientRect();
      return {
        x: r.left - rowRect.left + r.width / 2,
        y: r.top - rowRect.top + r.height / 2,
      };
    });
    setCenters(measured);
    setSvgW(rowRect.width);
    setSvgH(rowRect.height);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      visibleRef.current = e.isIntersecting;
      if (e.isIntersecting) {
        measureCenters();
        startRef.current = Date.now();
        rafRef.current = requestAnimationFrame(tick);
      } else {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      }
    }, { threshold: 0.3 });
    if (containerRef.current) obs.observe(containerRef.current);

    const ro = new ResizeObserver(measureCenters);
    if (containerRef.current) ro.observe(containerRef.current);
    if (rowRef.current) ro.observe(rowRef.current);

    return () => {
      obs.disconnect();
      ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [tick, measureCenters]);

  const fadeOut = phase > 0.93 ? seg(phase, 0.93, 1.0) : 0;
  const globalOpacity = 1 - fadeOut * 0.8;

  const dotRaw = phase < 0.60 ? phase / 0.60 : 1;
  const dotPos = easeInOut(clamp(dotRaw)); // 0→1 from stage0 to stage4

  const stageLit = (i: number): number => {
    const arrivalPhase = STAGE_FRACTIONS[i] * 0.60;
    if (phase < arrivalPhase) return 0;
    if (phase > 0.93) return 1 - fadeOut;
    return seg(phase, arrivalPhase, arrivalPhase + 0.04);
  };

  const stageHighlight = (i: number): number => {
    const arrivalPhase = STAGE_FRACTIONS[i] * 0.60;
    const window = 0.06;
    if (phase < arrivalPhase || phase > arrivalPhase + window) return 0;
    return Math.sin(((phase - arrivalPhase) / window) * Math.PI);
  };

  const allGlow = phase > 0.75 && phase < 0.90
    ? Math.sin(seg(phase, 0.75, 0.90) * Math.PI * 2) * 0.5 + 0.5
    : 0;

  const statsP = phase > 0.60 && phase < 0.93
    ? seg(phase, 0.60, 0.75)
    : phase >= 0.93 ? 1 - fadeOut : 0;

  const totalTests = Math.floor(statsP * 27);
  const released = Math.floor(statsP * 18);
  const pending = Math.floor(statsP * 9);

  // dot pixel position interpolated between first and last circle center
  const first = centers[0];
  const last = centers[4];
  const dotX = first && last ? first.x + dotPos * (last.x - first.x) : 0;
  const dotY = first && last ? first.y + dotPos * (last.y - first.y) : 0;

  return (
    <div ref={containerRef} style={{
      width: "100%", height: "100%", minHeight: 300,
      background: "var(--color-card)",
      borderRadius: 16, padding: "20px 16px 16px",
      boxSizing: "border-box",
      fontFamily: "var(--font-mono, monospace)",
      display: "flex", flexDirection: "column", gap: 16,
      opacity: globalOpacity,
    }}>
      <div style={{ fontSize: 9, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
        Patient Journey · Live View
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div ref={rowRef} style={{ position: "relative" }}>

          {/* Lines BEHIND circles */}
          {centers.length === 5 && (
            <svg style={{ position: "absolute", top: 0, left: 0, width: svgW, height: svgH, pointerEvents: "none", zIndex: 1, overflow: "visible" }}>
              <line
                x1={centers[0].x} y1={centers[0].y}
                x2={centers[4].x} y2={centers[4].y}
                stroke="var(--color-border)" strokeWidth="2"
              />
              <line
                x1={centers[0].x} y1={centers[0].y}
                x2={dotX} y2={dotY}
                stroke="var(--color-accent-blue)" strokeWidth="2"
              />
            </svg>
          )}

          {/* Stage circles */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            {STAGES.map((s, i) => {
              const lit = stageLit(i);
              const highlight = stageHighlight(i);
              const glow = allGlow > 0.05 && lit > 0.5;
              const isLast = i === 4;
              const activeColor = isLast ? "#22C55E" : "var(--color-accent-blue)";
              const glowRgba = isLast ? "rgba(34,197,94," : "rgba(59,130,246,";
              return (
                <div key={s.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, flex: 1, zIndex: 2, position: "relative" }}>
                  <div
                    ref={el => { circleRefs.current[i] = el; }}
                    style={{
                      width: 52, height: 52, borderRadius: "50%",
                      background: lit > 0.5 ? activeColor : "var(--color-bg-secondary)",
                      border: `2px solid ${lit > 0.5 ? activeColor : "var(--color-border)"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 20, color: lit > 0.5 ? "#fff" : "var(--color-text-muted)",
                      fontWeight: 700,
                      transition: "background 0.3s ease, border-color 0.3s ease, color 0.3s ease",
                      boxShadow: highlight > 0.05
                        ? `0 0 ${24 * highlight}px ${glowRgba}0.7)`
                        : glow ? `0 0 ${16 * allGlow}px ${glowRgba}0.5)` : "none",
                    }}
                  >
                    {s.icon}
                  </div>
                  <div style={{ fontSize: 8, color: "var(--color-text-muted)", textAlign: "center", lineHeight: 1.4, opacity: 0.5 + lit * 0.5, minHeight: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>{s.label}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, minHeight: 20, color: isLast ? "#22C55E" : "var(--color-accent-blue)", opacity: lit }}>
                    {lit > 0.05 ? Math.floor(lit * s.count) : ""}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Travelling dot IN FRONT of circles */}
          {centers.length === 5 && (
            <svg style={{ position: "absolute", top: 0, left: 0, width: svgW, height: svgH, pointerEvents: "none", zIndex: 3, overflow: "visible" }}>
              <circle
                cx={dotX} cy={dotY} r="5"
                fill="var(--color-card)"
                stroke="var(--color-accent-blue)"
                strokeWidth="2.5"
                opacity={phase < 0.93 ? 1 : 1 - fadeOut}
              />
            </svg>
          )}
        </div>
      </div>

      <div style={{
        borderTop: "1px solid var(--color-border)", paddingTop: 12,
        display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8,
        opacity: statsP,
      }}>
        {[
          { label: "Tests Today", value: totalTests, color: "var(--color-accent-blue)" },
          { label: "Reports Released", value: released, color: "#22C55E" },
          { label: "Pending", value: pending, color: "var(--color-warning, #F59E0B)" },
        ].map(s => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: 8, color: "var(--color-text-muted)", marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
