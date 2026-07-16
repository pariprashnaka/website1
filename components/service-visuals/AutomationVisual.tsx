export default function AutomationVisual() {
  return (
    <div className="w-full h-full flex flex-col justify-center p-6 gap-3">
      <div className="rounded-md px-3 py-2.5" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="text-[10.5px] mb-1" style={{ color: "var(--color-text-muted)" }}>Manual</div>
        <div className="text-[12px]" style={{ color: "var(--color-text-white)" }}>5 steps · 3 people</div>
      </div>
      <div className="mono text-[12px] text-center" style={{ color: "var(--color-border-strong)" }}>&#8595;</div>
      <div className="rounded-md px-3 py-2.5" style={{ background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.25)" }}>
        <div className="text-[10.5px] mb-1" style={{ color: "var(--color-accent-cyan)" }}>Automated</div>
        <div className="text-[12px] font-medium" style={{ color: "var(--color-text-white)" }}>1 step · 0 people</div>
      </div>
    </div>
  );
}
