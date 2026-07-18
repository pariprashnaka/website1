import Link from "next/link";
import { caseStudies } from "@/lib/content";

export default function CaseStudySpotlight() {
  const study = caseStudies[0];
  if (!study) return null;

  return (
    <section className="px-8" style={{ background: "#0F172A", padding: "120px 32px" }}>
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center max-w-[760px] mx-auto mb-[70px]">
          <span className="mono text-[12px] uppercase tracking-[.06em] font-bold" style={{ color: "#60A5FA" }}>Selected Work</span>
          <h2 className="text-[clamp(32px,4vw,48px)] leading-[1.15] mt-4 mb-5 text-white">
            Solutions built around business problems.
          </h2>
          <p className="text-[17px] leading-[1.7]" style={{ color: "#CBD5E1" }}>
            We&apos;re a young company — this is a genuine engagement, not an illustrative scenario.
          </p>
        </div>

        <div
          className="rounded-[28px] p-10 md:p-14 transition-all hover:-translate-y-2.5"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }}
        >
          <span
            className="inline-block px-3.5 py-2 rounded-full text-[12px] font-bold tracking-[.08em] mb-6"
            style={{ background: "rgba(37,99,235,0.18)", color: "#93C5FD" }}
          >
            {study.industry.toUpperCase()}
          </span>
          <h3 className="text-[28px] md:text-[32px] mb-4 text-white">{study.title}</h3>
          <p className="text-[15px] leading-[1.8] mb-3" style={{ color: "#CBD5E1" }}>{study.summary}</p>
          <p className="text-[13px] mono mb-8" style={{ color: "#64748B" }}>{study.scale}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-9">
            {study.results.slice(0, 3).map((r) => (
              <div key={r.title} className="rounded-xl px-4 py-3.5" style={{ background: "rgba(96,165,250,0.06)", border: "1px solid rgba(96,165,250,0.2)" }}>
                <div className="text-[13px] font-medium text-white">{r.title}</div>
              </div>
            ))}
          </div>

          <Link href={`/case-studies/${study.slug}`} className="text-white font-bold hover:text-[#60A5FA] transition-colors">
            View the full case study →
          </Link>
        </div>
      </div>
    </section>
  );
}
