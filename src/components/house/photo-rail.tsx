"use client";

import { useEffect, useRef, type ReactNode } from "react";

import { useDragScroll } from "./use-drag-scroll";

type Item = { src: string; alt: string; video?: string; position?: string };

/**
 * Photos you swipe through, endlessly: after the last photo the first comes
 * back around. An optional link sits in the corner of the first photo and
 * travels with it.
 */
export function PhotoRail({
  items,
  ratio = "4/5",
  label,
  corner,
}: {
  items: Item[];
  ratio?: string;
  label: string;
  corner?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useDragScroll(ref);
  const loop = [...items, ...items, ...items];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const setWidth = () => el.scrollWidth / 3;
    const toMiddle = () => {
      el.style.scrollSnapType = "none";
      el.scrollLeft = setWidth();
      requestAnimationFrame(() => (el.style.scrollSnapType = ""));
    };
    toMiddle();
    let t: number | undefined;
    const onScroll = () => {
      window.clearTimeout(t);
      t = window.setTimeout(() => {
        const w = setWidth();
        if (el.scrollLeft < w * 0.5 || el.scrollLeft > w * 1.5) {
          el.style.scrollSnapType = "none";
          el.scrollLeft += el.scrollLeft < w * 0.5 ? w : -w;
          requestAnimationFrame(() => (el.style.scrollSnapType = ""));
        }
      }, 140);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", toMiddle);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", toMiddle);
    };
  }, []);

  return (
    <div className="sh-photorail">
      <div ref={ref} className="sh-photorail__track" aria-label={`${label} — swipe for more`}>
        {loop.map((it, i) => {
          const copy = Math.floor(i / items.length);
          const first = i % items.length === 0;
          return (
            <figure
              key={`${copy}-${it.src}`}
              className="sh-photorail__item"
              style={{ aspectRatio: ratio.replace("/", " / ") }}
              aria-hidden={copy !== 1 ? true : undefined}
            >
              {it.video ? (
                <video src={it.video} poster={it.src} autoPlay muted loop playsInline preload="metadata" aria-label={it.alt} style={{ objectPosition: it.position }} />
              ) : (
                <img src={it.src} alt={copy === 1 ? it.alt : ""} loading="lazy" decoding="async" style={{ objectPosition: it.position }} />
              )}
              {first && corner ? <div className="sh-photorail__corner">{corner}</div> : null}
            </figure>
          );
        })}
      </div>
      <div className="sh-photorail__nav">
        <span className="sh-photorail__hint">Swipe to see more</span>
      </div>
    </div>
  );
}
