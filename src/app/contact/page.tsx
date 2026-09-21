import { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation, CheckCircle2 } from "lucide-react";
import { clinicConfig } from "@/data/clinicData";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Contact Us & Directions | Align Dentofacial Clinic Noida",
  description: "Contact Align Dentofacial Clinic at Pillar No. 44, Dadri Main Road, near Sector 49, Noida. Call or WhatsApp +91 88604 03089 to book your appointment.",
  alternates: {
    canonical: "https://aligndentofacial.in/contact",
  },
};

export default function ContactPage() {
  const whatsappMsg = encodeURIComponent("Hi, I'd like to book a consultation at Align Dentofacial Clinic.");

  return (
    <div className="w-full space-y-16 pb-16">
      {/* Hero */}
      <section className="bg-navy-950 text-white pt-8 pb-16 rounded-b-[36px]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-teal-400">Home</Link>
            <span>/</span>
            <span className="text-teal-300 font-semibold">Contact Us</span>
          </div>

          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-2">
            Get In Touch
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Contact & Location Directions
          </h1>
          <p className="text-sm text-slate-300 mt-2 max-w-xl mx-auto">
            Located right on Dadri Main Road at Pillar No. 44, East Avenue Grand, near Sector 49, Noida.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info & Directions Column */}
        <div className="lg:col-span-6 space-y-8">
          
          <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 space-y-6">
            <h2 className="font-serif text-2xl font-bold text-navy-900">
              Clinic Contact Details
            </h2>

            <div className="space-y-4 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-navy-900 text-sm">Full Address</div>
                  <p className="text-slate-600 mt-0.5">{clinicConfig.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-600 shrink-0" />
                <div>
                  <div className="font-bold text-navy-900 text-sm">Phone & WhatsApp</div>
                  <a href={`tel:${clinicConfig.phoneRaw}`} className="text-teal-600 hover:underline">
                    {clinicConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-600 shrink-0" />
                <div>
                  <div className="font-bold text-navy-900 text-sm">Email</div>
                  <a href={`mailto:${clinicConfig.email}`} className="text-teal-600 hover:underline">
                    {clinicConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-teal-600 shrink-0" />
                <div>
                  <div className="font-bold text-navy-900 text-sm">Clinic Hours</div>
                  <p className="text-slate-600">{clinicConfig.hoursDetail}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`tel:${clinicConfig.phoneRaw}`}
                className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-semibold text-xs transition-all shadow-md flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              <a
                href={`https://wa.me/${clinicConfig.whatsappRaw}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* How to Reach Us Directions */}
          <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-teal-600 uppercase tracking-widest">
              <Navigation className="w-4 h-4" />
              <span>How to Reach Us</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-navy-900">
              Directions from Sector 49 Main Road
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Head toward Dadri Main Road near Sector 49. Look for Metro Pillar No. 44.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>The clinic is located at Shop No. 6, East Avenue Grand, opposite Kohli Vihar.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Ample ground-level parking is available near the complex entrance.</span>
              </li>
            </ul>
          </div>

          {/* Embedded Google Map */}
          <div className="bg-white p-6 rounded-3xl shadow-soft border border-slate-100 space-y-3">
            <h3 className="font-serif font-bold text-navy-900 text-base">
              Google Maps Location
            </h3>
            <div className="w-full h-64 rounded-2xl overflow-hidden border border-slate-200">
              <iframe
                title="Align Dentofacial Clinic Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6853874312!2d77.3767!3d28.5672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzAxLjkiTiA3N8KwMjInMzYuOCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>

        </div>

        {/* Form Column */}
        <div className="lg:col-span-6">
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
