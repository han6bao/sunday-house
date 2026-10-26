import { createFileRoute, Link } from "@tanstack/react-router";

import { StructuredData } from "@/components/StructuredData";
import { ContentShell } from "@/components/house/content-shell";
import { Faq } from "@/components/house/faq";
import { Photo } from "@/components/house/photo";
import { PortraitDeck } from "@/components/house/portrait-deck";
import { pageHead, serviceJsonLd } from "@/lib/seo";

const TITLE = "Seattle & Tacoma Wedding Photographer | Sunday House";
const DESCRIPTION =
  "Cinematic wedding photography and film across Seattle, Tacoma and the Pacific Northwest. Getting ready to the last dance, engagements, elopements and wedding weekends.";

export const Route = createFileRoute("/weddings")({
  head: () =>
    pageHead({
      title: TITLE,
      description: DESCRIPTION,
      path: "/weddings",
      image: "/assets/gallery/sunset-couple.png",
      imageAlt: "Newlyweds embracing on a hill at sunset",
    }),
  component: Weddings,
});

const SERVICE = serviceJsonLd({
  name: "Wedding photography and film",
  serviceType: "Wedding photography",
  description: DESCRIPTION,
  path: "/weddings",
  image: "/assets/gallery/sunset-couple.png",
});

const GALLERY = [
  { src: "/assets/stills/couple-sunset.jpg", alt: "Newlyweds walking toward the sunset", ratio: "2/3" },
  { src: "/assets/content-work/Dc-CZYLJuxk.jpg", alt: "Bride and groom dancing under chandeliers at a barn wedding reception", ratio: "9/16" },
  { src: "/assets/stills/couple-kiss.jpg", alt: "A couple sharing a kiss beneath a floral arch", ratio: "2/3" },
  { src: "/assets/content-work/Dc-X9nngA-w.jpg", alt: "Wedding mandap draped in white with yellow florals", ratio: "9/16" },
  { src: "/assets/stills/couple-field.jpg", alt: "Bride and groom walking across the lawn after the ceremony", ratio: "2/3" },
  { src: "/assets/stills/bride-garden.jpg", alt: "A bride in a garden in soft natural light", ratio: "2/3" },
  { src: "/assets/content-work/Dc96OtPz2vo.jpg", alt: "Bridesmaid adjusting the bride's veil while getting ready", ratio: "9/16" },
];

const COVERAGE = [
  { title: "The whole day", body: "Getting ready, first look, ceremony, family portraits, toasts and the last dance — one team carries it start to finish." },
  { title: "Photography + film", body: "Book both and they're made side by side, so the photographs and the film read as one story." },
  { title: "Engagements + elopements", body: "Engagement sessions, intimate elopements and full wedding weekends, wherever in Washington you're saying yes." },
];

const INVESTMENT = [
  { kicker: "Small + intimate", name: "Elopements", price: "$1,800", points: ["Up to 3 hours", "One location", "Online gallery"] },
  { kicker: "Most couples", name: "Wedding collections", price: "$3,800", points: ["6 hours", "Engagement session in most", "Sneak peeks in 48 hours"] },
  { kicker: "The whole story", name: "Photography + film", price: "$5,800", points: ["8 hours of photographs", "A highlight film", "Engagement session"] },
];

const FAQ = [
  {
    q: "When should we book our wedding photographer?",
    a: "As early as you can. We take on a limited number of weddings each year, and summer Saturdays in Seattle and Tacoma go first. If your date is sooner, ask anyway; we'll tell you honestly what's still possible.",
  },
  {
    q: "Do we need photography and film?",
    a: "You don't need both, but most couples keep both. Photographs hold the stillness; film holds the voices, the vows and the movement. From one house, the day reads as one story instead of two versions of it.",
  },
  {
    q: "What will our photos look like?",
    a: "The Sunday House edit is cinematic and film-like: soft light, true color and the feeling of the moment kept. Every couple is different, so we'll shape the style around your taste.",
  },
  {
    q: "Are you wedding planners?",
    a: "No — we're a photography-led house. We don't hold your timeline or manage vendor calls, but we know people who do.",
  },
  {
    q: "How much does wedding photography cost?",
    a: "Wedding collections begin at $3,800 for six hours, and most of our couples invest between $4,500 and $6,500. Intimate weddings and elopements begin at $1,800, and photo + film collections at $5,800. After you inquire, we send a clear proposal with every option.",
  },
  {
    q: "Do you photograph cultural and two-day weddings?",
    a: "Yes. Tea ceremonies, nikah and walima, mehndi and sangeet, a ceremony one day and the reception the next — we plan coverage around the traditions that matter to your families. A second day of up to four hours can be added to any collection for $1,500.",
  },
];

export default function Weddings() {
  return (
    <ContentShell path="/weddings" breadcrumb={[{ name: "Weddings", path: "/weddings" }]}>
      <StructuredData json={SERVICE} />

      {/* Phones: full-screen slides you swipe through */}
      <PortraitDeck
        cover={{ src: "/assets/gallery/sunset-couple.png", alt: "Newlyweds embracing on a hill at sunset" }}
        label="Wedding photography + film"
        slides={[
          {
            kicker: "You said yes.",
            title: <>Wedding photography <em>&amp; film</em> in Seattle + Tacoma.</>,
            body: <p>Cinematic, honest and calm. We photograph the whole day — and the people who make it yours — so you can be fully in it.</p>,
            img: { src: "/assets/gallery/bride-portrait.png", alt: "Bridal portrait in soft natural light" },
          },
          {
            kicker: "Coverage",
            title: "The whole story",
            body: (
              <ul className="sh-deck__list">
                {COVERAGE.map((c) => (
                  <li key={c.title}>
                    <b>{c.title}</b>
                    <span>{c.body}</span>
                  </li>
                ))}
              </ul>
            ),
          },
          {
            kicker: "Cultural + two-day weddings",
            title: <>More than one day. <em>Every</em> tradition.</>,
            body: <p>A tea ceremony and a reception, a nikah and a walima — we photograph all of it as one story. A second day can be added to any collection.</p>,
            img: { src: "/assets/content-work/Dc94ykltayq.jpg", alt: "Bride and groom embracing at a colorful mehndi celebration" },
          },
          {
            kicker: "Investment",
            title: "Collections",
            body: (
              <ul className="sh-deck__list">
                {INVESTMENT.map((c) => (
                  <li key={c.name}>
                    <b>{c.name} · from {c.price}</b>
                    <span>{c.points.join(" · ")}</span>
                  </li>
                ))}
              </ul>
            ),
          },
          {
            kicker: "Recent weddings",
            title: "The last dance, kept.",
            body: <p>Getting ready to the send-off, in photographs and film.</p>,
            img: { src: "/assets/content-work/Dc-CZYLJuxk.jpg", alt: "Bride and groom dancing under chandeliers at a barn wedding reception" },
          },
        ]}
        primary={{ label: "Email us", to: "mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" }}
        secondary={{ label: "Watch the films", to: "/film" }}
        more={[
          { label: "Engagements", to: "/services/engagement-photography" },
          { label: "Elopements", to: "/services/elopement-photography" },
          { label: "Content creation", to: "/content-creation" },
          { label: "Portraits", to: "/photography" },
          { label: "Home", to: "/" },
        ]}
      />

      {/* Hero */}
      <section className="sh-wrap">
        <div className="sh-pagehero">
          <div className="pb-4">
            <p className="sh-script">You said yes.</p>
            <h1 className="sh-h1 mt-3">
              Wedding photography <em>&amp; film</em> in Seattle + Tacoma.
            </h1>
            <p className="sh-lede mt-6 max-w-xl">
              Cinematic, honest and calm. We photograph the whole day — and the
              people who make it yours — so you can be fully in it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" className="hz-btn hz-btn--solid">
                Email us
              </a>
              <Link to="/film" className="hz-btn">
                Watch wedding films
              </Link>
            </div>
          </div>
          <Photo
            src="/assets/gallery/bride-portrait.png" motion="/assets/motion/bride" motionPosition="38% center" need="Weddings page: top photo, a bride or couple portrait (vertical)"
            alt="Bride in a lace gown looking toward the light"
            ratio="4/5"
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </section>

      {/* Statement */}
      <section className="sh-wrap sh-section">
        <p className="sh-statement max-w-5xl">
          No stiff poses, no shouting across the lawn. Just a quiet eye on the
          moments that <em>actually</em> happened.
        </p>
      </section>

      {/* Gallery rail */}
      <section aria-labelledby="wed-gallery" className="pb-[clamp(4rem,8vw,7rem)]">
        <div className="sh-wrap mb-8 flex flex-wrap items-end justify-between gap-6">
          <h2 id="wed-gallery" className="sh-h2">
            Recent weddings
          </h2>
          <Link to="/photography-archive" className="sh-link">
            The full archive →
          </Link>
        </div>
        <div className="sh-wrap">
          <div className="sh-rail">
            {GALLERY.map((g) => (
              <Photo key={g.src} src={g.src} alt={g.alt} need={(g as { need?: string }).need} ratio="2/3" sizes="(max-width: 768px) 78vw, 22rem" />
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="rose-paper sh-section" aria-labelledby="wed-coverage">
        <div className="sh-wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">What&rsquo;s covered</p>
            <h2 id="wed-coverage" className="sh-h2 mt-4">
              From the first look to the last dance.
            </h2>
            <div className="mt-10 hidden lg:block">
              <Photo src="/assets/content-work/Dc96OtPz2vo.jpg" alt="A bridesmaid adjusting the bride's veil while getting ready" ratio="4/5" sizes="35vw" />
            </div>
          </div>
          <div className="lg:col-span-7 lg:pt-24">
            {COVERAGE.map((c, i) => (
              <div key={c.title} className="sh-step mb-10">
                <p className="sh-num">0{i + 1}</p>
                <h3 className="sh-h3 mt-3">{c.title}</h3>
                <p className="sh-body mt-3 max-w-xl">{c.body}</p>
              </div>
            ))}
            <a href="mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" className="hz-btn hz-btn--solid mt-2">
              Ask about your date
            </a>
          </div>
        </div>
      </section>

      {/* Cultural + two-day weddings */}
      <section id="cultural" className="sh-wrap sh-section scroll-mt-24" aria-labelledby="wed-cultural">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow">Cultural + two-day weddings</p>
            <h2 id="wed-cultural" className="sh-h2 mt-4">
              More than one day. <em>Every</em> tradition.
            </h2>
            <p className="sh-body mt-6">
              Many of our weddings are more than one day: a tea ceremony and a
              reception, a nikah and a walima, family traditions alongside your
              own. We photograph all of it — the rituals, the elders, the
              dances being taught across the room — as one story.
            </p>
            <p className="sh-body mt-4">
              Tell us the order of events and what matters most to your
              families, and we&rsquo;ll plan coverage so nothing important
              happens off-camera. A second day can be added to any collection.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Photo
              src="/assets/content-work/Dc94ykltayq.jpg"
              alt="Bride and groom embracing at a colorful mehndi celebration"
              ratio="4/5"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      {/* Investment */}
      <section id="investment" className="rose-paper sh-section scroll-mt-24" aria-labelledby="wed-investment">
        <div className="sh-wrap grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Investment</p>
            <h2 id="wed-investment" className="sh-h2 mt-4">
              Clear from the start.
            </h2>
            <p className="sh-body mt-6">
              Wedding collections begin at $3,800. Most of our couples invest
              between $4,500 and $6,500.
            </p>
            <p className="sh-body mt-4">
              We take on a limited number of weddings each year, so every
              couple has our full attention from the first email to the final
              gallery.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ul className="sh-prices">
              {INVESTMENT.map((it) => (
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
            <p className="sh-price__addon">
              <span className="eyebrow">Add-on</span>
              <span className="sh-h3">A second day</span>
              <span className="sh-body">Up to 4 hours, added to any collection</span>
              <span className="sh-price__addon-amt">+ $1,500</span>
            </p>
            <a href="mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" className="sh-btn-fill mt-8">
              Request the collections guide
            </a>
            <p className="sh-body mt-4 text-sm">
              Every collection can end with something you can hold: heirloom albums and framed prints, made to last.
            </p>
          </div>
        </div>
      </section>

      {/* Real wedding */}
      <section className="sh-wrap sh-section" aria-labelledby="wed-real">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Photo
              src="/assets/content-work/Dc-B3czOfle.jpg"
              alt="A sunlit barn reception hall draped in white on the wedding day"
              ratio="4/5"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow">Wedding content creation · Abha &amp; Udit</p>
            <h2 id="wed-real" className="sh-h2 mt-4">
              One day. Twenty-eight videos. Every dance.
            </h2>
            <p className="sh-body mt-6">
              Same-day content for a fast-moving Indian-American wedding across
              Seattle and the South Sound — reels and Stories of the family
              dances, traditions and games, posted while the room was still
              dancing. Live Stories let family who couldn&rsquo;t travel follow
              along in real time, and everything lives on in a private archive
              account made just for their wedding. Over 80,000 views, with more
              than 60,000 in the first three days.
            </p>
            <Link to="/content-creation" className="sh-link mt-8">
              Wedding content creation →
            </Link>
          </div>
        </div>
      </section>

      {/* More for your wedding: one compact block of links */}
      <section className="sh-wrap pb-[clamp(3rem,6vw,5rem)]" aria-labelledby="wed-more">
        <h2 id="wed-more" className="eyebrow">
          More for your wedding
        </h2>
        <ul className="sh-linklist mt-5">
          {[
            { label: "Seattle weddings", to: "/services/$slug", params: { slug: "seattle-wedding-photographer" } },
            { label: "Tacoma weddings", to: "/services/$slug", params: { slug: "tacoma-wedding-photographer" } },
            { label: "Elopements", to: "/services/$slug", params: { slug: "elopement-photography" } },
          ].map((l) => (
            <li key={l.label}>
              <Link to={l.to} params={l.params} className="group flex items-baseline justify-between py-3.5">
                <span className="sh-h3 group-hover:italic">{l.label}</span>
                <span className="sh-num">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Faq title="Wedding questions" items={FAQ} />
    </ContentShell>
  );
}
