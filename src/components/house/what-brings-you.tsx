import { Link } from "@tanstack/react-router";

/**
 * "What are you booking?" Three simple doors near the top of the home page,
 * each with quick links straight to the service pages.
 */
const DOORS = [
  {
    head: "Weddings",
    line: "Photography and film for your day.",
    to: "/weddings",
    photo: "/assets/stills/couple-sunset.jpg",
    alt: "A couple holding each other at sunset",
    links: [
      { label: "Photography", to: "/weddings" },
      { label: "Film", to: "/film" },
      { label: "Engagements", to: "/services/engagement-photography" },
    ],
  },
  {
    head: "Portraits",
    line: "Seniors, families, headshots and more.",
    to: "/photography",
    photo: "/assets/stills/senior-6.jpg",
    alt: "A senior in a white blouse in a sunlit meadow",
    links: [
      { label: "Seniors", to: "/services/senior-portraits" },
      { label: "Families", to: "/services/family-photography" },
      { label: "Headshots", to: "/services/headshots" },
      { label: "Modeling", to: "/services/modeling-acting" },
      { label: "Events", to: "/services/milestones-events" },
    ],
  },
  {
    head: "Content",
    line: "Photo and video content for your brand.",
    to: "/content-creation",
    photo: "/assets/content-work/Dc-FW05tqrF.jpg",
    alt: "A still from content created by Sunday House",
    links: [
      { label: "Content creation", to: "/content-creation" },
      { label: "Past work", to: "/content-portfolio" },
    ],
  },
];

export function WhatBringsYou() {
  return (
    <section className="sh-wrap sh-doors" aria-labelledby="doors-title">
      <p className="eyebrow" id="doors-title">
        What are you booking?
      </p>
      <div className="sh-doors__grid">
        {DOORS.map((d) => (
          <div key={d.head} className="sh-door">
            <Link to={d.to as never} className="sh-door__main">
              <img src={d.photo} alt={d.alt} loading="lazy" decoding="async" className="sh-door__img" />
              <span className="sh-door__text">
                <span className="sh-door__head">{d.head}</span>
                <span className="sh-door__line">{d.line}</span>
              </span>
              <span className="sh-door__arrow" aria-hidden="true">
                →
              </span>
            </Link>
            <div className="sh-door__links">
              {d.links.map((l) => (
                <Link key={l.label} to={l.to as never} className="sh-chip">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
