"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(nextLocale: "en" | "hi") {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div
      className="flex items-center rounded-full p-0.5 text-[12px] font-medium"
      style={{ background: "var(--color-bg-secondary)", border: "1px solid var(--color-border)" }}
    >
      <button
        onClick={() => switchTo("en")}
        aria-label="Switch to English"
        className="px-2.5 py-1 rounded-full transition-colors"
        style={{
          background: locale === "en" ? "var(--color-accent-blue)" : "transparent",
          color: locale === "en" ? "white" : "var(--color-text-muted)",
        }}
      >
        EN
      </button>
      <button
        onClick={() => switchTo("hi")}
        aria-label="हिंदी में बदलें"
        className="px-2.5 py-1 rounded-full transition-colors"
        style={{
          background: locale === "hi" ? "var(--color-accent-blue)" : "transparent",
          color: locale === "hi" ? "white" : "var(--color-text-muted)",
        }}
      >
        हि
      </button>
    </div>
  );
}
