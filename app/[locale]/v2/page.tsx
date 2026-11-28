import V2HeroCanvas from "@/components/v2/V2HeroCanvas";
import V2Reveal from "@/components/v2/V2Reveal";

export const metadata = {
  title: "SystemFriendly Labs — Operations, Reimagined",
  description:
    "We engineer the operating layer for the industries that keep the world running — manufacturing, pharma, healthcare, and whatever comes next.",
};

export default function V2Page() {
  return (
    <main>
      <V2Reveal />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="v2-hero">
        <div className="v2-hero-bg">
          <V2HeroCanvas />
          <video className="v2-hero-video" src="/videos/hero-trial.mp4" autoPlay muted loop playsInline preload="auto" aria-hidden="true" />
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
          <a href="#platformChapter" className="v2-cta-link">
            Explore the platform
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
        <div className="v2-scroll-cue" />
      </section>

      {/* ── PLATFORM ─────────────────────────────────────────── */}
      <section className="v2-chapter" id="platformChapter">
        <p className="v2-chapter-kicker">One architecture</p>
        <h2 className="v2-chapter-h2">
          Built once.<br /><em>Extended anywhere.</em>
        </h2>
        <p className="v2-lead">
          Four industries run on it today. The platform underneath was never
          built for just four.
        </p>

        <div className="v2-stack">
          <div className="v2-stack-row">
            <p className="v2-stack-label">Live today</p>
            <ul className="v2-stack-chips">
              <li>Manufacturing</li><li>Pharma &amp; Labs</li><li>Healthcare</li><li>Retail &amp; Cafés</li>
              <li className="next">Your industry</li>
            </ul>
          </div>
          <div className="v2-stack-core">
            <span className="v2-stack-core-tag">One platform</span>
            <ul>
              <li>Inventory &amp; batches</li><li>Billing &amp; GST</li><li>People &amp; payroll</li>
              <li>Orders &amp; dispatch</li><li>Reports &amp; dashboards</li><li>WhatsApp alerts</li>
            </ul>
          </div>
          <div className="v2-stack-row">
            <p className="v2-stack-label">Underneath</p>
            <ul className="v2-stack-chips quiet">
              <li>Multi-tenant data</li><li>Roles &amp; permissions</li><li>Audit trail</li><li>APIs &amp; integrations</li><li>Mobile apps</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── MANUFACTURING ────────────────────────────────────── */}
      <section className="v2-chapter v2-chapter--video" id="invChapter">
        <video
          className="v2-chapter-video"
          src="/videos/inventory-web.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
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
        <video
          className="v2-chapter-video"
          src="/videos/lims-web.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
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
        <video
          className="v2-chapter-video"
          src="/videos/hms-web.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="v2-chapter-scrim" />
        <p className="v2-chapter-kicker">Healthcare &amp; Hospitals</p>
        <h2 className="v2-chapter-h2">Every bed,<br /><em>visible.</em></h2>
        <p className="v2-lead v2-lead--flush">
          SF Pulse gives wards, supply rooms, and compliance teams one shared
          picture — updated the moment anything changes.
        </p>
      </section>

      {/* ── PROOF ────────────────────────────────────────────── */}
      <section className="v2-chapter" id="proofChapter">
        <p className="v2-chapter-kicker">In their words</p>
        <div className="v2-quote-mark">&ldquo;</div>
        <blockquote className="v2-proof-quote">
          InventoryCloud gave us visibility we didn&rsquo;t know was possible.
          We cut overstock by a third in the first quarter.
        </blockquote>
        <p className="v2-proof-author"><b>VP Operations</b> — Mid-size contract manufacturer</p>
      </section>

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
