"use client";

import { Instagram, Heart, MessageCircle, ExternalLink, Sparkles } from "lucide-react";
import { clinicConfig } from "@/data/clinicData";

interface InstaPost {
  id: string;
  image: string;
  caption: string;
  category: string;
  likes: number;
}

const instaPosts: InstaPost[] = [
  {
    id: "post1",
    image: "/images/dr-jyoti-chauhan.png",
    caption: "Dr. Jyoti Chauhan (MDS Orthodontics) delivering custom braces & clear aligners for confident smiles in Noida.",
    category: "Lead Orthodontist",
    likes: 124
  },
  {
    id: "post2",
    image: "/images/waiting-lounge.jpg",
    caption: "Step inside our calm boutique waiting lounge near Sector 49, Noida. Designed for zero-stress patient comfort.",
    category: "Clinic Tour",
    likes: 98
  },
  {
    id: "post3",
    image: "/images/dental-chair.jpg",
    caption: "Advanced sterilised operatory equipped with modern ergonomic dental chair & ultra-low radiation digital sensor X-rays.",
    category: "Technology",
    likes: 142
  },
  {
    id: "post4",
    image: "/images/waiting-lounge.jpg",
    caption: "Invisalign® Clear Aligners - virtually invisible smile alignment planned with precision 3D digital scans.",
    category: "Invisalign® Care",
    likes: 186
  },
  {
    id: "post5",
    image: "/images/dr-jyoti-chauhan.png",
    caption: "Root Canal Treatment doesn't have to be painful! Modern endodontics under effective local anaesthesia keeps you comfortable.",
    category: "Doctor Tips",
    likes: 110
  },
  {
    id: "post6",
    image: "/images/dental-chair.jpg",
    caption: "700+ Happy Patients treated with transparent care & ethical treatment planning at Align Dentofacial Clinic.",
    category: "Milestone",
    likes: 215
  }
];

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
          <a
            key={post.id}
            href={clinicConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-3xl overflow-hidden shadow-soft border border-slate-100 hover:shadow-elevated transition-all duration-300 block"
          >
            {/* Image Container */}
            <div className="relative h-64 w-full overflow-hidden bg-slate-900">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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

              {/* Tag Badge */}
              <div className="absolute top-3 left-3 bg-navy-900/80 backdrop-blur-md text-teal-300 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-teal-500/30">
                {post.category}
              </div>
            </div>

            {/* Post Content Footer */}
            <div className="p-4 space-y-2">
              <p className="text-xs text-slate-700 line-clamp-2 leading-relaxed">
                {post.caption}
              </p>
              <div className="flex items-center justify-between text-[11px] text-pink-600 font-semibold pt-2 border-t border-slate-100">
                <span>View on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </a>
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
