"use client";
import Link from "next/link";

export default function V2Nav() {
  return (
    <nav className="v2-nav">
      <div className="v2-nav-logo">SystemFriendly Labs</div>
      <div className="v2-nav-links">
        <a href="#platformChapter">Platform</a>
        <a href="#invChapter">Industries</a>
        <a href="#proofChapter">Company</a>
        <Link href="/contact">Talk to us</Link>
      </div>
    </nav>
  );
}
