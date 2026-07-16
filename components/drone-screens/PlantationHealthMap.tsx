export default function PlantationHealthMap() {
  const zones = [
    2, 1, 1, 2, 3, 2, 1, 1,
    1, 1, 2, 2, 1, 3, 2, 1,
    2, 2, 1, 1, 2, 2, 1, 1,
    1, 3, 2, 1, 1, 1, 2, 1,
  ];
  const colors = ["#22C55E", "#F59E0B", "#EF4444"];

  return (
    <div className="w-full h-full flex flex-col p-4">
      <div className="mono text-[10.5px] uppercase tracking-[.06em] mb-3" style={{ color: "var(--color-text-muted)" }}>
        Plantation Health Map
      </div>
      <div className="grid grid-cols-8 gap-[3px] flex-1">
        {zones.map((z, i) => (
          <div key={i} className="rounded-[2px]" style={{ background: colors[z - 1], opacity: 0.85 }} />
        ))}
      </div>
      <div className="flex items-center gap-3 mt-3">
        {["Healthy", "Moderate stress", "High stress"].map((label, i) => (
          <div key={label} className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-sm" style={{ background: colors[i] }} />
            <span className="text-[10.5px]" style={{ color: "var(--color-text-muted)" }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
