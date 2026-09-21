import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Align Dentofacial Clinic",
  description: "Privacy policy and data protection guidelines for Align Dentofacial Clinic, Noida.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-6 text-sm text-slate-700 leading-relaxed font-sans">
      <h1 className="font-serif text-3xl font-bold text-navy-900">Privacy Policy</h1>
      <p>
        At Align Dentofacial Clinic ("we", "our", "us"), protecting your personal information is fundamental to our practice ethics. This Privacy Policy outlines how we handle patient data submitted via our website and during clinical consultations.
      </p>

      <h2 className="font-serif text-xl font-bold text-navy-900 pt-4">1. Information We Collect</h2>
      <p>
        When you submit an appointment booking request or smile assessment form, we collect your name, phone number, preferred treatment, date, and time slot. This information is solely used to contact you to confirm your consultation.
      </p>

      <h2 className="font-serif text-xl font-bold text-navy-900 pt-4">2. Medical Confidentiality</h2>
      <p>
        All clinical records, digital X-rays, and patient consultation details are maintained under strict confidentiality in compliance with Dental Council of India norms. We do not sell, rent, or trade patient personal data to third parties.
      </p>

      <h2 className="font-serif text-xl font-bold text-navy-900 pt-4">3. Contact Us</h2>
      <p>
        If you have any questions regarding your data privacy, please reach out to us at contact@aligndentofacial.in or call +91 88604 03089.
      </p>
    </div>
  );
}
