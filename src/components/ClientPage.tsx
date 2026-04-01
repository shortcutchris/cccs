"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionNav from "@/components/SectionNav";
import CheatsheetSection from "@/components/CheatsheetSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

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

interface ClientPageProps {
  data: CheatsheetData;
  totalItems: number;
}

export default function ClientPage({ data, totalItems }: ClientPageProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const matchCount = useMemo(() => {
    if (!searchQuery) return totalItems;
    return data.sections.reduce((sum, section) => {
      return sum + section.items.filter(
        (item) =>
          item.key.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.explanation.toLowerCase().includes(searchQuery.toLowerCase())
      ).length;
    }, 0);
  }, [searchQuery, totalItems, data.sections]);

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main>
        <Hero
          version={data.version}
          lastUpdated={data.lastUpdated}
          totalItems={totalItems}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <SectionNav sections={data.sections} />

          {searchQuery && (
            <div className="text-center mb-8">
              <p className="text-[#8b949e] text-sm">
                Found{" "}
                <span className="text-[#a855f7] font-medium">{matchCount}</span>{" "}
                results for &ldquo;<span className="text-white">{searchQuery}</span>&rdquo;
              </p>
            </div>
          )}

          {/* Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {data.sections.map((section) => (
              <div key={section.id} id={section.id} className="w-full min-w-0">
                <CheatsheetSection section={section} searchQuery={searchQuery} />
              </div>
            ))}
          </div>

          {searchQuery && matchCount === 0 && (
            <div className="text-center py-16">
              <p className="text-[#8b949e] text-lg">
                No results found for &ldquo;{searchQuery}&rdquo;
              </p>
              <p className="text-[#8b949e] text-sm mt-2">Try a different search term</p>
            </div>
          )}
        </div>

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
