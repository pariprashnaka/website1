import BlogBarChart from "@/components/blog/BlogBarChart";
import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

export default function AiAgentVsChatbotCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">

      <BlogCallout type="warning">
        Gartner examined the thousands of vendors currently marketing their product as an &quot;AI agent&quot; and found only around 130 are verifiably agentic by any meaningful architectural standard. Source: Gartner research, cited via Aisera and DevRev industry analysis, 2026.
      </BlogCallout>

      <BlogBarChart
        title="Share of Customer Service Interactions Handled by AI"
        bars={[
          { label: "2025 (actual)", value: 30, unit: "%" },
          { label: "2027 (projected)", value: 50, unit: "%" },
        ]}
        max={55}
        color="#3B82F6"
        note="Source: Salesforce research, 2025, as cited in industry analysis by Engaige. Figures represent share of customer service interactions handled by AI, not specifically agentic vs chatbot handling."
      />

      <BlogCompareTable
        title="Gartner Projections on Agentic AI Adoption"
        headers={["Metric", "Projection"]}
        rows={[
          { feature: "Enterprise applications with task-specific AI agents", values: ["40% by 2026 (Gartner)"] },
          { feature: "Daily work decisions made autonomously by AI agents", values: ["At least 15% by 2028, up from near zero today (Gartner)"] },
          { feature: "Verifiably agentic vendors among those using the term", values: ["~130, out of thousands marketing the label (Gartner)"] },
        ]}
        note="All figures sourced from Gartner research as cited in industry coverage. Projections, not guarantees — included to show the direction and scale analysts expect, not as a promise of specific outcomes."
      />

      <BlogCallout type="tip">
        Before accepting any vendor&apos;s &quot;AI agent&quot; claim, ask for a live demonstration of the system completing a real multi-step task with zero human intervention between steps. If they can&apos;t show it, or a human quietly does part of the work off-screen, you have your answer.
      </BlogCallout>

    </div>
  );
}
