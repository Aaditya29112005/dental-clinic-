"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
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
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);

      // GSAP Entrance
      if (overlayRef.current && modalRef.current) {
        gsap.fromTo(
          overlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: "power2.out" }
        );
        gsap.fromTo(
          modalRef.current,
          { opacity: 0, scale: 0.92, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out(1.2)" }
        );
      }
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
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="relative max-w-5xl w-full bg-navy-900 rounded-3xl overflow-hidden shadow-2xl border border-teal-500/30 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-navy-950/80">
          <div className="flex items-center gap-2">
            <h3 className="font-serif font-bold text-white text-lg line-clamp-1">
              {title || "Align Dentofacial Clinic Media"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 min-w-[44px] min-h-[44px] rounded-full bg-slate-800/80 hover:bg-teal-500 hover:text-navy-950 text-slate-300 transition-colors flex items-center justify-center focus:outline-none"
            aria-label="Close modal"
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
