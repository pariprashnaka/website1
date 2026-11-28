import V2HeroCanvas from "@/components/v2/V2HeroCanvas";
import V2Reveal from "@/components/v2/V2Reveal";
import V2LazyVideo from "@/components/v2/V2LazyVideo";
import V2Feedback from "@/components/v2/V2Feedback";
import V2ServiceComposer from "@/components/v2/V2ServiceComposer";
import { services } from "@/lib/content";
import { v2Href } from "@/components/v2/v2-nav-data";
import { feedback } from "@/components/v2/v2-feedback";

export const metadata = {
  title: "SystemFriendly Labs — Operations, Reimagined",
  description:
    "We engineer the operating layer for the industries that keep the world running — manufacturing, pharma, healthcare, and whatever comes next.",
};

const COMPOSER_ORDER: [string, string][] = [
  ["cloud", "Cloud"], ["data", "Data"], ["saas", "SaaS"], ["erp", "ERP"], ["crm", "CRM"],
  ["automation", "Automation"], ["ai", "AI"], ["web", "Web"], ["mobile", "Mobile"],
];
const COMPOSER_ITEMS = COMPOSER_ORDER.map(([slug, label]) => {
  const s = services.find((x) => x.slug === slug)!;
  return { slug, label, title: s.title, short: s.short, href: v2Href(`/services/${slug}`) };
});

export default function V2Page() {
  return (
    <main>
      <V2Reveal />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="v2-hero">
        <div className="v2-hero-bg">
          <V2HeroCanvas />
          <video className="v2-hero-video" src="/videos/hero-trial.mp4" poster="/videos/hero-trial-poster.jpg" autoPlay muted loop playsInline preload="auto" aria-hidden="true" />
        </div>
        <div className="v2-hero-scrim" />
        <div className="v2-hero-content">
          <p className="v2-eyebrow">SystemFriendly <span className="v2-labs">Labs</span></p>
          <h1 className="v2-headline">
            <span className="v2-line">Operations,</span>
            <span className="v2-line"><em>reimagined.</em></span>
          </h1>
          <p className="v2-sub">
            We engineer the software underneath the industries that keep the
            world running — one platform, built to take on whatever comes next.
          </p>
          <a href="#invChapter" className="v2-cta-link">
            Explore the platform
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
        <div className="v2-scroll-cue" />
      </section>

      {/* ── MANUFACTURING ────────────────────────────────────── */}
      <section className="v2-chapter v2-chapter--video" id="invChapter">
        <V2LazyVideo className="v2-chapter-video" src="/videos/inventory-web.mp4" />
        <div className="v2-chapter-scrim" />
        <p className="v2-chapter-kicker">Manufacturing &amp; Distribution</p>
        <h2 className="v2-chapter-h2">Every shelf,<br /><em>accounted for.</em></h2>
        <p className="v2-lead v2-lead--flush">
          InventoryCloud tracks stock as it moves — not as it&rsquo;s remembered.
          Reorder points, batch traceability, and ERP sync, in real time.
        </p>
      </section>

      {/* ── PHARMA / LABS ────────────────────────────────────── */}
      <section className="v2-chapter v2-chapter--video" id="labChapter">
        <V2LazyVideo className="v2-chapter-video" src="/videos/lims-web.mp4" />
        <div className="v2-chapter-scrim" />
        <p className="v2-chapter-kicker">Pharma &amp; Life Sciences</p>
        <h2 className="v2-chapter-h2">Every sample,<br /><em>traceable.</em></h2>
        <p className="v2-lead v2-lead--flush">
          LabFlow LIMS carries every sample from intake to certificate —
          audit-ready, 21 CFR Part 11 compliant, by default.
        </p>
      </section>

      {/* ── HEALTHCARE ───────────────────────────────────────── */}
      <section className="v2-chapter v2-chapter--video" id="hosChapter">
        <V2LazyVideo className="v2-chapter-video" src="/videos/hms-web.mp4" />
        <div className="v2-chapter-scrim" />
        <p className="v2-chapter-kicker">Healthcare &amp; Hospitals</p>
        <h2 className="v2-chapter-h2">Every bed,<br /><em>visible.</em></h2>
        <p className="v2-lead v2-lead--flush">
          SFHMS gives wards, supply rooms, and compliance teams one shared
          picture — updated the moment anything changes.
        </p>
      </section>

      {/* ── PLATFORM ─────────────────────────────────────────── */}
      <section className="v2-chapter" id="platformChapter">
        <p className="v2-chapter-kicker">Build yours</p>
        <h2 className="v2-chapter-h2">
          Compose your system.<br /><em>See how it fits.</em>
        </h2>
        <p className="v2-lead">
          Four industries run on one platform. Pick the layers your business needs and see how they connect, and what we would build first.
        </p>

        <V2ServiceComposer items={COMPOSER_ITEMS} ctaHref={v2Href("/contact")} />
      </section>

      {/* ── PROOF ────────────────────────────────────────────── */}
      {feedback.length > 0 && (
        <section className="v2-chapter" id="proofChapter">
          <p className="v2-chapter-kicker">In their words</p>
          <V2Feedback />
        </section>
      )}

      {/* ── CLOSING CTA ──────────────────────────────────────── */}
      <section className="v2-chapter v2-cta-chapter" id="ctaChapter">
        <p className="v2-chapter-kicker">Let&rsquo;s talk</p>
        <h2 className="v2-chapter-h2">
          Ready to see what<br /><em>purpose-built</em> feels like?
        </h2>
        <a href="/contact" className="v2-cta-link">
          Book a 30-minute demo
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </section>
    </main>
  );
}
