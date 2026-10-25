"use client";

import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";

import { Link } from "@tanstack/react-router";

import { Heart } from "./marks";

const STORAGE_KEY = "sunday-house-my-house";

type HouseKind = {
  key: string;
  label: string;
  note: string;
  welcome: (names: string, about: string) => string;
  dateLabel: string | null;
  checklist: string[];
  madeFor: { label: string; to: string }[];
};

const HOUSE_KINDS: HouseKind[] = [
  {
    key: "wedding",
    label: "Wedding House",
    note: "Checklist, budget, timeline, saved venues and vendors, inspiration and notes.",
    welcome: (names, about) =>
      names ? `Welcome home, ${names}.` : about ? `Welcome home.` : "Welcome home.",
    dateLabel: "Wedding date",
    checklist: [],
    madeFor: [
      { label: "Wedding Website", to: "/wedding-websites" },
      { label: "Save the Dates", to: "/custom-pieces" },
      { label: "Menus + Signage", to: "/custom-pieces" },
      { label: "Thank-you Cards", to: "/custom-pieces" },
    ],
  },
  {
    key: "senior",
    label: "Senior + Graduate House",
    note: "Saved locations, session inspiration, outfits, your questionnaire and saved guides.",
    welcome: (names) => (names ? `Welcome home, ${names}.` : "Welcome home."),
    dateLabel: null,
    checklist: [
      "Choose a style that feels like you",
      "Choose outfit options",
      "Scout locations with the House",
      "Pick a season",
      "Book the date",
      "Save inspiration to your session board",
      "Explore prints, frames or albums",
    ],
    madeFor: [
      { label: "Senior / Graduation Cards", to: "/custom-pieces" },
      { label: "Announcements", to: "/custom-pieces" },
    ],
  },
  {
    key: "family",
    label: "Family House",
    note: "Saved locations, session info, outfits, family notes and wall collection planning.",
    welcome: (names) => (names ? `Welcome home, ${names}.` : "Welcome home."),
    dateLabel: null,
    checklist: [
      "Choose a season that fits your family",
      "Choose indoor, outdoor or studio",
      "Save locations for the session",
      "Plan outfits together",
      "Choose candid, formal or a mix",
      "Explore prints, wall collections or albums",
    ],
    madeFor: [
      { label: "Holiday Cards", to: "/custom-pieces" },
    ],
  },
  {
    key: "maternity",
    label: "Maternity + Newborn House",
    note: "Session plan, due dates, inspiration and print wishes.",
    welcome: (names) => (names ? `Welcome home, ${names}.` : "Welcome home."),
    dateLabel: "Due date",
    checklist: [
      "Suggested maternity timing",
      "Newborn session planning",
      "Choose studio, home or outdoor",
      "Wardrobe ideas",
      "Family involvement",
      "Prints / albums",
    ],
    madeFor: [
      { label: "Birth Announcements", to: "/custom-pieces" },
    ],
  },
  {
    key: "couples",
    label: "Couples House",
    note: "Your story, saved locations, inspiration and session plans.",
    welcome: (names) => (names ? `Welcome home, ${names}.` : "Welcome home."),
    dateLabel: null,
    checklist: [
      "Choose what we're celebrating",
      "Pick the location + feeling",
      "Save inspiration for the look",
      "Explore the best time of day for your vision",
      "Plan your outfit(s)",
    ],
    madeFor: [
      { label: "Thank-you Cards", to: "/custom-pieces" },
    ],
  },
  {
    key: "creative",
    label: "Creative House",
    note: "Moodboards, concept notes, locations and the session plan.",
    welcome: (names) => (names ? `Welcome home, ${names}.` : "Welcome home."),
    dateLabel: null,
    checklist: [
      "Gather references (films, songs, paintings, photography)",
      "Choose an overall aesthetic",
      "Build a moodboard",
      "Plan wardrobe / hair / makeup",
      "Props + location + set ideas",
      "Book the date",
    ],
    madeFor: [
      { label: "Keepsake Pieces", to: "/custom-pieces" },
    ],
  },
  {
    key: "event",
    label: "Gathering House",
    note: "Event details, guest notes, inspiration and session plans.",
    welcome: (names) => (names ? `Welcome home, ${names}.` : "Welcome home."),
    dateLabel: "Event date",
    checklist: [
      "Note the date, time and location",
      "Decide photos, film or both",
      "Save the feeling you want",
      "Choose the coverage window",
      "Plan the celebration / family portrait moment",
    ],
    madeFor: [
      { label: "Event Keepsakes", to: "/custom-pieces" },
    ],
  },
];

type Saved = { category: string; name: string; url: string; kind?: "object"; objectId?: string; };

type SavedObject = Saved & { kind: "object"; objectId: string };

type ShareState = {
  step: "idle" | "ready" | "sent";
  checklists: boolean;
  notes: boolean;
  savedVendors: boolean;
  date: boolean;
};

type State = {
  kind: string;
  names: string;
  about: string;
  date: string;
  checklist: string[];
  customItems: string[];
  notes: string;
  saved: Saved[];
  share: ShareState;
};

function load(): State {
  if (typeof window === "undefined") {
    return {
      kind: "wedding",
      names: "",
      about: "",
      date: "",
      checklist: [],
      customItems: [],
      notes: "",
      saved: [],
      share: { step: "idle", checklists: false, notes: false, savedVendors: false, date: false },
    };
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<State>;
      return {
        kind: parsed.kind ?? "wedding",
        names: parsed.names ?? "",
        about: parsed.about ?? "",
        date: parsed.date ?? "",
        checklist: parsed.checklist ?? [],
        customItems: parsed.customItems ?? [],
        notes: parsed.notes ?? "",
        saved: parsed.saved ?? [],
        share: {
          step: parsed.share?.step ?? "idle",
          checklists: parsed.share?.checklists ?? false,
          notes: parsed.share?.notes ?? false,
          savedVendors: parsed.share?.savedVendors ?? false,
          date: parsed.share?.date ?? false,
        },
      };
    }
  } catch {
    // ignore malformed storage
  }
  return {
    kind: "wedding",
    names: "",
    about: "",
    date: "",
    checklist: [],
    customItems: [],
    notes: "",
    saved: [],
    share: { step: "idle", checklists: false, notes: false, savedVendors: false, date: false },
  };
}

export function MyHouse() {
  const [state, setState] = useState<State>(load);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // storage full or unavailable; keep working in memory
    }
  }, [state]);

  const set = (patch: Partial<State>) => setState((s) => ({ ...s, ...patch }));

  const kind = HOUSE_KINDS.find((k) => k.key === state.kind) ?? HOUSE_KINDS[0];

  const switchKind = (key: string) => {
    const next = HOUSE_KINDS.find((k) => k.key === key);
    if (!next) return;
    set({
      kind: key,
      checklist: state.checklist.filter((c) => next.checklist.includes(c)),
    });
  };

  const toggleTask = (task: string) => {
    const on = state.checklist.includes(task);
    set({
      checklist: on ? state.checklist.filter((t) => t !== task) : [...state.checklist, task],
    });
  };

  const addCustom = (value: string) => {
    const v = value.trim();
    if (!v) return;
    set({ checklist: [...state.checklist, v], customItems: [...state.customItems, v] });
  };

  const removeCustom = (value: string) => {
    set({
      checklist: state.checklist.filter((t) => t !== value),
      customItems: state.customItems.filter((t) => t !== value),
    });
  };

  const days = (() => {
    if (!state.date) return null;
    const ms = new Date(state.date).getTime() - Date.now();
    return Math.ceil(ms / 86400000);
  })();

  const welcome = kind.welcome(state.names, state.about);

  const savedObjects = state.saved.filter((x): x is SavedObject => x.kind === "object" && !!x.objectId);
  const savedVenues = state.saved.filter((x) => x.kind !== "object");

  const removeObject = (objectId: string) =>
    set({ saved: state.saved.filter((x) => !(x.kind === "object" && x.objectId === objectId)) });

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      {/* Kind + welcome */}
      <div className="border border-ink/15 bg-paper/40 p-6 lg:col-span-7 md:p-8">
        <p className="eyebrow">This house is for</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {HOUSE_KINDS.map((k) => (
            <button
              key={k.key}
              type="button"
              onClick={() => switchKind(k.key)}
              aria-pressed={state.kind === k.key}
              className={
                state.kind === k.key
                  ? "border border-ink/25 bg-ink px-4 py-1.5 label-xs text-ivory"
                  : "border border-ink/15 px-4 py-1.5 label-xs text-brown hover:border-ink/15"
              }
            >
              {k.label}
            </button>
          ))}
        </div>
        <p className="mt-4 font-serif italic text-brown/70">{kind.note}</p>

        <div className="mt-8">
          <p className="eyebrow">Welcome home</p>
          <input
            value={state.names}
            onChange={(e) => set({ names: e.target.value })}
            placeholder={
              state.kind === "wedding"
                ? "e.g. Maya + Chris"
                : state.kind === "family"
                ? "Your Family Name"
                : state.kind === "creative"
                ? "Your Name"
                : "Your Names"
            }
            aria-label="Your name(s)"
            className="mt-2 w-full border-b border-ink/20 bg-transparent font-display text-3xl text-ink placeholder:text-brown/40 focus:border-ink/25 focus:outline-none md:text-4xl"
          />
          <p className="mt-3 font-serif italic text-brown/70">{welcome}</p>
        </div>

        {kind.dateLabel ? (
          <div className="mt-8 flex flex-wrap items-end gap-8">
            <label className="block">
              <span className="eyebrow">{kind.dateLabel}</span>
              <input
                type="date"
                value={state.date}
                onChange={(e) => set({ date: e.target.value })}
                className="mt-2 border-b border-ink/20 bg-transparent py-1 font-serif text-lg text-ink focus:border-ink/25 focus:outline-none"
              />
            </label>
            {days !== null ? (
              <div className="border border-ink/15 bg-ivory px-6 py-4 text-center">
                <p className="font-display text-4xl leading-none text-antique">{days}</p>
                <p className="mt-1 label-xs text-brown/60">Days to go</p>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>

      {/* Saved people */}
      <div className="border border-ink/15 bg-ivory p-6 lg:col-span-5 md:p-8">
        <p className="eyebrow">People + businesses you like</p>
        <form
          className="mt-4 flex flex-col gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const name = String(fd.get("name") ?? "").trim();
            const category = String(fd.get("category") ?? "").trim();
            const url = String(fd.get("url") ?? "").trim();
            if (!name) return;
            set({ saved: [...state.saved, { category, name, url }] });
            e.currentTarget.reset();
          }}
        >
          <div className="flex gap-2">
            <input
              name="name"
              placeholder="Business name"
              aria-label="Business name"
              className="w-full border-b border-ink/20 bg-transparent py-1 font-serif text-ink placeholder:text-brown/40 focus:border-ink/25 focus:outline-none"
            />
            <input
              name="category"
              placeholder="Category"
              aria-label="Category"
              className="w-32 border-b border-ink/20 bg-transparent py-1 font-serif text-ink placeholder:text-brown/40 focus:border-ink/25 focus:outline-none"
            />
          </div>
          <input
            name="url"
            placeholder="Website (optional)"
            aria-label="Website"
            className="w-full border-b border-ink/20 bg-transparent py-1 font-serif text-ink placeholder:text-brown/40 focus:border-ink/25 focus:outline-none"
          />
          <button
            type="submit"
            className="mt-1 sh-btn-fill w-fit"
          >
            Keep them
          </button>
        </form>
        {savedVenues.length ? (
          <ul className="mt-5 space-y-2">
            {savedVenues.map((s, i) => (
              <li key={i} className="flex items-baseline justify-between gap-3 border-b border-ink/10 pb-2">
                <div>
                  <p className="font-serif text-ink">{s.name}</p>
                  <p className="font-sans text-xs uppercase tracking-[0.12em] text-brown/50">{s.category}</p>
                </div>
                <div className="flex items-center gap-3">
                  {s.url ? (
                    <a href={s.url} target="_blank" rel="noreferrer" className="font-serif italic text-antique hover:text-ink">
                      visit
                    </a>
                  ) : null}
                  <button
                    type="button"
                    aria-label={`Remove ${s.name}`}
                    onClick={() =>
                      set({
                        saved: state.saved.filter(
                          (x) => !(x.kind !== "object" && x.name === s.name && x.url === s.url)
                        ),
                      })
                    }
                    className="text-brown/40 hover:text-ink"
                  >
                    ✕
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-5 font-serif italic text-brown/60">
            Keep the good people here as you find them.
          </p>
        )}
      </div>

      {/* Objects saved from the House */}
      <div className="lg:col-span-12">
        <div className="border border-ink/15 bg-rose-paper/30 p-6 md:p-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="eyebrow">Objects saved from the House</p>
              <h3 className="mt-2 font-display text-2xl text-ink">Hearts you've kept.</h3>
            </div>
          </div>

          {savedObjects.length ? (
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {savedObjects.map((obj) => (
                <li key={obj.objectId} className="flex items-center gap-4 border border-ink/15 bg-ivory p-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-ink/15 bg-paper/50">
                    <img src="/assets/brand/monogram.png" alt="" className="w-6 opacity-70" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-display text-lg leading-tight text-ink">{obj.name}</p>
                    <p className="mt-0.5 font-sans text-[0.6rem] uppercase tracking-[0.12em] text-brown/50">
                      {obj.category}
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label={`Remove ${obj.name} from My House`}
                    onClick={() => removeObject(obj.objectId)}
                    className="shrink-0 text-brown/40 transition-colors hover:text-ink"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-5 font-serif italic text-brown/60">
              Nothing kept yet — tap the heart on any House Object and it will
              wait for you here.
            </p>
          )}

          {savedVenues.length ? (
            <p className="mt-5 border-t border-ink/15 pt-4 font-serif text-sm italic text-brown/70">
              You've also saved {savedVenues.length}{" "}
              {savedVenues.length === 1 ? "person or business" : "people + businesses"} — they're kept
              in the panel above.
            </p>
          ) : null}
        </div>
      </div>

      {/* Checklist */}
      <div className="lg:col-span-7">
        <div className="border border-ink/15 bg-ivory p-6 pb-10 md:p-8 md:pb-12">
          <p className="eyebrow">Your checklist</p>
          <ul className="mt-5 space-y-1">
            {(kind.checklist.length ? [...kind.checklist, ...state.customItems] : state.customItems)
              .filter((item, index, arr) => arr.indexOf(item) === index)
              .map((task) => {
                const on = state.checklist.includes(task);
                const isCustom = state.customItems.includes(task);
                return (
                  <li key={task}>
                    <button
                      type="button"
                      aria-pressed={on}
                      onClick={() => toggleTask(task)}
                      className="flex w-full items-center gap-3 rounded px-2 py-2.5 text-left transition-colors hover:bg-paper/50"
                    >
                      <Heart
                        filled={on}
                        className={`h-5 w-5 shrink-0 ${on ? "text-rose-deep" : "text-rose-deep"}`}
                      />
                      <span className={`flex-1 font-serif text-lg ${on ? "text-brown/50 line-through" : "text-ink"}`}>
                        {task}
                      </span>
                      {isCustom ? (
                        <span
                          role="button"
                          tabIndex={0}
                          aria-label={`Remove ${task}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            removeCustom(task);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              e.stopPropagation();
                              removeCustom(task);
                            }
                          }}
                          className="shrink-0 px-1 text-sm text-brown/40 hover:text-ink"
                        >
                          ✕
                        </span>
                      ) : null}
                    </button>
                  </li>
                );
              })}
          </ul>

          <div className="mt-8 border-t border-ink/15 pt-6">
            <p className="eyebrow">Add something to your checklist</p>
            <AddItem
              onAdd={addCustom}
              placeholder="A tradition, a small custom detail, an errand…"
            />
          </div>
        </div>
      </div>

      {/* Notes + Made for you + Share */}
      <div className="lg:col-span-5">
        <div className="border border-ink/15 bg-paper/40 p-6 md:p-8">
          <p className="eyebrow">Notes</p>
          <textarea
            value={state.notes}
            onChange={(e) => set({ notes: e.target.value })}
            placeholder="Inspiration, timelines, ideas, whatever needs a quiet home."
            aria-label="Notes"
            className="mt-4 min-h-[9rem] w-full border border-ink/10 bg-ivory p-3 font-serif text-ink placeholder:text-brown/40 focus:border-ink/25 focus:outline-none"
          />
        </div>

        <div className="mt-6 border border-ink/15 bg-rose-paper/40 p-6 md:p-8">
          <p className="eyebrow">Made for you</p>
          <p className="mt-3 font-serif leading-relaxed text-brown">
            Custom pieces that carry your photographs further, designed by the House.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {kind.madeFor.map((m) => (
              <Link
                key={m.label}
                to={m.to}
                className="border border-ink/15 px-3.5 py-1.5 font-serif text-sm text-ink transition-colors hover:bg-ink hover:text-ivory"
              >
                {m.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="sh-boxed mt-6 text-center">
          <p className="eyebrow">Ready when you are</p>
          <p className="sh-h3 mt-3">Tell us about your day.</p>
          <p className="sh-body mx-auto mt-3 max-w-md">
            Everything on this page stays private in your own browser. When
            you're ready, send us your date and place and we'll reply
            personally within 24 hours.
          </p>
          <Link to="/experience/$kind" params={{ kind: "weddings" }} className="sh-btn-fill mt-6">
            Check your date
          </Link>
        </div>
      </div>
    </div>
  );
}

function AddItem({ onAdd, placeholder }: { onAdd: (v: string) => void; placeholder: string }) {
  const [value, setValue] = useState("");
  const submit = (e: FormEvent) => {
    e.preventDefault();
    onAdd(value);
    setValue("");
  };
  return (
    <form onSubmit={submit} className="mt-3 flex flex-col gap-2 sm:flex-row">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="flex-1 border-b border-ink/20 bg-transparent py-1.5 font-serif text-ink placeholder:text-brown/40 focus:border-ink/25 focus:outline-none"
      />
      <button
        type="submit"
        className="sh-invite__alt w-fit"
      >
        Add to my list
      </button>
    </form>
  );
}

export type { ReactNode as _ReactNodeRef };