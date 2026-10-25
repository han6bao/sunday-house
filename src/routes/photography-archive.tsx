import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

import { ContentShell } from "@/components/house/content-shell";
import { ImageSlot } from "@/components/house/image-slot";

export const Route = createFileRoute("/photography-archive")({
  head: () =>
    pageHead({
      title: "Wedding Photography Portfolio | Sunday House",
      description:
        "The Sunday House archive: wedding days, bridal portraits, couples and quiet details from weddings across Seattle, Tacoma and the Pacific Northwest.",
      path: "/photography-archive",
      image: "/assets/gallery/kiss-bw.png",
    }),
  component: PhotographyArchive,
});

type ArchiveItem = { src: string; title: string; note?: string; ratio: "3/2" | "3/4" | "4/5" | "1/1" };

type ArchiveGroup = { label: string; eyebrow: string; items: ArchiveItem[] };

const GROUPS: ArchiveGroup[] = [
  {
    label: "Weddings",
    eyebrow: "The Day",
    items: [
      { src: "/assets/gallery/sunset-couple.png", title: "Golden hour, the two of them", note: "Watching the sunset before the reception", ratio: "4/5" },
      { src: "/assets/gallery/couple-walk.png", title: "The exit", note: "Walking away, just married", ratio: "3/4" },
      { src: "/assets/gallery/rings.jpg", title: "The rings", note: "A close, quiet detail", ratio: "4/5" },
    ],
  },
  {
    label: "The Bride",
    eyebrow: "Getting Ready",
    items: [
      { src: "/assets/gallery/field-seated.png", title: "Baby's breath at golden hour", note: "A quiet pause in the field", ratio: "4/5" },
      { src: "/assets/gallery/bride-portrait.png", title: "Lace and light", note: "Portrait before the ceremony", ratio: "4/5" },
      { src: "/assets/gallery/back-bouquet.png", title: "Ready to walk", note: "Bouquet in hand", ratio: "4/5" },
      { src: "/assets/gallery/field-walk.png", title: "Through the grass", note: "Moving toward the ceremony", ratio: "4/5" },
      { src: "/assets/gallery/eyes-closed.png", title: "A breath", note: "One second of calm", ratio: "4/5" },
    ],
  },
  {
    label: "Couples",
    eyebrow: "Just the Two of You",
    items: [
      { src: "/assets/gallery/kiss-bw.png", title: "Forehead", note: "Black and white, quiet", ratio: "4/5" },
      { src: "/assets/gallery/couple-bw.png", title: "Close", note: "Almost touching", ratio: "4/5" },
    ],
  },
  {
    label: "Portraits & Details",
    eyebrow: "The Small Keepsakes",
    items: [
      { src: "/assets/gallery/daisy.png", title: "Daisy", note: "A single flower, held", ratio: "4/5" },
      { src: "/assets/gallery/flower-nose.png", title: "Flower at the nose", note: "The playful close-up", ratio: "4/5" },
      { src: "/assets/gallery/greenhouse.png", title: "In the greenhouse", note: "Warm glass light", ratio: "4/5" },
      { src: "/assets/gallery/movement.png", title: "Skirt in the wind", note: "Movement kept", ratio: "4/5" },
    ],
  },
];

export default function PhotographyArchive() {
  return (
    <ContentShell path="/photography-archive" breadcrumb={[{ name: "The Archive", path: "/photography-archive" }]}>
      <section className="mx-auto max-w-[1400px] px-5 pt-14 md:px-8">
        <p className="sh-script  reveal">Things worth keeping.</p>
        <h1 className="reveal reveal--delay-1 mt-3 max-w-3xl sh-h1">
          The Photography Archive.
        </h1>
        <p className="reveal reveal--delay-2 mt-5 max-w-2xl font-serif text-lg leading-relaxed text-brown">
          A growing collection of work from the House: weddings, bridal
          portraits, couples, and the small details worth keeping. New work
          finds its way here as it's made.
        </p>
      </section>

      {GROUPS.map((group) => (
        <section key={group.label} className="mx-auto max-w-[1400px] px-5 py-8 md:px-8 md:py-12">
          <p className="eyebrow">{group.eyebrow}</p>
          <h2 className="mt-2 font-display text-3xl text-ink">{group.label}</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((item, i) => (
              <figure key={item.src} className={`parallax-y card-fade card-fade-${(i % 3) + 1}`}>
                <ImageSlot ratio={item.ratio} src={item.src} alt={item.title} />
                <figcaption className="mt-4">
                  <p className="font-display text-lg text-ink">{item.title}</p>
                  {item.note ? (
                    <p className="mt-1 font-serif italic text-sm text-brown/70">{item.note}</p>
                  ) : null}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-[1400px] px-5 py-14 text-center md:px-8 md:py-16">
        <p className="mx-auto max-w-xl font-serif text-2xl italic leading-relaxed text-brown">
          Your photographs shouldn't live in your camera roll.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/photography"
            className="sh-btn-fill"
          >
            See the full photography page →
          </Link>
        </div>
      </section>
    </ContentShell>
  );
}