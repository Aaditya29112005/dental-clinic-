"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import {
  Sparkles,
  ShieldCheck,
  Play,
  Image as ImageIcon,
  Video,
  Eye,
  CheckCircle2,
  Filter,
  Compass,
  Award,
  HeartHandshake
} from "lucide-react";
import CustomVideoPlayer from "./CustomVideoPlayer";
import MediaLightboxModal from "./MediaLightboxModal";

export type MediaCategory =
  | "Clinic Tours & Facilities"
  | "Treatments & Results"
  | "Patient Stories & Reviews";

export interface MediaItem {
  id: string;
  type: "image" | "video";
  title: string;
  category: MediaCategory;
  desc: string;
  src: string;
  poster?: string;
  tag?: string;
}

const galleryMediaItems: MediaItem[] = [
  // --- Clinic Tours & Facilities ---
  {
    id: "clinic-operatory-walkthrough-vid",
    type: "video",
    title: "Complete Operatory Bay Walkthrough",
    category: "Clinic Tours & Facilities",
    desc: "Virtual video walkthrough of our modern dental chair, instrument console, and operatory bay in Noida.",
    src: "/videos/clinic-tour-walkthrough-1.mp4",
    poster: "/images/poster-operatory-walkthrough.jpg",
    tag: "Operatory Tour"
  },
  {
    id: "clinic-sterilization-video",
    type: "video",
    title: "Hospital-Grade Autoclave & Sterilization Bay",
    category: "Clinic Tours & Facilities",
    desc: "Hospital-grade autoclave sterilisation unit, ultrasonic cleaner, and strictly sealed instrument pouches.",
    src: "/videos/clinic-sterilization-station.mp4",
    poster: "/images/poster-sterilization-station.jpg",
    tag: "Sterilization"
  },
  {
    id: "clinic-facade-img",
    type: "image",
    title: "Clinic Entrance & Welcome Glass Facade",
    category: "Clinic Tours & Facilities",
    desc: "Modern boutique facade and welcoming glass entrance at Pillar 44, Dadri Main Road, near Sector 49, Noida.",
    src: "/images/dr-jyoti-consultation.jpg",
    tag: "Entrance"
  },
  {
    id: "clinic-lounge-img",
    type: "image",
    title: "Patient Waiting Lounge & Reception",
    category: "Clinic Tours & Facilities",
    desc: "Calm, comfortable waiting lounge with plush leather seating, air conditioning, and Invisalign showcase.",
    src: "/images/waiting-lounge.jpg",
    tag: "Lounge"
  },
  {
    id: "clinic-reception-desk-img",
    type: "image",
    title: "Front Reception & Consultation Helpdesk",
    category: "Clinic Tours & Facilities",
    desc: "Welcoming reception counter with verified doctor certificates, patient guidance, and digital check-ins.",
    src: "/images/clinic-tour-reception-1.jpg",
    tag: "Reception"
  },
  {
    id: "doctor-consultation-cabin-img",
    type: "image",
    title: "Doctor Consultation Office & Cabin",
    category: "Clinic Tours & Facilities",
    desc: "Dr. Jyoti Chauhan's private consultation office for in-depth smile discussions and digital records.",
    src: "/images/clinic-tour-operatory-1.jpg",
    tag: "Doctor Desk"
  },
  {
    id: "advanced-treatment-chair-img",
    type: "image",
    title: "Advanced Dental Treatment Chair",
    category: "Clinic Tours & Facilities",
    desc: "Ergonomic treatment chair with shadowless LED operating light, digital sensors, and patient headrest.",
    src: "/images/clinic-chair-operatory.jpg",
    tag: "Treatment Chair"
  },
  {
    id: "sterilised-operatory-suite-img",
    type: "image",
    title: "Sterilised Treatment Operatory Suite",
    category: "Clinic Tours & Facilities",
    desc: "Spacious treatment bay dedicated to orthodontic, endodontic, and cosmetic dental procedures.",
    src: "/images/consultation-desk-view.jpg",
    tag: "Operatory Suite"
  },

  // --- Treatments & Results ---
  {
    id: "full-smile-restoration-reel",
    type: "video",
    title: "Full Mouth Smile Restoration (Before & After)",
    category: "Treatments & Results",
    desc: "Comprehensive smile rehabilitation journey transforming dental aesthetics and chew function.",
    src: "/videos/video-waiting-lounge-tour.mp4",
    poster: "/images/poster-smile-restoration.jpg",
    tag: "Smile Makeover"
  },
  {
    id: "cervical-enamel-restoration-img",
    type: "image",
    title: "Cervical Abrasion Enamel Restoration",
    category: "Treatments & Results",
    desc: "High-precision composite restoration repairing cervical enamel wear and eliminating tooth sensitivity.",
    src: "/images/patient-consultation-desk.jpg",
    tag: "Clinical Case"
  },
  {
    id: "pediatric-treatment-operatory-vid",
    type: "video",
    title: "Gentle Pediatric Dental Procedure",
    category: "Treatments & Results",
    desc: "Dr. Jyoti Chauhan performing calm, reassuring dental check-up and treatment for young children.",
    src: "/videos/video-ortho-demo.mp4",
    poster: "/images/poster-pediatric-procedure.jpg",
    tag: "Pediatric Care"
  },
  {
    id: "wisdom-tooth-extraction-vid",
    type: "video",
    title: "Painless Wisdom Tooth Removal",
    category: "Treatments & Results",
    desc: "Specialist minor surgical care ensuring painless wisdom tooth extraction and fast recovery.",
    src: "/videos/video-quick-feature.mp4",
    poster: "/images/poster-wisdom-tooth.jpg",
    tag: "Oral Surgery"
  },
  {
    id: "cavity-decay-restoration-img",
    type: "image",
    title: "Tooth Decay & Enamel Repair (Before & After)",
    category: "Treatments & Results",
    desc: "Clinical before and after photographs of tooth decay removal and aesthetic composite restoration.",
    src: "/images/doctor-patient-interaction.jpg",
    tag: "Tooth Restoration"
  },
  {
    id: "happy-smiles-pulpectomy-vid",
    type: "video",
    title: "Happy Child Smile After Pulpectomy",
    category: "Treatments & Results",
    desc: "Comfortable and stress-free pulpectomy procedure with a delighted young patient and Dr. Jyoti.",
    src: "/videos/video-chair-demo.mp4",
    poster: "/images/poster-pulpectomy-child.jpg",
    tag: "Pulpectomy"
  },
  {
    id: "clinical-intraoral-treatment-vid",
    type: "video",
    title: "Clinical Intraoral Tooth Treatment",
    category: "Treatments & Results",
    desc: "Precision dental procedure conducted with digital intraoral magnification and careful technique.",
    src: "/videos/video-sterilization-protocol.mp4",
    poster: "/images/poster-sterilization.jpg",
    tag: "Intraoral Care"
  },

  // --- Patient Stories & Reviews ---
  {
    id: "saurav-gurjar-review-vid",
    type: "video",
    title: "Patient Review: Painless Root Canal Treatment",
    category: "Patient Stories & Reviews",
    desc: "Verified patient Saurav Gurjar shares his positive review of painless root canal and tooth relief.",
    src: "/videos/video-doctor-consultation.mp4",
    poster: "/images/poster-saurav-review.jpg",
    tag: "Patient Review"
  },
  {
    id: "nisha-srivastava-review-vid",
    type: "video",
    title: "Patient Testimonial: Reassuring & Painless Care",
    category: "Patient Stories & Reviews",
    desc: "Nisha Srivastava reflects on Dr. Jyoti's gentle, clear explanations and painless treatment.",
    src: "/videos/video-patient-experience.mp4",
    poster: "/images/poster-nisha-review.jpg",
    tag: "Patient Testimonial"
  },
  {
    id: "family-patient-review-vid",
    type: "video",
    title: "Family Dental Experience at Align Clinic",
    category: "Patient Stories & Reviews",
    desc: "Mother and daughter share their positive experience with friendly, personalized dental care in Noida.",
    src: "/videos/video-doctor-explaining.mp4",
    poster: "/images/poster-family-review.jpg",
    tag: "Family Review"
  },
  {
    id: "patient-story-lounge-vid",
    type: "video",
    title: "Patient Story: Zero-Stress Dental Experience",
    category: "Patient Stories & Reviews",
    desc: "Patient sharing feedback in the reception lounge about treatment comfort, hospitality, and results.",
    src: "/videos/video-full-tour.mp4",
    poster: "/images/poster-patient-story.jpg",
    tag: "Patient Story"
  },
  {
    id: "patient-review-operatory-vid",
    type: "video",
    title: "Patient Review: Gentle Treatment in Operatory",
    category: "Patient Stories & Reviews",
    desc: "Patient review recorded directly in the treatment chair following successful, stress-free dental care.",
    src: "/videos/video-operatory-walkthrough.mp4",
    poster: "/images/poster-operatory-tour.jpg",
    tag: "Chairside Review"
  },
  {
    id: "pediatric-happy-thumbsup-img",
    type: "image",
    title: "Dr. Jyoti Chauhan with Smiling Pediatric Patient",
    category: "Patient Stories & Reviews",
    desc: "Two thumbs up from a cheerful child patient following gentle, child-friendly dental care.",
    src: "/images/sterilization-station.jpg",
    tag: "Happy Child"
  },
  {
    id: "child-smile-celebration-img",
    type: "image",
    title: "Confident Smile Celebration at Align Clinic",
    category: "Patient Stories & Reviews",
    desc: "Young patient proudly showing off a healthy, bright smile at the clinic celebration wall.",
    src: "/images/operatory-chair-side.jpg",
    tag: "Smile Celebration"
  },
  {
    id: "aadhya-pediatric-review-img",
    type: "image",
    title: "Pediatric Care Story: 3-Year-Old Aadhya",
    category: "Patient Stories & Reviews",
    desc: "Parent review highlighting patient, caring treatment for a 3-year-old child by Dr. Jyoti Chauhan.",
    src: "/images/clinic-hero-bg.jpg",
    tag: "5-Star Story"
  },
  {
    id: "navneet-sharma-review-img",
    type: "image",
    title: "Verified 5-Star Experience: Navneet Sharma",
    category: "Patient Stories & Reviews",
    desc: "5-star Google review commending clinical cleanliness, transparency, and modern setup.",
    src: "/images/patient-review-navneet.jpg",
    tag: "Google Review"
  }
];

export default function ClinicTour() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All Media");
  const [mediaTypeFilter, setMediaTypeFilter] = useState<"all" | "video" | "image">("all");
  const [activeLightboxMedia, setActiveLightboxMedia] = useState<MediaItem | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);

  const filterTabs = [
    { label: "All Media", count: galleryMediaItems.length },
    {
      label: "Clinic Tours & Facilities",
      count: galleryMediaItems.filter((i) => i.category === "Clinic Tours & Facilities").length
    },
    {
      label: "Treatments & Results",
      count: galleryMediaItems.filter((i) => i.category === "Treatments & Results").length
    },
    {
      label: "Patient Stories & Reviews",
      count: galleryMediaItems.filter((i) => i.category === "Patient Stories & Reviews").length
    }
  ];

  // Filter items
  const filteredItems = galleryMediaItems.filter((item) => {
    const matchesCategory = selectedFilter === "All Media" || item.category === selectedFilter;
    const matchesType = mediaTypeFilter === "all" || item.type === mediaTypeFilter;
    return matchesCategory && matchesType;
  });

  // Initial GSAP Reveal Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"
          }
        );
      }

      // Featured Video Reveal
      if (featuredRef.current) {
        gsap.fromTo(
          featuredRef.current,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            delay: 0.3,
            ease: "power3.out"
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // GSAP Grid Stagger Animation on Filter Change
  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".gallery-card");
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 35, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power3.out"
        }
      );
    }
  }, [selectedFilter, mediaTypeFilter]);

  // Interactive 3D tilt effect on card hover
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotX = -(y / (rect.height / 2)) * 6;
    const rotY = (x / (rect.width / 2)) * 6;

    gsap.to(card, {
      rotateX: rotX,
      rotateY: rotY,
      transformPerspective: 1000,
      duration: 0.25,
      ease: "power2.out"
    });
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.45,
      ease: "power2.out"
    });
  };

  return (
    <div ref={containerRef} className="w-full space-y-12">
      {/* Section Header */}
      <div ref={headerRef} className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 border border-teal-200/80 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-teal-600 animate-pulse" />
          Verified Gallery & Clinic Experience
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy-900 leading-tight">
          Explore Align Dentofacial Clinic
        </h2>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Authentic, unfiltered media from our boutique orthodontic & dental facility near Sector 49, Noida.
          Experience our operatory suites, hospital-grade sterilization bay, clinical transformations, and genuine patient testimonials.
        </p>

        {/* Trust Chips Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
            <span>100% Real Unfiltered Clinic Media</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>Certified Sterilisation Protocol</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200">
            <HeartHandshake className="w-3.5 h-3.5 text-teal-600" />
            <span>Real Patient Video Stories</span>
          </div>
        </div>
      </div>

      {/* Filter Category Tabs & Format Switcher */}
      <div className="space-y-4 max-w-5xl mx-auto">
        {/* Main Category Tabs */}
        <div className="flex overflow-x-auto sm:flex-wrap items-center sm:justify-center gap-2 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200/80 shadow-sm no-scrollbar">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.label;
            return (
              <button
                key={tab.label}
                onClick={() => setSelectedFilter(tab.label)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-navy-900 text-white shadow-soft scale-[1.02]"
                    : "text-slate-600 hover:text-navy-900 hover:bg-white/80"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive ? "bg-teal-500/20 text-teal-300" : "bg-slate-200/80 text-slate-600"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Media Format Filter (All / Videos / Photos) */}
        <div className="flex items-center justify-center gap-2 text-xs">
          <span className="text-slate-400 font-medium mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Format:
          </span>
          <button
            onClick={() => setMediaTypeFilter("all")}
            className={`px-3 py-1 rounded-lg font-medium transition-colors ${
              mediaTypeFilter === "all"
                ? "bg-teal-600 text-white shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            All Formats
          </button>
          <button
            onClick={() => setMediaTypeFilter("video")}
            className={`px-3 py-1 rounded-lg font-medium flex items-center gap-1 transition-colors ${
              mediaTypeFilter === "video"
                ? "bg-teal-600 text-white shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <Video className="w-3.5 h-3.5" /> Videos Only
          </button>
          <button
            onClick={() => setMediaTypeFilter("image")}
            className={`px-3 py-1 rounded-lg font-medium flex items-center gap-1 transition-colors ${
              mediaTypeFilter === "image"
                ? "bg-teal-600 text-white shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" /> Photos Only
          </button>
        </div>
      </div>

      {/* Featured Main Video Showcase (Shown on All Media or Clinic Tours) */}
      {(selectedFilter === "All Media" || selectedFilter === "Clinic Tours & Facilities") &&
        mediaTypeFilter !== "image" && (
          <div
            ref={featuredRef}
            className="relative bg-gradient-to-b from-navy-900 to-navy-950 rounded-3xl p-6 md:p-8 shadow-elevated border border-navy-800/80 max-w-6xl mx-auto space-y-4 text-white overflow-hidden group"
          >
            {/* Subtle Ambient Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4 relative z-10">
              <div className="space-y-1">
                <span className="text-xs font-bold text-teal-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-teal-400" />
                  Featured Virtual Walkthrough
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">
                  Complete Boutique Operatory & Infrastructure Walkthrough
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>Sector 49, Dadri Main Road, Noida</span>
              </div>
            </div>

            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <CustomVideoPlayer
                src="/videos/clinic-tour-walkthrough-1.mp4"
                poster="/images/poster-operatory-walkthrough.jpg"
                title="Complete Operatory Bay Walkthrough"
                className="w-full"
                onExpand={() => setActiveLightboxMedia(galleryMediaItems[0])}
              />
            </div>
          </div>
        )}

      {/* Media Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            className="gallery-card bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-soft hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between group transform-gpu will-change-transform"
          >
            {item.type === "video" ? (
              <div className="relative">
                <CustomVideoPlayer
                  src={item.src}
                  poster={item.poster}
                  title={item.title}
                  aspectRatio="aspect-[4/3]"
                  onExpand={() => setActiveLightboxMedia(item)}
                />
              </div>
            ) : (
              <div
                className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950 cursor-pointer"
                onClick={() => setActiveLightboxMedia(item)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                {/* Lightbox Expand Icon on Hover */}
                <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-navy-900/80 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md shadow-md scale-95 group-hover:scale-100">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h4 className="font-serif font-bold text-base md:text-lg text-white leading-snug drop-shadow-sm">
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
