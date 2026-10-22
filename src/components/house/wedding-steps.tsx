"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    n: "01",
    title: "Tell us your date",
    body: "We keep our calendar small, so dates go quickly. Share the date, the place and the feeling you want. We reply personally within 24 hours, often with a short voice note.",
    img: "/assets/stills/couple-sunset.jpg",
    alt: "Newlyweds walking toward the sunset",
  },
  {
    n: "02",
    title: "Plan it together",
    body: "Coffee or a call, a look at locations and light, and a timeline built so nothing important is rushed. Once you book, a welcome package arrives by mail with your styling guide.",
    img: "/assets/stills/couple-field.jpg",
    alt: "Bride and groom walking hand in hand across a lawn",
  },
  {
    n: "03",
    title: "Live it. Keep it.",
    body: "Be fully present on the day. Sneak peeks arrive within 48 hours, your gallery on the date we promise in writing, and an heirloom album if you'd like something to hold.",
    img: "/assets/motion/ring.jpg",
    alt: "Wedding rings on clasped hands",
  },
];

/**
 * Three steps, told as you scroll: the panel stays put while the steps turn
 * over one by one — photo, number, words. Tapping a step jumps to it.
 */
export function WeddingSteps() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / Math.max(total, 1)));
      setProgress(p);
      setActive(Math.min(STEPS.length - 1, Math.floor(p * STEPS.length * 0.999)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const jump = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    const top = el.getBoundingClientRect().top + window.scrollY + total * ((i + 0.5) / STEPS.length);
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section ref={ref} className="sh-steps3" aria-labelledby="home-steps">
      <div className="sh-steps3__stage">
        <div className="sh-steps3__media" aria-hidden="true">
          {STEPS.map((s, i) => (
            <img key={s.n} src={s.img} alt="" loading="lazy" decoding="async" className={i === active ? "is-on" : ""} />
          ))}
        </div>
        <div className="sh-steps3__panel">
          <p className="eyebrow">How it works</p>
          <h2 id="home-steps" className="sh-steps3__title">
            Three steps to your wedding day.
          </h2>
          <ol className="sh-steps3__tabs">
            {STEPS.map((s, i) => (
              <li key={s.n}>
                <button type="button" onClick={() => jump(i)} aria-current={i === active ? "step" : undefined} className={i === active ? "is-on" : ""}>
                  <span className="sh-num">{s.n}</span> {s.title}
                </button>
              </li>
            ))}
          </ol>
          <div className="sh-steps3__body">
            {STEPS.map((s, i) => (
              <div key={s.n} className={`sh-steps3__step${i === active ? " is-on" : ""}`} aria-hidden={i !== active}>
                <p className="sh-steps3__n">{s.n}</p>
                <h3 className="sh-h2">{s.title}</h3>
                <p className="sh-body mt-4">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="sh-steps3__bar" aria-hidden="true">
            <span style={{ transform: `scaleX(${progress})` }} />
          </div>
        </div>
      </div>
    </section>
  );
}
