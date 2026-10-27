import { Link } from "@tanstack/react-router";

import { Heart } from "./marks";

const STRIP = [
  "/assets/stills/couple-sunset.jpg",
  "/assets/stills/bride-garden.jpg",
  "/assets/stills/wed-veil.jpg",
  "/assets/stills/couple-field.jpg",
  "/assets/stills/wed-forehead.jpg",
  "/assets/stills/hill-sunrise.jpg",
];

const COLS: { head: string; links: { label: string; href: string; params?: Record<string, string>; hash?: string }[] }[] = [
  {
    head: "Weddings",
    links: [
      { label: "Wedding Photography", href: "/weddings" },
      { label: "Wedding Film", href: "/film" },
      { label: "Seattle Weddings", href: "/services/$slug", params: { slug: "seattle-wedding-photographer" } },
      { label: "Tacoma Weddings", href: "/services/$slug", params: { slug: "tacoma-wedding-photographer" } },
      { label: "Engagements + Couples", href: "/services/$slug", params: { slug: "engagement-photography" } },
      { label: "Elopements", href: "/services/$slug", params: { slug: "elopement-photography" } },
      { label: "Cultural + Two-Day", href: "/weddings", hash: "cultural" },
    ],
  },
  {
    head: "Portraits",
    links: [
      { label: "Seniors + Grads", href: "/services/$slug", params: { slug: "senior-portraits" } },
      { label: "Families + Maternity", href: "/services/$slug", params: { slug: "family-photography" } },
      { label: "Creative Sessions", href: "/services/$slug", params: { slug: "creative-portraits" } },
      { label: "All Services", href: "/services" },
    ],
  },
  {
    head: "The House",
    links: [
      { label: "About", href: "/about" },
      { label: "Content Creation", href: "/content-creation" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="hz-footer">
      <div className="mx-auto max-w-[1400px] px-5 pb-12 pt-0 md:px-8 md:pb-16">
        {/* A quiet strip of photographs */}
        <div className="hz-footer__strip" aria-hidden="true">
          {STRIP.map((src) => (
            <img key={src} src={src} alt="" loading="lazy" decoding="async" />
          ))}
        </div>

        <div className="hz-footer__center">
          <picture>
            <source srcSet="/assets/brand/logo-sunday-house-pink.webp" type="image/webp" />
            <img src="/assets/brand/logo-sunday-house-pink.png" alt="Sunday House" className="hz-footer__logo-img" loading="lazy" />
          </picture>
          <p className="hz-footer__tag">For the days worth keeping.</p>
          <p className="hz-footer__about">
            Wedding photography and film from Tacoma, for weddings across Seattle,
            the South Sound and the Pacific Northwest.
          </p>
          <a href="mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" className="hz-footer__cta">
            Inquire
          </a>

          {/* Phones: one short row of the essentials */}
          <nav aria-label="Footer" className="md:hidden">
            <ul className="hz-footer__row">
              {[
                { label: "Weddings", href: "/weddings" },
                { label: "Portraits", href: "/photography" },
                { label: "Film", href: "/film" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                        ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hz-footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Computers: three quiet drop-downs */}
          <div className="hz-footer__drops hidden md:flex">
            {COLS.map((col) => (
              <details key={col.head} className="hz-footer__drop">
                <summary className="hz-footer__head">
                  {col.head} <span aria-hidden="true" className="hz-footer__chev" />
                </summary>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.href} params={link.params} hash={link.hash} className="hz-footer__link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </div>

      <div className="hz-footer__rule border-t">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-5 py-5 text-center md:flex-row md:px-8 md:text-left">
          <p className="hz-footer__micro flex items-center gap-2">
            <Heart className="h-3.5 w-3.5" /> © {new Date().getFullYear()} Sunday House · sundayhousepnw.com
          </p>
          <p className="hz-footer__micro hidden md:block">Seattle · Tacoma · Gig Harbor · Bellevue · Washington + beyond</p>
        </div>
      </div>
    </footer>
  );
}
