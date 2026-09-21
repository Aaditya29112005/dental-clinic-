import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Disclaimer | Align Dentofacial Clinic",
  description: "Medical disclaimer notice for website content at Align Dentofacial Clinic, Noida.",
};

export default function MedicalDisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-6 text-sm text-slate-700 leading-relaxed font-sans">
      <h1 className="font-serif text-3xl font-bold text-navy-900">Medical Disclaimer</h1>
      
      <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200 text-slate-800 font-medium">
        Information on this site is for general education and is not a substitute for a clinical examination.
      </div>

      <p>
        The content provided on this website, including text, treatment guides, FAQs, and articles, is intended solely for general informational and educational purposes. It does not constitute formal dental advice, diagnosis, or treatment planning.
      </p>

      <p>
        Always seek the advice of a qualified MDS Orthodontist or registered dentist with any questions you may have regarding a dental condition. Never disregard professional medical advice or delay seeking it because of information read on this website.
      </p>

      <p>
        For urgent dental pain or emergencies in Noida, please contact our clinic directly on +91 88604 03089.
      </p>
    </div>
  );
}
