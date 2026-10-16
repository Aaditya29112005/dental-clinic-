"use client";

import { useState, useRef, useEffect } from "react";
import { Instagram, Heart, MessageCircle, ExternalLink, Film, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { clinicConfig } from "@/data/clinicData";

interface InstaPost {
  id: string;
  image: string;
  videoSrc?: string;
  isVideo?: boolean;
  caption: string;
  category: string;
  likes: number;
}

const instaPosts: InstaPost[] = [
  {
    id: "post-invisalign-masterclass",
    image: "/images/invisalign-training-dr-jignesh-kothari.jpg",
    caption: "Honored to participate in the Invisalign® Masterclass by Dr. Jignesh Kothari (Black Diamond Provider & Global Orthodontic KOL). Applying advanced 3D aligner planning for smile excellence in Noida!",
    category: "Invisalign® Masterclass",
    likes: 248
  },
  {
    id: "post1",
    image: "/images/clear-aligners-noida.jpg",
    caption: "Custom braces & clear aligners delivered with precision by specialist MDS Orthodontist in Noida.",
    category: "Orthodontics",
    likes: 124
  },
  {
    id: "post2",
    image: "/images/clinic-reception-lounge.jpg",
    caption: "Step inside our calm boutique waiting lounge near Sector 49, Noida. Designed for zero-stress patient comfort.",
    category: "Clinic Tour",
    likes: 98
  },
  {
    id: "post3",
    image: "/images/clinic-chair-operatory.jpg",
    caption: "Advanced sterilised operatory equipped with modern ergonomic dental chair & ultra-low radiation digital sensor X-rays.",
    category: "Technology",
    likes: 142
  },
  {
    id: "post4",
    image: "/images/invisalign-provider-lounge.png",
    caption: "Invisalign® Clear Aligners - virtually invisible smile alignment planned with precision 3D digital scans.",
    category: "Invisalign® Care",
    likes: 186
  },
  {
    id: "post5",
    image: "/images/sterilization-station.jpg",
    caption: "Multi-stage instrument sterilisation protocol keeping every dental visit completely safe and hygienic.",
    category: "Safety First",
    likes: 110
  },
  {
    id: "post6",
    image: "/images/poster-align-clinic-walkthrough.jpg",
    videoSrc: "/videos/align-clinic-walkthrough-tour.mp4",
    isVideo: true,
    caption: "Step inside Align Dentofacial Clinic! Watch our complete video walkthrough of our reception, operatory & sterilization setup in Noida.",
    category: "Clinic Tour Reel",
    likes: 382
  }
];

function ReelPlayer({ src, poster }: { src: string; poster: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative h-64 w-full overflow-hidden bg-slate-950 group/reel">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop
        muted={isMuted}
        playsInline
        autoPlay
        onClick={togglePlay}
        className="w-full h-full object-cover cursor-pointer"
      />

      {/* Reel Badge */}
      <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-[10px] font-bold flex items-center gap-1.5 z-10 shadow-md pointer-events-none">
        <Film className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
        <span>Reel</span>
      </div>

      {/* Play/Pause Center Indicator when paused */}
      {!isPlaying && (
        <div
          onClick={togglePlay}
          className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer z-10"
        >
          <div className="w-12 h-12 rounded-full bg-pink-600/90 text-white flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
            <Play className="w-6 h-6 fill-white ml-0.5" />
          </div>
        </div>
      )}

      {/* Controls Bar */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-auto">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause reel" : "Play reel"}
          className="w-7 h-7 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/90 transition-all shadow-md"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
        </button>

        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute reel" : "Mute reel"}
          className="w-7 h-7 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/90 transition-all shadow-md"
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-teal-300" />}
        </button>
      </div>
    </div>
  );
}

export default function InstagramFeed() {
  return (
    <div className="w-full">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-pink-500/20 px-3.5 py-1.5 rounded-full text-pink-600 text-xs font-semibold mb-3">
          <Instagram className="w-3.5 h-3.5 text-pink-500" />
          <span>Follow Us On Instagram</span>
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900">
          @align_dentofacial_clinic_noida
        </h2>
        <p className="text-sm text-slate-600 mt-2">
          Daily smile transformations, doctor insights, and boutique clinic updates.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {instaPosts.map((post) => (
          <div
            key={post.id}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-soft border border-slate-100 hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
          >
            {/* Media Container */}
            {post.isVideo && post.videoSrc ? (
              <ReelPlayer src={post.videoSrc} poster={post.image} />
            ) : (
              <a
                href={clinicConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-64 w-full overflow-hidden bg-slate-900 block"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover object-[center_15%] group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-navy-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white">
                  <div className="flex items-center gap-1.5 font-semibold text-sm">
                    <Heart className="w-5 h-5 fill-white text-white" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-semibold text-sm">
                    <MessageCircle className="w-5 h-5 fill-white text-white" />
                    <span>Comment</span>
                  </div>
                </div>
              </a>
            )}

            {/* Post Content Footer */}
            <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border flex items-center gap-1 ${
                    post.isVideo 
                      ? "text-pink-700 bg-pink-50 border-pink-200" 
                      : "text-teal-600 bg-teal-50 border-teal-200"
                  }`}>
                    {post.isVideo && <Film className="w-3 h-3 text-pink-500" />}
                    <span>{post.category}</span>
                  </span>
                  {post.isVideo && (
                    <span className="text-[10px] font-semibold text-pink-600 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-ping inline-block"></span>
                      Reel
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-700 line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>
              </div>

              <a
                href={clinicConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-[11px] text-pink-600 font-semibold pt-2 border-t border-slate-100 hover:text-pink-700 transition-colors"
              >
                <span>{post.isVideo ? "Watch on Instagram" : "View on Instagram"}</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Direct CTA */}
      <div className="text-center mt-10">
        <a
          href={clinicConfig.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:from-purple-700 hover:to-rose-600 text-white font-semibold text-xs shadow-md hover:shadow-lg transition-all"
        >
          <Instagram className="w-4 h-4" />
          <span>Follow @align_dentofacial_clinic_noida</span>
        </a>
      </div>
    </div>
  );
}
