import { createFileRoute, Link } from "@tanstack/react-router";

import { ContentShell } from "@/components/house/content-shell";
import { Photo } from "@/components/house/photo";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/extras")({
  head: () =>
    pageHead({
      title: "Wedding Extras: Websites, Paper + Prints | Sunday House",
      description:
        "Extras from Sunday House: custom wedding websites, invitations and signage, and heirloom albums, frames and prints made from your photographs.",
      path: "/extras",
    }),
  component: Extras,
});

const EXTRAS = [
  {
    kicker: "01 · Online",
    title: "Wedding websites",
    body: "Your story, schedule, travel, RSVP and registry in one place, designed to match the day instead of a template with your names on it.",
    points: ["Countdown, schedule + venue", "Travel + places to stay", "RSVP, registry + FAQ"],
    to: "/wedding-websites",
    cta: "See an example",
    photo: { src: "/assets/portfolio/sofia-mateo-hero.jpg", alt: "A wedding website designed for Sofia and Mateo" },
  },
  {
    kicker: "02 · Paper",
    title: "Invitations + signage",
    body: "Save-the-dates, invitations, menus, welcome signs and thank-you cards, designed to sit beside your photographs.",
    points: ["Save-the-dates + invitations", "Menus, programs + seating charts", "Thank-you cards + announcements"],
    to: "/custom-pieces",
    cta: "See the pieces",
    photo: { src: "/assets/card/card-web.webp", alt: "A printed Sunday House card" },
  },
  {
    kicker: "03 · Keepsakes",
    title: "Albums, frames + prints",
    body: "So your favorite photographs don't stay on your phone. Heirloom albums, framed pieces and fine-art prints.",
    points: ["Heirloom albums", "Framed photographs", "Fine-art prints"],
    to: "/house-objects",
    cta: "See the keepsakes",
    photo: { src: "/assets/gallery/rings.jpg", alt: "Wedding rings close-up" },
  },
] as const;

export default function Extras() {
  return (
    <ContentShell path="/extras" breadcrumb={[{ name: "Extras", path: "/extras" }]}>
      <section className="sh-wrap pt-[clamp(3rem,7vw,6rem)]">
        <p className="sh-script">The little things, kept.</p>
        <h1 className="sh-h1 mt-3 max-w-4xl">
          Extras for <em>your</em> day.
        </h1>
        <p className="sh-lede mt-6 max-w-2xl">
          A few things we make beyond the photographs: a website for your guests,
          paper for the day, and something to hold once it's over. Add any of
          them to your collection, or ask about them on their own.
        </p>
      </section>

      <section className="sh-wrap sh-section" aria-label="Extras">
        <ul className="space-y-[clamp(3rem,6vw,5rem)]">
          {EXTRAS.map((x, i) => (
            <li key={x.title} className="grid gap-8 border-t border-ink/15 pt-10 lg:grid-cols-12 lg:items-center">
              <div className={`lg:col-span-5 ${i % 2 ? "lg:order-2 lg:col-start-8" : ""}`}>
                <Photo src={x.photo.src} alt={x.photo.alt} ratio="4/3" sizes="(max-width: 1024px) 100vw, 40vw" />
              </div>
              <div className={`lg:col-span-6 ${i % 2 ? "lg:order-1" : "lg:col-start-7"}`}>
                <p className="sh-num">{x.kicker}</p>
                <h2 className="sh-h2 mt-3">{x.title}</h2>
                <p className="sh-body mt-4 max-w-xl">{x.body}</p>
                <ul className="sh-price__pts mt-5">
                  {x.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <Link to={x.to} className="sh-invite__alt mt-6 inline-block">
                  {x.cta} →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="sh-wrap pb-[clamp(4rem,8vw,7rem)] text-center">
        <div className="sh-boxed">
          <p className="eyebrow">Add it on</p>
          <p className="sh-h2 mx-auto mt-4 max-w-2xl">
            Tell us what you'd <em>like</em>.
          </p>
          <p className="sh-body mx-auto mt-4 max-w-xl">Mention any of these when you inquire, and we'll include them in your proposal.</p>
          <Link to="/experience/$kind" params={{ kind: "weddings" }} className="sh-btn-fill mt-8">
            Check your date
          </Link>
        </div>
      </section>
    </ContentShell>
  );
}
