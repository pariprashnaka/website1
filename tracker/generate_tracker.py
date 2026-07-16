#!/usr/bin/env python3
"""
Project Tracker Generator — Nexora Systems
Full parity with the 9-sheet Excel workbook, rendered as a tabbed HTML page.

Run `python3 generate_tracker.py` any time to rebuild PROJECT_TRACKER.html
from the data below. Update the data, re-run, done.
"""

LAST_UPDATED = "2026-07-19"

# =========================================================================
# SHEET 2 DATA — WEBSITE BUILD TRACKER
# (Page, Type, Priority, Status, Content Ready, SEO Done, Schema Added, Live URL, Target Date, Notes)
# =========================================================================
PAGES = [
    ("Homepage", "Core", "P0", "Done", "Yes", "Yes", "Yes (Organization)", "/", "Complete", "Live, canonical + OG set"),
    ("Services", "Core", "P0", "Done", "Yes", "Yes", "No", "/services", "Complete", "Rebuilt with alternating-row visuals"),
    ("Products", "Core", "P0", "Done", "Yes", "Yes", "No", "/products", "Complete", "4 real products live"),
    ("Case Studies (index)", "Core", "P0", "Done", "Yes", "Yes", "No", "/case-studies", "Complete", "Card grid"),
    ("Case Study — Seven-Café Chain", "Core", "P1", "Done", "Yes", "Yes", "No", "/case-studies/seven-cafe-chain", "Complete", "Real client story, real cited industry data"),
    ("About", "Core", "P0", "Done", "Yes", "Yes", "No", "/about", "Complete", "Bento layout"),
    ("Contact", "Core", "P0", "Done", "Yes", "Yes", "No", "/contact", "Complete", "Form + WhatsApp + email CTAs"),
    ("Blog (index)", "Core", "P0", "Done", "Yes", "Yes", "No", "/blog", "Complete", "Paginated, search + tag filter"),
    ("Blog posts (25 live)", "Blog", "P1", "Done", "Yes", "Yes", "Yes (BlogPosting)", "/blog/[slug]", "Ongoing", "See Blog Master Tracker"),
    ("Privacy Policy", "Legal", "P0", "Done", "Yes", "Yes", "No", "/privacy", "Complete", "Needs real company name + address before launch"),
    ("Terms & Conditions", "Legal", "P0", "Done", "Yes", "Yes", "No", "/terms", "Complete", "Needs real company name + jurisdiction before launch"),
    ("Sitemap.xml", "Technical", "P0", "Done", "N/A", "Yes", "N/A", "/sitemap.xml", "Complete", "Dynamic, includes all pages"),
    ("Robots.txt", "Technical", "P0", "Done", "N/A", "Yes", "N/A", "/robots.txt", "Complete", "Points to sitemap"),
]

# =========================================================================
# SHEET 3 DATA — BLOG MASTER TRACKER
# (Title, Cluster, Primary Keyword, Search Intent, Word Count, Written?, Published?, Publish Date, Slug, Priority, Notes)
# =========================================================================
BLOGS_PUBLISHED = [
    ("Why Indian SMBs Are Switching From Excel to Custom Inventory Software", "ERP Solutions", "excel to custom inventory software India", "excel-to-custom-inventory-software"),
    ("ERP vs CRM vs Custom Software: Which Does Your Business Actually Need?", "ERP Solutions", "ERP vs CRM vs custom software", "erp-vs-crm-vs-custom-software"),
    ("How Much Does Custom Software Development Cost in India?", "SaaS Development", "custom software development cost India", "custom-software-development-cost-india"),
    ("What Is Business Process Automation and Where Should You Start?", "Business Automation", "business process automation guide", "business-process-automation-guide"),
    ("SaaS vs Custom Software: The Real Decision Framework", "SaaS Development", "SaaS vs custom software", "saas-vs-custom-software-decision-framework"),
    ("Signs Your Business Has Outgrown Its Current Software", "ERP Solutions", "business outgrown current software", "signs-business-outgrown-current-software"),
    ("AI Solutions for Small and Medium Businesses: What's Actually Useful Right Now", "AI Solutions", "AI solutions for small businesses", "ai-solutions-small-medium-businesses"),
    ("Cloud vs On-Premise Software: What Makes Sense for Indian Businesses", "Cloud Engineering", "cloud vs on-premise software India", "cloud-vs-on-premise-software-india"),
    ("What Is an ERP System and Does Your Manufacturing Business Need One?", "ERP Solutions", "ERP system for manufacturing business", "what-is-erp-manufacturing-business"),
    ("GST-Compliant Inventory Software: What Features Actually Matter", "ERP Solutions", "GST compliant inventory software", "gst-compliant-inventory-software-features"),
    ("Multi-Location Inventory Sync: A Practical Guide for Indian Distributors", "ERP Solutions", "multi-location inventory sync", "multi-location-inventory-sync-guide"),
    ("Batch and Expiry Tracking Software for Pharma and FMCG Distributors", "ERP Solutions", "batch expiry tracking software pharma", "batch-expiry-tracking-pharma-fmcg"),
    ("Purchase-to-Pay Automation: Where Most Indian SMBs Actually Start", "Business Automation", "purchase to pay automation", "purchase-to-pay-automation-smb"),
    ("What Is an AI Agent, and How Is It Different From a Chatbot?", "AI Solutions", "AI agent vs chatbot", "ai-agent-vs-chatbot-explained"),
    ("LLMs Explained: What a Large Language Model Actually Is", "AI Solutions", "what is an LLM explained", "llms-explained-large-language-model"),
    ("Prompt Engineering Basics: How to Get Better Results From AI Tools", "AI Solutions", "prompt engineering basics", "prompt-engineering-basics-guide"),
    ("What Is an API? A Plain-English Explanation for Business Owners", "Web Development", "what is an API explained simply", "what-is-an-api-explained"),
    ("What Is SaaS? A Complete Beginner's Guide", "SaaS Development", "what is SaaS beginners guide", "what-is-saas-beginners-guide"),
    ("AI Hallucinations Explained: Why AI Tools Sometimes Get Things Wrong", "AI Solutions", "AI hallucinations explained", "ai-hallucinations-explained"),
    ("How Businesses Are Actually Using AI Agents Right Now", "AI Solutions", "how businesses use AI agents", "how-businesses-use-ai-agents-right-now"),
    ("Machine Learning vs Deep Learning vs AI: Untangling the Terms", "AI Solutions", "machine learning vs deep learning vs AI", "ml-vs-deep-learning-vs-ai-explained"),
    ("What Is Cloud Computing? A Simple Explanation for Non-Technical Readers", "Cloud Engineering", "what is cloud computing explained", "what-is-cloud-computing-explained"),
    ("Understanding AI Data Privacy: What Happens to Your Data When You Use AI Tools", "Security", "AI data privacy explained", "ai-data-privacy-explained"),
    ("AI Agents vs Automation: What's the Actual Difference?", "Business Automation", "AI agents vs automation", "ai-agents-vs-automation-explained"),
    ("AI Chatbots vs Human Support: Where Each Actually Wins", "CRM Solutions", "AI chatbots vs human support", "ai-chatbots-vs-human-support"),
]

BLOGS_PLANNED = [
    ("Cybersecurity Basics Every Small Business Owner Should Know", "Security", "cybersecurity basics for small business", "High"),
    ("What Is Phishing, and How Can Your Business Avoid It?", "Security", "what is phishing business", "High"),
    ("Ransomware Explained: What Small Businesses Need to Know", "Security", "ransomware small business", "High"),
    ("Understanding Data Backups: What Every Business Owner Should Know", "Security", "data backup guide business", "Medium-High"),
    ("India's DPDP Act: What It Actually Means for Your Business Software", "Security", "DPDP Act India business software", "High"),
    ("Lead Management Software: What Actually Prevents Leads From Falling Through", "CRM Solutions", "lead management software India", "High"),
    ("WhatsApp Business API for Sales Teams: What It Actually Does", "CRM Solutions", "WhatsApp Business API sales", "High"),
    ("Invoice Automation: What It Actually Saves and How to Start", "Business Automation", "invoice automation software", "High"),
    ("HR and Payroll Automation for Growing Indian Businesses", "Business Automation", "HR payroll automation India", "Medium-High"),
    ("E-Commerce Tech Stack: What You Actually Need to Launch and Scale", "SaaS Development", "e-commerce tech stack India", "High"),
    ("What Makes a Good Business Website in 2026", "Web Development", "good business website 2026", "High"),
    ("Mobile App Development Cost in India: An Honest Breakdown", "Mobile Development", "mobile app development cost India", "High"),
    ("How to Choose a Software Development Partner Without Getting Burned", "Strategy", "choose software development partner", "High"),
    ("Digital Tools Every Logistics Business Needs in 2026", "ERP Solutions", "logistics business digital tools", "Medium-High"),
    ("Warehouse Management Software: A Practical Guide for Growing Distributors", "ERP Solutions", "warehouse management software India", "Medium-High"),
    ("Clinic and Hospital Management Software: A Buyer's Guide for India", "ERP Solutions", "clinic hospital management software India", "Medium-High"),
    ("Fintech Compliance Software: What Indian Startups Actually Need", "Security", "fintech compliance software India", "Medium-High"),
    ("Sales Pipeline Visibility: Why Growing Businesses Lose Track of Deals", "CRM Solutions", "sales pipeline visibility CRM", "Medium-High"),
    ("Customer Support Ticketing Systems: A Practical Comparison for SMBs", "CRM Solutions", "customer support ticketing system SMB", "Medium"),
    ("Website Speed and Core Web Vitals: Why It Actually Affects Your Leads", "Web Development", "website speed core web vitals leads", "Medium-High"),
    ("E-Commerce Platform Comparison: Shopify vs WooCommerce vs Custom", "Web Development", "Shopify vs WooCommerce vs custom", "High"),
    ("Total Cost of Ownership: The Software Cost Number Nobody Talks About", "Strategy", "total cost of ownership software", "Medium-High"),
    ("What Is Business Intelligence Software, and Do You Actually Need It?", "Data Engineering", "business intelligence software need", "Medium-High"),
    ("Cloud Migration Checklist for Indian SMBs", "Cloud Engineering", "cloud migration checklist India", "Medium-High"),
    ("Restaurant and F&B Inventory Management: A Practical Guide", "ERP Solutions", "restaurant F&B inventory management", "Medium"),
]

print("Part 1 (Pages + Blogs) loaded:", len(PAGES), "pages,", len(BLOGS_PUBLISHED) + len(BLOGS_PLANNED), "blogs")

# =========================================================================
# SHEET 4 DATA — SEO TASK TRACKER (62 tasks, full columns)
# (Task, Category, Sub-Category, Priority, Effort, Status, Owner, Deadline, Impact, Notes)
# =========================================================================
SEO_TASKS = [
    ("Unique title tag on every page", "Technical SEO", "Meta Tags", "P0", "Low", "Done", "Dev", "", "High", "Verified across all 11 static + dynamic routes"),
    ("Unique meta description on every page", "Technical SEO", "Meta Tags", "P0", "Low", "Done", "Dev", "", "High", "All within ~155-char display limit"),
    ("Sitemap.xml — auto-generated, dynamic", "Technical SEO", "Sitemap", "P0", "Medium", "Done", "Dev", "", "High", "Includes blog, case studies, privacy, terms"),
    ("Robots.txt configured", "Technical SEO", "Crawlability", "P0", "Low", "Done", "Dev", "", "Medium", "Points to sitemap"),
    ("Canonical tags — every page", "Technical SEO", "Duplicate Content", "P0", "Medium", "Done", "Dev", "", "High", "Added sitewide"),
    ("Open Graph tags — homepage + blog", "Technical SEO", "Social Sharing", "P1", "Low", "Done", "Dev", "", "Medium", "Products/case-studies/services/about/contact fall back to root OG"),
    ("Twitter card tags — homepage + blog", "Technical SEO", "Social Sharing", "P1", "Low", "Done", "Dev", "", "Medium", "Same gap as Open Graph"),
    ("H1 structure — exactly one per page", "Technical SEO", "On-Page Structure", "P0", "Low", "Done", "Dev", "", "Medium", "Verified across all page types"),
    ("Mobile responsiveness — product diagrams", "Technical SEO", "Core Web Vitals", "P0", "Medium", "Done", "Dev", "", "High", "Fixed SVG clipping + text-scaling bugs"),
    ("Blog pagination (12/page)", "Technical SEO", "Site Performance", "P1", "Medium", "Done", "Dev", "", "Medium", "Prevents huge unpaginated DOM"),
    ("HTTPS / SSL certificate", "Technical SEO", "Security", "P0", "Low", "Done", "Dev", "", "High", "Handled automatically by Vercel"),
    ("Site compression & minification", "Technical SEO", "Site Performance", "P1", "Low", "Done", "Dev", "", "Medium", "Handled automatically by Next.js build"),
    ("URL structure audit", "Technical SEO", "On-Page Structure", "P1", "Low", "Done", "Dev", "", "Medium", "All routes verified descriptive and hyphenated"),
    ("Broken internal link check", "Technical SEO", "Site Health", "P1", "Medium", "Done", "Dev", "", "High", "Verified clean during full SEO diagnostic"),
    ("Font loading optimization", "Technical SEO", "Site Performance", "P2", "Low", "Done", "Dev", "", "Low", "next/font handles this automatically"),
    ("Open Graph / Twitter — remaining pages", "Technical SEO", "Social Sharing", "P2", "Low", "Not Started", "Dev", "", "Medium", "Products, Case Studies, Services, About, Contact"),
    ("Core Web Vitals live audit", "Technical SEO", "Core Web Vitals", "P2", "Low", "Not Started", "Dev", "", "Medium", "Needs a live production domain"),
    ("Image alt text strategy", "Technical SEO", "Accessibility", "P3", "Low", "Not Started", "Dev", "", "Low", "No real image files exist yet"),
    ("Google Rich Results Test — validate schema", "Technical SEO", "Schema Validation", "P2", "Low", "Not Started", "Dev", "", "Medium", "Run once FAQ/Product schema are added"),
    ("Duplicate content check across blog posts", "Technical SEO", "Duplicate Content", "P3", "Medium", "Not Started", "Marketing", "", "Low", "Manual spot-check only so far"),
    ("Keyword placement audit — H2s vs primary keyword", "On-Page SEO", "Keyword Optimization", "P2", "Medium", "Not Started", "Marketing", "", "Medium", "Titles well-aligned; H2 structure not formally audited"),
    ("Internal linking audit — blog to blog", "On-Page SEO", "Internal Links", "P1", "Medium", "In Progress", "Dev", "", "High", "Several cross-links added; not systematically audited"),
    ("Internal linking — Café product ↔ case study", "On-Page SEO", "Internal Links", "P0", "Low", "Done", "Dev", "", "High", "Added both directions"),
    ("Internal linking — remaining products ↔ future case studies", "On-Page SEO", "Internal Links", "P1", "Low", "Not Started", "Dev", "", "High", "Pattern exists, needs more real case studies"),
    ("Meta description CTR review", "On-Page SEO", "Meta Tags", "P3", "Low", "Not Started", "Marketing", "", "Low", "Requires live Search Console CTR data"),
    ("Anchor text diversity audit", "On-Page SEO", "Internal Links", "P3", "Medium", "Not Started", "Marketing", "", "Low", ""),
    ("Table of contents for long-form blog posts", "On-Page SEO", "UX / Structure", "P3", "Medium", "Not Started", "Dev", "", "Low", "Would help longer guides"),
    ("Related posts / read-next widget", "On-Page SEO", "Internal Links", "P2", "Medium", "Not Started", "Dev", "", "Medium", "No automated related-content module yet"),
    ("Cornerstone / pillar content strategy", "On-Page SEO", "Content Strategy", "P2", "Medium", "Not Started", "Marketing", "", "Medium", "Pick 3-5 posts to build topical authority around"),
    ("Organization schema", "Schema Markup", "JSON-LD", "P0", "Low", "Done", "Dev", "", "High", "In root layout"),
    ("BlogPosting schema — all blog posts", "Schema Markup", "JSON-LD", "P0", "Low", "Done", "Dev", "", "High", "Includes datePublished + dateModified"),
    ("FAQ schema — blog posts", "Schema Markup", "JSON-LD", "P1", "Medium", "Not Started", "Dev", "", "High", "Every post already has a Common Questions section"),
    ("Product schema — /products", "Schema Markup", "JSON-LD", "P1", "Medium", "Not Started", "Dev", "", "Medium", "4 real products ready to mark up"),
    ("Breadcrumb schema — all pages", "Schema Markup", "JSON-LD", "P2", "Medium", "Not Started", "Dev", "", "Medium", "Breadcrumb UI exists visually, not marked up"),
    ("Review/Article schema — case studies", "Schema Markup", "JSON-LD", "P2", "Low", "Not Started", "Dev", "", "Medium", "Would help case study rich results"),
    ("LocalBusiness schema", "Schema Markup", "JSON-LD", "P2", "Low", "Not Started", "Dev", "", "Medium", "Blocked on real registered business address"),
    ("WebSite schema (sitelinks searchbox)", "Schema Markup", "JSON-LD", "P3", "Low", "Not Started", "Dev", "", "Low", ""),
    ("Google Search Console — verify + submit sitemap", "Off-Page SEO", "Search Console", "P0", "Low", "Not Started", "Owner", "", "High", "Blocked on real domain being live"),
    ("Google Business Profile", "Off-Page SEO", "Local SEO", "P1", "Low", "Not Started", "Owner", "", "Medium", "Free, helps local search visibility"),
    ("IndiaMART listing", "Off-Page SEO", "Directories", "P2", "Low", "Not Started", "Owner", "", "Low", ""),
    ("Justdial listing", "Off-Page SEO", "Directories", "P2", "Low", "Not Started", "Owner", "", "Low", ""),
    ("Crunchbase / Tracxn listing", "Off-Page SEO", "Directories", "P2", "Low", "Not Started", "Owner", "", "Low", ""),
    ("LinkedIn Company Page", "Off-Page SEO", "Social Presence", "P1", "Low", "Not Started", "Owner", "", "Medium", ""),
    ("Backlink outreach — guest posts", "Off-Page SEO", "Backlinks", "P2", "High", "Not Started", "Marketing", "", "High", "Single biggest ranking factor after content quality"),
    ("Backlink tracking log", "Off-Page SEO", "Backlinks", "P3", "Low", "Not Started", "Marketing", "", "Low", ""),
    ("Press / PR outreach", "Off-Page SEO", "PR", "P3", "High", "Not Started", "Owner", "", "Medium", ""),
    ("Partner / supplier cross-linking", "Off-Page SEO", "Backlinks", "P3", "Medium", "Not Started", "Owner", "", "Low", "e.g. drone hardware or POS hardware partners"),
    ("YouTube / video content presence", "Off-Page SEO", "Content Distribution", "P3", "High", "Not Started", "Marketing", "", "Low", ""),
    ("Publishing queue — remaining 25 blogs", "Blog SEO", "Content Pipeline", "P1", "High", "Not Started", "Dev", "", "High", "See Blog Master Tracker + Content Calendar"),
    ("Meta description per blog — all 25 published", "Blog SEO", "Meta Tags", "P0", "Low", "Done", "Dev", "", "High", "Unique per post, verified"),
    ("Real keyword validation — full 50-article list", "Blog SEO", "Keyword Research", "P1", "Medium", "Not Started", "Marketing", "", "High", "Current keywords are editorial estimates, not tool-verified"),
    ("Internal linking from new blogs to products", "Blog SEO", "Internal Links", "P2", "Medium", "In Progress", "Dev", "", "Medium", "Some posts link to /contact; product-specific linking inconsistent"),
    ("Content freshness policy — revisit old posts", "Blog SEO", "Content Strategy", "P2", "Low", "Not Started", "Marketing", "", "Medium", "'Updated' date pattern built — needs a review cadence"),
    ("Featured snippet optimization for FAQ sections", "Blog SEO", "SERP Features", "P2", "Medium", "Not Started", "Marketing", "", "Medium", "Every post already has Q&A content structured for this"),
    ("Content gap analysis vs competitors", "Blog SEO", "Content Strategy", "P2", "Medium", "Not Started", "Marketing", "", "Medium", "Needs real competitor data first"),
    ("Weekly Search Console check", "Monitoring", "Ongoing", "P2", "Low", "Not Started", "Owner", "", "Medium", "Blocked on GSC being set up"),
    ("Monthly full SEO audit", "Monitoring", "Ongoing", "P3", "Medium", "Not Started", "Marketing", "", "Medium", "Use this tracker as the audit template"),
    ("Rank tracking — priority keywords", "Monitoring", "Ongoing", "P2", "Medium", "Not Started", "Marketing", "", "Medium", "See Performance Log tab"),
    ("GA4 activation", "Monitoring", "Analytics", "P0", "Low", "Not Started", "Owner", "", "High", "Blocked on real GA4 property ID"),
    ("Domain + company name finalized", "Monitoring", "Foundation", "P0", "Low", "Not Started", "Owner", "", "High", "Blocks GSC, sitemap base URL, canonical accuracy"),
    ("Uptime monitoring", "Monitoring", "Site Health", "P2", "Low", "Not Started", "Dev", "", "Medium", ""),
    ("Server response time monitoring", "Monitoring", "Site Health", "P3", "Low", "Not Started", "Dev", "", "Low", ""),
]

print("Part 2 (SEO Tasks) loaded:", len(SEO_TASKS), "tasks")

# =========================================================================
# SHEET 5 DATA — KEYWORD DATABASE
# (Keyword, Cluster, Intent, Priority, Target Page, Blog Assigned)
# Est. Monthly Searches and Difficulty are honestly marked N/A — not tool-verified.
# =========================================================================
KEYWORDS = [
    ("custom software development cost India", "SaaS Development", "Commercial", "P1", "/blog/custom-software-development-cost-india", "custom-software-development-cost-india"),
    ("ERP vs CRM vs custom software", "ERP Solutions", "Commercial", "P1", "/blog/erp-vs-crm-vs-custom-software", "erp-vs-crm-vs-custom-software"),
    ("SaaS vs custom software", "SaaS Development", "Commercial", "P1", "/blog/saas-vs-custom-software-decision-framework", "saas-vs-custom-software-decision-framework"),
    ("what is an AI agent", "AI Solutions", "Informational", "P0", "/blog/ai-agent-vs-chatbot-explained", "ai-agent-vs-chatbot-explained"),
    ("AI agent vs chatbot", "AI Solutions", "Informational", "P0", "/blog/ai-agent-vs-chatbot-explained", "ai-agent-vs-chatbot-explained"),
    ("what is an LLM", "AI Solutions", "Informational", "P0", "/blog/llms-explained-large-language-model", "llms-explained-large-language-model"),
    ("prompt engineering basics", "AI Solutions", "Informational", "P1", "/blog/prompt-engineering-basics-guide", "prompt-engineering-basics-guide"),
    ("what is an API", "Web Development", "Informational", "P0", "/blog/what-is-an-api-explained", "what-is-an-api-explained"),
    ("what is SaaS", "SaaS Development", "Informational", "P0", "/blog/what-is-saas-beginners-guide", "what-is-saas-beginners-guide"),
    ("AI hallucinations explained", "AI Solutions", "Informational", "P1", "/blog/ai-hallucinations-explained", "ai-hallucinations-explained"),
    ("machine learning vs deep learning vs AI", "AI Solutions", "Informational", "P1", "/blog/ml-vs-deep-learning-vs-ai-explained", "ml-vs-deep-learning-vs-ai-explained"),
    ("what is cloud computing", "Cloud Engineering", "Informational", "P1", "/blog/what-is-cloud-computing-explained", "what-is-cloud-computing-explained"),
    ("GST compliant inventory software", "ERP Solutions", "Commercial", "P1", "/blog/gst-compliant-inventory-software-features", "gst-compliant-inventory-software-features"),
    ("multi-location inventory sync", "ERP Solutions", "Commercial", "P2", "/blog/multi-location-inventory-sync-guide", "multi-location-inventory-sync-guide"),
    ("business process automation guide", "Business Automation", "Informational", "P1", "/blog/business-process-automation-guide", "business-process-automation-guide"),
    ("AI agents vs automation", "Business Automation", "Informational", "P1", "/blog/ai-agents-vs-automation-explained", "ai-agents-vs-automation-explained"),
    ("AI chatbots vs human support", "CRM Solutions", "Informational", "P1", "/blog/ai-chatbots-vs-human-support", "ai-chatbots-vs-human-support"),
    ("cybersecurity basics for small business", "Security", "Informational", "P1", "/blog/[planned]", "PLANNED"),
    ("lead management software India", "CRM Solutions", "Commercial", "P1", "/blog/[planned]", "PLANNED"),
    ("WhatsApp Business API sales", "CRM Solutions", "Commercial", "P1", "/blog/[planned]", "PLANNED"),
    ("invoice automation software", "Business Automation", "Commercial", "P1", "/blog/[planned]", "PLANNED"),
    ("mobile app development cost India", "Mobile Development", "Commercial", "P1", "/blog/[planned]", "PLANNED"),
    ("how to choose a software development partner", "Strategy", "Commercial", "P1", "/blog/[planned]", "PLANNED"),
    ("DPDP Act India business software", "Security", "Informational", "P1", "/blog/[planned]", "PLANNED"),
    ("e-commerce tech stack India", "SaaS Development", "Commercial", "P1", "/blog/[planned]", "PLANNED"),
    ("custom ERP software India", "ERP Solutions", "Commercial", "P0", "/services", "N/A — service page"),
    ("AI automation company India", "AI Solutions", "Commercial", "P0", "/services", "N/A — service page"),
    ("custom software development company India", "SaaS Development", "Commercial", "P0", "/", "N/A — homepage"),
]

# =========================================================================
# SHEET 6 DATA — CONTENT CALENDAR (25 planned blogs mapped to weeks)
# =========================================================================
def build_content_calendar():
    months = ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"]
    rows = []
    for i, (title, cluster, kw, priority) in enumerate(BLOGS_PLANNED):
        month = months[min(i // 4, 5)]
        week = (i % 4) + 1
        rows.append((month, f"Week {week}", title, cluster, kw, 1400, "Not Started", len(BLOGS_PUBLISHED) + i + 1, priority))
    return rows

# =========================================================================
# SHEET 7 DATA — WEEKLY ACTION PLAN (Week, Category, Task, Time, Status, Done, Impact, Notes)
# =========================================================================
WEEKLY_TASKS = [
    (1, "Foundation", "Finalize real company name and domain", "3 hrs", "Not Started", False, "High", "Blocks GSC, canonical accuracy"),
    (1, "Foundation", "Register / confirm real domain purchase", "1 hr", "Not Started", False, "High", ""),
    (1, "Technical SEO", "Set up Google Search Console once domain is live", "30 min", "Not Started", False, "High", ""),
    (1, "Technical SEO", "Submit sitemap.xml to Search Console", "15 min", "Not Started", False, "High", ""),
    (1, "Technical SEO", "Activate GA4 with real property ID", "30 min", "Not Started", False, "High", ""),
    (1, "Blog SEO", "Publish Week 1 planned article — Cybersecurity Basics", "3 hrs", "Not Started", False, "High", ""),
    (1, "Off-Page SEO", "Set up Google Business Profile", "30 min", "Not Started", False, "Medium", ""),
    (2, "Blog SEO", "Publish Week 2 planned article — What Is Phishing", "3 hrs", "Not Started", False, "High", ""),
    (2, "Schema Markup", "Add FAQ schema to 5 highest-traffic-potential posts", "2 hrs", "Not Started", False, "High", ""),
    (2, "On-Page SEO", "Audit internal linking across all 25 live posts", "2 hrs", "Not Started", False, "High", ""),
    (2, "Off-Page SEO", "Set up LinkedIn Company Page", "1 hr", "Not Started", False, "Medium", ""),
    (2, "Keyword Research", "Run top 10 priority keywords through a real keyword tool", "1 hr", "Not Started", False, "High", ""),
    (3, "Blog SEO", "Publish Week 3 planned article — Ransomware Explained", "3 hrs", "Not Started", False, "High", ""),
    (3, "Schema Markup", "Add Product schema to /products page", "1.5 hrs", "Not Started", False, "Medium", ""),
    (3, "Off-Page SEO", "Submit to IndiaMART directory", "30 min", "Not Started", False, "Low", ""),
    (3, "Monitoring", "First weekly Search Console check", "30 min", "Not Started", False, "Medium", ""),
    (4, "Blog SEO", "Publish Week 4 planned article — Understanding Data Backups", "3 hrs", "Not Started", False, "High", ""),
    (4, "Off-Page SEO", "Submit to Justdial directory", "30 min", "Not Started", False, "Low", ""),
    (4, "Technical SEO", "Run Google Rich Results Test on schema", "30 min", "Not Started", False, "Medium", ""),
    (4, "Monitoring", "Month 1 mini-audit — check indexed page count", "1 hr", "Not Started", False, "Medium", ""),
    (5, "Blog SEO", "Publish Week 5 planned article — India's DPDP Act", "3 hrs", "Not Started", False, "High", ""),
    (5, "Schema Markup", "Add Breadcrumb schema sitewide", "2 hrs", "Not Started", False, "Medium", ""),
    (5, "Off-Page SEO", "Begin backlink outreach — identify 5 target publications", "2 hrs", "Not Started", False, "High", ""),
    (6, "Blog SEO", "Publish Week 6 planned article — Lead Management Software", "3 hrs", "Not Started", False, "High", ""),
    (6, "On-Page SEO", "Add related-posts widget to blog post template", "3 hrs", "Not Started", False, "Medium", ""),
    (6, "Monitoring", "Second weekly Search Console check", "30 min", "Not Started", False, "Medium", ""),
    (7, "Blog SEO", "Publish Week 7 planned article — WhatsApp Business API", "3 hrs", "Not Started", False, "High", ""),
    (7, "Off-Page SEO", "Submit to Crunchbase / Tracxn", "30 min", "Not Started", False, "Low", ""),
    (7, "Content Strategy", "Select 3-5 cornerstone / pillar posts", "1 hr", "Not Started", False, "Medium", ""),
    (8, "Blog SEO", "Publish Week 8 planned article — Invoice Automation", "3 hrs", "Not Started", False, "High", ""),
    (8, "Off-Page SEO", "First backlink outreach emails sent", "2 hrs", "Not Started", False, "High", ""),
    (8, "Monitoring", "Month 2 mini-audit", "1 hr", "Not Started", False, "Medium", ""),
    (9, "Blog SEO", "Publish Week 9 planned article — HR and Payroll Automation", "3 hrs", "Not Started", False, "High", ""),
    (9, "On-Page SEO", "Content freshness pass — update oldest 5 posts", "2 hrs", "Not Started", False, "Medium", ""),
    (10, "Blog SEO", "Publish Week 10 planned article — E-Commerce Tech Stack", "3 hrs", "Not Started", False, "High", ""),
    (10, "Monitoring", "Review keyword rank movement so far", "1 hr", "Not Started", False, "Medium", ""),
    (11, "Blog SEO", "Publish Week 11 planned article — What Makes a Good Business Website", "3 hrs", "Not Started", False, "High", ""),
    (11, "Off-Page SEO", "Follow up on backlink outreach", "1 hr", "Not Started", False, "Medium", ""),
    (12, "Blog SEO", "Publish Week 12 planned article — Mobile App Development Cost", "3 hrs", "Not Started", False, "High", ""),
    (12, "Monitoring", "Month 3 full audit — use this tracker as the template", "2 hrs", "Not Started", False, "High", ""),
]

# =========================================================================
# SHEET 9 DATA — PERFORMANCE LOG (empty, waiting for real GSC/GA4 data)
# =========================================================================
PERFORMANCE_MONTHS = ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"]
RANK_KEYWORDS = [
    "custom software development cost India", "ERP vs CRM vs custom software", "what is an AI agent",
    "AI agent vs chatbot", "what is an LLM", "what is an API", "what is SaaS",
    "GST compliant inventory software", "custom ERP software India", "AI automation company India",
]

print("Part 3 (Keywords, Calendar, Weekly, Performance) loaded:", len(KEYWORDS), "keywords,", len(WEEKLY_TASKS), "weekly tasks")

# =========================================================================
# RENDER HELPERS
# =========================================================================

def esc(s):
    return str(s).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

def badge(status):
    cls = {"Done": "st-done", "In Progress": "st-progress", "Not Started": "st-notstarted", "Yes": "st-done", "No": "st-notstarted"}.get(status, "")
    return f'<span class="badge {cls}">{esc(status)}</span>'

def priority_badge(p):
    cls = {"P0": "pr-p0", "P1": "pr-p1", "P2": "pr-p2", "P3": "pr-p3"}.get(p, "")
    return f'<span class="pr {cls}">{esc(p)}</span>'

def render_dashboard():
    pages_done = sum(1 for p in PAGES if p[3] == "Done")
    blogs_pub = len(BLOGS_PUBLISHED)
    blogs_plan = len(BLOGS_PLANNED)
    seo_done = sum(1 for t in SEO_TASKS if t[5] == "Done")
    seo_total = len(SEO_TASKS)
    seo_pct = round(seo_done / seo_total * 100)
    blog_pct = round(blogs_pub / (blogs_pub + blogs_plan) * 100)
    schema_tasks = [t for t in SEO_TASKS if t[1] == "Schema Markup"]
    schema_done = sum(1 for t in schema_tasks if t[5] == "Done")
    schema_pct = round(schema_done / len(schema_tasks) * 100) if schema_tasks else 0
    offpage_tasks = [t for t in SEO_TASKS if t[1] == "Off-Page SEO"]
    offpage_done = sum(1 for t in offpage_tasks if t[5] == "Done")
    offpage_pct = round(offpage_done / len(offpage_tasks) * 100) if offpage_tasks else 0
    tech_tasks = [t for t in SEO_TASKS if t[1] == "Technical SEO"]
    tech_done = sum(1 for t in tech_tasks if t[5] == "Done")
    tech_pct = round(tech_done / len(tech_tasks) * 100) if tech_tasks else 0

    plan_rows = [
        ("Month 1", "Foundation — domain, GSC, GA4, first 4 planned blogs live", "Search Console verified, sitemap submitted, 29 of 50 articles published"),
        ("Month 2", "Schema markup rollout + backlink outreach begins", "FAQ + Product schema live, first outreach emails sent"),
        ("Month 3", "Steady publishing cadence + first full audit", "33 of 50 articles published, Month 1-3 performance reviewed"),
        ("Month 4", "Content freshness pass on oldest posts + directory listings", "IndiaMART, Justdial, Crunchbase live"),
        ("Month 5", "Cornerstone content strategy + related-posts widget", "3-5 pillar posts identified and interlinked"),
        ("Month 6", "Full 50-article roadmap complete + rank review", "All planned articles published, keyword rank tracker shows real movement"),
    ]
    plan_html = "".join(f"<tr><td class='mono'>{m}</td><td>{f}</td><td class='muted'>{ms}</td></tr>" for m, f, ms in plan_rows)

    return f"""
    <div class="kpis">
      <div class="kpi"><div class="num">{blogs_pub}</div><div class="label">Blogs Published</div></div>
      <div class="kpi"><div class="num">{blogs_plan}</div><div class="label">Blogs Planned</div></div>
      <div class="kpi"><div class="num">{pages_done}</div><div class="label">Pages Live</div></div>
      <div class="kpi"><div class="num">{seo_done}</div><div class="label">SEO Tasks Done</div></div>
      <div class="kpi"><div class="num">{seo_total - seo_done}</div><div class="label">SEO Tasks Pending</div></div>
    </div>

    <div class="bar-wrap">
      <div class="bar-row"><div class="bar-label">Website Pages</div><div class="bar-track"><div class="bar-fill" style="width:{round(pages_done/len(PAGES)*100)}%"></div></div><div class="bar-pct">{round(pages_done/len(PAGES)*100)}%</div></div>
      <div class="bar-row"><div class="bar-label">Blog roadmap (of 50)</div><div class="bar-track"><div class="bar-fill" style="width:{blog_pct}%"></div></div><div class="bar-pct">{blog_pct}%</div></div>
      <div class="bar-row"><div class="bar-label">SEO tasks overall</div><div class="bar-track"><div class="bar-fill" style="width:{seo_pct}%"></div></div><div class="bar-pct">{seo_pct}%</div></div>
      <div class="bar-row"><div class="bar-label">Schema markup</div><div class="bar-track"><div class="bar-fill" style="width:{schema_pct}%"></div></div><div class="bar-pct">{schema_pct}%</div></div>
      <div class="bar-row"><div class="bar-label">Off-page SEO</div><div class="bar-track"><div class="bar-fill" style="width:{offpage_pct}%"></div></div><div class="bar-pct">{offpage_pct}%</div></div>
      <div class="bar-row"><div class="bar-label">Technical SEO</div><div class="bar-track"><div class="bar-fill" style="width:{tech_pct}%"></div></div><div class="bar-pct">{tech_pct}%</div></div>
    </div>

    <h3>6-Month Plan Snapshot</h3>
    <table><tr><th>Month</th><th>Primary Focus</th><th>Milestone</th></tr>{plan_html}</table>
    """

print("Dashboard renderer ready")

def render_pages():
    rows = ""
    for name, ptype, priority, status, content, seo, schema, url, target, notes in PAGES:
        rows += f"<tr><td>{esc(name)}</td><td class='muted'>{ptype}</td><td>{priority_badge(priority)}</td><td>{badge(status)}</td><td>{badge(content)}</td><td>{badge(seo)}</td><td class='muted'>{esc(schema)}</td><td class='mono muted small'>{esc(url)}</td><td class='muted'>{esc(target)}</td><td class='muted small'>{esc(notes)}</td></tr>"
    return f"<table><tr><th>Page</th><th>Type</th><th>Priority</th><th>Status</th><th>Content Ready</th><th>SEO Done</th><th>Schema</th><th>Live URL</th><th>Target Date</th><th>Notes</th></tr>{rows}</table>"

def render_blogs():
    rows = ""
    for i, (title, cluster, kw, slug) in enumerate(BLOGS_PUBLISHED, 1):
        rows += f"<tr><td class='mono muted'>{i:02d}</td><td>{esc(title)}</td><td class='muted'>{cluster}</td><td class='muted small'>{esc(kw)}</td><td class='muted'>Informational</td><td class='mono muted'>~1400</td><td>{badge('Yes')}</td><td>{badge('Yes')}</td><td class='muted'>2026-07</td><td class='mono muted small'>{esc(slug)}</td><td>{priority_badge('P1')}</td></tr>"
    for j, (title, cluster, kw, priority) in enumerate(BLOGS_PLANNED, len(BLOGS_PUBLISHED) + 1):
        pr = "P1" if priority == "High" else ("P2" if priority == "Medium-High" else "P3")
        rows += f"<tr><td class='mono muted'>{j:02d}</td><td>{esc(title)}</td><td class='muted'>{cluster}</td><td class='muted small'>{esc(kw)}</td><td class='muted'>Informational</td><td class='mono muted'>Target 1400</td><td>{badge('No')}</td><td>{badge('No')}</td><td class='muted'>—</td><td class='muted small'>Not yet written</td><td>{priority_badge(pr)}</td></tr>"
    return f"<table><tr><th>#</th><th>Title</th><th>Cluster</th><th>Primary Keyword</th><th>Intent</th><th>Word Count</th><th>Written?</th><th>Published?</th><th>Publish Date</th><th>Slug</th><th>Priority</th></tr>{rows}</table>"

def render_seo_tasks():
    rows = ""
    for i, (task, cat, subcat, priority, effort, status, owner, deadline, impact, notes) in enumerate(SEO_TASKS, 1):
        rows += f"<tr><td class='mono muted'>{i}</td><td>{esc(task)}</td><td class='muted'>{cat}</td><td class='muted'>{subcat}</td><td>{priority_badge(priority)}</td><td class='muted'>{effort}</td><td>{badge(status)}</td><td class='muted'>{owner}</td><td class='muted'>{impact}</td><td class='muted small'>{esc(notes)}</td></tr>"
    return f"<table><tr><th>#</th><th>Task</th><th>Category</th><th>Sub-Category</th><th>Priority</th><th>Effort</th><th>Status</th><th>Owner</th><th>Impact</th><th>Notes</th></tr>{rows}</table>"

def render_keywords():
    rows = ""
    for kw, cluster, intent, priority, target, blog in KEYWORDS:
        rows += f"<tr><td>{esc(kw)}</td><td class='muted'>{cluster}</td><td class='muted'>{intent}</td><td class='mono muted'>N/A*</td><td class='mono muted'>N/A*</td><td>{priority_badge(priority)}</td><td class='mono muted small'>{esc(target)}</td><td class='muted small'>{esc(blog)}</td></tr>"
    return f"""<div class="warn-note">*Est. Monthly Searches and Difficulty are not tool-verified — no live Google Keyword Planner / Ahrefs data behind these yet. Everything else reflects real site content.</div>
    <table><tr><th>Keyword</th><th>Cluster</th><th>Intent</th><th>Searches*</th><th>Difficulty*</th><th>Priority</th><th>Target Page</th><th>Blog Assigned</th></tr>{rows}</table>"""

def render_calendar():
    rows = ""
    for month, week, title, cluster, kw, wc, status, blognum, priority in build_content_calendar():
        rows += f"<tr><td class='muted'>{month}</td><td class='muted'>{week}</td><td>{esc(title)}</td><td class='muted'>{cluster}</td><td class='muted small'>{esc(kw)}</td><td class='mono muted'>{wc}</td><td>{badge(status)}</td><td class='mono muted'>{blognum}</td><td class='muted'>{priority}</td></tr>"
    return f"<table><tr><th>Month</th><th>Week</th><th>Article Title</th><th>Cluster</th><th>Keyword</th><th>Word Target</th><th>Status</th><th>Blog #</th><th>Priority</th></tr>{rows}</table>"

def render_weekly():
    rows = ""
    for i, (week, cat, task, time_needed, status, done, impact, notes) in enumerate(WEEKLY_TASKS):
        checked = "checked" if done else ""
        rows += f"<tr><td class='muted'>Week {week}</td><td class='muted'>{cat}</td><td>{esc(task)}</td><td class='mono muted'>{time_needed}</td><td>{badge(status)}</td><td style='text-align:center'><input type='checkbox' class='wk-check' data-idx='{i}' {checked}></td><td class='muted'>{impact}</td><td class='muted small'>{esc(notes)}</td></tr>"
    return f"""<div class="warn-note">Checkboxes save to your browser automatically (localStorage) — they'll persist between visits on this device, but won't sync back into this Python file. Tell me which ones are done and I'll update the source data next regeneration.</div>
    <table><tr><th>Week</th><th>Category</th><th>Task</th><th>Time</th><th>Status</th><th>Done?</th><th>Impact</th><th>Notes</th></tr>{rows}</table>"""

def render_competitors():
    return """<div class="warn-note">This tab is a template, not filled-in reality. I don't have your real, current competitors — no final company name, city, or verified live market position yet. Inventing plausible-sounding competitor names would be fabricated data presented as research. Fill in real competitors once you know them, or share your target city/market and I'll search for genuine candidates to validate.</div>
    <table>
      <tr><th>Company</th><th>Website</th><th>Location</th><th>Services</th><th>Est. Traffic</th><th>Blog Count</th><th>Strong At</th><th>Weak At</th><th>Our Edge</th></tr>
      <tr class="input-row"><td>[Example — Competitor A]</td><td>[example.com]</td><td>[City, State]</td><td>[e.g. ERP, custom software]</td><td>[SimilarWeb estimate]</td><td>[count their posts]</td><td>[what they do well]</td><td>[where they fall short]</td><td>[what you'd do about it]</td></tr>
      <tr class="input-row"><td colspan="9">&nbsp;</td></tr>
      <tr class="input-row"><td colspan="9">&nbsp;</td></tr>
      <tr class="input-row"><td colspan="9">&nbsp;</td></tr>
      <tr class="input-row"><td colspan="9">&nbsp;</td></tr>
    </table>"""

def render_performance():
    perf_rows = "".join(f"<tr><td class='muted'>{m}</td>" + "<td class='input-cell'>&nbsp;</td>" * 10 + "</tr>" for m in PERFORMANCE_MONTHS)
    rank_rows = ""
    for kw in RANK_KEYWORDS:
        rank_rows += f"<tr><td class='small'>{esc(kw)}</td>" + "<td class='input-cell'>&nbsp;</td>" * 6 + "</tr>"
    return f"""<div class="warn-note">Yellow cells are empty and waiting to be filled in each month from Search Console + GA4. Nothing here is invented.</div>
    <h3>Monthly Metrics</h3>
    <table><tr><th>Month</th><th>Clicks</th><th>Impressions</th><th>CTR</th><th>Avg Pos</th><th>Indexed</th><th>Blogs Live</th><th>Top KW</th><th>Top Page</th><th>Leads</th><th>Notes</th></tr>{perf_rows}</table>
    <h3 style="margin-top:32px">Keyword Rank Tracker</h3>
    <table><tr><th>Keyword</th><th>M1</th><th>M2</th><th>M3</th><th>M4</th><th>M5</th><th>M6</th></tr>{rank_rows}</table>"""

def render_changelog():
    items = ""
    for date, entry in CHANGELOG:
        items += f"<div class='log-row'><span class='mono log-date'>{date}</span><span>{esc(entry)}</span></div>"
    return items

CHANGELOG = [
    ("2026-07-19", "Rebuilt tracker as full 9-tab HTML with complete parity to the Excel workbook — all real data, all columns."),
    ("2026-07-19", "Rebuilt Services page — alternating rows with 9 custom visuals, replacing the flat repeated block."),
    ("2026-07-19", "Fixed Weekly Action Plan checkbox column — now real interactive checkboxes with localStorage persistence."),
    ("2026-07-18", "Restructured Case Studies into card grid + individual detail pages; added real cited industry data chart."),
    ("2026-07-18", "SEO fixes: canonical tags sitewide, complete sitemap, fixed stale Products meta description, cross-linked Café product and case study."),
    ("2026-07-18", "Fixed BlogBarChart clipping bug across all 18 usages — rebuilt as HTML/CSS, no more SVG viewBox overflow."),
    ("2026-07-17", "Published 6 more blog articles (API, SaaS, AI Hallucinations, AI Agents in production, ML vs DL, Cloud Computing)."),
    ("2026-07-16", "Reduced products to 4 real ones: Café Platform, HRMS, Smart Agriculture Platform, Drone-as-a-Service."),
]

print("All tab renderers ready")


# =========================================================================
# COMPANY FORMATION & COMPLIANCE — real facts only, rest awaits your input
# (Step, Category, Status, Date, Notes)
# =========================================================================
COMPANY_STEPS = [
    ("Entity type decided — Private Limited", "Formation", "Done", "", "Confirmed by user"),
    ("Registration location — Buxar, Bihar", "Formation", "Done", "", "Confirmed by user"),
    ("Company name finalization", "Formation", "In Progress", "", "Expected within ~1 week"),
    # Further real steps get added here as you report them — nothing pre-filled or assumed.
]

COMPLIANCE_STEPS = [
    # Empty until real compliance steps are reported — no invented checklist here.
]

def render_company():
    rows = ""
    for step, cat, status, date, notes in COMPANY_STEPS:
        rows += f"<tr><td>{esc(step)}</td><td class='muted'>{cat}</td><td>{badge(status)}</td><td class='muted'>{esc(date)}</td><td class='muted small'>{esc(notes)}</td></tr>"
    return f"""<div class="warn-note">Only what's actually confirmed goes here. Tell me each real step as it happens and I'll add it — nothing pre-filled or assumed.</div>
    <table><tr><th>Step</th><th>Category</th><th>Status</th><th>Date</th><th>Notes</th></tr>{rows}</table>"""

def render_compliance():
    if not COMPLIANCE_STEPS:
        return """<div class="warn-note">No compliance steps added yet — tell me what's real (GST registration, PAN/TAN, ROC filings, whatever applies) and I'll add rows here. Nothing invented in advance.</div>
        <table><tr><th>Requirement</th><th>Category</th><th>Status</th><th>Due Date</th><th>Notes</th></tr></table>"""
    rows = ""
    for step, cat, status, date, notes in COMPLIANCE_STEPS:
        rows += f"<tr><td>{esc(step)}</td><td class='muted'>{cat}</td><td>{badge(status)}</td><td class='muted'>{esc(date)}</td><td class='muted small'>{esc(notes)}</td></tr>"
    return f"<table><tr><th>Requirement</th><th>Category</th><th>Status</th><th>Due Date</th><th>Notes</th></tr>{rows}</table>"

def build():
    tabs = [
        ("dashboard", "Dashboard", render_dashboard()),
        ("company", "Company Formation", render_company()),
        ("compliance", "Compliance", render_compliance()),
        ("pages", "Website Pages", render_pages()),
        ("blogs", f"Blog Tracker ({len(BLOGS_PUBLISHED)+len(BLOGS_PLANNED)})", render_blogs()),
        ("seo", f"SEO Tasks ({len(SEO_TASKS)})", render_seo_tasks()),
        ("keywords", f"Keywords ({len(KEYWORDS)})", render_keywords()),
        ("calendar", "Content Calendar", render_calendar()),
        ("weekly", "Weekly Action Plan", render_weekly()),
        ("competitors", "Competitor Research", render_competitors()),
        ("performance", "Performance Log", render_performance()),
        ("changelog", "Changelog", f"<div>{render_changelog()}</div>"),
    ]

    tab_buttons = "".join(f'<button class="tabbtn{" active" if i==0 else ""}" onclick="showTab(\'{tid}\')" id="btn-{tid}">{esc(label)}</button>' for i, (tid, label, _) in enumerate(tabs))
    tab_panels = "".join(f'<div class="panel{" active" if i==0 else ""}" id="panel-{tid}">{content}</div>' for i, (tid, label, content) in enumerate(tabs))

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Project Tracker — Nexora Systems</title>
<style>
  :root {{
    --bg-primary: #05070A; --bg-secondary: #0B1120; --card: #111827;
    --blue: #3B82F6; --cyan: #00D4FF; --purple: #7C3AED;
    --white: #F8FAFC; --soft: #CBD5E1; --muted: #64748B;
    --border: rgba(255,255,255,0.08);
    --green: #22C55E; --amber: #F59E0B; --red: #EF4444;
  }}
  * {{ box-sizing: border-box; }}
  body {{ background: var(--bg-primary); color: var(--soft); font-family: -apple-system, "Segoe UI", Arial, sans-serif; margin: 0; padding: 32px 24px 100px; }}
  .wrap {{ max-width: 1300px; margin: 0 auto; }}
  .mono {{ font-family: "Courier New", monospace; }}
  .muted {{ color: var(--muted); }}
  .small {{ font-size: 11.5px; }}
  h1 {{ font-size: 26px; color: var(--white); margin: 0 0 4px; letter-spacing: -0.02em; }}
  .updated {{ font-size: 12px; color: var(--muted); margin-bottom: 24px; }}
  h3 {{ font-size: 15px; color: var(--white); margin: 24px 0 12px; }}
  .tabs {{ display: flex; gap: 4px; flex-wrap: wrap; border-bottom: 1px solid var(--border); margin-bottom: 24px; padding-bottom: 0; }}
  .tabbtn {{ background: transparent; border: none; border-bottom: 2px solid transparent; color: var(--muted); font-size: 13px; padding: 10px 14px; cursor: pointer; font-family: inherit; }}
  .tabbtn:hover {{ color: var(--soft); }}
  .tabbtn.active {{ color: var(--cyan); border-bottom-color: var(--cyan); }}
  .panel {{ display: none; }}
  .panel.active {{ display: block; }}
  .kpis {{ display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; margin-bottom: 20px; }}
  .kpi {{ background: var(--card); border: 1px solid var(--border); border-radius: 10px; padding: 16px; text-align: center; }}
  .kpi .num {{ font-size: 26px; font-weight: 700; color: var(--cyan); }}
  .kpi .label {{ font-size: 11px; color: var(--muted); margin-top: 4px; }}
  .bar-wrap {{ background: var(--card); border: 1px solid var(--border); border-radius: 10px; padding: 16px 20px; margin-bottom: 20px; }}
  .bar-row {{ display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }}
  .bar-row:last-child {{ margin-bottom: 0; }}
  .bar-label {{ width: 160px; font-size: 12.5px; flex-shrink: 0; }}
  .bar-track {{ flex: 1; height: 10px; background: var(--bg-secondary); border-radius: 5px; overflow: hidden; }}
  .bar-fill {{ height: 100%; background: var(--cyan); }}
  .bar-pct {{ width: 40px; text-align: right; font-size: 12px; font-family: "Courier New", monospace; color: var(--cyan); }}
  table {{ width: 100%; border-collapse: collapse; background: var(--card); border-radius: 10px; overflow: hidden; font-size: 12.5px; }}
  th {{ text-align: left; background: #0F172A; color: var(--white); font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.04em; padding: 9px 12px; border-bottom: 1px solid var(--border); position: sticky; top: 0; }}
  td {{ padding: 9px 12px; border-bottom: 1px solid var(--border); vertical-align: top; }}
  tr:last-child td {{ border-bottom: none; }}
  .badge {{ display: inline-block; padding: 3px 9px; border-radius: 5px; font-size: 10.5px; font-weight: 600; white-space: nowrap; }}
  .st-done {{ background: rgba(34,197,94,0.15); color: var(--green); }}
  .st-progress {{ background: rgba(245,158,11,0.15); color: var(--amber); }}
  .st-notstarted {{ background: rgba(239,68,68,0.12); color: var(--red); }}
  .pr {{ font-family: "Courier New", monospace; font-size: 10.5px; font-weight: 700; padding: 2px 6px; border-radius: 4px; }}
  .pr-p0 {{ background: rgba(239,68,68,0.15); color: var(--red); }}
  .pr-p1 {{ background: rgba(245,158,11,0.15); color: var(--amber); }}
  .pr-p2 {{ background: rgba(59,130,246,0.15); color: var(--blue); }}
  .pr-p3 {{ background: rgba(100,116,139,0.15); color: var(--muted); }}
  .warn-note {{ background: rgba(245,158,11,0.08); border: 1px solid rgba(245,158,11,0.3); color: #FCD34D; font-size: 12.5px; padding: 12px 16px; border-radius: 8px; margin-bottom: 16px; }}
  .input-row td, .input-cell {{ background: rgba(255,253,231,0.04); color: var(--muted); font-style: italic; }}
  .log-row {{ display: flex; gap: 16px; padding: 10px 0; border-bottom: 1px solid var(--border); font-size: 13px; }}
  .log-date {{ color: var(--cyan); flex-shrink: 0; width: 90px; }}
  .scroll {{ max-height: 560px; overflow-y: auto; border-radius: 10px; }}
  ::-webkit-scrollbar {{ width: 8px; height: 8px; }}
  ::-webkit-scrollbar-thumb {{ background: var(--border); border-radius: 4px; }}
  input[type=checkbox] {{ width: 16px; height: 16px; accent-color: var(--cyan); cursor: pointer; }}
</style>
</head>
<body>
<div class="wrap">
  <h1>Project Tracker — Nexora Systems</h1>
  <div class="updated">Last updated: {LAST_UPDATED} &nbsp;·&nbsp; Regenerate with <span class="mono">python3 generate_tracker.py</span></div>

  <div class="tabs">{tab_buttons}</div>

  <div class="scroll">
  {tab_panels}
  </div>
</div>

<script>
function showTab(id) {{
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tabbtn').forEach(b => b.classList.remove('active'));
  document.getElementById('panel-' + id).classList.add('active');
  document.getElementById('btn-' + id).classList.add('active');
}}

document.querySelectorAll('.wk-check').forEach(cb => {{
  const key = 'wk-task-' + cb.dataset.idx;
  const saved = localStorage.getItem(key);
  if (saved === 'true') cb.checked = true;
  cb.addEventListener('change', () => {{
    localStorage.setItem(key, cb.checked);
  }});
}});
</script>
</body>
</html>"""
    return html


if __name__ == "__main__":
    output = build()
    with open("PROJECT_TRACKER.html", "w") as f:
        f.write(output)
    print("\nPROJECT_TRACKER.html regenerated.")
    print(f"Pages: {len(PAGES)} | Blogs: {len(BLOGS_PUBLISHED)}+{len(BLOGS_PLANNED)} | SEO tasks: {len(SEO_TASKS)} | Keywords: {len(KEYWORDS)} | Weekly tasks: {len(WEEKLY_TASKS)} | Company steps: {len(COMPANY_STEPS)} | Compliance steps: {len(COMPLIANCE_STEPS)}")
