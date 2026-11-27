"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function V2LangToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="v2-lang" role="group" aria-label="Language">
      <button
        className={locale === "en" ? "on" : ""}
        aria-label="Switch to English"
        aria-pressed={locale === "en"}
        onClick={() => router.replace(pathname, { locale: "en" })}
      >
        EN
      </button>
      <button
        className={locale === "hi" ? "on" : ""}
        aria-label="हिंदी में बदलें"
        aria-pressed={locale === "hi"}
        onClick={() => router.replace(pathname, { locale: "hi" })}
      >
        हि
      </button>
    </div>
  );
}
