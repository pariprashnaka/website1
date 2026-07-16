export default function ErpVisual() {
  const stats = [
    { num: "4+", label: "Systems merged" },
    { num: "1", label: "Source of truth" },
    { num: "24/7", label: "Real-time sync" },
    { num: "0", label: "Manual re-entry" },
  ];
  return (
    <div className="w-full h-full flex flex-col justify-center p-6">
      <div className="mono text-[10px] uppercase tracking-[.06em] mb-4" style={{ color: "var(--color-text-muted)" }}>What gets unified</div>
      <div className="grid grid-cols-2 gap-2.5">
        {stats.map((s) => (
          <div key={s.label} className="text-center px-2 py-3 rounded-md" style={{ background: "var(--color-bg-secondary)" }}>
            <div className="mono text-[18px] font-bold" style={{ color: "var(--color-accent-cyan)" }}>{s.num}</div>
            <div className="text-[9.5px] mt-1" style={{ color: "var(--color-text-muted)" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
