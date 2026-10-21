"use client";

import { useEffect, useMemo, useState } from "react";
import { pageHead } from "@/lib/seo";

import { createFileRoute, Link } from "@tanstack/react-router";

import { ContentShell } from "@/components/house/content-shell";
import { HouseMark } from "@/components/house/marks";
import { CITY_FILTERS, LOCATION_ARCHIVE, photoCredit } from "@/lib/location-archive";

export const Route = createFileRoute("/locations")({
  head: () =>
    pageHead({
      title: "Photo Locations in Seattle + Tacoma | Sunday House",
      description:
        "An archive of real places to be photographed around Seattle, Tacoma and Puget Sound — beaches, gardens, city spots, studios and rain-friendly rooms, tagged by city.",
      path: "/locations",
      image: "/assets/locations/kerry-park-night.jpg",
    }),
  component: Locations,
});

const LOOK_TAGS = [
  "Water", "Beach", "Lake", "Mountains", "Forest", "Garden", "Flowers",
  "City", "Architecture", "Industrial", "Editorial", "Historic", "Modern",
  "Urban", "Sunset", "Rain-Friendly", "Accessible", "Pet-Friendly", "Field", "Indoor",
];

const LOOKS_VISIBLE = 8;

export default function Locations() {
  const [tag, setTag] = useState<string | null>(null);
  const [city, setCity] = useState("All");
  const [studiosOnly, setStudiosOnly] = useState(false);
  const [looksOpen, setLooksOpen] = useState(false);
  const [limit, setLimit] = useState(24);

  const shown = useMemo(
    () =>
      LOCATION_ARCHIVE.filter(
        (l) =>
          (city === "All" || l.city === city) &&
          (studiosOnly ? l.tags.includes("Studio") : tag === null || l.tags.includes(tag))
      ),
    [tag, city, studiosOnly]
  );
  useEffect(() => setLimit(24), [tag, city, studiosOnly]);

  // If the active look is hidden behind the "+ more" fold, open the list automatically.
  const activeHidden = tag !== null && LOOK_TAGS.indexOf(tag) >= LOOKS_VISIBLE;
  const lookList = looksOpen || activeHidden ? LOOK_TAGS : LOOK_TAGS.slice(0, LOOKS_VISIBLE);

  const reset = () => {
    setTag(null);
    setCity("All");
    setStudiosOnly(false);
    setLooksOpen(false);
  };

  const word = studiosOnly ? "studios" : shown.length === 1 ? "place" : "places";

  return (
    <ContentShell breadcrumb={[{ name: "Photo Locations", path: "/locations" }]}>
      <section className="mx-auto max-w-[1400px] px-5 pt-14 md:px-8">
        <p className="sh-script  reveal">Somewhere beautiful.</p>
        <h1 className="reveal reveal--delay-1 mt-3 max-w-3xl sh-h1">
          Photography location guides.
        </h1>
        <p className="reveal reveal--delay-2 mt-5 max-w-2xl font-serif text-lg leading-relaxed text-brown">
          Sunday House helps clients find places that fit their vision. Every
          spot in this archive is a real place we'd happily photograph at — browse
          by the look you want, by city, or jump straight to the studios, across
          Seattle, Tacoma and beyond.
        </p>
        <div className="reveal reveal--delay-2 mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link to="/experience/$kind" params={{ kind: "couples" }} className="sh-btn-fill">
            Help me choose a spot
          </Link>
          <Link to="/guides" className="sh-invite__alt">
            Read our location guides →
          </Link>
        </div>
      </section>

      {/* Filter desk — one line, three controls */}
      <section className="mx-auto max-w-[1400px] px-5 pt-8 md:px-8">
        <div className="reveal border-y border-ink/15 py-4">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {/* Studios — compact toggle */}
            <button
              type="button"
              aria-pressed={studiosOnly}
              onClick={() => {
                setStudiosOnly(!studiosOnly);
                setTag(null);
              }}
              className={`border px-4 py-1.5 font-serif text-sm transition-colors ${
                studiosOnly
                  ? "border-oxblood bg-oxblood text-ivory"
                  : "border-oxblood/40 text-oxblood hover:border-oxblood"
              }`}
            >
              {studiosOnly ? "✓ Studios" : "Studios"}
            </button>

            {/* City — one dropdown instead of a wall of buttons */}
            <label className="flex items-baseline gap-2">
              <span className="eyebrow">City</span>
              <span className="relative">
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="cursor-pointer appearance-none border-0 border-b border-ink/15 bg-transparent pb-0.5 pr-6 font-serif text-sm text-ink outline-none focus:border-antique"
                >
                  {CITY_FILTERS.map((c) => (
                    <option key={c} value={c}>
                      {c === "All" ? "All cities" : c}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-0.5 top-1 font-serif text-xs text-antique">
                  ▾
                </span>
              </span>
            </label>

            <span className="hidden h-4 w-px bg-rose-paper md:block" />

            {/* Result count + reset */}
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-sm italic text-brown/60">
                {shown.length} {word}
              </span>
              {(tag !== null || city !== "All" || studiosOnly) && (
                <button
                  type="button"
                  onClick={reset}
                  className="font-serif text-sm text-antique underline decoration-ink/30 underline-offset-4 hover:text-oxblood"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* The look — capped pills */}
          {!studiosOnly && (
            <div className="mt-3.5 flex flex-wrap items-center gap-2">
              <span className="eyebrow">The look</span>
              <button
                type="button"
                aria-pressed={tag === null}
                onClick={() => setTag(null)}
                className={`border px-3 py-1 font-serif text-sm transition-colors ${
                  tag === null
                    ? "border-rose-deep/60 bg-rose-paper text-ink"
                    : "border-ink/15 text-brown hover:border-ink/15"
                }`}
              >
                All looks
              </button>
              {lookList.map((t) => {
                const on = tag === t;
                return (
                  <button
                    key={t}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setTag(on ? null : t)}
                    className={`border px-3 py-1 font-serif text-sm transition-colors ${
                      on
                        ? "border-rose-deep/60 bg-rose-paper text-ink"
                        : "border-ink/15 text-brown hover:border-ink/15"
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
              {!looksOpen && LOOK_TAGS.length > LOOKS_VISIBLE && (
                <button
                  type="button"
                  onClick={() => setLooksOpen(true)}
                  className="border border-dashed border-ink/15 px-3 py-1 font-serif text-sm text-antique hover:border-antique"
                >
                  + {LOOK_TAGS.length - LOOKS_VISIBLE} more
                </button>
              )}
            </div>
          )}
          {studiosOnly && (
            <p className="mt-3.5 font-serif text-sm italic text-brown/60">
              Only operating photo studios in Seattle + Tacoma — choose a look instead to search the whole archive.
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-10 md:px-8">
        {shown.length === 0 ? (
          <p className="py-10 text-center font-serif italic text-brown/60">
            Nothing in this corner yet — try another look or city.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {shown.slice(0, limit).map((l) => {
              const credit = photoCredit(l);
              return (
              <div key={l.name}>
              <a href={l.url} target="_blank" rel="noreferrer" className="group block">
                {/* Thick white matte frame around every photo */}
                <div className="matte sh-matte transition-transform duration-300 group-hover:-translate-y-1">
                  <img
                    src={l.img}
                    alt={`${l.name} — ${l.city}`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="mt-3 flex items-baseline justify-between gap-3">
                  <h2 className="font-display text-xl leading-snug text-ink group-hover:text-antique">
                    {l.name}
                  </h2>
                  <span className="shrink-0 font-serif text-sm italic text-antique">→</span>
                </div>
                <p className="mt-0.5 label-tiny--xs uppercase tracking-[0.14em] text-brown/60">
                  {l.city}
                </p>
              </a>
                {credit ? (
                  <p className="mt-1 font-serif text-xs text-brown/60">
                    Photo:{" "}
                    <a href={credit.href} target="_blank" rel="noreferrer" className="underline decoration-ink/30 underline-offset-2 hover:text-oxblood">
                      {credit.text}
                    </a>
                  </p>
                ) : null}
                {"note" in l && l.note ? (
                  <p className="mt-1 font-serif text-sm italic text-brown/70">{(l as { note?: string }).note}</p>
                ) : null}
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {l.tags
                    .filter((t: string) => !["Studio", "Indoor", "Rental"].includes(t))
                    .slice(0, 4)
                    .map((t: string) => (
                      <span key={t} className="border border-ink/12 px-2 py-0.5 label-tiny--xs uppercase tracking-[0.12em] text-brown/70">
                        {t}
                      </span>
                    ))}
                </div>
              </div>
              );
            })}
          </div>
        )}

        {shown.length > limit ? (
          <div className="mt-10 text-center">
            <button type="button" className="sh-btn-fill" onClick={() => setLimit(limit + 24)}>
              Show more places
            </button>
            <p className="sh-body mt-3 text-sm">
              Showing {limit} of {shown.length}
            </p>
          </div>
        ) : null}

        <div className="sh-scout">
          <p className="eyebrow">Location scouting</p>
          <p className="sh-h2 mt-3">Not sure where yet?</p>
          <p className="sh-body mx-auto mt-3 max-w-xl">
            Tell us the feeling you want and we'll suggest two or three places that fit your season, your light and your people.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <Link to="/experience/$kind" params={{ kind: "couples" }} className="sh-btn-fill">
              Plan my session
            </Link>
            <Link to="/guides" className="sh-invite__alt">
              Browse the guides →
            </Link>
          </div>
        </div>

        <p className="mt-12 text-center font-serif text-sm italic text-brown/60">
          Real places around Seattle + Tacoma. Location photos are by other photographers,
          shared under Creative Commons licenses or by each studio and venue; tap a credit
          to see who made it and how it's licensed.
        </p>
        <HouseMark className="mx-auto mt-8 h-8 w-8 text-rose-deep" />
      </section>
    </ContentShell>
  );
}