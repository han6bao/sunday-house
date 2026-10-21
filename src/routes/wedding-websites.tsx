import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

import { ContentShell } from "@/components/house/content-shell";

export const Route = createFileRoute("/wedding-websites")({
  head: () =>
    pageHead({
      title: "Custom Wedding Websites | Sunday House",
      description:
        "Custom wedding websites designed to match your wedding: your story, schedule, travel, RSVP and registry in one beautiful place.",
      path: "/wedding-websites",
    }),
  component: WeddingWebsites,
});

const FEATURES = [
  "Couple Story",
  "Wedding Date + Countdown",
  "Venue & Schedule",
  "Travel & Accommodations",
  "Wedding Party",
  "RSVP",
  "Registry",
  "FAQ",
  "Dress Code",
  "Gallery + Engagement Photos",
  "Recommendations",
  "Important Updates",
];

export default function WeddingWebsites() {
  return (
    <ContentShell breadcrumb={[{ name: "Wedding Websites", path: "/wedding-websites" }]}>
      <section className="mx-auto max-w-[1400px] px-5 pt-14 md:px-8">
        <p className="sh-script  reveal">Your own room on the internet.</p>
        <h1 className="reveal reveal--delay-1 mt-3 max-w-3xl sh-h1">
          Custom wedding websites.
        </h1>
        <p className="reveal reveal--delay-2 mt-5 max-w-2xl font-serif text-lg leading-relaxed text-brown">
          A wedding website should feel like an extension of your wedding
          aesthetic, not a template with your names pasted in. We design and
          build yours to match the day: the colors, the words, the feeling, with
          everything your guests need in one lovely place.
        </p>
      </section>

      {/* A real example */}
      <section className="mx-auto max-w-[1400px] px-5 pt-12 md:px-8 md:pt-16">
        <p className="eyebrow">A real example</p>
        <a
          href="https://weddings-sofia-mateo.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="group card-fade mt-6 grid gap-6 border border-ink/15 bg-rose-paper/50 p-8 transition-colors hover:bg-rose-paper/80 md:grid-cols-[1fr_auto] md:items-center md:p-10"
        >
          <div>
            <p className="font-display text-3xl text-ink md:text-4xl">
              Sofia &amp; Mateo
            </p>
            <p className="mt-2 font-serif text-lg text-brown">
              September 19, 2027 · Seattle, Washington
            </p>
            <p className="mt-3 max-w-xl font-serif italic leading-relaxed text-brown/80">
              The ceremony at Volunteer Park's Conservatory, the reception at
              the Edgewater, their story, travel and registry, all in one
              beautiful room.
            </p>
          </div>
          <span className="inline-flex w-fit items-center gap-2 border-b border-ink pb-1 font-serif text-lg italic text-ink transition-colors group-hover:text-antique">
            See it live
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </a>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-14 md:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ul className="grid grid-cols-2 gap-px overflow-hidden border border-ink/15 bg-rose-paper sm:grid-cols-3">
              {FEATURES.map((f) => (
                <li key={f} className="bg-ivory p-4 font-serif text-base text-brown">
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-6 border border-ink/15 bg-rose-paper/60 p-6">
              <p className="font-serif text-lg leading-relaxed text-brown">
                Wedding websites pair beautifully with your wedding photography
                and film: your engagement photos become the gallery, your story
                becomes the prose, and the whole thing feels like you.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                to="/experience/$kind"
                params={{ kind: "weddings" }}
                className="sh-btn-fill"
              >
                Start your wedding →
              </Link>
              <Link
                to="/photography"
                className="inline-flex items-center border border-ink/25 px-7 py-3 label-sm font-medium text-ink hover:bg-ink hover:text-ivory"
              >
                See photography
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="border border-ink/15 bg-ivory p-3 sh-sheet">
              <img
                src="/assets/portfolio/sofia-mateo-hero.jpg"
                alt="The Sofia & Mateo wedding website, photographed on screen"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover object-top"
              />
            </div>
            <p className="mt-3 text-center font-serif text-sm italic text-brown/60">
              The real thing — Sofia &amp; Mateo's website, live.
            </p>
          </div>
        </div>
      </section>
    </ContentShell>
  );
}