"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar, Clock, User, Phone, CheckCircle2, ShieldCheck, Star } from "lucide-react";
import { servicesData } from "@/data/clinicData";

interface BookingFormProps {
  defaultService?: string;
  className?: string;
}

export default function BookingForm({ defaultService = "", className = "" }: BookingFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: defaultService || servicesData[0].title,
    date: "",
    timeSlot: "Morning (10 am - 1 pm)",
  });

  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePhone = (phone: string) => {
    // Remove spaces, hyphens, and +91 country code prefix
    const cleanPhone = phone.replace(/\D/g, "").slice(-10);
    const indianPhoneRegex = /^[6-9]\d{9}$/;
    return indianPhoneRegex.test(cleanPhone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError("");

    if (!validatePhone(formData.phone)) {
      setPhoneError("Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Analytics trigger hook place for generate_lead
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "generate_lead", {
            service_name: formData.service,
          });
        }
        router.push("/thank-you");
      } else {
        alert("Failed to submit booking. Please try again or call +91 88604 03089 directly.");
      }
    } catch (err) {
      console.error(err);
      // Fallback redirect for graceful experience
      router.push("/thank-you");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="book-appointment" className={`bg-white rounded-3xl p-6 md:p-8 shadow-elevated border border-teal-500/20 ${className}`}>
      <div className="mb-6">
        <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-1">
          Quick & Direct
        </span>
        <h3 className="font-serif text-2xl font-bold text-navy-900">
          Book Your Consultation
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Select your preferred time. We will confirm your slot within working hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-xs font-semibold text-navy-900 mb-1">
            Full Name *
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold text-navy-900 mb-1">
            Phone Number *
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="tel"
              required
              placeholder="10-digit mobile number"
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                if (phoneError) setPhoneError("");
              }}
              className={`w-full pl-10 pr-4 py-3 text-sm rounded-xl border ${
                phoneError ? "border-red-500" : "border-slate-200"
              } focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all`}
            />
          </div>
          {phoneError && (
            <p className="text-xs text-red-500 mt-1 font-medium">{phoneError}</p>
          )}
        </div>

        {/* Treatment Dropdown */}
        <div>
          <label className="block text-xs font-semibold text-navy-900 mb-1">
            Select Treatment *
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all bg-white"
          >
            {servicesData.map((srv) => (
              <option key={srv.id} value={srv.title}>
                {srv.title}
              </option>
            ))}
          </select>
        </div>

        {/* Date and Time Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-navy-900 mb-1">
              Preferred Date *
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="date"
                required
                min={new Date().toISOString().split("T")[0]}
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full pl-10 pr-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-navy-900 mb-1">
              Preferred Time Slot
            </label>
            <div className="relative">
              <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <select
                value={formData.timeSlot}
                onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                className="w-full pl-10 pr-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:border-teal-500 outline-none transition-all bg-white"
              >
                <option value="Morning (10 am - 1 pm)">Morning (10 am - 1 pm)</option>
                <option value="Afternoon (1 pm - 4 pm)">Afternoon (1 pm - 4 pm)</option>
                <option value="Evening (4 pm - 7 pm)">Evening (4 pm - 7 pm)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group mt-2 disabled:opacity-70"
        >
          {isSubmitting ? (
            <span>Confirming Booking...</span>
          ) : (
            <>
              <span>Book Appointment</span>
              <CheckCircle2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </>
          )}
        </button>
      </form>

      {/* Trust Elements */}
      <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500">
        <div className="flex items-center gap-1 font-medium text-amber-600">
          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
          <span>5.0 Google Rating</span>
        </div>
        <div className="flex items-center gap-1 font-medium text-navy-900">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
          <span>MDS Orthodontist</span>
        </div>
        <div className="flex items-center gap-1 font-medium text-slate-600">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>Sterilised Clinic</span>
        </div>
      </div>
    </div>
  );
}
