import Link from "next/link";
import NetworkDiagram from "@/components/NetworkDiagram";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-8" style={{ paddingTop: "150px", paddingBottom: "80px" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 520, height: 520, top: -160, right: -160, background: "var(--color-accent-cyan)", filter: "blur(120px)", opacity: 0.15 }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 420, height: 420, bottom: -160, left: -120, background: "var(--color-accent-blue)", filter: "blur(120px)", opacity: 0.15 }}
      />

      <div className="max-w-[1240px] mx-auto relative grid grid-cols-1 lg:grid-cols-2 gap-[70px] items-center">
        <div>
          <span
            className="inline-flex px-4.5 py-2.5 rounded-full mono text-[13px] font-bold tracking-[.08em] mb-7"
            style={{ background: "rgba(37,99,235,0.08)", color: "var(--color-accent-blue)" }}
          >
            CUSTOM SOFTWARE ENGINEERING
          </span>
          <h1 className="text-[clamp(36px,5.5vw,68px)] leading-[1.03] tracking-[-0.02em] max-w-[720px] mb-7" style={{ color: "var(--color-text-white)" }}>
            Software engineered around your business.
          </h1>
          <p className="text-[18px] md:text-[20px] leading-[1.7] max-w-[560px] mb-10" style={{ color: "var(--color-text-muted)" }}>
            We build SaaS products, ERP systems, AI solutions, mobile applications and web platforms for organisations that need software designed around how they actually operate.
          </p>
          <div className="flex gap-4.5 flex-wrap mb-14">
            <Link href="/contact" className="btn btn-primary">Start a Conversation</Link>
            <Link href="/case-studies" className="btn btn-ghost">View Case Study</Link>
          </div>
          <div className="flex gap-12 flex-wrap">
            <div>
              <strong className="block text-[40px]" style={{ color: "var(--color-accent-blue)" }}>9</strong>
              <span className="text-[14px]" style={{ color: "var(--color-text-muted)" }}>Services</span>
            </div>
            <div>
              <strong className="block text-[40px]" style={{ color: "var(--color-accent-blue)" }}>4</strong>
              <span className="text-[14px]" style={{ color: "var(--color-text-muted)" }}>Products</span>
            </div>
            <div>
              <strong className="block text-[40px]" style={{ color: "var(--color-accent-blue)" }}>1</strong>
              <span className="text-[14px]" style={{ color: "var(--color-text-muted)" }}>Real Case Study</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <NetworkDiagram />
        </div>
      </div>
    </section>
  );
}
