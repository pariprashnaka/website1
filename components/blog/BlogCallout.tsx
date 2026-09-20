type CalloutType = "info" | "tip" | "warning" | "stat";

const styles: Record<CalloutType, {
  border: string; bg: string; label: string;
  labelColor: string; icon: string;
}> = {
  info:    { border: "#3B82F6", bg: "rgba(59,130,246,0.07)",  label: "NOTE",           labelColor: "#3B82F6", icon: "ℹ️" },
  tip:     { border: "#00D4FF", bg: "rgba(0,212,255,0.07)",   label: "TIP",            labelColor: "#00D4FF", icon: "💡" },
  warning: { border: "#F59E0B", bg: "rgba(245,158,11,0.08)",  label: "HEADS UP",       labelColor: "#F59E0B", icon: "⚠️" },
  stat:    { border: "#7C3AED", bg: "rgba(124,58,237,0.07)",  label: "BY THE NUMBERS", labelColor: "#7C3AED", icon: "📊" },
};

export default function BlogCallout({
  type = "info",
  children,
}: {
  type?: CalloutType;
  children: React.ReactNode;
}) {
  const s = styles[type];
  return (
    <div
      style={{
        margin: "28px 0",
        borderRadius: 12,
        borderLeft: `4px solid ${s.border}`,
        background: s.bg,
        padding: "16px 20px",
        boxShadow: `0 1px 12px ${s.border}18`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginBottom: 8,
        }}
      >
        <span style={{ fontSize: 13 }}>{s.icon}</span>
        <span
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.10em",
            color: s.labelColor,
            textTransform: "uppercase" as const,
          }}
        >
          {s.label}
        </span>
      </div>
      <div
        style={{
          fontSize: 14.5,
          lineHeight: 1.65,
          color: "var(--color-text-soft)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
