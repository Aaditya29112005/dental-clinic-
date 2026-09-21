"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GSAPSplitTextHeadingProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "p";
  type?: "words" | "chars";
  stagger?: number;
  duration?: number;
  delay?: number;
}

export default function GSAPSplitTextHeading({
  text,
  className = "",
  tag = "h2",
  type = "words",
  stagger = 0.04,
  duration = 0.7,
  delay = 0,
}: GSAPSplitTextHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !headingRef.current) return;

    const el = headingRef.current;

    const ctx = gsap.context(() => {
      const targets = el.querySelectorAll(".split-unit");
      if (!targets.length) return;

      gsap.set(targets, { yPercent: 100, opacity: 0, rotateX: -20 });

      gsap.to(targets, {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        duration: duration,
        stagger: stagger,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, headingRef);

    return () => ctx.revert();
  }, [text, type, stagger, duration, delay]);

  const Tag = tag;

  if (type === "words") {
    const words = text.split(" ");
    return (
      <Tag ref={headingRef} className={`overflow-hidden inline-block ${className}`}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.25em] align-top">
            <span className="split-unit inline-block will-change-transform">{word}</span>
          </span>
        ))}
      </Tag>
    );
  }

  // Chars split
  const chars = Array.from(text);
  return (
    <Tag ref={headingRef} className={`overflow-hidden inline-block ${className}`}>
      {chars.map((char, i) => (
        <span key={i} className="inline-block overflow-hidden align-top">
          <span className="split-unit inline-block will-change-transform">
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </Tag>
  );
}
