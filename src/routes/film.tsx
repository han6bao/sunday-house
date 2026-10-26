import { createFileRoute, Link } from "@tanstack/react-router";

import { StructuredData } from "@/components/StructuredData";
import { ContentShell } from "@/components/house/content-shell";
import { Faq } from "@/components/house/faq";
import { FilmSnippet } from "@/components/house/film-snippet";
import { PortraitDeck } from "@/components/house/portrait-deck";
import { pageHead, serviceJsonLd } from "@/lib/seo";

const TITLE = "Seattle & Tacoma Wedding Videographer + Films | Sunday House";
const DESCRIPTION =
  "Cinematic wedding films from Sunday House: vows, toasts and the last dance, made alongside your wedding photography across Seattle, Tacoma and Washington.";

export const Route = createFileRoute("/film")({
  head: () =>
    pageHead({
      title: TITLE,
      description: DESCRIPTION,
      path: "/film",
      image: "/assets/film-posters/film-1.jpg",
      imageAlt: "A couple's first dance beneath string lights",
    }),
  component: Video,
});

const SERVICE = serviceJsonLd({
  name: "Wedding film",
  serviceType: "Wedding videography",
  description: DESCRIPTION,
  path: "/film",
  image: "/assets/film-posters/film-1.jpg",
});

const FRAMES = [
  { src: "/assets/films-web/film-1.mp4", poster: "/assets/film-posters/film-1.jpg", label: "The first dance", aspect: "aspect-[16/9]" },
  { src: "/assets/films-web/film-8.mp4", poster: "/assets/film-posters/film-8.jpg", label: "Getting ready", aspect: "aspect-[16/9]" },
  { src: "/assets/films-web/film-6.mp4", poster: "/assets/film-posters/film-6.jpg", label: "The dance floor", aspect: "aspect-[16/9]" },
  { src: "/assets/films-web/film-2.mp4", poster: "/assets/film-posters/film-2.jpg", label: "String lights", aspect: "aspect-[16/9]" },
];

const INCLUDES = [
  { t: "A highlight film", b: "A few minutes, cut to music, shaped around the feeling of your day." },
  { t: "Your vows and toasts", b: "Recorded with clear audio, so the words are kept in your own voices." },
  { t: "The whole day, as one story", b: "Filmed alongside your photographs, so both tell the same day." },
  { t: "Delivered online", b: "Easy to watch, download and share with the people who couldn't be there." },
];

const FAQ = [
  {
    q: "Should we book film and photography together?",
    a: "If you can, yes. Photographs preserve the stillness; film keeps the voices, the movement and the laughter between them. Booked together, one team carries the whole day and it feels like one story.",
  },
  {
    q: "How much does a wedding film cost?",
    a: "Photography + film collections begin at $7,800, with eight hours of photographs, a highlight film and an engagement session. Tell us your date and plans, and we'll send a clear proposal for what you need.",
  },
  {
    q: "What does a wedding film include?",
    a: "Your film is gathered across the day — the getting-ready quiet, the ceremony, the toasts, the last dance — then shaped with care afterward, cut for the feeling first so you'll want to watch it again.",
  },
  {
    q: "Who films our wedding?",
    a: "Film coverage is created by trusted filmmakers working alongside the Sunday House photography team, so the style and the story match.",
  },
  {
    q: "What's the difference between film and content creation?",
    a: "Film is the cinematic, made-to-keep piece. Content creation is candid, vertical and ready to share the same day. Many couples keep both: the film for the shelf, the content for the phone.",
  },
];

export default function Video() {
  return (
    <ContentShell path="/film" breadcrumb={[{ name: "Wedding Film", path: "/film" }]}>
      <StructuredData json={SERVICE} />

      {/* Phones: full-screen slides you swipe through */}
      <PortraitDeck
        cover={{ src: "/assets/film-posters/film-7.jpg", video: "/assets/films-web/film-7.mp4", alt: "Wedding film: the couple face each other beneath the trees" }}
        label="Wedding film"
        slides={[
          {
            kicker: "Moving pictures, kept.",
            title: <>Wedding films for the way it <em>felt</em>.</>,
            body: <p>The vows in your own voices. The toast that made everyone cry. The last song of the night.</p>,
            img: { src: "/assets/film-posters/film-1.jpg", video: "/assets/films-web/film-1.mp4", alt: "The first dance" },
          },
          {
            kicker: "What's included",
            title: "Your film",
            body: (
              <ul className="sh-deck__list">
                {INCLUDES.map((it) => (
                  <li key={it.t}>
                    <b>{it.t}</b>
                    <span>{it.b}</span>
                  </li>
                ))}
              </ul>
            ),
          },
          {
            kicker: "Getting ready",
            title: "Every part of the day.",
            body: <p>Filmed alongside your photographs, so both tell the same story.</p>,
            img: { src: "/assets/film-posters/film-8.jpg", video: "/assets/films-web/film-8.mp4", alt: "Getting ready" },
          },
          {
            kicker: "Investment",
            title: "Photo + film",
            body: <p>Photography and film collections begin at $7,800, with eight hours of photographs, a highlight film and an engagement session.</p>,
            img: { src: "/assets/film-posters/film-6.jpg", video: "/assets/films-web/film-6.mp4", alt: "The dance floor" },
          },
        ]}
        primary={{ label: "Email us", to: "mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" }}
        secondary={{ label: "See the weddings", to: "/weddings" }}
        more={[
          { label: "Content creation", to: "/content-creation" },
          { label: "Portraits", to: "/photography" },
          { label: "Home", to: "/" },
        ]}
      />

      <section className="sh-night">
        <div className="sh-wrap pt-[clamp(3rem,7vw,6rem)] pb-[clamp(3rem,6vw,5rem)]">
          <p className="sh-script">Moving pictures, kept.</p>
          <h1 className="sh-display mt-3 max-w-6xl">
            Wedding films for the way it <em>felt</em>.
          </h1>
          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
            <p className="sh-lede lg:col-span-6">
              The vows in your own voices. The toast that made everyone cry. The
              last song of the night. Wedding films from Seattle to Tacoma, made
              with the same care as the photographs.
            </p>
            <div className="flex flex-wrap gap-3 lg:col-span-6 lg:justify-end">
              <a href="mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" className="sh-btn-fill sh-btn-fill--light">
                Email us about film
              </a>
            </div>
          </div>
        </div>
        <div className="sh-wrap pb-[clamp(4rem,8vw,7rem)]">
          <FilmSnippet
            src="/assets/films-web/film-7.mp4"
            poster="/assets/film-posters/film-7.jpg"
            unframed
            ariaLabel="Wedding film: Matt and Maddie face each other beneath the trees"
            className="sh-film aspect-[16/9] w-full"
          />
          <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
            {FRAMES.map((f) => (
              <figure key={f.src}>
                <FilmSnippet src={f.src} poster={f.poster} unframed ariaLabel={`Wedding film clip: ${f.label}`} className={`sh-film ${f.aspect}`} />
                <figcaption className="sh-caption">{f.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="sh-wrap sh-section">
        <div className="grid gap-12 lg:grid-cols-12">
          <p className="sh-statement lg:col-span-8">
            Photographs hold the stillness. Film holds <em>everything in between</em>.
          </p>
          <div className="lg:col-span-4 lg:pt-4">
            <p className="sh-body">
              Film can be booked alongside Sunday House photography or on its
              own. The team is built around your date, your location and what
              you want remembered — and the whole day comes back to you as one
              story.
            </p>
            <Link to="/content-creation" className="sh-link mt-6">
              Same-day content, too →
            </Link>
          </div>
        </div>
      </section>

      <section className="sh-wrap pb-[clamp(4rem,8vw,7rem)]" aria-labelledby="film-incl">
        <div className="sh-boxed">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">What's included</p>
              <h2 id="film-incl" className="sh-h2 mt-4">
                Photography + film, <em>together</em>.
              </h2>
              <p className="sh-price__amt mt-6">
                <span>from</span> $7,800
              </p>
              <p className="sh-body mt-3">Eight hours of photographs, a highlight film and an engagement session.</p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a href="mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" className="sh-btn-fill">
                  Email us
                </a>
                <Link to="/weddings" hash="investment" className="sh-invite__alt">
                  All collections →
                </Link>
              </div>
            </div>
            <ul className="space-y-6 lg:col-span-6 lg:col-start-7">
              {INCLUDES.map((it, i) => (
                <li key={it.t} className="border-b border-ink/15 pb-5">
                  <p className="sh-num">0{i + 1}</p>
                  <h3 className="sh-h3 mt-2">{it.t}</h3>
                  <p className="sh-body mt-1">{it.b}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Faq title="Film questions" items={FAQ} />
    </ContentShell>
  );
}
