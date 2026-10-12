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
    id: "real-clinic-walkthrough-video",
    type: "video",
    title: "Clinic Operatory & Bay Walkthrough",
    category: "Video Tours",
    desc: "Walkthrough of our modern dental operatory bay and treatment setup.",
    src: "/videos/clinic-tour-walkthrough-1.mp4",
    poster: "/images/poster-walkthrough.jpg",
    badge: "Virtual Tour"
  },
  {
    id: "real-clinic-lounge-video",
    type: "video",
    title: "Reception & Waiting Lounge Tour",
    category: "Video Tours",
    desc: "Tour of our peaceful waiting lounge and consultation area.",
    src: "/videos/clinic-tour-lounge-1.mp4",
    poster: "/images/poster-walkthrough.jpg",
    badge: "Lounge Ambience"
  },
  {
    id: "real-reception-img",
    type: "image",
    title: "Reception & Consultation Desk",
    category: "Waiting Lounge",
    desc: "Front desk and consultation area with doctor qualifications and patient guidance.",
    src: "/images/clinic-tour-reception-1.jpg",
    badge: "Reception"
  },
  {
    id: "real-operatory-img",
    type: "image",
    title: "Sterilised Treatment Operatory",
    category: "Operatories & Care",
    desc: "Hygienic operatory bay equipped with ergonomic dental chair and digital sensors.",
    src: "/images/clinic-tour-operatory-1.jpg",
    badge: "Operatory"
  },
  {
    id: "clinic-entrance-img",
    type: "image",
    title: "Clinic Entrance & Welcome Lounge",
    category: "Waiting Lounge",
    desc: "Boutique entrance welcoming patients to Align Dentofacial Clinic.",
    src: "/images/clinic-reception-lounge.jpg",
    badge: "Entrance"
  },
  {
    id: "full-virtual-tour",
    type: "video",
    title: "Full Clinic Walkthrough Tour",
    category: "Video Tours",
    desc: "Complete walkthrough of the reception, operatory, and clinic facilities.",
    src: "/videos/video-full-tour.mp4",
    poster: "/images/poster-full-tour.jpg",
    badge: "Full Tour"
  },
  {
    id: "operatory-tour-video",
    type: "video",
    title: "Operatory Room Setup Tour",
    category: "Video Tours",
    desc: "Detailed look at our operatory lighting, treatment chair, and diagnostic tools.",
    src: "/videos/video-operatory-walkthrough.mp4",
    poster: "/images/poster-operatory-tour.jpg",
    badge: "Operatory Tour"
  },
  {
    id: "chair-demo-video",
    type: "video",
    title: "Ergonomic Dental Chair Demo",
    category: "Video Tours",
    desc: "Demonstration of our modern dental chair for comfortable patient positioning.",
    src: "/videos/video-chair-demo.mp4",
    poster: "/images/poster-chair-demo.jpg",
    badge: "Chair Demo"
  },
  {
    id: "operatory-setup-img",
    type: "image",
    title: "Ergonomic Dental Treatment Chair",
    category: "Operatories & Care",
    desc: "Advanced treatment chair designed for gentle, strain-free patient visits.",
    src: "/images/clinic-chair-operatory.jpg",
    badge: "Treatment Chair"
  },
  {
    id: "sterilization-protocol-video",
    type: "video",
    title: "Hygiene & Sterilisation Protocols",
    category: "Video Tours",
    desc: "Overview of autoclave sterilisation and clinical cleanliness protocols.",
    src: "/videos/video-sterilization-protocol.mp4",
    poster: "/images/poster-sterilization.jpg",
    badge: "Sterilisation"
  },
  {
    id: "patient-consultation-desk-img",
    type: "image",
    title: "Cervical Enamel Loss Restoration (Before & After)",
    category: "Operatories & Care",
    desc: "Clinical result showing aesthetic restoration for cervical abrasion.",
    src: "/images/patient-consultation-desk.jpg",
    badge: "Clinical Case"
  },
  {
    id: "pediatric-care-img",
    type: "image",
    title: "Dr. Jyoti Chauhan with Pediatric Patient",
    category: "Operatories & Care",
    desc: "Gentle and compassionate pediatric dental check-up experience.",
    src: "/images/sterilization-station.jpg",
    badge: "Pediatric Care"
  },
  {
    id: "reception-desk-front-img",
    type: "image",
    title: "Comfortable Dental Consultation",
    category: "Operatories & Care",
    desc: "Patient consultation and examination in a reassuring, friendly environment.",
    src: "/images/reception-desk-front.jpg",
    badge: "Consultation"
  },
  {
    id: "operatory-chair-side-img",
    type: "image",
    title: "Smiling Patient with Dental Mirror",
    category: "Waiting Lounge",
    desc: "Young patient enjoying a fun and friendly visit at the clinic.",
    src: "/images/operatory-chair-side.jpg",
    badge: "Patient Smile"
  },
  {
    id: "clinic-review-story-img",
    type: "image",
    title: "Verified 5-Star Pediatric Review",
    category: "Waiting Lounge",
    desc: "Real patient feedback highlighting patient and stress-free care for kids.",
    src: "/images/clinic-hero-bg.jpg",
    badge: "Patient Review"
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
            src="/videos/clinic-tour-walkthrough-1.mp4"
            poster="/images/poster-walkthrough.jpg"
            title="Complete Clinic Video Walkthrough"
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
                  <h4 className="font-serif font-bold text-base text-white leading-snug drop-shadow-sm">
                    {item.title}
                  </h4>
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
