import { createFileRoute, Link } from "@tanstack/react-router";

import { ContentShell } from "@/components/house/content-shell";
import { Faq } from "@/components/house/faq";
import { FilmRail } from "@/components/house/film-rail";
import { HeroFilm } from "@/components/house/hero-film";
import { WeddingSteps } from "@/components/house/wedding-steps";
import { Wordmark } from "@/components/house/wordmark";
import { Photo } from "@/components/house/photo";
import { PhotoRail } from "@/components/house/photo-rail";
import { SwipeHints } from "@/components/house/swipe-hints";
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
        video="/assets/motion/hero.mp4"
        sound
        image="/assets/motion/hero.jpg"
        alt="Newlyweds holding each other on a hill as the evening sun pours over them"
        position="center 27%"
      >
        <div className="sh-hero__center">
          <Wordmark />
          <h1 className="sh-hero__tagline">
            Seattle &amp; Tacoma wedding photography and film for the days worth keeping
          </h1>
          <a href="mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" className="sh-hero__btn">
            Email us
          </a>
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
          </div>
          <div className="sh-collage">
            <figure className="sh-collage__arch sh-drift" style={{ ["--drift" as string]: "-36px" }}>
              {/* Computers: the kiss under the floral arch, in the house brown tone. Phones keep the lawn photo. */}
              <picture>
                <source media="(min-width: 1024px)" srcSet="/assets/stills/couple-kiss.jpg" />
                <img src="/assets/stills/couple-field.jpg" alt="Bride and groom sharing a kiss beneath a floral arch" className="sh-collage__arch-img" loading="lazy" decoding="async" />
              </picture>
            </figure>
            <figure className="sh-collage__polaroid sh-drift" style={{ ["--drift" as string]: "40px" }}>
              <img src="/assets/stills/couple-field.jpg" alt="Bride and groom walking hand in hand across a green lawn, seen from above" loading="lazy" decoding="async" />
            </figure>
            <Link to="/about" hash="welcome" className="sh-collage__more">
              More about us + our welcome film →
            </Link>
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
        <Link to="/weddings" className="relative block sh-weddings-link" aria-label="See wedding photography">
        {/* Forever / documented lettering — removed for now (art kept in /assets/brand/script-*) */}
        <div className="sh-mosaic">
          <Photo
            src="/assets/gallery/bride-portrait.png" motion="/assets/motion/bride" motionPosition="38% center" need="Wedding 1 of 5: a bride"
            alt="Bridal portrait of a bride in a lace gown looking toward the light"
            ratio="2/3"
            sizes="(max-width: 900px) 50vw, 42vw"
          />
          <Photo
            src="/assets/gallery/sunset-couple.png" className="sh-rosetone" motion="/assets/motion/couple-hill" motionPosition="45% center" need="Wedding 2 of 5: a couple portrait"
            alt="Newlyweds embracing on a hill at sunset, in black and white"
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
            src="/assets/gallery/rings.jpg" className="sh-rosetone sh-mosaic__wide" motion="/assets/motion/ring" need="Wedding 4 of 5: a detail (rings, dress, flowers)"
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
        </Link>
      </section>

      {/* 4 · Film — one cinematic strip, kept compact */}
      <section className="sh-night sh-film-band" aria-labelledby="home-film">
        <div className="sh-wrap grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Wedding film</p>
            <h2 id="home-film" className="sh-h2 mt-4">
              Hear the vows <em>again</em>.
            </h2>
            <p className="sh-body mt-4 max-w-sm">
              The voices, the laughter, the last dance — filmed alongside your
              photographs.
            </p>
          </div>
          <div className="min-w-0 lg:col-span-8">
            <FilmRail
              tag={
                <Link to="/film" className="sh-collage__more sh-filmtag">
                  More about our films →
                </Link>
              }
            />
          </div>
        </div>
      </section>

      {/* 5 · Wedding content creation — a real wedding */}
      <section className="sh-wrap sh-section--tight" aria-labelledby="home-real">
        {/* Phones: one short box you swipe through, left to right */}
        <div className="sh-boxed sh-swipebox lg:hidden">
          <p className="eyebrow">Wedding content creation · Abha &amp; Udit</p>
          <h2 className="sh-h3 mt-3">From Carnegie to Carnation.</h2>
          <div className="sh-swipe mt-5" aria-label="Swipe for more">
            <div className="sh-swipe__card sh-swipe__card--text">
              <p className="sh-body">
                Same-day reels, Stories and candid video of a full-day
                Indian-American wedding, shared while it was happening.
              </p>
              <div className="sh-swipe__stats">
                <div>
                  <p className="sh-stat__n sh-stat__n--sm">28</p>
                  <p className="sh-num mt-1">Videos, one day</p>
                </div>
                <div>
                  <p className="sh-stat__n sh-stat__n--sm">80K+</p>
                  <p className="sh-num mt-1">Views · 60K+ in 3 days</p>
                </div>
              </div>
            </div>
            <img className="sh-swipe__card" src="/assets/content-work/Dc-CDETMQt6.jpg" alt="Abha and Udit dancing beneath chandeliers at their reception" loading="lazy" decoding="async" />
            <img className="sh-swipe__card" src="/assets/content-work/Dc94ykltayq.jpg" alt="The bride and groom embracing during their mehndi celebration" loading="lazy" decoding="async" />
            <img className="sh-swipe__card" src="/assets/content-work/Dc96eH_xHeK.jpg" alt="A smiling bride in jewel tones surrounded by family" loading="lazy" decoding="async" />
          </div>
          <p className="sh-swipe__hint" aria-hidden="true">Swipe to see more →</p>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
            <Link to="/content-portfolio" className="sh-btn-fill">
              See the content
            </Link>
            <Link to="/content-creation" className="sh-invite__alt">
              About →
            </Link>
          </div>
        </div>

        <div className="sh-boxed hidden gap-10 lg:grid lg:grid-cols-12 lg:items-center">
          <div className="order-2 grid grid-cols-3 gap-3 md:gap-4 lg:order-1 lg:col-span-7">
            <Photo
              src="/assets/content-work/Dc-CDETMQt6.jpg"
              alt="Abha and Udit dancing beneath chandeliers at their Indian-American wedding reception"
              ratio="9/16"
              sizes="(max-width: 1024px) 33vw, 22vw"
            />
            <Photo
              src="/assets/content-work/Dc94ykltayq.jpg"
              alt="The bride and groom embracing during their mehndi celebration"
              ratio="9/16"
              sizes="(max-width: 1024px) 33vw, 22vw"
            />
            <Photo
              src="/assets/content-work/Dc96eH_xHeK.jpg"
              alt="A smiling bride in jewel tones surrounded by family"
              ratio="9/16"
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
            <div className="sh-pair mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link to="/content-portfolio" className="sh-btn-fill">
                See the content
              </Link>
              <Link to="/content-creation" className="sh-invite__alt">
                How it works →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6 · Portraits — one quiet row, not a menu */}
      <section className="rose-paper sh-section" aria-labelledby="home-portraits">
        <div className="sh-wrap">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="sh-script">There is life outside the aisle.</p>
              <h2 id="home-portraits" className="sh-h2 mt-3">
                Portraits, too.
              </h2>
              <p className="sh-body mt-5 max-w-md">
                Engagements, couples, graduates and the people you love —
                photographed with the same light and the same care.
              </p>
            </div>
            <div className="min-w-0 lg:col-span-7">
              <PhotoRail
                label="Portrait sessions"
                corner={
                  <Link to="/photography" className="sh-collage__more sh-corner__link">
                    Portrait sessions →
                  </Link>
                }
                ratio="4/5"
                to="/photography"
                items={[
                  { src: "/assets/motion/grad-flowers.jpg", video: "/assets/motion/grad-flowers.mp4", alt: "Graduation bouquet with a 2026 tassel", position: "center" },
                  { src: "/assets/motion/maternity-meadow.jpg", video: "/assets/motion/maternity-meadow.mp4", alt: "Expecting mother in a meadow with deer grazing behind her", position: "78% center" },
                  { src: "/assets/stills/senior-3.jpg", alt: "Senior smiling in tall golden grass" },
                  { src: "/assets/stills/creative-2.jpg", alt: "Styled portrait against a red wall" },
                  { src: "/assets/stills/senior-13.jpg", alt: "Senior in a shearling-collar jacket in the woods" },
                  { src: "/assets/stills/creative-1.jpg", alt: "Silhouette in a mirror against a teal patterned screen" },
                  { src: "/assets/stills/senior-6.jpg", alt: "Senior in a white blouse in a sunlit meadow" },
                  { src: "/assets/stills/grad-hall.jpg", alt: "Graduate in a purple gown seated beneath gothic windows" },
                  { src: "/assets/stills/maternity-water.jpg", alt: "Expecting mother floating in clear blue water", position: "60% center" },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6b · Frames + locations — hidden for now */}

      {/* 7 · How it works — told as you scroll */}
      <WeddingSteps />

      <SwipeHints />
      <Faq title="Before you book" items={FAQ} />
    </ContentShell>
  );
}

export default Home;
