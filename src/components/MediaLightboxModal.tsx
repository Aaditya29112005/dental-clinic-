"use client";

import { useEffect } from "react";
import { X, Sparkles } from "lucide-react";

interface MediaLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "image" | "video";
  src: string;
  title?: string;
  description?: string;
  category?: string;
}

export default function MediaLightboxModal({
  isOpen,
  onClose,
  type,
  src,
  title,
  description,
  category,
}: MediaLightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-navy-900 rounded-3xl overflow-hidden shadow-2xl border border-teal-500/30 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-navy-950/60">
          <div className="flex items-center gap-2">
            {category && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-400 uppercase tracking-widest bg-teal-500/10 px-2.5 py-1 rounded-full border border-teal-500/20">
                <Sparkles className="w-3 h-3" />
                {category}
              </span>
            )}
            <h3 className="font-serif font-bold text-white text-lg line-clamp-1">
              {title || "Align Dentofacial Clinic Media"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 hover:bg-teal-500 hover:text-navy-950 text-slate-300 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Container */}
        <div className="flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] max-h-[70vh]">
          {type === "video" ? (
            <video
              src={src}
              controls
              autoPlay
              className="w-full h-full max-h-[70vh] object-contain"
            />
          ) : (
            <img
              src={src}
              alt={title || "Align Clinic Gallery Image"}
              className="w-full h-full max-h-[70vh] object-contain"
            />
          )}
        </div>

        {/* Caption Bar */}
        {description && (
          <div className="px-6 py-4 bg-navy-950 text-slate-300 text-xs md:text-sm border-t border-slate-800 leading-relaxed">
            <p className="max-w-3xl">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
