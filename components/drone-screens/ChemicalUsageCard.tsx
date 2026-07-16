export default function ChemicalUsageCard() {
  return (
    <div className="w-full h-full flex flex-col justify-center p-5">
      <div className="mono text-[10.5px] uppercase tracking-[.06em] mb-4" style={{ color: "var(--color-text-muted)" }}>
        Application Approach
      </div>
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-md" style={{ background: "var(--color-bg-secondary)" }}>
          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-border-strong)" }} />
          <div>
            <div className="text-[10.5px]" style={{ color: "var(--color-text-white)" }}>Blanket application</div>
            <div className="text-[9.5px]" style={{ color: "var(--color-text-muted)" }}>Uniform spraying, entire field</div>
          </div>
        </div>
        <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-md" style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.25)" }}>
          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-accent-purple)" }} />
          <div>
            <div className="text-[10.5px]" style={{ color: "var(--color-text-white)" }}>Targeted application</div>
            <div className="text-[9.5px]" style={{ color: "var(--color-text-muted)" }}>Only where stress is detected</div>
          </div>
        </div>
      </div>
    </div>
  );
}
