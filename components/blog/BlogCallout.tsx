type CalloutType = "info" | "tip" | "warning" | "stat";
const styles: Record<CalloutType, { border: string; bg: string; label: string; labelColor: string }> = {
  info:    { border: "#3B82F6", bg: "rgba(59,130,246,0.07)",  label: "NOTE",           labelColor: "#3B82F6" },
  tip:     { border: "#00D4FF", bg: "rgba(0,212,255,0.07)",   label: "TIP",            labelColor: "#00D4FF" },
  warning: { border: "#F59E0B", bg: "rgba(245,158,11,0.07)",  label: "WATCH OUT",      labelColor: "#F59E0B" },
  stat:    { border: "#7C3AED", bg: "rgba(124,58,237,0.07)",  label: "BY THE NUMBERS", labelColor: "#7C3AED" },
};
export default function BlogCallout({ type = "info", children }: { type?: CalloutType; children: React.ReactNode }) {
  const s = styles[type];
  return (
    <div className="my-6 rounded-xl px-5 py-4 border-l-4" style={{ background: s.bg, borderLeftColor: s.border }}>
      <div className="mono text-[11px] mb-2 font-medium" style={{ color: s.labelColor, letterSpacing: "0.08em" }}>{s.label}</div>
      <div className="text-[14.5px] leading-[1.6]" style={{ color: "var(--color-text-soft)" }}>{children}</div>
    </div>
  );
}
