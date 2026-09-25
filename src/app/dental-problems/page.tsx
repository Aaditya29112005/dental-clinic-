import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AlertCircle } from "lucide-react";
import { dentalProblemsData } from "@/data/clinicData";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Dental Problems & Symptoms | Align Dentofacial Clinic Noida",
  description: "Identify and resolve dental symptoms including tooth pain, bleeding gums, tooth sensitivity, chipped teeth, missing teeth, and bad breath with expert care in Noida.",
  alternates: {
    canonical: "https://aligndentofacial.in/dental-problems",
  },
};

export default function DentalProblemsPage() {
  return (
    <div className="w-full space-y-16 md:space-y-24 pb-16">
      {/* Hero Banner */}
      <section className="bg-navy-950 text-white pt-8 pb-16 rounded-b-[36px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-teal-400">Home</Link>
            <span>/</span>
            <span className="text-teal-400 font-semibold">Dental Problems</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block">
              Symptom & Treatment Guide
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              Facing Dental Discomfort or Symptoms?
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Early diagnosis of dental problems prevents pain and protects your natural teeth. Explore solutions for common dental concerns below.
            </p>
          </div>
        </div>
      </section>

      {/* Problems List */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Common Symptoms</span>
          <h2 className="font-serif text-3xl font-bold text-navy-900">Select Your Dental Concern</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dentalProblemsData.map((prob) => (
            <div 
              key={prob.id}
              className="bg-white rounded-2xl p-6 shadow-soft border border-slate-100 hover:border-teal-500/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-5 h-5 text-teal-500" />
                  <h3 className="font-serif text-xl font-bold text-navy-900 group-hover:text-teal-600 transition-colors">
                    {prob.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {prob.shortDesc}
                </p>
              </div>
              <Link
                href={`/dental-problems/${prob.slug}`}
                className="text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center gap-1 group-hover:translate-x-1 transition-all"
              >
                <span>View Solutions & Causes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section id="book-appointment" className="max-w-4xl mx-auto px-4 pt-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-elevated border border-teal-500/20">
          <div className="text-center mb-8 space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900">Get Relief Today</h2>
            <p className="text-xs text-slate-600 max-w-lg mx-auto">
              Schedule an evaluation with MDS Orthodontist Dr. Jyoti Chauhan at Sector 49, Noida.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>
    </div>
  );
}
