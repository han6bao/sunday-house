"use client";

import { useState } from "react";

/**
 * A full film from YouTube. Until it's played, a quiet looping clip and a play
 * button sit in its place; a tap swaps in the real film, with sound.
 */
export function YouTubeFilm({ id, loop, poster, title }: { id: string; loop: string; poster: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="sh-ytfilm">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} aria-label={`Play the film: ${title}`}>
          <video src={loop} poster={poster} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
          <span className="sh-ytfilm__label">
            <span className="sh-ytfilm__play" aria-hidden="true" />
            Watch the film · {title}
          </span>
        </button>
      )}
    </div>
  );
}
