import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { clinicConfig, servicesData } from "@/data/clinicData";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white pt-16 pb-24 md:pb-12 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-12 border-b border-navy-900">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block bg-white p-2.5 rounded-2xl shadow-sm hover:opacity-95 transition-opacity">
              <img
                src="/logo.png"
                alt="Align Dentofacial Clinic Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              {clinicConfig.positioningLine}. Lead by MDS Orthodontist Dr. Jyoti Chauhan, delivering specialist orthodontic, cosmetic, and general dental care near Sector 49, Noida.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{clinicConfig.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${clinicConfig.phoneRaw}`} className="hover:text-teal-300 transition-colors">
                  {clinicConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${clinicConfig.email}`} className="hover:text-teal-300 transition-colors">
                  {clinicConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{clinicConfig.hours}</span>
              </div>
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={clinicConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram page"
                className="w-8 h-8 rounded-full bg-navy-900 hover:bg-teal-500 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={clinicConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook page"
                className="w-8 h-8 rounded-full bg-navy-900 hover:bg-teal-500 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links / Treatments */}
          <div>
            <h4 className="font-serif text-sm font-bold text-teal-400 uppercase tracking-wider mb-4">
              Treatments & Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {servicesData.slice(0, 8).map((srv) => (
                <li key={srv.id}>
                  <Link href={`/services/${srv.slug}`} className="hover:text-teal-300 transition-colors">
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Clinic Navigation */}
          <div>
            <h4 className="font-serif text-sm font-bold text-teal-400 uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
              <li><Link href="/about-clinic" className="hover:text-teal-300">About Clinic</Link></li>
              <li><Link href="/meet-dr-jyoti-chauhan" className="hover:text-teal-300">Meet Dr. Jyoti Chauhan</Link></li>
              <li><Link href="/smile-assessment" className="hover:text-teal-300">Smile Assessment Quiz</Link></li>
              <li><Link href="/gallery" className="hover:text-teal-300">Clinic Tour Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-teal-300">Dental Blog</Link></li>
              <li><Link href="/contact" className="hover:text-teal-300">Contact & Directions</Link></li>
            </ul>

            {/* Embedded Map */}
            <div id="map-location" className="w-full h-28 rounded-xl overflow-hidden border border-navy-800 bg-navy-900 relative">
              <iframe
                title="Align Dentofacial Clinic Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6853874312!2d77.3767!3d28.5672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzAxLjkiTiA3N8KwMjInMzSureJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

        </div>

        {/* Closing Line & Legal Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
          <p className="font-serif italic text-slate-300 text-sm max-w-xl">
            "Every smile is treated as a signature: designed with precision, elevated by artistry and delivered with care."
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-400">
            <Link href="/privacy-policy" className="hover:text-teal-400">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms-and-conditions" className="hover:text-teal-400">Terms & Conditions</Link>
            <span>•</span>
            <Link href="/medical-disclaimer" className="hover:text-teal-400">Medical Disclaimer</Link>
          </div>
        </div>

        <div className="mt-6 text-center text-[11px] text-slate-500 border-t border-navy-900/60 pt-4">
          © {new Date().getFullYear()} Align Dentofacial Clinic. All rights reserved. Noida, Uttar Pradesh.
        </div>
      </div>
    </footer>
  );
}
