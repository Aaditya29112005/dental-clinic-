import { Metadata } from "next";
import Link from "next/link";
import { Award, ShieldCheck, CheckCircle2, Calendar, Stethoscope, HeartHandshake } from "lucide-react";
import { clinicConfig } from "@/data/clinicData";
import BookingForm from "@/components/BookingForm";
import { generatePhysicianSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Meet Dr. Jyoti Chauhan | MDS Orthodontist in Noida",
  description: "Learn about Dr. Jyoti Chauhan, MDS (Orthodontics and Dentofacial Orthopaedics), lead specialist at Align Dentofacial Clinic near Sector 49, Noida.",
  alternates: {
    canonical: "https://aligndentofacial.in/meet-dr-jyoti-chauhan",
  },
};

export default function MeetDoctorPage() {
  const doctor = clinicConfig.leadDoctor;
  const physicianSchema = generatePhysicianSchema();

  return (
    <div className="w-full space-y-16 md:space-y-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />

      {/* Hero */}
      <section className="bg-navy-950 text-white pt-8 pb-16 rounded-b-[36px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-teal-400">Home</Link>
            <span>/</span>
            <span className="text-teal-300 font-semibold">Meet Dr. Jyoti Chauhan</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block">
                Lead Orthodontist & Dental Specialist
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
                {doctor.name}
              </h1>
              <p className="text-sm font-semibold text-teal-300">
                {doctor.qualifications}
              </p>
              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                Dedicated to transforming smiles with precision orthodontic planning, clear aligners, and comfort-focused general dentistry near Sector 49, Noida.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="w-full h-80 rounded-2xl bg-slate-900 text-slate-300 p-6 flex flex-col items-center justify-center text-center text-xs font-mono shadow-inner border border-teal-500/30">
                [CLIENT TO PROVIDE: Dr. Jyoti Chauhan Professional Portrait]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Details */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-10">
          
          {/* Detailed Biography */}
          <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-navy-900">
              Biography & Experience
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {doctor.bio}
            </p>
          </div>

          {/* First Person Note */}
          <div className="bg-gradient-to-br from-teal-50 to-ivory p-8 rounded-3xl border border-teal-500/20 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-teal-600 uppercase tracking-widest">
              <HeartHandshake className="w-4 h-4" />
              <span>A Personal Note from Dr. Jyoti</span>
            </div>
            <p className="font-serif italic text-base md:text-lg text-navy-900 leading-relaxed">
              "My philosophy is simple: every smile is unique and deserves individualised care. I believe in taking the time to explain every step of your treatment clearly, keeping procedures pain-controlled, and ensuring you feel completely comfortable throughout your smile journey."
            </p>
          </div>

          {/* Areas of Clinical Focus */}
          <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-navy-900">
              Areas of Clinical Focus
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-navy-900 font-semibold">
              {doctor.areasOfWork.map((area, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-navy-900">
              Certifications & Credentials
            </h2>
            <ul className="space-y-2 text-xs text-slate-600">
              {doctor.certifications.map((cert, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-slate-400 italic pt-2">
              [CLIENT TO PROVIDE: Certificate PDFs and Badge Images]
            </p>
          </div>

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
