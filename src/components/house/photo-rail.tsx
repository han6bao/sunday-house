"use client";

import { useRef } from "react";

type Item = { src: string; alt: string; video?: string; position?: string };

/** Square-cornered photos you swipe through (arrows on larger screens). */
export function PhotoRail({ items, ratio = "4/5", label }: { items: Item[]; ratio?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const go = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };
  return (
    <div className="sh-photorail">
      <div ref={ref} className="sh-photorail__track" aria-label={`${label} — swipe for more`}>
        {items.map((it) => (
          <figure key={it.src} className="sh-photorail__item" style={{ aspectRatio: ratio.replace("/", " / ") }}>
            {it.video ? (
              <video src={it.video} poster={it.src} autoPlay muted loop playsInline preload="metadata" aria-label={it.alt} style={{ objectPosition: it.position }} />
            ) : (
              <img src={it.src} alt={it.alt} loading="lazy" decoding="async" style={{ objectPosition: it.position }} />
            )}
          </figure>
        ))}
      </div>
      <div className="sh-photorail__nav">
        <span className="sh-photorail__hint">Swipe to see more</span>
        <span className="sh-photorail__btns">
          <button type="button" onClick={() => go(-1)} aria-label="Previous">←</button>
          <button type="button" onClick={() => go(1)} aria-label="Next">→</button>
        </span>
      </div>
    </div>
  );
}
