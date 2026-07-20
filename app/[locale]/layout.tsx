import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import InsertedHeadScripts from "@/components/InsertedHeadScripts";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import LeadPopup from "@/components/LeadPopup";
import Analytics from "@/components/Analytics";
import Chatbot from "@/components/Chatbot";

const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://systemfriendly.com"),
  title: { default: "SystemFriendly Labs — Enterprise Software Engineering", template: "%s — SystemFriendly Labs" },
  description: "SystemFriendly Labs builds custom software — SaaS, ERP, AI, mobile, web, CRM, automation, cloud, and data engineering — for businesses that need software built around how they actually work.",
  openGraph: {
    type: "website",
    siteName: "SystemFriendly Labs",
    title: "SystemFriendly Labs — Enterprise Software Engineering",
    description: "Custom software built around how your business actually works — SaaS, ERP, AI, mobile, web, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SystemFriendly Labs — Enterprise Software Engineering",
    description: "Custom software built around how your business actually works — SaaS, ERP, AI, mobile, web, and more.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <InsertedHeadScripts />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <NextIntlClientProvider>
          <CursorGlow />
          <LeadPopup />
          <Analytics />
          <Chatbot />
          <Nav />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
