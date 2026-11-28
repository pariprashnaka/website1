import BlogBarChart from "@/components/blog/BlogBarChart";
import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";
import BlogKeyNumbers from "@/components/blog/BlogKeyNumbers";

export default function LabourCodesCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <BlogKeyNumbers
        items={[
          { number: "29 → 4", label: "Central labour laws consolidated into four codes" },
          { number: "21 Nov 2025", label: "Date the codes came into force nationwide" },
          { number: "1 year", label: "Gratuity eligibility for fixed-term employees" },
          { number: "300", label: "Worker threshold for retrenchment approval, up from 100" },
        ]}
      />
      <BlogBarChart
        title="Years of Service Needed for Gratuity"
        bars={[
          { label: "Permanent employee", value: 5, unit: " yrs" },
          { label: "Fixed-term employee (new)", value: 1, unit: " yr" },
        ]}
        max={5}
        color="#3fe0c5"
        note="Source: KPMG India analysis of the Code on Social Security, 2020."
      />
      <BlogBarChart
        title="Workers in an Establishment Before Government Approval Is Needed for Lay-offs or Closure"
        bars={[
          { label: "Earlier threshold", value: 100 },
          { label: "Under the Industrial Relations Code", value: 300 },
        ]}
        max={300}
        color="#e8731a"
        note="Source: KPMG India. State governments may notify their own rules."
      />
      <BlogCompareTable
        title="What to Review First"
        headers={["Area", "What changed", "Action"]}
        rows={[
          { feature: "Wages", values: ["One standard definition", "Re-test PF, gratuity and bonus on every salary"] },
          { feature: "Contracts", values: ["Appointment letters for all employees", "Issue or refresh letters"] },
          { feature: "Fixed-term hires", values: ["Gratuity after one year", "Recost short contracts"] },
          { feature: "Exits", values: ["Wages due within two working days", "Update the full-and-final process"] },
        ]}
        note="Supporting central and state rules were still being notified in the sources we reviewed. Confirm the current position."
      />
      <BlogCallout type="info">
        The biggest hidden cost is usually the wage definition. Model it on real payroll data before the year-end true-up, not after.
      </BlogCallout>
    </div>
  );
}
