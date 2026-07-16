export default function CafeCaseStudyBeforeAfter() {
  const before = ["Paper menu cards", "Manual attendance registers", "No digital record of transactions", "Guesswork on inventory"];
  const after = ["In-app ordering & payment", "Digital, verified attendance", "Every transaction recorded", "Real-time stock visibility"];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="rounded-xl border p-5" style={{ borderColor: "var(--color-border)", background: "var(--color-bg-secondary)" }}>
        <div className="mono text-[10px] uppercase tracking-[.08em] mb-4" style={{ color: "var(--color-text-muted)" }}>Before</div>
        <div className="flex flex-col gap-2.5">
          {before.map((item) => (
            <div key={item} className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-border-strong)" }} />
              <span className="text-[13px]" style={{ color: "var(--color-text-muted)" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl border p-5" style={{ borderColor: "rgba(0,212,255,0.3)", background: "rgba(0,212,255,0.05)" }}>
        <div className="mono text-[10px] uppercase tracking-[.08em] mb-4" style={{ color: "var(--color-accent-cyan)" }}>After</div>
        <div className="flex flex-col gap-2.5">
          {after.map((item) => (
            <div key={item} className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-accent-cyan)" }} />
              <span className="text-[13px]" style={{ color: "var(--color-text-white)" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
