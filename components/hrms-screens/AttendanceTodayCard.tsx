export default function AttendanceTodayCard() {
  const stats = [
    { label: "Present", value: 214, color: "#22C55E" },
    { label: "On Leave", value: 12, color: "#F59E0B" },
    { label: "Absent", value: 4, color: "#EF4444" },
  ];
  const total = stats.reduce((s, x) => s + x.value, 0);

  return (
    <div className="w-full h-full flex flex-col justify-center p-4">
      <div className="mono text-[10px] uppercase tracking-[.06em] mb-3" style={{ color: "var(--color-text-muted)" }}>
        Attendance — Today
      </div>
      <div className="flex h-2.5 rounded-full overflow-hidden mb-3">
        {stats.map((s) => (
          <div key={s.label} style={{ width: `${(s.value / total) * 100}%`, background: s.color }} />
        ))}
      </div>
      <div className="flex flex-col gap-1.5">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-sm" style={{ background: s.color }} />
              <span className="text-[10.5px]" style={{ color: "var(--color-text-muted)" }}>{s.label}</span>
            </div>
            <span className="text-[10.5px] mono" style={{ color: "var(--color-text-white)" }}>{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
