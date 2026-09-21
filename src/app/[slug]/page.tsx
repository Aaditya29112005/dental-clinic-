import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Navigation, Clock, Phone, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { locationsData, clinicConfig, servicesData } from "@/data/clinicData";
import BookingForm from "@/components/BookingForm";
import FAQAccordion from "@/components/FAQAccordion";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return locationsData.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = locationsData.find((l) => l.slug === params.slug);
  if (!location) return {};

  return {
    title: `Dentist in ${location.areaName} Noida | Align Dentofacial Clinic`,
    description: `Looking for a specialist dentist in ${location.areaName}, Noida? Align Dentofacial Clinic is located just ${location.distanceFromClinic} away (${location.drivingTime}). Braces, aligners, RCT, implants.`,
    alternates: {
      canonical: `https://aligndentofacial.in/${location.slug}`,
    },
  };
}

export default function LocalSeoPage({ params }: Props) {
  const location = locationsData.find((l) => l.slug === params.slug);
  if (!location) notFound();

  return (
    <div className="w-full space-y-16 md:space-y-24 pb-16">
      {/* Hero */}
      <section className="bg-navy-950 text-white pt-8 pb-16 rounded-b-[36px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-teal-400">Home</Link>
            <span>/</span>
            <span className="text-teal-400">Locations</span>
            <span>/</span>
            <span className="text-teal-300 font-semibold">{location.areaName}</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block">
              Nearby Dental Care in Noida
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Dentist in {location.areaName}, Noida
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Looking for a specialist dental clinic near {location.areaName}? Align Dentofacial Clinic is situated just <strong className="text-teal-300">{location.distanceFromClinic}</strong> away ({location.drivingTime}).
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
                <Navigation className="w-3.5 h-3.5 text-teal-400" />
                <span>Distance: {location.distanceFromClinic}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                <span>Travel Time: {location.drivingTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-10">
          
          {/* Route & Directions */}
          <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-navy-900">
              How to Reach Us from {location.areaName}
            </h2>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-700 leading-relaxed space-y-2">
              <div className="flex items-center gap-2 font-semibold text-navy-900">
                <MapPin className="w-4 h-4 text-teal-600" />
                <span>Landmark Reference: {location.landmark}</span>
              </div>
              <p>{location.routeDirections}</p>
            </div>
          </div>

          {/* Popular Treatments Searched in Area */}
          <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-navy-900">
              Popular Treatments Searched in {location.areaName}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {location.popularTreatments.map((tr, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-teal-50 text-teal-900 font-semibold text-xs border border-teal-100 text-center">
                  {tr}
                </div>
              ))}
            </div>
          </div>

          {/* Full Treatments Grid */}
          <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-navy-900">
              Comprehensive Dental Care for {location.areaName} Residents
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              From specialist braces and clear aligners to pain-controlled root canals, digital X-rays, and dental implants, Dr. Jyoti Chauhan provides transparent, patient-first care.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {servicesData.slice(0, 6).map((srv) => (
                <Link
                  key={srv.id}
                  href={`/services/${srv.slug}`}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200/80 flex items-center justify-between font-semibold text-navy-900 transition-colors"
                >
                  <span>{srv.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-600" />
                </Link>
              ))}
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="bg-white p-6 rounded-3xl shadow-soft border border-slate-100 space-y-4">
            <h3 className="font-serif font-bold text-navy-900 text-lg">
              Clinic Location Map
            </h3>
            <div className="w-full h-72 rounded-2xl overflow-hidden border border-slate-200">
              <iframe
                title={`Align Dentofacial Clinic Location Map from ${location.areaName}`}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6853874312!2d77.3767!3d28.5672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzAxLjkiTiA3N8KwMjInMzYuOCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>

          {/* Location FAQs */}
          <FAQAccordion faqs={location.faqs} title={`FAQs for ${location.areaName} Patients`} />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-28">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}
