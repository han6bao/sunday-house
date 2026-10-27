import { Link } from "@tanstack/react-router";

import { StructuredData } from "@/components/StructuredData";
import { getService, SERVICES, type Service } from "@/lib/services";
import { serviceJsonLd } from "@/lib/seo";

import { ContentShell } from "./content-shell";
import { Faq } from "./faq";
import { Photo } from "./photo";
import { PortraitDeck } from "./portrait-deck";

/** Renders "Words *emphasis* words" with the starred part in italics. */
export function Emph({ text }: { text: string }) {
  const parts = text.split("*");
  return (
    <>
      {parts.map((p, i) => (i % 2 ? <em key={i}>{p}</em> : <span key={i}>{p}</span>))}
    </>
  );
}

export function ServicePage({ service }: { service: Service }) {
  const [hero, ...rest] = service.photos;
  const related = service.related.map(getService).filter(Boolean) as Service[];
  const groupLabel = service.group === "weddings" ? "Weddings" : "Portraits";
  const groupPath = service.group === "weddings" ? "/weddings" : "/photography";

  return (
    <ContentShell
      path={groupPath}
      breadcrumb={[
        { name: "Services", path: "/services" },
        { name: service.name, path: `/services/${service.slug}` },
      ]}
    >
      <StructuredData
        json={serviceJsonLd({
          name: service.name,
          serviceType: service.serviceType,
          description: service.description,
          path: `/services/${service.slug}`,
          image: hero.src,
        })}
      />

      <ServiceDeck service={service} related={related} />

      {/* Hero */}
      <section className="sh-wrap">
        <div className="sh-pagehero">
          <div className="pb-4">
            <p className="sh-caption !mt-0 !justify-start gap-3">
              <Link to="/services" className="hover:underline">Services</Link>
              <span aria-hidden="true">/</span>
              <Link to={groupPath} className="hover:underline">{groupLabel}</Link>
            </p>
            <p className="sh-script mt-6">{service.script}</p>
            <h1 className="sh-h1 mt-3">
              <Emph text={service.h1} />
            </h1>
            <p className="sh-lede mt-6 max-w-xl">{service.intro[0]}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" className="hz-btn hz-btn--solid">
                Inquire
              </a>
            </div>
          </div>
          <Photo src={hero.src} alt={hero.alt} need={hero.need} ratio="4/5" priority sizes="(max-width: 1024px) 100vw, 40vw" />
        </div>
      </section>

      {/* Story + photos */}
      <section className="sh-wrap sh-section">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className={rest.length > 6 ? "lg:col-span-8" : "lg:col-span-5"}>
            <h2 className="sh-h2">What to expect</h2>
            {service.intro.slice(1).map((p) => (
              <p key={p} className="sh-body mt-6">
                {p}
              </p>
            ))}
          </div>
          {rest.length === 1 ? (
            <div className={rest[0].ratio ? "lg:col-span-7 lg:col-start-6" : "lg:col-span-6 lg:col-start-7"}>
              <Photo src={rest[0].src} alt={rest[0].alt} need={rest[0].need} ratio={rest[0].ratio ?? "4/5"} sizes="(max-width: 1024px) 100vw, 45vw" />
            </div>
          ) : (
          <div className={rest.length > 6 ? "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-12 lg:grid-cols-6" : `grid gap-4 lg:col-span-7 ${rest.length > 2 ? "grid-cols-3" : "grid-cols-2"}`}>
            {rest.map((ph, i) => (
              <Photo
                key={ph.src}
                src={ph.src}
                alt={ph.alt}
                need={ph.need}
                ratio="2/3"
                className={rest.length <= 6 && i % 2 ? "mt-10" : ""}
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            ))}
          </div>
          )}
        </div>
      </section>

      {/* Highlights */}
      <section className="rose-paper sh-section">
        <div className="sh-wrap">
          <p className="eyebrow">Why Sunday House</p>
          <ol className="sh-steps mt-8">
            {service.highlights.map((h, i) => (
              <li key={h.title} className="sh-step">
                <p className="sh-num">0{i + 1}</p>
                <h3 className="sh-h3 mt-3">{h.title}</h3>
                <p className="sh-body mt-3">{h.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Faq title={`${service.name} questions`} items={service.faqs} />

      {/* Related services — internal links */}
      <section className="sh-wrap pb-[clamp(4rem,8vw,7rem)]" aria-labelledby="related-title">
        <div className="border-t border-ink/15 pt-10">
          <h2 id="related-title" className="eyebrow">
            You might also like
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to="/services/$slug" params={{ slug: r.slug }} className="group">
                <Photo src={r.photos[0].src} alt={r.photos[0].alt} need={r.photos[0].need} ratio="3/2" sizes="(max-width: 768px) 100vw, 33vw" />
                <p className="sh-h3 mt-4 group-hover:italic">{r.name} →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ContentShell>
  );
}

/** All services, grouped — the hub page and a source for internal links. */
export const SERVICE_COUNT = SERVICES.length;

/** Phones: the portrait page as full-screen slides you swipe through. */
function ServiceDeck({ service, related }: { service: Service; related: Service[] }) {
  const pics = service.photos.filter((p) => p.src);
  const pic = (i: number) => (pics[i] ? { src: pics[i].src, alt: pics[i].alt } : undefined);
  const price = service.faqs.find((f) => /how much|cost/i.test(f.q));
  return (
    <PortraitDeck
      cover={pics[0] ? { src: pics[0].src, alt: pics[0].alt } : { src: "/assets/stills/couple-nose-2.jpg", alt: "" }}
      label={service.name}
      slides={[
        { kicker: service.script, title: <Emph text={service.h1} />, body: <p>{service.intro[0]}</p>, img: pic(1) ?? pic(0) },
        {
          kicker: "The session",
          title: "What to expect",
          body: (
            <ul className="sh-deck__list">
              {service.highlights.map((h) => (
                <li key={h.title}>
                  <b>{h.title}</b>
                  <span>{h.body}</span>
                </li>
              ))}
            </ul>
          ),
        },
        ...(price ? [{ kicker: "Investment", title: "Simple, and in writing.", body: <p>{price.a}</p>, img: pic(2) ?? pic(0) }] : []),
      ]}
      primary={{ label: "Inquire", to: "mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" }}
      secondary={{ label: "All sessions", to: "/services" }}
      more={[...related.map((r) => ({ label: r.name, to: `/services/${r.slug}` })), service.group === "portraits" ? { label: "All portraits", to: "/photography" } : { label: "Weddings", to: "/weddings" }, { label: "Home", to: "/" }]}
    />
  );
}
