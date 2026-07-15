import BlogBarChart from "@/components/blog/BlogBarChart";
import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

export default function AiSmbCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <BlogCallout type="info">
        The useful question is not &quot;AI or no AI&quot; — it is which specific, well-defined, high-volume task you are applying it to, and whether you have the data that application actually needs.
      </BlogCallout>
      <BlogCompareTable
        title="AI Applications for SMBs — Ready Now vs Not Yet Reliable"
        headers={["Application", "Status", "Requires"]}
        rows={[
          { feature: "Document data extraction (invoices, POs)", values: ["Ready — genuinely reliable", "Consistent document formats, review workflow for exceptions"] },
          { feature: "Customer support for routine queries", values: ["Ready — for the routine 60-70%", "Clear handoff to human for complex cases"] },
          { feature: "Written content drafting", values: ["Ready — as a drafting aid", "Human review and editing before use"] },
          { feature: "Basic demand forecasting", values: ["Ready — with sufficient data", "1-2+ years of clean historical sales data"] },
          { feature: "Search across company knowledge", values: ["Ready — for documented knowledge", "Knowledge actually exists in written form somewhere"] },
          { feature: "Autonomous decision-making", values: ["Not yet reliable unsupervised", "Would need extensive human oversight regardless"] },
          { feature: "Complex complaint resolution", values: ["Not yet reliable without human backup", "Human safety net for anything non-routine"] },
          { feature: "Custom predictive models", values: ["Only viable with sufficient clean data", "Large, clean historical dataset — most SMBs lack this"] },
        ]}
        note="This is a general framework, not a guarantee for any specific vendor's product. Evaluate specific tools against your specific task before committing."
      />
      <BlogBarChart
        title="Where AI Delivers the Clearest Time Savings for Indian SMBs Today"
        bars={[
          { label: "Document processing / data extraction", value: 65, unit: "%*" },
          { label: "Routine customer query handling", value: 45, unit: "%*" },
          { label: "First-draft content generation", value: 40, unit: "%*" },
          { label: "Report and summary generation", value: 35, unit: "%*" },
        ]}
        max={70}
        color="#7C3AED"
        note="*Illustrative time-reduction ranges based on commonly reported outcomes for well-scoped implementations. Actual results depend heavily on document consistency, query complexity, and data quality — not guaranteed outcomes."
      />
      <BlogCallout type="warning">
        The most common way businesses waste money on AI is starting with a vague ambition — &quot;we want to use AI&quot; — rather than a specific, well-defined, high-volume task. Start with the task, not the technology.
      </BlogCallout>
    </div>
  );
}
