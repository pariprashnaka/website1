import V2Nav from "@/components/v2/V2Nav";
import V2HeroCanvas from "@/components/v2/V2HeroCanvas";
import V2Reveal from "@/components/v2/V2Reveal";

export const metadata = {
  title: "SystemFriendly Labs — Operations, Reimagined",
  description:
    "We engineer the operating layer for the industries that keep the world running — manufacturing, pharma, healthcare, and whatever comes next.",
};

export default function V2Page() {
  return (
    <main className="v2-root">
      <V2Reveal />
      <V2Nav />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="v2-hero">
        <div className="v2-hero-bg"><V2HeroCanvas /></div>
        <div className="v2-hero-scrim" />
        <div className="v2-hero-content">
          <p className="v2-eyebrow">SystemFriendly Labs</p>
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

        <div className="v2-graph-wrap">
          <svg viewBox="0 0 640 260" id="v2-graph-svg">
            <g>
              <line className="v2-graph-edge" x1="320" y1="130" x2="150" y2="60" />
              <line className="v2-graph-edge" x1="320" y1="130" x2="300" y2="40" />
              <line className="v2-graph-edge" x1="320" y1="130" x2="470" y2="50" />
              <line className="v2-graph-edge" x1="320" y1="130" x2="520" y2="150" />
              <line className="v2-graph-edge" x1="320" y1="130" x2="120" y2="190" />
              <line className="v2-graph-edge" x1="320" y1="130" x2="260" y2="225" />
              <line className="v2-graph-edge" x1="320" y1="130" x2="430" y2="210" />
            </g>

            <circle className="v2-graph-node core" cx="320" cy="130" r="9" />
            <text className="v2-graph-label" x="320" y="105" textAnchor="middle">PLATFORM</text>

            <circle className="v2-graph-node live" cx="150" cy="60" r="6" />
            <text className="v2-graph-label" x="150" y="42" textAnchor="middle">Manufacturing</text>
            <circle className="v2-graph-node live" cx="300" cy="40" r="6" />
            <text className="v2-graph-label" x="300" y="22" textAnchor="middle">Pharma</text>
            <circle className="v2-graph-node live" cx="470" cy="50" r="6" />
            <text className="v2-graph-label" x="470" y="32" textAnchor="middle">Healthcare</text>
            <circle className="v2-graph-node live" cx="520" cy="150" r="6" />
            <text className="v2-graph-label" x="540" y="153" textAnchor="start">Retail</text>

            <circle className="v2-graph-node future" cx="120" cy="190" r="5" />
            <text className="v2-graph-label future" x="120" y="212" textAnchor="middle">?</text>
            <circle className="v2-graph-node future" cx="260" cy="225" r="5" />
            <text className="v2-graph-label future" x="260" y="247" textAnchor="middle">?</text>
            <circle className="v2-graph-node future" cx="430" cy="210" r="5" />
            <text className="v2-graph-label future" x="430" y="232" textAnchor="middle">?</text>
          </svg>
        </div>
      </section>

      {/* ── MANUFACTURING ────────────────────────────────────── */}
      <section className="v2-chapter v2-chapter--video" id="invChapter">
        <video
          className="v2-chapter-video"
          src="/videos/inventory.mp4"
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
          src="/videos/lims.mp4"
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
      <section className="v2-chapter" id="hosChapter">
        <p className="v2-chapter-kicker">Healthcare &amp; Hospitals</p>
        <h2 className="v2-chapter-h2">Every bed,<br /><em>visible.</em></h2>
        <p className="v2-lead">
          SF Pulse gives wards, supply rooms, and compliance teams one shared
          picture — updated the moment anything changes.
        </p>
        <div className="v2-industry-visual">
          <svg viewBox="0 0 200 160">
            <circle className="v2-pulse-ring r1" cx="100" cy="80" r="30" />
            <circle className="v2-pulse-ring r2" cx="100" cy="80" r="30" />
            <circle className="v2-pulse-ring r3" cx="100" cy="80" r="30" />
            <circle className="v2-pulse-core" cx="100" cy="80" r="7" />
          </svg>
        </div>
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
        <div className="v2-footer-mini">
          <div className="v2-footer-links">
            <a href="/products">Platform</a>
            <a href="/products">Industries</a>
            <a href="/case-studies">Case Studies</a>
            <a href="/about">Company</a>
            <a href="/contact">Contact</a>
          </div>
          <span>© {new Date().getFullYear()} SystemFriendly Labs. All rights reserved.</span>
        </div>
      </section>
    </main>
  );
}
