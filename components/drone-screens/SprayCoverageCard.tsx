export default function SprayCoverageCard() {
  return (
    <div className="w-full h-full flex flex-col justify-center p-5">
      <div className="mono text-[9.5px] uppercase tracking-[.06em] mb-4" style={{ color: "var(--color-text-muted)" }}>
        Spray Mission — Planned vs Actual
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <div className="flex justify-between text-[10px] mb-1" style={{ color: "var(--color-text-muted)" }}>
            <span>Planned coverage</span><span>100%</span>
          </div>
          <div className="h-2 rounded-full" style={{ background: "var(--color-bg-secondary)" }}>
            <div className="h-full rounded-full" style={{ width: "100%", background: "var(--color-border-strong)" }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[10px] mb-1" style={{ color: "var(--color-text-white)" }}>
            <span>Actual coverage</span><span>98.4%</span>
          </div>
          <div className="h-2 rounded-full" style={{ background: "var(--color-bg-secondary)" }}>
            <div className="h-full rounded-full" style={{ width: "98.4%", background: "var(--color-accent-cyan)" }} />
          </div>
        </div>
      </div>
      <div className="mono text-[9px] mt-4" style={{ color: "var(--color-text-muted)" }}>
        Illustrative — actual figures vary by estate and mission
      </div>
    </div>
  );
}
