export type Service = {
  slug: string;
  title: string;
  icon: "layers" | "grid" | "sparkles" | "smartphone" | "globe" | "users" | "zap" | "cloud" | "barChart";
  short: string;
  detail: string;
  tags: string[];
};

export const services: Service[] = [
  {
    slug: "saas",
    title: "SaaS Development",
    icon: "layers",
    short: "Multi-tenant platforms built to scale from your first ten customers to your ten-thousandth.",
    detail:
      "We design and build multi-tenant software from the data model up — the kind that survives your growth from ten customers to ten thousand without a rewrite. That means proper tenant isolation, usage-based billing hooks, and an admin layer your support team can actually use.",
    tags: ["Multi-tenancy", "Billing integration", "Role-based access", "Usage analytics"],
  },
  {
    slug: "erp",
    title: "ERP Solutions",
    icon: "grid",
    short: "Inventory, finance, and operations unified into one system your whole company actually uses.",
    detail:
      "Inventory, finance, procurement, and operations, unified into one system instead of five disconnected tools your team copy-pastes between. We build ERP software around your actual workflows, not a generic template you have to bend your business to fit.",
    tags: ["Inventory", "Procurement", "Finance", "Reporting"],
  },
  {
    slug: "ai",
    title: "AI Solutions",
    icon: "sparkles",
    short: "Applied AI grounded in your actual data and workflows — not a chatbot bolted onto a login page.",
    detail:
      "Applied AI work grounded in your operational data — document processing, forecasting, support automation — evaluated against real accuracy numbers before it ships, not a demo that only works on the happy path.",
    tags: ["Document processing", "Forecasting", "Support automation"],
  },
  {
    slug: "mobile",
    title: "Mobile Applications",
    icon: "smartphone",
    short: "Native-feel iOS and Android products for field teams, customers, and internal operations.",
    detail:
      "Native-feel apps for field teams, drivers, and customers, built for the conditions they'll actually be used in — patchy signal, one-handed use, all-day battery drain.",
    tags: ["iOS", "Android", "Offline-first", "Push notifications"],
  },
  {
    slug: "web",
    title: "Web Applications",
    icon: "globe",
    short: "Fast, accessible, production-hardened web platforms — no framework fashion, just what ships well.",
    detail:
      "Fast, accessible, production-hardened web platforms. We choose frameworks for what your future team can maintain, not what's trending this quarter.",
    tags: ["Next.js", "Accessibility", "Performance"],
  },
  {
    slug: "crm",
    title: "CRM Systems",
    icon: "users",
    short: "Pipelines and customer data modeled around how your team actually sells and supports.",
    detail:
      "Customer and pipeline data modeled around how your team actually sells and supports — not a stock CRM with fields you'll never use and none of the ones you need.",
    tags: ["Pipeline tracking", "Support tickets", "Integrations"],
  },
  {
    slug: "automation",
    title: "Business Automation",
    icon: "zap",
    short: "Remove the manual steps between your systems so work moves without someone chasing it.",
    detail:
      "We find the manual handoffs between your systems — approvals, data entry, status updates — and remove them, so work moves without someone having to chase it.",
    tags: ["Workflow automation", "Approvals", "Notifications"],
  },
  {
    slug: "cloud",
    title: "Cloud Engineering",
    icon: "cloud",
    short: "Infrastructure that's provisioned, monitored, and priced the way your growth actually needs.",
    detail:
      "Infrastructure that's provisioned as code, monitored properly, and priced for the traffic you actually have — not over-provisioned for a scale you haven't reached yet.",
    tags: ["AWS", "Terraform", "Cost optimization"],
  },
  {
    slug: "data",
    title: "Data Engineering",
    icon: "barChart",
    short: "Pipelines and warehouses that turn scattered operational data into something you can query.",
    detail:
      "Pipelines and warehouses that turn scattered operational data into something your team can actually query and trust — with clear data lineage, not a black box.",
    tags: ["ETL pipelines", "Warehousing", "Dashboards"],
  },
];

export const industries = [
  { title: "Fintech", desc: "Compliance-aware platforms handling real money movement." },
  { title: "Healthcare", desc: "Systems built around patient data governance from the start." },
  { title: "Government", desc: "Procurement-ready delivery with full audit trails." },
  { title: "Manufacturing", desc: "Shop-floor to ERP visibility without rip-and-replace." },
  { title: "Logistics", desc: "Fleet, route, and inventory systems built for real-time load." },
  { title: "Retail", desc: "Multi-location inventory and POS that stay in sync." },
];

export type CaseStudy = {
  slug: string;
  industry: string;
  name: string;
  problem: string;
  solution: string;
  stack: string;
  impact: string;
};

export const caseStudies: CaseStudy[] = [
  { slug: "meridian", industry: "Fintech", name: "Project Meridian", problem: "Manual reconciliation across three separate ledgers", solution: "Unified ledger engine with automated matching", stack: "TypeScript, Postgres, AWS Lambda", impact: "Reconciliation time cut from days to hours" },
  { slug: "orbitfreight", industry: "Logistics", name: "OrbitFreight OS", problem: "No real-time visibility into fleet and load status", solution: "Live dispatch and tracking platform", stack: "Next.js, Go, PostGIS", impact: "Dispatch response time down significantly" },
  { slug: "hallmark", industry: "Retail / ERP", name: "Hallmark Inventory Core", problem: "Disconnected stock data across store locations", solution: "Multi-location inventory and POS sync engine", stack: "React, Node.js, Postgres", impact: "Stockout incidents reduced across all locations" },
  { slug: "veridian", industry: "Healthcare", name: "Veridian Intake Platform", problem: "Paper-based patient intake causing front-desk bottlenecks", solution: "Digital intake and scheduling system with records integration", stack: "Next.js, Postgres, AWS", impact: "Average check-in time reduced substantially" },
  { slug: "civicline", industry: "Government", name: "CivicLine Case Management", problem: "Constituent requests tracked across disconnected spreadsheets", solution: "Centralized case management with full audit trail", stack: "TypeScript, Postgres, AWS GovCloud-ready infra", impact: "Full audit compliance achieved at launch" },
  { slug: "ferrotech", industry: "Manufacturing", name: "Ferrotech Shop-Floor Sync", problem: "Shop-floor production data invisible to the ERP system", solution: "Middleware layer syncing floor sensors with ERP records", stack: "Python, Postgres, MQTT", impact: "Production reporting moved from daily to real-time" },
];

export type Product = {
  slug: string;
  tag: string;
  name: string;
  pitch: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  technology: string;
  results: string;
  features: string[];
};

export const products: Product[] = [
  {
    slug: "ledger",
    tag: "Finance / Fintech",
    name: "Nexora Ledger",
    pitch: "A reconciliation engine for finance teams juggling multiple bank feeds, payment processors, and internal ledgers — built after watching three separate clients solve the same problem with spreadsheets.",
    overview: "Nexora Ledger ingests transactions from multiple sources and automatically matches them against your internal records, flagging only the exceptions that actually need a human.",
    problem: "Finance teams spend days each month manually cross-checking ledgers across bank accounts, processors, and internal systems that don't talk to each other.",
    solution: "A rules-based matching engine with configurable tolerance thresholds, an audit trail on every match, and a review queue for exceptions only.",
    architecture: "Event-driven ingestion pipeline, Postgres ledger store, deterministic matching engine with a human-review layer on top.",
    technology: "TypeScript, Node.js, Postgres, AWS Lambda, deployed on AWS with Terraform-managed infrastructure.",
    results: "In production use, reconciliation work that took days now typically resolves within a single afternoon.",
    features: ["Auto-matching", "Exception queue", "Audit trail", "Multi-currency", "API access"],
  },
  {
    slug: "fleet",
    tag: "Logistics",
    name: "Nexora Fleet",
    pitch: "Real-time dispatch and tracking for logistics operators who need to know where every vehicle and load is, without duct-taping five different tools together.",
    overview: "A live map of your fleet, load assignments, and driver status, with dispatch actions that update in real time across every connected device.",
    problem: "Dispatchers were making assignment calls based on phone updates and outdated spreadsheets, with no live view of actual vehicle position.",
    solution: "GPS-linked fleet tracking with automated load-to-vehicle matching suggestions and a dispatcher console built for fast decisions.",
    architecture: "Real-time location ingestion over WebSockets, PostGIS for spatial queries, a Go-based dispatch service for low-latency updates.",
    technology: "Next.js, Go, PostGIS, WebSockets, deployed on AWS.",
    results: "Operators using the platform report materially faster dispatch decisions and fewer misassigned loads.",
    features: ["Live tracking", "Auto-dispatch", "Route history", "Driver app"],
  },
  {
    slug: "portal",
    tag: "Client Operations",
    name: "Nexora Portal",
    pitch: "A white-label client portal we build into every engagement — project status, documentation, and support requests in one place, so clients aren't chasing updates over email.",
    overview: "A branded portal giving your team live visibility into project milestones, documentation, and support tickets for whatever system we've built you.",
    problem: "Clients had no single place to check project status, find documentation, or raise a support request without emailing their point of contact.",
    solution: "A lightweight portal with authentication, a milestone tracker, a documentation library, and a ticketing view.",
    architecture: "Next.js frontend, Supabase auth and storage, ticketing synced with our internal support tooling.",
    technology: "Next.js, Supabase, Vercel.",
    results: "Standard on every engagement above a defined scope threshold; client-reported communication friction drops noticeably once it's live.",
    features: ["Milestone tracker", "Docs library", "Support tickets", "SSO-ready"],
  },
];

export const testimonials = [
  { quote: "Nexora rebuilt our reconciliation process end to end. What used to take our finance team three days now takes an afternoon.", name: "Placeholder Name", role: "CFO, Placeholder Company" },
  { quote: "They wrote the architecture document before touching a keyboard. That discipline is rare, and it showed in how few surprises we had.", name: "Placeholder Name", role: "VP Engineering, Placeholder Co." },
  { quote: "Our dispatch team went from guessing to knowing. The platform they built is the backbone of our operations now.", name: "Placeholder Name", role: "COO, Placeholder Logistics" },
];

export const homeFaqs = [
  { q: "What size of company do you typically work with?", a: "We take on engagements from funded startups through to government bodies. What matters more than size is whether the problem is well-defined enough to scope properly." },
  { q: "How long does a typical engagement take?", a: "Most builds run four to nine months from architecture sign-off to production launch, depending on scope." },
  { q: "Do you work with an existing in-house team?", a: "Yes — we regularly integrate with existing engineering teams, either leading the build or embedding alongside your developers." },
  { q: "What happens after launch?", a: "Every engagement includes a defined post-launch support window. Ongoing retainers are available once that window ends." },
  { q: "Can you work within our compliance requirements?", a: "We've delivered systems under fintech and government compliance requirements. Tell us your framework during discovery and we'll confirm fit before proposing anything." },
];

export const contactFaqs = [
  { q: "Is there a minimum project size?", a: "We generally take on engagements starting around four months of scoped work. If yours is smaller, tell us anyway — we'll be direct about fit." },
  { q: "Do you sign NDAs before discovery?", a: "Yes, standard practice for any engagement involving proprietary data or systems." },
  { q: "Can we start with a smaller pilot?", a: "In many cases, yes — we'll tell you honestly if your problem is better solved as a scoped pilot first." },
];

export const process = [
  { idx: "01", title: "Discover", desc: "We map your operations, constraints, and existing systems before proposing anything." },
  { idx: "02", title: "Architect", desc: "A written architecture document you can review, question, and sign off on before code starts." },
  { idx: "03", title: "Build", desc: "Weekly demos against a working system, not slide decks about progress." },
  { idx: "04", title: "Deploy", desc: "Staged rollout with monitoring and rollback plans in place from day one." },
  { idx: "05", title: "Scale", desc: "Ongoing ownership of performance, cost, and reliability as your usage grows." },
];

export const stack = [
  { group: "Frontend", items: ["TypeScript", "Next.js", "React Native"] },
  { group: "Backend", items: ["Node.js", "Postgres", "Go"] },
  { group: "Cloud", items: ["AWS", "Vercel", "Cloudflare"] },
  { group: "Data / AI", items: ["Python", "dbt", "Claude API"] },
  { group: "Ops", items: ["Terraform", "Datadog", "GitHub Actions"] },
];

export const whyUs = [
  { num: "01", title: "Senior engineers only", desc: "No junior developers learning on your production system." },
  { num: "02", title: "Fixed scope, fixed price", desc: "You know the cost and timeline before we write a line of code." },
  { num: "03", title: "You own the code", desc: "Full source and documentation handed over, no vendor lock-in." },
  { num: "04", title: "We stay after launch", desc: "Post-launch support built into every engagement, not sold separately." },
];

export const timeline = [
  { date: "YEAR 1", title: "Founded on one principle", desc: "Started as a two-person team taking on fintech reconciliation work — the origin of Nexora Ledger." },
  { date: "YEAR 2", title: "First enterprise engagement", desc: "Delivered our first government case-management platform, establishing our compliance-first delivery process." },
  { date: "YEAR 3", title: "Expanded into logistics and healthcare", desc: "Shipped OrbitFreight OS and the Veridian intake platform, proving the same core team could work across industries." },
  { date: "TODAY", title: "Six systems in production", desc: "Still a senior-only team, still writing the architecture doc before the first line of code." },
];

export const values = [
  { title: "We actually listen first", desc: "Before we talk about what we can build, we want to understand what's actually broken. Most of our best work starts with a conversation, not a pitch." },
  { title: "We say what we mean", desc: "If something won't work, we'll tell you before you spend a rupee on it. If a timeline is unrealistic, we'll say so upfront, not three weeks in." },
  { title: "We show up when we say we will", desc: "A deadline we agreed to is a promise, not a target. If we're going to be late, you'll hear it from us early — not find out on the day." },
  { title: "The problem is what keeps us interested", desc: "The projects we remember years later are the hard ones — the ones that made us think. That's what actually keeps us doing this." },
];

export const trustedLogos = ["Veridian Health", "Northgate Capital", "OrbitFreight", "Hallmark Retail Group", "CivicLine", "Ferrotech Industries"];
