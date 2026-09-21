import { Metadata } from "next";
import Link from "next/link";
import ClinicTour from "@/components/ClinicTour";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Clinic Tour & Gallery | Align Dentofacial Clinic Noida",
  description: "Explore photos of our calm home-style waiting lounge, private consultation room, operatory, and dedicated sterilisation setup near Sector 49, Noida.",
  alternates: {
    canonical: "https://aligndentofacial.in/gallery",
  },
};

export default function GalleryPage() {
  return (
    <div className="w-full space-y-16 pb-16">
      <section className="bg-navy-950 text-white pt-8 pb-16 rounded-b-[36px]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-teal-400">Home</Link>
            <span>/</span>
            <span className="text-teal-300 font-semibold">Gallery</span>
          </div>

          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-2">
            Inside Align Clinic
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Clinic Tour & Facility Gallery
          </h1>
          <p className="text-sm text-slate-300 mt-2 max-w-xl mx-auto">
            Take a virtual tour of our modern, sterilised, boutique dental facility in Noida.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 space-y-16">
        <ClinicTour />

        <div className="max-w-2xl mx-auto">
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
