"use client";

import { useState } from "react";

import { useNavigate } from "@tanstack/react-router";

import type { ExperienceKind } from "@/lib/experiences";
import { Heart } from "./marks";

const SAVE_KEY = "sunday-house-session";

export function ExperiencePage({ exp }: { exp: ExperienceKind }) {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [picked, setPicked] = useState<string[]>([]);
  const [saved, setSaved] = useState(false);

  const setAnswer = (label: string, value: string) =>
    setAnswers((a) => ({ ...a, [label]: value }));

  const save = (inquire: boolean) => {
    try {
      const payload = { kind: exp.kind, answers, picked, savedAt: Date.now() };
      localStorage.setItem(SAVE_KEY, JSON.stringify(payload));
      if (inquire) {
        const myHouse = JSON.parse(localStorage.getItem("sunday-house-my-house") ?? "{}");
        myHouse.kind = exp.houseType.toLowerCase().replace(/[^a-z]+/g, "-");
        myHouse.share = true;
        localStorage.setItem("sunday-house-my-house", JSON.stringify(myHouse));
      }
    } catch {
      // storage unavailable; still confirm
    }
    setSaved(true);
    if (inquire) {
      setTimeout(() => navigate({ to: "/my-house" }), 900);
    }
  };

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <div className="border border-ink/15 bg-ivory p-6 md:p-8">
          <p className="eyebrow">A few questions, asked gently</p>
          <div className="mt-5 space-y-6">
            {exp.questions.map((q) => (
              <label key={q.label} className="block">
                <span className="eyebrow">{q.label}</span>
                {q.options ? (
                  <select
                    value={answers[q.label] ?? ""}
                    onChange={(e) => setAnswer(q.label, e.target.value)}
                    className="mt-2 w-full border-b border-ink/20 bg-transparent py-2 font-serif text-lg text-ink focus:border-ink focus:outline-none"
                  >
                    <option value="">Choose…</option>
                    {q.options.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    value={answers[q.label] ?? ""}
                    onChange={(e) => setAnswer(q.label, e.target.value)}
                    placeholder={q.placeholder ?? "Tell us…"}
                    className="w-full border-b border-ink/20 bg-transparent py-2 font-serif text-lg text-ink placeholder:text-brown/40 focus:border-ink focus:outline-none"
                  />
                )}
              </label>
            ))}
          </div>

          {exp.aesthetics ? (
            <div className="mt-8">
              <p className="eyebrow">The feeling you want</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.aesthetics.map((a) => {
                  const on = picked.includes(a);
                  return (
                    <button
                      key={a}
                      type="button"
                      aria-pressed={on}
                      onClick={() =>
                        setPicked((p) => (on ? p.filter((x) => x !== a) : [...p, a]))
                      }
                      className={
                        on
                          ? "border border-rose-deep/50 bg-rose-paper px-4 py-1.5 font-serif text-sm text-ink"
                          : "border border-ink/15 px-4 py-1.5 font-serif text-sm text-brown hover:border-ink/40"
                      }
                    >
                      {a}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => save(false)}
              className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3 label-xs text-ink hover:bg-ink hover:text-ivory"
            >
              <Heart filled={saved} className={`h-4 w-4 ${saved ? "text-rose-deep" : "text-rose-deep"}`} />
              {saved ? "Saved to My House" : exp.cta.save}
            </button>
            <button
              type="button"
              onClick={() => save(true)}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 label-xs text-ivory hover:bg-rose-deep"
            >
              {exp.cta.inquire} →
            </button>
          </div>
          {saved ? (
            <p className="mt-4 font-serif italic text-brown/70">
              {exp.houseNote} Kept quietly in your own browser.
            </p>
          ) : null}
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="border border-ink/15 bg-rose-paper/70 p-6 md:p-8">
          <p className="eyebrow">From the House</p>
          <ul className="mt-4 space-y-4">
            {exp.recommendations.map((r) => (
              <li key={r} className="flex items-baseline gap-3 border-b border-ink/10 pb-3">
                <Heart className="h-4 w-4 shrink-0 text-rose-deep" />
                <span className="font-serif leading-relaxed text-brown">{r}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 border border-ink/15 bg-paper/40 p-6">
          <p className="eyebrow">Keep it in My House</p>
          <p className="mt-3 font-serif leading-relaxed text-brown">
            {exp.houseType} adapts to why you came through the door: your lists,
            saved places, inspiration and notes, all private.
          </p>
        </div>
      </div>
    </div>
  );
}