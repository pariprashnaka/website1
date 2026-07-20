import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real engagements, real problems solved — starting with a seven-café chain that went from running blind to fully data-driven.",
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
          <h1 className="text-[clamp(32px,4.6vw,52px)] leading-[1.1] max-w-[760px] mt-4 load-in">Real engagements. Real problems solved.</h1>
          <p className="text-[16px] max-w-[600px] mt-4.5 leading-[1.6] load-in" style={{ color: "var(--color-text-muted)" }}>
            We&apos;re a young company, so this list is short by design — every case study here is a genuine engagement, not an illustrative scenario. More will be added as they complete.
          </p>
        </div>
      </section>

      <section className="px-8 py-[100px]">
        <div className="max-w-[1240px] mx-auto">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {caseStudies.map((c) => (
                <Link
                  href={`/case-studies/${c.slug}`}
                  key={c.slug}
                  className="border rounded-2xl p-6 flex flex-col relative overflow-hidden transition-all hover:-translate-y-1.5"
                  style={{ borderColor: "var(--color-border)", background: "var(--color-card)", boxShadow: "0 14px 34px -18px rgba(15,23,42,0.18)" }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "var(--color-accent-purple)" }} />
                  <div className="flex items-center gap-2.5 mb-4 flex-wrap">
                    <span className="mono text-[11px] uppercase tracking-[.06em] px-2.5 py-1 rounded-md" style={{ background: "rgba(124,58,237,0.1)", color: "var(--color-accent-purple)" }}>{c.industry}</span>
                  </div>
                  <h3 className="text-[18px] mb-3 leading-[1.3]">{c.title}</h3>
                  <p className="text-[13.5px] leading-[1.6] mb-5 flex-1" style={{ color: "var(--color-text-muted)" }}>{c.summary}</p>
                  <span className="mono text-[13px] font-medium" style={{ color: "var(--color-accent-cyan)" }}>Read the full case study →</span>
                </Link>
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
