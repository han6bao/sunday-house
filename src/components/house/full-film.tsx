"use client";

import { useRef, useState } from "react";

/**
 * The full wedding film, hosted on our own site — no YouTube.
 * Shows a quiet looping preview with a play button; a tap plays the
 * full film in place, with sound and controls.
 */
export function FullFilm({
  film,
  preview,
  poster,
  title,
  caption,
}: {
  /** The full film file. Until it's uploaded, the preview loop shows on its own. */
  film?: string;
  preview: string;
  poster: string;
  title: string;
  caption?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  return (
    <figure className="sh-fullfilm">
      <div className="sh-fullfilm__frame">
        {playing && film ? (
          <video ref={ref} src={film} poster={poster} controls autoPlay playsInline className="sh-fullfilm__video" aria-label={title} />
        ) : (
          <>
            <video src={preview} poster={poster} autoPlay muted loop playsInline className="sh-fullfilm__video" aria-hidden="true" />
            {film ? (
              <button type="button" className="sh-fullfilm__play" onClick={() => setPlaying(true)} aria-label={`Play the film: ${title}`}>
                <span className="sh-fullfilm__btn" aria-hidden="true" />
                <span className="sh-fullfilm__label">Watch the film</span>
              </button>
            ) : null}
          </>
        )}
      </div>
      <figcaption className="sh-fullfilm__cap">
        <span>{title}</span>
        {caption ? <span>{caption}</span> : null}
      </figcaption>
    </figure>
  );
}
