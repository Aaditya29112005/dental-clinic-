"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

interface ComparisonCase {
  title: string;
  category: string;
  duration: string;
  beforeImg: string;
  afterImg: string;
}

const cases: ComparisonCase[] = [
  {
    title: "Crooked Teeth to Straight Smile",
    category: "Clear Aligners",
    duration: "10 months",
    beforeImg: "/images/real-before-crooked.jpg",
    afterImg: "/images/real-after-straight.jpg"
  },
  {
    title: "Deep Overbite Correction",
    category: "Orthodontic Braces",
    duration: "14 months",
    beforeImg: "/images/real-before-overbite.jpg",
    afterImg: "/images/real-after-overbite.jpg"
  },
  {
    title: "Front Tooth Gap Closure",
    category: "Clear Aligners",
    duration: "6 months",
    beforeImg: "/images/real-before-gap.jpg",
    afterImg: "/images/real-after-gap.jpg"
  }
];

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState<number[]>(cases.map(() => 50));

  const handleSliderChange = (index: number, val: number) => {
    const updated = [...sliderPos];
    updated[index] = val;
    setSliderPos(updated);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cases.map((c, i) => (
        <div key={i} className="bg-white rounded-3xl p-5 shadow-soft border border-slate-100 flex flex-col justify-between hover:border-teal-500/30 transition-all">
          <div>
            <div className="flex items-center justify-between text-xs font-semibold mb-2">
              <span className="text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md">
                {c.category}
              </span>
              <span className="text-slate-400 font-medium">
                {c.duration}
              </span>
            </div>
            <h4 className="font-serif text-lg font-bold text-navy-900 mb-4">
              {c.title}
            </h4>

            {/* Interactive Image Container */}
            <div 
              className="relative h-64 w-full overflow-hidden rounded-2xl select-none shadow-inner border border-slate-200 bg-slate-900 touch-none"
              onTouchMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const touchX = e.touches[0].clientX - rect.left;
                const percentage = Math.max(0, Math.min(100, (touchX / rect.width) * 100));
                handleSliderChange(i, percentage);
              }}
            >
              {/* After Layer (Background) */}
              <div className="absolute inset-0">
                <img
                  src={c.afterImg}
                  alt="After Treatment Smile Result"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-white bg-emerald-600/90 backdrop-blur-md px-2.5 py-1 rounded shadow-md">
                  After
                </span>
              </div>

              {/* Before Layer (Foreground clipped cleanly without squishing) */}
              <div 
                className="absolute inset-0 transition-none"
                style={{ clipPath: `inset(0 ${100 - sliderPos[i]}% 0 0)` }}
              >
                <img
                  src={c.beforeImg}
                  alt="Before Treatment Smile"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-white bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded shadow-md">
                  Before
                </span>
              </div>

              {/* Slider Handle */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos[i]}
                onChange={(e) => handleSliderChange(i, Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 touch-none"
                aria-label="Before and after slider"
              />

              {/* Visible Divider Bar */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-xl pointer-events-none z-10 flex items-center justify-center -ml-0.5"
                style={{ left: `${sliderPos[i]}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-white text-navy-900 shadow-md flex items-center justify-center text-xs font-bold border border-slate-200">
                  ↔
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Drag slider to compare</span>
            <span className="text-teal-600 font-medium">Real Align Patients</span>
          </div>
        </div>
      ))}
    </div>
  );
}
