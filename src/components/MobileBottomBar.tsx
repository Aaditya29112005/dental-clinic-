"use client";

import { Phone, MessageCircle, Calendar } from "lucide-react";
import { clinicConfig } from "@/data/clinicData";

export default function MobileBottomBar() {
  const whatsappMsg = encodeURIComponent(
    "Hi, I'd like to book a consultation at Align Dentofacial Clinic."
  );

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2.5 px-3 shadow-lg">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${clinicConfig.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-900 transition-colors"
        >
          <Phone className="w-4 h-4 text-teal-600 mb-0.5" />
          <span className="text-[11px] font-semibold">Call Now</span>
        </a>

        <a
          href={`https://wa.me/${clinicConfig.whatsappRaw}?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white transition-colors"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-semibold">WhatsApp</span>
        </a>

        <a
          href="#book-appointment"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-teal-500 hover:bg-teal-600 text-white transition-colors shadow-sm"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-semibold">Book</span>
        </a>
      </div>
    </div>
  );
}
