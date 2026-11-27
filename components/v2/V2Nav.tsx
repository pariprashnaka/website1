"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function V2Nav() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      navRef.current?.classList.toggle("compact", window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav ref={navRef} className="v2-nav">
      <Link href="/" className="v2-nav-logo">
        SystemFriendly <span>Labs</span>
      </Link>
      <div className="v2-nav-links">
        <a href="#ch-products">Products</a>
        <a href="#ch-proof">Cases</a>
        <a href="#ch-origin">About</a>
        <Link href="/contact" className="v2-nav-cta">Talk to us</Link>
      </div>
    </nav>
  );
}
