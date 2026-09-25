"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles } from "lucide-react";

interface CustomVideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  subtitle?: string;
  badge?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
  aspectRatio?: string; // e.g. "aspect-video" or "aspect-[4/3]"
  onExpand?: () => void;
}

export default function CustomVideoPlayer({
  src,
  poster,
  title,
  subtitle,
  badge,
  autoPlay = false,
  loop = true,
  muted = true,
  className = "",
  aspectRatio = "aspect-video",
  onExpand,
}: CustomVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (autoPlay && videoRef.current) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }, [autoPlay]);

  const togglePlay = () => {
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
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 1;
    setProgress((current / total) * 100);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const seekTime = (parseFloat(e.target.value) / 100) * videoRef.current.duration;
    videoRef.current.currentTime = seekTime;
    setProgress(parseFloat(e.target.value));
  };

  return (
    <div
      className={`relative group overflow-hidden rounded-3xl bg-navy-950 shadow-soft border border-slate-800 ${aspectRatio} ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop={loop}
        muted={isMuted}
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onClick={togglePlay}
        className="w-full h-full object-cover cursor-pointer transition-transform duration-700 group-hover:scale-[1.02]"
      />

      {/* Subtle Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent pointer-events-none" />

      {/* Header Badge & Subtitle */}
      {(badge || title || onExpand) && (
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
          {badge ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-teal-500/90 text-navy-950 shadow-md backdrop-blur-md">
              <Sparkles className="w-3 h-3" />
              {badge}
            </span>
          ) : <div />}
          {onExpand && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onExpand();
              }}
              className="pointer-events-auto ml-auto p-2 rounded-xl bg-navy-900/80 hover:bg-teal-500 text-white hover:text-navy-950 transition-colors backdrop-blur-md border border-white/10"
              title="Expand Video"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      {/* Center Big Play Button (shows when paused) */}
      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-teal-500/90 text-navy-950 flex items-center justify-center shadow-lg shadow-teal-500/30 hover:scale-110 transition-transform duration-300 z-20"
          aria-label="Play video"
        >
          <Play className="w-7 h-7 fill-current translate-x-0.5" />
        </button>
      )}

      {/* Bottom Bar Controls & Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2 z-20 bg-gradient-to-t from-navy-950/90 via-navy-950/60 to-transparent">
        {title && (
          <div className="pointer-events-none text-left">
            <h4 className="font-serif font-bold text-white text-base md:text-lg leading-snug drop-shadow-sm">
              {title}
            </h4>
            {subtitle && (
              <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Progress Bar */}
        <div className="flex items-center gap-3 pt-1">
          <button
            onClick={togglePlay}
            className="text-white hover:text-teal-400 transition-colors shrink-0"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
          </button>

          <input
            type="range"
            min="0"
            max="100"
            value={progress || 0}
            onChange={handleSeek}
            className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-teal-400 hover:h-1.5 transition-all"
          />

          <button
            onClick={toggleMute}
            className="text-white hover:text-teal-400 transition-colors shrink-0"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-teal-400" />}
          </button>

          {onExpand && !title && (
            <button
              onClick={onExpand}
              className="text-white hover:text-teal-400 transition-colors shrink-0"
              title="Expand Video"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
