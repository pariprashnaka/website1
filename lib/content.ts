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
  scale: string;
  title: string;
  summary: string;
  situation: string;
  problems: { title: string; description: string; icon: string }[];
  solution: string;
  results: { title: string; description: string; icon: string }[];
  industryContext: { label: string; value: number; unit: string }[];
  industryContextNote: string;
  diagram?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "seven-cafe-chain",
    industry: "Food & Beverage",
    scale: "7 outlets across multiple states, 10+ staff per location",
    title: "A Seven-Café Chain Running Blind",
    summary: "Seven cafés, no visibility, undetected theft — replaced with one connected system covering ordering, inventory, and staff attendance.",
    situation: "The client came to us running seven cafés spread across different states, each staffed by more than ten people. Every location ran on paper menu cards, manual attendance registers, and no digital record connecting orders, payments, or stock movement. Seven cafés, seven separate paper trails, and one owner who could not be in more than one place at a time.",
    problems: [
      { title: "No visibility without asking", description: "The only way to know how a café was performing — sales, stock levels, day-to-day activity — was to personally call or visit and ask staff directly, across seven separate locations.", icon: "EyeOff" },
      { title: "Inventory decisions made blind", description: "Without real usage data, popular items ran out mid-service while slower-moving stock sat unsold, with no cross-location comparison to catch either pattern early.", icon: "Package" },
      { title: "Theft with no audit trail", description: "Cash-heavy, paper-based transactions left no digital record connecting what was ordered to what was paid to what stock left the shelf — underreporting and shrinkage were structurally invisible.", icon: "ShieldAlert" },
      { title: "Attendance that meant nothing", description: "A signature on a paper register proved someone had a pen, not that they worked the hours claimed, across more than ten staff per location.", icon: "Clock" },
      { title: "Slow, error-prone ordering", description: "Paper tickets depended on handwriting and verbal relay between counter and kitchen, slowing service with no structured way to test menu changes.", icon: "FileText" },
    ],
    solution: "We treated this as two connected problems, because that's what it actually was — a customer-facing problem and a café-operations problem, both needing to talk to each other. On the customer side, we built an ordering app where customers browse the menu, place their order, and pay directly, creating a digital record of every transaction the moment it happens. On the café side, we built an admin dashboard giving real-time visibility into every location from one screen — inventory, attendance, and daily activity — alongside a sales dashboard showing exactly what's selling, broken down by café.",
    results: [
      { title: "Shorter customer wait times", description: "Direct in-app ordering replaced counter queues, cutting the time customers spend waiting in line.", icon: "Clock" },
      { title: "Better inventory management", description: "Real-time stock visibility across all seven locations replaced end-of-day guesswork.", icon: "Package" },
      { title: "Faster complaint resolution", description: "A full digital order history means staff can resolve customer issues on the spot instead of investigating after the fact.", icon: "MessageCircle" },
      { title: "Faster checkouts", description: "Direct in-app payment replaced manual cash handling at the counter.", icon: "Zap" },
      { title: "No more financial discrepancies", description: "Every transaction is now a digital record connecting the order, the payment, and the stock movement behind it.", icon: "IndianRupee" },
      { title: "Data-driven menu decisions", description: "Sales analytics now show exactly what to keep stocking and what to drop, replacing guesswork with real numbers.", icon: "BarChart3" },
    ],
    industryContext: [
      { label: "Average wait time (before)", value: 15, unit: "min" },
      { label: "Average wait time (after digital ordering)", value: 12, unit: "min" },
    ],
    industryContextNote: "This is industry research on digital ordering systems generally — a 2024 study of 200 mid-sized restaurants over 12 months, analysed via SPSS — not a measurement of this specific café chain's own performance. Order accuracy improved 30% and revenue per customer rose 20% in the same study. Source: Alexandria POS Software, published industry research.",
    diagram: "CafeCaseStudyBeforeAfter",
  },

  {
    slug: "plastic-container-manufacturer",
    industry: "Manufacturing",
    scale: "2 machines, 10 employees, 16+ SKUs, ₹10L+ monthly revenue",
    title: "A Plastic Container Manufacturer Running on Memory and Paper",
    summary: "A Bihar-based manufacturer with no visibility into stock, spend, or wastage — replaced with one connected system covering procurement, inventory, production, and billing.",
    situation: "The client runs a manufacturing unit in Bihar producing food-grade plastic containers. With two machines, around ten employees, and more than sixteen product variants, the business was doing serious volume — over ten lakhs a month. But behind that revenue was a system built entirely on paper registers, manual tallies, and the owner's memory. Procurement happened by feel. Inventory was counted physically when someone remembered to do it. Wastage from the manufacturing process — rejected pieces, material loss during moulding — went unrecorded. There was no single place to see what was happening.",
    problems: [
      {
        title: "No visibility into procurement spend",
        description: "Raw material purchases — plastic granules, packaging, consumables — were recorded on paper receipts scattered across the unit. The owner had no reliable way to know total monthly procurement spend without manually hunting down every slip.",
        icon: "IndianRupee"
      },
      {
        title: "Overbuying raw materials",
        description: "Without data on how much raw material each product type consumed, the owner would overbuy to avoid running short. Capital kept getting locked into excess stock that sat unused, compressing margins on a business already running thin.",
        icon: "Package"
      },
      {
        title: "No real-time inventory value",
        description: "At any given moment, nobody could say with confidence how much raw material was on hand, how much finished stock was ready to ship, or what the total inventory was worth — without stopping operations to do a physical count.",
        icon: "BarChart3"
      },
      {
        title: "Wastage invisible to the owner",
        description: "Manufacturing plastic containers produces waste — rejected pieces, material lost during moulding, offcuts. None of this was being tracked. The owner had no idea how much raw material was being consumed versus how much was being lost.",
        icon: "ShieldAlert"
      },
      {
        title: "Everything decentralised on paper",
        description: "Procurement, production, sales, and billing each had their own paper trail — or none at all. There was no way to connect them, no way to see the full picture, and no way for the owner to monitor the business without physically being on the factory floor.",
        icon: "FileText"
      },
    ],
    solution: "We set up SF Inventory System across the manufacturing unit with six users — the owner, the sales person, and the machine operators. The first thing we did was build out the Bill of Materials for each of the sixteen-plus SKUs: exactly how much plastic granule goes into one unit of each container type, with waste percentage built in. From that point, every time a finished product was recorded, the system automatically deducted the correct quantity of raw material from stock — no manual entry, no guesswork. Procurement orders are now logged in the system the moment they happen, giving the owner a live view of what has been spent and what stock has arrived. The billing module handles invoicing directly, connecting sales to inventory in real time. And because SF Inventory System runs on mobile, the owner can check stock levels, review today's sales, and see outstanding receivables from anywhere — the factory floor, home, or travelling — without needing to call anyone.",
    results: [
      {
        title: "Complete procurement visibility",
        description: "Every purchase order is logged, giving the owner a clear picture of monthly spend on raw materials for the first time.",
        icon: "IndianRupee"
      },
      {
        title: "Raw material overbuying eliminated",
        description: "With BOM-driven consumption data showing exactly how much material each SKU uses, purchasing decisions are now based on actual numbers rather than estimates.",
        icon: "Package"
      },
      {
        title: "Wastage now tracked",
        description: "Manufacturing waste is captured automatically through the BOM waste percentage — the owner can now see material loss per production run.",
        icon: "ShieldAlert"
      },
      {
        title: "16+ SKUs tracked in real time",
        description: "Every product variant has a live stock count, updated automatically as production is recorded and sales are invoiced.",
        icon: "BarChart3"
      },
      {
        title: "Owner monitors from anywhere",
        description: "With mobile access, the owner checks stock, sales, and receivables remotely — the factory no longer requires his physical presence to know what is happening.",
        icon: "Zap"
      },
      {
        title: "Six users, one connected system",
        description: "The owner, sales person, and machine operators all work from the same system — data flows from production to billing without anyone chasing paper.",
        icon: "MessageCircle"
      },
    ],
    industryContext: [
      { label: "Manufacturers with inaccurate inventory data", value: 60, unit: "%" },
      { label: "Small businesses tracking inventory manually or not at all", value: 43, unit: "%" },
    ],
    industryContextNote: "Industry research on small manufacturer inventory challenges. Over 60% of manufacturers struggle with inaccurate inventory data (WORLDMETRICS.ORG Report 2024). 43% of small businesses still track inventory manually or not at all (SMB Mentor, 2024). Neither figure is a measurement of this specific manufacturer's performance — they reflect the broader problem this system was built to solve.",
  },
];

export type Product = {
  slug: string;
  tag: string;
  name: string;
  pitch: string;
  overview: string;
  problem: string;
  solution: string;
  results: string;
  features: string[];
  diagram?: string;
  screens?: string[];
  caseStudySlug?: string;
};

export const products: Product[] = [
  {
    slug: 'sf-inventory-system',
    tag: 'Retail & Trading',
    name: 'SF Inventory System',
    pitch: 'A cloud-based inventory and billing platform for retail shops, trading businesses, and food & beverage operations. Track stock in real time, record sales, manage suppliers, generate GST-ready invoices, and understand your business performance — from any device, anywhere.',
    overview: 'SF Inventory System is a multi-tenant cloud platform that connects your catalog, stock, sales, procurement, and reporting into one system. Built for businesses that need accurate numbers without a full accounting team — accessible on mobile and desktop, online and offline.',
    problem: 'Most small and mid-sized businesses run inventory on spreadsheets, paper registers, or disconnected tools — with no reliable way to know stock levels, outstanding payments, or actual profit at any given moment. The result is stockouts, overbuying, untracked receivables, and decisions made on guesswork.',
    solution: 'SF Inventory System gives every transaction a digital record the moment it happens. Sales automatically deduct stock. Purchase orders update payables. Invoices are generated instantly with correct tax computation. A live dashboard shows revenue, gross profit, inventory value, low-stock alerts, and receivables — updated in real time, accessible from a phone or a desktop, with offline support for core operations.',
    results: 'Built on a multi-tenant architecture supporting multiple warehouses, branches, and business verticals from a single deployment. Role-based access ensures owners, managers, and staff each see exactly what they need — nothing more.',
    features: [
      'Real-time stock tracking across multiple warehouses',
      'GST-native billing and invoice generation',
      'Purchase order and supplier management',
      'Receivables and payables tracking',
      'Bill of Materials for F&B and manufacturing',
      'Daily, weekly, and monthly P&L reports',
      'Role-based access — Owner, Manager, Staff',
      'Hindi and English interface',
      'Offline mode for core transactions',
      'Mobile-first fast-tap sales recording',
    ],
    diagram: 'SFInventoryDiagram',
    screens: ['SFInventoryKPICard', 'SFInventoryStockCard', 'SFInventorySalesCard'],
    caseStudySlug: 'plastic-container-manufacturer',
  },
  {
    slug: 'sf-lims',
    tag: 'Diagnostics & Pathology',
    name: 'SF LIMS',
    pitch: 'A cloud-based Laboratory Information Management System for pathology labs and diagnostic centres. Manage patients, test orders, lab workflows, report generation, and billing in one connected platform — from sample collection to WhatsApp delivery.',
    overview: 'SF LIMS covers the complete patient journey across 16 modules — registration, test ordering, sample collection, lab queue management, result entry, report generation, reagent stock, and billing. Built for independent pathology labs, diagnostic chains, and clinical laboratories that need accuracy, traceability, and speed.',
    problem: 'Pathology labs running on paper registers, disconnected billing software, and manual report generation face avoidable errors at every stage — mislabelled samples, lost results, delayed reports, reagent stockouts, and billing gaps. As test volumes grow, these gaps compound into compliance risk and lost revenue.',
    solution: 'Every patient gets a unique ID the moment they register. Test orders flow automatically into the lab queue. Sample collection triggers reagent deduction via Bill of Materials. Results are entered against ICMR-standard reference ranges, with age and gender banded norms. Reports are generated and delivered directly to the patient via WhatsApp. Every re-run and correction creates an audit entry with a mandatory reason — nothing is overwritten silently.',
    results: 'A 348-parameter test catalog covering 25 panels, built on ICMR Indian population norms with gender and age-banded reference ranges. Supports partial report release, multi-lab branches, and a full audit trail across every transaction from registration to billing.',
    features: [
      'Complete patient registration and test order management',
      '348-parameter test catalog with ICMR reference ranges',
      'Lab queue with real-time sample tracking',
      'Automated report generation with WhatsApp delivery',
      'Reagent and consumable stock management (FEFO)',
      'GST-compliant billing engine',
      'Age and gender banded reference ranges',
      'Partial report release and re-run audit trail',
      'Role-based access — Pathologist, Lab Staff, Front Desk',
      'Multi-lab and branch support',
    ],
    diagram: 'SFLIMSDiagram',
    screens: ['SFLIMSPatientCard', 'SFLIMSQueueCard', 'SFLIMSReportCard'],
  },
  {
    slug: "smart-cafe-platform",
    tag: "FoodTech",
    name: "Smart Café Platform",
    pitch: "A complete digital ordering and operations platform for cafés, cloud kitchens, and restaurant chains — customer app, web ordering, and a business dashboard, without depending on commission-based food aggregators.",
    overview: "A unified platform combining a customer-facing app, web ordering, and a business administration portal, letting cafés manage their entire digital presence — menu, pricing, orders, and operations — from one place.",
    problem: "Cafés and restaurant chains relying on third-party food aggregators lose direct customer relationships and pay ongoing commission on every order, while building an independent digital presence has traditionally meant stitching together multiple disconnected tools for ordering, menu management, and operations.",
    solution: "Customers discover nearby cafés through location-based search, browse digital menus, and order for dine-in, takeaway, curbside, or delivery — directly with the business, not through a third-party marketplace. Café owners manage menus, pricing, and promotions from one dashboard, with bulk menu import, dynamic pricing such as happy hours and combo deals, and a real-time order tracking view from confirmation through to completion. OTP-based login keeps things simple for customers and secure for staff.",
    results: "Built to scale from a single café to a multi-location chain, giving businesses an independent digital presence and direct customer relationships without ongoing marketplace commissions.",
    features: ["Direct online ordering (dine-in, takeaway, delivery)", "Location-based café discovery", "Menu & dynamic pricing management", "Real-time order tracking dashboard", "OTP-based secure login", "Sales & customer analytics"],
    diagram: "CafeOwnerVisibilityScene",
    screens: ["OrderTrackingCard", "CafeDiscoveryCard", "SalesSnapshotCard"],
    caseStudySlug: "seven-cafe-chain",
  },
  {
    slug: "smart-hrms-platform",
    tag: "HR Tech",
    name: "Smart HRMS Platform",
    pitch: "A complete HR management system covering the full employee lifecycle — recruitment, attendance, payroll, compliance, and performance — in one integrated platform.",
    overview: "A unified HR platform that digitises and automates recruitment, onboarding, attendance, leave, payroll, performance management, and statutory compliance, giving HR teams centralised visibility and employees self-service access, all from one system.",
    problem: "HR functions are often spread across disconnected tools and manual processes — attendance tracked separately from payroll, leave approvals handled over email, compliance filings prepared by hand — creating administrative overhead, delays, and real compliance risk as a business grows.",
    solution: "The platform integrates with biometric devices, RFID, and access control systems so attendance, leave, and payroll stay synchronised automatically. An intelligent payroll engine handles complex salary structures, statutory deductions (PF, ESI, PT, TDS), and generates salary slips and statutory returns with minimal manual effort. Recruitment, onboarding, and performance management run through the same system, with a self-service portal giving employees direct access to salary slips, leave balances, and records without needing to go through HR for every request.",
    results: "Built on a scalable, multi-tenant architecture supporting multiple companies, branches, and legal entities from a single deployment, with role-based access control and a complete audit trail across all HR transactions.",
    features: ["Automated payroll & statutory compliance", "Biometric attendance & leave management", "Recruitment & onboarding workflow", "Performance management (KRAs, KPIs, OKRs)", "Employee self-service portal", "Real-time workforce analytics"],
    diagram: "SmartHrmsDiagram",
    screens: ["PayrollBreakdownCard", "AttendanceTodayCard", "WorkforceAnalyticsCard"],
  },
  {
    slug: "smart-agriculture-platform",
    tag: "AgriTech",
    name: "Smart Agriculture Platform",
    pitch: "A cloud-based digital agriculture platform combining IoT sensors, satellite imagery, weather intelligence, and AI into one system — built to scale from a single farm to a national agricultural programme.",
    overview: "A unified platform for monitoring agricultural assets, collecting real-time field data, and generating actionable insights, built for governments, agribusinesses, plantation operators, and large-scale agricultural enterprises.",
    problem: "Large agricultural operations and programmes typically pull data from disconnected sources — soil sensors, weather stations, satellite imagery, field observations — with no unified way to turn that raw data into consistent, actionable decisions across many locations at once.",
    solution: "The platform continuously ingests data from soil sensors, weather stations, satellite imagery, and field observations, validating it automatically before storing it in cloud infrastructure built for time-series agricultural data. An analytics engine applies machine learning to generate irrigation, fertilizer, planting, and pest-risk recommendations, with interactive dashboards, automated threshold alerts, and configurable reporting across farms, districts, or regional programmes. A modular architecture lets organisations deploy only the capabilities they need, with standard APIs for integrating with existing ERP, GIS, and lab systems.",
    results: "Designed to scale from an individual farm to a national agricultural programme, with support for thousands of connected devices and secure, mobile-accessible cloud infrastructure across geographically distributed operations.",
    features: ["Multi-source data integration (IoT, satellite, weather)", "AI-driven crop & irrigation recommendations", "Soil health monitoring & alerts", "Carbon accounting & MRV reporting", "Modular, API-integrable architecture"],
    diagram: "SmartAgriculturePlatformDiagram",
    screens: ["DataSourcesStatusCard", "SoilHealthAlertCard", "ScaleStatCard"],
  },
  {
    slug: "drone-tea-estate",
    tag: "AgriTech",
    name: "Drone-as-a-Service for Tea Estates",
    pitch: "Precision agriculture for tea estates, delivered as a managed service — aerial crop monitoring and precision spraying without buying drone hardware or building an in-house team.",
    overview: "A complete precision agriculture service purpose-built for tea estates, combining drone surveying, AI-powered crop analytics, and precision spraying into one subscription. A trained field team handles every stage, from aerial mapping to spray execution to digital reporting.",
    problem: "Manual spraying across large, often difficult tea estate terrain is slow, inconsistent, and applies chemicals uniformly rather than where the crop actually needs them — while investing in drone hardware, pilot training, and analytics software independently is a significant capital and expertise barrier for most estates.",
    solution: "Rather than estates buying and maintaining drone equipment themselves, the service is designed to be subscription-based. Multispectral drones survey the plantation and generate vegetation health maps intended to identify stressed zones before symptoms are visible. Spray missions are planned around actual crop condition rather than blanket application, with GPS-guided drones executing precision spraying and every mission logged on a digital dashboard covering coverage, chemical usage, and cost.",
    results: "Built to replace manual, blanket-application spraying with targeted, GPS-guided precision application — designed to reduce chemical waste and remove direct worker exposure to pesticides during spraying.",
    features: ["Aerial crop health mapping", "AI-assisted spray planning", "GPS-guided precision spraying", "Digital mission & compliance logs", "Estate analytics dashboard"],
    diagram: "DroneServiceDiagram",
    screens: ["PlantationHealthMap", "SprayCoverageCard", "ChemicalUsageCard"],
  },
];

export const testimonials = [
  { quote: "SystemFriendly Labs rebuilt our reconciliation process end to end. What used to take our finance team three days now takes an afternoon.", name: "Placeholder Name", role: "CFO, Placeholder Company" },
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
  { group: "Frontend", items: ["TypeScript", "Next.js", "React", "React Native", "Tailwind CSS", "Flutter"] },
  { group: "Backend", items: ["Node.js", "Python", "Go", "Java", "REST APIs", "GraphQL", "WebSockets"] },
  { group: "Database", items: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Supabase", "Prisma"] },
  { group: "Cloud", items: ["AWS", "Vercel", "Cloudflare", "Docker", "Kubernetes", "Nginx"] },
  { group: "Data / AI", items: ["Python", "dbt", "Pandas", "Claude API", "Groq", "LangChain", "OpenAI"] },
  { group: "Ops", items: ["Terraform", "GitHub Actions", "Datadog", "Sentry", "CI/CD", "Linux"] },
  { group: "Integrations", items: ["Razorpay", "Stripe", "Twilio", "SendGrid", "WhatsApp API", "Google APIs"] },
];

export const whyUs = [
  { num: "01", title: "Senior engineers only", desc: "No junior developers learning on your production system." },
  { num: "02", title: "Fixed scope, fixed price", desc: "You know the cost and timeline before we write a line of code." },
  { num: "03", title: "You own the code", desc: "Full source and documentation handed over, no vendor lock-in." },
  { num: "04", title: "We stay after launch", desc: "Post-launch support built into every engagement, not sold separately." },
];

export const foundingNote = "We're a brand new company. There's no multi-year history to show yet — what we can tell you is why we started: we kept seeing businesses stuck with software that didn't actually fit them, and decided the honest answer was to build things properly instead of promising more than we could deliver. Everything else, we're building now, with the people who choose to work with us early.";

export const values = [
  { title: "We actually listen first", desc: "Before we talk about what we can build, we want to understand what's actually broken. Most of our best work starts with a conversation, not a pitch." },
  { title: "We say what we mean", desc: "If something won't work, we'll tell you before you spend a rupee on it. If a timeline is unrealistic, we'll say so upfront, not three weeks in." },
  { title: "We show up when we say we will", desc: "A deadline we agreed to is a promise, not a target. If we're going to be late, you'll hear it from us early — not find out on the day." },
  { title: "The problem is what keeps us interested", desc: "The projects we remember years later are the hard ones — the ones that made us think. That's what actually keeps us doing this." },
];

