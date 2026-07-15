import BlogBarChart from "@/components/blog/BlogBarChart";
import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

export default function SoftwareCostCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <BlogCallout type="stat">
        According to Clutch.co agency profiles (2025), Indian custom software agencies list minimum project sizes ranging from USD 10,000 to USD 50,000, with mid-market engagements typically in the USD 25,000 to USD 150,000 range. These are client-facing agency rates — freelancer and contractor rates are lower.
      </BlogCallout>
      <BlogBarChart
        title="Indian Software Developer Hourly Rates by Seniority (USD, Platform Data 2024-25)"
        bars={[
          { label: "Junior developer (0-2 years)", value: 23, unit: "/hr avg" },
          { label: "Mid-level developer (2-5 years)", value: 37, unit: "/hr avg" },
          { label: "Senior developer (5-10 years)", value: 58, unit: "/hr avg" },
          { label: "Principal or architect (10+ years)", value: 83, unit: "/hr avg" },
        ]}
        max={100}
        color="#3B82F6"
        note="Midpoint estimates based on publicly listed rates on Upwork, Toptal, and Clutch for Indian developers billing international clients in USD. Domestic Indian project rates are typically lower. Source: Platform public data, 2024-2025."
      />
      <BlogBarChart
        title="Relative Cost Impact of Scope Factors (Indexed to Simple Internal Tool = 1)"
        bars={[
          { label: "Simple internal tool (baseline)", value: 10, unit: "x1" },
          { label: "Add mobile app", value: 16, unit: "x1.6" },
          { label: "Add 2-3 third-party integrations", value: 14, unit: "x1.4" },
          { label: "Add multi-user roles", value: 13, unit: "x1.3" },
          { label: "Add data migration", value: 15, unit: "x1.5" },
          { label: "All factors combined", value: 35, unit: "x3.5" },
        ]}
        max={40}
        color="#00D4FF"
        note="Illustrative relative cost multipliers showing how scope additions compound. Not absolute cost figures. Combining multiple factors creates additional coordination overhead beyond simple addition."
      />
      <BlogCallout type="warning">
        The lowest quote is not always the best value. A project that costs Rs 4 lakh to build and Rs 6 lakh to fix or replace is not cheaper than one that cost Rs 8 lakh to build correctly. Evaluate quotes on team composition, scope clarity, post-launch terms, and IP ownership — not just the number.
      </BlogCallout>
      <BlogCompareTable
        title="Reasonable Quote vs Red Flags — A Checklist"
        headers={["Element", "Reasonable Quote Includes", "Red Flag"]}
        rows={[
          { feature: "Scope", values: ["Written specification of what will be built", "Price given before scope is discussed"] },
          { feature: "Team", values: ["Named seniority levels and roles", "Vague reference to our team"] },
          { feature: "Timeline", values: ["Realistic for the described scope", "Implausibly fast for scope described"] },
          { feature: "Support", values: ["Defined terms, duration, inclusions", "Vague available if needed"] },
          { feature: "IP ownership", values: ["Explicit — you own source code and docs", "Unclear or not mentioned"] },
          { feature: "Scope changes", values: ["Defined process with cost implications", "No mention of what happens if scope grows"] },
          { feature: "Payment", values: ["Milestone-based tied to delivered work", "Large upfront, no milestones"] },
        ]}
        note="Use this as a checklist when evaluating any software development proposal before signing."
      />
    </div>
  );
}
