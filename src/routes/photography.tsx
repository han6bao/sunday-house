import { createFileRoute, Link } from "@tanstack/react-router";

import { StructuredData } from "@/components/StructuredData";
import { ContentShell } from "@/components/house/content-shell";
import { Faq } from "@/components/house/faq";
import { Photo } from "@/components/house/photo";
import { SoundFilm } from "@/components/house/sound-film";
import { pageHead, serviceJsonLd } from "@/lib/seo";

const TITLE = "Portrait & Couples Photographer in Seattle + Tacoma | Sunday House";
const DESCRIPTION =
  "Portrait photography by Sunday House: couples and engagements, seniors and graduates, families, maternity and creative sessions across Seattle, Tacoma and Washington.";

export const Route = createFileRoute("/photography")({
  head: () =>
    pageHead({
      title: TITLE,
      description: DESCRIPTION,
      path: "/photography",
      image: "/assets/gallery/greenhouse.png",
      imageAlt: "Portrait in a sunlit greenhouse",
    }),
  component: Photography,
});

const SERVICE = serviceJsonLd({
  name: "Portrait photography",
  serviceType: "Portrait photography",
  description: DESCRIPTION,
  path: "/photography",
  image: "/assets/gallery/greenhouse.png",
});

const SESSIONS = [
  { label: "Couples + Engagements", slug: "engagement-photography", note: "The two of you, before and after the aisle." },
  { label: "Seniors + Graduates", slug: "senior-portraits", note: "Your year, looking like you." },
  { label: "Families + Maternity", slug: "family-photography", note: "Every season, kept — the bump included." },
  { label: "Creative Sessions", slug: "creative-portraits", note: "A still from your own film." },
];

const PRICES = [
  { kicker: "The two of you", name: "Couples", price: "$375", points: ["One hour", "One location", "Online gallery"] },
  { kicker: "Before the aisle", name: "Engagements", price: "$450", points: ["Ninety minutes", "Two looks", "Included in most wedding collections"] },
  { kicker: "Your year", name: "Seniors + grads", price: "$375", points: ["One hour, two outfits", "Or $575: two hours, two locations", "Three to four outfits"] },
  { kicker: "Every season", name: "Families + maternity", price: "$375", points: ["One hour", "Up to six people", "Larger groups quoted to fit"] },
  { kicker: "Your own film", name: "Creative sessions", price: "$550", points: ["Concept planning", "Styling direction", "Two hours of shooting"] },
];

const FAQ = [
  {
    q: "When should we book a portrait session?",
    a: "Seasons and light drive it: seniors book in spring for fall, families in late summer for the holidays, and maternity in the months before the due date. The earlier you ask, the more choice you have.",
  },
  {
    q: "What does a session cost?",
    a: "Portrait sessions begin at $375 for an hour. Engagement sessions are $450, extended senior sessions $575, and creative sessions begin at $550. Tell us what you're celebrating and where, and we'll send a clear proposal.",
  },
  {
    q: "What should we wear?",
    a: "Bring you, in colors you love, and let us worry about the light. Once you book, we'll send a real guide: how to coordinate without matching and what photographs well.",
  },
  {
    q: "Where should we be photographed?",
    a: "Anywhere that feels like you. Our location archive covers parks, beaches, studios and city spots across Seattle, Tacoma and the Eastside, and we'll help you choose.",
  },
];

export default function Photography() {
  return (
    <ContentShell path="/photography" breadcrumb={[{ name: "Portraits", path: "/photography" }]}>
      <StructuredData json={SERVICE} />

      <section className="sh-wrap">
        <div className="sh-pagehero">
          <div className="pb-4">
            <p className="sh-script">There is life outside the aisle.</p>
            <h1 className="sh-h1 mt-3">
              Portraits <em>for the people</em> you love.
            </h1>
            <p className="sh-lede mt-6 max-w-xl">
              Couples, graduates, families and the moments in between —
              photographed across Seattle and Tacoma with the same light and
              care as our weddings.
            </p>
            <p className="sh-num mt-5">Portrait sessions begin at $375 · Limited sessions each month</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/experience/$kind" params={{ kind: "couples" }} className="sh-btn-fill">
                Book a session
              </Link>
              <Link to="/weddings" className="sh-invite__alt self-center">
                Planning a wedding? →
              </Link>
            </div>
          </div>
          <Photo
            src="/assets/gallery/greenhouse.png" need="Portraits page: top photo, your favorite portrait session (vertical)"
            alt="Portrait of a woman resting her chin on her hand in a sunlit greenhouse with pink roses"
            ratio="4/5"
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </section>

      <section className="sh-wrap sh-section" aria-labelledby="pt-work">
        <h2 id="pt-work" className="sr-only">
          Portrait work
        </h2>
        <div className="sh-mosaic">
          <Photo src="/assets/gallery/flower-nose.png" need="Portrait grid 1 of 5: a couple" alt="Portrait of a woman holding a daisy, eyes closed, in evening light" ratio="2/3" sizes="(max-width: 900px) 50vw, 42vw" />
          <Photo src="/assets/gallery/couple-bw.png" motion="/assets/motion/grad-flowers" motionPosition="0% center" need="Portrait grid 2 of 5: a senior" alt="Graduation bouquet with a 2026 tassel" ratio="4/5" sizes="(max-width: 900px) 50vw, 33vw" />
          <Photo src="/assets/gallery/movement.png" need="Portrait grid 3 of 5: a family" alt="Woman twirling in a floral dress in an open field" ratio="3/4" sizes="(max-width: 900px) 50vw, 25vw" />
          <Photo src="/assets/gallery/daisy.png" motion="/assets/motion/maternity-meadow" motionPosition="78% center" need="Portrait grid 4 of 5: maternity" alt="Expecting mother in a meadow with deer grazing behind her" ratio="1/1" sizes="(max-width: 900px) 50vw, 25vw" />
          <Photo src="/assets/gallery/field-seated.png" need="Portrait grid 5 of 5: a creative session" alt="Woman seated in a field holding baby's breath at golden hour" ratio="4/5" sizes="(max-width: 900px) 50vw, 33vw" />
        </div>
      </section>

      {/* Maternity film */}
      <section className="sh-wrap pb-[clamp(4rem,8vw,7rem)]" aria-labelledby="pt-expecting">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <p className="eyebrow">Maternity</p>
            <h2 id="pt-expecting" className="sh-h2 mt-4">
              For those <em>expecting</em>.
            </h2>
            <p className="sh-body mt-5">
              A meadow, the deer at the tree line, and the two of you waiting on
              someone new. Maternity sessions can include a short film like this
              one, voiceover included. Tap the speaker to listen.
            </p>
            <Link to="/experience/$kind" params={{ kind: "couples" }} className="sh-invite__alt mt-6 inline-block">
              Ask about maternity →
            </Link>
          </div>
          <SoundFilm
            className="lg:col-span-8"
            src="/assets/motion/maternity-film.mp4"
            poster="/assets/motion/maternity-film.jpg"
            label="Maternity film with voiceover: an expecting couple in a meadow with deer"
          />
        </div>
      </section>

      {/* Sessions — a typographic list, not a wall of boxes */}
      <section className="sh-wrap pb-[clamp(4rem,8vw,7rem)]" aria-labelledby="pt-sessions">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Sessions</p>
            <h2 id="pt-sessions" className="sh-h2 mt-4">
              What are we celebrating?
            </h2>
          </div>
          <ul className="lg:col-span-8">
            {SESSIONS.map((s) => (
              <li key={s.slug} className="border-b border-ink/15 first:border-t">
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-6"
                >
                  <span className="sh-h3 transition-all group-hover:italic">{s.label}</span>
                  <span className="sh-body text-base">{s.note} →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Session prices */}
      <section className="sh-wrap pb-[clamp(4rem,8vw,7rem)]" aria-labelledby="pt-prices">
        <p className="eyebrow">Investment</p>
        <h2 id="pt-prices" className="sh-h2 mt-4">
          Session <em>prices</em>.
        </h2>
        <ul className="sh-prices sh-prices--five mt-10">
          {PRICES.map((it) => (
            <li key={it.name} className="sh-price">
              <p className="eyebrow">{it.kicker}</p>
              <h3 className="sh-h3 mt-3">{it.name}</h3>
              <p className="sh-price__amt">
                <span>from</span> {it.price}
              </p>
              <ul className="sh-price__pts">
                {it.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <Link to="/experience/$kind" params={{ kind: "couples" }} className="sh-btn-fill mt-8">
          Book a session
        </Link>
      </section>

      {/* Creative sessions */}
      <section className="sh-night sh-section" aria-labelledby="pt-creative">
        <div className="sh-wrap grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Photo src="/assets/gallery/eyes-closed.png" need="Creative feature: your most cinematic portrait" alt="Woman with eyes closed holding baby's breath in a golden field" ratio="4/5" sizes="(max-width: 1024px) 100vw, 45vw" />
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow">Creative sessions</p>
            <h2 id="pt-creative" className="sh-h2 mt-4">
              A still from <em>your</em> own film.
            </h2>
            <p className="sh-lede mt-6">
              Conceptual portraits built with you: the idea, the styling, the
              location and the light — cinematic from the first frame.
            </p>
            <Link to="/services/$slug" params={{ slug: "creative-portraits" }} className="sh-link mt-8">
              Creative sessions →
            </Link>
          </div>
        </div>
      </section>

      <Faq title="Portrait questions" items={FAQ} />
    </ContentShell>
  );
}
