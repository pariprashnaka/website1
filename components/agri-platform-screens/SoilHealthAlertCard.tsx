export default function SoilHealthAlertCard() {
  const readings = [
    { label: "Soil moisture", value: 42, unit: "%", ok: true },
    { label: "Soil pH", value: 6.4, unit: "", ok: true },
    { label: "Soil temperature", value: 31, unit: "°C", ok: false },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center p-4">
      <div className="mono text-[10.5px] uppercase tracking-[.06em] mb-3" style={{ color: "var(--color-text-muted)" }}>
        Soil Health — Field 14B
      </div>
      <div className="flex flex-col gap-2">
        {readings.map((r) => (
          <div key={r.label} className="flex items-center justify-between">
            <span className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>{r.label}</span>
            <span
              className="text-[11px] font-medium px-2 py-0.5 rounded"
              style={{
                color: r.ok ? "var(--color-text-white)" : "#F59E0B",
                background: r.ok ? "transparent" : "rgba(245,158,11,0.1)",
              }}
            >
              {r.value}{r.unit}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 px-2.5 py-2 rounded-md text-[10.5px]" style={{ background: "rgba(245,158,11,0.08)", color: "#F59E0B" }}>
        ⚠ Alert: soil temperature above optimal range
      </div>
    </div>
  );
}
