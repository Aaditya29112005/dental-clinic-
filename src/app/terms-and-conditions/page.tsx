import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Align Dentofacial Clinic",
  description: "Terms of service and clinic guidelines for Align Dentofacial Clinic, Noida.",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-6 text-sm text-slate-700 leading-relaxed font-sans">
      <h1 className="font-serif text-3xl font-bold text-navy-900">Terms & Conditions</h1>
      <p>
        Welcome to Align Dentofacial Clinic. By accessing our website or booking a appointment, you agree to comply with the following clinic terms and guidelines.
      </p>

      <h2 className="font-serif text-xl font-bold text-navy-900 pt-4">1. Appointments & Walk-ins</h2>
      <p>
        Appointments scheduled online or over the phone are confirmed upon contact by our reception team. Walk-in patients are welcome during operating hours (Tuesday to Sunday, 10 am to 7 pm; Monday closed).
      </p>

      <h2 className="font-serif text-xl font-bold text-navy-900 pt-4">2. Ethical Care & Estimates</h2>
      <p>
        Treatment plans and cost estimates are provided following thorough clinical examination and digital X-ray evaluation. All recommendations are made in accordance with ethical standards set by the Dental Council of India.
      </p>
    </div>
  );
}
