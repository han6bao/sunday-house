"use client";

import { useEffect, useRef } from "react";

import { Link } from "@tanstack/react-router";

import { ScrollProgress } from "./scroll-progress";
import { Heart, HouseMark } from "./marks";

/** Three simple groups. Every service keeps its own page and link. */
type NavItem = { label: string; href: string; sub?: { label: string; href: string }[] };

const NAV: NavItem[] = [
  {
    label: "Weddings",
    href: "/weddings",
    sub: [
      { label: "Wedding Photography", href: "/weddings" },
      { label: "Wedding Film", href: "/film" },
      { label: "Engagements", href: "/services/engagement-photography" },
    ],
  },
  {
    label: "Portraits",
    href: "/photography",
    sub: [
      { label: "Seniors + Grads", href: "/services/senior-portraits" },
      { label: "Families + Maternity", href: "/services/family-photography" },
      { label: "Headshots", href: "/services/headshots" },
      { label: "Modeling + Acting", href: "/services/modeling-acting" },
      { label: "Creative Sessions", href: "/services/creative-portraits" },
      { label: "Milestones + Events", href: "/services/milestones-events" },
      { label: "All portrait prices", href: "/photography" },
    ],
  },
  { label: "Content", href: "/content-creation" },
  { label: "About", href: "/about" },
];

/** Every service link, flat (used by the Services page). */
export const SERVICE_LINKS = NAV.flatMap((n) => n.sub ?? [{ label: n.label, href: n.href }]).filter(
  (l, i, all) => all.findIndex((x) => x.href === l.href) === i && l.href !== "/about",
);

export function SiteNav({ path, overlay = false }: { path?: string; overlay?: boolean }) {
  const ref = useRef<HTMLElement>(null);

  // Over the full-screen hero the bar is see-through; it turns solid once
  // the visitor scrolls past most of the first screen.
  useEffect(() => {
    if (!overlay) return;
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      el.dataset.solid = window.scrollY > window.innerHeight - 80 ? "true" : "false";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  return (
    <header ref={ref} className={overlay ? "hz-nav hz-nav--overlay" : "hz-nav sticky top-0 z-40"} data-solid="false">
      <a href="#main" className="sh-skip">
        Skip to content
      </a>
      <ScrollProgress />
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-5 md:px-8">
        <Link to="/" className="flex items-center" aria-label="Sunday House home">
          <HouseMark className="sh-logo h-8 w-8" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) =>
            item.sub ? (
              <div key={item.href} className="sh-navdrop">
                <Link aria-current={path === item.href ? "page" : undefined} className="nav-link" to={item.href as never}>
                  {item.label}
                </Link>
                <div className="sh-navdrop__panel">
                  {item.sub.map((l) => (
                    <Link key={l.label} to={l.href as never} className="sh-navdrop__link">
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                aria-current={path === item.href ? "page" : undefined}
                className="nav-link"
                key={item.href}
                to={item.href as never}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2.5">
          <a href="mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" className="sh-nav-inquire">
            <Heart className="h-3 w-3" /> Contact
          </a>

          {/* Mobile menu — native <details>, works without JavaScript */}
          <details className="sh-menu lg:hidden">
            <summary aria-label="Open menu">
              <span className="sh-menu__bars" aria-hidden="true" />
            </summary>
            <nav aria-label="Mobile" className="sh-menu__panel">
              {NAV.map((item) => (
                <div key={item.href} className="sh-menu__group">
                  <Link to={item.href as never} className="sh-menu__link">
                    {item.label}
                  </Link>
                  {item.sub ? (
                    <div className="sh-menu__subs">
                      {item.sub.map((l) => (
                        <Link key={l.label} to={l.href as never} className="sh-menu__sub-link">
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
              <a href="mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" className="sh-menu__cta">
                Inquire
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
