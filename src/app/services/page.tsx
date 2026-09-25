import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/data/clinicData";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Dental Services in Noida, Sector 49 | Align Dentofacial Clinic",
  description: "Explore complete dental treatments at Align Dentofacial Clinic in Noida near Sector 49. Painless root canals, dental implants, clear aligners, braces, teeth whitening, and smile design.",
  alternates: {
    canonical: "https://aligndentofacial.in/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="w-full space-y-16 md:space-y-24 pb-16">
      {/* Hero Banner */}
      <section className="bg-navy-950 text-white pt-8 pb-16 rounded-b-[36px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-teal-400">Home</Link>
            <span>/</span>
            <span className="text-teal-400 font-semibold">Services</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block">
              Comprehensive Dental Care in Noida
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              Specialist Dental Treatments Tailored to Your Smile
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Led by MDS Orthodontist Dr. Jyoti Chauhan, our clinic provides gentle, advanced, and transparent dental solutions for your entire family near Sector 49, Noida.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">All Treatments</span>
          <h2 className="font-serif text-3xl font-bold text-navy-900">Explore Our Services</h2>
          <p className="text-sm text-slate-600">
            From preventive check-ups to advanced cosmetic makeovers and implants, every treatment is delivered with precision and patient comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-3xl p-6 shadow-soft border border-slate-100 hover:border-teal-500/40 hover:shadow-elevated transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-navy-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {service.cardLine}
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-navy-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/services/${service.slug}`}
                  className="text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center gap-1 group-hover:translate-x-1 transition-all"
                >
                  <span>Learn Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="#book-appointment"
                  className="text-xs font-semibold text-slate-500 hover:text-navy-900"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form CTA */}
      <section id="book-appointment" className="max-w-4xl mx-auto px-4 pt-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-elevated border border-teal-500/20">
          <div className="text-center mb-8 space-y-2">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Easy Booking</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900">Schedule Your Dental Visit</h2>
            <p className="text-xs text-slate-600 max-w-lg mx-auto">
              Book a consultation with MDS Orthodontist Dr. Jyoti Chauhan at Sector 49, Noida.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>
    </div>
  );
}
