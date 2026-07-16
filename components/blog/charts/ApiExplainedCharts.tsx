import BlogCallout from "@/components/blog/BlogCallout";
import BlogCompareTable from "@/components/blog/BlogCompareTable";

function ApiFlowDiagram() {
  return (
    <div className="my-8 rounded-xl border p-6 md:p-8" style={{ borderColor: "var(--color-border)", background: "var(--color-card)" }}>
      <div className="mono text-[10.5px] uppercase tracking-[.08em] mb-6" style={{ color: "var(--color-text-muted)" }}>
        How an API request actually flows
      </div>
      <div className="overflow-x-auto">
      <svg viewBox="0 0 720 220" className="h-auto flex-shrink-0" style={{ width: 640, minWidth: 640 }} role="img" aria-label="Diagram showing an app sending a request through an API to a service, and the response returning the same way">
        <rect x="10" y="70" width="140" height="80" rx="10" fill="var(--color-bg-secondary)" stroke="var(--color-accent-blue)" strokeWidth="1.5" />
        <text x="80" y="105" textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--color-text-white)">Your App</text>
        <text x="80" y="123" textAnchor="middle" fontSize="10.5" fill="var(--color-text-muted)">(the customer)</text>

        <rect x="290" y="70" width="140" height="80" rx="10" fill="var(--color-bg-secondary)" stroke="var(--color-accent-cyan)" strokeWidth="1.5" />
        <text x="360" y="105" textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--color-text-white)">The API</text>
        <text x="360" y="123" textAnchor="middle" fontSize="10.5" fill="var(--color-text-muted)">(the waiter)</text>

        <rect x="570" y="70" width="140" height="80" rx="10" fill="var(--color-bg-secondary)" stroke="var(--color-accent-purple)" strokeWidth="1.5" />
        <text x="640" y="105" textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--color-text-white)">The Service</text>
        <text x="640" y="123" textAnchor="middle" fontSize="10.5" fill="var(--color-text-muted)">(the kitchen)</text>

        <line x1="150" y1="90" x2="290" y2="90" stroke="var(--color-accent-blue)" strokeWidth="1.5" markerEnd="url(#arrow1)" />
        <text x="220" y="80" textAnchor="middle" fontSize="10.5" fill="var(--color-text-muted)">1. Request</text>

        <line x1="430" y1="90" x2="570" y2="90" stroke="var(--color-accent-cyan)" strokeWidth="1.5" markerEnd="url(#arrow1)" />
        <text x="500" y="80" textAnchor="middle" fontSize="10.5" fill="var(--color-text-muted)">2. Passed along</text>

        <line x1="570" y1="135" x2="430" y2="135" stroke="var(--color-accent-purple)" strokeWidth="1.5" markerEnd="url(#arrow2)" />
        <text x="500" y="152" textAnchor="middle" fontSize="10.5" fill="var(--color-text-muted)">3. Response</text>

        <line x1="290" y1="135" x2="150" y2="135" stroke="var(--color-accent-cyan)" strokeWidth="1.5" markerEnd="url(#arrow2)" />
        <text x="220" y="152" textAnchor="middle" fontSize="10.5" fill="var(--color-text-muted)">4. Delivered back</text>

        <defs>
          <marker id="arrow1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--color-text-muted)" />
          </marker>
          <marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--color-text-muted)" />
          </marker>
        </defs>

        <text x="360" y="195" textAnchor="middle" fontSize="11" fill="var(--color-text-muted)">Your app never sees inside the kitchen — it only ever talks to the waiter.</text>
      </svg>
      </div>
    </div>
  );
}

export default function ApiExplainedCharts() {
  return (
    <div className="my-10 flex flex-col gap-2">

      <ApiFlowDiagram />

      <BlogCompareTable
        title="Common APIs You've Used Without Knowing It"
        headers={["What You Did", "API Working Behind the Scenes"]}
        rows={[
          { feature: "Saw a live map inside a delivery app", values: ["Google Maps API"] },
          { feature: "Paid by card on an e-commerce site", values: ["Payment gateway API (e.g. Razorpay)"] },
          { feature: "Got an order update on WhatsApp", values: ["WhatsApp Business API"] },
          { feature: "Checked current exchange rates in an app", values: ["Currency exchange rate API"] },
        ]}
        note="Every one of these is a real, everyday example of an API in action — you just never needed to know the term to use it."
      />

      <BlogCallout type="tip">
        When a vendor tells you a system &quot;has an API,&quot; that&apos;s a genuine, checkable capability — it means other systems can be reliably connected to it. When they say it doesn&apos;t, that&apos;s a real limitation worth factoring into your decision, not a minor detail.
      </BlogCallout>

    </div>
  );
}
