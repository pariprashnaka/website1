export default function DroneServiceDiagram() {
  const steps = [
    { label: "Aerial Survey", sub: "RGB + multispectral imaging" },
    { label: "Crop Intelligence", sub: "NDVI health mapping" },
    { label: "Spray Planning", sub: "AI-optimised mission" },
    { label: "Precision Spray", sub: "GPS-guided drones" },
    { label: "Digital Report", sub: "Dashboard & logs" },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center p-6 md:p-8">
      <div className="mono text-[10px] uppercase tracking-[.08em] mb-6" style={{ color: "var(--color-text-muted)" }}>
        How the service runs, end to end
      </div>
      <div className="flex flex-col gap-2.5 w-full">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-3">
            <div
              className="w-[26px] h-[26px] rounded-md flex items-center justify-center flex-shrink-0 mono text-[11px] font-semibold"
              style={{ background: "rgba(124,58,237,0.12)", color: "var(--color-accent-purple)", border: "1px solid rgba(124,58,237,0.3)" }}
            >
              {i + 1}
            </div>
            <div className="flex-1">
              <div className="text-[13px] font-medium" style={{ color: "var(--color-text-white)" }}>{s.label}</div>
              <div className="text-[11px]" style={{ color: "var(--color-text-muted)" }}>{s.sub}</div>
            </div>
            {i < steps.length - 1 && (
              <div className="mono text-[10px]" style={{ color: "var(--color-border-strong)" }}>↓</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
