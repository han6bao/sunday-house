import { createFileRoute, Link } from "@tanstack/react-router";

import { ContentShell } from "@/components/house/content-shell";
import { ConciergeInquiry } from "@/components/house/concierge-inquiry";
import { ImageSlot } from "@/components/house/image-slot";
import { EXPERIENCES } from "@/lib/experiences";
import { pageHead } from "@/lib/seo";

const TITLES: Record<string, { title: string; description: string }> = {
  weddings: {
    title: "Inquire About Your Wedding | Sunday House",
    description:
      "Wedding photography, film, planning and the people worth knowing across Seattle, Tacoma and Washington.",
  },
  seniors: {
    title: "Senior Portraits in Seattle + Tacoma | Sunday House",
    description:
      "Senior portrait sessions designed around you: locations, outfits and a feeling across Seattle, Tacoma and Washington.",
  },
  families: {
    title: "Family Photographer in Seattle + Tacoma | Sunday House",
    description:
      "Family sessions across the Pacific Northwest, planned around your people, season and the feeling you want.",
  },
  "maternity-newborn": {
    title: "Maternity + Newborn Photography, Washington | Sunday House",
    description:
      "Maternity and newborn photography done gently, at home, in studio or outdoors across Washington.",
  },
  couples: {
    title: "Engagement + Couples Photography | Sunday House",
    description:
      "Engagement, anniversary and just-because couples sessions across Seattle, Tacoma and beyond.",
  },
  creative: {
    title: "Creative Portrait Sessions | Sunday House",
    description:
      "Conceptual, cinematic photography designed to feel like a still from a film. Creative direction, styling and set worlds.",
  },
  events: {
    title: "Event Photography in Seattle + Tacoma | Sunday House",
    description:
      "Birthdays, family gatherings and quiet milestones, documented the way they felt.",
  },
};

const PHOTOS: Record<string, { src: string; alt: string }> = {
  weddings: { src: "/assets/gallery/sunset-couple.png", alt: "Newlyweds embracing at sunset" },
  seniors: { src: "/assets/gallery/daisy.png", alt: "Senior portrait with a daisy in soft evening light" },
  families: { src: "/assets/gallery/field-walk.png", alt: "Walking through a summer field at golden hour" },
  "maternity-newborn": { src: "/assets/gallery/eyes-closed.png", alt: "A quiet portrait in a golden field" },
  couples: { src: "/assets/gallery/couple-bw.png", alt: "Black and white couples portrait" },
  creative: { src: "/assets/gallery/flower-nose.png", alt: "Cinematic portrait with a daisy" },
  events: { src: "/assets/content-work/Dc95F33Btpj.jpg", alt: "Guests celebrating on the dance floor" },
};

const PRESET: Record<string, string> = {
  weddings: "A wedding",
  seniors: "Senior or graduate portraits",
  couples: "Engagement or couples photos",
  families: "Family or maternity",
  "maternity-newborn": "Family or maternity",
  creative: "A creative session",
};

export const Route = createFileRoute("/experience/$kind")({
  validateSearch: (s: Record<string, unknown>) => ({ guide: s.guide ? 1 : undefined }),
  head: ({ params }) => {
    const meta = TITLES[params.kind];
    const photo = PHOTOS[params.kind];
    return pageHead({
      title: meta ? meta.title : "Inquire — Sunday House",
      description: meta
        ? meta.description
        : "Tell Sunday House what you're celebrating and where, and we'll reply with availability and a clear proposal.",
      path: `/experience/${params.kind}`,
      image: photo?.src,
      imageAlt: photo?.alt,
      // The form pages stay out of search; the service pages rank instead.
      noindex: true,
    });
  },
  component: ExperienceRoute,
});

export default function ExperienceRoute() {
  const { kind } = Route.useParams();
  const { guide } = Route.useSearch() as { guide?: number };
  const exp = EXPERIENCES[kind];

  if (!exp) {
    return (
      <ContentShell>
        <div className="mx-auto max-w-[1400px] px-5 py-24 text-center md:px-8">
          <h1 className="font-display text-4xl text-ink">Not quite this room.</h1>
          <p className="mt-4 font-serif italic text-brown/70">
            Let's take you back to the front door.
          </p>
          <Link
            to="/"
            className="mt-6 sh-btn-fill"
          >
            Go home
          </Link>
        </div>
      </ContentShell>
    );
  }

  const photo = PHOTOS[exp.kind] ?? PHOTOS.weddings;

  return (
    <ContentShell breadcrumb={[{ name: "Inquire", path: `/experience/${exp.kind}` }]}>
      <section className="mx-auto max-w-[1400px] px-5 pt-14 md:px-8">
        <p
          className="sh-script  reveal"
          style={{ lineHeight: 1.1 }}
        >
          {exp.script}
        </p>
        <h1 className="reveal reveal--delay-1 sh-h1 mt-3 max-w-4xl">
          {exp.title}
        </h1>
        <p className="reveal reveal--delay-2 mt-5 max-w-2xl font-serif text-lg leading-relaxed text-brown">
          {exp.intro}
        </p>
        <div className="reveal reveal--delay-2 mt-10">
          <ConciergeInquiry preset={PRESET[exp.kind]} wantsGuide={Boolean(guide)} />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-8 md:px-8 md:py-12">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ImageSlot ratio="4/5" src={photo.src} alt={photo.alt} />
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl text-ink">Continue through the House</h2>
            <ul className="sh-linkrow mt-6">
              <li>
                <Link to="/photography" className="sh-textlink group">
                  Browse the photography <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </li>
              <li>
                <Link to="/film" className="sh-textlink group">
                  Watch the films <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </ContentShell>
  );
}