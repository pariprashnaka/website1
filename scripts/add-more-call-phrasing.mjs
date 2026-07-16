import XLSX from "xlsx";

const FILE = "public/NEXORA_Chatbot_Data.xlsx";

const newRows = [
  {
    Category: "Contact",
    Question: "Setup a call",
    Answer: "Yes — message us on WhatsApp or email below with a couple of times that work for you, and we'll confirm a call.",
    Keywords: "setup a call, set up a call, arrange a call, get on a call, jump on a call",
    QuickReply: "No",
  },
  {
    Category: "Contact",
    Question: "Setup a meeting",
    Answer: "Yes — message us on WhatsApp or email below and we'll set up a time that works.",
    Keywords: "setup a meeting, set a meeting, fix a meeting, meeting setup",
    QuickReply: "No",
  },
  {
    Category: "Contact",
    Question: "Can we hop on a call?",
    Answer: "Sure — reach out on WhatsApp or email below with your availability and we'll set it up.",
    Keywords: "hop on a call, get on a call, quick call, talk on the phone",
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
  newWs["!cols"] = [{ wch: 16 }, { wch: 42 }, { wch: 75 }, { wch: 42 }, { wch: 12 }];
  wb.Sheets[sheetName] = newWs;
  XLSX.writeFile(wb, FILE);
  console.log(`Added ${rowsToAdd.length} new rows. Total rows now: ${combined.length}`);
}
