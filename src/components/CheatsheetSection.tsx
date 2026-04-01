"use client";

import { useState } from "react";
import {
  ChevronDown,
  Copy,
  Check,
  Keyboard,
  Terminal,
  Lightbulb,
  Users,
  Server,
  Brain,
  Settings,
  Flag,
  type LucideProps,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Keyboard,
  Terminal,
  Lightbulb,
  Users,
  Server,
  Brain,
  Settings,
  Flag,
};

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

interface CheatsheetSectionProps {
  section: Section;
  searchQuery: string;
}

function CheatsheetItemRow({ item, color }: { item: CheatsheetItem; color: string }) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(item.key);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="cheatsheet-item border-b border-[#30363d]/50 last:border-0">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/[0.02] transition-colors text-left group min-w-0"
      >
        <code
          className="key-badge shrink-0 max-w-[140px] truncate px-2 py-0.5 rounded text-xs font-mono font-medium border"
          style={{
            backgroundColor: `${color}15`,
            borderColor: `${color}30`,
            color: color,
          }}
        >
          {item.key}
        </code>
        <span className="flex-1 text-sm text-[#e6edf3] line-clamp-2">
          {item.description}
        </span>
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md text-[#8b949e] hover:text-white hover:bg-[#30363d] opacity-0 group-hover:opacity-100 transition-all"
            title="Copy command"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-green-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
          <ChevronDown
            className={`w-4 h-4 text-[#8b949e] transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          expanded ? "max-h-96 overflow-y-auto opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-3 pt-0">
          <div
            className="text-sm text-[#8b949e] pl-3 border-l-2"
            style={{ borderColor: `${color}50` }}
          >
            {item.explanation}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheatsheetSection({
  section,
  searchQuery,
}: CheatsheetSectionProps) {
  const Icon = iconMap[section.icon] || Terminal;

  const filteredItems = searchQuery
    ? section.items.filter(
        (item) =>
          item.key.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.explanation.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : section.items;

  if (searchQuery && filteredItems.length === 0) return null;

  return (
    <div className="section-card rounded-xl border border-[#30363d] bg-[#161b22] overflow-hidden shadow-lg shadow-black/10 w-full min-w-0">

      {/* Section Header */}
      <div
        className="section-header flex items-center gap-3 px-4 py-3"
        style={{ backgroundColor: `${section.color}15` }}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${section.color}20` }}
        >
          <Icon className="w-4 h-4" style={{ color: section.color }} />
        </div>
        <h2 className="font-semibold text-white text-lg">{section.title}</h2>
        <span
          className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full"
          style={{
            backgroundColor: `${section.color}15`,
            color: section.color,
          }}
        >
          {filteredItems.length} items
        </span>
      </div>

      {/* Items */}
      <div className="divide-y divide-[#30363d]/50">
        {filteredItems.map((item) => (
          <CheatsheetItemRow
            key={item.key}
            item={item}
            color={section.color}
          />
        ))}
      </div>
    </div>
  );
}
