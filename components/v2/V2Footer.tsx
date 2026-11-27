import { Link } from "@/i18n/navigation";
import { FOOTER_COLUMNS, V2_BASE, v2Href } from "./v2-nav-data";

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  ? `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`
  : null;

export default function V2Footer() {
  return (
    <footer className="v2-footer">
      <div className="v2-footer-grid">
        <div className="v2-footer-brand">
          <Link href={V2_BASE || "/"} className="v2-footer-logo">
            SystemFriendly <span>Labs</span>
          </Link>
          <p>Software for the operations that keep industries running. Built in Buxar, Bihar.</p>
          <div className="v2-footer-contact">
            <a href="mailto:info@systemfriendly.com">info@systemfriendly.com</a>
            {WHATSAPP ? (
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            ) : (
              <Link href={v2Href("/contact")}>WhatsApp</Link>
            )}
          </div>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <nav key={col.title} className="v2-footer-col" aria-label={col.title}>
            <h3>{col.title}</h3>
            {col.links.map((l) => (
              <Link key={l.href + l.label} href={v2Href(l.href)}>{l.label}</Link>
            ))}
          </nav>
        ))}
      </div>

      <div className="v2-footer-bottom">
        <span>© {new Date().getFullYear()} SystemFriendly Labs (OPC) Private Limited. All rights reserved.</span>
        <div className="v2-footer-legal">
          <a href="https://linkedin.com/in/systemfriendly-labs-1199a9423" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/SystemFriendly" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://instagram.com/systemfriendlylabs" target="_blank" rel="noopener noreferrer">Instagram</a>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy#cookies">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
