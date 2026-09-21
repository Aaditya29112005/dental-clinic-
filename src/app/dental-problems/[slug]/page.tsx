import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Sparkles, Calendar, CheckCircle2, ArrowRight, AlertCircle, Home } from "lucide-react";
import { dentalProblemsData, clinicConfig } from "@/data/clinicData";
import BookingForm from "@/components/BookingForm";
import FAQAccordion from "@/components/FAQAccordion";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return dentalProblemsData.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const problem = dentalProblemsData.find((p) => p.slug === params.slug);
  if (!problem) return {};

  return {
    title: `${problem.title} Solutions in Noida | Align Dentofacial Clinic`,
    description: problem.shortDesc,
    alternates: {
      canonical: `https://aligndentofacial.in/dental-problems/${problem.slug}`,
    },
  };
}

export default function DentalProblemPage({ params }: Props) {
  const problem = dentalProblemsData.find((p) => p.slug === params.slug);
  if (!problem) notFound();

  return (
    <div className="w-full space-y-16 md:space-y-24 pb-16">
      {/* Hero */}
      <section className="bg-navy-950 text-white pt-8 pb-16 rounded-b-[36px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-teal-400">Home</Link>
            <span>/</span>
            <span className="text-teal-400">Dental Problems</span>
            <span>/</span>
            <span className="text-teal-300 font-semibold">{problem.title}</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block">
              Dental Concern Guidance
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              {problem.title} Solutions in Noida
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              {problem.shortDesc}
            </p>

            {/* AEO Box */}
            <div className="bg-white/10 p-4 rounded-2xl border border-white/15 text-xs text-slate-200 mt-4">
              <span className="font-bold text-teal-300 block mb-1">Direct Dental Advice:</span>
              {problem.aeoAnswer}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-10">
          
          {/* Symptoms */}
          <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-navy-900">
              Recognising the Symptoms
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              {problem.symptoms.map((s, i) => (
                <li key={i} className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl">
                  <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Causes */}
          <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-navy-900">
              Common Causes
            </h2>
            <ul className="space-y-2 text-xs text-slate-600">
              {problem.commonCauses.map((c, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* When to See Dentist */}
          <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200 space-y-2">
            <h3 className="font-serif font-bold text-navy-900 text-lg">
              When Should You See a Dentist?
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {problem.whenToSeeDentist.map((w, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments Offered */}
          <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-navy-900">
              Treatments Offered at Align Dentofacial Clinic
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {problem.treatmentsOffered.map((t, i) => (
                <Link
                  key={i}
                  href={`/services/${t.slug}`}
                  className="p-4 rounded-2xl bg-teal-50 hover:bg-teal-100 border border-teal-200 transition-all flex items-center justify-between text-xs font-semibold text-navy-900"
                >
                  <span>{t.title}</span>
                  <ArrowRight className="w-4 h-4 text-teal-600" />
                </Link>
              ))}
            </div>
          </div>

          {/* Home Care Tips */}
          <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-navy-900">
              Home Care & Prevention Tips
            </h2>
            <ul className="space-y-2 text-xs text-slate-600">
              {problem.homeCareTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Home className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQs */}
          <FAQAccordion faqs={problem.faqs} title={`FAQs About ${problem.title}`} />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-28">
            <BookingForm defaultService="Dental Check-ups and Digital X-Rays" />
          </div>
        </div>
      </div>
    </div>
  );
}
