const TECH = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel", "PostgreSQL", "AWS"];

export default function TrustedMarquee() {
  return (
    <section className="px-8 overflow-hidden" style={{ background: "var(--color-bg-primary)", padding: "90px 32px" }}>
      <div className="max-w-[1240px] mx-auto">
        <span className="mono text-[12px] uppercase tracking-[.06em] font-bold block mb-3.5" style={{ color: "var(--color-accent-blue)" }}>
          Trusted Technologies
        </span>
        <h2 className="text-[clamp(24px,3vw,36px)] leading-[1.2] max-w-[720px] mb-[50px]" style={{ color: "var(--color-text-white)" }}>
          Built with technologies powering modern businesses.
        </h2>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex gap-20 w-max animate-marquee">
          {[...TECH, ...TECH].map((t, i) => (
            <span key={i} className="text-[28px] font-bold whitespace-nowrap transition-colors" style={{ color: "var(--color-text-muted)" }}>
              {t}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee-scroll 24s linear infinite; }
      `}</style>
    </section>
  );
}
