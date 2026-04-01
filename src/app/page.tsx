import { readFileSync } from "fs";
import { join } from "path";
import ClientPage from "@/components/ClientPage";

interface CheatsheetItem {
  key: string;
  description: string;
  explanation: string;
}

interface Section {
  id: string;
  title: string;
  color: string;
  icon: string;
  items: CheatsheetItem[];
}

interface CheatsheetData {
  version: string;
  lastUpdated: string;
  sections: Section[];
}

function getCheatsheetData(): CheatsheetData {
  const filePath = join(process.cwd(), "data", "cheatsheet.json");
  const raw = readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

export default function Home() {
  const data = getCheatsheetData();
  const totalItems = data.sections.reduce((sum, s) => sum + s.items.length, 0);

  return <ClientPage data={data} totalItems={totalItems} />;
}
