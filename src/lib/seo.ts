/**
 * SEO for every Sunday House page.
 *
 * `pageHead()` returns the `head()` object a route needs: title, meta
 * description, canonical URL, Open Graph + Twitter cards. The JSON-LD helpers
 * return pre-stringified schema.org blocks for <StructuredData />.
 *
 * SITE_URL is the public domain search engines should index. If the site is
 * served from a different domain, change it here and every canonical,
 * og:url and schema URL follows.
 */

export const SITE_URL = "https://sundayhousepnw.com";
export const SITE_NAME = "Sunday House";
export const DEFAULT_IMAGE = "/assets/gallery/sunset-couple.png";

/** The places Sunday House photographs most — used in copy and schema. */
export const SERVICE_AREA = [
  "Seattle",
  "Tacoma",
  "Bellevue",
  "Kirkland",
  "Gig Harbor",
  "Puyallup",
  "Redmond",
  "Woodinville",
  "Issaquah",
  "Everett",
];

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

type PageSeo = {
  /** Full browser title — keep under ~60 characters. */
  title: string;
  /** Meta description — keep between ~120 and 160 characters. */
  description: string;
  /** Route path, e.g. "/weddings". */
  path: string;
  /** Share image (root-relative or absolute). */
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  noindex?: boolean;
};

export function pageHead({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  imageAlt = "Sunday House wedding photography in the Pacific Northwest",
  type = "website",
  noindex = false,
}: PageSeo) {
  const url = absoluteUrl(path);
  const img = absoluteUrl(image);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      ...(noindex ? [{ name: "robots", content: "noindex, follow" }] : []),
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: type },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: img },
      { property: "og:image:alt", content: imageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: img },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

/* ---------------------------------------------------------------- JSON-LD */

export const BUSINESS_ID = `${SITE_URL}/#business`;

/** Site-wide: who Sunday House is, where, and what it does. */
export const BUSINESS_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": BUSINESS_ID,
      name: SITE_NAME,
      alternateName: "Sunday House PNW",
      slogan: "A place for the things worth keeping.",
      description:
        "Wedding photography and film studio based in Tacoma, Washington, photographing weddings, engagements, elopements and portraits across Seattle, Tacoma and the Pacific Northwest.",
      url: SITE_URL,
      image: absoluteUrl(DEFAULT_IMAGE),
      logo: absoluteUrl("/assets/brand/logo-ink.png"),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tacoma",
        addressRegion: "WA",
        addressCountry: "US",
      },
      areaServed: [
        ...SERVICE_AREA.map((name) => ({ "@type": "City", name })),
        { "@type": "State", name: "Washington" },
      ],
      knowsAbout: [
        "Wedding photography",
        "Wedding videography",
        "Engagement photography",
        "Elopement photography",
        "Bridal portraits",
        "Couples photography",
        "Portrait photography",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Photography and film",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding photography" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding film" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Engagement and elopement photography" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Portrait photography" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": BUSINESS_ID },
      inLanguage: "en-US",
    },
  ],
});

export function faqJsonLd(items: { q: string; a: string }[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  });
}

export function breadcrumbJsonLd(trail: { name: string; path: string }[]): string {
  const full = [{ name: "Home", path: "/" }, ...trail];
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: full.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  });
}

export function serviceJsonLd(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  image?: string;
}): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: absoluteUrl(opts.path),
    image: absoluteUrl(opts.image ?? DEFAULT_IMAGE),
    provider: { "@id": BUSINESS_ID },
    areaServed: SERVICE_AREA.map((name) => ({ "@type": "City", name })),
  });
}
