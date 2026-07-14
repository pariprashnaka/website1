import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import { contactFaqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Nexora Systems. Send a brief and get real next steps within two business days.",
};

export default function ContactPage() {
  return (
    <>
      <section className="px-8 pt-[120px] pb-[72px] border-b" style={{ borderColor: "var(--color-border)" }}>
        <div className="max-w-[1240px] mx-auto">
          <div className="mono text-[12px] mb-5 load-in" style={{ color: "var(--color-text-muted)" }}>
            <Link href="/" style={{ color: "var(--color-text-muted)" }}>Home</Link> / Contact
          </div>
          <span className="eyebrow load-in">Contact</span>
          <h1 className="text-[clamp(32px,4.6vw,52px)] leading-[1.1] max-w-[720px] mt-4 load-in">Tell us what you&apos;re building.</h1>
          <p className="text-[16px] max-w-[560px] mt-4.5 leading-[1.6] load-in" style={{ color: "var(--color-text-muted)" }}>
            Send a short brief below. We reply with real next steps within two business days — no discovery call required to get a first read.
          </p>
        </div>
      </section>

      <section className="px-8 py-[100px]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-14">
          <Reveal><ContactForm /></Reveal>

          <div>
            <Reveal className="panel p-7 mb-4">
              <h5 className="mono text-[11px] uppercase tracking-[.06em] mb-2.5" style={{ color: "var(--color-accent-cyan)" }}>Email</h5>
              <a href="mailto:hello@nexorasystems.com" className="text-[14px]" style={{ color: "var(--color-text-soft)" }}>hello@nexorasystems.com</a>
            </Reveal>
            <Reveal className="panel p-7 mb-4">
              <h5 className="mono text-[11px] uppercase tracking-[.06em] mb-2.5" style={{ color: "var(--color-accent-cyan)" }}>Phone / WhatsApp</h5>
              <a href="tel:+10000000000" className="text-[14px]" style={{ color: "var(--color-text-soft)" }}>+1 (000) 000-0000</a>
            </Reveal>
            <Reveal className="panel p-7 mb-4">
              <h5 className="mono text-[11px] uppercase tracking-[.06em] mb-2.5" style={{ color: "var(--color-accent-cyan)" }}>Business hours</h5>
              <p className="text-[14px] leading-[1.7]" style={{ color: "var(--color-text-soft)" }}>
                Monday – Friday, 9:00 AM – 6:00 PM (local time). Replies to project briefs go out within two business days.
              </p>
            </Reveal>
            <Reveal className="panel p-7">
              <h5 className="mono text-[11px] uppercase tracking-[.06em] mb-2.5" style={{ color: "var(--color-accent-cyan)" }}>Elsewhere</h5>
              <div className="flex gap-4 mt-1">
                <a href="#" className="text-[14px]" style={{ color: "var(--color-text-soft)" }}>LinkedIn</a>
                <a href="#" className="text-[14px]" style={{ color: "var(--color-text-soft)" }}>GitHub</a>
                <a href="#" className="text-[14px]" style={{ color: "var(--color-text-soft)" }}>X</a>
              </div>
            </Reveal>
          </div>
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
