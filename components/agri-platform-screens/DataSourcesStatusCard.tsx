export default function DataSourcesStatusCard() {
  const sources = [
    { label: "Soil sensors", status: "Online", count: "1,284 devices" },
    { label: "Weather stations", status: "Online", count: "56 stations" },
    { label: "Satellite feed", status: "Active", count: "Updated 2h ago" },
    { label: "Drone imagery", status: "Synced", count: "12 flights this week" },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center p-4">
      <div className="mono text-[9.5px] uppercase tracking-[.06em] mb-3" style={{ color: "var(--color-text-muted)" }}>
        Connected Data Sources
      </div>
      <div className="flex flex-col gap-2">
        {sources.map((s) => (
          <div key={s.label} className="flex items-center justify-between px-2.5 py-1.5 rounded-md" style={{ background: "var(--color-bg-secondary)" }}>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#22C55E" }} />
              <span className="text-[10px]" style={{ color: "var(--color-text-white)" }}>{s.label}</span>
            </div>
            <span className="text-[9px]" style={{ color: "var(--color-text-muted)" }}>{s.count}</span>
          </div>
        ))}
      </div>
      <div className="mono text-[8.5px] mt-2.5" style={{ color: "var(--color-text-muted)" }}>Illustrative example view</div>
    </div>
  );
}
