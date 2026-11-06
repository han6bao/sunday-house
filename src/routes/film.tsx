import { createFileRoute, Link } from "@tanstack/react-router";

import { StructuredData } from "@/components/StructuredData";
import { ContentShell } from "@/components/house/content-shell";
import { Faq } from "@/components/house/faq";
import { FilmSnippet } from "@/components/house/film-snippet";
import { FullFilm } from "@/components/house/full-film";
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
  { t: "The highlight film", b: "Three to five minutes, scored to how the day felt." },
  { t: "Your vows, in your own voices", b: "Recorded on dedicated microphones, with a vow film of their own." },
  { t: "A complimentary styled session", b: "An editorial portrait session, on the day or a day of its own." },
  { t: "One team, one vision", b: "Photography and film, directed together from the first frame." },
];

/** The full Matt + Maddie film, hosted here. Set to its file once uploaded. */
const FULL_FILM: string | undefined = undefined;

/** What we film on the day. */
const WE_FILM = [
  { t: "The setting", b: "The place you chose, filmed wide and unhurried, so the film opens exactly where your day began." },
  { t: "Detail + atmosphere", b: "The dress, the rings, the light moving across a room. The quiet frames that give a film its texture." },
  { t: "The two of you", b: "Genuine chemistry, genuine connection. Unposed time together, filmed as you truly are." },
  { t: "Vows + speeches", b: "Every word captured on dedicated microphones — the promises, the toasts and the laughter that follows." },
  { t: "The day, documented", b: "From the first quiet moments of getting ready to the final send-off, observed as it unfolds." },
  { t: "Interviews, by request", b: "Offered, never required: a few words from you or those closest to you, woven gently into the story." },
];

const FAQ = [
  {
    q: "Should we book film and photography together?",
    a: "If you can, yes. Photographs preserve the stillness; film keeps the voices, the movement and the laughter between them. Booked together, one team carries the whole day and it feels like one story.",
  },
  {
    q: "How much does a wedding film cost?",
    a: "Photography and film collections begin at $5,800, with eight hours of coverage, a highlight film, a two-to-three-minute vow film and a complimentary styled session. Share your date and plans, and we'll prepare a considered proposal for your day.",
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
            body: <p>Photography and film collections begin at $5,800: eight hours of coverage, a highlight film, a vow film and a complimentary styled session.</p>,
            img: { src: "/assets/film-posters/film-6.jpg", video: "/assets/films-web/film-6.mp4", alt: "The dance floor" },
          },
        ]}
        primary={{ label: "Inquire", to: "mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" }}
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
                Inquire about film
              </a>
            </div>
          </div>
        </div>
        <div className="sh-wrap pb-[clamp(4rem,8vw,7rem)]">
          <FullFilm
            film={FULL_FILM}
            preview="/assets/films-web/film-7.mp4"
            poster="/assets/film-posters/film-7.jpg"
            title="Matt + Maddie"
            caption="The wedding film"
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

      <section className="sh-wrap sh-section" aria-labelledby="film-how">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">How we film</p>
            <h2 id="film-how" className="sh-h2 mt-4">
              Everything that made it <em>yours</em>.
            </h2>
            <p className="sh-body mt-6">We capture the full picture, then shape it with care into a single film made to be watched for decades.</p>
          </div>
          <ul className="sh-filmhow lg:col-span-8">
            {WE_FILM.map((it, i) => (
              <li key={it.t}>
                <p className="sh-num">0{i + 1}</p>
                <h3 className="sh-h3 mt-2">{it.t}</h3>
                <p className="sh-body mt-1">{it.b}</p>
              </li>
            ))}
          </ul>
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
                The whole day, <em>seen and heard</em>.
              </h2>
              <p className="sh-price__amt mt-6">
                <span>from</span> $5,800
              </p>
              <p className="sh-body mt-3">Eight hours of photography and film from a single team — the quiet before, your vows in your own voices, the last dance. Includes a vow film and a complimentary styled session.</p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a href="mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" className="sh-btn-fill">
                  Inquire
                </a>
                <Link to="/weddings" hash="investment" className="sh-invite__alt">
                  View the collections →
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
