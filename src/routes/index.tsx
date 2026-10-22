import { createFileRoute, Link } from "@tanstack/react-router";

import { ContentShell } from "@/components/house/content-shell";
import { Faq } from "@/components/house/faq";
import { FilmSnippet } from "@/components/house/film-snippet";
import { HeroFilm } from "@/components/house/hero-film";
import { Wordmark } from "@/components/house/wordmark";
import { Photo } from "@/components/house/photo";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Sunday House | Seattle & Tacoma Wedding Photographer + Film",
      description:
        "Cinematic wedding photography and film by Sunday House, based in Tacoma and photographing weddings, engagements and elopements across Seattle and the Pacific Northwest.",
      path: "/",
      image: "/assets/gallery/sunset-couple.png",
      imageAlt: "Newlyweds holding each other on a hill at sunset",
    }),
  component: Home,
});

const FAQ = [
  {
    q: "Where do we start?",
    a: "With your date and where you're getting married. Send an inquiry and we'll reply with availability. If you're early in planning, the free Wedding Workbook shows the whole shape of your day — what's booked, what's missing, and what matters most.",
  },
  {
    q: "Photo, film, or both?",
    a: "Both, usually — and they're made to live side by side. Photographs hold the stillness; film holds the voices, the vows and the movement. Booked together, one team carries the whole day and it reads as one story. If you only want one, start with whichever you'd regret not having.",
  },
  {
    q: "What does wedding photography cost?",
    a: "Wedding collections begin at $3,800, and most of our couples invest between $4,500 and $6,500. Intimate weddings and elopements begin at $1,800, and portrait sessions at $375. Tell us your date and we'll send a clear proposal with every option. No hidden numbers and no pressure either way.",
  },
  {
    q: "Do you travel outside Seattle and Tacoma?",
    a: "Yes. We're based in Tacoma and photograph weddings across Seattle, the Eastside, the South Sound and the Pacific Northwest, and we'll travel for the right story.",
  },
  {
    q: "Can we meet before we book?",
    a: "Absolutely. We love meeting couples first — over coffee, over a call, or at a location you're considering. It's the easiest way to feel whether we're the right fit.",
  },
];

function Home() {
  return (
    <ContentShell inquiry overlayNav>
      {/* 1 · Landing — full-screen placement for the film (photo for now) */}
      <HeroFilm
        video="/assets/motion/welcome-loop.mp4"
        image="/assets/gallery/sunset-couple.png"
        alt="Newlyweds holding each other on a hill as the evening sun pours over them"
        position="center 27%"
      >
        <div className="sh-hero__center">
          <Wordmark />
          <h1 className="sh-hero__tagline">
            Seattle &amp; Tacoma wedding photography and film for the days worth keeping
          </h1>
          <Link to="/experience/$kind" params={{ kind: "weddings" }} className="sh-hero__btn">
            Check your date
          </Link>
        </div>
      </HeroFilm>

      {/* 2 · The promise */}
      <section id="begin" className="sh-wrap sh-section">
        <div className="sh-intro">
          <div className="sh-intro__text">
            <p className="eyebrow">Hello, we&rsquo;re Sunday House</p>
            <p className="sh-statement mt-6">
              We photograph weddings the way they <em>felt</em> — the light, the
              nerves, and every person you love in one room.
            </p>
            <p className="sh-body mt-8 max-w-md">
              We&rsquo;re a wedding photography and film studio based in Tacoma,
              photographing weddings across Seattle and the Pacific Northwest.
              Our edit is cinematic and film-like — and always shaped around you.
            </p>
            <Link to="/about" hash="welcome" className="sh-link mt-6">
              More about us + our welcome film →
            </Link>
          </div>
          <div className="sh-collage">
            <figure className="sh-collage__arch sh-drift" style={{ ["--drift" as string]: "-36px" }}>
              <img src="/assets/stills/couple-field.jpg" alt="Bride and groom walking hand in hand across a green lawn, seen from above" loading="lazy" decoding="async" />
            </figure>
            <figure className="sh-collage__polaroid sh-drift" style={{ ["--drift" as string]: "40px" }}>
              <img src="/assets/stills/couple-sunset.jpg" alt="Newlyweds walking toward the sunset after their ceremony" loading="lazy" decoding="async" />
            </figure>
            <span className="sh-scriptword sh-collage__word" aria-hidden="true">
              hello
            </span>
          </div>
        </div>
      </section>

      {/* 3 · Weddings — the work, big */}
      <section className="sh-wrap pb-[clamp(4.5rem,10vw,8.5rem)]" aria-labelledby="home-weddings">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <h2 id="home-weddings" className="sh-h1">
            Weddings
          </h2>
          <Link to="/weddings" className="sh-link">
            Wedding photography →
          </Link>
        </div>
        <div className="relative">
        <span className="sh-scriptword sh-scriptword--light sh-weddings__word" aria-hidden="true">
          forever
        </span>
        <div className="sh-mosaic">
          <Photo
            src="/assets/gallery/bride-portrait.png" motion="/assets/motion/bride" motionPosition="38% center" need="Wedding 1 of 5: a bride"
            alt="Bridal portrait of a bride in a lace gown looking toward the light"
            ratio="2/3"
            sizes="(max-width: 900px) 50vw, 42vw"
          />
          <Photo
            src="/assets/gallery/sunset-couple.png" motion="/assets/motion/couple-hill" motionPosition="45% center" need="Wedding 2 of 5: a couple portrait"
            alt="Newlyweds embracing on a hill at sunset in Washington"
            ratio="4/5"
            sizes="(max-width: 900px) 50vw, 33vw"
          />
          <Photo
            src="/assets/gallery/kiss-bw.png" need="Wedding 3 of 5: ceremony or kiss"
            alt="Black and white photograph of a groom kissing his bride's forehead"
            ratio="3/4"
            sizes="(max-width: 900px) 50vw, 25vw"
          />
          <Photo
            src="/assets/gallery/rings.jpg" className="sh-rosetone" motion="/assets/motion/ring" need="Wedding 4 of 5: a detail (rings, dress, flowers)"
            alt="Close-up of a couple's wedding rings as they hold hands"
            ratio="1/1"
            sizes="(max-width: 900px) 50vw, 25vw"
          />
          <Photo
            src="/assets/gallery/couple-walk.png" need="Wedding 5 of 5: candid or reception"
            alt="Bride and groom walking away together after their ceremony"
            ratio="4/5"
            sizes="(max-width: 900px) 50vw, 33vw"
          />
        </div>
        </div>
      </section>

      {/* 4 · Film */}
      <section className="sh-night sh-section" aria-labelledby="home-film">
        <div className="sh-wrap">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow">Wedding film</p>
              <h2 id="home-film" className="sh-h1 mt-5">
                Hear the vows <em>again</em>.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="sh-lede">
                Photographs keep the stillness. Film keeps the voices, the
                laughter and the last dance — made alongside your photographs,
                so the whole day reads as one story.
              </p>
              <Link to="/video" className="sh-link mt-6">
                Watch the films →
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-12">
            <div className="md:col-span-7">
              <FilmSnippet
                src="/assets/films-web/film-13b.mp4"
                poster="/assets/film-posters/film-13b.jpg"
                unframed
                ariaLabel="Wedding film clip: a groom watching his bride with a smile"
                className="sh-film aspect-[16/10]"
              />
            </div>
            <div className="grid gap-4 md:col-span-5">
              <FilmSnippet
                src="/assets/films-web/film-5.mp4"
                poster="/assets/film-posters/film-5.jpg"
                unframed
                ariaLabel="Wedding film clip: the couple cutting their cake"
                className="sh-film aspect-[16/9]"
              />
              <FilmSnippet
                src="/assets/films-web/film-3.mp4"
                poster="/assets/film-posters/film-3.jpg"
                unframed
                ariaLabel="Wedding film clip: guests celebrating under string lights"
                className="sh-film aspect-[16/9]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5 · Wedding content creation — a real wedding */}
      <section className="sh-wrap sh-section--tight" aria-labelledby="home-real">
        <div className="sh-boxed grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="order-2 grid grid-cols-3 gap-3 md:gap-4 lg:order-1 lg:col-span-7">
            <Photo
              src="/assets/content-work/Dc-CDETMQt6.jpg"
              alt="Abha and Udit dancing beneath chandeliers at their Indian-American wedding reception"
              ratio="3/4"
              sizes="(max-width: 1024px) 33vw, 22vw"
            />
            <Photo
              src="/assets/content-work/Dc94ykltayq.jpg"
              alt="The bride and groom embracing during their mehndi celebration"
              ratio="3/4"
              sizes="(max-width: 1024px) 33vw, 22vw"
            />
            <Photo
              src="/assets/content-work/Dc96eH_xHeK.jpg"
              alt="A smiling bride in jewel tones surrounded by family"
              ratio="3/4"
              sizes="(max-width: 1024px) 33vw, 22vw"
            />
          </div>
          <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8 lg:pl-2">
            <p className="eyebrow">Wedding content creation · Abha &amp; Udit</p>
            <h2 id="home-real" className="sh-h3 mt-4">
              From Carnegie to Carnation.
            </h2>
            <p className="sh-body mt-4">
              Same-day wedding content for a full-day Indian-American wedding
              across Seattle and the South Sound — reels, Stories and candid
              video of the dances, traditions and a room completely in on the
              celebration, shared while it was happening.
            </p>
            <div className="sh-boxed__stats mt-7">
              <div>
                <p className="sh-stat__n sh-stat__n--sm">28</p>
                <p className="sh-num mt-2">Videos from one day</p>
              </div>
              <div>
                <p className="sh-stat__n sh-stat__n--sm">80K+</p>
                <p className="sh-num mt-2">Views · 60K+ in 3 days</p>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link to="/content-portfolio" className="sh-btn-fill">
                See the content
              </Link>
              <Link to="/content-creation" className="sh-invite__alt">
                About content creation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6 · Portraits — one quiet row, not a menu */}
      <section className="rose-paper sh-section" aria-labelledby="home-portraits">
        <div className="sh-wrap">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <p className="sh-script">There is life outside the aisle.</p>
              <h2 id="home-portraits" className="sh-h2 mt-3">
                Portraits, too.
              </h2>
              <p className="sh-body mt-5 max-w-md">
                Engagements, couples, graduates and the people you love —
                photographed with the same light and the same care.
              </p>
              <Link to="/photography" className="sh-link mt-6">
                Portrait sessions →
              </Link>
            </div>
            <div className="sh-arches lg:col-span-7">
              <figure className="sh-arch sh-drift" style={{ ["--drift" as string]: "24px" }}>
                <img src="/assets/stills/grad-hall.jpg" alt="Graduate in a purple gown seated beneath gothic windows" loading="lazy" decoding="async" />
              </figure>
              <figure className="sh-arch sh-arch--tall sh-drift" style={{ ["--drift" as string]: "-30px" }}>
                <img src="/assets/stills/maternity-water.jpg" alt="Expecting mother floating in clear blue water" loading="lazy" decoding="async" />
              </figure>
              <figure className="sh-arch sh-drift" style={{ ["--drift" as string]: "36px" }}>
                <video src="/assets/motion/grad-flowers.mp4" poster="/assets/motion/grad-flowers.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="Graduation bouquet with a 2026 tassel" style={{ objectPosition: "0% center" }} />
              </figure>
              <span className="sh-scriptword sh-arches__word" aria-hidden="true">
                and you
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 7 · How it works — a real sequence */}
      <section className="sh-wrap sh-section" aria-labelledby="home-steps">
        <p className="eyebrow">How it works</p>
        <h2 id="home-steps" className="sh-h2 mt-4 max-w-2xl">
          Three steps to your wedding day.
        </h2>
        <ol className="sh-steps mt-12">
          <li className="sh-step">
            <p className="sh-num">01</p>
            <h3 className="sh-h3 mt-3">Tell us your date</h3>
            <p className="sh-body mt-3">
              We keep our calendar small, so dates go quickly. Share the date,
              the place and the feeling you want. We reply personally within 24
              hours, often with a short voice note.
            </p>
          </li>
          <li className="sh-step">
            <p className="sh-num">02</p>
            <h3 className="sh-h3 mt-3">Plan it together</h3>
            <p className="sh-body mt-3">
              Coffee or a call, a look at locations and light, and a timeline
              built so nothing important is rushed. Once you book, a welcome
              package arrives by mail with your styling guide.
            </p>
          </li>
          <li className="sh-step">
            <p className="sh-num">03</p>
            <h3 className="sh-h3 mt-3">Live it. Keep it.</h3>
            <p className="sh-body mt-3">
              Be fully present on the day. Sneak peeks arrive within 48 hours,
              your gallery on the date we promise in writing, and an heirloom
              album if you&rsquo;d like something to hold.
            </p>
          </li>
        </ol>
      </section>

      <Faq title="Before you book" items={FAQ} />
    </ContentShell>
  );
}

export default Home;
