"use client";

import { Link } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";

import { useDragScroll } from "./use-drag-scroll";

type Item = { src: string; alt: string; video?: string; position?: string };

/**
 * Photos you swipe through, endlessly: after the last photo the first comes
 * back around. An optional link stays pinned in the middle of the row while
 * the photos slide underneath it.
 */
export function PhotoRail({
  items,
  ratio = "4/5",
  label,
  corner,
  to,
}: {
  items: Item[];
  ratio?: string;
  label: string;
  corner?: ReactNode;
  /** Every photo opens this page. */
  to?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useDragScroll(ref);
  const loop = [...items, ...items, ...items];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const setWidth = () => el.scrollWidth / 3;
    // Start with the first two photos side by side in the centre of the row,
    // the seam between them (and the corner link) in the exact middle.
    const toMiddle = () => {
      el.style.scrollSnapType = "none";
      const kids = el.children;
      const a = kids[items.length] as HTMLElement | undefined;
      const b = kids[items.length + 1] as HTMLElement | undefined;
      if (a && b) {
        const seam = (a.offsetLeft + a.offsetWidth + b.offsetLeft) / 2;
        el.scrollLeft = seam - el.clientWidth / 2;
      } else el.scrollLeft = setWidth();
      requestAnimationFrame(() => (el.style.scrollSnapType = ""));
    };
    toMiddle();
    const t0 = window.setTimeout(toMiddle, 350);
    let t: number | undefined;
    const onScroll = () => {
      window.clearTimeout(t);
      t = window.setTimeout(() => {
        const w = setWidth();
        if (el.scrollLeft < w * 0.35 || el.scrollLeft > w * 1.85) {
          el.style.scrollSnapType = "none";
          el.scrollLeft += el.scrollLeft < w * 0.35 ? w : -w;
          requestAnimationFrame(() => (el.style.scrollSnapType = ""));
        }
      }, 140);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", toMiddle);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", toMiddle);
      window.clearTimeout(t0);
    };
  }, [items.length]);

  return (
    <div className="sh-photorail">
      <div className="sh-photorail__stage">
      <div ref={ref} className="sh-photorail__track" aria-label={`${label} — swipe for more`}>
        {loop.map((it, i) => {
          const copy = Math.floor(i / items.length);
          const media = it.video ? (
            <video src={it.video} poster={it.src} autoPlay muted loop playsInline preload="metadata" aria-label={it.alt} style={{ objectPosition: it.position }} />
          ) : (
            <img src={it.src} alt={copy === 1 ? it.alt : ""} loading="lazy" decoding="async" style={{ objectPosition: it.position }} />
          );
          return (
            <figure
              key={`${copy}-${it.src}`}
              className="sh-photorail__item"
              style={{ aspectRatio: ratio.replace("/", " / ") }}
              aria-hidden={copy !== 1 ? true : undefined}
            >
              {to ? (
                <Link to={to as never} className="sh-photorail__link" tabIndex={copy === 1 ? undefined : -1} draggable={false}>
                  {media}
                </Link>
              ) : (
                media
              )}
            </figure>
          );
        })}
      </div>
      {corner ? <div className="sh-photorail__pin">{corner}</div> : null}
      </div>
      <div className="sh-photorail__nav">
        <span className="sh-photorail__hint">Swipe to see more</span>
      </div>
    </div>
  );
}
