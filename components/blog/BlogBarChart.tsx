"use client";
import { useEffect, useRef, useState } from "react";

type Bar = { label: string; value: number; unit?: string };

export default function BlogBarChart({
  title,
  bars,
  max,
  color = "#3B82F6",
  note,
}: {
  title: string;
  bars: Bar[];
  max: number;
  color?: string;
  note?: string;
}) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimated(true); },
      { threshold: 0.25 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        margin: "28px 0",
        borderRadius: 14,
        border: "1px solid var(--color-border)",
        background: "var(--color-card)",
        padding: "24px",
        boxShadow: "0 4px 24px -8px rgba(15,23,42,0.10)",
      }}
    >
      {/* Title */}
      <div
        style={{
          fontSize: 13,
          fontWeight: 600,
          marginBottom: 20,
          color: "var(--color-text-primary, var(--color-text-white))",
          fontFamily: "var(--font-display, sans-serif)",
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </div>

      {/* Bars */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {bars.map((bar, i) => {
          const targetPct = Math.min(100, (bar.value / max) * 100);
          const pct = animated ? targetPct : 0;
          const isZero = bar.value === 0;
          return (
            <div key={bar.label}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: 6,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    color: "var(--color-text-muted)",
                    lineHeight: 1.4,
                    maxWidth: "70%",
                  }}
                >
                  {bar.label}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    fontFamily: "var(--font-mono, monospace)",
                    color: isZero ? "#22C55E" : color,
                    flexShrink: 0,
                    marginLeft: 8,
                  }}
                >
                  {bar.value}{bar.unit ?? ""}
                </span>
              </div>
              <div
                style={{
                  height: 10,
                  borderRadius: 6,
                  background: "var(--color-bg-secondary)",
                  overflow: "hidden",
                  border: "1px solid var(--color-border)",
                }}
              >
                {isZero ? (
                  <div
                    style={{
                      width: animated ? "4%" : "0%",
                      height: "100%",
                      borderRadius: 6,
                      background: "#22C55E",
                      transition: `width 0.8s cubic-bezier(0.34,1.56,0.64,1) ${i * 80}ms`,
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: pct + "%",
                      height: "100%",
                      borderRadius: 6,
                      background: `linear-gradient(90deg, ${color}cc, ${color})`,
                      transition: `width 0.9s cubic-bezier(0.34,1.56,0.64,1) ${i * 80}ms`,
                      boxShadow: `0 0 8px ${color}40`,
                    }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Note */}
      {note && (
        <div
          style={{
            marginTop: 16,
            fontSize: 11,
            lineHeight: 1.6,
            color: "var(--color-text-muted)",
            borderTop: "1px solid var(--color-border)",
            paddingTop: 12,
          }}
        >
          {note}
        </div>
      )}
    </div>
  );
}
