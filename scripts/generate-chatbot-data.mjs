import XLSX from "xlsx";

// Edit these rows any time by editing public/NEXORA_Chatbot_Data.xlsx directly in Excel/Numbers —
// this script only needs to run again if you want to regenerate the file from scratch.
const rows = [
  { Category: "Services", Question: "What services do you offer?", Answer: "We build SaaS platforms, ERP systems, AI solutions, mobile and web apps, CRM systems, business automation, cloud engineering, and data engineering. See the full breakdown at /services.", Keywords: "services, offer, build, what do you do, capabilities", QuickReply: "Yes" },
  { Category: "Pricing", Question: "How much does a project cost?", Answer: "Every engagement is scoped individually based on complexity — there's no fixed price list. Tell us what you're building through the contact form and we'll give you a straight answer, not a vague range.", Keywords: "cost, price, pricing, budget, how much, expensive, cheap", QuickReply: "Yes" },
  { Category: "Timeline", Question: "How long does a project take?", Answer: "Most engagements run 4–9 months from architecture sign-off to production launch, depending on scope. We'll give you a real timeline after discovery, not before.", Keywords: "how long, timeline, duration, time, weeks, months", QuickReply: "Yes" },
  { Category: "Fit", Question: "Do you work with startups?", Answer: "Yes — we take on engagements from funded startups through to government bodies. What matters more than size is whether the problem is well-defined enough to scope properly.", Keywords: "startup, small business, size, company size, work with", QuickReply: "Yes" },
  { Category: "Proof", Question: "Can I see your work?", Answer: "Yes, take a look at our case studies at /case-studies — real completed engagements, not mockups.", Keywords: "case study, case studies, portfolio, examples, work, proof, clients", QuickReply: "Yes" },
  { Category: "Content", Question: "Do you have a blog?", Answer: "Yes — engineering notes and lessons from real builds, at /blog.", Keywords: "blog, articles, content, read, learn", QuickReply: "Yes" },
  { Category: "Contact", Question: "How do I get in touch?", Answer: "Easiest way is the contact form at /contact, or message us directly on WhatsApp using the button in the corner.", Keywords: "contact, reach, talk, email, phone, whatsapp, get in touch", QuickReply: "Yes" },
  { Category: "Technology", Question: "What's your tech stack?", Answer: "Mainly TypeScript, Next.js, Node.js, Postgres, and AWS, with Python for data and AI work. We choose technology for what your future team can maintain, not what's trending.", Keywords: "tech stack, technology, stack, language, framework, tools", QuickReply: "Yes" },
  { Category: "Process", Question: "What does the process look like?", Answer: "Five stages: Discover, Architect, Build, Deploy, Scale. You get a written architecture document to review before we write any code — no surprises mid-build.", Keywords: "process, how does it work, steps, methodology, approach", QuickReply: "No" },
  { Category: "Ownership", Question: "Do we own the code?", Answer: "Yes, fully. Full source and documentation handed over, no vendor lock-in by design.", Keywords: "own, ownership, source code, ip, intellectual property, lock-in", QuickReply: "No" },
  { Category: "Team", Question: "Who actually builds the project?", Answer: "Senior engineers only, start to finish — the same people who scope the architecture are the ones who build and maintain it. No junior developers learning on your production system.", Keywords: "who, team, engineers, developers, senior, junior, staff", QuickReply: "No" },
  { Category: "Support", Question: "What happens after launch?", Answer: "Every engagement includes a defined post-launch support window. Ongoing retainers are available once that window ends.", Keywords: "after launch, support, maintenance, post-launch, ongoing", QuickReply: "No" },
  { Category: "Compliance", Question: "Can you work within our compliance requirements?", Answer: "We've delivered systems under fintech and government compliance requirements. Tell us your framework during discovery and we'll confirm fit before proposing anything.", Keywords: "compliance, security, regulation, audit, nda, gdpr", QuickReply: "No" },
  { Category: "NDA", Question: "Do you sign NDAs?", Answer: "Yes, standard practice for any engagement involving proprietary data or systems.", Keywords: "nda, confidential, non-disclosure, agreement", QuickReply: "No" },
  { Category: "Integration", Question: "Do you work with our existing in-house team?", Answer: "Yes — we regularly integrate with existing engineering teams, either leading the build or embedding alongside your developers.", Keywords: "in-house, existing team, integrate, work with our team", QuickReply: "No" },
  { Category: "Pilot", Question: "Can we start with a smaller pilot?", Answer: "In many cases, yes — we'll tell you honestly if your problem is better solved as a scoped pilot first.", Keywords: "pilot, trial, small start, poc, proof of concept", QuickReply: "No" },
];

const ws = XLSX.utils.json_to_sheet(rows);
ws["!cols"] = [{ wch: 14 }, { wch: 38 }, { wch: 70 }, { wch: 40 }, { wch: 12 }];

const wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, "Chatbot Data");
XLSX.writeFile(wb, "public/NEXORA_Chatbot_Data.xlsx");

console.log(`Generated public/NEXORA_Chatbot_Data.xlsx with ${rows.length} rows.`);
