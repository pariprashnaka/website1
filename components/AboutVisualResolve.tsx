import { Workflow, MessageCircle, AlertTriangle, ArrowRight, LayoutGrid } from "lucide-react";

export default function AboutVisualResolve() {
  return (
    <div className="rounded-xl border p-6 md:p-7" style={{ borderColor: "var(--color-border)", background: "var(--color-card)" }}>
      <div className="mono text-[10.5px] uppercase tracking-[.08em] mb-5" style={{ color: "var(--color-text-muted)" }}>
        The kind of mess we actually like
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex flex-col gap-2.5 flex-1 w-full">
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg" style={{ background: "var(--color-bg-secondary)" }}>
            <Workflow size={14} color="var(--color-accent-purple)" />
            <span className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>Three systems that don&apos;t talk to each other</span>
          </div>
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg" style={{ background: "var(--color-bg-secondary)" }}>
            <MessageCircle size={14} color="var(--color-accent-purple)" />
            <span className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>An unwritten workflow</span>
          </div>
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg" style={{ background: "var(--color-bg-secondary)" }}>
            <AlertTriangle size={14} color="var(--color-accent-purple)" />
            <span className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>Eleven undocumented exceptions</span>
          </div>
        </div>

        <div className="flex-shrink-0 rotate-90 md:rotate-0" style={{ color: "var(--color-text-muted)" }}>
          <ArrowRight size={20} />
        </div>

        <div
          className="flex-1 w-full flex flex-col items-center justify-center gap-2 px-5 py-6 rounded-lg border"
          style={{ borderColor: "rgba(0,212,255,0.3)", background: "rgba(0,212,255,0.06)" }}
        >
          <div className="w-[36px] h-[36px] rounded-lg flex items-center justify-center" style={{ background: "rgba(0,212,255,0.15)" }}>
            <LayoutGrid size={18} color="var(--color-accent-cyan)" />
          </div>
          <span className="text-[12.5px] font-medium text-center" style={{ color: "var(--color-text-white)" }}>One system that actually reflects how you work</span>
        </div>
      </div>
    </div>
  );
}
