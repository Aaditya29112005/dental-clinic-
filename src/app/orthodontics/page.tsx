import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { orthodonticProblemsData, getAlignerTerm } from "@/data/clinicData";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Orthodontist in Noida | Braces & Clear Aligners | Align Dentofacial Clinic",
  description: "Specialist MDS Orthodontist Dr. Jyoti Chauhan provides metal braces, ceramic braces, and clear aligners for kids, teens, and adults in Noida near Sector 49.",
  alternates: {
    canonical: "https://aligndentofacial.in/orthodontics",
  },
};

export default function OrthodonticsPage() {
  const alignerTerm = getAlignerTerm(true);

  return (
    <div className="w-full space-y-16 md:space-y-24 pb-16">
      {/* Hero Banner */}
      <section className="bg-navy-950 text-white pt-8 pb-16 rounded-b-[36px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-teal-400">Home</Link>
            <span>/</span>
            <span className="text-teal-400 font-semibold">Orthodontics</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block">
              MDS Orthodontist Specialist Care
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              Precision Smile Alignment & Jaw Correction in Noida
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Transform your smile with custom braces and clear aligners created by Dr. Jyoti Chauhan (MDS Orthodontics).
            </p>
          </div>
        </div>
      </section>

      {/* Main Specialities Cards */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Braces */}
          <div className="bg-white rounded-3xl p-8 shadow-soft border border-slate-100 hover:border-teal-500/40 transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-md uppercase tracking-wider mb-4 inline-block">
                Orthodontic Treatment
              </span>
              <h3 className="font-serif text-2xl font-bold text-navy-900 mb-3">
                Braces (Metal & Ceramic)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Time-tested precision tooth movement for complex crowding, severe overbites, underbites, and jaw alignment in children, teenagers, and adults.
              </p>
            </div>
            <Link
              href="/services/braces-noida"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-white text-xs font-semibold w-fit transition-all"
            >
              <span>Explore Braces Treatment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: Clear Aligners */}
          <div className="bg-white rounded-3xl p-8 shadow-soft border border-slate-100 hover:border-teal-500/40 transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-md uppercase tracking-wider mb-4 inline-block">
                Invisible Treatment
              </span>
              <h3 className="font-serif text-2xl font-bold text-navy-900 mb-3">
                {alignerTerm}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Virtually invisible, removable custom aligners that straighten your teeth comfortably without metal wires or food restrictions.
              </p>
            </div>
            <Link
              href="/services/clear-aligners-noida"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold w-fit transition-all"
            >
              <span>Explore {alignerTerm}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Orthodontic Problems We Correct Grid */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Targeted Solutions</span>
          <h2 className="font-serif text-3xl font-bold text-navy-900">Orthodontic Conditions We Correct</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {orthodonticProblemsData.map((prob) => (
            <div 
              key={prob.id}
              className="bg-white rounded-2xl p-6 shadow-soft border border-slate-100 hover:border-teal-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="font-serif text-lg font-bold text-navy-900 mb-2">
                  {prob.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {prob.shortDesc}
                </p>
              </div>
              <Link
                href={`/orthodontics/${prob.slug}`}
                className="text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center gap-1"
              >
                <span>Read Treatment Guide</span>
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
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900">Book Your Orthodontic Consultation</h2>
            <p className="text-xs text-slate-600 max-w-lg mx-auto">
              Get an expert smile assessment with MDS Orthodontist Dr. Jyoti Chauhan at Sector 49, Noida.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>
    </div>
  );
}
