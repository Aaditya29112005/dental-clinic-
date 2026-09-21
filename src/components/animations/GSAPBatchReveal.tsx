"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GSAPBatchRevealProps {
  children: React.ReactNode;
  selector?: string; // target class to batch animate (default ".batch-item")
  stagger?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export default function GSAPBatchReveal({
  children,
  selector = ".batch-item",
  stagger = 0.15,
  duration = 0.8,
  yOffset = 40,
  className = "",
}: GSAPBatchRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const items = containerRef.current?.querySelectorAll(selector);
      if (!items || items.length === 0) return;

      // Set initial hidden state
      gsap.set(items, { autoAlpha: 0, y: yOffset });

      // Apply ScrollTrigger.batch as in GSAP documentation/CodePen snippet
      ScrollTrigger.batch(items as unknown as Element[], {
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            stagger: stagger,
            duration: duration,
            ease: "sine.out",
            overwrite: "auto",
          }),
        onLeaveBack: (batch) =>
          gsap.to(batch, {
            autoAlpha: 0,
            y: yOffset,
            duration: 0.4,
            ease: "sine.in",
            overwrite: "auto",
          }),
        start: "top 85%",
        once: false,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [selector, stagger, duration, yOffset]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
