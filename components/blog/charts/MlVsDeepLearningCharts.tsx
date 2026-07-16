import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

function NestedCirclesDiagram() {
  return (
    <div className="my-8 rounded-xl border p-6 md:p-8" style={{ borderColor: "var(--color-border)", background: "var(--color-card)" }}>
      <div className="mono text-[10.5px] uppercase tracking-[.08em] mb-6" style={{ color: "var(--color-text-muted)" }}>
        How the three terms actually nest inside each other
      </div>
      <svg viewBox="0 0 400 340" className="w-full max-w-[380px] mx-auto h-auto" role="img" aria-label="Nested circles diagram showing Deep Learning inside Machine Learning inside Artificial Intelligence">
        <circle cx="200" cy="180" r="150" fill="rgba(59,130,246,0.06)" stroke="var(--color-accent-blue)" strokeWidth="1.5" />
        <text x="200" y="55" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--color-text-white)">Artificial Intelligence</text>

        <circle cx="200" cy="195" r="105" fill="rgba(0,212,255,0.07)" stroke="var(--color-accent-cyan)" strokeWidth="1.5" />
        <text x="200" y="115" textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--color-text-white)">Machine Learning</text>

        <circle cx="200" cy="215" r="60" fill="rgba(124,58,237,0.09)" stroke="var(--color-accent-purple)" strokeWidth="1.5" />
        <text x="200" y="205" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--color-text-white)">Deep</text>
        <text x="200" y="222" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--color-text-white)">Learning</text>
      </svg>
      <p className="text-[11.5px] text-center mt-4" style={{ color: "var(--color-text-muted)" }}>
        Every deep learning system is machine learning. Every machine learning system is AI. The reverse isn&apos;t true.
      </p>
    </div>
  );
}

export default function MlVsDeepLearningCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <NestedCirclesDiagram />
      <BlogCompareTable
        title="The Three Layers, Side by Side"
        headers={["", "Artificial Intelligence", "Machine Learning", "Deep Learning"]}
        rows={[
          { feature: "Scope", values: ["Broadest", "A specific approach within AI", "A specific approach within ML"] },
          { feature: "How it works", values: ["Rule-based or learning-based", "Learns from data, not fixed rules", "Multi-layered neural networks"] },
          { feature: "Data needs", values: ["Varies enormously", "Moderate", "Typically very high"] },
          { feature: "Best for", values: ["Any task needing apparent intelligence", "Structured data, clear patterns", "Images, audio, language"] },
        ]}
        note="Each inner layer is a specific, narrower technique — not a more 'advanced' replacement for the outer ones."
      />
      <BlogCallout type="tip">
        When a vendor says their product &quot;uses AI,&quot; ask which layer they actually mean. The difference between a rule-based system and a deep learning model has real implications for cost, data requirements, and what the system can realistically do.
      </BlogCallout>
    </div>
  );
}
