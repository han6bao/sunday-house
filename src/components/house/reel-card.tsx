"use client";

import { useState } from "react";

export type Reel = { code: string; caption: string; thumb: string; video?: string };

/** The four reels we lead with. */
export const TOP_REELS: Reel[] = [
  { code: "Dc-X9nngA-w", caption: "The mandap", thumb: "/assets/content-work/Dc-X9nngA-w.jpg", video: "/assets/reels/Dc-X9nngA-w.mp4" },
  { code: "Dc96eH_xHeK", caption: "The bride, with family", thumb: "/assets/content-work/Dc96eH_xHeK.jpg", video: "/assets/reels/Dc96eH_xHeK.mp4" },
  { code: "Dc95iSEhbA_", caption: "Time for some food", thumb: "/assets/content-work/Dc95iSEhbA_.jpg", video: "/assets/reels/Dc95iSEhbA_.mp4" },
  { code: "Dc92Z0tBIDY", caption: "The celebration", thumb: "/assets/reels/Dc92Z0tBIDY.jpg", video: "/assets/reels/Dc92Z0tBIDY.mp4" },
];

/** Every reel that plays right on the site: the top four, plus more. */
export const PLAYABLE_REELS: Reel[] = [
  ...TOP_REELS,
  { code: "Dc-Q1TcSzgx", caption: "The welcome", thumb: "/assets/content-work/Dc-Q1TcSzgx.jpg", video: "/assets/reels/Dc-Q1TcSzgx.mp4" },
];

/**
 * A reel that plays right here on the page. Shows the still with a play mark;
 * a tap plays the video in place, with sound, without leaving the site.
 */
export function ReelCard({ reel, className = "" }: { reel: Reel; className?: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <figure className={`sh-reel ${className}`}>
      {playing && reel.video ? (
        <video
          src={reel.video}
          poster={reel.thumb}
          className="sh-reel__video"
          controls
          autoPlay
          playsInline
          aria-label={reel.caption}
        />
      ) : playing ? (
        <iframe
          src={`https://www.instagram.com/reel/${reel.code}/embed/`}
          title={reel.caption}
          className="sh-reel__frame"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <button type="button" className="sh-reel__poster" onClick={() => setPlaying(true)} aria-label={`Play reel: ${reel.caption}`}>
          <img src={reel.thumb} alt="" loading="lazy" decoding="async" />
          <span className="sh-reel__play" aria-hidden="true" />
        </button>
      )}
      <figcaption className="sh-reel__cap">{reel.caption}</figcaption>
    </figure>
  );
}
