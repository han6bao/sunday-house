"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A small looping film clip that plays muted, only while it is on screen
 * (keeps pages fast). Reduced-motion visitors get the poster frame.
 */
export function FilmSnippet({
  src,
  poster,
  className = "",
  ariaLabel,
  unframed = false,
}: {
  src: string;
  poster: string;
  className?: string;
  ariaLabel?: string;
  unframed?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [motion, setMotion] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setMotion(true);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!motion || !v) return;
    v.muted = true;
    v.defaultMuted = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.2 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [motion, src]);

  const frame = unframed
    ? `overflow-hidden ${className}`
    : `overflow-hidden border border-ink/15 bg-ink ${className}`;

  if (!motion) {
    return (
      <div className={frame}>
        <img src={poster} alt={ariaLabel ?? ""} loading="lazy" className="h-full w-full object-cover" />
      </div>
    );
  }

  return (
    <div className={frame}>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
        aria-label={ariaLabel}
        className="h-full w-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
