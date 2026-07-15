import Link from "next/link";
import TiltCard from "@/components/TiltCard";
import { products } from "@/lib/content";

export default function StyleDemoPage() {
  const sample = products.slice(0, 3);

  return (
    <div className="px-8 pt-[120px] pb-[100px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="mono text-[12px] mb-5" style={{ color: "var(--color-text-muted)" }}>
          <Link href="/" style={{ color: "var(--color-text-muted)" }}>Home</Link> / Style Demo (not linked in nav — internal preview only)
        </div>
        <h1 className="text-[clamp(28px,3.4vw,40px)] leading-[1.15] mb-4">3D-tilt card treatment — a real comparison</h1>
        <p className="text-[15px] max-w-[640px] mb-16" style={{ color: "var(--color-text-muted)" }}>
          Move your mouse across the cards below. Top row is your current site exactly as it is today. Bottom row is the same content and colors, with a CSS 3D perspective tilt that follows your cursor plus a soft light that tracks with it. No 3D library, no extra load time — this is pure CSS.
        </p>

        <div className="mb-6">
          <span className="section-num mono">{"// CURRENT — FLAT CARDS"}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {sample.map((p) => (
            <div key={p.slug} className="panel p-7" style={{ borderColor: "var(--color-border)", background: "var(--color-card)" }}>
              <span className="mono text-[11px]" style={{ color: "var(--color-accent-cyan)" }}>{p.tag}</span>
              <h4 className="text-[16px] mt-2.5 mb-2">{p.name}</h4>
              <p className="text-[13.5px] leading-[1.6]" style={{ color: "var(--color-text-muted)" }}>{p.pitch}</p>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <span className="section-num mono">{"// PROPOSED — 3D TILT, MOUSE-TRACKED"}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {sample.map((p) => (
            <TiltCard key={p.slug}>
              <span className="mono text-[11px]" style={{ color: "var(--color-accent-cyan)" }}>{p.tag}</span>
              <h4 className="text-[16px] mt-2.5 mb-2">{p.name}</h4>
              <p className="text-[13.5px] leading-[1.6]" style={{ color: "var(--color-text-muted)" }}>{p.pitch}</p>
            </TiltCard>
          ))}
        </div>

        <div className="mt-20 p-6 rounded-xl border" style={{ borderColor: "var(--color-border)", background: "var(--color-bg-secondary)" }}>
          <p className="text-[13.5px] leading-[1.6]" style={{ color: "var(--color-text-muted)" }}>
            This page is not linked anywhere in your navigation — it only exists for you to preview at <code className="mono" style={{ color: "var(--color-accent-cyan)" }}>/style-demo</code>. If you like it, tell me and I&apos;ll wire it into the real Products page (and anywhere else you want it) and then delete this demo page. If not, just say so and I&apos;ll remove it — nothing here affects your live site until you decide.
          </p>
        </div>
      </div>
    </div>
  );
}
