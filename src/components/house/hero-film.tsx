"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

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
  vimeoId,
  vimeoTitle = "A warm welcome from Sunday House",
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
  /** A Vimeo video id: plays muted and looping behind the headline, with a "watch with sound" option. */
  vimeoId?: string;
  /** Title for the Vimeo film, used for the sound player and screen readers. */
  vimeoTitle?: string;
  position?: string;
  /** Tall photo: on desktop show it whole as a panel over a soft glow of itself. */
  portrait?: boolean;
  /** Placeholder mode: hides the stand-in photo and labels what belongs here. */
  need?: string;
  children: ReactNode;
}) {
  const [watching, setWatching] = useState(false);
  useEffect(() => {
    if (!watching) return;
    const close = (e: KeyboardEvent) => e.key === "Escape" && setWatching(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [watching]);
  return (
    <section className={`sh-hero${portrait ? " sh-hero--portrait" : ""}${need ? " sh-hero--need" : ""}`} aria-label="Sunday House">
      <div className="sh-hero__media">
        {video ? (
          <video
            className="sh-hero__video"
            src={video}
            poster={image}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            style={{ objectPosition: position }}
          />
        ) : null}
        {vimeoId ? (
          <div className="sh-hero__vimeo" aria-hidden="true">
            <iframe
              src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&muted=1&dnt=1`}
              title={vimeoTitle}
              tabIndex={-1}
              allow="autoplay; fullscreen; picture-in-picture"
            />
          </div>
        ) : null}
        <picture>
          {mobileImage ? <source media="(max-width: 767px)" srcSet={mobileImage} /> : null}
          <img
            className={video || vimeoId ? "sh-hero__still sh-hero__still--poster" : "sh-hero__still"}
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

      {vimeoId ? (
        <button type="button" className="sh-hero__sound" onClick={() => setWatching(true)}>
          <span aria-hidden="true">▶</span> Watch with sound
        </button>
      ) : null}
      {vimeoId && watching && typeof document !== "undefined"
        ? createPortal(
        <div className="sh-watch" role="dialog" aria-modal="true" aria-label={vimeoTitle} onClick={() => setWatching(false)}>
          <div className="sh-watch__frame" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&dnt=1&title=0&byline=0&portrait=0`}
              title={vimeoTitle}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          <button type="button" className="sh-watch__close" onClick={() => setWatching(false)}>
            Close
          </button>
        </div>,
            document.body,
          )
        : null}

      <a href="#begin" className="sh-hero__cue sh-hero__cue--line" aria-label="Scroll down">
        <span className="sh-hero__cue-label">Scroll</span>
        <span className="sh-hero__cue-track" aria-hidden="true" />
      </a>
    </section>
  );
}
