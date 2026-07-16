export default function SmartAgriculturePlatformDiagram() {
  const steps = [
    { label: "Data Collection", sub: "IoT sensors, satellite, weather" },
    { label: "Automated Validation", sub: "Reliable, cleaned field data" },
    { label: "AI Analysis", sub: "Machine learning models" },
    { label: "Recommendations & Alerts", sub: "Irrigation, pest risk, planning" },
    { label: "Reporting Dashboard", sub: "By farm, district, or programme" },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center p-4 md:p-8">
      <div className="mono text-[10px] uppercase tracking-[.08em] mb-3 md:mb-6" style={{ color: "var(--color-text-muted)" }}>
        How the platform runs, end to end
      </div>
      <div className="flex flex-col gap-1.5 md:gap-2.5 w-full">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-2.5 md:gap-3">
            <div
              className="w-[22px] h-[22px] md:w-[26px] md:h-[26px] rounded-md flex items-center justify-center flex-shrink-0 mono text-[10px] md:text-[11px] font-semibold"
              style={{ background: "rgba(0,212,255,0.12)", color: "var(--color-accent-cyan)", border: "1px solid rgba(0,212,255,0.3)" }}
            >
              {i + 1}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[12px] md:text-[13px] font-medium truncate" style={{ color: "var(--color-text-white)" }}>{s.label}</div>
              <div className="text-[10px] md:text-[11px] truncate" style={{ color: "var(--color-text-muted)" }}>{s.sub}</div>
            </div>
            {i < steps.length - 1 && (
              <div className="mono text-[9px] md:text-[10px] hidden sm:block" style={{ color: "var(--color-border-strong)" }}>↓</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
