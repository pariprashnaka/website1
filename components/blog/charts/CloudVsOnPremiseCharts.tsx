import BlogBarChart from "@/components/blog/BlogBarChart";
import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

export default function CloudVsOnPremiseCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <BlogCallout type="info">
        Most software advice defaults to &quot;cloud is better&quot; from a context of reliable broadband and modern data centres. For businesses with meaningfully unreliable connectivity at critical locations, that default does not automatically apply — the right answer depends on your actual situation.
      </BlogCallout>
      <BlogCompareTable
        title="Cloud vs On-Premise vs Hybrid — Quick Comparison"
        headers={["Factor", "Cloud", "On-Premise", "Hybrid"]}
        rows={[
          { feature: "Upfront cost", values: ["Low", "High", "Moderate"] },
          { feature: "Works without internet", values: ["No (unless offline-capable by design)", "Yes", "Partially, by design"] },
          { feature: "Maintenance burden", values: ["Provider's responsibility", "Yours, directly or contracted", "Shared"] },
          { feature: "Scaling speed", values: ["Fast — configuration change", "Slow — hardware procurement", "Fast for cloud portion"] },
          { feature: "Best fit", values: ["Reliable connectivity, growing businesses", "Unreliable connectivity, specific compliance needs", "Mixed connectivity across locations"] },
        ]}
        note="Use this as a starting framework. The right choice depends on your specific connectivity reality, regulatory requirements, and cost calculation — not a universal default."
      />
      <BlogBarChart
        title="Illustrative 5-Year Total Cost — Cloud vs On-Premise (Stable Workload, Rs Lakh)"
        bars={[
          { label: "Cloud subscription (moderate tier x5yr)", value: 18, unit: "L" },
          { label: "On-premise hardware + maintenance (5yr)", value: 14, unit: "L" },
          { label: "On-premise + IT staff cost (5yr)", value: 22, unit: "L" },
          { label: "Hybrid architecture (5yr, incl. managed maintenance)", value: 19, unit: "L" },
        ]}
        max={25}
        color="#3B82F6"
        note="Illustrative scenario for a stable, predictable workload only — growing or variable workloads typically favour cloud more clearly. Real numbers depend entirely on your specific scale and existing infrastructure."
      />
      <BlogCallout type="warning">
        Before choosing cloud software, log your actual internet outages at each location that will use the system for at least a month. If disruptive outages happen more than a few times monthly, treat offline resilience as a genuine requirement — not a risk to accept and hope does not materialise.
      </BlogCallout>
    </div>
  );
}
