import BlogBarChart from "@/components/blog/BlogBarChart";
import BlogCallout from "@/components/blog/BlogCallout";

export default function RansomwareExplainedCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <BlogCallout type="warning">
        In the November 2022 AIIMS Delhi ransomware attack, recovery teams found the hospital&apos;s backup server had also been compromised — because it was connected to the same network as everything else. Systems stayed down for over two weeks.
      </BlogCallout>
      <BlogBarChart
        title="Median Ransom Payment, Trending Down"
        bars={[
          { label: "2024", value: 150000, unit: "" },
          { label: "2025", value: 115000, unit: "" },
        ]}
        max={170000}
        color="#EF4444"
        note="Source: Verizon 2025 Data Breach Investigations Report. Figures in USD. The same report found 64% of ransomware victims now refuse to pay, up from ~50% two years earlier."
      />
      <BlogCallout type="stat">
        96% of ransomware attacks specifically target backup locations — exactly what happened in the AIIMS case. A genuinely isolated, offline backup copy is the single defence that removes an attacker&apos;s leverage entirely.
      </BlogCallout>
    </div>
  );
}
