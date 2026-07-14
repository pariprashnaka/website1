import { trustedLogos } from "@/lib/content";

export default function Marquee() {
  return (
    <section className="py-10 border-t border-b overflow-hidden" style={{ borderColor: "var(--color-border)", background: "var(--color-bg-secondary)" }}>
      <div className="text-center mb-[22px] mono text-[12px] uppercase tracking-[.08em]" style={{ color: "var(--color-text-muted)" }}>
        Built for teams at
      </div>
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="flex gap-14 pr-14" key={copy} aria-hidden={copy === 1}>
            {trustedLogos.map((name) => (
              <span key={name} className="font-display font-semibold text-[16px] whitespace-nowrap opacity-50" style={{ color: "var(--color-text-soft)" }}>
                {name}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
