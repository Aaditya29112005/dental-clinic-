"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface GSAPMagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // magnetic strength multiplier (default 0.35)
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

export default function GSAPMagneticButton({
  children,
  className = "",
  strength = 0.35,
  onClick,
  href,
  target,
  rel,
}: GSAPMagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      gsap.to(btn, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.4)",
        overwrite: "auto",
      });
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  const content = (
    <div
      ref={buttonRef}
      className={`inline-block transition-shadow duration-300 ${className}`}
      style={{ willChange: "transform" }}
      onClick={onClick}
    >
      {children}
    </div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}
