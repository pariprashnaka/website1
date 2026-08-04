"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function FooterLogo() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const update = () => setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
    update();
    const obs = new MutationObserver(update);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);

  return (
    <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
      <img
        src="/systemfriendly-labs-custom-software-engineering-logo.png"
        alt="SystemFriendly Labs"
        width={62}
        height={62}
        style={{ objectFit: "contain", flexShrink: 0, display: "block" }}
      />
      <span style={{ fontSize: 17, fontWeight: 700, lineHeight: 1, whiteSpace: "nowrap", fontFamily: "var(--font-display)" }}>
        <span style={{ color: isDark ? "#E8EDF5" : "#1e2433" }}>SystemFriendly</span>
        <span style={{ color: "#E8820C" }}> Labs</span>
      </span>
    </Link>
  );
}
