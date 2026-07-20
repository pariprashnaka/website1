import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  EyeOff, Package, ShieldAlert, Clock, FileText, Zap, IndianRupee, BarChart3, MessageCircle,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import CafeCaseStudyBeforeAfter from "@/components/CafeCaseStudyBeforeAfter";
import BlogBarChart from "@/components/blog/BlogBarChart";
import { caseStudies, products } from "@/lib/content";

const icons: Record<string, typeof EyeOff> = {
  EyeOff, Package, ShieldAlert, Clock, FileText, Zap, IndianRupee, BarChart3, MessageCircle,
};

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies.find((cs) => cs.slug === slug);
  if (!c) return {};
  return { title: c.title, description: c.summary, alternates: { canonical: `/case-studies/${c.slug}` } };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = caseStudies.find((cs) => cs.slug === slug);
  if (!c) notFound();
  const linkedProduct = products.find((p) => p.caseStudySlug === c.slug);

  return (
    <>
      <section className="px-8 pt-[120px] pb-[56px] border-b" style={{ borderColor: "var(--color-border)" }}>
        <div className="max-w-[900px] mx-auto">
          <div className="mono text-[12px] mb-5" style={{ color: "var(--color-text-muted)" }}>
            <Link href="/" style={{ color: "var(--color-text-muted)" }}>Home</Link> / <Link href="/case-studies" style={{ color: "var(--color-text-muted)" }}>Case Studies</Link> / {c.title}
          </div>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="mono text-[11px] uppercase tracking-[.06em] px-2.5 py-1 rounded-md" style={{ background: "rgba(124,58,237,0.1)", color: "var(--color-accent-purple)" }}>{c.industry}</span>
            <span className="mono text-[11px]" style={{ color: "var(--color-text-muted)" }}>{c.scale}</span>
          </div>
          <h1 className="text-[clamp(28px,4vw,42px)] leading-[1.2]">{c.title}</h1>
          {linkedProduct && (
            <Link href={`/products#${linkedProduct.slug}`} className="mono text-[13px] font-medium inline-block mt-4" style={{ color: "var(--color-accent-cyan)" }}>
              See the {linkedProduct.name} product page →
            </Link>
          )}
        </div>
      </section>

      <section className="px-8 py-[80px]">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <p className="text-[15px] leading-[1.7] mb-14" style={{ color: "var(--color-text-soft)" }}>{c.situation}</p>

            <div className="mb-4">
              <span className="section-num mono">{"// THE PROBLEM"}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
              {c.problems.map((p) => {
                const Icon = icons[p.icon];
                return (
                  <div key={p.title} className="rounded-xl border p-5" style={{ borderColor: "var(--color-border)", background: "var(--color-card)", boxShadow: "0 10px 26px -16px rgba(15,23,42,0.16)" }}>
                    <div className="w-[34px] h-[34px] rounded-lg flex items-center justify-center mb-3" style={{ background: "rgba(239,68,68,0.1)" }}>
                      {Icon && <Icon size={16} color="#EF4444" />}
                    </div>
                    <h4 className="text-[14.5px] mb-1.5">{p.title}</h4>
                    <p className="text-[13px] leading-[1.6]" style={{ color: "var(--color-text-muted)" }}>{p.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="mb-4">
              <span className="section-num mono">{"// WHAT WE BUILT"}</span>
            </div>
            <p className="text-[15px] leading-[1.7] mb-8" style={{ color: "var(--color-text-soft)" }}>{c.solution}</p>

            {c.diagram === "CafeCaseStudyBeforeAfter" && (
              <div className="mb-14">
                <CafeCaseStudyBeforeAfter />
              </div>
            )}

            <div className="mb-4">
              <span className="section-num mono">{"// THE RESULTS"}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
              {c.results.map((r) => {
                const Icon = icons[r.icon];
                return (
                  <div key={r.title} className="rounded-xl border p-5" style={{ borderColor: "rgba(0,212,255,0.25)", background: "rgba(0,212,255,0.04)", boxShadow: "0 10px 26px -16px rgba(15,23,42,0.16)" }}>
                    <div className="w-[34px] h-[34px] rounded-lg flex items-center justify-center mb-3" style={{ background: "rgba(0,212,255,0.1)" }}>
                      {Icon && <Icon size={16} color="var(--color-accent-cyan)" />}
                    </div>
                    <h4 className="text-[14.5px] mb-1.5" style={{ color: "var(--color-text-white)" }}>{r.title}</h4>
                    <p className="text-[13px] leading-[1.6]" style={{ color: "var(--color-text-muted)" }}>{r.description}</p>
                  </div>
                );
              })}
            </div>

            {c.industryContext && c.industryContext.length > 0 && (
              <>
                <div className="mb-4">
                  <span className="section-num mono">{"// SUPPORTING DATA"}</span>
                </div>
                <BlogBarChart
                  title="What Digital Ordering Systems Typically Achieve"
                  bars={c.industryContext.map((d) => ({ label: d.label, value: d.value, unit: d.unit }))}
                  max={Math.max(...c.industryContext.map((d) => d.value)) * 1.2}
                  color="#00D4FF"
                  note={c.industryContextNote}
                />
              </>
            )}
          </Reveal>
        </div>
      </section>

      <section className="px-8 py-[100px]">
        <div className="max-w-[1240px] mx-auto">
          <Reveal>
            <div className="rounded-[20px] py-16 px-14 text-center border" style={{ background: "radial-gradient(ellipse at top, rgba(59,130,246,0.10), transparent 60%), var(--color-bg-secondary)", borderColor: "var(--color-border)" }}>
              <span className="eyebrow">Your project could be next</span>
              <h2 className="text-[clamp(26px,3.6vw,38px)] mt-4 mb-4">Tell us what you&apos;re building.</h2>
              <p className="max-w-[480px] mx-auto mb-8 text-[15px]" style={{ color: "var(--color-text-muted)" }}>
                We take on a limited number of engagements at a time so every one gets senior attention from start to finish.
              </p>
              <Magnetic><Link href="/contact" className="btn btn-primary">Start a project</Link></Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
