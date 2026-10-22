import type { ReactNode } from "react";

import { StructuredData } from "@/components/StructuredData";
import { breadcrumbJsonLd } from "@/lib/seo";

import { Footer } from "./footer";
import { HouseInquiry } from "./house-inquiry";
import { SiteNav } from "./site-nav";

export function ContentShell({
  path,
  breadcrumb,
  inquiry = true,
  overlayNav = false,
  children,
}: {
  path?: string;
  /** Trail after "Home", e.g. [{ name: "Weddings", path: "/weddings" }] */
  breadcrumb?: { name: string; path: string }[];
  /** Show the closing inquiry band (default on). */
  inquiry?: boolean;
  /** See-through menu over a full-screen hero (home page). */
  overlayNav?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="paper-body min-h-dvh">
      {breadcrumb?.length ? <StructuredData json={breadcrumbJsonLd(breadcrumb)} /> : null}
      <SiteNav path={path} overlay={overlayNav} />
      <main id="main">
        {children}
        {inquiry ? <HouseInquiry /> : null}
      </main>
      <Footer />
    </div>
  );
}
