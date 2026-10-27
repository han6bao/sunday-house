import { createFileRoute, Link } from "@tanstack/react-router";

import { StructuredData } from "@/components/StructuredData";
import { ContentShell } from "@/components/house/content-shell";
import { Faq } from "@/components/house/faq";
import { Photo } from "@/components/house/photo";
import { AREAS, GUIDES, GUIDE_META, GUIDE_NOTES, SESSIONS, getGuide, guideFaq, type Guide } from "@/lib/location-guides";
import { absoluteUrl, pageHead } from "@/lib/seo";

/**
 * Location guide pages. Deliberately left out of the menu and footer: they're
 * listed in the sitemap for search engines and link to each other.
 */
export const Route = createFileRoute("/guides/$slug")({
  head: ({ params }) => {
    const g = getGuide(params.slug);
    if (!g) {
      return pageHead({
        title: "Location Guides | Sunday House",
        description: "Photo location guides for Seattle, Tacoma, Lakewood and Bellevue.",
        path: "/guides",
        noindex: true,
      });
    }
    const s = SESSIONS[g.session];
    const a = AREAS[g.area];
    const hero = g.spots.find((x) => x.photo);
    return pageHead({
      title: s.title(a.name),
      description: s.description(a.name),
      path: `/guides/${g.slug}`,
      type: "article",
      ...(hero?.photo ? { image: hero.photo.src, imageAlt: `${hero.name}, ${hero.city}` } : {}),
    });
  },
  component: GuideRoute,
});

function GuideRoute() {
  const { slug } = Route.useParams();
  const g = getGuide(slug);
  if (!g) {
    return (
      <ContentShell>
        <div className="sh-wrap sh-section text-center">
          <h1 className="sh-h2">Not quite this room.</h1>
          <Link to="/guides" className="sh-link mt-6">
            See all location guides →
          </Link>
        </div>
      </ContentShell>
    );
  }
  return <GuidePage guide={g} />;
}

function itemListJsonLd(g: Guide, name: string): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url: absoluteUrl(`/guides/${g.slug}`),
    itemListElement: g.spots.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "TouristAttraction",
        name: s.name,
        description: s.blurb,
        address: { "@type": "PostalAddress", addressLocality: s.city, addressRegion: "WA", addressCountry: "US" },
        hasMap: s.mapUrl,
        ...(s.photo ? { image: absoluteUrl(s.photo.src) } : {}),
      },
    })),
  });
}

function GuidePage({ guide: g }: { guide: Guide }) {
  const s = SESSIONS[g.session];
  const a = AREAS[g.area];
  const h1 = s.h1(a.name);
  const faq = guideFaq(g);
  const sameSession = GUIDES.filter((x) => x.session === g.session && x.area !== g.area);
  const sameArea = GUIDES.filter((x) => x.area === g.area && x.session !== g.session);

  return (
    <ContentShell
      path={`/guides/${g.slug}`}
      breadcrumb={[
        { name: "Location guides", path: "/guides" },
        { name: h1, path: `/guides/${g.slug}` },
      ]}
    >
      <StructuredData json={itemListJsonLd(g, h1)} />

      <section className="sh-wrap pt-14 md:pt-20">
        <p className="eyebrow">Location guide · {a.name}</p>
        <h1 className="sh-h1 mt-4 max-w-4xl">{h1}</h1>
        <div className="sh-guide-meta mt-6">
          {GUIDE_META[g.session].map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
        {GUIDE_NOTES[g.slug] ? <p className="sh-guide-note mt-10 max-w-3xl">{GUIDE_NOTES[g.slug]}</p> : null}
        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <p className="sh-lede lg:col-span-6">{s.intro}</p>
          <p className="sh-body lg:col-span-5 lg:col-start-8">{a.intro}</p>
        </div>
        <button type="button" className="sh-link sh-noprint mt-8" onClick={() => window.print()}>
          Save or print this guide →
        </button>
      </section>

      <section className="sh-wrap sh-section" aria-label={`${s.short} locations in ${a.name}`}>
        <div className="grid gap-14 md:gap-20">
          {g.spots.map((spot) => (
            <article key={spot.name} className="grid gap-6 border-t border-ink/15 pt-8 lg:grid-cols-12 lg:gap-10">
              {spot.photo ? (
                <figure className="lg:col-span-6">
                  <Photo src={spot.photo.src} alt={`${spot.name} in ${spot.city}`} ratio="4/3" sizes="(max-width: 1024px) 100vw, 45vw" />
                  <figcaption className="sh-body mt-2 text-sm">
                    Photo:{" "}
                    <a href={spot.photo.credit.href} target="_blank" rel="noreferrer" className="underline underline-offset-2">
                      {spot.photo.credit.text}
                    </a>
                  </figcaption>
                </figure>
              ) : null}
              <div className={spot.photo ? "lg:col-span-5 lg:col-start-8" : "lg:col-span-8"}>
                <p className="eyebrow">{spot.city}</p>
                <h2 className="sh-h2 mt-3">{spot.name}</h2>
                <p className="sh-body mt-4 max-w-xl">{spot.blurb}</p>
                <a href={spot.mapUrl} target="_blank" rel="noreferrer" className="sh-link mt-6">
                  Open in Maps →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rose-paper sh-section" aria-labelledby="guide-tips">
        <div className="sh-wrap grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Good to know</p>
            <h2 id="guide-tips" className="sh-h2 mt-4">
              Plan it like a photographer.
            </h2>
          </div>
          <ul className="grid gap-6 lg:col-span-7 lg:col-start-6">
            {[...s.tips, a.season].map((t) => (
              <li key={t} className="sh-body border-b border-ink/15 pb-6">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sh-wrap sh-section text-center">
        <p className="eyebrow">{s.service.label}</p>
        <p className="sh-h2 mx-auto mt-5 max-w-3xl">
          Want us to plan the light, the timing and the spot?
        </p>
        <p className="sh-body mx-auto mt-5 max-w-xl">
          We photograph across Seattle, Tacoma and the South Sound, and we take a limited number of sessions each month.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" className="hz-btn hz-btn--solid">
            Inquire
          </a>
          <a href={s.service.to} className="hz-btn">
            {s.service.label}
          </a>
        </div>
      </section>

      <Faq title={`${s.short} in ${a.name}`} items={faq} />

      <section className="sh-wrap pb-[clamp(4rem,8vw,7rem)]" aria-labelledby="guide-more">
        <h2 id="guide-more" className="eyebrow">
          More location guides
        </h2>
        <div className="mt-6 grid gap-x-10 sm:grid-cols-2">
          <ul>
            {sameSession.map((x) => (
              <li key={x.slug} className="border-b border-ink/15">
                <Link to="/guides/$slug" params={{ slug: x.slug }} className="group flex items-baseline justify-between py-4">
                  <span className="sh-h3 group-hover:italic">
                    {s.short} in {AREAS[x.area].name}
                  </span>
                  <span className="sh-num">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            {sameArea.map((x) => (
              <li key={x.slug} className="border-b border-ink/15">
                <Link to="/guides/$slug" params={{ slug: x.slug }} className="group flex items-baseline justify-between py-4">
                  <span className="sh-h3 group-hover:italic">
                    {SESSIONS[x.session].short} in {a.name}
                  </span>
                  <span className="sh-num">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </ContentShell>
  );
}
