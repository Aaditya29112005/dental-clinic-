import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MessageCircle, Phone, ArrowRight, Calendar } from "lucide-react";
import { clinicConfig } from "@/data/clinicData";

export const metadata: Metadata = {
  title: "Thank You | Appointment Request Received",
  description: "Thank you for contacting Align Dentofacial Clinic, Noida. Our team will reach out to confirm your consultation slot.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  const whatsappMsg = encodeURIComponent("Hi, I just submitted an appointment request on your website.");

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-8">
      <div className="w-20 h-20 bg-teal-50 rounded-full text-teal-600 flex items-center justify-center mx-auto shadow-sm">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block">
          Request Received
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
          Thank You for Booking!
        </h1>
        <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
          Your appointment details have been logged. Our reception team at Align Dentofacial Clinic will review your preferred date and contact you shortly.
        </p>
      </div>

      {/* What Happens Next */}
      <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 text-left space-y-4">
        <h2 className="font-serif font-bold text-navy-900 text-xl">
          What Happens Next?
        </h2>
        <div className="space-y-3 text-xs text-slate-700">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-teal-50 text-teal-600 font-bold flex items-center justify-center shrink-0">1</div>
            <div>
              <div className="font-semibold text-navy-900">Confirmation Call or WhatsApp Message</div>
              <p className="text-slate-500 mt-0.5">We will contact you during clinic hours (Tuesday to Sunday, 10 am to 7 pm) to finalize your exact slot.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-teal-50 text-teal-600 font-bold flex items-center justify-center shrink-0">2</div>
            <div>
              <div className="font-semibold text-navy-900">Visit Our Boutique Clinic</div>
              <p className="text-slate-500 mt-0.5">Reach Pillar No. 44, Dadri Main Road, near Sector 49, Noida. Ground parking is available.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-teal-50 text-teal-600 font-bold flex items-center justify-center shrink-0">3</div>
            <div>
              <div className="font-semibold text-navy-900">Personalised Doctor Consultation</div>
              <p className="text-slate-500 mt-0.5">Meet Dr. Jyoti Chauhan for your digital evaluation and transparent treatment plan.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Immediate WhatsApp Action */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-200 text-center space-y-3">
        <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Need Immediate Confirmation?</div>
        <p className="text-xs text-slate-700">
          Chat with our reception team right away on WhatsApp:
        </p>
        <a
          href={`https://wa.me/${clinicConfig.whatsappRaw}?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-md transition-all"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Connect via WhatsApp</span>
        </a>
      </div>

      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-navy-900 hover:text-teal-600 transition-colors"
        >
          <span>Return to Homepage</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
