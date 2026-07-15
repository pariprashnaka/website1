import BlogBarChart from "@/components/blog/BlogBarChart";
import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

export default function OutgrownSoftwareCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <BlogCallout type="info">
        Software rarely fails all at once. It degrades through a gradual accumulation of workarounds, which is exactly why most businesses do not notice the cumulative cost until it has become significant.
      </BlogCallout>
      <BlogCompareTable
        title="Growing Pain vs Genuine Outgrowing — Quick Diagnostic"
        headers={["Symptom", "Growing Pain", "Genuine Outgrowing"]}
        rows={[
          { feature: "Feature gaps", values: ["Occasional, has a reasonable workaround", "Frequent, workarounds are now permanent infrastructure"] },
          { feature: "New hire onboarding", values: ["Normal learning curve for a complex business", "Weeks spent learning undocumented workarounds"] },
          { feature: "Data trust", values: ["Numbers are generally reliable", "Team routinely double-checks before acting"] },
          { feature: "Performance", values: ["Slow only during predictable peak periods", "Consistently inadequate regardless of load"] },
          { feature: "Team behaviour", values: ["Team still requests new features from the system", "Team has stopped asking, routes around it silently"] },
          { feature: "Root cause", values: ["Capacity — more data or users than originally planned", "Assumptions — business model has outgrown what the system represents"] },
        ]}
        note="Use this table as a starting diagnostic, not a final answer. Most real situations have elements of both."
      />
      <BlogBarChart
        title="Where Workaround Time Typically Concentrates in Growing Businesses"
        bars={[
          { label: "Manual reporting and data compilation", value: 28, unit: "%" },
          { label: "Cross-system data re-entry", value: 24, unit: "%" },
          { label: "Exception handling not supported by system", value: 19, unit: "%" },
          { label: "Manual coordination between locations", value: 17, unit: "%" },
          { label: "Data verification and error correction", value: 12, unit: "%" },
        ]}
        max={32}
        color="#F59E0B"
        note="Illustrative distribution of where workaround labour typically concentrates, based on commonly reported patterns in growing SMBs. Treat as a framework for auditing your own workarounds, not precise statistics."
      />
      <BlogCallout type="tip">
        Before assuming you need new software, list every manual workaround your team currently uses, and estimate the weekly hours each one consumes. That list — not a general feeling that things are harder than they used to be — is the actual evidence for whether you have outgrown your current system.
      </BlogCallout>
    </div>
  );
}
