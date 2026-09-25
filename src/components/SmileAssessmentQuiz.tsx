"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Sparkles, Check, ArrowRight, ArrowLeft, Phone, User, CheckCircle2 } from "lucide-react";
import { getAlignerTerm } from "@/data/clinicData";

export default function SmileAssessmentQuiz() {
  const router = useRouter();
  const alignerTerm = getAlignerTerm(true);
  const [step, setStep] = useState(1);

  const [concerns, setConcerns] = useState<string[]>([]);
  const [ageGroup, setAgeGroup] = useState("");
  const [hadBracesBefore, setHadBracesBefore] = useState("");
  const [preferredStyle, setPreferredStyle] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const concernOptions = [
    "Crooked or overlapping teeth",
    "Spaced teeth / gaps",
    "Stained or yellow teeth",
    "Forward teeth / protrusion",
    "Missing teeth",
    "Bite discomfort when chewing"
  ];

  const ageOptions = ["Under 18 years", "18 to 30 years", "31 to 50 years", "Above 50 years"];

  const styleOptions = [
    `${alignerTerm} (Invisible)`,
    "Ceramic / Tooth-coloured Braces",
    "Metal Braces",
    "Cosmetic Veneers",
    "I want doctor's advice"
  ];

  const toggleConcern = (item: string) => {
    if (concerns.includes(item)) {
      setConcerns(concerns.filter((c) => c !== item));
    } else {
      setConcerns([...concerns, item]);
    }
  };

  const validatePhone = (p: string) => {
    const cleanPhone = p.replace(/\D/g, "").slice(-10);
    return /^[6-9]\d{9}$/.test(cleanPhone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError("");

    if (!validatePhone(phone)) {
      setPhoneError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          service: `Smile Assessment Lead - Concerns: ${concerns.join(", ")} | Age: ${ageGroup} | Preferred: ${preferredStyle}`,
          date: new Date().toISOString().split("T")[0],
          timeSlot: "Working Hours Callback",
        }),
      });

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-elevated text-center max-w-xl mx-auto border border-teal-500/20">
        <div className="w-16 h-16 bg-teal-50 rounded-full text-teal-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-navy-900 mb-2">
          Assessment Submitted!
        </h3>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          Thank you, <strong className="text-navy-900">{name}</strong>. Our dental team will review your responses and call you on <strong className="text-navy-900">{phone}</strong> within working hours.
        </p>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-semibold text-xs transition-all shadow-md"
        >
          Return to Homepage
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-elevated max-w-2xl mx-auto border border-slate-100">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
          <span>Step {step} of 5</span>
          <span className="text-teal-600 font-bold">{Math.round((step / 5) * 100)}% Completed</span>
        </div>
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-teal-500 transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1: Concerns */}
      {step === 1 && (
        <div className="animate-in fade-in duration-200">
          <h3 className="font-serif text-2xl font-bold text-navy-900 mb-2">
            What bothers you most about your smile?
          </h3>
          <p className="text-xs text-slate-500 mb-6">
            Select all options that apply to you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {concernOptions.map((item) => {
              const isSelected = concerns.includes(item);
              return (
                <button
                  type="button"
                  key={item}
                  onClick={() => toggleConcern(item)}
                  className={`p-4 rounded-2xl text-left border text-xs font-medium transition-all flex items-center justify-between ${
                    isSelected
                      ? "bg-teal-50 border-teal-500 text-teal-900 shadow-sm"
                      : "bg-slate-50/50 hover:bg-slate-50 border-slate-200 text-slate-700"
                  }`}
                >
                  <span>{item}</span>
                  {isSelected && <Check className="w-4 h-4 text-teal-600 shrink-0" />}
                </button>
              );
            })}
          </div>

          <button
            disabled={concerns.length === 0}
            onClick={() => setStep(2)}
            className="w-full py-3.5 rounded-xl bg-teal-500 hover:bg-teal-600 disabled:opacity-50 text-white font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>Next Step</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Step 2: Age Group */}
      {step === 2 && (
        <div className="animate-in fade-in duration-200">
          <h3 className="font-serif text-2xl font-bold text-navy-900 mb-2">
            What is your age group?
          </h3>
          <p className="text-xs text-slate-500 mb-6">
            This helps us recommend age-appropriate orthodontic treatment options.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {ageOptions.map((opt) => (
              <button
                type="button"
                key={opt}
                onClick={() => {
                  setAgeGroup(opt);
                  setStep(3);
                }}
                className={`p-4 rounded-2xl text-left border text-xs font-medium transition-all ${
                  ageGroup === opt
                    ? "bg-teal-50 border-teal-500 text-teal-900"
                    : "bg-slate-50/50 hover:bg-slate-50 border-slate-200 text-slate-700"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          <button
            onClick={() => setStep(1)}
            className="text-xs text-slate-500 hover:text-navy-900 flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>
        </div>
      )}

      {/* Step 3: Previous Braces */}
      {step === 3 && (
        <div className="animate-in fade-in duration-200">
          <h3 className="font-serif text-2xl font-bold text-navy-900 mb-2">
            Have you had braces or aligners in the past?
          </h3>
          <p className="text-xs text-slate-500 mb-6">
            Previous treatment helps us evaluate smile relapse cases.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {["Yes, in the past", "No, never"].map((opt) => (
              <button
                type="button"
                key={opt}
                onClick={() => {
                  setHadBracesBefore(opt);
                  setStep(4);
                }}
                className="p-5 rounded-2xl text-center border text-xs font-medium bg-slate-50/50 hover:bg-teal-50 hover:border-teal-500 border-slate-200 text-slate-800 transition-all"
              >
                {opt}
              </button>
            ))}
          </div>

          <button
            onClick={() => setStep(2)}
            className="text-xs text-slate-500 hover:text-navy-900 flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>
        </div>
      )}

      {/* Step 4: Preferred Style */}
      {step === 4 && (
        <div className="animate-in fade-in duration-200">
          <h3 className="font-serif text-2xl font-bold text-navy-900 mb-2">
            What is your preferred treatment style?
          </h3>
          <p className="text-xs text-slate-500 mb-6">
            Choose what appeals to your lifestyle preferences.
          </p>

          <div className="space-y-2.5 mb-8">
            {styleOptions.map((opt) => (
              <button
                type="button"
                key={opt}
                onClick={() => {
                  setPreferredStyle(opt);
                  setStep(5);
                }}
                className="w-full p-4 rounded-2xl text-left border text-xs font-medium bg-slate-50/50 hover:bg-teal-50 hover:border-teal-500 border-slate-200 text-slate-800 transition-all flex items-center justify-between"
              >
                <span>{opt}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </div>

          <button
            onClick={() => setStep(3)}
            className="text-xs text-slate-500 hover:text-navy-900 flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>
        </div>
      )}

      {/* Step 5: Contact Details */}
      {step === 5 && (
        <form onSubmit={handleSubmit} className="animate-in fade-in duration-200 space-y-4">
          <h3 className="font-serif text-2xl font-bold text-navy-900 mb-1">
            Where should we send your custom assessment?
          </h3>
          <p className="text-xs text-slate-500 mb-4">
            Dr. Jyoti Chauhan's team will contact you within working hours.
          </p>

          <div>
            <label className="block text-xs font-semibold text-navy-900 mb-1">Your Name *</label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-200 focus:border-teal-500 outline-none bg-white text-slate-900 placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-navy-900 mb-1">Phone Number *</label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                required
                placeholder="10-digit Indian Mobile Number"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (phoneError) setPhoneError("");
                }}
                className={`w-full pl-10 pr-4 py-3 text-sm rounded-xl border ${
                  phoneError ? "border-red-500" : "border-slate-200"
                } focus:border-teal-500 outline-none bg-white text-slate-900 placeholder:text-slate-400`}
              />
            </div>
            {phoneError && <p className="text-xs text-red-500 mt-1">{phoneError}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2 mt-2"
          >
            {isSubmitting ? "Submitting..." : "Get My Free Smile Assessment"}
          </button>

          <button
            type="button"
            onClick={() => setStep(4)}
            className="text-xs text-slate-500 hover:text-navy-900 flex items-center gap-1 pt-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>
        </form>
      )}
    </div>
  );
}
