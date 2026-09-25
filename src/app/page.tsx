"use client";

import Link from "next/link";
import { 
  Sparkles, 
  ShieldCheck, 
  Calendar, 
  MessageCircle, 
  Phone, 
  CheckCircle2, 
  ArrowRight,
  Stethoscope,
  Smile,
  Zap,
  Award,
  MapPin
} from "lucide-react";
import BookingForm from "@/components/BookingForm";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ClinicTour from "@/components/ClinicTour";
import StatsCounter from "@/components/StatsCounter";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import FAQAccordion from "@/components/FAQAccordion";
import InstagramFeed from "@/components/InstagramFeed";
import { clinicConfig, servicesData, masterFaqBank, getAlignerTerm } from "@/data/clinicData";
import GSAPMagneticButton from "@/components/animations/GSAPMagneticButton";
import GSAPBatchReveal from "@/components/animations/GSAPBatchReveal";
import GSAPSplitTextHeading from "@/components/animations/GSAPSplitTextHeading";
import CustomVideoPlayer from "@/components/CustomVideoPlayer";
import MediaLightboxModal from "@/components/MediaLightboxModal";
import { useState } from "react";

export default function HomePage() {
  const [heroModalOpen, setHeroModalOpen] = useState(false);
  const alignerTerm = getAlignerTerm(true);
  const whatsappMsg = encodeURIComponent("Hi, I'd like to book a consultation at Align Dentofacial Clinic.");

  const problemStripItems = [
    { title: "Crooked or irregular teeth", icon: Smile, slug: "crooked-or-irregular-teeth" },
    { title: "Bleeding gums while brushing", icon: Zap, slug: "bleeding-gums" },
    { title: "Sensitive to hot or cold", icon: Sparkles, slug: "sensitive-teeth" },
    { title: "Pain while eating", icon: Stethoscope, slug: "tooth-pain" },
    { title: "Missing teeth affecting confidence", icon: ShieldCheck, slug: "missing-teeth" },
    { title: "Child afraid of the dentist", icon: Smile, slug: "child-afraid-of-the-dentist" },
    { title: "Cavities or crooked teeth in kids", icon: CheckCircle2, slug: "tooth-decay-and-cavities" },
  ];

  const specialties = [
    {
      title: `Braces and ${alignerTerm}`,
      benefit: "Precision smile alignment crafted by specialist MDS Orthodontist.",
      link: "/services/braces-noida",
      image: "/images/dr-jyoti-consultation.jpg"
    },
    {
      title: "Smile Designing and Veneers",
      benefit: "Luxury porcelain veneers and digital smile transformations.",
      link: "/services/smile-designing-noida",
      image: "/images/smile-transformation-care.jpg"
    },
    {
      title: "Root Canal Treatment",
      benefit: "Comfort-focused endodontic care that preserves your natural tooth.",
      link: "/services/root-canal-treatment-noida",
      image: "/images/clinic-chair-operatory.jpg"
    },
    {
      title: "Dental Implants",
      benefit: "Permanent, realistic titanium tooth replacements built for longevity.",
      link: "/services/dental-implants-noida",
      image: "/images/treatment-room-view.jpg"
    }
  ];

  const whyChooseTiles = [
    { title: "MDS Orthodontist Lead Care", desc: "Specialist orthodontist Dr. Jyoti Chauhan oversees every single smile treatment plan." },
    { title: "Certified Endodontics & Implants", desc: "Advanced certifications ensuring high-precision root canals and implant placements." },
    { title: "Digital X-Rays & Modern Tech", desc: "Ultra-low radiation digital sensor imaging for accurate, instant diagnostics." },
    { title: "Dedicated Sterilisation Room", desc: "Strict multi-stage instrument infection control for total patient safety." },
    { title: "Transparent Care Plans", desc: "Clear itemised advice with no hidden fees or unnecessary procedure recommendations." },
    { title: "Boutique Appointment-First", desc: "Calm, peaceful environment with minimal waiting time planned around your schedule." }
  ];

  return (
    <div className="w-full space-y-20 md:space-y-28">

      {/* SECTION 1: HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-4 pb-12 overflow-hidden bg-navy-950 text-white rounded-b-[40px]">
        {/* Animated Video Background (Desktop & Mobile) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Dark Gradient Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/80 to-navy-950/55 z-10 pointer-events-none" />
          
          {/* Desktop Animated Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero-poster.jpg"
            className="hidden md:block w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          >
            <source src="/videos/hero-desktop.mp4" type="video/mp4" />
          </video>

          {/* Mobile Animated Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero-poster.jpg"
            className="block md:hidden w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          >
            <source src="/videos/hero-mobile.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-teal-500/15 border border-teal-500/30 px-3.5 py-1.5 rounded-full text-teal-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>Orthodontist-led Dental Clinic near Sector 49, Noida</span>
            </div>

            <div className="space-y-2">
              <GSAPSplitTextHeading
                tag="h1"
                text="Your Smile, Beautifully Aligned"
                type="words"
                stagger={0.05}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white block"
              />
            </div>

            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-xl">
              Specialist orthodontic, cosmetic, and general dental care near Sector 49, Noida. Planned around your comfort and confidence.
            </p>

            {/* GSAP Magnetic Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <GSAPMagneticButton href="#book-appointment" strength={0.4}>
                <div className="px-7 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-semibold text-sm shadow-lg hover:shadow-teal-500/30 transition-all flex items-center gap-2 cursor-pointer">
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </div>
              </GSAPMagneticButton>

              <GSAPMagneticButton 
                href={`https://wa.me/${clinicConfig.whatsappRaw}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                strength={0.4}
              >
                <div className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </div>
              </GSAPMagneticButton>
            </div>

            {/* Trust Chips */}
            <GSAPBatchReveal selector=".trust-chip" stagger={0.1}>
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300 border-t border-white/10">
                <div className="trust-chip flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>MDS Orthodontist</span>
                </div>
                <div className="trust-chip flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>700+ Patients</span>
                </div>
                <div className="trust-chip flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Digital X-Rays</span>
                </div>
                <div className="trust-chip flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Sterilised Care</span>
                </div>
              </div>
            </GSAPBatchReveal>
          </div>

          {/* Right Side: Inline Booking Card */}
          <div className="lg:col-span-5">
            <BookingForm />
          </div>

        </div>
      </section>

      {/* SECTION 2: PROBLEM STRIP */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-1">
            Common Dental Concerns
          </span>
          <GSAPSplitTextHeading
            tag="h2"
            text="Are you facing any of these?"
            type="words"
            className="font-serif text-2xl sm:text-3xl font-bold text-navy-900"
          />
        </div>

        <GSAPBatchReveal selector=".problem-card" stagger={0.1}>
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
            {problemStripItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={`/dental-problems/${item.slug}`}
                  className="problem-card shrink-0 w-64 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-card hover:border-teal-500/50 hover:shadow-soft transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-navy-900 text-sm mb-1 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <div className="text-xs font-semibold text-teal-600 flex items-center gap-1 mt-4">
                    <span>Learn solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </GSAPBatchReveal>

        <p className="text-center text-xs text-slate-500 mt-4 italic">
          Stop living with dental problems. Most can be treated comfortably, and early.
        </p>
      </section>

      {/* SECTION 3: INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block">
              About Align Dentofacial Clinic
            </span>
            <GSAPSplitTextHeading
              tag="h2"
              text="Orthodontist-led Dental Care in Noida"
              type="words"
              className="font-serif text-3xl md:text-4xl font-bold text-navy-900"
            />
            <p className="text-sm font-medium text-slate-700 leading-relaxed">
              Align Dentofacial Clinic is a multispeciality dental care centre located at Pillar No. 44, Dadri Main Road, near Sector 49, Noida.
            </p>

            <GSAPBatchReveal selector=".intro-chip" stagger={0.12}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="intro-chip p-3.5 rounded-2xl bg-teal-50/70 border border-teal-100 space-y-1">
                  <div className="font-semibold text-xs text-navy-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>MDS Orthodontist</span>
                  </div>
                  <p className="text-[11px] text-slate-600">Expert braces, clear aligners & bite correction.</p>
                </div>
                <div className="intro-chip p-3.5 rounded-2xl bg-teal-50/70 border border-teal-100 space-y-1">
                  <div className="font-semibold text-xs text-navy-900 flex items-center gap-1.5">
                    <Stethoscope className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Modern Care</span>
                  </div>
                  <p className="text-[11px] text-slate-600">Pain-controlled root canals, implants & digital X-rays.</p>
                </div>
                <div className="intro-chip p-3.5 rounded-2xl bg-teal-50/70 border border-teal-100 space-y-1">
                  <div className="font-semibold text-xs text-navy-900 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Sector 49 Noida</span>
                  </div>
                  <p className="text-[11px] text-slate-600">Prime location at Pillar No. 44 with easy parking.</p>
                </div>
              </div>
            </GSAPBatchReveal>
            
            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/meet-dr-jyoti-chauhan"
                className="inline-flex items-center gap-2 text-xs font-semibold text-teal-600 hover:text-teal-700 bg-teal-50 px-4 py-2.5 rounded-xl transition-colors"
              >
                <span>Meet Dr. Jyoti Chauhan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/about-clinic"
                className="text-xs font-semibold text-navy-900 hover:text-teal-600 transition-colors"
              >
                Learn About Our Facilities
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-teal-50 to-ivory p-6 rounded-2xl border border-teal-500/20 text-center">
            <div className="w-full h-80 rounded-2xl overflow-hidden shadow-md mb-4 border-2 border-teal-500/30">
              <img
                src="/images/dr-jyoti-chauhan.png"
                alt="Dr. Jyoti Chauhan MDS Orthodontist"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="font-serif font-bold text-navy-900 text-lg">Dr. Jyoti Chauhan</div>
            <div className="text-xs text-teal-600 font-semibold">MDS (Orthodontics and Dentofacial Orthopaedics)</div>
            <div className="text-xs text-slate-500 mt-1">Lead Orthodontist & Dental Specialist</div>
          </div>

        </div>
      </section>

      {/* PATIENT EXPERIENCE VIDEO SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-navy-950 text-white rounded-3xl p-8 md:p-12 shadow-elevated grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block">
              Patient Care Experience
            </span>
            <GSAPSplitTextHeading
              tag="h2"
              text="Inside Align Dentofacial Clinic"
              type="words"
              className="font-serif text-3xl md:text-4xl font-bold text-white block"
            />
            <p className="text-sm text-slate-300 leading-relaxed">
              Watch how our boutique dental facility near Sector 49, Noida, is designed to keep treatments calm, pain-controlled, and completely sterilised.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-300 pt-2">
              <li className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Zero minimal-wait appointment scheduling</span>
              </li>
              <li className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Private consultation desk for transparent treatment plans</span>
              </li>
              <li className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Modern digital X-rays and ergonomic dental chair care</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6">
            <CustomVideoPlayer
              src="/videos/video-patient-experience.mp4"
              poster="/images/dr-jyoti-consultation.jpg"
              title="Align Clinic Walkthrough & Patient Comfort"
              subtitle="Calm lounge, sterilised tools, and MDS specialist consultations."
              badge="Video Reel"
              className="w-full shadow-2xl border-2 border-teal-500/30"
              onExpand={() => setHeroModalOpen(true)}
            />
          </div>
        </div>

        {heroModalOpen && (
          <MediaLightboxModal
            isOpen={heroModalOpen}
            onClose={() => setHeroModalOpen(false)}
            type="video"
            src="/videos/video-patient-experience.mp4"
            title="Align Dentofacial Clinic Patient Experience"
            description="Virtual video tour showcasing our boutique facility near Sector 49, Noida."
            category="Video Showcase"
          />
        )}
      </section>

      {/* SECTION 4: OUR SPECIALTIES */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-2">
            Core Expertise
          </span>
          <GSAPSplitTextHeading
            tag="h2"
            text="Our Key Dental Specialties"
            type="words"
            className="font-serif text-3xl md:text-4xl font-bold text-navy-900"
          />
          <p className="text-sm text-slate-600 mt-2">
            Focused clinical areas led by specialist training and modern equipment.
          </p>
        </div>

        <GSAPBatchReveal selector=".specialty-card" stagger={0.12}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((spec, i) => (
              <div key={i} className="specialty-card bg-white rounded-3xl p-6 shadow-soft border border-slate-100 flex flex-col justify-between group hover:border-teal-500/40 transition-all">
                <div>
                  <div className="w-full h-44 rounded-2xl overflow-hidden mb-4 shadow-inner">
                    <img
                      src={spec.image}
                      alt={spec.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-serif font-bold text-navy-900 text-xl mb-2">
                    {spec.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {spec.benefit}
                  </p>
                </div>

                <Link
                  href={spec.link}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 group-hover:text-teal-700 pt-2 border-t border-slate-100"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </GSAPBatchReveal>
      </section>

      {/* SECTION 5: ALL TREATMENTS GRID */}
      <section id="treatments" className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-2">
            Complete Range
          </span>
          <GSAPSplitTextHeading
            tag="h2"
            text="All Treatments Offered"
            type="words"
            className="font-serif text-3xl md:text-4xl font-bold text-navy-900"
          />
          <p className="text-sm text-slate-600 mt-2">
            Comprehensive general, restorative, orthodontic and cosmetic dental procedures.
          </p>
        </div>

        <GSAPBatchReveal selector=".treatment-card" stagger={0.08}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {servicesData.map((srv) => (
              <Link
                key={srv.id}
                href={`/services/${srv.slug}`}
                className="treatment-card bg-white p-5 rounded-2xl border border-slate-200/80 shadow-card hover:border-teal-500 hover:shadow-soft transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-2">
                    {srv.cardLine}
                  </div>
                  <h3 className="font-serif font-bold text-navy-900 text-base mb-2 group-hover:text-teal-600 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {srv.tagline}
                  </p>
                </div>
                <div className="text-[11px] font-semibold text-teal-600 flex items-center gap-1 mt-4 pt-3 border-t border-slate-100">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </GSAPBatchReveal>
      </section>

      {/* SECTION 6: MEET YOUR ORTHODONTIST */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-navy-900 text-white rounded-3xl p-8 md:p-12 shadow-elevated grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 text-center">
            <div className="w-full h-80 rounded-2xl overflow-hidden shadow-elevated border-2 border-teal-500/30">
              <img
                src="/images/dr-jyoti-chauhan.png"
                alt="Dr. Jyoti Chauhan MDS Orthodontist"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-4 inline-flex items-center gap-2 bg-teal-500/20 px-3 py-1 rounded-full text-xs font-semibold text-teal-300 border border-teal-500/30">
              <Award className="w-3.5 h-3.5 text-teal-400" />
              <span>MDS Orthodontics Specialist</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block">
              Lead Doctor & Specialist
            </span>
            <GSAPSplitTextHeading
              tag="h2"
              text="Meet Dr. Jyoti Chauhan"
              type="words"
              className="font-serif text-3xl md:text-4xl font-bold text-white block"
            />
            <div className="text-xs font-semibold text-teal-300">
              MDS (Orthodontics and Dentofacial Orthopaedics)
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              {clinicConfig.leadDoctor.bio}
            </p>

            {/* Specialty Tags */}
            <div className="pt-2">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Areas of Focus</div>
              <div className="flex flex-wrap gap-2">
                {clinicConfig.leadDoctor.areasOfWork.map((area, idx) => (
                  <span key={idx} className="bg-white/10 text-slate-200 text-xs px-3 py-1 rounded-lg border border-white/10">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <GSAPMagneticButton href="/meet-dr-jyoti-chauhan" strength={0.4}>
                <div className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-semibold text-xs transition-all shadow-md inline-flex items-center gap-2 cursor-pointer">
                  <span>Read Full Doctor Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </GSAPMagneticButton>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 7: WHY CHOOSE ALIGN */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-2">
            Patient Experience Promise
          </span>
          <GSAPSplitTextHeading
            tag="h2"
            text="Why Choose Align Dentofacial Clinic"
            type="words"
            className="font-serif text-3xl md:text-4xl font-bold text-navy-900"
          />
          <p className="text-sm text-slate-600 mt-2">
            Built on clinical precision, modern hygiene, and personal attention.
          </p>
        </div>

        <GSAPBatchReveal selector=".why-tile" stagger={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseTiles.map((tile, i) => (
              <div key={i} className="why-tile bg-white p-6 rounded-3xl border border-slate-100 shadow-soft hover:border-teal-500/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-navy-900 text-lg mb-2">
                  {tile.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {tile.desc}
                </p>
              </div>
            ))}
          </div>
        </GSAPBatchReveal>
      </section>

      {/* SECTION 8: SMILE TRANSFORMATIONS */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-2">
            Real Transformations
          </span>
          <GSAPSplitTextHeading
            tag="h2"
            text="Smile Transformations"
            type="words"
            className="font-serif text-3xl md:text-4xl font-bold text-navy-900"
          />
          <p className="text-sm text-slate-600 mt-2">
            Explore smile alignment cases treated at Align Dentofacial Clinic.
          </p>
        </div>

        <BeforeAfterSlider />
      </section>

      {/* SECTION 9: CLINIC TOUR */}
      <section className="max-w-7xl mx-auto px-4">
        <ClinicTour />
      </section>

      {/* SECTION 10: STATS COUNTERS */}
      <section className="max-w-7xl mx-auto px-4">
        <StatsCounter />
      </section>

      {/* INSTAGRAM FEED SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4">
        <InstagramFeed />
      </section>

      {/* SECTION 11: PATIENT STORIES */}
      <section className="max-w-7xl mx-auto px-4">
        <TestimonialsCarousel />
      </section>

      {/* SECTION 12: FAQ ACCORDION */}
      <section className="max-w-7xl mx-auto px-4">
        <FAQAccordion faqs={masterFaqBank.slice(0, 8)} />
      </section>

      {/* SECTION 13: FINAL CTA BAND */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-navy-900 text-white rounded-3xl p-10 md:p-16 text-center shadow-elevated relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl mx-auto relative z-10 space-y-4">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block">
              Start Today
            </span>
            <GSAPSplitTextHeading
              tag="h2"
              text="Ready to Begin Your Smile Journey?"
              type="words"
              className="font-serif text-3xl md:text-5xl font-bold text-white block"
            />
            <p className="text-sm md:text-base text-slate-300 font-sans leading-relaxed">
              Experience personalised dental care designed around comfort, precision and aesthetics near Sector 49, Noida.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <GSAPMagneticButton href="#book-appointment" strength={0.45}>
                <div className="px-8 py-4 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-semibold text-sm shadow-lg hover:shadow-teal-500/30 transition-all flex items-center gap-2 cursor-pointer">
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </div>
              </GSAPMagneticButton>

              <GSAPMagneticButton href={`tel:${clinicConfig.phoneRaw}`} strength={0.45}>
                <div className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all flex items-center gap-2 cursor-pointer">
                  <Phone className="w-4 h-4 text-teal-400" />
                  <span>Call +91 88604 03089</span>
                </div>
              </GSAPMagneticButton>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
