import BlogBarChart from "@/components/blog/BlogBarChart";
import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";
import BlogKeyNumbers from "@/components/blog/BlogKeyNumbers";

export default function CafeCommissionCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <BlogKeyNumbers
        items={[
          { number: "18–26%", label: "Reported fixed commission range, plus platform fees and GST" },
          { number: "10–16%", label: "Typical for larger brands, per Alvarez & Marsal" },
          { number: "20%+", label: "Typical for smaller outlets" },
          { number: "45–50%", label: "Share of payouts that commission, ads and discovery fees can reach" },
        ]}
      />
      <BlogBarChart
        title="Illustration: Yearly Commission at 20% on a ₹400 Average Order (₹ lakh)"
        bars={[
          { label: "500 orders a month", value: 4.8, unit: " lakh" },
          { label: "1,000 orders a month", value: 9.6, unit: " lakh" },
          { label: "2,000 orders a month", value: 19.2, unit: " lakh" },
        ]}
        max={20}
        color="#e8731a"
        note="Illustrative arithmetic only: orders × ₹400 × 20% × 12 months. Excludes advertising, platform fees, GST and discounts, which raise the real cost."
      />
      <BlogCompareTable
        title="Marketplace vs Direct Ordering"
        headers={["", "Delivery app", "Direct ordering"]}
        rows={[
          { feature: "Commission per order", values: ["Roughly 10% to 26%", "None to a marketplace"] },
          { feature: "Customer details", values: ["Held by the platform", "Held by you"] },
          { feature: "Visibility to new customers", values: ["Strong, partly paid", "You bring your own regulars"] },
          { feature: "Menu and pricing control", values: ["Shaped by the platform's rules", "Fully yours"] },
        ]}
        note="Commission figures reported by YourStory (2025). Rates vary by city, contract and restaurant size."
      />
      <BlogCallout type="info">
        Keep the apps for discovery, and move repeat customers to your own channel. Measure the share of orders from each so the savings are real, not assumed.
      </BlogCallout>
    </div>
  );
}
