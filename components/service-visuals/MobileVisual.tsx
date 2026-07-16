export default function MobileVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center gap-6 p-6">
      {["iOS", "Android"].map((platform) => (
        <div key={platform} className="flex flex-col items-center gap-2">
          <div
            className="w-[64px] h-[110px] rounded-[14px] border-2 flex flex-col items-center justify-center gap-1.5"
            style={{ borderColor: "var(--color-border)", background: "var(--color-bg-secondary)" }}
          >
            <div className="w-2 h-2 rounded-full" style={{ background: "#22C55E" }} />
            <div className="w-[36px] h-[3px] rounded-full mt-2" style={{ background: "var(--color-border)" }} />
            <div className="w-[36px] h-[3px] rounded-full" style={{ background: "var(--color-border)" }} />
          </div>
          <span className="mono text-[10px]" style={{ color: "var(--color-text-muted)" }}>{platform}</span>
        </div>
      ))}
    </div>
  );
}
