"use client";

import { useRef, useState, type ReactNode } from "react";

/**
 * Full-screen landing placement built for a video.
 *
 * Today it shows a still photograph. When the landing film is ready, pass
 * `video="/assets/landing/hero.mp4"` (keep `image` as the poster) and it
 * plays muted, looping, behind the same headline. Reduced-motion visitors
 * always get the still.
 */
export function HeroFilm({
  image,
  mobileImage,
  alt,
  video,
  sound = false,
  position = "center",
  portrait = false,
  need,
  children,
}: {
  image: string;
  /** Optional portrait crop for phones. */
  mobileImage?: string;
  alt: string;
  video?: string;
  /** The film has sound: show a small speaker button to turn it on and off. */
  sound?: boolean;
  position?: string;
  /** Tall photo: on desktop show it whole as a panel over a soft glow of itself. */
  portrait?: boolean;
  /** Placeholder mode: hides the stand-in photo and labels what belongs here. */
  need?: string;
  children: ReactNode;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) {
      v.currentTime = 0;
      void v.play();
    }
    setMuted(v.muted);
  };
  return (
    <section className={`sh-hero${portrait ? " sh-hero--portrait" : ""}${need ? " sh-hero--need" : ""}`} aria-label="Sunday House">
      <div className="sh-hero__media">
        {video ? (
          <video
            ref={videoRef}
            className="sh-hero__video"
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            style={{ objectPosition: position }}
          />
        ) : null}
        <picture>
          {mobileImage ? <source media="(max-width: 767px)" srcSet={mobileImage} /> : null}
          <img
            className={video ? "sh-hero__still sh-hero__still--poster" : "sh-hero__still"}
            src={image}
            alt={alt}
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            style={{ objectPosition: position }}
          />
        </picture>
        {portrait ? (
          <img className="sh-hero__panel" src={image} alt="" aria-hidden="true" width={820} height={1246} />
        ) : null}
        <div className="sh-hero__veil" aria-hidden="true" />
      </div>

      {need ? (
        <p className="sh-hero__need">
          <span className="sh-need__kicker">Needed here</span> {need}
        </p>
      ) : null}
      <div className="sh-hero__content">{children}</div>

      {video && sound ? (
        <button
          type="button"
          className="sh-hero__sound"
          onClick={toggleSound}
          aria-pressed={!muted}
          aria-label={muted ? "Turn sound on" : "Turn sound off"}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" />
            {muted ? (
              <path d="M16 9.5l5 5M21 9.5l-5 5" />
            ) : (
              <path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" />
            )}
          </svg>
        </button>
      ) : null}

      <a href="#begin" className="sh-hero__cue sh-hero__cue--line" aria-label="Scroll down">
        <span className="sh-hero__cue-label">Scroll</span>
        <span className="sh-hero__cue-track" aria-hidden="true" />
      </a>
    </section>
  );
}
