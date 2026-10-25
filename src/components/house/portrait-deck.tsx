"use client";

import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

export type DeckSlide = {
  kicker?: string;
  title?: ReactNode;
  body?: ReactNode;
  /** Optional full-bleed photo behind the words. */
  img?: { src: string; alt: string; position?: string; video?: string };
};

type DeckLink = { label: string; to: string; params?: Record<string, string> };

/**
 * Phones only: a portrait page told as full-screen slides you swipe through,
 * left to right — no scrolling. The first slide is the photograph with the
 * Sunday House mark over it; the rest carry the details; the last one books.
 */
export function PortraitDeck({
  cover,
  label,
  slides,
  primary,
  secondary,
  more,
}: {
  cover: { src: string; alt: string; position?: string; video?: string };
  label: string;
  slides: DeckSlide[];
  primary: DeckLink;
  secondary?: DeckLink;
  more?: DeckLink[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [at, setAt] = useState(0);
  const total = slides.length + 2;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const on = () => setAt(Math.round(el.scrollLeft / Math.max(el.clientWidth, 1)));
    el.addEventListener("scroll", on, { passive: true });
    return () => el.removeEventListener("scroll", on);
  }, []);

  const n = (i: number) => `${String(i + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  return (
    <section className={`sh-deck${at === 0 ? " is-cover" : ""}`} aria-label={`${label} — swipe for more`}>
      <div ref={ref} className="sh-deck__track">
        {/* Cover */}
        <article className="sh-deck__slide sh-deck__slide--cover">
          {/* A print on cream paper, the mark stamped over it in gold */}
          <div className="sh-deck__print">
            {cover.video ? (
              <video src={cover.video} poster={cover.src} autoPlay muted loop playsInline aria-label={cover.alt} className="sh-deck__bg" style={{ objectPosition: cover.position }} />
            ) : (
              <img src={cover.src} alt={cover.alt} className="sh-deck__bg" style={{ objectPosition: cover.position }} />
            )}
            <picture className="sh-deck__mark">
              <source srcSet="/assets/brand/logo-sunday-house-gold.webp" type="image/webp" />
              <img src="/assets/brand/logo-sunday-house-gold.png" alt="Sunday House" />
            </picture>
          </div>
          <p className="sh-deck__label">{label}</p>
        </article>

        {slides.map((s, i) => (
          <article key={i} className={`sh-deck__slide${s.img ? " has-img" : ""}`}>
            {s.img?.video ? (
              <video src={s.img.video} poster={s.img.src} autoPlay muted loop playsInline preload="metadata" aria-label={s.img.alt} className="sh-deck__bg" style={{ objectPosition: s.img.position }} />
            ) : s.img ? (
              <img src={s.img.src} alt={s.img.alt} className="sh-deck__bg" loading="lazy" style={{ objectPosition: s.img.position }} />
            ) : null}
            <div className="sh-deck__text">
              {s.kicker ? <p className="sh-deck__kicker">{s.kicker}</p> : null}
              {s.title ? <h2 className="sh-deck__title">{s.title}</h2> : null}
              {s.body ? <div className="sh-deck__body">{s.body}</div> : null}
            </div>
          </article>
        ))}

        {/* Book */}
        <article className="sh-deck__slide sh-deck__slide--end">
          <div className="sh-deck__text sh-deck__text--center">
            <picture className="sh-deck__mark sh-deck__mark--small">
              <source srcSet="/assets/brand/logo-sunday-house-pink.webp" type="image/webp" />
              <img src="/assets/brand/logo-sunday-house-pink.png" alt="" />
            </picture>
            <h2 className="sh-deck__title">Shall we begin?</h2>
            <div className="sh-deck__ctas">
              {primary.to.startsWith("mailto:") ? (
                <a href={primary.to} className="sh-deck__cta">
                  {primary.label}
                </a>
              ) : (
                <Link to={primary.to as never} params={primary.params as never} className="sh-deck__cta">
                  {primary.label}
                </Link>
              )}
              {secondary ? (
                <>
                  <span className="sh-deck__rule" aria-hidden="true" />
                  <Link to={secondary.to as never} params={secondary.params as never} className="sh-deck__cta">
                    {secondary.label}
                  </Link>
                </>
              ) : null}
            </div>
            {more?.length ? (
              <ul className="sh-deck__more">
                {more.map((m) => (
                  <li key={m.label}>
                    <Link to={m.to as never} params={m.params as never}>
                      {m.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </article>
      </div>

      <p className="sh-deck__hint" aria-hidden="true" data-hidden={at > 0 ? "true" : undefined}>
        Swipe →
      </p>
      <p className="sh-deck__count" aria-hidden="true">
        {n(at)}
      </p>
    </section>
  );
}
