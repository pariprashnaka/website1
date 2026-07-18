import XLSX from "xlsx";

const FILE = "public/NEXORA_Chatbot_Data.xlsx";

const newRows = [
  {
    Category: "General",
    Question: "What can you do?",
    Answer: "I can help with questions about our services (SaaS, ERP, AI, mobile, web, CRM, automation, cloud, and data engineering), our products, pricing, and how projects work. Ask me anything, or check out our [blog](/blog) for deeper explanations of common topics.",
    Keywords: "what can you do, what do you offer, your capabilities, what does this bot do, help",
    QuickReply: "Yes",
  },
  {
    Category: "General",
    Question: "What is this website about?",
    Answer: "We're a software development company — we build custom SaaS products, ERP systems, AI solutions, mobile and web apps, and more. Check out our [services](/services) or [products](/products) to see real examples.",
    Keywords: "what is this website, what is this site, what is this company, tell me about this site",
    QuickReply: "No",
  },
  {
    Category: "General",
    Question: "How does this work?",
    Answer: "You can ask me a question directly, or tap one of the suggested questions below. If I can't answer something, I'll connect you directly with our team via WhatsApp or email.",
    Keywords: "how does this work, how do i use this, how does the chat work",
    QuickReply: "No",
  },
  {
    Category: "General",
    Question: "Tell me about your services",
    Answer: "We offer nine core services: SaaS Development, ERP Solutions, AI Solutions, Mobile Applications, Web Applications, CRM Systems, Business Automation, Cloud Engineering, and Data Engineering. See the [full breakdown here](/services).",
    Keywords: "tell me about your services, what services do you offer, your services, services list",
    QuickReply: "Yes",
  },
  {
    Category: "AI Solutions",
    Question: "What is an AI agent?",
    Answer: "An AI agent can take multi-step action on its own, unlike a chatbot which just responds. We wrote a full breakdown, including how to tell if a vendor's 'AI agent' is the real thing: [What Is an AI Agent, and How Is It Different From a Chatbot?](/blog/ai-agent-vs-chatbot-explained)",
    Keywords: "what is an ai agent, ai agent meaning, ai agent vs chatbot, define ai agent",
    QuickReply: "No",
  },
  {
    Category: "AI Solutions",
    Question: "What is an LLM?",
    Answer: "An LLM (large language model) is the technology behind tools like ChatGPT and Claude — trained to predict likely text based on patterns. We explain exactly how it works, grounded in the real 2017 research breakthrough: [LLMs Explained](/blog/llms-explained-large-language-model)",
    Keywords: "what is an llm, what is a large language model, llm meaning, define llm",
    QuickReply: "No",
  },
  {
    Category: "SaaS Development",
    Question: "What is SaaS?",
    Answer: "SaaS means accessing software as a subscription service through your browser, rather than buying and installing it yourself — think Netflix, but for business software. Full explanation with real examples: [What Is SaaS? A Complete Beginner's Guide](/blog/what-is-saas-beginners-guide)",
    Keywords: "what is saas, saas meaning, define saas, software as a service explained",
    QuickReply: "No",
  },
  {
    Category: "Web Development",
    Question: "What is an API?",
    Answer: "An API is how one piece of software asks another for something — like a waiter carrying your order to a kitchen you never see. Full plain-English explanation with a diagram: [What Is an API?](/blog/what-is-an-api-explained)",
    Keywords: "what is an api, api meaning, define api, what does api stand for",
    QuickReply: "No",
  },
  {
    Category: "Security",
    Question: "How do I protect my business from cyberattacks?",
    Answer: "Start with multi-factor authentication, genuinely isolated backups, and basic phishing awareness — all low-cost, high-impact. Full breakdown, including a statistic that's actually fake and widely repeated: [Cybersecurity Basics Every Small Business Owner Should Know](/blog/cybersecurity-basics-small-business)",
    Keywords: "protect my business cyberattacks, cybersecurity basics, how to secure my business, business security tips",
    QuickReply: "No",
  },
  {
    Category: "Security",
    Question: "What is ransomware?",
    Answer: "Ransomware locks you out of your own systems and demands payment for the key back. We cover a real, well-documented Indian hospital attack and the one detail that matters most: [Ransomware Explained](/blog/ransomware-explained-small-business)",
    Keywords: "what is ransomware, ransomware meaning, ransomware attack explained",
    QuickReply: "No",
  },
  {
    Category: "ERP Solutions",
    Question: "Do I need custom ERP software?",
    Answer: "If you're managing inventory across spreadsheets or disconnected tools, probably yes. Full guide: [Signs Your Business Has Outgrown Its Current Software](/blog/signs-business-outgrown-current-software)",
    Keywords: "do i need erp, need custom erp software, when to get erp, erp for my business",
    QuickReply: "No",
  },
];

const wb = XLSX.readFile(FILE);
const sheetName = wb.SheetNames[0];
const ws = wb.Sheets[sheetName];
const existingRows = XLSX.utils.sheet_to_json(ws);

console.log(`Existing rows in file: ${existingRows.length}`);

const existingQuestions = new Set(existingRows.map((r) => r.Question));
const rowsToAdd = newRows.filter((r) => !existingQuestions.has(r.Question));

if (rowsToAdd.length === 0) {
  console.log("These rows already exist — no changes made.");
} else {
  const combined = [...existingRows, ...rowsToAdd];
  const newWs = XLSX.utils.json_to_sheet(combined);
  newWs["!cols"] = [{ wch: 16 }, { wch: 42 }, { wch: 90 }, { wch: 50 }, { wch: 12 }];
  wb.Sheets[sheetName] = newWs;
  XLSX.writeFile(wb, FILE);
  console.log(`Added ${rowsToAdd.length} new rows. Total rows now: ${combined.length}`);
}
