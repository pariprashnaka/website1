import BlogBarChart from "@/components/blog/BlogBarChart";
import BlogCallout from "@/components/blog/BlogCallout";
import BlogKeyNumbers from "@/components/blog/BlogKeyNumbers";

export default function UpiMdrCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">

      <BlogKeyNumbers
        items={[
          { number: "0.4%", label: "Standard MDR rate", color: "#3B82F6" },
          { number: "₹300", label: "Maximum cap per transaction", color: "#7C3AED" },
          { number: "₹2,000", label: "Protected threshold", color: "#22C55E" },
          { number: "₹1L/mo", label: "Small merchant zero-MDR limit", color: "#F59E0B" },
          { number: "4%", label: "Volume above ₹2,000", color: "#00D4FF" },
          { number: "66%", label: "Value above ₹2,000", color: "#E8820C" },
        ]}
      />

      <BlogBarChart
        title="Standard P2M MDR at 0.4% — What It Actually Costs"
        bars={[
          { label: "₹2,000 or below", value: 0, unit: " — ₹0 (protected)" },
          { label: "₹5,000", value: 20, unit: " — ₹20" },
          { label: "₹10,000", value: 40, unit: " — ₹40" },
          { label: "₹25,000", value: 100, unit: " — ₹100" },
          { label: "₹50,000", value: 200, unit: " — ₹200" },
          { label: "₹75,000 and above", value: 300, unit: " — ₹300 (cap)" },
        ]}
        max={320}
        color="#3B82F6"
        note="Capped at ₹300 per transaction, reached at ₹75,000. Transactions at or below ₹2,000 are protected. Small merchants qualifying under P2PM (eligible UPI receipts under ₹1 lakh/month) remain at zero MDR."
      />

      <BlogCallout type="stat">
        Transactions above ₹2,000 are just 4% of P2M transaction volume — but approximately 66% of P2M transaction value. That is why the government can target high-value payments while leaving the vast majority of everyday transactions untouched. (Source: Grant Thornton Bharat)
      </BlogCallout>

      <BlogBarChart
        title="MDR by Category — ₹10,000 Transaction Example"
        bars={[
          { label: "P2P — friend or family", value: 0, unit: " — ₹0" },
          { label: "P2PM — small merchant under ₹1L/month", value: 0, unit: " — ₹0" },
          { label: "Essential sector (fuel, railways, telecom)", value: 5, unit: " — ₹5" },
          { label: "Capital markets", value: 2, unit: " — ₹2" },
          { label: "Standard P2M merchant", value: 40, unit: " — ₹40" },
        ]}
        max={50}
        color="#7C3AED"
        note="Not all payments above ₹2,000 are treated equally. Category determines the rate. P2P payments remain free regardless of amount."
      />

      <BlogCallout type="warning">
        The 18% GST applies to the MDR — not to the full transaction. On a ₹10,000 payment: MDR is ₹40, GST on MDR is ₹7.20, total MDR-related cost is ₹47.20. Not ₹1,800.
      </BlogCallout>

      <BlogCallout type="info">
        The framework is scheduled to become operational on 15 October 2026. It is not yet live as of 20 September 2026. A Supreme Court PIL has been filed — no stay reported as of the research date.
      </BlogCallout>

    </div>
  );
}
