"use client";

import { useState } from "react";

type Mode = "general" | "weddings";

const GENERAL = [
  "Senior / Graduation Announcements",
  "Graduation Cards",
  "Family Holiday Cards",
  "Baby Announcements",
  "Birth Announcements",
  "Photo Albums",
  "Custom Print Layouts",
  "Thank-You Cards",
  "Keepsake Pieces",
  "Digital Designs",
  "Custom Portraits Pieces",
];

const WEDDING = [
  "Wedding Websites",
  "Save the Dates",
  "Invitations",
  "RSVP Designs",
  "Menus",
  "Programs",
  "Welcome Signs",
  "Seating Charts",
  "Place Cards",
  "Thank-You Cards",
  "Digital Wedding Materials",
  "Custom Signage Concepts",
  "Announcements",
  "Guest Books",
];

/** Elegant segmented toggle between General and Wedding custom pieces. */
export function CustomPiecesToggle() {
  const [mode, setMode] = useState<Mode>("general");

  const items = mode === "weddings" ? WEDDING : GENERAL;

  return (
    <div>
      <div className="inline-flex rounded-[12px] border border-ink/15 bg-ivory p-1">
        {(["general", "weddings"] as Mode[]).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            aria-pressed={mode === m}
            className={`rounded-[9px] px-5 py-2 label-xs transition-colors ${
              mode === m ? "bg-ink text-ivory" : "text-brown hover:text-ink"
            }`}
          >
            {m === "general" ? "Custom Visual + Digital" : "Weddings"}
          </button>
        ))}
      </div>

      <ul className="mt-6 grid gap-px overflow-hidden border border-ink/15 bg-rose-paper sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="bg-white p-4 font-serif text-base text-brown">
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-6 border border-ink/15 bg-rose-paper/60 p-6">
        {mode === "weddings" ? (
          <p className="font-serif text-lg leading-relaxed text-brown">
            Your wedding website, stationery and signage can all carry the same
            thread as your photographs: the colors, the words, the feeling.
            Custom pieces can be physical keepsakes or digital designs, and if
            we don't make it ourselves, we know someone who does.
          </p>
        ) : (
          <p className="font-serif text-lg leading-relaxed text-brown">
            Custom visual and digital pieces for life events beyond the wedding:
            announcements, cards, albums, custom print layouts and keepsake
            designs, as an extension of your photography experience.
          </p>
        )}
      </div>
    </div>
  );
}