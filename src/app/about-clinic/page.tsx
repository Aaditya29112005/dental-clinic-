import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Sparkles, HeartHandshake, CheckCircle2, Film } from "lucide-react";
import { clinicConfig } from "@/data/clinicData";
import ClinicTour from "@/components/ClinicTour";
import BookingForm from "@/components/BookingForm";
import CustomVideoPlayer from "@/components/CustomVideoPlayer";

export const metadata: Metadata = {
  title: "About Align Dentofacial Clinic | Dental Centre in Noida",
  description: "Learn about Align Dentofacial Clinic, Noida. Founded in 2024, offering calm, sterilised, technology-driven dental and orthodontic care near Sector 49.",
  alternates: {
    canonical: "https://aligndentofacial.in/about-clinic",
  },
};

export default function AboutClinicPage() {
  return (
    <div className="w-full space-y-16 md:space-y-24 pb-16">
      {/* Hero */}
      <section className="bg-navy-950 text-white pt-8 pb-16 rounded-b-[36px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-teal-400">Home</Link>
            <span>/</span>
            <span className="text-teal-300 font-semibold">About Clinic</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block">
                Boutique Dental Care Centre
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
                About Align Dentofacial Clinic
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                Established in 2024 at Pillar No. 44, Dadri Main Road, near Sector 49, Noida. We combine specialist orthodontic precision with a calm, home-style environment.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-teal-500/30 aspect-[4/3]">
                <img
                  src="/images/about-hero.jpg"
                  alt="Align Dentofacial Clinic Interior & Consultation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {/* Story & Mission */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-soft border border-slate-100 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block">
              Our Journey
            </span>
            <h2 className="font-serif text-3xl font-bold text-navy-900">
              Designed Around Comfort & Precision
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Align Dentofacial Clinic was created to offer patients in Noida a refreshing alternative to impersonal medical environments. Led by MDS Orthodontist Dr. Jyoti Chauhan, our clinic is designed around minimal waiting times, transparent treatment discussions, and patient-first comfort.
            </p>
          </div>

          <div className="space-y-4 bg-teal-50/50 p-6 rounded-2xl border border-teal-100">
            <h3 className="font-serif font-bold text-navy-900 text-xl">
              Patient Experience Promise
            </h3>
            <ul className="space-y-3 text-xs text-navy-900">
              {clinicConfig.patientPromise.map((promise, i) => (
                <li key={i} className="flex items-center gap-2.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>{promise}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Video Feature Spotlight: Facility Tour */}
        <div className="bg-navy-900 text-white p-8 md:p-12 rounded-3xl shadow-elevated space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-teal-400 uppercase tracking-widest">
              <Film className="w-4 h-4" />
              Infrastructure Video Showcase
            </span>
            <h2 className="font-serif text-3xl font-bold text-white">
              Take a Virtual Walkthrough of Our Clinic
            </h2>
            <p className="text-xs text-slate-300">
              Watch our facility setup video reels below to see our peaceful waiting lounge and sterilised treatment environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <CustomVideoPlayer
                src="/videos/video-about-walkthrough.mp4"
                poster="/images/treatment-room-view.jpg"
                title="Boutique Operatory & Infrastructure Walkthrough"
                subtitle="High-definition clinical setup tour."
                badge="Facility Tour"
                className="w-full"
              />
            </div>
            <div className="space-y-3">
              <CustomVideoPlayer
                src="/videos/video-waiting-lounge-tour.mp4"
                poster="/images/clinic-reception-lounge.jpg"
                title="Calm Lounge & Patient Waiting Experience"
                subtitle="Designed to put nervous patients completely at ease."
                badge="Lounge Ambience"
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Clinic Facilities */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-soft border border-slate-100 space-y-6">
          <h2 className="font-serif text-3xl font-bold text-navy-900 text-center">
            Clinic Infrastructure & Technology
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clinicConfig.facilities.map((fac, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs font-medium text-navy-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                <span>{fac}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <ClinicTour />

        {/* Booking Form CTA */}
        <div className="max-w-2xl mx-auto">
          <BookingForm />
        </div>

      </div>
    </div>
  );
}
