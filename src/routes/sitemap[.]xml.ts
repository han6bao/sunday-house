import { createFileRoute } from "@tanstack/react-router";

import { GUIDES } from "@/lib/location-guides";
import { SERVICES } from "@/lib/services";

const ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/plan", priority: "0.9", changefreq: "weekly" },
  { path: "/weddings", priority: "0.95", changefreq: "weekly" },
  { path: "/custom-pieces", priority: "0.7", changefreq: "monthly" },
  { path: "/photography", priority: "0.9", changefreq: "monthly" },
  { path: "/film", priority: "0.7", changefreq: "monthly" },
  { path: "/wedding-websites", priority: "0.7", changefreq: "monthly" },
  { path: "/content-creation", priority: "0.7", changefreq: "monthly" },
  { path: "/content-portfolio", priority: "0.7", changefreq: "weekly" },
  { path: "/locations", priority: "0.7", changefreq: "weekly" },
  { path: "/house-objects", priority: "0.6", changefreq: "monthly" },
  { path: "/extras", priority: "0.6", changefreq: "monthly" },
  { path: "/about", priority: "0.5", changefreq: "monthly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  ...SERVICES.map((s) => ({
    path: `/services/${s.slug}`,
    priority: s.slug.endsWith("wedding-photographer") ? "0.95" : "0.85",
    changefreq: "monthly",
  })),
  // Location guides: not in the menu, discoverable through search.
  { path: "/guides", priority: "0.6", changefreq: "monthly" },
  ...GUIDES.map((g) => ({ path: `/guides/${g.slug}`, priority: "0.7", changefreq: "monthly" })),
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const today = new Date().toISOString().split("T")[0];
        const entries = ROUTES.map(
          (r) =>
            [
              "  <url>",
              `    <loc>${origin}${r.path}</loc>`,
              `    <lastmod>${today}</lastmod>`,
              `    <changefreq>${r.changefreq}</changefreq>`,
              `    <priority>${r.priority}</priority>`,
              "  </url>",
            ].join("\n")
        );
        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          entries.join("\n"),
          "</urlset>",
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});