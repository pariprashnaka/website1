import XLSX from "xlsx";

const FILE = "public/NEXORA_Chatbot_Data.xlsx";

const newRows = [
  {
    Category: "Contact",
    Question: "Can you set up a meeting?",
    Answer: "Yes — the fastest way to set up a time is directly through WhatsApp or email below, and we'll find a slot that works for both sides.",
    Keywords: "set up a meeting, schedule a meeting, book a meeting, arrange a meeting, meeting request",
    QuickReply: "No",
  },
  {
    Category: "Contact",
    Question: "How do I schedule a meeting with you?",
    Answer: "Message us directly on WhatsApp or email, and we'll set up a time to talk — no need to go through a booking form first.",
    Keywords: "schedule a meeting, book a call, schedule a call, meeting with you",
    QuickReply: "No",
  },
  {
    Category: "Contact",
    Question: "Can we book a call or meeting?",
    Answer: "Yes — reach out through WhatsApp or email below and we'll find a time that works.",
    Keywords: "book a call, book a meeting, can we book, call or meeting",
    QuickReply: "No",
  },
  {
    Category: "Contact",
    Question: "How do I book time with your team?",
    Answer: "The quickest way is WhatsApp or email — tell us a little about what you need and a few times that work for you, and we'll confirm.",
    Keywords: "book time, book with your team, meeting with your team, arrange time",
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
  console.log("These meeting rows already exist — no changes made.");
} else {
  const combined = [...existingRows, ...rowsToAdd];
  const newWs = XLSX.utils.json_to_sheet(combined);
  newWs["!cols"] = [{ wch: 16 }, { wch: 42 }, { wch: 75 }, { wch: 42 }, { wch: 12 }];
  wb.Sheets[sheetName] = newWs;
  XLSX.writeFile(wb, FILE);
  console.log(`Added ${rowsToAdd.length} new rows. Total rows now: ${combined.length}`);
}
