import BlogBarChart from "@/components/blog/BlogBarChart";
import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

export default function AiAgentsRealUseCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <BlogCallout type="stat">
        MIT research published August 2025 found that 95% of generative AI pilot projects deliver no measurable financial result. Gartner projects more than 40% of agentic AI projects will be cancelled by the end of 2027. Both facts are real, and both sit alongside the genuine production successes below.
      </BlogCallout>
      <BlogCompareTable
        title="Real Named Production Deployments — Quick Reference"
        headers={["Company", "Industry", "Reported Outcome"]}
        rows={[
          { feature: "Klarna", values: ["Fintech / customer service", "Work equivalent to 853 FTEs, ~$60M saved"] },
          { feature: "JPMorgan", values: ["Financial services", "450+ use cases in production; presentations cut from hours to ~30 seconds"] },
          { feature: "General Mills", values: ["CPG / supply chain", "$20M+ saved since fiscal 2024"] },
          { feature: "Walmart", values: ["Retail / supply chain", "4,700 stores connected to one autonomous forecasting agent"] },
          { feature: "DHL Supply Chain", values: ["Logistics", "Autonomous phone/email handling at scale (Nov 2025 announcement)"] },
        ]}
        note="All figures from public company disclosures or named press releases, not vendor marketing claims. Sourced via industry-compiled 2025-2026 case study research."
      />
      <BlogBarChart
        title="AI Agent Adoption — McKinsey Global Survey, Mid-2025"
        bars={[
          { label: "Experimenting with agentic AI", value: 39, unit: "%" },
          { label: "Scaled an agent somewhere in the business", value: 23, unit: "%" },
          { label: "Scaled within any single function specifically", value: 10, unit: "% (max)" },
        ]}
        max={45}
        color="#3B82F6"
        note="Source: McKinsey State of AI survey, fielded 25 June to 29 July 2025, 1,993 respondents across 105 countries. The gap between broad experimentation and function-level scaling is the honest headline."
      />
      <BlogCallout type="tip">
        The pattern behind every real production deployment above: narrow, well-defined scope, deep integration with live systems, and a clearly defined point where a human takes over. Start there, at whatever scale fits your business, rather than an open-ended AI transformation.
      </BlogCallout>
    </div>
  );
}
