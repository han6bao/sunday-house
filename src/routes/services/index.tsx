import { createFileRoute, Link } from "@tanstack/react-router";

import { ContentShell } from "@/components/house/content-shell";
import { Photo } from "@/components/house/photo";
import { pageHead } from "@/lib/seo";
import { OTHER_SERVICE_PAGES, SERVICES } from "@/lib/services";

export const Route = createFileRoute("/services/")({
  head: () =>
    pageHead({
      title: "Wedding + Portrait Photography Services | Sunday House",
      description:
        "Every Sunday House service in one place: wedding photography and film, engagements, elopements, bridal portraits, couples, seniors, families and more in Seattle and Tacoma.",
      path: "/services",
      image: "/assets/gallery/kiss-bw-2.png",
    }),
  component: Services,
});

function ServiceRow({ to, params, name, note, photo }: { to: string; params?: Record<string, string>; name: string; note: string; photo?: { src: string; alt: string; need?: string } }) {
  return (
    <li className="border-b border-ink/15 first:border-t">
      <Link to={to as never} params={params as never} className="group grid grid-cols-[4.5rem_1fr] items-center gap-5 py-5 md:grid-cols-[6rem_1fr_auto]">
        {photo ? (
          <Photo src={photo.src} alt={photo.alt} need={photo.need ? "To come" : undefined} ratio="1/1" sizes="6rem" />
        ) : (
          <span className="sh-ph block aspect-square" aria-hidden="true" />
        )}
        <span>
          <span className="sh-h3 block group-hover:italic">{name}</span>
          <span className="sh-body mt-1 block text-base">{note}</span>
        </span>
        <span className="sh-num hidden md:block">View →</span>
      </Link>
    </li>
  );
}

function Services() {
  // Location pages (Seattle, Tacoma) stay live for search but stay out of this simple list.
  const weddings = SERVICES.filter((s) => s.group === "weddings" && !s.slug.endsWith("wedding-photographer"));
  const portraits = SERVICES.filter((s) => s.group === "portraits");
  const [wedPhoto, wedFilm, content] = OTHER_SERVICE_PAGES;
  return (
    <ContentShell breadcrumb={[{ name: "Services", path: "/services" }]}>
      <section className="sh-wrap pt-[clamp(3rem,7vw,6rem)]">
        <p className="sh-script">Everything, in one house.</p>
        <h1 className="sh-h1 mt-3 max-w-4xl">
          Photography <em>&amp; film</em> services in Seattle + Tacoma.
        </h1>
        <p className="sh-lede mt-6 max-w-2xl">Pick what you&rsquo;re planning. Each one has its own page with photos, details and prices.</p>
        <nav aria-label="Jump to a group" className="mt-8 flex flex-wrap gap-2">
          <a href="#weddings" className="sh-chip">Weddings</a>
          <a href="#portraits" className="sh-chip">Portraits</a>
          <a href="#content" className="sh-chip">Content</a>
        </nav>
      </section>

      <section className="sh-wrap sh-section grid gap-14 lg:grid-cols-3" aria-label="Services">
        <div id="weddings" className="scroll-mt-24">
          <h2 className="eyebrow">Weddings</h2>
          <ul className="mt-6">
            {[wedPhoto, wedFilm].map((o) => (
              <ServiceRow key={o.to} to={o.to} name={o.name} note={o.note} photo={o.photo} />
            ))}
            {weddings.map((s) => (
              <ServiceRow key={s.slug} to="/services/$slug" params={{ slug: s.slug }} name={s.name} note={s.script} photo={s.photos[0]} />
            ))}
          </ul>
        </div>
        <div id="portraits" className="scroll-mt-24">
          <h2 className="eyebrow">Portraits</h2>
          <ul className="mt-6">
            {portraits.map((s) => (
              <ServiceRow key={s.slug} to="/services/$slug" params={{ slug: s.slug }} name={s.name} note={s.script} photo={s.photos[0]} />
            ))}
            <ServiceRow to="/photography" name="All portrait prices" note="Every session and its price, in one list." photo={{ src: "/assets/stills/senior-6.jpg", alt: "Senior in a white blouse in a sunlit meadow" }} />
          </ul>
        </div>
        <div id="content" className="scroll-mt-24">
          <h2 className="eyebrow">Content</h2>
          <ul className="mt-6">
            <ServiceRow to={content.to} name="Content Creation" note={content.note} photo={content.photo} />
          </ul>
        </div>
      </section>
    </ContentShell>
  );
}
