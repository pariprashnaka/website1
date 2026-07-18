import Link from "next/link";
import ServiceIcon from "@/components/ServiceIcon";
import { services } from "@/lib/content";

export default function ServicesGridSection() {
  return (
    <section className="px-8" style={{ background: "var(--color-bg-secondary)", padding: "120px 32px" }}>
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center max-w-[760px] mx-auto mb-[70px]">
          <span className="mono text-[12px] uppercase tracking-[.06em] font-bold" style={{ color: "var(--color-accent-blue)" }}>What We Build</span>
          <h2 className="text-[clamp(32px,4vw,48px)] leading-[1.15] mt-4 mb-5" style={{ color: "var(--color-text-white)" }}>
            Nine disciplines. One senior team.
          </h2>
          <p className="text-[17px] leading-[1.7]" style={{ color: "var(--color-text-muted)" }}>
            We design and build modern software systems that solve real operational problems — not a generic template you have to bend your business to fit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services#${s.slug}`}
              className="relative overflow-hidden rounded-[24px] p-8 transition-all hover:-translate-y-2.5 group"
              style={{ background: "var(--color-card)", border: "1px solid var(--color-border)" }}
            >
              <div
                className="absolute top-0 left-0 w-full h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ background: "linear-gradient(90deg, var(--color-accent-blue), var(--color-accent-purple))" }}
              />
              <div className="mb-6">
                <ServiceIcon icon={s.icon} />
              </div>
              <h3 className="text-[20px] mb-3" style={{ color: "var(--color-text-white)" }}>{s.title}</h3>
              <p className="text-[14.5px] leading-[1.7] mb-6" style={{ color: "var(--color-text-muted)" }}>{s.short}</p>
              <span className="text-[14px] font-bold inline-block transition-transform group-hover:translate-x-2" style={{ color: "var(--color-accent-blue)" }}>
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
