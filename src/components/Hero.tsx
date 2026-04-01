"use client";

import { Sparkles, ArrowDown } from "lucide-react";

interface HeroProps {
  version: string;
  lastUpdated: string;
  totalItems: number;
}

export default function Hero({ version, lastUpdated, totalItems }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#a855f7]/10 rounded-full blur-3xl" />
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#f97316]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#a855f7]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Version Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#a855f7]/10 border border-[#a855f7]/20 rounded-full text-sm text-[#a855f7] mb-6">
          <Sparkles className="w-4 h-4" />
          <span>v{version} &middot; Updated {lastUpdated}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="text-white">Claude Code</span>
          <br />
          <span className="bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#f97316] bg-clip-text text-transparent">
            Cheatsheet
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-[#8b949e] max-w-2xl mx-auto mb-8">
          The ultimate reference for Claude Code. {totalItems}+ commands,
          shortcuts, workflows, and tips — all in one place.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-12">
          {[
            { label: "Sections", value: "8" },
            { label: "Commands", value: `${totalItems}+` },
            { label: "Always Free", value: "100%" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-[#8b949e]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center">
          <ArrowDown className="w-5 h-5 text-[#8b949e] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
