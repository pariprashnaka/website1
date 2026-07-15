import { Brain, MessageCircle, StickyNote, Lightbulb, Check } from "lucide-react";

const notes = [
  { icon: Brain, label: "A process that only works because one person remembers every exception", color: "var(--color-accent-blue)" },
  { icon: MessageCircle, label: "A WhatsApp group holding half the process together", color: "#25D366" },
  { icon: StickyNote, label: "The workaround nobody ever wrote down", color: "var(--color-accent-purple)" },
  { icon: Lightbulb, label: "That idea you've been sitting on for a year", color: "#F59E0B" },
];

export default function AboutVisualListen() {
  return (
    <div className="rounded-xl border p-6 md:p-7" style={{ borderColor: "var(--color-border)", background: "var(--color-card)" }}>
      <div className="mono text-[10.5px] uppercase tracking-[.08em] mb-5" style={{ color: "var(--color-text-muted)" }}>
        What you actually bring us
      </div>
      <div className="flex flex-col gap-3">
        {notes.map((n) => (
          <div key={n.label} className="flex items-center gap-3 px-4 py-3 rounded-lg" style={{ background: "var(--color-bg-secondary)" }}>
            <div className="w-[30px] h-[30px] rounded-md flex items-center justify-center flex-shrink-0" style={{ background: `${n.color}1a` }}>
              <n.icon size={15} color={n.color} />
            </div>
            <span className="text-[13px] leading-[1.4]" style={{ color: "var(--color-text-soft)" }}>{n.label}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 px-4 py-3 rounded-lg mt-3 border" style={{ borderColor: "rgba(0,212,255,0.3)", background: "rgba(0,212,255,0.06)" }}>
        <div className="w-[30px] h-[30px] rounded-md flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,212,255,0.15)" }}>
          <Check size={15} color="var(--color-accent-cyan)" />
        </div>
        <span className="text-[13px] font-medium" style={{ color: "var(--color-text-white)" }}>All of this is a completely normal place to start.</span>
      </div>
    </div>
  );
}
