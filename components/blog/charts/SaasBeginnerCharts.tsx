import BlogBarChart from "@/components/blog/BlogBarChart";
import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

export default function SaasBeginnerCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">

      <BlogCallout type="info">
        If you use Gmail, Zoom, or a browser-based accounting tool, you&apos;re already a SaaS user — the category didn&apos;t need a name for you to benefit from it.
      </BlogCallout>

      <BlogCompareTable
        title="Traditional Software vs SaaS — Side by Side"
        headers={["", "Traditional Installed Software", "SaaS"]}
        rows={[
          { feature: "How you pay", values: ["One-time purchase, often per computer", "Ongoing subscription"] },
          { feature: "Where it runs", values: ["Your own computer or server", "The provider's servers"] },
          { feature: "How you access it", values: ["The specific device it's installed on", "Any device with a browser"] },
          { feature: "Who handles updates", values: ["You, manually", "The provider, automatically"] },
          { feature: "If you stop paying", values: ["You keep the version you own", "Access typically stops"] },
        ]}
        note="Neither model is universally better — the right choice depends on your specific situation. See our full decision framework for the detailed trade-offs."
      />

      <BlogBarChart
        title="Illustrative 5-Year Cost — Subscription vs One-Time Purchase"
        bars={[
          { label: "SaaS at Rs 1,500/month x 5 years", value: 90, unit: "K" },
          { label: "One-time purchase + maintenance", value: 65, unit: "K" },
        ]}
        max={100}
        color="#3B82F6"
        note="Illustrative scenario only — real numbers depend entirely on the specific product, your usage pattern, and how many years you plan to use it. Not a general claim that either option is cheaper."
      />

    </div>
  );
}
