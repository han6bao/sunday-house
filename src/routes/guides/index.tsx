import { createFileRoute, Link } from "@tanstack/react-router";

import { ContentShell } from "@/components/house/content-shell";
import { AREAS, AREA_ORDER, GUIDES, SESSIONS, SESSION_ORDER } from "@/lib/location-guides";
import { pageHead } from "@/lib/seo";

/** Index of every location guide. Not in the menu; reachable from the sitemap and the guides themselves. */
export const Route = createFileRoute("/guides/")({
  head: () =>
    pageHead({
      title: "Photo Location Guides: Seattle, Tacoma + Bellevue | Sunday House",
      description:
        "Where to take senior, engagement, anniversary and styled wedding photos in Seattle, Tacoma, Lakewood and Bellevue — local guides from Sunday House.",
      path: "/guides",
    }),
  component: GuidesIndex,
});

function GuidesIndex() {
  return (
    <ContentShell path="/guides" breadcrumb={[{ name: "Location guides", path: "/guides" }]}>
      <section className="sh-wrap pt-14 md:pt-20">
        <p className="eyebrow">Location guides</p>
        <h1 className="sh-h1 mt-4 max-w-4xl">Where to be photographed around Puget Sound.</h1>
        <p className="sh-lede mt-6 max-w-2xl">
          Our favorite places for senior photos, engagements, anniversaries and styled wedding shoots, city by city.
        </p>
      </section>
      <section className="sh-wrap sh-section">
        <div className="grid gap-12 md:grid-cols-2">
          {SESSION_ORDER.map((sk) => (
            <div key={sk}>
              <h2 className="sh-h2">{SESSIONS[sk].short}</h2>
              <ul className="mt-5">
                {AREA_ORDER.map((ak) => {
                  const g = GUIDES.find((x) => x.session === sk && x.area === ak)!;
                  return (
                    <li key={g.slug} className="border-b border-ink/15 first:border-t">
                      <Link to="/guides/$slug" params={{ slug: g.slug }} className="group flex items-baseline justify-between py-4">
                        <span className="sh-h3 group-hover:italic">{AREAS[ak].name}</span>
                        <span className="sh-num">→</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </ContentShell>
  );
}
