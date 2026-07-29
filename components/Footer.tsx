import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t px-8 pt-16 pb-8" style={{ borderColor: "var(--color-border)", background: "var(--color-bg-secondary)" }}>
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12">
          <div className="md:col-span-1" style={{ gridColumn: "span 1.4" }}>
            <Link href="/" className="flex items-center gap-1.5 font-display font-bold text-[15px]" style={{ color: "var(--color-text-white)" }}>
              <img
                src="/systemfriendly-labs-custom-software-engineering-logo.png"
                alt="SystemFriendly Labs — Custom Software Engineering"
                width={40}
                height={40}
                style={{ objectFit: "contain", flexShrink: 0 }}
              />
              <span>SystemFriendly Labs</span>
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
            { href: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ? `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}` : "/contact", label: "WhatsApp" },
          ]} />
        </div>

        <div className="flex justify-between items-center pt-7 border-t text-[12.5px] flex-wrap gap-3" style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)" }}>
          <span>© 2026 SystemFriendly Labs. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/systemfriendly-labs-1199a9423" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">LinkedIn</a>
            <a href="https://twitter.com/SystemFriendly" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">X</a>
            <a href="https://instagram.com/systemfriendlylabs" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">Instagram</a>
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
      <p className="mono text-[11px] uppercase tracking-[.06em] mb-4 font-semibold" style={{ color: "var(--color-text-soft)" }}>{title}</p>
      {links.map((l) => (
        <Link key={l.label} href={l.href} className="block text-[13.5px] mb-3 transition-colors hover:text-cyan-300" style={{ color: "var(--color-text-soft)" }}>
          {l.label}
        </Link>
      ))}
    </div>
  );
}
