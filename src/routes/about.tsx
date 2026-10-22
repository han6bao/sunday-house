import { createFileRoute, Link } from "@tanstack/react-router";

import { ContentShell } from "@/components/house/content-shell";
import { Heart, HouseMark } from "@/components/house/marks";
import { Photo } from "@/components/house/photo";
import { SoundFilm } from "@/components/house/sound-film";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About Sunday House | Tacoma Wedding Photography Studio",
      description:
        "Sunday House is a wedding photography and film studio based in Tacoma, Washington, photographing weddings across Seattle, the Pacific Northwest and beyond.",
      path: "/about",
      image: "/assets/gallery/couple-walk.png",
      imageAlt: "Newlyweds walking away together after their ceremony",
    }),
  component: About,
});

const VALUES = [
  { title: "Intentional", body: "We plan the light, the timing and the quiet moments, so nothing important is rushed." },
  { title: "Personal", body: "Your photographs should look like you — not like a preset. We shape the edit around your taste." },
  { title: "Collaborative", body: "We work independently and alongside a trusted circle of filmmakers and creatives, depending on what your story needs." },
];

export default function About() {
  return (
    <ContentShell path="/about" breadcrumb={[{ name: "About", path: "/about" }]}>
      <section className="sh-wrap sh-abouthero">
        <HouseMark className="sh-abouthero__mark" strokeWidth={22} aria-hidden="true" />
        <p className="sh-script">A place for the things worth keeping.</p>
        <h1 className="sh-h1 mx-auto mt-3 max-w-4xl">
          A house built <em>around</em> the photograph.
        </h1>
        <p className="sh-lede mx-auto mt-6 max-w-xl">
          We&rsquo;re a wedding photography and film studio in Tacoma,
          Washington — a home for photographs, films and the details that
          surround the days worth remembering.
        </p>
        <div className="sh-divider sh-abouthero__rule" aria-hidden="true">
          <span />
          <Heart className="h-3.5 w-3.5" />
          <span />
        </div>
      </section>

      {/* Welcome film */}
      <section id="welcome" className="sh-wrap scroll-mt-24 pt-[clamp(2rem,5vw,4rem)]" aria-labelledby="about-welcome">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">A warm welcome</p>
            <h2 id="about-welcome" className="sh-h2 mt-3">
              Hello from <em>Sunday House</em>.
            </h2>
          </div>
          <p className="sh-num">Tap the speaker to listen</p>
        </div>
        <SoundFilm
          className="sh-soundfilm--wide"
          src="/assets/motion/welcome.mp4"
          poster="/assets/motion/welcome.jpg"
          label="A warm welcome from Sunday House: moments from weddings, portraits and celebrations"
        />
      </section>

      <section className="sh-wrap sh-section" aria-labelledby="about-story">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Behind the camera</p>
            <h2 id="about-story" className="sh-h2 mt-4">
              Nearly a decade of <em>looking closely</em>.
            </h2>
          </div>
          <div className="space-y-5 lg:col-span-7 lg:col-start-6">
            <p className="sh-lede">
              Behind the camera is nearly a decade of professional photography,
              grounded in a photography specialization from Michigan State
              University.
            </p>
            <p className="sh-body">
              It started with senior portraits: helping people feel like
              themselves in front of a lens. Then came weddings, and with them a
              whole new world. A wedding holds everything at once — nerves and
              laughter, family and ritual, quiet moments no one planned. We fell
              for it completely.
            </p>
            <p className="sh-body">
              We love the candids most, the in-between seconds that tell the
              truth about a day. But we love the posing too — the kind that
              feels natural and looks effortless — and the creative side: light,
              movement and cinematic frames that feel like a still from your own
              film.
            </p>
            <p className="sh-body">
              Based in Tacoma, photographing weddings across Seattle, the Pacific
              Northwest and wherever your story takes us.
            </p>
          </div>
        </div>
      </section>

      <section className="sh-wrap pb-[clamp(4rem,8vw,7rem)]">
        <figure className="mb-5 md:mb-8">
          <Photo src="" need="About: a behind-the-scenes photo of you working, camera in hand (horizontal, no name needed)" alt="Behind the scenes at a Sunday House wedding" ratio="16/9" sizes="100vw" />
          <figcaption className="sh-caption">Behind the scenes, somewhere in Puget Sound.</figcaption>
        </figure>
        <div className="grid grid-cols-3 gap-3 md:gap-5">
          <Photo src="/assets/gallery/bride-portrait.png" need="About row 1 of 3: a wedding" alt="Bridal portrait in soft natural light" ratio="2/3" sizes="33vw" />
          <Photo src="/assets/gallery/greenhouse.png" need="About row 2 of 3: a portrait" alt="Portrait in a sunlit greenhouse" ratio="2/3" sizes="33vw" />
          <Photo src="/assets/gallery/field-walk.png" need="About row 3 of 3: a quiet detail" alt="A woman walking through a summer field" ratio="2/3" sizes="33vw" />
        </div>
      </section>

      <section className="rose-paper sh-section">
        <div className="sh-wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Where we are</p>
            <h2 className="sh-h2 mt-4">Based in Tacoma. Photographing all of Puget Sound.</h2>
            <p className="sh-body mt-6">
              From Tacoma and Gig Harbor to Seattle, Bellevue and Woodinville —
              and anywhere else in the Pacific Northwest a story takes us. Weddings
              first, with portraits and the in-between moments that deserve to
              be remembered with intention.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            {VALUES.map((v, i) => (
              <div key={v.title} className="sh-step mb-8">
                <p className="sh-num">0{i + 1}</p>
                <h3 className="sh-h3 mt-3">{v.title}</h3>
                <p className="sh-body mt-2">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sh-wrap sh-section text-center">
        <p className="eyebrow">Say hello</p>
        <p className="sh-h2 mx-auto mt-5 max-w-3xl">
          Tell us about <em>your</em> day.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/experience/$kind" params={{ kind: "weddings" }} className="sh-btn-fill">
            Check your date
          </Link>
          <Link to="/weddings" className="sh-invite__alt self-center">
            See the weddings →
          </Link>
        </div>
      </section>
    </ContentShell>
  );
}
