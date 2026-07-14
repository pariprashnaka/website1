import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import ServiceIcon from "@/components/ServiceIcon";
import Magnetic from "@/components/Magnetic";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "SaaS development, ERP, AI, mobile, web, CRM, automation, cloud, and data engineering — nine disciplines delivered by one senior team.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-8 pt-[120px] pb-[72px] border-b" style={{ borderColor: "var(--color-border)" }}>
        <div className="max-w-[1240px] mx-auto">
          <div className="mono text-[12px] mb-5 load-in" style={{ color: "var(--color-text-muted)" }}>
            <Link href="/" style={{ color: "var(--color-text-muted)" }}>Home</Link> / Services
          </div>
          <span className="eyebrow load-in">Services</span>
          <h1 className="text-[clamp(32px,4.6vw,52px)] leading-[1.1] max-w-[720px] mt-4 load-in">Nine disciplines, delivered by one team.</h1>
          <p className="text-[16px] max-w-[560px] mt-4.5 leading-[1.6] load-in" style={{ color: "var(--color-text-muted)" }}>
            Every service below is delivered by the same senior engineers, not routed between subcontractors. Jump to any discipline for the detail.
          </p>
        </div>
      </section>

      <section className="px-8 py-[100px]">
        <div className="max-w-[1240px] mx-auto">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl overflow-hidden border" style={{ background: "var(--color-border)", borderColor: "var(--color-border)" }}>
              {services.map((s) => (
                <a href={`#${s.slug}`} key={s.slug} className="group p-8 block" style={{ background: "var(--color-bg-primary)" }}>
                  <ServiceIcon icon={s.icon} />
                  <h3 className="text-[17px] mb-2.5">{s.title}</h3>
                  <p className="text-[14px] leading-[1.6] mb-4.5" style={{ color: "var(--color-text-muted)" }}>{s.short}</p>
                  <span className="text-[13px] font-medium inline-flex items-center gap-1.5" style={{ color: "var(--color-accent-cyan)" }}>
                    Jump to <ArrowRight size={14} />
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-8 pb-[80px]">
        <div className="max-w-[1240px] mx-auto">
          {services.map((s, i) => (
            <Reveal key={s.slug} className={`py-14 ${i < services.length - 1 ? "border-b" : ""}`} >
              <div id={s.slug} className="scroll-mt-24">
                <div className="flex items-baseline gap-4.5 mb-4.5 flex-wrap">
                  <ServiceIcon icon={s.icon} />
                  <h2><RevealText text={s.title} /></h2>
                </div>
                <p className="text-[15px] leading-[1.65] max-w-[680px] mb-5" style={{ color: "var(--color-text-muted)" }}>{s.detail}</p>
                <div>{s.tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-8 py-[100px]">
        <div className="max-w-[1240px] mx-auto">
          <Reveal>
            <div className="rounded-[20px] py-16 px-14 text-center border" style={{ background: "radial-gradient(ellipse at top, rgba(59,130,246,0.10), transparent 60%), var(--color-bg-secondary)", borderColor: "var(--color-border)" }}>
              <span className="eyebrow">Not sure which service fits?</span>
              <h2 className="text-[clamp(26px,3.6vw,38px)] mt-4 mb-4">Tell us the problem, not the solution.</h2>
              <p className="max-w-[480px] mx-auto mb-8 text-[15px]" style={{ color: "var(--color-text-muted)" }}>
                Most engagements combine two or three of the disciplines above. We&apos;ll help you figure out the right combination during discovery.
              </p>
              <Magnetic><Link href="/contact" className="btn btn-primary">Start a project</Link></Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
