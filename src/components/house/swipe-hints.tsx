"use client";

import { useEffect } from "react";

/**
 * The first time someone swipes any row, every "Swipe to see more" hint on
 * the page fades away (and stays gone for the rest of the visit).
 */
export function SwipeHints() {
  useEffect(() => {
    const root = document.documentElement;
    try {
      if (sessionStorage.getItem("sh-swiped") === "1") root.classList.add("sh-swiped");
    } catch {
      /* storage unavailable — hints simply show again */
    }
    const tracks = document.querySelectorAll<HTMLElement>(".sh-swipe, .sh-filmrail__track, .sh-photorail__track");
    const offs: Array<() => void> = [];
    tracks.forEach((t) => {
      let touched = false;
      let start = t.scrollLeft;
      const begin = () => {
        if (touched) return;
        touched = true;
        start = t.scrollLeft;
      };
      const on = () => {
        if (!touched || Math.abs(t.scrollLeft - start) < 12) return;
        root.classList.add("sh-swiped");
        try {
          sessionStorage.setItem("sh-swiped", "1");
        } catch {
          /* ignore */
        }
      };
      const wheel = (e: WheelEvent) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) begin();
      };
      t.addEventListener("pointerdown", begin, { passive: true });
      t.addEventListener("touchstart", begin, { passive: true });
      t.addEventListener("wheel", wheel, { passive: true });
      t.addEventListener("scroll", on, { passive: true });
      offs.push(() => {
        t.removeEventListener("pointerdown", begin);
        t.removeEventListener("touchstart", begin);
        t.removeEventListener("wheel", wheel);
        t.removeEventListener("scroll", on);
      });
    });
    return () => offs.forEach((f) => f());
  }, []);
  return null;
}
