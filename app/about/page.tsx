import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import Magnetic from "@/components/Magnetic";
import { values, timeline } from "@/lib/content";

export const metadata: Metadata = {
  title: "Company",
  description: "Why Nexora Systems exists: a senior-only engineering team that owns projects from architecture to production, with no handoffs.",
};

export default function AboutPage() {
  return (
    <>
      <section className="px-8 pt-[120px] pb-[72px] border-b" style={{ borderColor: "var(--color-border)" }}>
        <div className="max-w-[1240px] mx-auto">
          <div className="mono text-[12px] mb-5 load-in" style={{ color: "var(--color-text-muted)" }}>
            <Link href="/" style={{ color: "var(--color-text-muted)" }}>Home</Link> / Company
          </div>
          <span className="eyebrow load-in">Company</span>
          <h1 className="text-[clamp(32px,4.6vw,52px)] leading-[1.1] max-w-[720px] mt-4 load-in">Small team. Senior engineers. No handoffs.</h1>
          <p className="text-[16px] max-w-[560px] mt-4.5 leading-[1.6] load-in" style={{ color: "var(--color-text-muted)" }}>
            Nexora Systems was built on a simple bet: most enterprise software fails not from bad ideas, but from the gap between the people who scope a system and the people who build it. We closed that gap by not having one.
          </p>
        </div>
      </section>

      <section className="px-8 py-[100px]">
        <div className="max-w-[1240px] mx-auto">
          <Reveal className="max-w-[640px] mb-14">
            <span className="section-num mono">{"// STORY"}</span>
            <h2 className="text-[clamp(28px,3.4vw,40px)] mt-4 leading-[1.15]"><RevealText text="Why we exist." /></h2>
            <p className="mt-3.5 text-[15.5px] leading-[1.6]" style={{ color: "var(--color-text-muted)" }}>
              We started Nexora after seeing the same failure pattern across enterprise software projects: a sales team scopes the work, a different team architects it, and a third, often outsourced, team builds it. By the time something breaks in production, nobody left in the room understands why it was built that way. We collapse that chain into one accountable team, from the first conversation to the system running years later.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-8 py-[100px]">
        <div className="max-w-[1240px] mx-auto">
          <Reveal className="max-w-[640px] mb-14">
            <span className="section-num mono">{"// VALUES"}</span>
            <h2 className="text-[clamp(28px,3.4vw,40px)] mt-4 leading-[1.15]"><RevealText text="What we won't compromise on." /></h2>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {values.map((v) => (
                <div key={v.title} className="p-6.5 border rounded-xl" style={{ borderColor: "var(--color-border)" }}>
                  <h4 className="text-[15px] mb-2">{v.title}</h4>
                  <p className="text-[13px] leading-[1.6]" style={{ color: "var(--color-text-muted)" }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-8 py-[100px] border-t border-b" style={{ background: "var(--color-bg-secondary)", borderColor: "var(--color-border)" }}>
        <div className="max-w-[1240px] mx-auto">
          <Reveal className="max-w-[640px] mb-14">
            <span className="section-num mono">{"// JOURNEY"}</span>
            <h2 className="text-[clamp(28px,3.4vw,40px)] mt-4 leading-[1.15]"><RevealText text="Where we've been." /></h2>
          </Reveal>
          <Reveal>
            <div className="relative pl-8">
              <div className="absolute left-[5px] top-1.5 bottom-1.5 w-px" style={{ background: "var(--color-border-strong)" }} />
              {timeline.map((t, i) => (
                <div key={t.date} className="relative" style={{ paddingBottom: i < timeline.length - 1 ? 40 : 0 }}>
                  <div className="absolute -left-8 top-1 w-[11px] h-[11px] rounded-full border-2" style={{ background: "var(--color-bg-primary)", borderColor: "var(--color-accent-cyan)" }} />
                  <span className="mono text-[12px] mb-1.5 block" style={{ color: "var(--color-accent-cyan)" }}>{t.date}</span>
                  <h4 className="text-[16px] mb-1.5">{t.title}</h4>
                  <p className="text-[13.5px] leading-[1.6] max-w-[520px]" style={{ color: "var(--color-text-muted)" }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="careers" className="px-8 py-[100px] scroll-mt-24">
        <div className="max-w-[1240px] mx-auto">
          <Reveal className="max-w-[640px] mb-6">
            <span className="section-num mono">{"// CAREERS"}</span>
            <h2 className="text-[clamp(28px,3.4vw,40px)] mt-4 leading-[1.15]"><RevealText text="We're not hiring at scale — but we're always listening." /></h2>
            <p className="mt-3.5 text-[15.5px] leading-[1.6]" style={{ color: "var(--color-text-muted)" }}>
              We stay deliberately small. If you&apos;re a senior engineer who wants to own systems end to end rather than a single sprint&apos;s worth of tickets, send us a note.
            </p>
          </Reveal>
          <Reveal><Magnetic><Link href="/contact" className="btn btn-ghost">Get in touch</Link></Magnetic></Reveal>
        </div>
      </section>

      <section className="px-8 py-[100px]">
        <div className="max-w-[1240px] mx-auto">
          <Reveal>
            <div className="rounded-[20px] py-16 px-14 text-center border" style={{ background: "radial-gradient(ellipse at top, rgba(59,130,246,0.10), transparent 60%), var(--color-bg-secondary)", borderColor: "var(--color-border)" }}>
              <span className="eyebrow">Work with us</span>
              <h2 className="text-[clamp(26px,3.6vw,38px)] mt-4 mb-4">Bring us a real problem.</h2>
              <p className="max-w-[480px] mx-auto mb-8 text-[15px]" style={{ color: "var(--color-text-muted)" }}>
                We&apos;d rather hear about the mess in your operations than a polished pitch. That&apos;s usually where the actual project is.
              </p>
              <Magnetic><Link href="/contact" className="btn btn-primary">Start a project</Link></Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
