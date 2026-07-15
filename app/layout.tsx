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
  metadataBase: new URL("https://nexorasystems.com"),
  title: { default: "Nexora Systems — Enterprise Software Engineering", template: "%s — Nexora Systems" },
  description: "Nexora Systems engineers SaaS, ERP, and AI platforms for startups, enterprises, and government teams. Six production systems shipped.",
  openGraph: {
    type: "website",
    siteName: "Nexora Systems",
    title: "Nexora Systems — Enterprise Software Engineering",
    description: "Nexora Systems engineers SaaS, ERP, and AI platforms for startups, enterprises, and government teams.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora Systems — Enterprise Software Engineering",
    description: "Nexora Systems engineers SaaS, ERP, and AI platforms for startups, enterprises, and government teams.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nexora Systems",
              url: "https://nexorasystems.com",
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
