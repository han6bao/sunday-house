import { WhatBringsYou } from "@/components/house/what-brings-you";
import { createFileRoute, Link } from "@tanstack/react-router";

import { ContentShell } from "@/components/house/content-shell";
import { HeroFilm } from "@/components/house/hero-film";
import { Wordmark } from "@/components/house/wordmark";
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
            Inquire
          </a>
        </div>
      </HeroFilm>

      {/* What are you booking? Three doors, straight to each service. */}
      <WhatBringsYou />

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
    </ContentShell>
  );
}

export default Home;
