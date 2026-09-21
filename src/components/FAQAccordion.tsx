"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { generateFaqSchema } from "@/lib/schema";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function FAQAccordion({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Clear, reassuring answers to common questions about dental and orthodontic care.",
  className = "",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = generateFaqSchema(faqs);

  return (
    <div className={`w-full ${className}`}>
      {/* Schema.org FAQ Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {title && (
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-2">
            Clear Answers
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl transition-all duration-200 border ${
                isOpen
                  ? "bg-white border-teal-500/30 shadow-soft"
                  : "bg-white/70 hover:bg-white border-slate-200/80"
              }`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-navy-900 text-sm md:text-base pr-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-teal-500 shrink-0" />
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-teal-600 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-0 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1 pt-3 animate-in fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
