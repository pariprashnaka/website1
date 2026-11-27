import V2Nav from "@/components/v2/V2Nav";
import V2Rail from "@/components/v2/V2Rail";
import V2HeroCanvas from "@/components/v2/V2HeroCanvas";
import V2ProductCanvas from "@/components/v2/V2ProductCanvas";

export const metadata = {
  title: "SystemFriendly Labs — Enterprise Software Redefined",
  description:
    "Inventory, compliance, and intelligence software built for the industries that keep the world running.",
};

export default function V2Page() {
  return (
    <main className="v2-root">
      <V2Nav />
      <V2Rail />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section id="ch-hero" className="v2-chapter v2-hero">
        <V2HeroCanvas />
        <div className="v2-hero-inner">
          <p className="v2-eyebrow">Enterprise Software</p>
          <h1 className="v2-hero-h1">
            Systems that work<br />
            <em>as hard as you do.</em>
          </h1>
          <p className="v2-hero-sub">
            Inventory control, lab intelligence, and compliance — built for
            manufacturing, pharma, and healthcare.
          </p>
          <div className="v2-hero-actions">
            <a href="#ch-products" className="v2-btn-primary">See our products</a>
            <a href="#ch-proof" className="v2-btn-ghost">View case studies</a>
          </div>
        </div>
        <div className="v2-scroll-hint">scroll</div>
      </section>

      {/* ── PROBLEM ──────────────────────────────────────────── */}
      <section id="ch-problem" className="v2-chapter v2-problem">
        <div className="v2-problem-inner">
          <p className="v2-eyebrow">Why SystemFriendly Labs</p>
          <h2 className="v2-section-h2">
            Your industry runs on systems<br />built for someone else.
          </h2>
          <div className="v2-problem-grid">
            <div className="v2-pstat">
              <span className="v2-pstat-num">73%</span>
              <span className="v2-pstat-label">of manufacturers report inventory blind spots costing &gt;$500K annually</span>
            </div>
            <div className="v2-pstat">
              <span className="v2-pstat-num">4×</span>
              <span className="v2-pstat-label">longer audit prep with generic ERP vs purpose-built LIMS</span>
            </div>
            <div className="v2-pstat">
              <span className="v2-pstat-num">60%</span>
              <span className="v2-pstat-label">of compliance failures trace back to data silos, not process gaps</span>
            </div>
          </div>
          <p className="v2-problem-body">
            Off-the-shelf software forces your team to adapt to the tool.
            We build the other way around — purpose-fit systems for
            industries where accuracy is non-negotiable.
          </p>
        </div>
      </section>

      {/* ── PRODUCTS ─────────────────────────────────────────── */}
      <section id="ch-products" className="v2-chapter v2-products">
        <div className="v2-products-header">
          <p className="v2-eyebrow">Our Products</p>
          <h2 className="v2-section-h2">Three platforms.<br />One philosophy.</h2>
        </div>

        {/* InventoryCloud */}
        <div className="v2-product-split">
          <div className="v2-product-canvas-wrap">
            <V2ProductCanvas type="inventory" />
          </div>
          <div className="v2-product-copy">
            <span className="v2-product-tag">Manufacturing &amp; Distribution</span>
            <h3 className="v2-product-name">InventoryCloud</h3>
            <p className="v2-product-desc">
              Real-time visibility across every warehouse, line, and supplier.
              Predictive reordering, batch traceability, and ERP sync — without
              the six-month implementation.
            </p>
            <ul className="v2-product-bullets">
              <li>Live stock levels across all locations</li>
              <li>Automated reorder with supplier lead-time modeling</li>
              <li>Full batch &amp; lot traceability</li>
              <li>Native SAP / Oracle / NetSuite connectors</li>
            </ul>
            <a href="/products/inventorycloud" className="v2-btn-outline">Learn more →</a>
          </div>
        </div>

        {/* LIMS */}
        <div className="v2-product-split v2-product-split--reverse">
          <div className="v2-product-canvas-wrap">
            <V2ProductCanvas type="lims" />
          </div>
          <div className="v2-product-copy">
            <span className="v2-product-tag">Pharmaceutical &amp; Life Sciences</span>
            <h3 className="v2-product-name">LIMS Pro</h3>
            <p className="v2-product-desc">
              21 CFR Part 11-ready laboratory information management. From
              sample intake to certificate of analysis, with built-in audit
              trails and e-signatures.
            </p>
            <ul className="v2-product-bullets">
              <li>21 CFR Part 11 &amp; Annex 11 compliant</li>
              <li>Chain-of-custody &amp; sample lifecycle tracking</li>
              <li>Automated CoA generation</li>
              <li>Integration with analytical instruments</li>
            </ul>
            <a href="/products/lims" className="v2-btn-outline">Learn more →</a>
          </div>
        </div>

        {/* SF Pulse */}
        <div className="v2-product-split">
          <div className="v2-product-canvas-wrap">
            <V2ProductCanvas type="pulse" />
          </div>
          <div className="v2-product-copy">
            <span className="v2-product-tag">Healthcare &amp; Hospitals</span>
            <h3 className="v2-product-name">SF Pulse</h3>
            <p className="v2-product-desc">
              Operational intelligence for healthcare facilities. Supply chain
              visibility, compliance dashboards, and predictive maintenance —
              in one HIPAA-ready platform.
            </p>
            <ul className="v2-product-bullets">
              <li>HIPAA-compliant data handling</li>
              <li>Medical supply chain &amp; par-level management</li>
              <li>Real-time compliance status dashboards</li>
              <li>HL7 / FHIR integration ready</li>
            </ul>
            <a href="/products/sf-pulse" className="v2-btn-outline">Learn more →</a>
          </div>
        </div>
      </section>

      {/* ── PROOF ────────────────────────────────────────────── */}
      <section id="ch-proof" className="v2-chapter v2-proof">
        <div className="v2-proof-inner">
          <p className="v2-eyebrow">Case Studies</p>
          <h2 className="v2-section-h2">Results our clients talk about.</h2>
          <div className="v2-proof-grid">
            <div className="v2-proof-card">
              <div className="v2-proof-metric">38%</div>
              <div className="v2-proof-metric-label">reduction in carrying costs</div>
              <blockquote className="v2-proof-quote">
                "InventoryCloud gave us visibility we didn't know was possible.
                We cut overstock by a third in the first quarter."
              </blockquote>
              <div className="v2-proof-author">
                <strong>VP Operations</strong>
                <span>Mid-size contract manufacturer, Ohio</span>
              </div>
            </div>
            <div className="v2-proof-card">
              <div className="v2-proof-metric">12 hrs</div>
              <div className="v2-proof-metric-label">saved per audit cycle</div>
              <blockquote className="v2-proof-quote">
                "FDA inspection prep used to take weeks. With LIMS Pro,
                the audit trail is always ready. We walked through it in a day."
              </blockquote>
              <div className="v2-proof-author">
                <strong>QA Director</strong>
                <span>Generic pharma company, New Jersey</span>
              </div>
            </div>
            <div className="v2-proof-card">
              <div className="v2-proof-metric">99.4%</div>
              <div className="v2-proof-metric-label">supply compliance rate</div>
              <blockquote className="v2-proof-quote">
                "SF Pulse brought our scattered departments into one view.
                We caught a critical stockout three days before it would've hit."
              </blockquote>
              <div className="v2-proof-author">
                <strong>Chief Supply Officer</strong>
                <span>Regional hospital network, Texas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ORIGIN ───────────────────────────────────────────── */}
      <section id="ch-origin" className="v2-chapter v2-origin">
        <div className="v2-origin-inner">
          <p className="v2-eyebrow">Our Story</p>
          <h2 className="v2-section-h2">
            Built by people who worked<br />inside the problem.
          </h2>
          <div className="v2-origin-body">
            <p>
              SystemFriendly Labs started on a factory floor, not in a boardroom.
              Our founders spent years inside manufacturing and pharma operations —
              fighting with tools that weren't built for them.
            </p>
            <p>
              We started building our own. When other companies kept asking for
              the same thing, we knew we were onto something.
            </p>
            <p>
              Today we serve clients across North America and Europe — from
              50-person specialty manufacturers to multi-site hospital networks.
              The focus hasn't changed: software that fits the work, not the other
              way around.
            </p>
          </div>
          <div className="v2-origin-stats">
            <div className="v2-ostat"><span>2018</span><small>Founded</small></div>
            <div className="v2-ostat"><span>140+</span><small>Clients</small></div>
            <div className="v2-ostat"><span>3</span><small>Products</small></div>
            <div className="v2-ostat"><span>99.9%</span><small>Uptime SLA</small></div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section id="ch-cta" className="v2-chapter v2-cta">
        <div className="v2-cta-inner">
          <p className="v2-eyebrow">Get Started</p>
          <h2 className="v2-cta-h2">
            Ready to see what<br />purpose-built feels like?
          </h2>
          <p className="v2-cta-sub">
            Book a 30-minute demo. No sales pitch — just your workflow,
            and how our software fits it.
          </p>
          <a href="/contact" className="v2-btn-primary v2-btn-primary--large">
            Book a demo
          </a>
        </div>
        <footer className="v2-footer">
          <div className="v2-footer-brand">
            SystemFriendly <span>Labs</span>
          </div>
          <nav className="v2-footer-links">
            <a href="/products">Products</a>
            <a href="/case-studies">Cases</a>
            <a href="/about">About</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
          </nav>
          <p className="v2-footer-legal">
            © {new Date().getFullYear()} SystemFriendly Labs. All rights reserved.
          </p>
        </footer>
      </section>
    </main>
  );
}
