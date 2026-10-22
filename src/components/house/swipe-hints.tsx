"use client";

import { useEffect } from "react";

/** Once someone swipes a row, its "Swipe to see more" hint quietly fades away. */
export function SwipeHints() {
  useEffect(() => {
    const tracks = document.querySelectorAll<HTMLElement>(".sh-swipe, .sh-filmrail__track, .sh-photorail__track");
    const offs: Array<() => void> = [];
    tracks.forEach((t) => {
      const box = t.parentElement;
      const on = () => {
        if (t.scrollLeft > 12) box?.classList.add("is-swiped");
      };
      t.addEventListener("scroll", on, { passive: true });
      offs.push(() => t.removeEventListener("scroll", on));
    });
    return () => offs.forEach((f) => f());
  }, []);
  return null;
}
