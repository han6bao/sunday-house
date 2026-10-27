import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

import { ContentShell } from "@/components/house/content-shell";
import { PLAYABLE_REELS, ReelCard } from "@/components/house/reel-card";

const COLLABORATORS = [
  { handle: "@soulkitchenllc", url: "https://www.instagram.com/soulkitchenllc/" },
  { handle: "@aura.event.seattle", url: "https://www.instagram.com/aura.event.seattle/" },
  { handle: "@danceitout_vidhibhatia", url: "https://www.instagram.com/danceitout_vidhibhatia/" },
  { handle: "@linensensation", url: "https://www.instagram.com/linensensation/" },
  { handle: "@ruchikagupta_official", url: "https://www.instagram.com/ruchikagupta_official/" },
  { handle: "@dreamsperfected", url: "https://www.instagram.com/dreamsperfected/", note: "DJ Prashant" },
];

const STATS = [
  { n: "80K+", l: "Video views to date" },
  { n: "60K+", l: "In the first three days" },
  { n: "28", l: "Videos created" },
  { n: "Live", l: "Shared throughout the day" },
];

const HOW = [
  {
    t: "The brief",
    b: "A dedicated phone and direct access to an Instagram account created for the wedding — so the celebration could be shared as it happened, and kept as an archive afterward.",
  },
  {
    t: "On the day",
    b: "We filmed, selected, edited and published in real time: Stories in the order the day unfolded, reels set to music, captions written and every vendor credited.",
  },
  {
    t: "Afterward",
    b: "The complete library came home with the couple — every clip, every finished piece and the longer moments, from the speeches to the last dance.",
  },
];

const DELIVERY = [
  { label: "The full library", note: "Every clip captured throughout the wedding, organized and delivered." },
  { label: "Finished reels", note: "Edited vertical pieces, ready to keep, repost and share." },
  { label: "Live Stories", note: "Shared in real time for family and friends who couldn't travel." },
  { label: "Social-ready posts", note: "Captions, music and vendor credits, prepared with care." },
  { label: "The longer moments", note: "Speeches and performances, captured in full." },
  { label: "Continued editing", note: "Content that remains useful long after the wedding weekend." },
];

export const Route = createFileRoute("/content-portfolio")({
  head: () =>
    pageHead({
      title: "Wedding Content Creation: Abha & Udit | Sunday House",
      description:
        "A full-day Indian-American wedding across Seattle and the South Sound, told in real time: 28 videos, live Stories and reels, and a complete library afterward.",
      path: "/content-portfolio",
      image: "/assets/content-work/Dc-CDETMQt6.jpg",
    }),
  component: ContentPortfolio,
});

export default function ContentPortfolio() {
  return (
    <ContentShell breadcrumb={[{ name: "Wedding Content: Abha & Udit", path: "/content-portfolio" }]}>
      {/* 1 — Hero */}
      <section className="sh-wrap pt-14 md:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Wedding content creation · Abha &amp; Udit</p>
          <h1 className="sh-h1 mt-5">
            The wedding, shared <em>while it happened</em>.
          </h1>
          <p className="sh-lede mx-auto mt-6 max-w-2xl">
            A full-day Indian-American celebration across Seattle and the South Sound, told in real time — and kept, in full, long after.
          </p>
        </div>

        {/* The numbers */}
        <dl className="mx-auto mt-12 grid max-w-5xl grid-cols-2 border-y border-ink/15 md:grid-cols-4">
          {STATS.map((x, i) => (
            <div key={x.l} className={`px-4 py-7 text-center ${i ? "md:border-l md:border-ink/15" : ""} ${i % 2 ? "border-l border-ink/15 md:border-l" : ""} ${i > 1 ? "border-t border-ink/15 md:border-t-0" : ""}`}>
              <dt className="sr-only">{x.l}</dt>
              <dd className="font-display text-4xl text-ink md:text-5xl">{x.n}</dd>
              <p className="mt-2 label-xs text-antique">{x.l}</p>
            </div>
          ))}
        </dl>
      </section>

      {/* 2 — The reels */}
      <section className="sh-wrap sh-section" aria-labelledby="cp-reels">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">The work</p>
            <h2 id="cp-reels" className="cp-h2 mt-3">A few of the reels.</h2>
          </div>
          <p className="label-xs text-brown/60">Tap to play</p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-5">
          {PLAYABLE_REELS.map((r) => (
            <ReelCard key={r.code} reel={r} />
          ))}
        </div>
        <div className="mt-8">
          <a href="https://www.instagram.com/abha.udit/" target="_blank" rel="noreferrer" className="sh-link">
            The full account on Instagram →
          </a>
        </div>
      </section>

      {/* 3 — How it worked */}
      <section className="rose-paper sh-section" aria-labelledby="cp-how">
        <div className="sh-wrap grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow">How it worked</p>
            <h2 id="cp-how" className="cp-h2 mt-3">One day, three parts.</h2>
            <ol className="mt-10 space-y-8">
              {HOW.map((h, i) => (
                <li key={h.t} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-ink/15 pt-6">
                  <p className="sh-num">0{i + 1}</p>
                  <div>
                    <h3 className="sh-h3">{h.t}</h3>
                    <p className="sh-body mt-2">{h.b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="mx-auto w-full max-w-[300px] lg:col-span-4 lg:col-start-9">
            <div className="relative aspect-[9/16] overflow-hidden bg-[#2c2726]">
              <video src="/assets/reels/Dc92Z0tBIDY.mp4" poster="/assets/reels/Dc92Z0tBIDY.jpg" autoPlay muted loop playsInline aria-label="Guests dancing on the lawn, filmed and shared the same day" className="absolute inset-0 h-full w-full max-w-none object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 4 — What they received */}
      <section className="sh-wrap sh-section" aria-labelledby="cp-received">
        <p className="eyebrow">What they received</p>
        <h2 id="cp-received" className="cp-h2 mt-3">Everything, kept.</h2>
        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {DELIVERY.map((d, i) => (
            <div key={d.label} className="border-t border-ink/15 pt-5">
              <p className="sh-num">0{i + 1}</p>
              <h3 className="sh-h3 mt-2">{d.label}</h3>
              <p className="sh-body mt-1">{d.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5 — Credits */}
      <section className="sh-wrap pb-[clamp(4rem,8vw,7rem)]" aria-labelledby="cp-credits">
        <div className="border-t border-ink/15 pt-10">
          <p id="cp-credits" className="eyebrow">With thanks to</p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
            {COLLABORATORS.map((c) => (
              <a key={c.handle} href={c.url} target="_blank" rel="noreferrer" className="group inline-flex flex-col">
                <span className="font-serif text-lg text-antique transition-colors group-hover:text-ink">{c.handle}</span>
                {c.note ? <span className="label-tiny--xs uppercase tracking-[0.14em] text-brown/50">{c.note}</span> : null}
              </a>
            ))}
          </div>
        </div>
      </section>

    </ContentShell>
  );
}
