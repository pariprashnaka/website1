export default function WebVisual() {
  return (
    <div className="w-full h-full flex flex-col justify-center p-6">
      <div className="mono text-[10px] uppercase tracking-[.06em] mb-4" style={{ color: "var(--color-text-muted)" }}>Load speed</div>
      <div className="flex flex-col gap-3">
        <div>
          <div className="flex justify-between text-[10.5px] mb-1.5" style={{ color: "var(--color-text-muted)" }}>
            <span>Typical site</span><span>3.8s</span>
          </div>
          <div className="h-2 rounded-full" style={{ background: "var(--color-bg-secondary)" }}>
            <div className="h-full rounded-full" style={{ width: "90%", background: "var(--color-border-strong)" }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[10.5px] mb-1.5" style={{ color: "var(--color-text-white)" }}>
            <span>Built for real traffic</span><span>0.6s</span>
          </div>
          <div className="h-2 rounded-full" style={{ background: "var(--color-bg-secondary)" }}>
            <div className="h-full rounded-full" style={{ width: "16%", background: "var(--color-accent-cyan)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
