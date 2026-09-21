"use client";

import { useState } from "react";
import { Sparkles, ShieldCheck, Armchair, Stethoscope, Sparkle } from "lucide-react";
import { clinicConfig } from "@/data/clinicData";

interface TourItem {
  id: string;
  title: string;
  category: string;
  desc: string;
  image: string;
}

const tourItems: TourItem[] = [
  {
    id: "waiting",
    title: "Calm Home-Style Waiting Area",
    category: "Comfort",
    desc: "A warm, peaceful lounge with black leather seating and Invisalign provider displays.",
    image: "/images/waiting-lounge.jpg"
  },
  {
    id: "operatory",
    title: "Separate Operatory Room",
    category: "Precision",
    desc: "Equipped with a modern ergonomic dental chair, digital sensor setup, and clinical lighting.",
    image: "/images/dental-chair.jpg"
  },
  {
    id: "consultation",
    title: "Private Consultation Space",
    category: "Privacy",
    desc: "Dedicated area for transparent doctor discussions, digital X-ray review, and custom treatment planning.",
    image: "/images/waiting-lounge.jpg"
  },
  {
    id: "sterilisation",
    title: "Sterilisation & Equipment Setup",
    category: "Safety",
    desc: "Strict multi-step instrument sterilization protocol keeping every visit completely hygienic.",
    image: "/images/dental-chair.jpg"
  }
];

export default function ClinicTour() {
  const [activeItem, setActiveItem] = useState(tourItems[0]);

  return (
    <div className="w-full">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-2">
          Boutique Environment
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900">
          Designed for Comfort, Safety & Efficiency
        </h2>
        <p className="text-sm text-slate-600 mt-2">
          Step inside Align Dentofacial Clinic near Sector 49, Noida.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
        {/* Gallery Selector Buttons */}
        <div className="lg:col-span-4 space-y-3">
          {tourItems.map((item) => {
            const isActive = activeItem.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`w-full text-left p-4 rounded-2xl transition-all duration-200 border ${
                  isActive
                    ? "bg-white border-teal-500 shadow-soft"
                    : "bg-white/60 hover:bg-white border-slate-100"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
                    {item.category}
                  </span>
                  {isActive && <Sparkles className="w-4 h-4 text-teal-500" />}
                </div>
                <div className="font-serif font-bold text-navy-900 text-base mt-1">
                  {item.title}
                </div>
                <div className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {item.desc}
                </div>
              </button>
            );
          })}
        </div>

        {/* Feature Display Area */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 md:p-8 shadow-soft border border-slate-100">
          <div className="relative h-72 md:h-96 w-full rounded-2xl overflow-hidden shadow-inner border border-slate-200">
            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
              <span className="text-xs font-bold text-teal-300 uppercase tracking-widest block mb-1">
                {activeItem.category} • Align Clinic Noida
              </span>
              <h3 className="font-serif font-bold text-xl text-white">
                {activeItem.title}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {activeItem.desc}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <ShieldCheck className="w-4 h-4 text-teal-500" />
              <span>Sterilisation-first standards</span>
            </div>
            <a
              href="#book-appointment"
              className="px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold transition-colors"
            >
              Tour the Clinic in Person
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
