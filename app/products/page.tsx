import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import { products } from "@/lib/content";

const diagramComponents: Record<string, ReturnType<typeof dynamic>> = {
  DroneServiceDiagram: dynamic(() => import("@/components/DroneServiceDiagram")),
  SmartAgriculturePlatformDiagram: dynamic(() => import("@/components/SmartAgriculturePlatformDiagram")),
  SmartHrmsDiagram: dynamic(() => import("@/components/SmartHrmsDiagram")),
};

const screenComponents: Record<string, ReturnType<typeof dynamic>> = {
  PlantationHealthMap: dynamic(() => import("@/components/drone-screens/PlantationHealthMap")),
  SprayCoverageCard: dynamic(() => import("@/components/drone-screens/SprayCoverageCard")),
  ChemicalUsageCard: dynamic(() => import("@/components/drone-screens/ChemicalUsageCard")),
  DataSourcesStatusCard: dynamic(() => import("@/components/agri-platform-screens/DataSourcesStatusCard")),
  SoilHealthAlertCard: dynamic(() => import("@/components/agri-platform-screens/SoilHealthAlertCard")),
  ScaleStatCard: dynamic(() => import("@/components/agri-platform-screens/ScaleStatCard")),
  PayrollBreakdownCard: dynamic(() => import("@/components/hrms-screens/PayrollBreakdownCard")),
  AttendanceTodayCard: dynamic(() => import("@/components/hrms-screens/AttendanceTodayCard")),
  WorkforceAnalyticsCard: dynamic(() => import("@/components/hrms-screens/WorkforceAnalyticsCard")),
};

export const metadata: Metadata = {
  title: "Products",
  description: "Drone-as-a-Service for Tea Estates and the Smart Agriculture Platform — production precision agriculture systems.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="px-8 pt-[120px] pb-[72px] border-b" style={{ borderColor: "var(--color-border)" }}>
        <div className="max-w-[1240px] mx-auto">
          <div className="mono text-[12px] mb-5 load-in" style={{ color: "var(--color-text-muted)" }}>
            <Link href="/" style={{ color: "var(--color-text-muted)" }}>Home</Link> / Products
          </div>
          <span className="eyebrow load-in">Products</span>
          <h1 className="text-[clamp(32px,4.6vw,52px)] leading-[1.1] max-w-[720px] mt-4 load-in">Platforms we&apos;ve built and keep building on.</h1>
          <p className="text-[16px] max-w-[560px] mt-4.5 leading-[1.6] load-in" style={{ color: "var(--color-text-muted)" }}>
            Alongside client engagements, Nexora maintains a small set of our own products — built to solve problems we kept seeing across industries.
          </p>
        </div>
      </section>

      <section className="px-8 py-[100px]">
        <div className="max-w-[1240px] mx-auto">
          {products.map((p, i) => (
            <Reveal key={p.slug} className={`py-20 ${i < products.length - 1 ? "border-b" : ""}`} >
              <div id={p.slug} className="scroll-mt-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center mb-14">
                  <div>
                    <div className="mono text-[11px] uppercase tracking-[.06em] mb-3.5" style={{ color: "var(--color-accent-purple)" }}>{p.tag}</div>
                    <h2 className="text-[clamp(24px,3vw,32px)] mb-4">{p.name}</h2>
                    <p className="text-[15px] leading-[1.65] mb-6" style={{ color: "var(--color-text-muted)" }}>{p.pitch}</p>
                    <Magnetic><Link href="/contact" className="btn btn-primary">Request a demo</Link></Magnetic>
                  </div>
                  <div className="product-visual aspect-[4/3] rounded-2xl border flex items-center justify-center mono text-[12px]" style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)" }}>
                    {p.diagram && diagramComponents[p.diagram] ? (
                      (() => {
                        const DiagramComponent = diagramComponents[p.diagram];
                        return <DiagramComponent />;
                      })()
                    ) : (
                      "PRODUCT SCREENSHOT PLACEHOLDER"
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px rounded-xl overflow-hidden border" style={{ background: "var(--color-border)", borderColor: "var(--color-border)" }}>
                  <Detail title="Overview" text={p.overview} />
                  <Detail title="Problem" text={p.problem} />
                  <Detail title="Solution" text={p.solution} />
                  <Detail title="Results" text={p.results} />
                </div>

                <div className="mt-4.5">{p.features.map((f) => <span key={f} className="chip">{f}</span>)}</div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  {[1, 2, 3].map((n) => {
                    const screenName = p.screens?.[n - 1];
                    const ScreenComponent = screenName ? screenComponents[screenName] : undefined;
                    return (
                      <div key={n} className="aspect-[16/10] rounded-lg border flex items-center justify-center mono text-[10px] overflow-hidden" style={{ borderColor: "var(--color-border)", background: "var(--color-card)", color: "var(--color-text-muted)" }}>
                        {ScreenComponent ? <ScreenComponent /> : `SCREEN 0${n}`}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-8 py-[100px]">
        <div className="max-w-[1240px] mx-auto">
          <Reveal>
            <div className="rounded-[20px] py-16 px-14 text-center border" style={{ background: "radial-gradient(ellipse at top, rgba(59,130,246,0.10), transparent 60%), var(--color-bg-secondary)", borderColor: "var(--color-border)" }}>
              <span className="eyebrow">Interested in one of these?</span>
              <h2 className="text-[clamp(26px,3.6vw,38px)] mt-4 mb-4">Let&apos;s see if it fits your operation.</h2>
              <p className="max-w-[480px] mx-auto mb-8 text-[15px]" style={{ color: "var(--color-text-muted)" }}>
                Every product above started as a client engagement. We can adapt any of them, or build something new entirely.
              </p>
              <div className="flex gap-3.5 justify-center flex-wrap">
                <Magnetic><Link href="/contact" className="btn btn-primary">Request a demo</Link></Magnetic>
                <Magnetic><Link href="/case-studies" className="btn btn-ghost">See case studies</Link></Magnetic>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Detail({ title, text }: { title: string; text: string }) {
  return (
    <div className="p-6.5" style={{ background: "var(--color-bg-primary)" }}>
      <h5 className="mono text-[11px] uppercase tracking-[.06em] mb-2.5" style={{ color: "var(--color-accent-cyan)" }}>{title}</h5>
      <p className="text-[14px] leading-[1.6]" style={{ color: "var(--color-text-muted)" }}>{text}</p>
    </div>
  );
}
