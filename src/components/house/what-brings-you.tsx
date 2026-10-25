"use client";

import { Link } from "@tanstack/react-router";

const DOORS = [
  {
    key: "wedding",
    head: "A Wedding",
    line: "We're getting married.",
    note: "Photography, film, websites, planning resources and content for the day.",
    to: "/weddings",
    photo: "/assets/gallery/sunset-couple.png",
    alt: "A couple watching the sunset, photographed by Sunday House",
  },
  {
    key: "season",
    head: "A Season of Life",
    line: "Portraits, families, graduates & more.",
    note: "Seniors, families, maternity, newborns, couples and the years' big moments.",
    to: "/photography",
    photo: "/assets/gallery/daisy.png",
    alt: "A delicate daisy, photographed by Sunday House",
  },
  {
    key: "else",
    head: "Something Else",
    line: "Film, events, creative work & custom pieces.",
    note: "Wedding websites, content creation, films, events and made-for-you pieces.",
    to: "/film",
    photo: "/assets/gallery/greenhouse.png",
    alt: "A quiet greenhouse moment, photographed by Sunday House",
  },
];

export function WhatBringsYou() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 md:px-8">
      <div className="grid gap-6 md:grid-cols-3">
        {DOORS.map((d) => (
          <Link
            key={d.key}
            to={d.to}
            className="group relative block overflow-hidden border border-ink/15 bg-ivory transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_rgb(90_55_51/0.14)]"
          >
            <div className="overflow-hidden">
              <img
                src={d.photo}
                alt={d.alt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <p className="label-tiny--xs uppercase tracking-[0.16em] text-antique">{d.head}</p>
              <p className="sh-script mt-2 ">{d.line}</p>
              <p className="mt-3 font-serif leading-relaxed text-brown">{d.note}</p>
              <span className="sh-textlink mt-4">
                Enter this room →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}