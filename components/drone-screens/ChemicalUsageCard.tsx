export default function ChemicalUsageCard() {
  return (
    <div className="w-full h-full flex flex-col justify-center p-5">
      <div className="mono text-[10.5px] uppercase tracking-[.06em] mb-4" style={{ color: "var(--color-text-muted)" }}>
        Chemical Usage — Targeted vs Blanket
      </div>
      <div className="flex items-end gap-4 h-[70px] mb-3">
        <div className="flex-1 flex flex-col items-center justify-end gap-1.5">
          <div className="w-full rounded-t-sm" style={{ height: "100%", background: "var(--color-border-strong)" }} />
          <span className="text-[10.5px]" style={{ color: "var(--color-text-muted)" }}>Blanket</span>
        </div>
        <div className="flex-1 flex flex-col items-center justify-end gap-1.5">
          <div className="w-full rounded-t-sm" style={{ height: "72%", background: "var(--color-accent-purple)" }} />
          <span className="text-[10.5px]" style={{ color: "var(--color-text-muted)" }}>Targeted</span>
        </div>
      </div>
      <div className="mono text-[10.5px]" style={{ color: "var(--color-text-muted)" }}>
        Illustrative — up to 20-30% reduction reported
      </div>
    </div>
  );
}
