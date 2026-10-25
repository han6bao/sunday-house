import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

import { ContentShell } from "@/components/house/content-shell";
import { HouseGuidance } from "@/components/house/house-guidance";
import { ImageSlot } from "@/components/house/image-slot";
import { PortraitDeck } from "@/components/house/portrait-deck";
import { Heart, HouseMark } from "@/components/house/marks";

export const Route = createFileRoute("/content-creation")({
  head: () =>
    pageHead({
      title: "Wedding Content Creator in Seattle | Sunday House",
      description:
        "Same-day wedding content for Seattle and the Pacific Northwest: candid vertical video, live-edited Stories and reels, plus the full library to keep afterward.",
      path: "/content-creation",
      image: "/assets/content-work/Dc-FW05tqrF.jpg",
    }),
  component: ContentCreation,
});

export default function ContentCreation() {
  return (
    <ContentShell breadcrumb={[{ name: "Wedding Content Creation", path: "/content-creation" }]}>
      {/* Phones: full-screen slides you swipe through */}
      <PortraitDeck
        cover={{ src: "/assets/content-work/Dc-Q1TcSzgx.jpg", alt: "A still from a wedding reel, filmed and shared the same day" }}
        label="Wedding content creation"
        slides={[
          {
            kicker: "For the days worth reliving.",
            title: "Your day, told while it's still happening.",
            body: <p>Candid vertical content, live-edited Stories and social-ready moments, captured from beginning to end. Then everything comes home with you.</p>,
            img: { src: "/assets/content-work/Dc-FW05tqrF.jpg", alt: "Wedding guests dancing in bright traditional clothes" },
          },
          {
            kicker: "What we capture",
            title: "The things you planned, and the things you didn't.",
            body: <p>Getting ready · first looks · ceremony · traditions · family · friends · speeches · food · vendors · performances · games · reception · dancing</p>,
          },
          {
            kicker: "One day. Twenty-eight videos.",
            title: "See a whole wedding.",
            body: (
              <p>
                <Link to="/content-portfolio" className="sh-deck__cta">Abha × Udit, from Carnegie to Carnation →</Link>
              </p>
            ),
            img: { src: "/assets/content-work/Dc-CDETMQt6.jpg", alt: "The dance floor after dark" },
          },
        ]}
        primary={{ label: "Email us", to: "mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" }}
        secondary={{ label: "See the film", to: "/film" }}
        more={[
          { label: "Weddings", to: "/weddings" },
          { label: "Portraits", to: "/photography" },
          { label: "Home", to: "/" },
        ]}
      />
      {/* Hero */}
      <section className="mx-auto max-w-[1400px] px-5 pt-14 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow card-fade">Immediate · Candid · Vertical · Ready to share</p>
            <p className="sh-script mt-4  reveal">For the days worth reliving.</p>
            <h1 className="reveal reveal--delay-1 mt-3 max-w-3xl sh-h1">
              Wedding content creation.
            </h1>
            <p className="reveal reveal--delay-2 mt-5 max-w-2xl font-serif text-lg leading-relaxed text-brown">
              Your day, told while it's still happening — candid vertical content,
              live-edited Stories, social-ready moments and the people around you,
              captured from beginning to end. Then everything comes home with you.
            </p>
            <div className="reveal reveal--delay-2 mt-7 flex flex-wrap items-center gap-4">
              <a href="mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" className="sh-btn-fill">
                <Heart className="h-4 w-4 text-rose-deep" /> Email us →
              </a>
              <Link
                to="/film"
                className="sh-textlink"
              >
                For the cinematic story, see film →
              </Link>
            </div>
          </div>
          <div className="card-fade card-fade-2 lg:col-span-5">
            <ImageSlot ratio="9/16" src="/assets/content-work/Dc-Q1TcSzgx.jpg" alt="A still from a wedding reel, filmed and shared the same day" />
            <p className="mt-3 text-center font-serif text-sm italic text-brown/60">The day, already in motion.</p>
          </div>
        </div>
      </section>

      {/* What we capture — one line */}
      <section className="mx-auto max-w-[1400px] px-5 pt-12 md:px-8">
        <div className="mx-auto max-w-4xl border border-ink/15 bg-rose-paper/40 px-6 py-10 text-center md:px-12">
          <Heart className="mx-auto h-6 w-6 text-rose-deep" />
          <p className="sh-script mt-5 ">What we capture</p>
          <p className="mx-auto mt-5 max-w-3xl font-serif text-lg leading-loose text-brown">
            Getting ready · first looks · ceremony · traditions · family ·
            friends · speeches · food · vendors · performances · games ·
            behind the scenes · reception · dancing · the things you planned ·
            the things you didn't
          </p>
        </div>
      </section>

      {/* The portfolio — the full story lives here */}
      <section className="mx-auto max-w-[1400px] px-5 py-12 md:px-8 md:py-16">
        <div className="border border-ink/15 bg-ivory p-8 text-center md:p-12">
          <p className="eyebrow">The full story</p>
          <p className="sh-script mt-4 ">One day. Twenty-eight videos. One story.</p>
          <p className="mx-auto mt-4 max-w-2xl font-serif text-lg leading-relaxed text-brown">
            A real Indian-American wedding, shared while it happened — the reels,
            the results and the people behind the day, all in the portfolio.
          </p>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="border border-ink/15 bg-paper/40 p-5 text-center">
              <p className="font-display text-3xl text-ink">80K+</p>
              <p className="mt-1 label-xs text-antique">Views · 60K+ in 3 days</p>
            </div>
            <div className="border border-ink/15 bg-paper/40 p-5 text-center">
              <p className="font-display text-3xl text-ink">20K+</p>
              <p className="mt-1 label-xs text-antique">Top-performing Reel</p>
            </div>
            <div className="border border-ink/15 bg-rose-paper/50 p-5 text-center">
              <p className="font-display text-3xl text-ink">28</p>
              <p className="mt-1 label-xs text-antique">Videos created</p>
            </div>
          </div>

          <Link
            to="/content-portfolio"
            className="mt-10 sh-btn-fill"
          >
            Open the wedding portfolio →
          </Link>
          <p className="mt-4 font-serif text-sm italic text-brown/60">
            Reels, captions, live coverage, collaborators and everything they
            received.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-5 pt-10 md:px-8 md:pt-14"><div className="section-rule" aria-hidden="true" /></div>

      <HouseGuidance
        eyebrow="Planning content for your day"
        intro="The things couples ask us most before booking — tap a question and we'll answer it plainly."
        items={[
          {
            title: "Photos, film, or content?",
            body: "Typically all three — they do different jobs. Your photographer preserves the stillness, film keeps the story cinematically, and content creation catches the day as it unfolds, ready for your phone. Many couples book content alongside photography and film so the real-time version and the archival version both exist.",
          },
          {
            title: "What exactly do we receive?",
            body: "Candid vertical clips from getting-ready to last dance, Stories edited live throughout the day, ready-to-post reels with captions and music, and the full library to keep afterward. You get the day in your hands the same night — not weeks later.",
          },
          {
            title: "When should we book?",
            body: "The earlier, the better — summer weekends and popular venues book out first, and a good content creator needs to be on your venue's guest list like any other vendor. Tell us your date and we'll tell you exactly what's still possible.",
          },
          {
            title: "Does it get in the photographer's way?",
            body: "It shouldn't — a good content creator works around the photographer, stays out of the key shots, and coordinates so both teams get what they need. Different cameras, different jobs, one day. When we're booked together by the same House, we come already knowing how to share the room.",
          },
        ]}
      />

      {/* The distinction */}
      <section className="border-t border-ink/15 bg-paper/40">
        <div className="mx-auto max-w-[1400px] px-5 py-14 text-center md:px-8 md:py-16">
          <div className="mx-auto max-w-2xl">
            <p className="font-display text-3xl leading-tight text-ink md:text-4xl">
              Your photographer preserves it.
              <br />
              Your content creator catches it as it unfolds.
            </p>
            <p className="mt-4 font-serif text-lg leading-relaxed text-brown">
              The photographs will show you what the day looked like. The content
              brings back everything happening around them — the voices,
              reactions, movement, inside jokes, dancing, chaos, chemistry and
              little moments you didn't even realize were being captured.
            </p>
            <p className="sh-script mt-5 ">One day. More of it kept.</p>
          </div>

          <div className="mt-12">
            <a href="mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" className="sh-btn-fill">
              <Heart className="h-4 w-4 text-rose-deep" /> Email us →
            </a>
            <p className="mt-4 font-serif text-sm italic text-brown/60">
              No account needed. Tell us the date, the place and the feeling.
            </p>
          </div>

          <HouseMark className="mx-auto mt-14 h-9 w-9 text-rose-deep" />
        </div>
      </section>
    </ContentShell>
  );
}