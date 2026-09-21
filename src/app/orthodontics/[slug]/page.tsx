import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Sparkles, Calendar, CheckCircle2, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { orthodonticProblemsData, clinicConfig, getAlignerTerm } from "@/data/clinicData";
import BookingForm from "@/components/BookingForm";
import FAQAccordion from "@/components/FAQAccordion";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return orthodonticProblemsData.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const problem = orthodonticProblemsData.find((p) => p.slug === params.slug);
  if (!problem) return {};

  return {
    title: `${problem.title} Treatment in Noida | Align Dentofacial Clinic`,
    description: problem.shortDesc,
    alternates: {
      canonical: `https://aligndentofacial.in/orthodontics/${problem.slug}`,
    },
  };
}

export default function OrthodonticProblemPage({ params }: Props) {
  const problem = orthodonticProblemsData.find((p) => p.slug === params.slug);
  if (!problem) notFound();

  const alignerTerm = getAlignerTerm(true);

  return (
    <div className="w-full space-y-16 md:space-y-24 pb-16">
      {/* Hero */}
      <section className="bg-navy-950 text-white pt-8 pb-16 rounded-b-[36px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-teal-400">Home</Link>
            <span>/</span>
            <span className="text-teal-400">Orthodontics</span>
            <span>/</span>
            <span className="text-teal-300 font-semibold">{problem.title}</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block">
              Specialist Orthodontic Care
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              {problem.title} Treatment in Noida
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              {problem.shortDesc}
            </p>

            {/* AEO Box */}
            <div className="bg-white/10 p-4 rounded-2xl border border-white/15 text-xs text-slate-200 mt-4">
              <span className="font-bold text-teal-300 block mb-1">Direct Clinical Answer:</span>
              {problem.aeoAnswer}
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-10">
          
          {/* Causes */}
          <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-navy-900">
              Common Causes of {problem.title}
            </h2>
            <ul className="space-y-2 text-xs text-slate-600">
              {problem.causes.map((c, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Effects */}
          <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-navy-900">
              Effects on Health & Appearance
            </h2>
            <ul className="space-y-2 text-xs text-slate-600">
              {problem.effects.map((ef, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{ef}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatment Options */}
          <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-navy-900">
              Treatment Options Available at Align
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {problem.treatments.map((tr, i) => (
                <div key={i} className="p-4 rounded-2xl bg-teal-50 border border-teal-100 text-xs font-semibold text-navy-900 text-center">
                  {tr}
                </div>
              ))}
            </div>
          </div>

          {/* Age & Duration Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-ivory p-6 rounded-2xl border border-slate-200">
              <div className="text-xs font-bold text-teal-600 uppercase mb-1">Ideal Evaluation Age</div>
              <div className="text-xs text-slate-700">{problem.idealAge}</div>
            </div>

            <div className="bg-ivory p-6 rounded-2xl border border-slate-200">
              <div className="text-xs font-bold text-teal-600 uppercase mb-1">Average Duration</div>
              <div className="text-xs text-slate-700">{problem.durationRange}</div>
            </div>
          </div>

          {/* FAQs */}
          <FAQAccordion faqs={problem.faqs} title={`FAQs on ${problem.title}`} />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-28">
            <BookingForm defaultService="Braces (Metal & Ceramic)" />
          </div>
        </div>
      </div>
    </div>
  );
}
