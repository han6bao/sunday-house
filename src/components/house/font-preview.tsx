"use client";

import { useEffect, useState } from "react";

const THEMES = [
  { key: "instrument", label: "Instrument Serif", note: "fashion serif + Pinyon Script (site default)" },
  { key: "garamond", label: "EB Garamond", note: "classic elegant" },
  { key: "cormorant", label: "Cormorant", note: "dainty editorial" },
  { key: "marcellus", label: "Marcellus", note: "clean classical" },
  { key: "italiana", label: "Italiana", note: "thin high-fashion" },
];

const STORAGE_KEY = "sunday-house-font-theme-v3";

/** Floating font preview picker — swap the whole site's typeface live. */
export function FontPreview() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("instrument");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) apply(saved);
    } catch {
      // noop
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const apply = (key: string) => {
    setActive(key);
    document.documentElement.setAttribute("data-font-theme", key);
    try {
      window.localStorage.setItem(STORAGE_KEY, key);
    } catch {
      // noop
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[80]">
      {open ? (
        <div className="mb-3 w-64 overflow-hidden rounded-[14px] border border-ink/15 bg-white shadow-[0_18px_44px_rgb(90_55_51/0.16)]">
          <p className="border-b border-ink/15 px-4 py-2.5 label-xs text-brown/70">
            Fonts — whole site
          </p>
          <ul>
            {THEMES.map((t) => (
              <li key={t.key}>
                <button
                  type="button"
                  onClick={() => apply(t.key)}
                  className={`w-full px-4 py-3 text-left transition-colors hover:bg-rose-paper/40 ${
                    active === t.key ? "bg-rose-paper/60" : ""
                  }`}
                >
                  <span
                    className="block"
                    style={{
                      fontFamily:
                        t.key === "rintica" || t.key === "nikahan" || t.key === "aerilyn" || t.key === "beethoven" || t.key === "quadrian"
                          ? `var(--font-accent)`
                          : `var(--font-display)`,
                      fontSize: t.key === "rintica" || t.key === "nikahan" || t.key === "aerilyn" || t.key === "beethoven" || t.key === "quadrian" ? 26 : 24,
                      lineHeight: 1.1,
                    }}
                  >
                    {t.label}
                  </span>
                  <span className="mt-0.5 block font-serif text-xs italic text-brown/60">{t.note}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Preview fonts"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 bg-white font-serif text-lg text-ink shadow-[0_10px_26px_rgb(90_55_51/0.14)] transition-transform hover:scale-105"
      >
        Aa
      </button>
    </div>
  );
}