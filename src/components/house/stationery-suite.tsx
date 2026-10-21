"use client";

import { useState } from "react";

import { Heart } from "./marks";

/**
 * "Made for your day" — a layered wedding-paper suite on the table:
 * invitation, save-the-date, menu, a website on a phone, a place card.
 * The toggle switches which papers the suite shows.
 */
export function StationerySuite() {
  const [mode, setMode] = useState<"weddings" | "life">("weddings");

  return (
    <div>
      {/* Toggle */}
      <div className="mb-6 grid grid-cols-2 gap-1 rounded-full border border-ink/15 bg-rose-paper/50 p-1.5">
        {(
          [
            { key: "weddings", label: "For Weddings" },
            { key: "life", label: "For Life" },
          ] as { key: "weddings" | "life"; label: string }[]
        ).map((m) => {
          const on = mode === m.key;
          return (
            <button
              key={m.key}
              type="button"
              aria-pressed={on}
              onClick={() => setMode(m.key)}
              className={`rounded-full px-4 py-2.5 text-center font-serif text-sm transition-all ${
                on ? "bg-ink text-ivory" : "text-brown hover:bg-rose-paper"
              }`}
            >
              {m.label}
            </button>
          );
        })}
      </div>

      {/* The papers — a deliberate grid, each in its own cell */}
      <div className="stationery-suite">
        <div className="stationery-suite__piece stationery-suite__piece--a">
          <p className="label-xs text-antique">Save the date</p>
          <p className="mt-2 font-serif text-sm italic text-brown/70">
            {mode === "weddings" ? "The date, announced on paper worth keeping." : "A hello worth keeping in the letterbox."}
          </p>
        </div>
        <div className="stationery-suite__piece stationery-suite__piece--b">
          <p className="label-xs text-antique">The invitation</p>
          <p className="script mt-3 text-2xl leading-snug text-dusty-rose">You are invited.</p>
          <p className="mt-2 font-serif text-sm italic text-brown/70">
            {mode === "weddings"
              ? "Designed as an extension of your day, before the door even opens."
              : "Announcements for the moments that deserve a room of their own."}
          </p>
        </div>
        <div className="stationery-suite__piece stationery-suite__piece--c">
          <p className="label-xs text-antique">Menu</p>
          <p className="mt-2 font-serif text-sm italic text-brown/70">
            {mode === "weddings" ? "The evening, set table by table." : "Cards and keepsakes, made to hold."}
          </p>
        </div>
        <div className="stationery-suite__piece stationery-suite__piece--d">
          <p className="label-xs text-antique">Place card</p>
          <p className="mt-2 font-serif text-sm italic text-brown/70">
            {mode === "weddings" ? "Every seat, thoughtfully named." : "A card that carries a photograph and a word."}
          </p>
        </div>
        <div className="stationery-suite__piece stationery-suite__piece--e">
          <p className="label-xs text-antique">
            {mode === "weddings" ? "Website on a phone" : "Custom pieces"}
          </p>
          <p className="mt-2 font-serif text-sm italic text-brown/70">
            {mode === "weddings"
              ? "Your own room on the internet."
              : "Prints, announcements, cards, made by the House."}
          </p>
        </div>
        <div className="stationery-suite__seal">
          <Heart className="h-7 w-7 text-rose-deep" />
        </div>
      </div>

      <p className="mt-6 text-center font-serif text-sm italic text-brown/60">
        {mode === "weddings"
          ? "Wedding websites · invitations · menus · signage · keepsakes"
          : "Announcements · cards · prints · custom pieces for life"}
      </p>
    </div>
  );
}