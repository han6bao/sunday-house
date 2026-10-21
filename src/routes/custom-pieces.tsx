import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

import { ContentShell } from "@/components/house/content-shell";
import { ImageSlot } from "@/components/house/image-slot";
import { CustomPiecesToggle } from "@/components/house/custom-pieces-toggle";

export const Route = createFileRoute("/custom-pieces")({
  head: () =>
    pageHead({
      title: "Custom Wedding Invitations + Signage | Sunday House",
      description:
        "Custom pieces made for your wedding day: invitations, save-the-dates, signage, announcements and keepsakes designed to match your photographs.",
      path: "/custom-pieces",
    }),
  component: CustomPieces,
});

const WEDDING = [
  "Wedding Websites",
  "Save the Dates",
  "Invitations",
  "RSVP Designs",
  "Menus",
  "Programs",
  "Welcome Signs",
  "Seating Charts",
  "Place Cards",
  "Thank-You Cards",
  "Digital Wedding Materials",
  "Custom Signage Concepts",
  "Announcements",
];

const LIFE = [
  "Senior / Graduation Announcements",
  "Graduation Cards",
  "Family Holiday Cards",
  "Baby Announcements",
  "Birth Announcements",
  "Photo Albums",
  "Custom Print Layouts",
  "Thank-You Cards",
  "Keepsake Pieces",
];

export default function CustomPieces() {
  return (
    <ContentShell path="/custom-pieces" breadcrumb={[{ name: "Made for Your Day", path: "/custom-pieces" }]}>
      <section className="mx-auto max-w-[1400px] px-5 pt-14 md:px-8">
        <p className="sh-script  reveal">Made for your day.</p>
        <h1 className="reveal reveal--delay-1 mt-3 max-w-3xl sh-h1">
          Details from the House.
        </h1>
        <p className="reveal reveal--delay-2 mt-5 max-w-2xl font-serif text-lg leading-relaxed text-brown">
          Sunday House can design custom visual and digital pieces for weddings
          and life events, as an extension of your photography experience. If we
          don't make it ourselves, we know someone who does.
        </p>
      </section>

      {/* Toggle between general custom pieces and weddings */}
      <section className="mx-auto max-w-[1400px] px-5 py-8 md:px-8 md:py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <CustomPiecesToggle />
          </div>
          <div className="lg:col-span-5">
            <ImageSlot
              ratio="3/4"
              src="/assets/gallery/movement.png"
              alt="A woman in a floral dress with her skirt moving in the wind"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-ink/15 bg-paper/40">
        <div className="mx-auto max-w-[1400px] px-5 py-10 md:px-8 md:py-14">
          <h2 className="font-display text-3xl text-ink">Life beyond the wedding</h2>
          <p className="mt-4 max-w-2xl font-serif text-lg text-brown">
            The same care extends to senior and graduation announcements, family
            holiday cards, baby announcements, custom print layouts and keepsake
            pieces.
          </p>
          <ul className="mt-6 grid gap-px overflow-hidden border border-ink/15 bg-rose-paper sm:grid-cols-2 lg:grid-cols-3">
            {LIFE.map((item) => (
              <li key={item} className="bg-ivory p-4 font-serif text-base text-brown">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-14 text-center md:px-8 md:py-16">
        <p className="mx-auto max-w-2xl font-serif text-2xl italic leading-relaxed text-brown">
          If we don't do it, we may know someone who does.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/experience/$kind"
            params={{ kind: "weddings" }}
            className="sh-btn-fill"
          >
            Start your wedding →
          </Link>
          <Link
            to="/photography"
            className="inline-flex items-center border border-ink/25 px-7 py-3 label-sm font-medium text-ink hover:bg-ink hover:text-ivory"
          >
            See photography
          </Link>
        </div>
      </section>
    </ContentShell>
  );
}