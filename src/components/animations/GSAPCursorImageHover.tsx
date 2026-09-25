"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

interface HoverItem {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  link?: string;
  badge?: string;
}

interface GSAPCursorImageHoverProps {
  items: HoverItem[];
  className?: string;
}

export default function GSAPCursorImageHover({ items, className = "" }: GSAPCursorImageHoverProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [activeImage, setActiveImage] = useState<string>("");
  const [isHovering, setIsHovering] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined" || !imageRef.current) return;

    // Set initial transform origin for smooth centering
    gsap.set(imageRef.current, { xPercent: -50, yPercent: -50, scale: 0.8, opacity: 0 });

    const setX = gsap.quickTo(imageRef.current, "x", { duration: 0.4, ease: "power3" });
    const setY = gsap.quickTo(imageRef.current, "y", { duration: 0.4, ease: "power3" });

    let firstEnter = true;

    const handleMouseMove = (e: MouseEvent) => {
      if (firstEnter) {
        setX(e.clientX);
        setY(e.clientY);
        firstEnter = false;
      } else {
        setX(e.clientX);
        setY(e.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseEnterItem = (imgSrc: string) => {
    setActiveImage(imgSrc);
    setIsHovering(true);
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  };

  const handleMouseLeaveItem = () => {
    setIsHovering(false);
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        overwrite: "auto",
      });
    }
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Floating Cursor Image (Desktop only overlay) */}
      <img
        ref={imageRef}
        src={activeImage || items[0]?.image}
        alt="Preview"
        className={`hidden md:block fixed top-0 left-0 w-64 h-44 object-cover rounded-2xl shadow-2xl border-2 border-teal-400/30 z-50 pointer-events-none transition-opacity duration-300 ${
          isHovering ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ willChange: "transform" }}
      />

      {/* List Items */}
      <div className="divide-y divide-slate-100 border-t border-b border-slate-100">
        {items.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => handleMouseEnterItem(item.image)}
            onMouseLeave={handleMouseLeaveItem}
            className="group py-5 md:py-6 px-3 md:px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 hover:bg-teal-50/50 rounded-xl cursor-pointer"
          >
            <div className="flex items-start md:items-center gap-3 space-y-1">
              {/* Mobile Inline Thumbnail */}
              <img
                src={item.image}
                alt={item.title}
                className="md:hidden w-16 h-16 rounded-xl object-cover shrink-0 border border-slate-200"
              />
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold text-slate-800 group-hover:text-teal-700 transition-colors">
                    {item.title}
                  </h4>
                  {item.badge && (
                    <span className="text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 font-medium">
                      {item.badge}
                    </span>
                  )}
                </div>
                {item.subtitle && (
                  <p className="text-xs sm:text-sm text-slate-500 font-sans mt-0.5">{item.subtitle}</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 text-teal-600 font-semibold text-xs sm:text-sm md:opacity-0 group-hover:opacity-100 transform md:translate-x-2 group-hover:translate-x-0 transition-all duration-300 shrink-0 self-end sm:self-auto">
              <span>View Treatment</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
