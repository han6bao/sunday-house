import { Link } from "@tanstack/react-router";

import { Heart, HouseMark } from "./marks";

const COLS: { head: string; links: { label: string; href: string; params?: Record<string, string>; hash?: string }[] }[] = [
  {
    head: "Weddings",
    links: [
      { label: "Wedding Photography", href: "/weddings" },
      { label: "Wedding Film", href: "/video" },
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
      { label: "Photo Locations", href: "/locations" },
      { label: "Extras", href: "/extras" },
      { label: "Inquire", href: "/experience/$kind", params: { kind: "weddings" } },
    ],
  },
];

export function Footer() {
  return (
    <footer className="hz-footer">
      <div className="mx-auto max-w-[1400px] px-5 py-10 md:px-8 md:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-7 md:grid-cols-5 md:gap-y-10">
          <div className="col-span-2">
            <HouseMark className="hz-footer__mark h-8 w-8 md:h-10 md:w-10" />
            <p className="mt-4 max-w-sm font-serif text-base leading-relaxed md:mt-6">
              Wedding photography and film, based in Tacoma, Washington and
              photographing weddings across Seattle, the South Sound and the
              Pacific Northwest.
            </p>
            <p className="hz-footer__muted mt-3 font-serif italic">
              For the days worth keeping.
            </p>
          </div>

          {/* Phones: one short row of the essentials instead of three long lists */}
          <nav aria-label="Footer" className="col-span-2 md:hidden">
            <ul className="flex flex-wrap gap-x-5 gap-y-3">
              {[
                { label: "Weddings", href: "/weddings" },
                { label: "Portraits", href: "/photography" },
                { label: "Film", href: "/video" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Inquire", href: "/experience/$kind", params: { kind: "weddings" } },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} params={link.params} className="hz-footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Computers: three quiet drop-downs instead of long lists */}
          <div className="hz-footer__drops hidden md:col-span-3 md:flex">
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
