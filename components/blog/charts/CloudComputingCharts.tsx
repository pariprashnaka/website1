import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

export default function CloudComputingCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">
      <BlogCallout type="info">
        &quot;The cloud&quot; is not floating anywhere. It&apos;s a physical server, in a real data centre, owned by a company like Amazon, Google, or Microsoft — accessed over the internet instead of sitting in your office.
      </BlogCallout>
      <BlogCompareTable
        title="The Three Layers of Cloud Service"
        headers={["Layer", "What You Manage", "What the Provider Manages"]}
        rows={[
          { feature: "Infrastructure as a Service (IaaS)", values: ["Software, operating system", "Physical hardware, storage, networking"] },
          { feature: "Platform as a Service (PaaS)", values: ["Your own application", "Hardware, operating system, security patching"] },
          { feature: "Software as a Service (SaaS)", values: ["Just using it", "Everything underneath, entirely"] },
        ]}
        note="Most business owners interact directly with SaaS — the most complete layer — without realising the other two layers exist underneath it."
      />
      <BlogCompareTable
        title="Cloud vs Traditional On-Premise — Quick Comparison"
        headers={["", "Traditional On-Premise", "Cloud Computing"]}
        rows={[
          { feature: "Upfront cost", values: ["High — buying physical hardware", "Low — pay for what you use"] },
          { feature: "Who maintains hardware", values: ["You", "The cloud provider"] },
          { feature: "Works without internet", values: ["Yes", "No"] },
          { feature: "Scaling to meet demand", values: ["Requires buying more hardware", "Often automatic, within limits"] },
        ]}
        note="Neither is universally better — see our detailed cloud vs on-premise guide for the full Indian-context trade-offs, particularly around connectivity."
      />
    </div>
  );
}
