import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Six production systems across fintech, logistics, retail, healthcare, government, and manufacturing — real problems, real builds.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="px-8 pt-[120px] pb-[72px] border-b" style={{ borderColor: "var(--color-border)" }}>
        <div className="max-w-[1240px] mx-auto">
          <div className="mono text-[12px] mb-5 load-in" style={{ color: "var(--color-text-muted)" }}>
            <Link href="/" style={{ color: "var(--color-text-muted)" }}>Home</Link> / Case Studies
          </div>
          <span className="eyebrow load-in">Case Studies</span>
          <h1 className="text-[clamp(32px,4.6vw,52px)] leading-[1.1] max-w-[720px] mt-4 load-in">Six systems. Six real problems solved.</h1>
          <p className="text-[16px] max-w-[560px] mt-4.5 leading-[1.6] load-in" style={{ color: "var(--color-text-muted)" }}>
            This is the complete list of engagements we&apos;ve shipped to date. Full public write-ups with metrics are being finalized with each client.
          </p>
        </div>
      </section>

      <section className="px-8 py-[100px]">
        <div className="max-w-[1240px] mx-auto">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {caseStudies.map((c) => (
                <div id={c.slug} key={c.slug} className="case-card scroll-mt-24 border rounded-2xl overflow-hidden flex flex-col transition-all hover:-translate-y-1" style={{ borderColor: "var(--color-border)", background: "var(--color-card)" }}>
                  <div className="case-image aspect-[16/10] border-b flex items-center justify-center mono text-[11px] tracking-[.05em]" style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)" }}>
                    IMAGE PLACEHOLDER
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="mono text-[11px] uppercase tracking-[.06em] mb-2.5" style={{ color: "var(--color-accent-purple)" }}>{c.industry}</span>
                    <h3 className="text-[17px] mb-3">{c.name}</h3>
                    <div className="text-[13px] mb-1.5 leading-[1.55]" style={{ color: "var(--color-text-muted)" }}><b style={{ color: "var(--color-text-soft)", fontWeight: 500 }}>Problem:</b> {c.problem}</div>
                    <div className="text-[13px] mb-1.5 leading-[1.55]" style={{ color: "var(--color-text-muted)" }}><b style={{ color: "var(--color-text-soft)", fontWeight: 500 }}>Solution:</b> {c.solution}</div>
                    <div className="text-[13px] mb-1.5 leading-[1.55]" style={{ color: "var(--color-text-muted)" }}><b style={{ color: "var(--color-text-soft)", fontWeight: 500 }}>Stack:</b> {c.stack}</div>
                    <div className="mt-auto pt-4 border-t mono text-[13px]" style={{ borderColor: "var(--color-border)", color: "var(--color-success)" }}>Impact: {c.impact}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-8 py-[100px]">
        <div className="max-w-[1240px] mx-auto">
          <Reveal>
            <div className="rounded-[20px] py-16 px-14 text-center border" style={{ background: "radial-gradient(ellipse at top, rgba(59,130,246,0.10), transparent 60%), var(--color-bg-secondary)", borderColor: "var(--color-border)" }}>
              <span className="eyebrow">Your project could be next</span>
              <h2 className="text-[clamp(26px,3.6vw,38px)] mt-4 mb-4">Tell us what you&apos;re building.</h2>
              <p className="max-w-[480px] mx-auto mb-8 text-[15px]" style={{ color: "var(--color-text-muted)" }}>
                We take on a limited number of engagements at a time so every one gets senior attention from start to finish.
              </p>
              <Magnetic><Link href="/contact" className="btn btn-primary">Start a project</Link></Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
