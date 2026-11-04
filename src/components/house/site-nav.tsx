"use client";

import { useEffect, useRef } from "react";

import { Link } from "@tanstack/react-router";

import { ScrollProgress } from "./scroll-progress";
import { Heart, HouseMark } from "./marks";

/** Wedding-first navigation: the work, then the house. */
const NAV = [
  { label: "Weddings", href: "/weddings" },
  { label: "Film", href: "/film" },
  { label: "Portraits", href: "/photography" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

/** What sits under Services. */
export const SERVICE_LINKS = [
  { label: "Portrait Sessions", href: "/photography" },
  { label: "Seniors + Grads", href: "/services/senior-portraits" },
  { label: "Families + Maternity", href: "/services/family-photography" },
  { label: "Milestones + Events", href: "/services/milestones-events" },
  { label: "Headshots", href: "/services/headshots" },
  { label: "Modeling + Acting", href: "/services/modeling-acting" },
  { label: "Creative Sessions", href: "/services/creative-portraits" },
  { label: "Engagements", href: "/services/engagement-photography" },
  { label: "Weddings", href: "/weddings" },
  { label: "Wedding Film", href: "/film" },
  { label: "Content Creation", href: "/content-creation" },
  { label: "All services", href: "/services" },
];

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
            item.href === "/services" ? (
              <div key={item.href} className="sh-navdrop">
                <Link aria-current={path === item.href ? "page" : undefined} className="nav-link" to={item.href}>
                  {item.label}
                </Link>
                <div className="sh-navdrop__panel">
                  {SERVICE_LINKS.map((l) => (
                    <Link key={l.href} to={l.href as never} className="sh-navdrop__link">
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
                to={item.href}
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
                <div key={item.href} className="contents">
                  <Link to={item.href} className="sh-menu__link">
                    {item.label}
                  </Link>
                  {item.href === "/services"
                    ? SERVICE_LINKS.slice(0, 7).map((l) => (
                        <Link key={l.href} to={l.href as never} className="sh-menu__link sh-menu__link--quiet sh-menu__sub">
                          {l.label}
                        </Link>
                      ))
                    : null}
                </div>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
