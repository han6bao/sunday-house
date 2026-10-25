"use client";

import { useMemo, useState, type ReactNode } from "react";

import { Link } from "@tanstack/react-router";

import { PLAN_GROUPS, WEDDING_FEELINGS, type PlanGroup } from "@/lib/plan-groups";
import { Heart } from "./marks";

const BUDGETS = ["Under $15k", "$15k - $25k", "$25k - $40k", "$40k - $60k", "$60k+"];

const BOOKED_OPTIONS = [
  "Venue",
  "Photography",
  "Film / Videography",
  "Planner / Coordinator",
  "Catering",
  "Florist",
  "DJ / Band",
  "Officiant",
  "Dress / Suit",
  "Wedding rings",
];

const STEPS = [
  { n: "01", label: "Your Day" },
  { n: "02", label: "What's Booked" },
  { n: "03", label: "What You Need" },
  { n: "04", label: "Your House" },
] as const;

/** Short, human labels for the "Still looking for…" line. */
const SHORT: Record<string, string> = {
  "Wedding Planner": "Planner",
  "Full-Service Planner": "Planner",
  "Partial Planner": "Planner",
  "Month-of Coordinator": "Coordinator",
  "Day-of Coordinator": "Coordinator",
  "Wedding Photography": "Photography",
  "Videography": "Film",
  "Wedding Film": "Film",
  "Content Creator / Social Wedding Content": "Content creator",
  "Ceremony Venue": "Venue",
  "Reception Venue": "Venue",
  "Photography + Film": "Photography",
  "Florals": "Florals",
  "Catering": "Catering",
  "DJ": "DJ",
  "Band": "Band",
  "Wedding Website": "Website",
  "Wedding Websites": "Website",
  "Invitations": "Invitations",
  "Officiant": "Officiant",
  "Hair": "Hair",
  "Makeup": "Makeup",
  "Wedding Dress / Bridalwear": "Dress",
  "Lighting": "Lighting",
};

/** Where we'd point someone, per group. */
const RESOURCES: Record<string, { label: string; href: string }[]> = {
  planning: [
    { label: "Photo Locations", href: "/locations" },
  ],
  venue: [
    { label: "Photography location guides", href: "/locations" },
  ],
  "photo-film": [
    { label: "Sunday House photography", href: "/photography" },
    { label: "Wedding films", href: "/film" },
    { label: "Wedding content creation", href: "/content-creation" },
  ],
  "food-drink": [
    { label: "Photo Locations", href: "/locations" },
  ],
  "design-decor": [
    { label: "Made for your day", href: "/custom-pieces" },
  ],
  "style-beauty": [{ label: "Sunday House photography", href: "/photography" }],
  music: [{ label: "Wedding films", href: "/film" }],
  "paper-digital": [
    { label: "Wedding websites", href: "/wedding-websites" },
    { label: "Made for your day — paper + digital", href: "/custom-pieces" },
  ],
  ceremony: [{ label: "Photo Locations", href: "/locations" }],
  guests: [{ label: "Photography location guides", href: "/locations" }],
  events: [{ label: "Photo Locations", href: "/locations" }],
  cultural: [{ label: "Photo Locations", href: "/locations" }],
  other: [{ label: "Photo Locations", href: "/locations" }],
};

export function PlanBuilder() {
  const [step, setStep] = useState(0);
  const [season, setSeason] = useState("");
  const [city, setCity] = useState("");
  const [guests, setGuests] = useState("");
  const [budget, setBudget] = useState("");
  const [setting, setSetting] = useState("");
  const [feeling, setFeeling] = useState<string[]>([]);
  const [booked, setBooked] = useState<string[]>([]);
  const [bookedNote, setBookedNote] = useState("");
  const [need, setNeed] = useState<string[]>([]);
  const [otherNeed, setOtherNeed] = useState("");
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set(["planning", "photo-film"]));

  const toggle = (item: string) =>
    setNeed((list) => (list.includes(item) ? list.filter((k) => k !== item) : [...list, item]));

  const toggleFeeling = (f: string) =>
    setFeeling((list) => (list.includes(f) ? list.filter((k) => k !== f) : [...list, f]));

  const toggleBooked = (b: string) =>
    setBooked((list) => (list.includes(b) ? list.filter((k) => k !== b) : [...list, b]));

  const toggleGroup = (key: string) =>
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  const needs = useMemo(() => PLAN_GROUPS.filter((g) => g.items.some((i) => need.includes(i))), [need]);

  const stillLooking = useMemo(() => {
    const seen = new Set<string>();
    const out: string[] = [];
    for (const item of need) {
      const short = SHORT[item] ?? item;
      if (!seen.has(short)) {
        seen.add(short);
        out.push(short);
      }
      if (out.length >= 4) break;
    }
    return out;
  }, [need]);

  const startHere = useMemo(() => {
    const seen = new Set<string>();
    const out: { label: string; href: string }[] = [];
    for (const group of needs) {
      for (const r of RESOURCES[group.key] ?? []) {
        if (!seen.has(r.href)) {
          seen.add(r.href);
          out.push(r);
        }
        if (out.length >= 3) break;
      }
      if (out.length >= 3) break;
    }
    return out;
  }, [needs]);

  const readyForHouse = (step >= 2 && need.length > 0) || (step >= 1 && booked.length > 0);

  return (
    <div className="border border-ink/15 bg-ivory">
      {/* Step indicator */}
      <div className="flex items-center gap-2 overflow-x-auto border-b border-ink/15 px-4 py-3 md:px-6">
        {STEPS.map((s, i) => {
          const active = step === i;
          const done = i < step;
          return (
            <button
              key={s.n}
              type="button"
              onClick={() => setStep(i)}
              aria-current={active ? "step" : undefined}
              className={`flex shrink-0 items-baseline gap-1.5 rounded-full px-3.5 py-1.5 transition-colors ${
                active
                  ? "bg-ink text-ivory"
                  : done
                    ? "text-antique hover:bg-rose-paper/60"
                    : "text-brown/60 hover:bg-rose-paper/40"
              }`}
            >
              <span className="label-xs opacity-70">{s.n}</span>
              <span className="font-serif text-sm">{s.label}</span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-10 p-5 md:p-8 lg:grid-cols-5">
        {/* Step body */}
        <div className="lg:col-span-3">
          {step === 0 && (
            <StepIntro
              season={season}
              setSeason={setSeason}
              city={city}
              setCity={setCity}
              guests={guests}
              setGuests={setGuests}
              budget={budget}
              setBudget={setBudget}
              setting={setting}
              setSetting={setSetting}
              feeling={feeling}
              toggleFeeling={toggleFeeling}
            />
          )}
          {step === 1 && (
            <div>
              <StepHead eyebrow="What's Booked" title="What already has its place on the day?" note="Select the big pieces that are locked in — everything else you still need will follow." />
              <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {BOOKED_OPTIONS.map((b) => {
                  const on = booked.includes(b);
                  return (
                    <button
                      key={b}
                      type="button"
                      aria-pressed={on}
                      onClick={() => toggleBooked(b)}
                      className={`flex items-center gap-2 border px-3 py-2.5 text-left font-serif text-[0.92rem] transition-colors ${
                        on
                          ? "border-rose-deep/50 bg-rose-paper text-ink"
                          : "border-ink/15 text-brown hover:border-ink/40"
                      }`}
                    >
                      <Heart filled={on} className={`h-4 w-4 shrink-0 ${on ? "text-rose-deep" : "text-rose-deep"}`} />
                      {b}
                    </button>
                  );
                })}
              </div>
              <div className="mt-6">
                <label className="block">
                  <span className="eyebrow">Anything else already booked?</span>
                  <input
                    value={bookedNote}
                    onChange={(e) => setBookedNote(e.target.value)}
                    placeholder="e.g. the venue + photographer, the rest is open"
                    className="mt-2 w-full border-b border-ink/20 bg-transparent py-2 font-serif text-lg text-ink placeholder:text-brown/40 focus:border-ink focus:outline-none"
                  />
                </label>
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <StepHead eyebrow="What You Need" title="What's still missing from the day?" note="Tap a card to open its list. Choose what's on your list — it instantly appears in Your Day So Far." />
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {PLAN_GROUPS.map((group) => {
                  const on = group.items.some((i) => need.includes(i));
                  const open = openGroups.has(group.key);
                  const chosen = group.items.filter((i) => need.includes(i)).length;
                  return (
                    <div
                      key={group.key}
                      className={`border transition-colors ${
                        on ? "border-rose-deep/40 bg-rose-paper/30" : open ? "border-ink/15 bg-ivory" : "border-ink/15 bg-ivory"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleGroup(group.key)}
                        aria-expanded={open}
                        className="flex w-full items-center gap-3 p-4 text-left"
                      >
                        <Heart filled={on} className={`h-5 w-5 shrink-0 ${on ? "text-rose-deep" : "text-rose-deep"}`} />
                        <span className="flex-1 font-display text-lg leading-tight text-ink">{group.label}</span>
                        {chosen > 0 ? (
                          <span className="rounded-full bg-rose-deep px-2 py-0.5 font-serif text-xs text-ivory">{chosen}</span>
                        ) : null}
                        <span className={`font-serif text-xl text-antique transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
                      </button>
                      {open ? (
                        <div className="grid grid-cols-1 gap-2 border-t border-ink/15 p-3">
                          {group.items.map((item) => {
                            const onItem = need.includes(item);
                            return (
                              <button
                                key={item}
                                type="button"
                                aria-pressed={onItem}
                                onClick={() => toggle(item)}
                                className={`flex items-center gap-2 border px-2.5 py-2 text-left font-serif text-[0.9rem] transition-colors ${
                                  onItem
                                    ? "border-rose-deep/50 bg-rose-paper text-ink"
                                    : "border-ink/15 text-brown hover:border-ink/40"
                                }`}
                              >
                                <Heart filled={onItem} className={`h-3.5 w-3.5 shrink-0 ${onItem ? "text-rose-deep" : "text-rose-deep"}`} />
                                {item}
                              </button>
                            );
                          })}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>

              <div id="other-needs" className="mt-6 border border-rose-deep/40 bg-rose-paper/40 p-5">
                <h4 className="font-display text-xl text-ink">Something we haven't thought of</h4>
                <p className="mt-2 font-serif italic text-brown/70">
                  Unique traditions, unusual vendors, cultural elements, custom details — anything not on the cards.
                </p>
                <textarea
                  value={otherNeed}
                  onChange={(e) => setOtherNeed(e.target.value)}
                  placeholder="Type here…"
                  aria-label="Something we haven't thought of"
                  className="mt-3 w-full border border-ink/15 bg-ivory p-3 font-serif text-ink placeholder:text-brown/40 focus:border-ink focus:outline-none"
                  rows={2}
                />
                <button
                  type="button"
                  onClick={() => {
                    if (!otherNeed.trim()) return;
                    setNeed((list) => [...list, otherNeed.trim()]);
                    setOtherNeed("");
                  }}
                  className="mt-3 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 label-xs text-ivory hover:bg-antique"
                >
                  <Heart className="h-4 w-4 text-rose-deep" /> Add to my list
                </button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <StepHead eyebrow="Your House" title="Keep this somewhere safe." note="Your day, your list and where we'd start — saved privately in My House, yours to come back to as the day takes shape." />
              <div className="mt-6 space-y-3 border border-ink/15 bg-paper/40 p-6">
                <Row label="Your day" value={[season, city, guests ? `~${guests} guests` : "", budget, setting].filter(Boolean).join(" · ") || "Not yet told"} />
                <Row label="The feeling" value={feeling.join(", ") || "Still figuring it out"} />
                <Row label="Already booked" value={[...booked, bookedNote].filter(Boolean).join(", ") || "Nothing yet"} />
                <Row
                  label="Still looking for"
                  value={stillLooking.length ? stillLooking.join(", ") : "The whole list, for now"}
                />
              </div>
              <div className="mt-6 border border-ink/15 bg-rose-paper/50 p-6 text-center">
                <p className="font-serif text-lg italic leading-relaxed text-ink">
                  Save your plan, come back to it, and keep adding
                  as your day takes shape.
                </p>
                <Link
                  to="/my-house"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 label-sm font-medium text-ivory hover:bg-antique"
                >
                  <Heart className="h-4 w-4 text-rose-deep" /> Open My House
                </Link>
                <p className="mt-3 label-xs text-brown/60">
                  Kept privately on your own device, nothing is shared until you choose.
                </p>
              </div>
            </div>
          )}

          {/* Step nav */}
          <div className="mt-8 flex items-center justify-between border-t border-ink/15 pt-5">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="inline-flex items-center gap-2 border border-ink/25 px-5 py-2.5 label-xs text-ink transition-colors hover:bg-ink hover:text-ivory disabled:cursor-not-allowed disabled:opacity-40"
            >
              ← Back
            </button>
            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep((s) => Math.min(3, s + 1))}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-2.5 label-xs font-medium text-ivory transition-colors hover:bg-rose-deep"
              >
                Continue →
              </button>
            ) : (
              <span className="label-xs text-brown/60">Done for now — we saved your place.</span>
            )}
          </div>
        </div>

        {/* Your Day So Far — sticky live panel */}
        <aside className="lg:col-span-2">
          <div className="lg:sticky lg:top-8">
            <div className="border border-ink/15 bg-rose-paper/40 p-6">
              <p className="eyebrow">Your Day So Far</p>
              <div className="mt-4 space-y-2.5 font-serif text-[1.02rem] leading-relaxed text-ink">
                <p>{season || "A date"} · {city || "Somewhere"}{guests ? ` · ~${guests} guests` : ""}</p>
                <p className="text-brown">{feeling.join(", ") || "The feeling, still forming"}</p>
                {setting ? <p className="text-brown">{setting} · {budget || "budget, open"}</p> : null}
                {booked.length || bookedNote ? (
                  <p className="text-brown">Booked: {[...booked, bookedNote].filter(Boolean).join(", ")}</p>
                ) : null}
                {stillLooking.length ? (
                  <p className="text-rose-deep">Still looking for: {stillLooking.join(", ")}</p>
                ) : (
                  <p className="text-brown/70">Choose what you're missing and we'll point you somewhere good.</p>
                )}
              </div>

              {startHere.length > 0 ? (
                <div className="mt-6 border-t border-ink/15 pt-5">
                  <p className="font-display text-lg text-ink">Here's where we'd start →</p>
                  <ul className="mt-3 space-y-2">
                    {startHere.map((r) => (
                      <li key={r.href}>
                        <Link
                          to={r.href}
                          className="sh-textlink"
                        >
                          {r.label}
                          <span className="text-antique">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="mt-6 border-t border-ink/15 pt-4">
                <p className="font-serif italic text-brown/80">
                  Not a planning company — a house that helps you figure out what comes next.
                </p>
              </div>
            </div>

            {/* Save CTA — appears once there's something to keep */}
            {readyForHouse ? (
              <div className="mt-4 border border-ink/15 bg-ivory p-5">
                <p className="font-display text-lg text-ink">Keep this somewhere safe.</p>
                <p className="mt-2 font-serif text-sm leading-relaxed text-brown">
                  Save your plan and come back to it as your day takes shape.
                </p>
                <Link
                  to="/my-house"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-2.5 label-xs text-ivory hover:bg-antique"
                >
                  <Heart className="h-4 w-4 text-rose-deep" /> Open My House
                </Link>
              </div>
            ) : null}
          </div>
        </aside>
      </div>
    </div>
  );
}

function StepHead({ eyebrow, title, note }: { eyebrow: string; title: string; note: string }) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl leading-tight text-ink">{title}</h2>
      <p className="mt-3 max-w-xl font-serif italic leading-relaxed text-brown/80">{note}</p>
    </div>
  );
}

function StepIntro({
  season,
  setSeason,
  city,
  setCity,
  guests,
  setGuests,
  budget,
  setBudget,
  setting,
  setSetting,
  feeling,
  toggleFeeling,
}: {
  season: string;
  setSeason: (v: string) => void;
  city: string;
  setCity: (v: string) => void;
  guests: string;
  setGuests: (v: string) => void;
  budget: string;
  setBudget: (v: string) => void;
  setting: string;
  setSetting: (v: string) => void;
  feeling: string[];
  toggleFeeling: (f: string) => void;
}) {
  return (
    <div>
      <StepHead
        eyebrow="Your Day"
        title="Tell us a little about the day."
        note="No wrong answers — the vaguer the better, especially at the start. We'll organize the rest."
      />
      <div className="mt-6 space-y-6">
        <Field label="Wedding date or approximate season">
          <input
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            placeholder="e.g. June next summer, or late fall"
            className="w-full border-b border-ink/20 bg-transparent py-2 font-serif text-lg text-ink placeholder:text-brown/40 focus:border-ink focus:outline-none"
          />
        </Field>
        <Field label="Location">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="e.g. Tacoma, Seattle, Gig Harbor"
            className="w-full border-b border-ink/20 bg-transparent py-2 font-serif text-lg text-ink placeholder:text-brown/40 focus:border-ink focus:outline-none"
          />
        </Field>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Guest count">
            <input
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              placeholder="e.g. 80"
              className="w-full border-b border-ink/20 bg-transparent py-2 font-serif text-lg text-ink placeholder:text-brown/40 focus:border-ink focus:outline-none"
            />
          </Field>
          <Field label="Approximate budget">
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full border-b border-ink/20 bg-transparent py-2 font-serif text-lg text-ink focus:border-ink focus:outline-none"
            >
              <option value="">Choose a range</option>
              {BUDGETS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <Field label="Indoor / outdoor">
          <select
            value={setting}
            onChange={(e) => setSetting(e.target.value)}
            className="w-full border-b border-ink/20 bg-transparent py-2 font-serif text-lg text-ink focus:border-ink focus:outline-none"
          >
            <option value="">What feels right?</option>
            <option>Indoor</option>
            <option>Outdoor</option>
            <option>Both / covered</option>
          </select>
        </Field>
        <Field label="Overall wedding feeling">
          <div className="mt-3 flex flex-wrap gap-2">
            {WEDDING_FEELINGS.map((f) => {
              const on = feeling.includes(f);
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggleFeeling(f)}
                  className={
                    on
                      ? "border border-rose-deep/60 bg-rose-paper px-3.5 py-1.5 font-serif text-sm text-ink"
                      : "border border-ink/15 px-3.5 py-1.5 font-serif text-sm text-brown hover:border-ink/40"
                  }
                >
                  {f}
                </button>
              );
            })}
          </div>
        </Field>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="sm:flex sm:items-baseline sm:gap-4">
      <span className="label-xs w-36 shrink-0 text-antique">{label}</span>
      <span className="mt-0.5 block font-serif text-base text-ink sm:mt-0">{value}</span>
    </div>
  );
}