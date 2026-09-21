import { Metadata } from "next";
import Link from "next/link";
import SmileAssessmentQuiz from "@/components/SmileAssessmentQuiz";

export const metadata: Metadata = {
  title: "Interactive Smile Assessment | Align Dentofacial Clinic",
  description: "Take our 5-step interactive smile assessment to get personalized advice on clear aligners, braces, or cosmetic smile makeovers in Noida.",
  alternates: {
    canonical: "https://aligndentofacial.in/smile-assessment",
  },
};

export default function SmileAssessmentPage() {
  return (
    <div className="w-full space-y-12 pb-16">
      <section className="bg-navy-950 text-white pt-8 pb-16 rounded-b-[36px]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-teal-400">Home</Link>
            <span>/</span>
            <span className="text-teal-300 font-semibold">Smile Assessment</span>
          </div>

          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-2">
            Free Clinical Evaluation Quiz
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white max-w-2xl mx-auto">
            Discover Your Ideal Smile Options
          </h1>
          <p className="text-sm text-slate-300 mt-2 max-w-xl mx-auto font-sans">
            Answer 5 quick questions about your smile goals. MDS Orthodontist Dr. Jyoti Chauhan's team will review your responses and guide you.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <SmileAssessmentQuiz />
      </div>
    </div>
  );
}
