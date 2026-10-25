"use client";

import { useState } from "react";

export type Reel = { code: string; caption: string; thumb: string };

/** The four reels we lead with. */
export const TOP_REELS: Reel[] = [
  { code: "Dc-X9nngA-w", caption: "The mandap", thumb: "/assets/content-work/Dc-X9nngA-w.jpg" },
  { code: "Dc96eH_xHeK", caption: "The bride, with family", thumb: "/assets/content-work/Dc96eH_xHeK.jpg" },
  { code: "Dc95iSEhbA_", caption: "Time for some food", thumb: "/assets/content-work/Dc95iSEhbA_.jpg" },
  { code: "Dc92Z0tBIDY", caption: "The celebration", thumb: "/assets/content-work/Dc-B3f9sBdy.jpg" },
];

/**
 * A reel that plays right here on the page. Shows the still with a play mark;
 * a tap swaps in Instagram's own player, so the reel plays without leaving.
 */
export function ReelCard({ reel, className = "" }: { reel: Reel; className?: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <figure className={`sh-reel ${className}`}>
      {playing ? (
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
