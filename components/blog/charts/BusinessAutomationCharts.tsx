import BlogBarChart from "@/components/blog/BlogBarChart";
import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

export default function BusinessAutomationCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <BlogCallout type="stat">
        McKinsey Global Institute estimates that approximately 60% of occupations have at least 30% of activities that could be automated with currently available technology. For most Indian SMBs, the biggest gains come from automating the simplest, most repetitive administrative tasks first.
      </BlogCallout>
      <BlogBarChart
        title="Estimated Weekly Hours Saved Per Automation — Indian SMB Context"
        bars={[
          { label: "Automated purchase order generation", value: 12, unit: " hrs/wk" },
          { label: "Automated daily reporting", value: 8, unit: " hrs/wk" },
          { label: "Automated payment reminders", value: 6, unit: " hrs/wk" },
          { label: "Automated invoice generation", value: 5, unit: " hrs/wk" },
          { label: "Automated approval workflows", value: 4, unit: " hrs/wk" },
        ]}
        max={15}
        color="#22C55E"
        note="Illustrative estimates based on reported outcomes from SMB automation projects. Actual savings depend on current process maturity, team size, and transaction volume."
      />
      <BlogCompareTable
        title="Automation Levels — What Each Involves and When to Use It"
        headers={["Level", "What It Involves", "Approximate Cost", "Best For"]}
        rows={[
          { feature: "Level 1: Within-tool", values: ["Built-in features of tools you already have — Zoho workflows, Tally templates, Gmail filters", "Near zero — time only", "Every business as a starting point"] },
          { feature: "Level 2: Integration platforms", values: ["Connecting existing tools via Make, Zapier, or Zoho Flow", "Rs 2,000–15,000/month", "Businesses with 2–5 disconnected tools"] },
          { feature: "Level 3: Custom automation", values: ["Automation built into custom software for your specific rules and compliance", "Rs 3–15 lakh one-time", "Specific workflows that standard tools cannot handle"] },
          { feature: "Level 4: AI-driven", values: ["Machine learning for forecasting, document processing, anomaly detection", "Varies significantly", "Businesses with clean structured data and specific prediction needs"] },
        ]}
        note="Most businesses should start at Level 1 and move to higher levels only when lower levels have been fully utilised."
      />
      <BlogBarChart
        title="Where Automation Projects Fail — Common Causes"
        bars={[
          { label: "Automated a broken process", value: 34, unit: "%" },
          { label: "Insufficient staff involvement", value: 28, unit: "%" },
          { label: "Started too complex", value: 19, unit: "%" },
          { label: "No ongoing ownership assigned", value: 12, unit: "%" },
          { label: "Poor change management", value: 7, unit: "%" },
        ]}
        max={40}
        color="#EF4444"
        note="Illustrative distribution based on commonly reported automation failure modes. Use as a framework for thinking about risk, not precise statistics."
      />
      <BlogCallout type="tip">
        Before spending anything on automation tools, spend one day mapping your five most time-consuming recurring tasks. Write down every step, who does it, how long it takes, and what triggers it. That map tells you exactly where to start.
      </BlogCallout>
    </div>
  );
}
