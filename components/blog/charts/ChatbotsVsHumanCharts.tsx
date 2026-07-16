import BlogBarChart from "@/components/blog/BlogBarChart";
import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

export default function ChatbotsVsHumanCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <BlogBarChart
        title="Customer Satisfaction Score, Out of 5"
        bars={[
          { label: "Human agents", value: 4.5, unit: "/5" },
          { label: "AI chatbots", value: 3.9, unit: "/5" },
        ]}
        max={5}
        color="#3B82F6"
        note="Source: International Journal of Computer Engineering & Technology (IJCET), 2025 comparative study on customer satisfaction."
      />
      <BlogCallout type="stat">
        82% of consumers say they&apos;d rather get an instant chatbot response than wait for a human agent — even though the same body of research shows human agents winning decisively on overall satisfaction. Both findings are real; they measure different things.
      </BlogCallout>
      <BlogCompareTable
        title="Where Each Actually Wins"
        headers={["Situation", "Better Fit"]}
        rows={[
          { feature: "Order status, hours, simple factual questions", values: ["Chatbot"] },
          { feature: "Customer wants an answer immediately, question is routine", values: ["Chatbot"] },
          { feature: "Billing dispute, service failure, emotionally charged issue", values: ["Human"] },
          { feature: "Any interaction, with an easy chatbot-to-human handoff", values: ["Combination — matches human-only satisfaction"] },
        ]}
        note="Peer-reviewed research (Journal of Marketing) found a chatbot combined with light-touch human intervention matched the satisfaction of full human-only service."
      />
    </div>
  );
}
