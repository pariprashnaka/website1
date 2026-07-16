export default function CrmVisual() {
  const stages = ["Lead", "Qualified", "Won"];
  return (
    <div className="w-full h-full flex flex-col justify-center p-6">
      <div className="mono text-[10px] uppercase tracking-[.06em] mb-4" style={{ color: "var(--color-text-muted)" }}>Pipeline stages</div>
      <div className="flex items-center gap-1.5">
        {stages.map((s, i) => (
          <div key={s} className="flex items-center gap-1.5 flex-1">
            <div
              className="flex-1 text-center py-2.5 rounded-md text-[11px]"
              style={{
                background: i === stages.length - 1 ? "rgba(0,212,255,0.12)" : "var(--color-bg-secondary)",
                color: i === stages.length - 1 ? "var(--color-accent-cyan)" : "var(--color-text-white)",
                border: i === stages.length - 1 ? "1px solid rgba(0,212,255,0.3)" : "none",
              }}
            >
              {s}
            </div>
            {i < stages.length - 1 && <span className="mono text-[11px]" style={{ color: "var(--color-border-strong)" }}>&#8594;</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
