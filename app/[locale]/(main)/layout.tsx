/**
 * Layout for the existing (v1) site only — Nav, Footer and the
 * marketing-site chrome live here so the v2 redesign (app/[locale]/v2)
 * can stay fully isolated from them. Moved out of the root
 * app/[locale]/layout.tsx, which now only provides <html>/<body>,
 * fonts and app-wide providers.
 */
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import LeadPopup from "@/components/LeadPopup";
import Chatbot from "@/components/Chatbot";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CursorGlow />
      <LeadPopup />
      <Chatbot />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
