"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Magnetic from "./Magnetic";
import ThemeToggle from "./ThemeToggle";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 font-display font-bold text-[17px] tracking-tight flex-shrink-0 whitespace-nowrap" style={{ color: "var(--color-text-white)" }}>
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 2L23 8V18L13 24L3 18V8L13 2Z" stroke="#3B82F6" strokeWidth="1.4" />
        <path d="M13 2V13M13 13L23 8M13 13L3 8M13 13V24" stroke="#00D4FF" strokeWidth="1" opacity="0.6" />
        <circle cx="13" cy="13" r="2.4" fill="#00D4FF" />
      </svg>
      SystemFriendly Labs
    </Link>
  );
}

export default function Nav() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/services", label: t("services") },
    { href: "/products", label: t("products") },
    { href: "/case-studies", label: t("caseStudies") },
    { href: "/blog", label: t("blog") },
    { href: "/about", label: t("company") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <>
      <div className="text-center text-[13px] py-[9px] px-4 border-b" style={{ background: "var(--color-bg-secondary)", borderColor: "var(--color-border)", color: "var(--color-text-soft)" }}>
        How we helped a 7-café chain go from running blind to fully data-driven —{" "}
        <Link href="/case-studies/seven-cafe-chain" style={{ color: "var(--color-accent-cyan)" }} className="font-medium">
          read the real case study →
        </Link>
      </div>

      <nav className="sticky top-0 z-[200] backdrop-blur-2xl border-b" style={{ background: "var(--color-nav-glass)", borderColor: "var(--color-border)" }}>
        <div className="max-w-[1240px] mx-auto flex items-center justify-between px-8 py-4">
          <Logo />
          <div className="hidden lg:flex gap-7 text-[14px]" style={{ color: "var(--color-text-soft)" }}>
            {links.map((l) => {
              const basePath = l.href.split("#")[0] || "/";
              const active = basePath !== "/" && (pathname === basePath || pathname.startsWith(`${basePath}/`));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="relative py-1 transition-colors hover:text-[var(--color-text-white)]"
                  style={{ color: active ? "var(--color-text-white)" : undefined, fontWeight: active ? 500 : 400 }}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active-underline"
                      className="absolute left-0 right-0 -bottom-1 h-[1.5px] rounded-full"
                      style={{ background: "var(--color-accent-cyan)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Magnetic className="hidden lg:inline-block">
              <Link href="/contact" className="btn btn-ghost text-[13px] py-2.5 px-5">{t("talkToUs")}</Link>
            </Magnetic>
            <button className="lg:hidden p-1.5" aria-label="Open menu" onClick={() => setMobileOpen(true)}>
              <Menu size={22} color="var(--color-text-white)" />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[300] flex flex-col gap-6 p-8" style={{ background: "var(--color-bg-primary)" }}>
          <button className="self-end p-1.5" aria-label="Close menu" onClick={() => setMobileOpen(false)}>
            <X size={24} color="var(--color-text-white)" />
          </button>
          {links.map((l) => {
            const basePath = l.href.split("#")[0] || "/";
            const active = basePath !== "/" && (pathname === basePath || pathname.startsWith(`${basePath}/`));
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-[22px] flex items-center gap-3"
                style={{ color: active ? "var(--color-accent-cyan)" : "var(--color-text-white)" }}
              >
                {active && <span style={{ width: 6, height: 6, borderRadius: 2, background: "var(--color-accent-cyan)", transform: "rotate(45deg)" }} />}
                {l.label}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
