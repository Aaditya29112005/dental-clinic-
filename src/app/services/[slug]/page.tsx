import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Sparkles, 
  Calendar, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  HelpCircle,
  Stethoscope
} from "lucide-react";
import { servicesData, clinicConfig } from "@/data/clinicData";
import BookingForm from "@/components/BookingForm";
import FAQAccordion from "@/components/FAQAccordion";
import { generateMedicalProcedureSchema, generateBreadcrumbSchema } from "@/lib/schema";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return servicesData.map((srv) => ({
    slug: srv.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return {};

  return {
    title: `${service.title} in Noida | Align Dentofacial Clinic`,
    description: service.shortDesc,
    alternates: {
      canonical: `https://aligndentofacial.in/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} in Noida | Align Dentofacial Clinic`,
      description: service.shortDesc,
      url: `https://aligndentofacial.in/services/${service.slug}`,
    },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const whatsappMsg = encodeURIComponent(
    `Hi, I'd like to inquire about ${service.title} at Align Dentofacial Clinic.`
  );

  const procedureSchema = generateMedicalProcedureSchema(
    service.title,
    service.shortDesc,
    `https://aligndentofacial.in/services/${service.slug}`
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://aligndentofacial.in" },
    { name: "Services", url: "https://aligndentofacial.in/#treatments" },
    { name: service.title, url: `https://aligndentofacial.in/services/${service.slug}` }
  ]);

  const relatedServices = servicesData.filter((s) =>
    service.relatedSlugs.includes(s.slug)
  );

  return (
    <div className="w-full space-y-16 md:space-y-24 pb-16">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-navy-950 text-white pt-8 pb-16 rounded-b-[36px] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-teal-400">Home</Link>
            <span>/</span>
            <Link href="/#treatments" className="hover:text-teal-400">Services</Link>
            <span>/</span>
            <span className="text-teal-300 font-semibold">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 bg-teal-500/15 border border-teal-500/30 px-3.5 py-1.5 rounded-full text-teal-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                <span>Specialist Treatment in Noida</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
                {service.title} <span className="text-teal-400 block text-2xl sm:text-3xl font-normal italic">in Noida</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-serif italic">
                "{service.tagline}"
              </p>

              {/* AEO Summary Box */}
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-xs sm:text-sm text-slate-200 leading-relaxed">
                <span className="text-xs font-bold text-teal-300 uppercase tracking-widest block mb-1">
                  Quick Summary
                </span>
                {service.aeoAnswer}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#book-service-form"
                  className="px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-semibold text-xs transition-all shadow-md flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </a>

                <a
                  href={`https://wa.me/${clinicConfig.whatsappRaw}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Query</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative group overflow-hidden rounded-2xl border border-teal-500/30 shadow-2xl bg-slate-900">
                <img
                  src={service.image || `/images/${service.slug}.jpg`}
                  alt={service.title}
                  className="w-full h-72 sm:h-80 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-4 right-4 bg-navy-900/80 backdrop-blur-md p-3 rounded-xl border border-white/10 text-xs text-teal-300 font-medium flex items-center justify-between">
                  <span>{service.title} Procedure</span>
                  <span className="text-[10px] text-slate-300 bg-teal-500/20 px-2 py-0.5 rounded">Align Clinic</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Main Column */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* What Is It */}
          <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-navy-900">
              What is {service.title}?
            </h2>
            {service.fullDesc.map((p, i) => (
              <p key={i} className="text-sm text-slate-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Who Needs It */}
          <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-navy-900">
              Who Needs This Treatment?
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              {service.whoNeedsIt.map((item, i) => (
                <li key={i} className="flex items-start gap-2 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Benefits */}
          <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-navy-900">
              Benefits of Getting {service.title} at Align
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((b, i) => (
                <div key={i} className="p-4 rounded-2xl bg-teal-50/50 border border-teal-100 flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-teal-600 shrink-0 mt-1" />
                  <span className="text-xs text-navy-900 font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Procedure Timeline */}
          <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 space-y-6">
            <h2 className="font-serif text-2xl font-bold text-navy-900">
              Step-by-Step Procedure Timeline
            </h2>
            <div className="space-y-4">
              {service.procedureSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-navy-900 text-teal-400 font-serif font-bold text-sm flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 text-sm">{step.title}</h3>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Get It Done at Align */}
          <div className="bg-navy-900 text-white p-8 rounded-3xl shadow-elevated space-y-4">
            <h2 className="font-serif text-2xl font-bold text-white">
              Why Get It Done at Align Dentofacial Clinic?
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every procedure is supervised by MDS Orthodontist Dr. Jyoti Chauhan and performed using digital imaging, sterile protocols, and effective local anaesthesia for pain-controlled comfort.
            </p>
          </div>

          {/* Cost Notice */}
          <div className="bg-ivory p-6 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-serif font-bold text-navy-900 text-lg">
              Treatment Cost & Estimate
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cost depends on your case complexity and specific clinical requirements. We share a clear, itemised estimate after your initial examination and digital X-ray evaluation.
            </p>
          </div>

          {/* Aftercare Tips */}
          <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 space-y-4">
            <h2 className="font-serif text-2xl font-bold text-navy-900">
              Aftercare Instructions
            </h2>
            <ul className="space-y-2 text-xs text-slate-600">
              {service.aftercare.map((tip, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Service FAQs */}
          <FAQAccordion faqs={service.faqs} title={`FAQs About ${service.title}`} />

        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-4 space-y-8">
          {/* Booking Form Card */}
          <div id="book-service-form" className="sticky top-28">
            <BookingForm defaultService={service.title} />

            {/* Related Treatments */}
            {relatedServices.length > 0 && (
              <div className="mt-8 bg-white p-6 rounded-3xl shadow-soft border border-slate-100">
                <h3 className="font-serif font-bold text-navy-900 text-base mb-4">
                  Related Treatments
                </h3>
                <div className="space-y-3">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/services/${rel.slug}`}
                      className="block p-3 rounded-xl bg-slate-50 hover:bg-teal-50 text-xs font-medium text-navy-900 hover:text-teal-700 transition-colors"
                    >
                      <div className="font-semibold">{rel.title}</div>
                      <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{rel.tagline}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
