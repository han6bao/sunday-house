"use client";

import { useEffect, useState } from "react";
import { pageHead } from "@/lib/seo";

import { createFileRoute, Link } from "@tanstack/react-router";

import { ContentShell } from "@/components/house/content-shell";
import { Heart, HouseMark } from "@/components/house/marks";
import { HOUSE_PRODUCTS, type HouseProduct } from "@/lib/house-products";

const STORAGE_KEY = "sunday-house-my-house";

const LAUNCH_IDS = ["frame", "album", "print"];

type Saved = { category: string; name: string; url: string; kind?: "object"; objectId?: string };

function loadSaved(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw) as { saved?: Saved[] };
    const names = new Set<string>();
    for (const s of parsed.saved ?? []) {
      if (s.kind === "object" && s.objectId) names.add(s.objectId);
      else names.add(s.name);
    }
    return names;
  } catch {
    return new Set();
  }
}

export const Route = createFileRoute("/house-objects")({
  head: () =>
    pageHead({
      title: "Wedding Albums, Frames + Prints | Sunday House",
      description:
        "Heirloom wedding albums, framed photographs and fine-art prints from Sunday House — because your photographs shouldn't live in your camera roll.",
      path: "/house-objects",
    }),
  component: HouseObjects,
});

export default function HouseObjects() {
  const [open, setOpen] = useState<string | null>("frame");
  const [saved, setSaved] = useState<Set<string>>(loadSaved);

  useEffect(() => {
    setSaved(loadSaved());
  }, []);

  const toggleSave = (p: HouseProduct) => {
    setSaved((prev) => {
      const key = p.id;
      const next = new Set(prev);
      const was = next.has(key);
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        const parsed = raw ? (JSON.parse(raw) as { saved?: Saved[] }) : {};
        const list = parsed.saved ?? [];
        const filtered = list.filter((s) => !(s.kind === "object" && s.objectId === p.id));
        if (!was) {
          filtered.push({
            kind: "object",
            objectId: p.id,
            category: "House Objects",
            name: p.name,
            url: "/house-objects",
          });
        }
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...parsed, saved: filtered }));
      } catch {
        // storage unavailable; keep in memory
      }
      if (was) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const objects = HOUSE_PRODUCTS.filter((p) => LAUNCH_IDS.includes(p.id));

  return (
    <ContentShell path="/house-objects" breadcrumb={[{ name: "House Objects", path: "/house-objects" }]}>
      {/* Intro — quiet, like the other pages */}
      <section className="sh-wrap pt-[clamp(3rem,7vw,6rem)] text-center">
        <p className="sh-script">Made to be held.</p>
        <h1 className="sh-h1 mx-auto mt-3 max-w-3xl">
          Frames, albums <em>&amp; prints</em>.
        </h1>
        <p className="sh-lede mx-auto mt-5 max-w-xl">
          The photographs worth keeping, off the phone and into your hands.
        </p>
      </section>

      {/* The three finished objects */}
      <section className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 md:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {objects.map((p) => (
            <ObjectCard
              key={p.id}
              product={p}
              saved={saved.has(p.id)}
              onSave={() => toggleSave(p)}
              open={open === p.id}
              onToggle={() => setOpen(open === p.id ? null : p.id)}
            />
          ))}
        </div>

        {/* More objects are coming home soon */}
        <div className="mt-14 border border-ink/15 bg-paper/40 p-8 text-center md:p-10">
          <HouseMark className="mx-auto h-9 w-9 text-rose-deep" />
          <p className="sh-script mt-4 ">More objects are coming home soon.</p>
          <p className="mx-auto mt-3 max-w-xl font-serif text-lg leading-relaxed text-brown">
            Folios, parent albums, announcements and wall collections are being
            finished in the House — we'll open them here as they're ready.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a href="mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" className="sh-btn-fill">
              Inquire →
            </a>
            <Link
              to="/my-house"
              className="sh-invite__alt self-center"
            >
              <Heart className="h-4 w-4 text-rose-deep" /> Open My House
            </Link>
          </div>
          <p className="mt-5 font-serif text-sm italic text-brown/60">
            Objects you save with the heart appear in My House.
          </p>
        </div>
      </section>
    </ContentShell>
  );
}

function ObjectCard({
  product,
  saved,
  onSave,
  open,
  onToggle,
}: {
  product: HouseProduct;
  saved: boolean;
  onSave: () => void;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <article className={`group flex flex-col border border-ink/15 bg-ivory transition-colors hover:bg-rose-paper/30`}>
      {/* Image — the dominant part of the card */}
      <div className="relative p-4 pb-0">
        <div
          className={`relative overflow-hidden border border-ink/15 bg-paper ${
            product.id === "album" ? "aspect-[4/3]" : "aspect-[3/4]"
          }`}
        >
          <div className="absolute inset-2.5 border border-ink/15 md:inset-3" aria-hidden="true" />
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
            <img src="/assets/brand/monogram.png" alt="" className="w-8 opacity-75" />
            <p className="label-tiny--sm uppercase tracking-[0.16em] text-antique">
              {product.name} · made to order
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={onSave}
          aria-pressed={saved}
          title={saved ? "Saved in My House" : "Save to My House"}
          aria-label={saved ? "Remove from My House" : "Save to My House"}
          className={`absolute right-7 top-7 inline-flex h-9 w-9 items-center justify-center rounded-full border transition-all ${
            saved
              ? "border-rose-deep/60 bg-rose-deep text-ivory"
              : "border-ink/15 bg-ivory/95 text-rose-deep hover:bg-rose-paper"
          }`}
        >
          <Heart filled={saved} className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h2 className="font-display text-xl text-ink md:text-2xl">{product.name}</h2>
        <p className="mt-1 font-serif italic text-rose-deep">{product.tagline}</p>

        {open ? (
          <div className="mt-3 border-t border-ink/15 pt-3">
            <p className="font-serif leading-relaxed text-brown">{product.description}</p>
            <ul className="mt-2 space-y-1">
              {product.details.slice(0, 2).map((d) => (
                <li key={d} className="flex items-baseline gap-2 font-serif text-sm text-brown/80">
                  <span className="text-rose-deep">•</span>
                  {d}
                </li>
              ))}
            </ul>
            <p className="mt-3 label-tiny--sm uppercase tracking-[0.14em] text-brown/60">
              Made to order · inquire · {product.variants.join(" · ")}
            </p>
          </div>
        ) : null}

        <button
          type="button"
          onClick={onToggle}
          className="mt-auto inline-flex w-fit items-center gap-2 pt-4 font-serif text-base italic text-ink transition-colors hover:text-antique"
        >
          {open ? "Close object" : "View object"}
          <span className={`transition-transform duration-300 ${open ? "-rotate-45" : ""}`}>→</span>
        </button>
      </div>
    </article>
  );
}