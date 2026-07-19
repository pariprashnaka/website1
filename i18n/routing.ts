import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "hi"],
  defaultLocale: "en",
  localePrefix: {
    mode: "as-needed",
    prefixes: {
      hi: "/hi",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
