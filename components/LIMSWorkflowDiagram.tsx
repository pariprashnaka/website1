"use client";
import { useEffect, useRef, useState } from "react";

const BEFORE = [
  { step: "01", text: "Patient arrives", sub: "Name + tests written on paper slip" },
  { step: "02", text: "Vial labelled by hand", sub: "Name, age, test — all handwritten" },
  { step: "03", text: "Sample goes to machine", sub: "Machine runs in 1–2 minutes" },
  { step: "04", text: "Find the right Word template", sub: "One of 20+ files on a local PC" },
  { step: "05", text: "Delete old patient data", sub: "Previous report still inside the file" },
  { step: "06", text: "Retype result by hand", sub: "Number by number, from screen to keyboard" },
  { step: "07", text: "Format and print", sub: "~10 minutes per report. No record kept." },
];

const AFTER = [
  { step: "01", text: "Patient arrives", sub: "Registered digitally in SF LIMS" },
  { step: "02", text: "Test order created", sub: "System generates unique sample ID" },
  { step: "03", text: "Sample goes to machine", sub: "Machine runs in 1–2 minutes" },
  { step: "04", text: "Sample ID fed into SF LIMS", sub: "Result pulled in automatically" },
  { step: "05", text: "Reference ranges checked", sub: "System flags values outside normal" },
  { step: "06", text: "Pathologist verifies + releases", sub: "Clinical judgment — not data entry" },
  { step: "07", text: "Report sent via WhatsApp", sub: "Auto-generated. Audit trail logged." },
];

const HIGHLIGHTS = [3, 4, 5, 6]; // steps where machine integration makes the difference

export default function LIMSWorkflowDiagram() {
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let i = 0;
    const run = () => {
      setActiveStep(i);
      i++;
      if (i < BEFORE.length) {
        timerRef.current = setTimeout(run, 350);
      }
    };
    timerRef.current = setTimeout(run, 400);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [visible]);

  return (
    <div ref={ref} style={{ margin: "40px 0" }}>
      {/* Header */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16,
      }}>
        <div style={{
          padding: "10px 16px", borderRadius: 10,
          background: "rgba(239,68,68,0.08)",
          border: "1px solid rgba(239,68,68,0.25)",
          textAlign: "center",
        }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#EF4444", fontFamily: "var(--font-mono, monospace)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Before SF LIMS
          </span>
        </div>
        <div style={{
          padding: "10px 16px", borderRadius: 10,
          background: "rgba(59,130,246,0.08)",
          border: "1px solid rgba(59,130,246,0.25)",
          textAlign: "center",
        }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: "var(--color-accent-blue)", fontFamily: "var(--font-mono, monospace)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            After SF LIMS
          </span>
        </div>
      </div>

      {/* Steps */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {BEFORE.map((b, i) => {
          const a = AFTER[i];
          const isActive = i <= activeStep;
          const isHighlight = HIGHLIGHTS.includes(i);
          const isMachineStep = i === 2;

          return (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "1fr 36px 1fr",
              gap: 8,
              alignItems: "stretch",
              opacity: isActive ? 1 : 0,
              transform: isActive ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}>
              {/* Before */}
              <div style={{
                padding: "12px 14px",
                borderRadius: 10,
                background: isMachineStep
                  ? "rgba(124,58,237,0.07)"
                  : isHighlight
                  ? "rgba(239,68,68,0.06)"
                  : "var(--color-card)",
                border: `1px solid ${isMachineStep
                  ? "rgba(124,58,237,0.25)"
                  : isHighlight
                  ? "rgba(239,68,68,0.20)"
                  : "var(--color-border)"}`,
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{
                    fontSize: 9, fontWeight: 700,
                    fontFamily: "var(--font-mono, monospace)",
                    color: isMachineStep ? "var(--color-accent-purple)" : isHighlight ? "#EF4444" : "var(--color-text-muted)",
                    flexShrink: 0, marginTop: 2,
                    letterSpacing: "0.04em",
                  }}>{b.step}</span>
                  <div>
                    <div style={{
                      fontSize: 12, fontWeight: 600,
                      color: isMachineStep ? "var(--color-accent-purple)" : isHighlight ? "#EF4444" : "var(--color-text-primary, var(--color-text-white))",
                      marginBottom: 2, lineHeight: 1.3,
                    }}>{b.text}</div>
                    <div style={{ fontSize: 10, color: "var(--color-text-muted)", lineHeight: 1.4 }}>{b.sub}</div>
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                flexDirection: "column", gap: 2,
              }}>
                {isHighlight && !isMachineStep ? (
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%",
                    background: "rgba(59,130,246,0.12)",
                    border: "1px solid rgba(59,130,246,0.30)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11,
                  }}>→</div>
                ) : isMachineStep ? (
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%",
                    background: "rgba(124,58,237,0.12)",
                    border: "1px solid rgba(124,58,237,0.30)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11,
                  }}>⚡</div>
                ) : (
                  <div style={{
                    width: 1, height: "100%",
                    background: "var(--color-border)",
                  }} />
                )}
              </div>

              {/* After */}
              <div style={{
                padding: "12px 14px",
                borderRadius: 10,
                background: isMachineStep
                  ? "rgba(124,58,237,0.07)"
                  : isHighlight
                  ? "rgba(59,130,246,0.07)"
                  : "var(--color-card)",
                border: `1px solid ${isMachineStep
                  ? "rgba(124,58,237,0.25)"
                  : isHighlight
                  ? "rgba(59,130,246,0.22)"
                  : "var(--color-border)"}`,
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{
                    fontSize: 9, fontWeight: 700,
                    fontFamily: "var(--font-mono, monospace)",
                    color: isMachineStep ? "var(--color-accent-purple)" : isHighlight ? "var(--color-accent-blue)" : "var(--color-text-muted)",
                    flexShrink: 0, marginTop: 2,
                    letterSpacing: "0.04em",
                  }}>{a.step}</span>
                  <div>
                    <div style={{
                      fontSize: 12, fontWeight: 600,
                      color: isMachineStep ? "var(--color-accent-purple)" : isHighlight ? "var(--color-accent-blue)" : "var(--color-text-primary, var(--color-text-white))",
                      marginBottom: 2, lineHeight: 1.3,
                    }}>{a.text}</div>
                    <div style={{ fontSize: 10, color: "var(--color-text-muted)", lineHeight: 1.4 }}>{a.sub}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Machine integration callout */}
      <div style={{
        marginTop: 20, padding: "14px 18px", borderRadius: 12,
        background: "rgba(124,58,237,0.07)",
        border: "1px solid rgba(124,58,237,0.25)",
        display: "flex", alignItems: "flex-start", gap: 12,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.6s ease 2.5s",
      }}>
        <span style={{ fontSize: 18, flexShrink: 0 }}>⚡</span>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--color-accent-purple)", fontFamily: "var(--font-mono, monospace)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>
            Machine Integration — The Core USP
          </div>
          <div style={{ fontSize: 13, color: "var(--color-text-soft)", lineHeight: 1.6 }}>
            Steps 4–7 are where SF LIMS changes everything. The machine result enters the system via sample ID — no human retyping, no Word document, no quality gap. The pathologist verifies. The system does everything else.
          </div>
        </div>
      </div>
    </div>
  );
}
