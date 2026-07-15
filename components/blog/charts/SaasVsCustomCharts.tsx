import BlogBarChart from "@/components/blog/BlogBarChart";
import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

export default function SaasVsCustomCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <BlogCallout type="info">
        Neither SaaS nor custom software is the right answer universally. The right choice depends on where your requirements are standard and where they are genuinely specific. Many mature businesses use both — SaaS for commodity functions, custom software for core operational workflows.
      </BlogCallout>
      <BlogCompareTable
        title="SaaS vs Custom Software — When Each Fits Better"
        headers={["Decision Factor", "Points Toward SaaS", "Points Toward Custom"]}
        rows={[
          { feature: "Requirements clarity", values: ["Still emerging — need to discover what you need", "Well-defined — you know exactly what is needed"] },
          { feature: "Requirements type", values: ["Standard — what most businesses in your sector need", "Specific — unique to your workflows or industry"] },
          { feature: "Time to go live", values: ["Urgent — need something running in weeks", "Flexible — can invest 4 to 9 months in development"] },
          { feature: "Upfront budget", values: ["Limited — subscription model suits cash position", "Available — can invest in a one-time build"] },
          { feature: "5-year total cost", values: ["Lower when subscriptions are modest", "Lower when subscription costs accumulate significantly"] },
          { feature: "Competitive sensitivity", values: ["Infrastructure function — not a differentiator", "Core process — encodes how your business works"] },
          { feature: "Integration needs", values: ["Standard APIs with popular tools", "Legacy systems, government platforms, specific integrations"] },
          { feature: "Maintenance capacity", values: ["Limited — want vendor to handle updates", "Have development relationship or internal capability"] },
        ]}
        note="Most decisions involve factors pointing in both directions. The weight of the evidence matters more than any single factor."
      />
      <BlogBarChart
        title="5-Year Total Cost Scenarios — SaaS vs Custom (Rs Lakh, Illustrative)"
        bars={[
          { label: "SaaS entry tier (Rs 1L/yr x5)", value: 5, unit: "L" },
          { label: "SaaS mid tier (Rs 3L/yr x5)", value: 15, unit: "L" },
          { label: "SaaS higher tier (Rs 6L/yr x5)", value: 30, unit: "L" },
          { label: "Custom simple build + maintenance", value: 10, unit: "L" },
          { label: "Custom mid-scope + maintenance", value: 18, unit: "L" },
          { label: "Custom complex build + maintenance", value: 32, unit: "L" },
        ]}
        max={35}
        color="#7C3AED"
        note="Illustrative 5-year total cost scenarios only. Real numbers depend entirely on specific subscription pricing and build scope. Calculate with your actual figures before deciding."
      />
      <BlogCallout type="tip">
        Before choosing between SaaS and custom, calculate the 5-year total cost for both options explicitly — including subscription costs, implementation, training, and the estimated cost of workarounds for features that do not quite fit. The comparison is often closer than it first appears.
      </BlogCallout>
    </div>
  );
}
