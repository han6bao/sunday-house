import { createFileRoute, Link } from "@tanstack/react-router";

import { StructuredData } from "@/components/StructuredData";
import { ContentShell } from "@/components/house/content-shell";
import { Faq } from "@/components/house/faq";
import { Photo } from "@/components/house/photo";
import { PortraitDeck } from "@/components/house/portrait-deck";
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

      {/* Phones: full-screen slides you swipe through */}
      <PortraitDeck
        cover={{ src: "/assets/stills/senior-6.jpg", alt: "Senior in a white blouse in a sunlit meadow" }}
        label="Portrait sessions"
        slides={[
          {
            kicker: "There is life outside the aisle.",
            title: <>Portraits <em>for the people</em> you love.</>,
            body: <p>Couples, graduates, families and the moments in between — photographed across Seattle and Tacoma with the same light and care as our weddings.</p>,
            img: { src: "/assets/stills/creative-2.jpg", alt: "Styled portrait against a red wall" },
          },
          {
            kicker: "Sessions",
            title: "Choose your session",
            body: (
              <ul className="sh-deck__list">
                {PRICES.map((p) => (
                  <li key={p.name}>
                    <b>{p.name}</b>
                    <span>{p.points.join(" · ")} — {p.price}</span>
                  </li>
                ))}
              </ul>
            ),
          },
          {
            kicker: "Seniors + grads",
            title: <>Your year, <em>looking like you</em>.</>,
            body: <p>Classic or artistic — the outfits you love, the places you actually go.</p>,
            img: { src: "/assets/stills/senior-13.jpg", alt: "Senior smiling in a shearling-collar jacket in the woods" },
          },
          {
            kicker: "Creative sessions",
            title: <>A still from <em>your own film</em>.</>,
            body: <p>Concept, styling, location and light, designed with you.</p>,
            img: { src: "/assets/stills/creative-3.jpg", alt: "Styled portrait leaning against a teal wall" },
          },
          {
            kicker: "Maternity",
            title: <>For those <em>expecting</em>.</>,
            body: <p>A meadow, the deer at the tree line, and the two of you waiting on someone new. Maternity sessions can include a short film, voiceover included.</p>,
            img: { src: "/assets/motion/maternity-meadow.jpg", alt: "Expecting mother in a meadow with deer grazing behind her", position: "78% center" },
          },
          {
            kicker: "Where",
            title: "Anywhere that feels like you.",
            body: <p>Parks, beaches, studios and city corners across Seattle, Tacoma and the Eastside — we'll help you choose.</p>,
            img: { src: "/assets/stills/maternity-water.jpg", alt: "Expecting mother floating in clear blue water" },
          },
        ]}
        primary={{ label: "Email us", to: "mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" }}
        secondary={{ label: "Planning a wedding?", to: "/weddings" }}
        more={[
          { label: "Seniors + grads", to: "/services/senior-portraits" },
          { label: "Families + maternity", to: "/services/family-photography" },
          { label: "Creative", to: "/services/creative-portraits" },
          { label: "Weddings", to: "/weddings" },
          { label: "Home", to: "/" },
        ]}
      />

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
              <a href="mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" className="sh-btn-fill">
                Email us
              </a>
              <Link to="/weddings" className="sh-invite__alt self-center">
                Planning a wedding? →
              </Link>
            </div>
          </div>
          <Photo
            src="/assets/stills/senior-8.jpg"
            alt="Senior standing on a sunlit trail among tall evergreens"
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
          <Photo src="/assets/stills/couple-forehead.jpg" alt="A man kissing his partner's forehead, in soft sepia" ratio="2/3" sizes="(max-width: 900px) 50vw, 42vw" />
          <Photo src="/assets/gallery/couple-bw.png" motion="/assets/motion/grad-flowers" motionPosition="center" need="Portrait grid 2 of 5: a senior" alt="Graduation bouquet with a 2026 tassel" ratio="4/5" sizes="(max-width: 900px) 50vw, 33vw" />
          <Photo src="/assets/stills/senior-16.jpg" alt="Senior laughing in a yellow shirt in the woods" ratio="3/4" sizes="(max-width: 900px) 50vw, 25vw" />
          <Photo src="/assets/gallery/daisy.png" motion="/assets/motion/maternity-meadow" motionPosition="78% center" need="Portrait grid 4 of 5: maternity" alt="Expecting mother in a meadow with deer grazing behind her" ratio="1/1" sizes="(max-width: 900px) 50vw, 25vw" />
          <Photo src="/assets/stills/senior-14.jpg" alt="Senior in a yellow shirt seated on a mossy log in the forest" ratio="4/5" sizes="(max-width: 900px) 50vw, 33vw" />
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
            <a href="mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" className="sh-invite__alt mt-6 inline-block">
              Email us about maternity →
            </a>
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
        <a href="mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" className="sh-btn-fill mt-8">
          Email us
        </a>
      </section>

      {/* Creative sessions */}
      <section className="sh-night sh-section" aria-labelledby="pt-creative">
        <div className="sh-wrap grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Photo src="/assets/stills/creative-1.jpg" alt="Silhouette in a mirror against a teal patterned screen" ratio="4/5" sizes="(max-width: 1024px) 100vw, 45vw" />
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
