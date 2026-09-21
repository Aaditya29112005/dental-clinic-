"use client";

import { clinicConfig } from "@/data/clinicData";

export default function StatsCounter() {
  return (
    <div className="bg-navy-900 text-white rounded-3xl p-8 md:p-12 shadow-elevated relative overflow-hidden">
      {/* Background Teal Accents */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10 text-center">
        {clinicConfig.stats.map((stat, idx) => (
          <div key={idx} className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-500/40 transition-colors">
            <div className="font-serif text-3xl md:text-5xl font-bold text-teal-400 mb-1">
              {stat.value}
            </div>
            <div className="text-sm font-semibold text-slate-200">
              {stat.label}
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              {stat.sub}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
