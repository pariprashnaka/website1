import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Clock, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import { contactFaqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Nexora Systems. Send a brief and get real next steps within two business days.",
  alternates: { canonical: "/contact" },
};

const responseSteps = [
  { idx: "01", title: "You send a brief", desc: "A few lines on what you're building — no need for a polished spec." },
  { idx: "02", title: "We actually read it", desc: "A senior engineer reviews it, not a sales queue." },
  { idx: "03", title: "You get a straight answer", desc: "Fit, rough scope, and next steps — within two business days." },
];

export default function ContactPage() {
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const waHref = waNumber
    ? `https://wa.me/${waNumber}?text=${encodeURIComponent("Hi, I'd like to talk about a project.")}`
    : null;

  return (
    <>
      <section className="px-8 pt-[120px] pb-[56px] border-b" style={{ borderColor: "var(--color-border)" }}>
        <div className="max-w-[1240px] mx-auto">
          <div className="mono text-[12px] mb-5 load-in" style={{ color: "var(--color-text-muted)" }}>
            <Link href="/" style={{ color: "var(--color-text-muted)" }}>Home</Link> / Contact
          </div>
          <span className="eyebrow load-in">Contact</span>
          <h1 className="text-[clamp(32px,4.6vw,52px)] leading-[1.1] max-w-[720px] mt-4 load-in">Tell us what you&apos;re building.</h1>
          <p className="text-[16px] max-w-[560px] mt-4.5 leading-[1.6] load-in" style={{ color: "var(--color-text-muted)" }}>
            Send a short brief below. We reply with real next steps within two business days — no discovery call required to get a first read.
          </p>
          <div className="flex gap-8 flex-wrap mono text-[12px] mt-8 load-in" style={{ color: "var(--color-text-muted)" }}>
            <span><span className="status-dot" />Replies within <b style={{ color: "var(--color-text-white)", fontWeight: 500 }}>2 business days</b></span>
            <span>No sales call required to get a read</span>
            <span>Straight answers, even if it&apos;s &quot;not a fit&quot;</span>
          </div>
        </div>
      </section>

      <section className="px-8 py-[100px]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-14">
          <Reveal><ContactForm /></Reveal>

          <div className="flex flex-col gap-4" style={{ position: "sticky", top: 100, alignSelf: "flex-start" }}>

            {waHref && (
              <Reveal>
                <Link
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="panel p-6 flex items-center gap-4 group"
                  style={{ background: "linear-gradient(135deg, rgba(37,211,102,0.08), var(--color-card))", borderColor: "rgba(37,211,102,0.25)" }}
                >
                  <div className="w-[46px] h-[46px] rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(37,211,102,0.15)" }}>
                    <MessageCircle size={22} color="#25D366" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[14.5px] font-medium" style={{ color: "var(--color-text-white)" }}>Message us on WhatsApp</div>
                    <div className="text-[12.5px]" style={{ color: "var(--color-text-muted)" }}>Fastest way to reach us directly</div>
                  </div>
                  <ArrowRight size={16} color="var(--color-text-muted)" className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            )}

            <Reveal className="panel p-6 flex items-center gap-4">
              <div className="w-[46px] h-[46px] rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,212,255,0.10)" }}>
                <Mail size={20} color="var(--color-accent-cyan)" />
              </div>
              <div>
                <div className="mono text-[11px] uppercase tracking-[.06em] mb-1" style={{ color: "var(--color-text-muted)" }}>Email</div>
                <a href="mailto:hello@nexorasystems.com" className="text-[14.5px]" style={{ color: "var(--color-text-white)" }}>hello@nexorasystems.com</a>
              </div>
            </Reveal>

            <Reveal className="panel p-6 flex items-center gap-4">
              <div className="w-[46px] h-[46px] rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(59,130,246,0.10)" }}>
                <Clock size={20} color="var(--color-accent-blue)" />
              </div>
              <div>
                <div className="mono text-[11px] uppercase tracking-[.06em] mb-1" style={{ color: "var(--color-text-muted)" }}>Business hours</div>
                <p className="text-[13.5px] leading-[1.5]" style={{ color: "var(--color-text-soft)" }}>Mon – Fri, 9:00 AM – 6:00 PM</p>
              </div>
            </Reveal>

            <Reveal className="panel p-6">
              <div className="mono text-[11px] uppercase tracking-[.06em] mb-3.5" style={{ color: "var(--color-text-muted)" }}>Elsewhere</div>
              <div className="flex gap-3">
                <a href="#" aria-label="LinkedIn" className="w-[38px] h-[38px] rounded-lg flex items-center justify-center border transition-colors hover:border-cyan-400" style={{ borderColor: "var(--color-border)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-soft)" strokeWidth="1.8"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" aria-label="GitHub" className="w-[38px] h-[38px] rounded-lg flex items-center justify-center border transition-colors hover:border-cyan-400" style={{ borderColor: "var(--color-border)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-soft)" strokeWidth="1.8"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>
                </a>
                <a href="#" aria-label="X" className="w-[38px] h-[38px] rounded-lg flex items-center justify-center border transition-colors hover:border-cyan-400" style={{ borderColor: "var(--color-border)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-text-soft)"><path d="M18.9 2H22l-7.6 8.7L23.3 22H16.7l-5.2-6.8L5.5 22H2.4l8.2-9.3L1.5 2h6.8l4.7 6.2zm-1.2 18h1.7L7.4 4H5.6z"/></svg>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-8 py-[100px] border-t" style={{ borderColor: "var(--color-border)", background: "var(--color-bg-secondary)" }}>
        <div className="max-w-[1240px] mx-auto">
          <Reveal className="max-w-[640px] mb-14">
            <span className="section-num mono">{"// WHAT HAPPENS NEXT"}</span>
            <h2 className="text-[clamp(26px,3.2vw,34px)] mt-4 leading-[1.15]"><RevealText text="No black box. Here's exactly what happens." /></h2>
          </Reveal>
          <Reveal>
            <div className="flex flex-col md:flex-row border rounded-2xl overflow-hidden" style={{ borderColor: "var(--color-border)" }}>
              {responseSteps.map((s, i) => (
                <div key={s.idx} className={`flex-1 p-7 ${i < responseSteps.length - 1 ? "md:border-r border-b md:border-b-0" : ""}`} style={{ borderColor: "var(--color-border)", background: "var(--color-bg-primary)" }}>
                  <span className="mono text-[12px] block mb-4" style={{ color: "var(--color-accent-blue)" }}>{s.idx}</span>
                  <h4 className="text-[15px] mb-2">{s.title}</h4>
                  <p className="text-[13px] leading-[1.55]" style={{ color: "var(--color-text-muted)" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-8 py-[100px] max-w-[840px] mx-auto">
        <Reveal className="mb-14">
          <span className="section-num mono">{"// FAQ"}</span>
          <h2 className="text-[clamp(28px,3.4vw,40px)] mt-4 leading-[1.15]"><RevealText text="Before you send it over." /></h2>
        </Reveal>
        <Reveal><Faq items={contactFaqs} /></Reveal>
      </section>
    </>
  );
}
