import Link from "next/link";
import { ArrowRight } from "lucide-react";
import NetworkDiagram from "@/components/NetworkDiagram";
import Hero3DScene from "@/components/Hero3DScene";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import Counter from "@/components/Counter";
import ServiceIcon from "@/components/ServiceIcon";
import Faq from "@/components/Faq";
import Magnetic from "@/components/Magnetic";
import BookCallButton from "@/components/BookCallButton";
import {
  services, industries, caseStudies, homeFaqs, process, stack, whyUs,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-8" style={{ paddingTop: "clamp(80px, 11vw, 130px)", paddingBottom: "clamp(64px, 9vw, 110px)", background: "var(--color-bg-secondary)" }}>
        <div className="absolute inset-0 z-0" style={{ background: "var(--color-bg-secondary)" }}>
          <Hero3DScene />
        </div>
        <div
          className="absolute pointer-events-none z-0"
          style={{ top: -220, left: -180, width: 640, height: 640, background: "radial-gradient(circle, rgba(124,58,237,0.09), transparent 65%)" }}
        />
        <div className="max-w-[1240px] mx-auto relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-[2] hero-text-col">
            <span className="eyebrow load-in" style={{ color: "#00D4FF" }}>Enterprise Software Engineering</span>
            <h1 className="text-[clamp(38px,5.4vw,64px)] leading-[1.06] my-5" style={{ color: "#F8FAFC" }}>
              We build the software your{" "}
              <span style={{ background: "linear-gradient(100deg,#3B82F6,#00D4FF)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                growth
              </span>{" "}
              depends on.
            </h1>
            <p className="text-[17px] leading-[1.65] max-w-[520px] mb-9" style={{ color: "#CBD5E1" }}>
              SystemFriendly Labs designs and ships production-grade SaaS, ERP, and AI platforms for teams who can&apos;t afford to get their infrastructure wrong — from first architecture doc to the system running at scale.
            </p>
            <div className="flex gap-3.5 flex-wrap mb-14">
              <Magnetic><Link href="/contact" className="btn btn-primary">Start a project</Link></Magnetic>
              <Magnetic><Link href="/case-studies" className="btn btn-ghost" style={{ borderColor: "rgba(255,255,255,0.25)", color: "#F8FAFC" }}>View our work</Link></Magnetic>
            </div>
            <div className="flex gap-8 flex-wrap mono text-[12px]" style={{ color: "#94A3B8" }}>
              <span>Systems in production: <b style={{ color: "#F8FAFC", fontWeight: 500 }}>6</b></span>
              <span>Avg. engagement: <b style={{ color: "#F8FAFC", fontWeight: 500 }}>4–9 months</b> (scope-dependent)</span>
            </div>
          </div>
          <div className="relative z-[2]">
            <NetworkDiagram />
          </div>
        </div>
      </section>


      {/* STATS */}
      <section className="section-pad px-8" style={{ paddingTop: "clamp(40px, 5vw, 64px)", paddingBottom: "clamp(40px, 5vw, 64px)" }}>
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

      {/* CODE SHOWCASE */}
      <section className="px-8 relative overflow-hidden" style={{ paddingTop: "clamp(56px, 7vw, 88px)", paddingBottom: "clamp(56px, 7vw, 88px)" }}>
        <div className="absolute pointer-events-none" style={{ top: -160, left: -140, width: 480, height: 480, background: "radial-gradient(circle, rgba(124,58,237,0.06), transparent 65%)" }} />
        <div className="max-w-[1240px] mx-auto relative grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="mono text-[11px] mb-3" style={{ color: "var(--color-accent-purple)" }}>{"// CODE QUALITY"}</div>
            <h2 className="text-[clamp(26px,3vw,36px)] mb-4 leading-[1.2]">Code we&apos;d put our name on.</h2>
            <p className="text-[15.5px] leading-[1.7] max-w-[480px]" style={{ color: "var(--color-text-muted)" }}>
              No magic numbers, no silent failures. Every retry, timeout, and edge case is deliberate — because the code we ship today is the code we&apos;re still maintaining two years from now.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden" style={{ background: "var(--color-card)", border: "1px solid var(--color-border)", boxShadow: "0 20px 50px -20px rgba(15,23,42,0.25)" }}>
              <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid var(--color-border)" }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#EF4444" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#F59E0B" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22C55E" }} />
                <span className="mono text-[12px] ml-2" style={{ color: "var(--color-text-muted)" }}>withRetry.ts</span>
              </div>
              <pre className="mono text-[13px] leading-[1.8] p-6 overflow-x-auto" style={{ margin: 0 }}>
                <code>
                  <span style={{ color: "var(--color-text-muted)" }}>{"// Retries a request with exponential backoff\n"}</span>
                  <span style={{ color: "var(--color-accent-purple)" }}>async function</span>
                  <span style={{ color: "var(--color-text-white)" }}> withRetry</span>
                  <span style={{ color: "var(--color-text-soft)" }}>{"<T>(\n  "}</span>
                  <span style={{ color: "var(--color-text-soft)" }}>fn: </span>
                  <span style={{ color: "var(--color-accent-blue)" }}>{"() => Promise<T>"}</span>
                  <span style={{ color: "var(--color-text-soft)" }}>{",\n  { "}</span>
                  <span style={{ color: "var(--color-text-soft)" }}>retries = </span>
                  <span style={{ color: "var(--color-warning)" }}>3</span>
                  <span style={{ color: "var(--color-text-soft)" }}>{", baseDelayMs = "}</span>
                  <span style={{ color: "var(--color-warning)" }}>300</span>
                  <span style={{ color: "var(--color-text-soft)" }}>{" }: RetryOptions = {}\n): "}</span>
                  <span style={{ color: "var(--color-accent-blue)" }}>{"Promise<T>"}</span>
                  <span style={{ color: "var(--color-text-soft)" }}>{" {\n  "}</span>
                  <span style={{ color: "var(--color-accent-purple)" }}>let</span>
                  <span style={{ color: "var(--color-text-soft)" }}> lastError: </span>
                  <span style={{ color: "var(--color-accent-blue)" }}>unknown</span>
                  <span style={{ color: "var(--color-text-soft)" }}>{";\n\n  "}</span>
                  <span style={{ color: "var(--color-accent-purple)" }}>for</span>
                  <span style={{ color: "var(--color-text-soft)" }}> (</span>
                  <span style={{ color: "var(--color-accent-purple)" }}>let</span>
                  <span style={{ color: "var(--color-text-soft)" }}> attempt = </span>
                  <span style={{ color: "var(--color-warning)" }}>0</span>
                  <span style={{ color: "var(--color-text-soft)" }}>{"; attempt <= retries; attempt++) {\n    "}</span>
                  <span style={{ color: "var(--color-accent-purple)" }}>try</span>
                  <span style={{ color: "var(--color-text-soft)" }}>{" {\n      "}</span>
                  <span style={{ color: "var(--color-accent-purple)" }}>return</span>
                  <span style={{ color: "var(--color-text-soft)" }}> </span>
                  <span style={{ color: "var(--color-accent-purple)" }}>await</span>
                  <span style={{ color: "var(--color-text-soft)" }}>{" fn();\n    } "}</span>
                  <span style={{ color: "var(--color-accent-purple)" }}>catch</span>
                  <span style={{ color: "var(--color-text-soft)" }}>{" (err) {\n      lastError = err;\n      "}</span>
                  <span style={{ color: "var(--color-accent-purple)" }}>if</span>
                  <span style={{ color: "var(--color-text-soft)" }}>{" (attempt === retries) "}</span>
                  <span style={{ color: "var(--color-accent-purple)" }}>break</span>
                  <span style={{ color: "var(--color-text-soft)" }}>{";\n\n      "}</span>
                  <span style={{ color: "var(--color-accent-purple)" }}>const</span>
                  <span style={{ color: "var(--color-text-soft)" }}> delay = baseDelayMs * </span>
                  <span style={{ color: "var(--color-warning)" }}>2</span>
                  <span style={{ color: "var(--color-text-soft)" }}> ** attempt;{"\n      "}</span>
                  <span style={{ color: "var(--color-accent-purple)" }}>await</span>
                  <span style={{ color: "var(--color-text-soft)" }}>{" new "}</span>
                  <span style={{ color: "var(--color-text-white)" }}>Promise</span>
                  <span style={{ color: "var(--color-text-soft)" }}>{"((r) => setTimeout(r, delay));\n    }\n  }\n\n  "}</span>
                  <span style={{ color: "var(--color-accent-purple)" }}>throw</span>
                  <span style={{ color: "var(--color-text-soft)" }}>{" lastError;\n}"}</span>
                </code>
              </pre>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-8 relative overflow-hidden" style={{ paddingTop: "clamp(56px, 7vw, 88px)", paddingBottom: "clamp(56px, 7vw, 88px)" }}>
        <div className="absolute pointer-events-none" style={{ top: -100, right: -150, width: 500, height: 500, background: "radial-gradient(circle, rgba(37,99,235,0.07), transparent 65%)" }} />
        <div className="max-w-[1240px] mx-auto">
          <SectionHead num="01 — SERVICES" title="Nine disciplines. One accountable team." desc="We don't hand your project between departments. The same senior engineers who scope the architecture are the ones who ship and maintain it." />
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {services.map((s, i) => {
                const accent = ["var(--color-accent-blue)", "var(--color-accent-purple)", "var(--color-warning)"][i % 3];
                const iconHex = ["#2563EB", "#7C3AED", "#F59E0B"][i % 3];
                return (
                  <Link
                    href={`/services#${s.slug}`}
                    key={s.slug}
                    className="group p-8 block rounded-2xl relative overflow-hidden transition-all hover:-translate-y-1.5"
                    style={{ background: "var(--color-card)", border: "1px solid var(--color-border)", boxShadow: "0 12px 32px -18px rgba(15,23,42,0.18)" }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: accent }} />
                    <ServiceIcon icon={s.icon} accent={iconHex} />
                    <h3 className="text-[17px] mb-2.5">{s.title}</h3>
                    <p className="text-[14px] leading-[1.6] mb-4.5" style={{ color: "var(--color-text-muted)" }}>{s.short}</p>
                    <span className="text-[13px] font-medium inline-flex items-center gap-1.5" style={{ color: accent }}>
                      Explore <ArrowRight size={14} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-8 border-t border-b" style={{ background: "var(--color-bg-secondary)", borderColor: "var(--color-border)", paddingTop: "clamp(56px, 7vw, 88px)", paddingBottom: "clamp(56px, 7vw, 88px)" }}>
        <div className="max-w-[1240px] mx-auto">
          <SectionHead num="02 — PROCESS" title="How an engagement actually runs." />
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-5 rounded-2xl overflow-hidden" style={{ boxShadow: "0 16px 40px -20px rgba(15,23,42,0.2)", border: "1px solid var(--color-border)" }}>
              {process.map((p, i) => {
                const accent = ["var(--color-accent-blue)", "var(--color-accent-purple)", "var(--color-warning)"][i % 3];
                return (
                  <div key={p.idx} className="relative p-7" style={{ background: "var(--color-card)", borderRight: i < process.length - 1 ? "1px solid var(--color-border)" : "none" }}>
                    <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: accent }} />
                    <div
                      className="w-[30px] h-[30px] rounded-lg flex items-center justify-center mono text-[12px] font-bold mb-4"
                      style={{ background: accent, color: "white" }}
                    >
                      {p.idx}
                    </div>
                    <h4 className="text-[15px] mb-2">{p.title}</h4>
                    <p className="text-[13px] leading-[1.55]" style={{ color: "var(--color-text-muted)" }}>{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="px-8 relative overflow-hidden" style={{ paddingTop: "clamp(40px, 5vw, 64px)", paddingBottom: "clamp(40px, 5vw, 64px)" }}>
        <div className="absolute pointer-events-none" style={{ bottom: -150, left: -120, width: 450, height: 450, background: "radial-gradient(circle, rgba(245,158,11,0.06), transparent 65%)" }} />
        <div className="max-w-[1240px] mx-auto">
          <SectionHead num="03 — TECHNOLOGY" title="Stack decisions we're willing to defend." desc="We choose technology for maintainability under your future team, not novelty on our resume." />
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
              {stack.map((g, i) => {
                const accent = ["var(--color-accent-blue)", "var(--color-accent-purple)", "var(--color-warning)"][i % 3];
                return (
                  <div key={g.group}>
                    <h5 className="mono text-[11px] uppercase tracking-[.06em] mb-3.5 font-semibold" style={{ color: accent }}>{g.group}</h5>
                    {g.items.map((it) => (
                      <span
                        key={it}
                        className="chip"
                        style={{ borderColor: `color-mix(in srgb, ${accent} 35%, var(--color-border))` }}
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="px-8 border-t border-b" style={{ background: "var(--color-bg-secondary)", borderColor: "var(--color-border)", paddingTop: "clamp(56px, 7vw, 88px)", paddingBottom: "clamp(56px, 7vw, 88px)" }}>
        <div className="max-w-[1240px] mx-auto">
          <SectionHead num="04 — INDUSTRIES" title="Domain context, not generic delivery." />
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {industries.map((ind, i) => {
                const accent = ["var(--color-accent-blue)", "var(--color-accent-purple)", "var(--color-warning)"][i % 3];
                return (
                  <div
                    key={ind.title}
                    className="relative overflow-hidden p-6.5 rounded-xl transition-all hover:-translate-y-1.5"
                    style={{ background: "var(--color-card)", border: "1px solid var(--color-border)", boxShadow: "0 10px 28px -16px rgba(15,23,42,0.16)" }}
                  >
                    <div className="absolute top-0 left-0 w-[3px] h-full" style={{ background: accent }} />
                    <h4 className="text-[15.5px] mb-1.5">{ind.title}</h4>
                    <p className="text-[13px]" style={{ color: "var(--color-text-muted)" }}>{ind.desc}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="px-8 relative overflow-hidden" style={{ paddingTop: "clamp(64px, 9vw, 110px)", paddingBottom: "clamp(64px, 9vw, 110px)" }}>
        <div className="absolute pointer-events-none" style={{ top: -180, right: -140, width: 550, height: 550, background: "radial-gradient(circle, rgba(124,58,237,0.08), transparent 65%)" }} />
        <div className="max-w-[1240px] mx-auto">
          <SectionHead num="05 — CASE STUDIES" title="A real engagement, start to finish." desc="We're a young company — this is a genuine completed build, not an illustrative scenario. More will be added as they complete." />
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
      <section className="px-8 border-t border-b" style={{ background: "var(--color-bg-secondary)", borderColor: "var(--color-border)", paddingTop: "clamp(56px, 7vw, 88px)", paddingBottom: "clamp(56px, 7vw, 88px)" }}>
        <div className="max-w-[1240px] mx-auto">
          <SectionHead num="06 — WHY US" title="What you're actually paying for." />
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

      {/* FAQ */}
      <section className="px-8 max-w-[840px] mx-auto relative overflow-hidden" style={{ paddingTop: "clamp(56px, 7vw, 88px)", paddingBottom: "clamp(56px, 7vw, 88px)" }}>
        <div className="absolute pointer-events-none" style={{ top: -120, left: "50%", transform: "translateX(-50%)", width: 500, height: 400, background: "radial-gradient(circle, rgba(37,99,235,0.06), transparent 65%)" }} />
        <SectionHead num="07 — FAQ" title="Common questions." />
        <Reveal><Faq items={homeFaqs.map((f) => ({ q: f.q, a: f.a }))} /></Reveal>
      </section>

      {/* CTA */}
      <section className="px-8" style={{ paddingTop: "clamp(64px, 9vw, 110px)", paddingBottom: "clamp(64px, 9vw, 110px)" }}>
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
    <Reveal className="max-w-[640px] mb-[clamp(32px,5vw,56px)]">
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
