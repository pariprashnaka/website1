import Link from "next/link";
import { ArrowRight } from "lucide-react";
import NetworkCanvas from "@/components/NetworkCanvas";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import Counter from "@/components/Counter";
import ServiceIcon from "@/components/ServiceIcon";
import Faq from "@/components/Faq";
import Magnetic from "@/components/Magnetic";
import BookCallButton from "@/components/BookCallButton";
import {
  services, industries, caseStudies, testimonials, homeFaqs, process, stack, whyUs,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-8 pt-[120px] pb-[100px]">
        <NetworkCanvas />
        <div
          className="absolute pointer-events-none z-0"
          style={{ top: -220, left: -180, width: 640, height: 640, background: "radial-gradient(circle, rgba(124,58,237,0.09), transparent 65%)" }}
        />
        <div className="max-w-[1240px] mx-auto relative">
          <div className="relative z-[2] max-w-[680px]">
            <span className="eyebrow load-in">Enterprise Software Engineering</span>
            <h1 className="text-[clamp(38px,5.4vw,64px)] leading-[1.06] my-5">
              We build the software your{" "}
              <span style={{ background: "linear-gradient(100deg,var(--color-accent-blue),var(--color-accent-cyan))", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                growth
              </span>{" "}
              depends on.
            </h1>
            <p className="text-[17px] leading-[1.65] max-w-[520px] mb-9" style={{ color: "var(--color-text-muted)" }}>
              SystemFriendly Labs designs and ships production-grade SaaS, ERP, and AI platforms for teams who can&apos;t afford to get their infrastructure wrong — from first architecture doc to the system running at scale.
            </p>
            <div className="flex gap-3.5 flex-wrap mb-14">
              <Magnetic><Link href="/contact" className="btn btn-primary">Start a project</Link></Magnetic>
              <Magnetic><Link href="/case-studies" className="btn btn-ghost">View our work</Link></Magnetic>
            </div>
            <div className="flex gap-8 flex-wrap mono text-[12px]" style={{ color: "var(--color-text-muted)" }}>
              <span><span className="status-dot" />Currently accepting <b style={{ color: "var(--color-text-white)", fontWeight: 500 }}>Q4 2026</b> engagements</span>
              <span>Systems in production: <b style={{ color: "var(--color-text-white)", fontWeight: 500 }}>6</b></span>
              <span>Avg. engagement: <b style={{ color: "var(--color-text-white)", fontWeight: 500 }}>4–9 months</b></span>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* STATS */}
      <section className="section-pad px-8 py-[100px]">
        <div className="max-w-[1240px] mx-auto">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-px rounded-xl overflow-hidden border" style={{ background: "var(--color-border)", borderColor: "var(--color-border)" }}>
              <StatCell target={6} unit="/6" label="Delivered systems still running in production today" first />
              <StatCell target={99.9} decimals={1} unit="%" label="Average measured uptime across live client platforms" />
              <StatCell target={9} unit="+" label="Core service lines, from SaaS builds to data engineering" />
              <StatCell target={0} unit="%" label="Outsourced engineering — every line reviewed in-house" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-8 py-[100px]">
        <div className="max-w-[1240px] mx-auto">
          <SectionHead num="// 01 — SERVICES" title="Nine disciplines. One accountable team." desc="We don't hand your project between departments. The same senior engineers who scope the architecture are the ones who ship and maintain it." />
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl overflow-hidden border" style={{ background: "var(--color-border)", borderColor: "var(--color-border)" }}>
              {services.map((s) => (
                <Link href={`/services#${s.slug}`} key={s.slug} className="group p-8 block transition-colors" style={{ background: "var(--color-bg-primary)" }}>
                  <ServiceIcon icon={s.icon} />
                  <h3 className="text-[17px] mb-2.5">{s.title}</h3>
                  <p className="text-[14px] leading-[1.6] mb-4.5" style={{ color: "var(--color-text-muted)" }}>{s.short}</p>
                  <span className="text-[13px] font-medium inline-flex items-center gap-1.5" style={{ color: "var(--color-accent-cyan)" }}>
                    Explore <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-8 py-[100px] border-t border-b" style={{ background: "var(--color-bg-secondary)", borderColor: "var(--color-border)" }}>
        <div className="max-w-[1240px] mx-auto">
          <SectionHead num="// 02 — PROCESS" title="How an engagement actually runs." />
          <Reveal>
            <div className="flex flex-col md:flex-row border rounded-2xl overflow-hidden" style={{ borderColor: "var(--color-border)" }}>
              {process.map((p, i) => (
                <div key={p.idx} className={`flex-1 p-7 ${i < process.length - 1 ? "md:border-r border-b md:border-b-0" : ""}`} style={{ borderColor: "var(--color-border)", background: "var(--color-bg-primary)" }}>
                  <span className="mono text-[12px] block mb-4" style={{ color: "var(--color-accent-blue)" }}>{p.idx}</span>
                  <h4 className="text-[15px] mb-2">{p.title}</h4>
                  <p className="text-[13px] leading-[1.55]" style={{ color: "var(--color-text-muted)" }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="px-8 py-[100px]">
        <div className="max-w-[1240px] mx-auto">
          <SectionHead num="// 03 — TECHNOLOGY" title="Stack decisions we're willing to defend." desc="We choose technology for maintainability under your future team, not novelty on our resume." />
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
              {stack.map((g) => (
                <div key={g.group}>
                  <h5 className="mono text-[11px] uppercase tracking-[.06em] mb-3.5" style={{ color: "var(--color-text-muted)" }}>{g.group}</h5>
                  {g.items.map((i) => <span key={i} className="chip">{i}</span>)}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="px-8 py-[100px] border-t border-b" style={{ background: "var(--color-bg-secondary)", borderColor: "var(--color-border)" }}>
        <div className="max-w-[1240px] mx-auto">
          <SectionHead num="// 04 — INDUSTRIES" title="Domain context, not generic delivery." />
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {industries.map((ind) => (
                <div key={ind.title} className="p-6.5 border rounded-xl transition-all hover:-translate-y-1" style={{ borderColor: "var(--color-border)", background: "var(--color-card)" }}>
                  <h4 className="text-[15.5px] mb-1.5">{ind.title}</h4>
                  <p className="text-[13px]" style={{ color: "var(--color-text-muted)" }}>{ind.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="px-8 py-[100px]">
        <div className="max-w-[1240px] mx-auto">
          <SectionHead num="// 05 — CASE STUDIES" title="A real engagement, start to finish." desc="We're a young company — this is a genuine completed build, not an illustrative scenario. More will be added as they complete." />
          <Reveal>
            {caseStudies.slice(0, 1).map((c) => (
              <Link
                href={`/case-studies/${c.slug}`}
                key={c.slug}
                className="block rounded-2xl border p-8 md:p-10 transition-all hover:-translate-y-1"
                style={{ borderColor: "var(--color-border)", background: "var(--color-card)" }}
              >
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="mono text-[11px] uppercase tracking-[.06em] px-2.5 py-1 rounded-md" style={{ background: "rgba(124,58,237,0.1)", color: "var(--color-accent-purple)" }}>{c.industry}</span>
                  <span className="mono text-[11px]" style={{ color: "var(--color-text-muted)" }}>{c.scale}</span>
                </div>
                <h3 className="text-[22px] md:text-[26px] mb-4 leading-[1.25]">{c.title}</h3>
                <p className="text-[14.5px] leading-[1.7] mb-6 max-w-[720px]" style={{ color: "var(--color-text-muted)" }}>{c.summary}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                  {c.results.slice(0, 3).map((r) => (
                    <div key={r.title} className="rounded-lg px-4 py-3" style={{ background: "rgba(0,212,255,0.05)", border: "1px solid rgba(0,212,255,0.2)" }}>
                      <div className="text-[13px] font-medium" style={{ color: "var(--color-text-white)" }}>{r.title}</div>
                    </div>
                  ))}
                </div>
                <span className="mono text-[13px] font-medium" style={{ color: "var(--color-accent-cyan)" }}>Read the full case study →</span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* WHY US */}
      <section className="px-8 py-[100px] border-t border-b" style={{ background: "var(--color-bg-secondary)", borderColor: "var(--color-border)" }}>
        <div className="max-w-[1240px] mx-auto">
          <SectionHead num="// 06 — WHY US" title="What you're actually paying for." />
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {whyUs.map((w) => (
                <div key={w.num} className="panel p-7">
                  <div className="mono text-[13px] mb-4.5" style={{ color: "var(--color-accent-cyan)" }}>{w.num}</div>
                  <h4 className="text-[15.5px] mb-2.5">{w.title}</h4>
                  <p className="text-[13.5px] leading-[1.6]" style={{ color: "var(--color-text-muted)" }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-8 py-[100px]">
        <div className="max-w-[1240px] mx-auto">
          <SectionHead num="// 07 — CLIENTS" title="In their words." />
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {testimonials.map((t) => (
                <div key={t.name + t.role} className="panel p-7">
                  <p className="text-[14.5px] leading-[1.65] mb-6" style={{ color: "var(--color-text-soft)" }}>&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-[38px] h-[38px] rounded-full border" style={{ background: "var(--color-bg-secondary)", borderColor: "var(--color-border)" }} />
                    <div>
                      <div className="text-[13.5px] font-medium" style={{ color: "var(--color-text-white)" }}>{t.name}</div>
                      <div className="text-[12px]" style={{ color: "var(--color-text-muted)" }}>{t.role}</div>
                    </div>
                  </div>
                  <div className="mono text-[10px] mt-4 opacity-60" style={{ color: "var(--color-text-muted)" }}>PENDING CLIENT APPROVAL</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-8 py-[100px] max-w-[840px] mx-auto">
        <SectionHead num="// 08 — FAQ" title="Common questions." />
        <Reveal><Faq items={homeFaqs.map((f) => ({ q: f.q, a: f.a }))} /></Reveal>
      </section>

      {/* CTA */}
      <section className="px-8 py-[100px]">
        <div className="max-w-[1240px] mx-auto">
          <Reveal>
            <div className="rounded-[20px] py-16 px-14 text-center border" style={{ background: "radial-gradient(ellipse at top, rgba(59,130,246,0.10), transparent 60%), var(--color-bg-secondary)", borderColor: "var(--color-border)" }}>
              <span className="eyebrow">Get started</span>
              <h2 className="text-[clamp(26px,3.6vw,38px)] mt-4 mb-4">Tell us what you&apos;re building.</h2>
              <p className="max-w-[480px] mx-auto mb-8 text-[15px]" style={{ color: "var(--color-text-muted)" }}>
                Send a short brief and we&apos;ll respond with next steps within two business days — no discovery call required to get a first read.
              </p>
              <div className="flex gap-3.5 justify-center flex-wrap">
                <Magnetic><Link href="/contact" className="btn btn-primary">Start a project</Link></Magnetic>
                <BookCallButton />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function SectionHead({ num, title, desc }: { num: string; title: string; desc?: string }) {
  return (
    <Reveal className="max-w-[640px] mb-14">
      <span className="section-num mono">{num}</span>
      <h2 className="text-[clamp(28px,3.4vw,40px)] mt-4 leading-[1.15]"><RevealText text={title} /></h2>
      {desc && <p className="mt-3.5 text-[15.5px] leading-[1.6]" style={{ color: "var(--color-text-muted)" }}>{desc}</p>}
    </Reveal>
  );
}

function StatCell({ target, decimals = 0, unit, label, first = false }: { target: number; decimals?: number; unit: string; label: string; first?: boolean }) {
  return (
    <div
      className="p-8 transition-colors hover:bg-[var(--color-card)]"
      style={{ background: first ? "radial-gradient(ellipse at top left, rgba(59,130,246,0.16), transparent 70%), var(--color-bg-primary)" : "var(--color-bg-primary)" }}
    >
      <div className="font-display text-[36px] font-bold flex items-baseline gap-0.5" style={{ color: "var(--color-text-white)" }}>
        <Counter target={target} decimals={decimals} />
        <span className="text-[20px]" style={{ color: "var(--color-accent-cyan)" }}>{unit}</span>
      </div>
      <div className="text-[13px] mt-2 leading-[1.5]" style={{ color: "var(--color-text-muted)" }}>{label}</div>
    </div>
  );
}
