import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

export default function AiAgentsVsAutomationCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <BlogCallout type="info">
        &quot;RPA tools typically do not leverage large language models. That&apos;s where the unique value of agentic AI comes in.&quot; — Michael Kim, Director of AI Integration and Customer Success, Thomson Reuters.
      </BlogCallout>
      <BlogCompareTable
        title="Traditional Automation vs AI Agents — Direct Comparison"
        headers={["", "Traditional Automation (RPA)", "AI Agent"]}
        rows={[
          { feature: "How it works", values: ["Follows fixed, pre-defined rules", "Reads and interprets content, then decides"] },
          { feature: "Handles unstructured input", values: ["No", "Yes — this is its core strength"] },
          { feature: "When the format changes", values: ["Breaks, requires manual rebuild", "Generally continues working"] },
          { feature: "Auditability", values: ["High — every step is explicit", "Lower — reasoning is less inspectable"] },
          { feature: "Best suited for", values: ["Stable, high-volume, structured processes", "Variable input requiring judgment"] },
        ]}
        note="Named RPA vendors operating on this rule-based model include UiPath, Automation Anywhere, and SAP's automation tools, per TechTarget's technical comparison of the two categories."
      />
      <BlogCallout type="tip">
        Most businesses don&apos;t need to choose one over the other. The practical answer is often combining both — rule-based automation for the stable, structured parts of a workflow, an AI agent for the parts that require reading, interpreting, or deciding.
      </BlogCallout>
    </div>
  );
}
