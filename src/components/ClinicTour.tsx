"use client";

import { useState } from "react";
import { Sparkles, ShieldCheck, Play, Image as ImageIcon, Video, Eye, CheckCircle2 } from "lucide-react";
import CustomVideoPlayer from "./CustomVideoPlayer";
import MediaLightboxModal from "./MediaLightboxModal";

interface MediaItem {
  id: string;
  type: "image" | "video";
  title: string;
  category: "Video Tours" | "Waiting Lounge" | "Operatories & Care" | "Sterilization & Hygiene";
  desc: string;
  src: string;
  poster?: string;
  badge?: string;
}

const galleryMediaItems: MediaItem[] = [
  {
    id: "full-virtual-tour",
    type: "video",
    title: "Complete Virtual Tour of Align Dentofacial Clinic",
    category: "Video Tours",
    desc: "Experience our full boutique clinic in Sector 49, Noida, from entrance lounge to sterilised operatories.",
    src: "/videos/video-full-tour.mp4",
    poster: "/images/clinic-hero-bg.jpg",
    badge: "Full Tour"
  },
  {
    id: "operatory-tour-video",
    type: "video",
    title: "Operatory Room & Patient Chair Setup Walkthrough",
    category: "Video Tours",
    desc: "Take a closer look at our ergonomically designed treatment chair and calm clinical lighting.",
    src: "/videos/video-operatory-walkthrough.mp4",
    poster: "/images/clinic-chair-operatory.jpg",
    badge: "Operatory Tour"
  },
  {
    id: "reception-lounge-img",
    type: "image",
    title: "Calm Home-Style Waiting Lounge",
    category: "Waiting Lounge",
    desc: "Peaceful reception with plush leather seating, complimentary refreshments, and Invisalign display area.",
    src: "/images/clinic-reception-lounge.jpg",
    badge: "Lounge"
  },
  {
    id: "chair-demo-video",
    type: "video",
    title: "Ergonomic Dental Chair & Tech Setup",
    category: "Video Tours",
    desc: "Designed for maximum patient back comfort and low-radiation digital sensor integration.",
    src: "/videos/video-chair-demo.mp4",
    poster: "/images/operatory-chair-side.jpg",
    badge: "Tech Feature"
  },
  {
    id: "operatory-setup-img",
    type: "image",
    title: "Advanced Operatory Room Setup",
    category: "Operatories & Care",
    desc: "Spacious treatment bay dedicated to orthodontic, endodontic, and restorative dentistry.",
    src: "/images/clinic-chair-operatory.jpg",
    badge: "Operatory"
  },
  {
    id: "sterilization-protocol-video",
    type: "video",
    title: "Multi-Step Sterilisation & Hygiene Showcase",
    category: "Video Tours",
    desc: "See how every instrument undergoes rigorous autoclave sterilization and pouch sealing for total safety.",
    src: "/videos/video-sterilization-protocol.mp4",
    poster: "/images/sterilization-station.jpg",
    badge: "Safety Guarantee"
  },
  {
    id: "sterilization-room-img",
    type: "image",
    title: "Dedicated Sterilisation & Instrument Station",
    category: "Sterilization & Hygiene",
    desc: "Hospital-grade sterilisation equipment protecting every patient during visits.",
    src: "/images/sterilization-station.jpg",
    badge: "Sterilisation"
  },
  {
    id: "reception-desk-front-img",
    type: "image",
    title: "Boutique Reception Desk & Concierge",
    category: "Waiting Lounge",
    desc: "Minimal waiting times with warm front-desk assistance and quick digital check-ins.",
    src: "/images/reception-desk-front.jpg",
    badge: "Reception"
  },
  {
    id: "patient-consultation-desk-img",
    type: "image",
    title: "Private Consultation & X-Ray Review Desk",
    category: "Operatories & Care",
    desc: "Transparent discussion room for reviewing 3D aligner plans and digital X-rays with Dr. Jyoti.",
    src: "/images/patient-consultation-desk.jpg",
    badge: "Consultation"
  },
  {
    id: "operatory-chair-side-img",
    type: "image",
    title: "Precision Dental Lighting & Sensor Console",
    category: "Operatories & Care",
    desc: "Focused glare-free operating lights and digital intraoral camera console.",
    src: "/images/operatory-chair-side.jpg",
    badge: "Precision"
  }
];

export default function ClinicTour() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All Media");
  const [activeLightboxMedia, setActiveLightboxMedia] = useState<MediaItem | null>(null);

  const filterTabs = [
    "All Media",
    "Video Tours",
    "Waiting Lounge",
    "Operatories & Care",
    "Sterilization & Hygiene"
  ];

  const filteredItems = selectedFilter === "All Media"
    ? galleryMediaItems
    : galleryMediaItems.filter(item => item.category === selectedFilter);

  return (
    <div className="w-full space-y-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 border border-teal-200">
          <Sparkles className="w-3.5 h-3.5 text-teal-500" />
          Virtual Gallery & Facility Tour
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy-900 leading-tight">
          Explore Align Dentofacial Clinic
        </h2>
        <p className="text-sm md:text-base text-slate-600">
          Filter through our real video walkthroughs, calm waiting lounge photos, sterilisation station, and operatory setups near Sector 49, Noida.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex overflow-x-auto sm:flex-wrap items-center sm:justify-center gap-2 p-1.5 bg-slate-100/80 rounded-2xl max-w-4xl mx-auto border border-slate-200/80 no-scrollbar">
        {filterTabs.map((tab) => {
          const isActive = selectedFilter === tab;
          return (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                isActive
                  ? "bg-navy-900 text-white shadow-soft"
                  : "text-slate-600 hover:text-navy-900 hover:bg-white/60"
              }`}
            >
              {tab === "Video Tours" && <Video className="w-3.5 h-3.5 text-teal-400" />}
              {tab !== "Video Tours" && tab !== "All Media" && <ImageIcon className="w-3.5 h-3.5" />}
              <span>{tab}</span>
            </button>
          );
        })}
      </div>

      {/* Featured Main Video Showcase */}
      {selectedFilter === "All Media" && (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-soft border border-slate-100 max-w-6xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block">
                Featured Highlight
              </span>
              <h3 className="font-serif text-2xl font-bold text-navy-900">
                Complete Clinic Video Walkthrough
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>100% Real Unfiltered Clinic Media</span>
            </div>
          </div>

          <CustomVideoPlayer
            src="/videos/video-full-tour.mp4"
            poster="/images/clinic-hero-bg.jpg"
            title="Step Inside Align Dentofacial Clinic, Noida"
            subtitle="Explore our quiet waiting lounge, consultation desk, and sterilised operatory setup."
            badge="Featured Virtual Tour"
            className="w-full"
            onExpand={() => setActiveLightboxMedia(galleryMediaItems[0])}
          />
        </div>
      )}

      {/* Media Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-soft hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
          >
            {item.type === "video" ? (
              <CustomVideoPlayer
                src={item.src}
                poster={item.poster}
                title={item.title}
                subtitle={item.desc}
                badge={item.badge}
                aspectRatio="aspect-[4/3]"
                onExpand={() => setActiveLightboxMedia(item)}
              />
            ) : (
              <div
                className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950 cursor-pointer"
                onClick={() => setActiveLightboxMedia(item)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                
                {/* Badge */}
                {item.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-teal-500/90 text-navy-950 shadow-md backdrop-blur-md">
                    {item.badge}
                  </span>
                )}

                {/* Lightbox Icon Hover */}
                <div className="absolute top-4 right-4 p-2 rounded-xl bg-navy-900/80 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h4 className="font-serif font-bold text-base text-white leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeLightboxMedia && (
        <MediaLightboxModal
          isOpen={!!activeLightboxMedia}
          onClose={() => setActiveLightboxMedia(null)}
          type={activeLightboxMedia.type}
          src={activeLightboxMedia.src}
          title={activeLightboxMedia.title}
          description={activeLightboxMedia.desc}
          category={activeLightboxMedia.category}
        />
      )}
    </div>
  );
}
