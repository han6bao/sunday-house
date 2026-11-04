import { createFileRoute, Link } from "@tanstack/react-router";

import { StructuredData } from "@/components/StructuredData";
import { ContentShell } from "@/components/house/content-shell";
import { Faq } from "@/components/house/faq";
import { Photo } from "@/components/house/photo";
import { PortraitDeck } from "@/components/house/portrait-deck";
import { SoundFilm } from "@/components/house/sound-film";
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
  { src: "/assets/stills/wed-forehead-2.jpg", alt: "A groom kissing his bride's forehead, in black and white", ratio: "9/16" },
  { src: "/assets/stills/wed-dance.jpg", alt: "Newlyweds dancing in a misty golden field", ratio: "9/16" },
  { src: "/assets/stills/wed-veil.jpg", alt: "Bride and groom forehead to forehead beneath her veil", ratio: "9/16" },
  { src: "/assets/stills/wed-hold-3.jpg", alt: "A groom leaning down to take his bride's hand, shot from below", ratio: "9/16" },
];

const COVERAGE = [
  { title: "Getting ready", body: "The dress, the details and the last quiet moments with your people before everything starts." },
  { title: "Portraits, with a designated time", body: "A set block in the day for bridal and groom portraits, styled portraits of the two of you and your closest people, plus bridesmaids, groomsmen and the whole family together." },
  { title: "The ceremony + celebration", body: "Moments all through the day: the vows, the toasts, the dances and everything in between." },
  { title: "A checklist, made together", body: "Anything that matters to you goes on a shared checklist, so we know exactly what's needed. We'll go deeper into the details as we plan." },
  { title: "Your edited gallery", body: "Every image edited by hand and delivered in an online gallery, usually within 2 to 3 months depending on the wedding and the season. Sneak peeks arrive within 48 hours." },
  { title: "A hardcover keepsake book", body: "Once your gallery is done, choose your favorites and we'll design a thick, hardcover book of the best shots and the feeling of the night. Made by a professional lab that only works with photographers, and included with every wedding collection." },
];

const BRIDAL_ROWS = [
  [
    { src: "/assets/stills/bride-solo-1.jpg", alt: "A bride leaning on a tree branch in golden evening light", w: 1200, h: 1800 },
    { src: "/assets/stills/bride-solo-6.jpg", alt: "A bride with her eyes closed, holding baby's breath", w: 1200, h: 1800 },
    { src: "/assets/stills/bride-solo-10.jpg", alt: "A bride smiling down at her bouquet", w: 1200, h: 1800 },
  ],
  [
    { src: "/assets/stills/bride-solo-4.jpg", alt: "A bride walking through the grass with her bouquet", w: 1200, h: 1800 },
    { src: "/assets/stills/bride-solo-3.jpg", alt: "Detail of an eyelet floral dress and baby's breath", w: 1440, h: 1800 },
    { src: "/assets/stills/bride-solo-5.jpg", alt: "A bride twirling her dress in the park", w: 1200, h: 1800 },
  ],
  [
    { src: "/assets/stills/bride-solo-7.jpg", alt: "A bride with a daisy resting on her nose, eyes closed", w: 1200, h: 1800 },
    { src: "/assets/stills/bride-solo-8.jpg", alt: "A bride holding a daisy to her face", w: 1200, h: 1800 },
    { src: "/assets/stills/bride-solo-9.jpg", alt: "A bride looking down at baby's breath, eyes closed", w: 1200, h: 1800 },
  ],
];

const GOOD_TO_KNOW = [
  { title: "No time on the day?", body: "If there isn't a set window for portraits, we can photograph them on a separate day. That's an additional fee, since it's outside your wedding timeline." },
  { title: "Book upgrades", body: "The classic hardcover is included. Linen or suede covers, thick textured paper and other custom touches can be added for an extra cost." },
  { title: "Prints + framing", body: "Framed prints, wall pieces and larger albums are available as add-ons, whenever you're ready for them." },
];

const ADD_ONS = [
  { title: "Printed cards", body: "Your engagement photos or sneak peeks, designed into save-the-dates, thank-you cards and more, then printed for you." },
  { title: "Invitations", body: "Invitation suites designed around your photos and the feel of your day." },
  { title: "A wedding website", body: "Your details, RSVPs and a place for guests to send their photos, which you can add to your book. Email us for an estimate." },
];

const INVESTMENT = [
  { kicker: "Small + intimate", name: "Elopements", price: "$1,800", points: ["Up to 3 hours", "One location", "Online gallery"] },
  { kicker: "Most couples", name: "Wedding collections", price: "$3,800", points: ["6 hours", "A 45-minute engagement session, styled if you like", "Sneak peeks within 48 hours", "A hardcover keepsake book"] },
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
    q: "How long until we get our photos?",
    a: "Your full gallery is usually ready in 2 to 3 months, depending on the wedding and the season. Once it's done, you choose your favorites for your keepsake book.",
  },
  {
    q: "Can we add prints or a bigger album?",
    a: "Yes. Framed prints, wall pieces and larger albums are available as add-ons. Every wedding collection already includes a thick hardcover keepsake book of your favorites, and linen or suede covers and textured paper can be added.",
  },
  {
    q: "Do you photograph cultural and two-day weddings?",
    a: "Yes. Tea ceremonies, nikah and walima, mehndi and sangeet, a ceremony one day and the reception the next — we plan coverage around the traditions that matter to your families. A second day of up to four hours can be added to any collection for $1,200.",
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
            img: { src: "/assets/stills/wed-dance.jpg", alt: "Newlyweds dancing in a misty golden field" },
          },
          {
            kicker: "What's included",
            title: "The whole story",
            body: (
              <ul className="sh-deck__list">
                {COVERAGE.map((c) => (
                  <li key={c.title}>
                    <b>{c.title}</b>
                  </li>
                ))}
              </ul>
            ),
          },
          {
            kicker: "Cultural + two-day weddings",
            title: <>More than one day. <em>Every</em> tradition.</>,
            body: <p>A tea ceremony and a reception, a nikah and a walima — we photograph all of it as one story. A second day can be added to any collection.</p>,
            img: { src: "/assets/gallery/rings.jpg", alt: "A couple's hands joined, wedding rings close up" },
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
            kicker: "Real weddings",
            title: "The last dance, kept.",
            body: <p>Getting ready to the send-off, in photographs and film.</p>,
            img: { src: "/assets/stills/wed-hold-3.jpg", alt: "A groom leaning down to take his bride's hand" },
          },
        ]}
        primary={{ label: "Inquire", to: "mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" }}
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
                Inquire
              </a>
              <Link to="/film" className="hz-btn">
                Watch wedding films
              </Link>
            </div>
          </div>
          <Photo
            src="/assets/gallery/bride-portrait.png" need="Weddings page: top photo, a bride or couple portrait (vertical)"
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
          Gentle direction when you want it, room to just be together when
          you don&rsquo;t. Your day, exactly as it <em>felt</em>.
        </p>
      </section>

      {/* Wedding reel */}
      <section className="sh-wrap pb-[clamp(4rem,8vw,7rem)]" aria-label="Wedding reel">
        <SoundFilm
          className="sh-soundfilm--wide"
          src="/assets/motion/hero.mp4"
          poster="/assets/motion/hero.jpg"
          label="A short reel of real weddings: couples at golden hour, florals, first looks and quiet moments"
        />
      </section>

      {/* Gallery rail */}
      <section aria-labelledby="wed-gallery" className="pb-[clamp(4rem,8vw,7rem)]">
        <div className="sh-wrap mb-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 id="wed-gallery" className="sh-h2">
              Real weddings
            </h2>
            <p className="sh-script mt-2">Abdul + Layla</p>
            <p className="sh-body mt-3 max-w-xl">
              They asked for cinematic with a moodier feel, and these are some
              of my all-time favorites. Photographed in Redmond.
            </p>
          </div>
        </div>
        <div className="sh-wrap">
          <div className="sh-rail">
            {GALLERY.map((g) => (
              <Photo key={g.src} src={g.src} alt={g.alt} need={(g as { need?: string }).need} ratio="2/3" sizes="(max-width: 768px) 78vw, 22rem" />
            ))}
          </div>
        </div>
      </section>

      {/* Bridal session: just the bride */}
      <section className="sh-wrap pb-[clamp(4rem,8vw,7rem)]" aria-labelledby="wed-bridal">
        <p className="eyebrow">Bridal session</p>
        <h2 id="wed-bridal" className="sh-h2 mt-4 max-w-3xl">
          Just the <em>bride</em>.
        </h2>
        <p className="sh-body mt-6 max-w-2xl">
          A separate session we did with just her before the wedding: her
          dress, a bundle of baby&rsquo;s breath and an unhurried evening in
          the park. Time that&rsquo;s only about her, away from the rush of
          the day.
        </p>
        {BRIDAL_ROWS.map((row, r) => (
          <div key={r} className={`svc-strip ${r ? "mt-3 md:mt-5" : "mt-10"}`}>
            {row.map((ph) => (
              <figure key={ph.src} className="svc-strip__item" style={{ flexGrow: ph.w / ph.h, aspectRatio: `${ph.w} / ${ph.h}` }}>
                <img src={ph.src} alt={ph.alt} loading="lazy" decoding="async" />
              </figure>
            ))}
          </div>
        ))}
      </section>

      {/* What's included */}
      <section className="rose-paper sh-section" aria-labelledby="wed-coverage">
        <div className="sh-wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">What&rsquo;s included</p>
            <h2 id="wed-coverage" className="sh-h2 mt-4">
              Every part of the day, <em>planned</em>.
            </h2>
            <p className="sh-body mt-6 max-w-md">
              Here&rsquo;s what a full wedding day looks like with us, from the
              morning to the last dance and the book you keep after.
            </p>
            <div className="mt-10 hidden lg:block">
              <Photo src="/assets/stills/wed-dance-crop.jpg" alt="Newlyweds dancing in a misty golden field" ratio="35/38" sizes="35vw" />
            </div>
          </div>
          <div className="lg:col-span-7 lg:pt-6">
            {COVERAGE.map((c, i) => (
              <div key={c.title} className="sh-step mb-9">
                <p className="sh-num">0{i + 1}</p>
                <h3 className="sh-h3 mt-3">{c.title}</h3>
                <p className="sh-body mt-3 max-w-xl">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="sh-wrap mt-6 border-t border-ink/15 pt-10">
          <p className="eyebrow">Good to know</p>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            {GOOD_TO_KNOW.map((g) => (
              <div key={g.title}>
                <h3 className="sh-h3">{g.title}</h3>
                <p className="sh-body mt-3">{g.body}</p>
              </div>
            ))}
          </div>
          <a href="mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" className="hz-btn hz-btn--solid mt-10">
            Ask about your date
          </a>
        </div>
      </section>

      {/* Add-ons: cards, invitations, website */}
      <section className="sh-wrap sh-section" aria-labelledby="wed-addons">
        <p className="eyebrow">Add-ons</p>
        <h2 id="wed-addons" className="sh-h2 mt-4 max-w-3xl">
          Cards, invitations and a <em>website</em>.
        </h2>
        <p className="sh-body mt-6 max-w-2xl">
          Your photos can do more than live in a gallery. These are designed by
          us and priced separately. Email us for an estimate.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {ADD_ONS.map((a) => (
            <div key={a.title}>
              <div className="sh-ph flex aspect-[4/5] items-end p-5" role="img" aria-label={`${a.title} sample, coming soon`}>
                <span className="eyebrow">Samples coming soon</span>
              </div>
              <h3 className="sh-h3 mt-5">{a.title}</h3>
              <p className="sh-body mt-3">{a.body}</p>
            </div>
          ))}
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
              src="/assets/stills/rings-bw.jpg"
              alt="A couple's hands joined, wedding rings close up, in black and white"
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
              <span className="sh-price__addon-amt">+ $1,200</span>
            </p>
            <a href="mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" className="sh-btn-fill mt-8">
              Ask about your date
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
            <div className="relative mx-auto aspect-[9/16] w-full max-w-[340px] overflow-hidden bg-ink">
              <video src="/assets/reels/Dc92Z0tBIDY.mp4" poster="/assets/reels/Dc92Z0tBIDY.jpg" autoPlay muted loop playsInline aria-label="Guests dancing on the lawn at Abha and Udit's wedding" className="absolute inset-0 h-full w-full max-w-none object-cover" />
            </div>
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
