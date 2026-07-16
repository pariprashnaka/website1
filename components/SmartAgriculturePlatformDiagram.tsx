export default function SmartAgriculturePlatformDiagram() {
  const inputs = ["IoT Soil Sensors", "Satellite Imagery", "Weather Stations", "Field Observations"];
  const outputs = ["Dashboards & Alerts", "AI Recommendations", "Reports by Region"];

  return (
    <div className="w-full h-full flex flex-col justify-center gap-2.5 p-4 md:p-6">
      <div className="mono text-[9.5px] uppercase tracking-[.06em] text-center mb-1" style={{ color: "var(--color-text-muted)" }}>
        Data In
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {inputs.map((label) => (
          <div
            key={label}
            className="text-[10px] md:text-[11px] px-2 py-1.5 rounded-md text-center truncate"
            style={{ background: "var(--color-bg-secondary)", border: "1px solid var(--color-accent-blue)", color: "var(--color-text-white)" }}
          >
            {label}
          </div>
        ))}
      </div>

      <div className="mono text-[12px] text-center" style={{ color: "var(--color-border-strong)" }}>↓</div>

      <div
        className="rounded-lg py-2.5 px-3 text-center"
        style={{ background: "rgba(0,212,255,0.08)", border: "1.5px solid var(--color-accent-cyan)" }}
      >
        <div className="text-[12px] md:text-[13px] font-semibold" style={{ color: "var(--color-text-white)" }}>Analytics Engine</div>
        <div className="text-[9px] md:text-[10px]" style={{ color: "var(--color-text-muted)" }}>AI + ML models</div>
      </div>

      <div className="mono text-[12px] text-center" style={{ color: "var(--color-border-strong)" }}>↓</div>

      <div className="mono text-[9.5px] uppercase tracking-[.06em] text-center mb-1" style={{ color: "var(--color-text-muted)" }}>
        Outputs
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {outputs.map((label) => (
          <div
            key={label}
            className="text-[9px] md:text-[10px] px-1.5 py-1.5 rounded-md text-center leading-tight"
            style={{ background: "var(--color-bg-secondary)", border: "1px solid var(--color-accent-purple)", color: "var(--color-text-white)" }}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
