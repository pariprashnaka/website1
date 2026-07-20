"use client";

import { useServerInsertedHTML } from "next/navigation";

const THEME_INIT_SCRIPT = `
  (function() {
    try {
      var saved = localStorage.getItem('sfl-theme');
      var theme = saved || 'light';
      if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    } catch (e) {}
  })();
`;

const ORGANIZATION_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SystemFriendly Labs",
  url: "https://systemfriendly.com",
  description:
    "Custom software engineering across nine disciplines — SaaS, ERP, AI, mobile, web, CRM, automation, cloud, and data — built around how each business actually works.",
});

export default function InsertedHeadScripts() {
  useServerInsertedHTML(() => (
    <>
      <script id="theme-init" dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ORGANIZATION_JSON_LD }} />
    </>
  ));

  return null;
}
