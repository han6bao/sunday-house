import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

import { ContentShell } from "@/components/house/content-shell";
import { Heart, HouseMark } from "@/components/house/marks";
import { ImageSlot } from "@/components/house/image-slot";

type Reel = {
  shortcode: string;
  caption: string;
  url: string;
  thumb: string;
};

const REELS: Reel[] = [
  { shortcode: "Dc-FW05tqrF", caption: "Dance lessons!", url: "https://www.instagram.com/reel/Dc-FW05tqrF/", thumb: "/assets/content-work/Dc-FW05tqrF.jpg" },
  { shortcode: "Dc-ECVrSzy5", caption: "Group dance 🪩", url: "https://www.instagram.com/reel/Dc-ECVrSzy5/", thumb: "/assets/content-work/Dc-ECVrSzy5.jpg" },
  { shortcode: "Dc-CDETMQt6", caption: "Dancing", url: "https://www.instagram.com/reel/Dc-CDETMQt6/", thumb: "/assets/content-work/Dc-CDETMQt6.jpg" },
  { shortcode: "Dc-Q1TcSzgx", caption: "Moments made to last", url: "https://www.instagram.com/reel/Dc-Q1TcSzgx/", thumb: "/assets/content-work/Dc-Q1TcSzgx.jpg" },
  { shortcode: "Dc-GM2nTfXA", caption: "BTS from the dance lessons", url: "https://www.instagram.com/reel/Dc-GM2nTfXA/", thumb: "/assets/content-work/Dc-GM2nTfXA.jpg" },
  { shortcode: "Dc-F_kwzwjc", caption: "Nothing but dancing today!", url: "https://www.instagram.com/reel/Dc-F_kwzwjc/", thumb: "/assets/content-work/Dc-F_kwzwjc.jpg" },
  { shortcode: "Dc95tOdJIq_", caption: "Time for some Jenga 😂", url: "https://www.instagram.com/reel/Dc95tOdJIq_/", thumb: "/assets/content-work/Dc95tOdJIq_.jpg" },
  { shortcode: "Dc95iSEhbA_", caption: "Time for some food 🍽️", url: "https://www.instagram.com/reel/Dc95iSEhbA_/", thumb: "/assets/content-work/Dc95iSEhbA_.jpg" },
  { shortcode: "Dc95F33Btpj", caption: "Lift off 🙌🏽", url: "https://www.instagram.com/reel/Dc95F33Btpj/", thumb: "/assets/content-work/Dc95F33Btpj.jpg" },
  { shortcode: "Dc96OtPz2vo", caption: "Which side is going to win? 🤨", url: "https://www.instagram.com/reel/Dc96OtPz2vo/", thumb: "/assets/content-work/Dc96OtPz2vo.jpg" },
  { shortcode: "Dc-B3czOfle", caption: "The reveal 😍", url: "https://www.instagram.com/reel/Dc-B3czOfle/", thumb: "/assets/content-work/Dc-B3czOfle.jpg" },
  { shortcode: "Dc-CZYLJuxk", caption: "And another one", url: "https://www.instagram.com/reel/Dc-CZYLJuxk/", thumb: "/assets/content-work/Dc-CZYLJuxk.jpg" },
];

const TIMELINE = [
  { time: "Morning", caption: "Getting ready, detail by detail.", thumb: "/assets/content-work/Dc-B3czOfle.jpg" },
  { time: "The beginning", caption: "The people start arriving.", thumb: "/assets/content-work/Dc95F33Btpj.jpg" },
  { time: "Tradition", caption: "Cultural moments as they unfold.", thumb: "/assets/content-work/Dc933toSMIt.jpg" },
  { time: "Together", caption: "The couple, without pulling them away from their day.", thumb: "/assets/content-work/Dc-PNpPptSy.jpg" },
  { time: "Family", caption: "Reactions, relationships and everything happening around them.", thumb: "/assets/content-work/Dc-Q1TcSzgx.jpg" },
  { time: "In between", caption: "Games, conversations and the moments nobody scheduled.", thumb: "/assets/content-work/Dc95tOdJIq_.jpg" },
  { time: "Speeches", caption: "The people who showed up, heard.", thumb: "/assets/content-work/Dc-X9nngA-w.jpg" },
  { time: "The celebration", caption: "Dances taught on the floor. Everyone joining in.", thumb: "/assets/content-work/Dc-ECVrSzy5.jpg" },
  { time: "After dark", caption: "The dance floor, finally.", thumb: "/assets/content-work/Dc-CDETMQt6.jpg" },
];

const COLLABORATORS = [
  { handle: "@soulkitchenllc", url: "https://www.instagram.com/soulkitchenllc/" },
  { handle: "@aura.event.seattle", url: "https://www.instagram.com/aura.event.seattle/" },
  { handle: "@danceitout_vidhibhatia", url: "https://www.instagram.com/danceitout_vidhibhatia/" },
  { handle: "@linensensation", url: "https://www.instagram.com/linensensation/" },
  { handle: "@ruchikagupta_official", url: "https://www.instagram.com/ruchikagupta_official/" },
  { handle: "@dreamsperfected", url: "https://www.instagram.com/dreamsperfected/", note: "DJ Prashant · the team behind the day" },
];

const DELIVERY = [
  { label: "Full content library", note: "A complete folder of captured content from throughout the wedding." },
  { label: "Edited content", note: "Finished vertical pieces ready to keep, repost and share." },
  { label: "Live Stories", note: "Posted in real time, so family who couldn't travel could follow every moment." },
  { label: "Social-ready posts", note: "Captions, music, collaborator/vendor tags and hashtags when wanted." },
  { label: "Speeches + longer moments", note: "Important moments captured beyond quick social clips." },
  { label: "Continued editing", note: "Content that keeps being useful after the wedding — not just when the Stories do." },
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
      {/* Hero */}
      <section className="mx-auto max-w-[1400px] px-5 pt-14 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="sh-script  reveal">One day. Twenty-eight videos. One story.</p>
          <h1 className="reveal reveal--delay-1 mt-3 sh-h1">
            The wedding, shared while it happened.
          </h1>
          <p className="reveal reveal--delay-2 mt-5 font-serif text-lg leading-relaxed text-brown">
            A full-day Indian-American wedding told in real time — live-edited
            Stories, reels, captions, music, collaborator credits and a complete
            content library afterward.
          </p>
        </div>
      </section>

      {/* Case study — Abha × Udit */}
      <section className="mx-auto max-w-[1400px] px-5 pt-12 md:px-8">
        <div className="border border-ink/15 bg-rose-paper/40 p-8 md:p-10">
          <p className="eyebrow">The Wedding · Abha × Udit</p>
          <p className="sh-script mt-3 ">From Carnegie to Carnation.</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-serif text-lg leading-relaxed text-brown">
                A full-day, fast-moving Indian-American wedding across Seattle and
                the South Sound — cultural moments, family dances, guest
                activities, games, vendors, food, speeches, multiple settings, and
                a room full of people completely in on the celebration.
              </p>
              <p className="mt-4 font-serif text-lg leading-relaxed text-brown">
                The job wasn't simply to record what happened. It was to read the
                room while it was changing — adapting to the flow of the wedding
                in real time, recognizing the relationships and chemistry around
                us, and deciding what needed to be captured so dozens of
                individual moments could still become{" "}
                <span className="font-semibold text-ink">one cohesive story from beginning to end</span>.
              </p>
              <p className="mt-4 font-serif text-lg leading-relaxed text-brown">
                The couple mattered, of course. But so did everyone surrounding
                them — families, friends, the reactions across the room, the
                traditions, the people laughing off-camera, the dances being
                taught on the floor, and all the little interactions that made
                this wedding theirs.
              </p>
              <p className="mt-4 font-serif italic leading-relaxed text-brown/80">
                Delivered alongside <span className="text-ink">DJ Prashant</span> and{" "}
                <a href="https://www.instagram.com/dreamsperfected/" target="_blank" rel="noreferrer" className="border-b border-ink/25 pb-0.5 text-antique hover:text-ink">
                  @dreamsperfected
                </a>
                , the Indian-American wedding DJ team behind the day.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-ink/15 bg-ivory p-5 text-center">
                  <p className="font-display text-4xl text-ink">80K+</p>
                  <p className="mt-1 label-xs text-antique">Video views to date</p>
                </div>
                <div className="border border-ink/15 bg-ivory p-5 text-center">
                  <p className="font-display text-4xl text-ink">60K+</p>
                  <p className="mt-1 label-xs text-antique">In the first 3 days</p>
                </div>
                <div className="border border-ink/15 bg-ivory p-5 text-center">
                  <p className="font-display text-4xl text-ink">28</p>
                  <p className="mt-1 label-xs text-antique">Videos created</p>
                </div>
                <div className="border border-ink/15 bg-rose-paper/60 p-5 text-center">
                  <p className="font-display text-4xl text-ink">Live</p>
                  <p className="mt-1 label-xs text-antique">From a phone, all day</p>
                </div>
              </div>
              <p className="mt-5 text-center font-serif text-sm italic text-brown/60">
                Performance measured within approximately three days of the
                wedding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results — the numbers are only part of it */}
      <section className="mx-auto max-w-[1400px] px-5 pt-12 md:px-8">
        <div className="max-w-3xl">
          <p className="font-display text-2xl text-ink">The numbers are only part of it.</p>
          <p className="mt-3 font-serif text-lg leading-relaxed text-brown">
            More than 60,000 video views within three days, and over 80,000 to
            date, from an Instagram account created specifically for the
            wedding, which now doubles as their archive. Live Stories let family
            and friends who couldn't make the trip follow along as it happened.
            The top Reel alone passed 20,000. The content traveled
            beyond the account's existing audience, but reach wasn't the purpose
            of the day — the goal was to make the wedding feel alive online while
            it was still happening, giving guests something to interact with,
            families another way into the celebration, and the couple an immediate
            record of the energy surrounding them. The response followed the
            storytelling.
          </p>
        </div>
      </section>

      {/* Real-time coverage */}
      <section className="border-y border-ink/15 bg-paper/40">
        <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-8 md:py-14">
          <p className="eyebrow">Real-time coverage</p>
          <h2 className="mt-2 font-display text-3xl leading-tight text-ink">The wedding, shared while it happened.</h2>
          <div className="mt-6 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-serif text-lg leading-relaxed text-brown">
                We were given a phone dedicated to content creation and direct access
                to the wedding's Instagram account. Throughout the day, we filmed,
                selected moments, found music, edited vertically, structured
                Stories, prepared social copy, tagged collaborators and published
                the celebration in real time.
              </p>
              <p className="mt-4 font-serif text-lg leading-relaxed text-brown">
                The Stories weren't random clips uploaded whenever there was time.
                They followed the wedding chronologically, so someone watching from
                their phone could actually understand the day: the beginning, the
                people arriving, cultural moments, family, food, games, speeches,
                performances, couple moments, dancing and everything in between.
              </p>
              <p className="sh-script mt-6 ">Film it. Edit it. Post it. Keep moving.</p>
            </div>
            <div className="lg:col-span-5">
              <ImageSlot ratio="9/16" src="/assets/content-work/Dc-Q1TcSzgx.jpg" alt="A still from the couple's wedding reels" />
            </div>
          </div>
        </div>
      </section>

      {/* The day, moment to moment */}
      <section className="mx-auto max-w-[1400px] px-5 py-12 md:px-8 md:py-16">
        <p className="eyebrow">The day, moment to moment</p>
        <h2 className="mt-2 font-display text-3xl leading-tight text-ink">A wedding, shared as it unfolded.</h2>
        <div className="mt-8 grid grid-cols-3 gap-3 md:gap-6">
          {TIMELINE.map((t, i) => (
            <div key={t.caption} className="group">
              <div className="border border-ink/15 bg-ivory p-2">
                <img src={t.thumb} alt={t.caption} loading="lazy" className="aspect-[9/16] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
              </div>
              <div className="mt-3">
                <p className="label-tiny--xs uppercase tracking-[0.14em] text-antique">{String(i + 1).padStart(2, "0")} — {t.time}</p>
                <p className="mt-1 hidden font-serif text-base leading-snug text-ink md:block">{t.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Chemistry — an editorial break inside the timeline */}
        <div className="mx-auto mt-14 max-w-2xl border-l border-ink/15 pl-6 md:pl-8">
          <p className="sh-script ">Paying attention is part of the job.</p>
          <p className="mt-4 font-serif text-lg leading-relaxed text-brown">
            Who keeps looking at each other across the room? Who makes everyone
            laugh? Which reaction matters as much as the moment everyone is
            watching? What is happening behind the couple? What will they want to
            see tomorrow that they missed today? Wedding content creation is as
            much about noticing people as it is about knowing when to press
            record.
          </p>
          <p className="mt-4 font-serif italic leading-relaxed text-brown/70">
            That is what makes a folder of clips become a story.
          </p>
        </div>
      </section>

      {/* Collaborators + vendors */}
      <section className="border-y border-ink/15 bg-paper/40">
        <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-8 md:py-14">
          <p className="eyebrow">Collaborators + vendors</p>
          <h2 className="mt-2 font-display text-3xl leading-tight text-ink">A wedding is an ecosystem.</h2>
          <p className="mt-4 max-w-3xl font-serif text-lg leading-relaxed text-brown">
            The social coverage also became a way to document and promote the
            people who helped create the celebration — vendors, performers and
            collaborators intentionally credited and tagged throughout relevant
            content, so guests and viewers could discover the people behind what
            they were seeing.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
            {COLLABORATORS.map((c) => (
              <a key={c.handle} href={c.url} target="_blank" rel="noreferrer" className="group inline-flex flex-col">
                <span className="font-serif text-lg text-antique transition-colors group-hover:text-ink">{c.handle}</span>
                {c.note ? <span className="label-tiny--xs uppercase tracking-[0.14em] text-brown/50">{c.note}</span> : null}
              </a>
            ))}
          </div>
          <p className="mt-6 font-serif italic leading-relaxed text-brown/70">
            Good wedding content doesn't only show who got married. It remembers
            who helped make the day happen.
          </p>
        </div>
      </section>

      {/* What they received */}
      <section className="mx-auto max-w-[1400px] px-5 py-12 md:px-8 md:py-16">
        <p className="eyebrow">What they received</p>
        <h2 className="mt-2 font-display text-3xl leading-tight text-ink">And everything came home with them.</h2>
        <p className="mt-3 max-w-2xl font-serif text-lg leading-relaxed text-brown">
          The social coverage was only one part of the delivery.
        </p>
        <div className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {DELIVERY.map((d) => (
            <div key={d.label} className="border-t border-ink/15 pt-4">
              <p className="flex items-baseline gap-2 font-display text-lg text-ink">
                <Heart filled className="h-3.5 w-3.5 shrink-0 text-rose-deep" />
                {d.label}
              </p>
              <p className="mt-1.5 font-serif text-sm leading-relaxed text-brown/80">{d.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The reels — the work itself */}
      <section className="mx-auto max-w-[1400px] px-5 pb-12 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">The reels</p>
            <h2 className="mt-2 font-display text-3xl leading-tight text-ink">Every clip, ready to post.</h2>
          </div>
          <p className="label-xs text-brown/60">Tap any frame to watch it on Instagram</p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
          {REELS.slice(0, 8).map((r) => (
            <a
              key={r.shortcode}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="group border border-ink/15 bg-ivory p-3 transition-all hover:-translate-y-1 hover:sh-lift"
            >
              <img src={r.thumb} alt={r.caption} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              <div className="p-1 pt-2.5">
                <p className="font-serif text-sm text-ink group-hover:text-antique md:text-base">{r.caption}</p>
                <p className="mt-1 label-tiny--xs uppercase tracking-[0.14em] text-antique">Watch →</p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="https://www.instagram.com/abha.udit/" target="_blank" rel="noreferrer" className="sh-invite__alt">
            See every reel on Instagram →
          </a>
        </div>
      </section>

      {/* The distinction + CTA */}
      <section className="border-t border-ink/15 bg-paper/40">
        <div className="mx-auto max-w-[1400px] px-5 py-14 text-center md:px-8 md:py-18">
          <HouseMark className="mx-auto h-10 w-10 text-rose-deep" />
          <p className="mx-auto mt-6 max-w-2xl font-display text-3xl leading-tight text-ink md:text-4xl">
            Your photographer preserves it.
            <br />
            Your content creator catches it as it unfolds.
          </p>
          <p className="mx-auto mt-4 max-w-xl font-serif italic leading-relaxed text-brown/80">
            Getting ready · first looks · ceremony · traditions · the people you
            love · the things you planned · the things you didn't.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/experience/$kind"
              params={{ kind: "weddings" }}
              className="sh-btn-fill"
            >
              Check your date
            </Link>
            <Link
              to="/content-creation"
              className="sh-invite__alt"
            >
              See how content creation works →
            </Link>
          </div>
        </div>
      </section>
    </ContentShell>
  );
}