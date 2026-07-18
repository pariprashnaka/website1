const STEPS = [
  { num: "01", title: "Discovery", desc: "Business goals, workflows, stakeholders, and technical constraints." },
  { num: "02", title: "Architecture", desc: "System design, APIs, database schema, infrastructure, and security planning." },
  { num: "03", title: "Development", desc: "Rapid iterations with continuous testing and transparent progress." },
  { num: "04", title: "Deployment", desc: "Cloud deployment, monitoring, optimization, documentation, and long-term support." },
];

export default function ProcessSection() {
  return (
    <section className="px-8" style={{ background: "var(--color-bg-primary)", padding: "120px 32px" }}>
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center max-w-[760px] mx-auto mb-[70px]">
          <span className="mono text-[12px] uppercase tracking-[.06em] font-bold" style={{ color: "var(--color-accent-blue)" }}>How We Work</span>
          <h2 className="text-[clamp(32px,4vw,48px)] leading-[1.15] mt-4 mb-5" style={{ color: "var(--color-text-white)" }}>
            Engineering first. Delivery second.
          </h2>
          <p className="text-[17px] leading-[1.7]" style={{ color: "var(--color-text-muted)" }}>
            Every engagement follows a structured process to reduce risk, improve visibility, and deliver software that actually scales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 relative">
          <div className="hidden md:block absolute top-[32px] left-0 right-0 h-px" style={{ background: "var(--color-border)" }} />
          {STEPS.map((s) => (
            <div
              key={s.num}
              className="relative z-10 rounded-[24px] p-8 transition-transform hover:-translate-y-2"
              style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
            >
              <div
                className="w-[64px] h-[64px] rounded-full flex items-center justify-center text-white text-[20px] font-bold mb-7"
                style={{ background: "linear-gradient(135deg, var(--color-accent-blue), var(--color-accent-purple))" }}
              >
                {s.num}
              </div>
              <h3 className="text-[20px] mb-3.5" style={{ color: "var(--color-text-white)" }}>{s.title}</h3>
              <p className="text-[14.5px] leading-[1.7]" style={{ color: "var(--color-text-muted)" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
