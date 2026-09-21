"use client";

import { MessageCircle } from "lucide-react";
import { clinicConfig } from "@/data/clinicData";

export default function FloatingWhatsApp() {
  const whatsappMsg = encodeURIComponent(
    "Hi, I'd like to book a consultation at Align Dentofacial Clinic."
  );

  return (
    <a
      href={`https://wa.me/${clinicConfig.whatsappRaw}?text=${whatsappMsg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-full shadow-elevated hover:scale-105 transition-all group"
    >
      <MessageCircle className="w-6 h-6 fill-white stroke-emerald-500" />
      <span className="text-xs font-semibold pr-1">Chat on WhatsApp</span>
    </a>
  );
}
