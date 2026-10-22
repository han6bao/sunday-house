"use client";

import { useRef, useState } from "react";

/**
 * A film that plays quietly on its own, with a small speaker button to hear
 * it (voiceover, music). Turning sound on starts it from the beginning.
 */
export function SoundFilm({
  src,
  poster,
  label,
  className = "",
}: {
  src: string;
  poster: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) {
      v.currentTime = 0;
      void v.play();
    }
    setMuted(v.muted);
  };
  return (
    <figure className={`sh-soundfilm ${className}`}>
      <video ref={ref} src={src} poster={poster} autoPlay muted loop playsInline preload="metadata" aria-label={label} />
      <button
        type="button"
        className="sh-hero__sound"
        onClick={toggle}
        aria-pressed={!muted}
        aria-label={muted ? "Turn sound on" : "Turn sound off"}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" />
          {muted ? <path d="M16 9.5l5 5M21 9.5l-5 5" /> : <path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" />}
        </svg>
      </button>
    </figure>
  );
}
