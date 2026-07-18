import Link from "next/link";

export default function HomeCtaSection() {
  return (
    <section className="relative overflow-hidden text-center px-8" style={{ background: "linear-gradient(135deg, #0F172A, #111827)", padding: "140px 32px" }}>
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 650, height: 650, left: "50%", top: "50%", transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 70%)", filter: "blur(50px)",
        }}
      />
      <div className="max-w-[820px] mx-auto relative z-10">
        <span className="mono text-[12px] uppercase tracking-[.08em] font-bold" style={{ color: "#60A5FA" }}>Start Your Project</span>
        <h2 className="text-[clamp(32px,5vw,56px)] leading-[1.1] my-5 text-white">
          Let&apos;s build software that becomes your competitive advantage.
        </h2>
        <p className="text-[18px] md:text-[20px] leading-[1.8] mb-10" style={{ color: "#CBD5E1" }}>
          Whether you need AI, ERP, HRMS, mobile apps, or custom software, we&apos;ll help you architect, build, and scale it.
        </p>
        <div className="flex gap-5 justify-center flex-wrap">
          <Link href="/contact" className="btn btn-primary">Schedule a Call</Link>
          <Link href="/services" className="rounded-full px-8 py-4.5 font-bold text-white border transition-all hover:-translate-y-1" style={{ borderColor: "rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.04)" }}>
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
