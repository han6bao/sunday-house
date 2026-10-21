"use client";

import { useEffect } from "react";

/**
 * The front door — your card photos, one for web (horizontal) and one for
 * mobile (vertical). The card drifts in parallax as you scroll; an elegant
 * "COME IN ↓" cue near the bottom guides the visitor down into the House.
 * Reduced motion: static card, instant scroll.
 */
export function FrontDoor() {
  useEffect(() => {
    const root = document.getElementById("front-door");
    const cue = document.getElementById("door-come-in");
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      if (cue) cue.style.display = "none";
      return;
    }

    root.dataset.scrub = "true";

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        const rect = root.getBoundingClientRect();
        const total = Math.max(rect.height - window.innerHeight, 1);
        const progress = Math.min(1, Math.max(0, -rect.top / total));

        root.style.setProperty("--door-progress", String(progress));

        if (cue) cue.style.opacity = String(Math.max(0, 1 - progress * 1.6));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
      delete root.dataset.scrub;
      root.style.removeProperty("--door-progress");
    };
  }, []);

  return (
    <section className="door" id="front-door" aria-label="Welcome to Sunday House">
      <div className="door__stage">
        <picture>
          {/* mobile gets the vertical card, web gets the horizontal card */}
          <source media="(max-width: 860px)" srcSet="/assets/card/card-mobile.jpg" />
          <img src="/assets/card/card-web.webp" alt="Sunday House — a place for the things worth keeping" />
        </picture>
        <a className="door__come-in" id="door-come-in" href="#house-main" aria-label="Come in — continue downward">
          <span>Come in</span>
          <svg
            className="door__come-in-arrow"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 4v14m0 0l-6-6m6 6l6-6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}