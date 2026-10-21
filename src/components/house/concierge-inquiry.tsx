"use client";

import { useState } from "react";

import { sendInquiry } from "@/lib/api/inquiry.functions";

const CELEBRATING = [
  "A wedding",
  "An elopement",
  "Engagement or couples photos",
  "An anniversary",
  "Senior or graduate portraits",
  "Family or maternity",
  "A creative session",
  "A styled shoot",
];

const FEELINGS = [
  "Candlelit",
  "Golden hour",
  "Editorial",
  "Candid + documentary",
  "Classic + timeless",
  "Moody",
  "Bright + airy",
  "Cinematic",
  "Garden",
  "Waterfront",
  "City",
];

const STEPS = ["The occasion", "When + where", "The feeling", "You"];

/**
 * A calm, four-step inquiry. One question at a time, a personal promise at the
 * end, and a real delivery (database + email) behind it.
 */
export function ConciergeInquiry({ preset, wantsGuide: guidePreset = false }: { preset?: string; wantsGuide?: boolean }) {
  const [step, setStep] = useState(0);
  const [f, setF] = useState({
    celebrating: preset ?? "",
    date: "",
    place: "",
    feeling: [] as string[],
    notes: "",
    name: "",
    email: "",
    phone: "",
    heard: "",
    wantsGuide: guidePreset,
    website: "",
  });
  const [state, setState] = useState<"idle" | "sending" | "sent" | "fallback">("idle");
  const fallbackEmail = (import.meta as { env?: Record<string, string> }).env?.VITE_INQUIRY_EMAIL;

  const set = <K extends keyof typeof f>(k: K, v: (typeof f)[K]) => setF((x) => ({ ...x, [k]: v }));
  const canNext =
    (step === 0 && f.celebrating) || step === 1 || step === 2 || (step === 3 && f.name.trim() && /.+@.+\..+/.test(f.email));

  const submit = async () => {
    setState("sending");
    try {
      const res = (await sendInquiry({ data: f })) as { delivered?: boolean } | undefined;
      setState(res?.delivered ? "sent" : "fallback");
    } catch {
      setState("fallback");
    }
  };

  if (state === "sent") {
    return (
      <div className="sh-concierge sh-concierge--done" role="status">
        <p className="eyebrow">Received</p>
        <h2 className="sh-h2 mt-4">Thank you, {f.name.split(" ")[0]}.</h2>
        <p className="sh-lede mt-5 max-w-xl">
          We reply personally within 24 hours, often with a short voice note, so you can hear who's behind the camera.
          {f.wantsGuide ? " Your collections guide will come with it." : ""}
        </p>
        <p className="sh-body mt-6 max-w-xl">
          While you wait, look for an email from Sunday House, and check your spam folder just in case.
        </p>
      </div>
    );
  }

  if (state === "fallback") {
    return (
      <div className="sh-concierge sh-concierge--done" role="alert">
        <p className="eyebrow">Almost there</p>
        <h2 className="sh-h2 mt-4">Our inbox didn't catch that one.</h2>
        <p className="sh-lede mt-5 max-w-xl">
          {fallbackEmail ? (
            <>
              Please email us at <a className="underline underline-offset-4" href={`mailto:${fallbackEmail}`}>{fallbackEmail}</a> with your date and place, and we'll reply within 24 hours.
            </>
          ) : (
            "Please try again in a moment. Nothing you wrote has been lost."
          )}
        </p>
        <button type="button" className="hz-btn mt-8" onClick={() => setState("idle")}>
          Try again
        </button>
      </div>
    );
  }

  return (
    <form
      className="sh-concierge"
      onSubmit={(e) => {
        e.preventDefault();
        if (step < 3) {
          if (canNext) setStep(step + 1);
        } else if (canNext) {
          void submit();
        }
      }}
    >
      <div className="sh-concierge__progress" aria-hidden="true">
        {STEPS.map((s, i) => (
          <span key={s} className={i <= step ? "is-on" : ""} />
        ))}
      </div>
      <p className="eyebrow mt-6">
        {step + 1} of 4 · {STEPS[step]}
      </p>

      {step === 0 ? (
        <fieldset className="mt-5">
          <legend className="sh-h2">What are we celebrating?</legend>
          <div className="mt-7 flex flex-wrap gap-2">
            {CELEBRATING.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={f.celebrating === c}
                onClick={() => set("celebrating", c)}
                className={`sh-chip${f.celebrating === c ? " is-on" : ""}`}
              >
                {c}
              </button>
            ))}
          </div>
        </fieldset>
      ) : null}

      {step === 1 ? (
        <fieldset className="mt-5">
          <legend className="sh-h2">When, and where?</legend>
          <div className="mt-7 grid gap-7 md:grid-cols-2">
            <label className="block">
              <span className="sh-field-label">Date or season</span>
              <input id="inq-date" className="sh-field" value={f.date} onChange={(e) => set("date", e.target.value)} placeholder="e.g. June 2027, or late summer" />
            </label>
            <label className="block">
              <span className="sh-field-label">Venue or city</span>
              <input id="inq-place" className="sh-field" value={f.place} onChange={(e) => set("place", e.target.value)} placeholder="e.g. Tacoma, or still deciding" />
            </label>
          </div>
        </fieldset>
      ) : null}

      {step === 2 ? (
        <fieldset className="mt-5">
          <legend className="sh-h2">How should it feel?</legend>
          <p className="sh-body mt-3">Choose as many as you like.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {FEELINGS.map((c) => {
              const on = f.feeling.includes(c);
              return (
                <button
                  key={c}
                  type="button"
                  aria-pressed={on}
                  onClick={() => set("feeling", on ? f.feeling.filter((x) => x !== c) : [...f.feeling, c])}
                  className={`sh-chip${on ? " is-on" : ""}`}
                >
                  {c}
                </button>
              );
            })}
          </div>
          <label className="mt-8 block">
            <span className="sh-field-label">Anything else we should know?</span>
            <textarea id="inq-notes" className="sh-field" rows={3} value={f.notes} onChange={(e) => set("notes", e.target.value)} placeholder="Traditions, a second day, a story, a song…" />
          </label>
        </fieldset>
      ) : null}

      {step === 3 ? (
        <fieldset className="mt-5">
          <legend className="sh-h2">And you?</legend>
          <div className="mt-7 grid gap-7 md:grid-cols-2">
            <label className="block">
              <span className="sh-field-label">Your name</span>
              <input id="inq-name" className="sh-field" autoComplete="name" value={f.name} onChange={(e) => set("name", e.target.value)} required />
            </label>
            <label className="block">
              <span className="sh-field-label">Email</span>
              <input id="inq-email" className="sh-field" type="email" autoComplete="email" value={f.email} onChange={(e) => set("email", e.target.value)} required />
            </label>
            <label className="block">
              <span className="sh-field-label">Phone (optional)</span>
              <input id="inq-phone" className="sh-field" type="tel" autoComplete="tel" value={f.phone} onChange={(e) => set("phone", e.target.value)} />
            </label>
            <label className="block">
              <span className="sh-field-label">How did you find us?</span>
              <input id="inq-heard" className="sh-field" value={f.heard} onChange={(e) => set("heard", e.target.value)} placeholder="Instagram, a friend, Google…" />
            </label>
          </div>
          <label className="sh-check mt-8">
            <input id="inq-guide" type="checkbox" checked={f.wantsGuide} onChange={(e) => set("wantsGuide", e.target.checked)} />
            <span>Send me the full collections guide</span>
          </label>
          <label className="sh-honey" aria-hidden="true">
            Website
            <input id="inq-website" tabIndex={-1} autoComplete="off" value={f.website} onChange={(e) => set("website", e.target.value)} />
          </label>
        </fieldset>
      ) : null}

      <div className="sh-concierge__actions">
        <button type="submit" className="sh-btn-fill" disabled={!canNext || state === "sending"}>
          {step < 3 ? "Continue" : state === "sending" ? "Sending…" : "Send to Sunday House"}
        </button>
        {step > 0 ? (
          <button type="button" className="sh-invite__alt" onClick={() => setStep(step - 1)}>
            ← Back
          </button>
        ) : null}
      </div>
      <p className="sh-concierge__note">
        {step === 3 && !canNext
          ? "Add your name and email to send."
          : step === 0 && !canNext
            ? "Choose one to continue."
            : "We reply personally within 24 hours."}
      </p>
    </form>
  );
}
