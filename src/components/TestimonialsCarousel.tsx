"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { patientReviews } from "@/data/clinicData";

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? patientReviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === patientReviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-2">
          Patient Stories
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900">
          Trusted by Smiles Across Noida
        </h2>
        <p className="text-sm text-slate-600 mt-2">
          Genuine experiences shared by our patients on Google Reviews.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Main Review Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-slate-100 relative">
          <Quote className="w-12 h-12 text-teal-500/15 absolute top-6 right-6" />

          {/* Star Rating */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(patientReviews[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {/* Comment */}
          <p className="text-base md:text-lg text-slate-700 font-sans italic leading-relaxed mb-6">
            "{patientReviews[currentIndex].comment}"
          </p>

          {/* Reviewer Details */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div>
              <div className="font-semibold text-navy-900 text-sm md:text-base">
                {patientReviews[currentIndex].name}
              </div>
              <div className="text-xs text-slate-500">
                {patientReviews[currentIndex].location} • {patientReviews[currentIndex].date}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Verified Google Review
              </span>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center justify-between mt-6 px-2">
          <button
            onClick={prevSlide}
            aria-label="Previous review"
            className="p-3 rounded-full bg-white text-navy-900 shadow-md hover:bg-teal-500 hover:text-white transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center space-x-2">
            {patientReviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentIndex === idx ? "w-8 bg-teal-500" : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next review"
            className="p-3 rounded-full bg-white text-navy-900 shadow-md hover:bg-teal-500 hover:text-white transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-8">
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-teal-600 hover:text-teal-700 bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-200 hover:border-teal-500 transition-all"
          >
            <span>Read all reviews on Google</span>
            <span className="text-amber-500 font-bold">5.0 ★</span>
          </a>
        </div>
      </div>
    </div>
  );
}
