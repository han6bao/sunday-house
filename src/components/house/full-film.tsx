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
  /** The full film: a video file or a YouTube link. Until it's set, the preview loop shows on its own. */
  film?: string;
  preview: string;
  poster: string;
  title: string;
  caption?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);
  const vimeo = film?.match(/vimeo\.com\/(?:video\/)?(\d+)/)?.[1];
  const youtube = film?.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/)?.[1];

  return (
    <figure className="sh-fullfilm">
      <div className="sh-fullfilm__frame">
        {playing && film && vimeo ? (
          <iframe
            src={`https://player.vimeo.com/video/${vimeo}?autoplay=1&title=0&byline=0&portrait=0&badge=0&dnt=1&color=f2c6d2`}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="sh-fullfilm__video"
            style={{ border: 0 }}
          />
        ) : playing && film && youtube ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtube}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="sh-fullfilm__video"
            style={{ border: 0 }}
          />
        ) : playing && film ? (
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
