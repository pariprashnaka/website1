import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import Magnetic from "@/components/Magnetic";
import NetworkCanvas from "@/components/NetworkCanvas";
import AboutVisualListen from "@/components/AboutVisualListen";
import AboutVisualResolve from "@/components/AboutVisualResolve";
import { values, timeline, products } from "@/lib/content";

export const metadata: Metadata = {
  title: "Company",
  description: "We're a small, senior team that builds what businesses actually need — and tells you honestly when they don't need us at all.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative px-8 pt-[130px] pb-[90px] border-b overflow-hidden" style={{ borderColor: "var(--color-border)" }}>
        <div className="absolute inset-0 opacity-[0.35] pointer-events-none">
          <NetworkCanvas />
        </div>
        <div className="relative max-w-[1240px] mx-auto">
          <div className="mono text-[12px] mb-6 load-in" style={{ color: "var(--color-text-muted)" }}>
            <Link href="/" style={{ color: "var(--color-text-muted)" }}>Home</Link> / Company
          </div>
          <span className="eyebrow load-in">Company</span>
          <h1 className="mt-5 max-w-[900px]" style={{ fontSize: "clamp(38px, 6vw, 68px)", lineHeight: 1.05 }}>
            <RevealText text="We build what you actually need." onMount />
            <br />
            <span style={{ color: "var(--color-text-muted)" }}><RevealText text="Nothing more theatrical than that." onMount /></span>
          </h1>
          <p className="text-[16px] max-w-[560px] mt-7 leading-[1.65] load-in" style={{ color: "var(--color-text-muted)" }}>
            Not a vendor waiting for a purchase order. A small group of people who genuinely like hard problems, take deadlines seriously, and would rather build you the right thing slowly than the wrong thing fast.
          </p>
        </div>
      </section>

      {/* ── MANIFESTO STRIP ── */}
      <section className="px-8 py-[130px] border-b" style={{ borderColor: "var(--color-border)", background: "radial-gradient(ellipse 900px 500px at 50% 0%, rgba(59,130,246,0.09), transparent 70%)" }}>
        <div className="max-w-[980px] mx-auto text-center">
          <Reveal>
            <p className="mono text-[12px] mb-8" style={{ color: "var(--color-accent-cyan)" }}>{"// WHAT THIS ACTUALLY IS"}</p>
          </Reveal>
          <h2 style={{ fontSize: "clamp(28px, 4.4vw, 52px)", lineHeight: 1.2, color: "var(--color-text-white)" }}>
            <RevealText text="We're not chasing deals. We're chasing problems worth solving properly — and we'd rather turn one down than build it half right." onMount />
          </h2>
        </div>
      </section>

      {/* ── BENTO GRID: who we are, values, the work we love ── */}
      <section className="px-8 py-[110px]">
        <div className="max-w-[1240px] mx-auto">
          <Reveal className="max-w-[680px] mb-12">
            <span className="section-num mono">{"// HOW THIS ACTUALLY WORKS"}</span>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <Reveal className="md:col-span-2 md:row-span-2">
              <div className="bento-card h-full rounded-xl border p-7 flex flex-col" style={{ borderColor: "var(--color-border)", background: "var(--color-card)" }}>
                <h3 className="text-[20px] mb-3 leading-[1.3]">We show up as your team, not a vendor you&apos;re managing.</h3>
                <p className="text-[14px] leading-[1.65] mb-6" style={{ color: "var(--color-text-muted)" }}>
                  Most businesses that come to us aren&apos;t looking for a vendor. They&apos;re looking for someone who&apos;ll actually sit with the mess — the process held together by spreadsheets and good intentions, the idea that&apos;s been sitting in someone&apos;s head for a year because nobody could tell them if it was worth building.
                </p>
                <div className="mt-auto"><AboutVisualListen /></div>
              </div>
            </Reveal>

            {values.map((v) => (
              <Reveal key={v.title}>
                <div className="bento-card h-full rounded-xl border p-6" style={{ borderColor: "var(--color-border)", background: "var(--color-bg-secondary)" }}>
                  <h4 className="text-[14.5px] mb-2 leading-[1.35]">{v.title}</h4>
                  <p className="text-[12.5px] leading-[1.6]" style={{ color: "var(--color-text-muted)" }}>{v.desc}</p>
                </div>
              </Reveal>
            ))}

            <Reveal className="md:col-span-2">
              <div className="bento-card h-full rounded-xl border p-7" style={{ borderColor: "var(--color-border)", background: "var(--color-card)" }}>
                <h3 className="text-[18px] mb-3 leading-[1.3]">Give us the complicated problem. That&apos;s the fun part.</h3>
                <p className="text-[13.5px] leading-[1.6] mb-6" style={{ color: "var(--color-text-muted)" }}>
                  We&apos;re tech people, genuinely — the kind who like the moment a system&apos;s real shape finally becomes clear. A well-understood problem is more satisfying to solve than a big invoice ever is.
                </p>
                <AboutVisualResolve />
              </div>
            </Reveal>

            <Reveal className="md:col-span-2">
              <div className="bento-card h-full rounded-xl border p-7 flex flex-col justify-center" style={{ borderColor: "rgba(0,212,255,0.25)", background: "linear-gradient(135deg, rgba(0,212,255,0.06), var(--color-bg-secondary))" }}>
                <span className="mono text-[24px] leading-none mb-3" style={{ color: "var(--color-accent-cyan)" }}>&ldquo;</span>
                <p className="text-[16px] leading-[1.6] mb-4" style={{ color: "var(--color-text-white)" }}>
                  If what you actually need is simpler than a custom build, we&apos;ll tell you that too. We&apos;re still here next time you need us — that matters more to us than closing this one.
                </p>
                <span className="mono text-[11px]" style={{ color: "var(--color-text-muted)" }}>— how we actually approach every first conversation</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="px-8 py-[110px] border-t border-b" style={{ borderColor: "var(--color-border)", background: "var(--color-bg-secondary)" }}>
        <div className="max-w-[1240px] mx-auto">
          <Reveal className="max-w-[680px] mb-14">
            <span className="section-num mono">{"// WHAT WE'VE BUILT OURSELVES"}</span>
            <h2 className="text-[clamp(28px,3.4vw,40px)] mt-4 leading-[1.15]"><RevealText text="A few products of our own, offered honestly." /></h2>
            <p className="mt-3.5 text-[15.5px] leading-[1.6]" style={{ color: "var(--color-text-muted)" }}>
              Sometimes the problem we&apos;re solving for one client turns out to be a problem a lot of businesses have — so we built it properly, once. If one of these genuinely fits what you need, we&apos;ll say so upfront. If it doesn&apos;t, we&apos;ll say that too and build you the real thing instead.
            </p>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {products.map((p) => (
                <Link key={p.slug} href={`/products#${p.slug}`} className="bento-card rounded-xl border p-6 block" style={{ borderColor: "var(--color-border)", background: "var(--color-bg-primary)" }}>
                  <span className="mono text-[11px]" style={{ color: "var(--color-accent-cyan)" }}>{p.tag}</span>
                  <h4 className="text-[16px] mt-2.5 mb-2">{p.name}</h4>
                  <p className="text-[13.5px] leading-[1.6]" style={{ color: "var(--color-text-muted)" }}>{p.pitch}</p>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── JOURNEY — horizontal scroll strip ── */}
      <section className="py-[110px]">
        <div className="max-w-[1240px] mx-auto px-8">
          <Reveal className="max-w-[640px] mb-12">
            <span className="section-num mono">{"// JOURNEY"}</span>
            <h2 className="text-[clamp(28px,3.4vw,40px)] mt-4 leading-[1.15]"><RevealText text="Where we've been." /></h2>
          </Reveal>
        </div>
        <Reveal>
          <div className="scroll-strip flex gap-5 overflow-x-auto px-8 pb-4" style={{ scrollSnapType: "x mandatory" }}>
            <div className="flex-shrink-0 w-[24px] md:w-[calc((100vw-1240px)/2)]" />
            {timeline.map((t) => (
              <div
                key={t.date}
                className="flex-shrink-0 w-[300px] rounded-xl border p-7"
                style={{ borderColor: "var(--color-border)", background: "var(--color-card)", scrollSnapAlign: "start" }}
              >
                <span className="mono text-[12px] mb-4 block" style={{ color: "var(--color-accent-cyan)" }}>{t.date}</span>
                <h4 className="text-[17px] mb-2.5 leading-[1.3]">{t.title}</h4>
                <p className="text-[13.5px] leading-[1.6]" style={{ color: "var(--color-text-muted)" }}>{t.desc}</p>
              </div>
            ))}
            <div className="flex-shrink-0 w-[24px] md:w-[calc((100vw-1240px)/2)]" />
          </div>
        </Reveal>
      </section>

      {/* ── CLOSING: careers + CTA split panel ── */}
      <section className="px-8 pb-[110px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Reveal>
              <div id="careers" className="scroll-mt-24 h-full rounded-[20px] border p-10 flex flex-col justify-between" style={{ borderColor: "var(--color-border)", background: "var(--color-bg-secondary)" }}>
                <div>
                  <span className="section-num mono">{"// CAREERS"}</span>
                  <h3 className="text-[22px] mt-4 mb-3 leading-[1.25]">Not hiring at scale — but if this sounds like you, say hello.</h3>
                  <p className="text-[14px] leading-[1.6] mb-8" style={{ color: "var(--color-text-muted)" }}>
                    We stay deliberately small on purpose. If you&apos;d rather own a system end to end than pick tickets off a sprint board, send us a note.
                  </p>
                </div>
                <Magnetic><Link href="/contact" className="btn btn-ghost">Get in touch</Link></Magnetic>
              </div>
            </Reveal>

            <Reveal>
              <div className="h-full rounded-[20px] border p-10 flex flex-col justify-between text-center md:text-left" style={{ background: "radial-gradient(ellipse at top, rgba(59,130,246,0.14), transparent 65%), var(--color-bg-secondary)", borderColor: "var(--color-border)" }}>
                <div>
                  <span className="eyebrow">Work with us</span>
                  <h3 className="text-[22px] mt-4 mb-3 leading-[1.25]">Tell us what&apos;s actually broken.</h3>
                  <p className="text-[14px] leading-[1.6] mb-8" style={{ color: "var(--color-text-muted)" }}>
                    Not the polished version — the real one. That&apos;s usually where the actual project is.
                  </p>
                </div>
                <Magnetic><Link href="/contact" className="btn btn-primary">Start a project</Link></Magnetic>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
