export default function SalesSnapshotCard() {
  const stats = [
    { label: "Orders Today", value: "146" },
    { label: "Revenue", value: "₹38,200" },
    { label: "Avg Order Value", value: "₹262" },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center p-4">
      <div className="mono text-[10px] uppercase tracking-[.06em] mb-3" style={{ color: "var(--color-text-muted)" }}>
        Sales Snapshot — Illustrative
      </div>
      <div className="grid grid-cols-3 gap-2">
        {stats.map((s) => (
          <div key={s.label} className="text-center px-1.5 py-2 rounded-md" style={{ background: "var(--color-bg-secondary)" }}>
            <div className="text-[12px] font-semibold mono" style={{ color: "var(--color-accent-cyan)" }}>{s.value}</div>
            <div className="text-[10px] mt-1 leading-tight" style={{ color: "var(--color-text-muted)" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
