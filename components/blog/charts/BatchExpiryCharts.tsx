import BlogBarChart from "@/components/blog/BlogBarChart";
import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

export default function BatchExpiryCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <BlogCallout type="warning">
        A field that stores a batch number is not the same as a system that can instantly answer which customers received units from a specific batch. That distinction is exactly what matters in a real recall.
      </BlogCallout>
      <BlogBarChart
        title="Recall Response Time — Manual Search vs System Query (Illustrative)"
        bars={[
          { label: "Manual spreadsheet search", value: 48, unit: " hrs" },
          { label: "Basic system, partial traceability", value: 8, unit: " hrs" },
          { label: "Full batch-to-customer traceability", value: 2, unit: " hrs" },
        ]}
        max={55}
        color="#EF4444"
        note="Illustrative comparison based on commonly reported recall response scenarios. Actual time depends on batch size, customer count, and record quality."
      />
      <BlogCompareTable
        title="Batch Tracking Requirements Checklist"
        headers={["Requirement", "Why It Matters"]}
        rows={[
          { feature: "Batch-level stock segregation", values: ["Different batches have different expiry dates and must be tracked distinctly"] },
          { feature: "First-expiry-first-out enforcement", values: ["Directly reduces expired stock write-offs"] },
          { feature: "Meaningful-lead-time expiry alerts", values: ["Gives real time to act — reroute, discount, or return stock"] },
          { feature: "Bidirectional traceability", values: ["Makes genuine recall response possible in hours, not days"] },
          { feature: "Automatic expiry-based stock blocking", values: ["Prevents expired stock reaching dispatch without human intervention"] },
        ]}
        note="Test any batch tracking product against each of these specifically before assuming it meets your compliance requirement."
      />
      <BlogCallout type="tip">
        Batch tracking can often be added as a targeted layer on top of an existing inventory system rather than requiring a full replacement — particularly when the underlying stock management is otherwise working well.
      </BlogCallout>
    </div>
  );
}
