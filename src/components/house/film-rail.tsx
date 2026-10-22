"use client";

import { useRef } from "react";

import { FilmSnippet } from "./film-snippet";

const CLIPS = [
  { n: "film-13b", label: "A groom watching his bride with a smile" },
  { n: "film-1", label: "The first dance beneath string lights" },
  { n: "film-5", label: "The couple cutting their cake" },
  { n: "film-8", label: "Getting ready" },
  { n: "film-3", label: "Guests celebrating under string lights" },
  { n: "film-6", label: "The dance floor" },
];

/** Wedding film clips you swipe through (arrows on larger screens). */
export function FilmRail() {
  const ref = useRef<HTMLDivElement>(null);
  const go = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };
  return (
    <div className="sh-filmrail">
      <div ref={ref} className="sh-filmrail__track" aria-label="Wedding film clips — swipe for more">
        {CLIPS.map((c) => (
          <figure key={c.n} className="sh-filmrail__item">
            <FilmSnippet
              src={`/assets/films-web/${c.n}.mp4`}
              poster={`/assets/film-posters/${c.n}.jpg`}
              unframed
              ariaLabel={`Wedding film clip: ${c.label.toLowerCase()}`}
              className="sh-film aspect-[16/9]"
            />
          </figure>
        ))}
      </div>
      <div className="sh-filmrail__nav">
        <span className="sh-filmrail__hint">Swipe to see more</span>
        <span className="sh-filmrail__btns">
          <button type="button" onClick={() => go(-1)} aria-label="Previous clip">←</button>
          <button type="button" onClick={() => go(1)} aria-label="Next clip">→</button>
        </span>
      </div>
    </div>
  );
}
