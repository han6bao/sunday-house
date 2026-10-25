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
          {NAV.map((item) => (
            <Link
              aria-current={path === item.href ? "page" : undefined}
              className="nav-link"
              key={item.href}
              to={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <Link
            to="/experience/$kind"
            params={{ kind: "weddings" }}
            className="sh-nav-inquire"
          >
            <Heart className="h-3 w-3" /> Inquire
          </Link>

          {/* Mobile menu — native <details>, works without JavaScript */}
          <details className="sh-menu lg:hidden">
            <summary aria-label="Open menu">
              <span className="sh-menu__bars" aria-hidden="true" />
            </summary>
            <nav aria-label="Mobile" className="sh-menu__panel">
              {NAV.map((item) => (
                <Link key={item.href} to={item.href} className="sh-menu__link">
                  {item.label}
                </Link>
              ))}
              <Link to="/plan" className="sh-menu__link sh-menu__link--quiet">
                Plan your wedding
              </Link>
              <Link to="/my-house" className="sh-menu__link sh-menu__link--quiet">
                My House
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
