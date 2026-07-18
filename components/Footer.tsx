import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t px-8 pt-16 pb-8" style={{ borderColor: "var(--color-border)", background: "var(--color-bg-secondary)" }}>
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12">
          <div className="md:col-span-1" style={{ gridColumn: "span 1.4" }}>
            <Link href="/" className="flex items-center gap-2.5 font-display font-bold text-[17px]" style={{ color: "var(--color-text-white)" }}>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path d="M13 2L23 8V18L13 24L3 18V8L13 2Z" stroke="#3B82F6" strokeWidth="1.4" />
                <path d="M13 2V13M13 13L23 8M13 13L3 8M13 13V24" stroke="#00D4FF" strokeWidth="1" opacity="0.6" />
                <circle cx="13" cy="13" r="2.4" fill="#00D4FF" />
              </svg>
              SystemFriendly Labs
            </Link>
            <p className="text-[13.5px] mt-3.5 leading-[1.6] max-w-[260px]" style={{ color: "var(--color-text-muted)" }}>
              Engineering software that accelerates business growth. systemfriendly.com.
            </p>
          </div>

          <FooterCol title="Company" links={[
            { href: "/about", label: "About" },
            { href: "/about#careers", label: "Careers" },
            { href: "/contact", label: "Contact" },
          ]} />
          <FooterCol title="Services" links={[
            { href: "/services#saas", label: "SaaS Development" },
            { href: "/services#erp", label: "ERP Solutions" },
            { href: "/services#ai", label: "AI Solutions" },
            { href: "/services#cloud", label: "Cloud Engineering" },
          ]} />
          <FooterCol title="Resources" links={[
            { href: "/blog", label: "Blog" },
            { href: "/case-studies", label: "Case Studies" },
            { href: "/products", label: "Products" },
          ]} />
          <FooterCol title="Contact" links={[
            { href: "mailto:info@systemfriendly.com", label: "info@systemfriendly.com" },
            { href: "tel:+10000000000", label: "+1 (000) 000-0000" },
            { href: "/contact", label: "WhatsApp" },
          ]} />
        </div>

        <div className="flex justify-between items-center pt-7 border-t text-[12.5px] flex-wrap gap-3" style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)" }}>
          <span>© 2026 SystemFriendly Labs. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-cyan-300">LinkedIn</a>
            <a href="#" className="hover:text-cyan-300">GitHub</a>
            <a href="#" className="hover:text-cyan-300">X</a>
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-cyan-300">Privacy</Link>
            <Link href="/terms" className="hover:text-cyan-300">Terms</Link>
            <Link href="/privacy#cookies" className="hover:text-cyan-300">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h5 className="mono text-[11px] uppercase tracking-[.06em] mb-4" style={{ color: "var(--color-text-muted)" }}>{title}</h5>
      {links.map((l) => (
        <Link key={l.label} href={l.href} className="block text-[13.5px] mb-3 transition-colors hover:text-cyan-300" style={{ color: "var(--color-text-soft)" }}>
          {l.label}
        </Link>
      ))}
    </div>
  );
}
