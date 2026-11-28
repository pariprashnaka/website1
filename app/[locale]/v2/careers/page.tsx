import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { v2Href } from "@/components/v2/v2-nav-data";

export const metadata: Metadata = {
  title: "Careers — SystemFriendly Labs",
  description: "Work with a small team building software for real operations.",
  alternates: { canonical: "/careers" },
};

export default function V2Careers() {
  return (
    <main>
      <section className="v2-page-hero">
        <p className="v2-chapter-kicker">Careers</p>
        <h1 className="v2-page-h1">Build with<br /><em>us.</em></h1>
        <p className="v2-page-sub">We&apos;re a small team. No formal openings listed right now, but we always want to hear from engineers and designers who care about the craft.</p>
      </section>
      <section className="v2-uc-list">
        <article className="v2-uc-row">
          <h2 className="v2-uc-problem">Say hello</h2>
          <div className="v2-uc-body">
            <p>Send a short note on what you&apos;ve built and what you want to work on to info@systemfriendly.com.</p>
            <div className="v2-uc-links"><Link href={v2Href("/contact")}>Contact us →</Link></div>
          </div>
        </article>
      </section>
    </main>
  );
}
