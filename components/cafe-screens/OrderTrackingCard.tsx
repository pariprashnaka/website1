export default function OrderTrackingCard() {
  const steps = ["Confirmed", "Preparing", "Out for delivery", "Delivered"];
  const activeIndex = 2;

  return (
    <div className="w-full h-full flex flex-col justify-center p-4">
      <div className="mono text-[10px] uppercase tracking-[.06em] mb-3" style={{ color: "var(--color-text-muted)" }}>
        Order #4821 — Live Status
      </div>
      <div className="flex flex-col gap-2">
        {steps.map((step, i) => {
          const done = i <= activeIndex;
          return (
            <div key={step} className="flex items-center gap-2.5">
              <div
                className="w-[16px] h-[16px] rounded-full flex-shrink-0"
                style={{
                  background: done ? "var(--color-accent-cyan)" : "var(--color-bg-secondary)",
                  border: done ? "none" : "1px solid var(--color-border-strong)",
                }}
              />
              <span
                className="text-[10.5px]"
                style={{ color: done ? "var(--color-text-white)" : "var(--color-text-muted)" }}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
