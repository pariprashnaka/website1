import type { Metadata } from "next";
import V2ContactForm from "@/components/v2/V2ContactForm";
import V2HeroCanvas from "@/components/v2/V2HeroCanvas";
import V2Reveal from "@/components/v2/V2Reveal";

export const metadata: Metadata = {
  title: "Contact — SystemFriendly Labs",
  description: "Tell SystemFriendly Labs about your operation. We reply within two business days with real next steps.",
  alternates: { canonical: "/contact" },
};

const STEPS = [
  ["01", "You tell us the problem", "A few lines is enough. No forms to fill beyond this one."],
  ["02", "We reply with substance", "Within two business days, from the people who would build it."],
  ["03", "We tell you honestly", "If we can help, you get a plan. If not, we say so."],
];

export default function V2Contact() {
  return (
    <main>
      <V2Reveal />
      <section className="v2-contact-hero">
        <V2HeroCanvas />
        <div className="v2-contact-inner">
          <p className="v2-chapter-kicker">Contact</p>
          <h1 className="v2-page-h1">Let&rsquo;s build<br /><em>what&rsquo;s next.</em></h1>
          <p className="v2-page-sub">Describe the problem. We&rsquo;ll tell you honestly if we can help.</p>
        </div>
      </section>

      <section className="v2-contact-grid">
        <aside className="v2-contact-side">
          <div className="v2-contact-card">
            <span>Email</span>
            <a href="mailto:info@systemfriendly.com">info@systemfriendly.com</a>
          </div>
          <ol className="v2-contact-steps">
            {STEPS.map(([n, t, d]) => (
              <li key={n}><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div></li>
            ))}
          </ol>
          <div className="v2-contact-social">
            <a href="https://linkedin.com/in/systemfriendly-labs-1199a9423" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://instagram.com/systemfriendlylabs" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://x.com/SystemFriendly" target="_blank" rel="noopener noreferrer">X</a>
          </div>
        </aside>
        <V2ContactForm />
      </section>
    </main>
  );
}
