"use client";
import { useEffect, useRef, useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import V2LangToggle from "./V2LangToggle";
import { NAV, NAV_CTA, V2_BASE, v2Href } from "./v2-nav-data";

export default function V2Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [menu, setMenu] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close everything on navigation
  useEffect(() => { setOpen(null); setMenu(false); (document.activeElement as HTMLElement | null)?.blur?.(); }, [pathname]);

  // lock page scroll while the mobile menu is open; Escape closes both menus
  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setMenu(false); setOpen(null); } };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [menu]);

  const hold = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(label);
  };
  const release = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  };

  return (
    <header className={`v2-nav${scrolled || menu ? " scrolled" : ""}`}>
      <Link href={V2_BASE || "/"} className="v2-nav-logo">
        SystemFriendly <span>Labs</span>
      </Link>

      <nav className="v2-nav-links" aria-label="Main">
        {NAV.map((item) =>
          item.children ? (
            <div
              key={item.label}
              className="v2-nav-item"
              onMouseEnter={() => hold(item.label)}
              onMouseLeave={release}
              onFocus={() => hold(item.label)}
              onBlur={release}
            >
              <Link
                href={v2Href(item.href)}
                className="v2-nav-link"
                aria-haspopup="true"
                aria-expanded={open === item.label}
              >
                {item.label}
                <svg viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg>
              </Link>
              <div className={`v2-dropdown${open === item.label ? " show" : ""}`}>
                {item.children.map((c) => (
                  <Link key={c.href + c.label} href={v2Href(c.href)} className="v2-dropdown-item">
                    <span>{c.label}</span>
                    {c.desc && <small>{c.desc}</small>}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link key={item.label} href={v2Href(item.href)} className="v2-nav-link">{item.label}</Link>
          )
        )}
      </nav>

      <div className="v2-nav-right">
        <V2LangToggle />
        <Link href={v2Href(NAV_CTA.href)} className="v2-nav-cta">{NAV_CTA.label}</Link>
        <button
          className="v2-burger"
          aria-label={menu ? "Close menu" : "Open menu"}
          aria-expanded={menu}
          onClick={() => setMenu((m) => !m)}
        >
          <span /><span />
        </button>
      </div>

      {menu && (
        <div className="v2-mobile-menu" role="dialog" aria-label="Menu">
          {NAV.map((item) => (
            <div key={item.label} className="v2-mobile-group">
              <Link href={v2Href(item.href)} className="v2-mobile-top">{item.label}</Link>
              {item.children && (
                <div className="v2-mobile-sub">
                  {item.children.map((c) => (
                    <Link key={c.href + c.label} href={v2Href(c.href)}>{c.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href={v2Href(NAV_CTA.href)} className="v2-mobile-cta">{NAV_CTA.label}</Link>
        </div>
      )}
    </header>
  );
}
