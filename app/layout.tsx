import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
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
  description: "SystemFriendly Labs engineers SaaS, ERP, and AI platforms for startups, enterprises, and government teams. Six production systems shipped.",
  openGraph: {
    type: "website",
    siteName: "SystemFriendly Labs",
    title: "SystemFriendly Labs — Enterprise Software Engineering",
    description: "SystemFriendly Labs engineers SaaS, ERP, and AI platforms for startups, enterprises, and government teams.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SystemFriendly Labs — Enterprise Software Engineering",
    description: "SystemFriendly Labs engineers SaaS, ERP, and AI platforms for startups, enterprises, and government teams.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('sfl-theme');
                  var theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SystemFriendly Labs",
              url: "https://systemfriendly.com",
              description: "Enterprise software engineering: SaaS, ERP, AI, and cloud platforms for startups, enterprises, and government.",
            }),
          }}
        />
        <CursorGlow />
        <LeadPopup />
        <Analytics />
        <Chatbot />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
