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
      image: "/assets/gallery/kiss-bw.png",
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
  const weddings = SERVICES.filter((s) => s.group === "weddings");
  const portraits = SERVICES.filter((s) => s.group === "portraits");
  return (
    <ContentShell breadcrumb={[{ name: "Services", path: "/services" }]}>
      <section className="sh-wrap pt-[clamp(3rem,7vw,6rem)]">
        <p className="sh-script">Everything, in one house.</p>
        <h1 className="sh-h1 mt-3 max-w-4xl">
          Photography <em>&amp; film</em> services in Seattle + Tacoma.
        </h1>
        <p className="sh-lede mt-6 max-w-2xl">
          Weddings come first here, with portraits and celebrations close
          behind. Choose what you&rsquo;re planning to see how we approach it.
        </p>
      </section>

      <section className="sh-wrap sh-section grid gap-14 lg:grid-cols-2" aria-label="Services">
        <div>
          <h2 className="eyebrow">Weddings</h2>
          <ul className="mt-6">
            {OTHER_SERVICE_PAGES.slice(0, 2).map((o) => (
              <ServiceRow key={o.to} to={o.to} name={o.name} note={o.note} photo={o.photo} />
            ))}
            {weddings.map((s) => (
              <ServiceRow key={s.slug} to="/services/$slug" params={{ slug: s.slug }} name={s.name} note={s.script} photo={s.photos[0]} />
            ))}
          </ul>
        </div>
        <div>
          <h2 className="eyebrow">Portraits + celebrations</h2>
          <ul className="mt-6">
            {portraits.map((s) => (
              <ServiceRow key={s.slug} to="/services/$slug" params={{ slug: s.slug }} name={s.name} note={s.script} photo={s.photos[0]} />
            ))}
          </ul>
          <h2 className="eyebrow mt-14">For your day</h2>
          <ul className="mt-6">
            {OTHER_SERVICE_PAGES.slice(2).map((o) => (
              <ServiceRow key={o.to} to={o.to} name={o.name} note={o.note} photo={o.photo} />
            ))}
          </ul>
        </div>
      </section>
    </ContentShell>
  );
}
