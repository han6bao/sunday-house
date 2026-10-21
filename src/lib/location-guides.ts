/**
 * Location guides — "best senior photo locations in Tacoma" style pages.
 * Not linked from the menu or footer on purpose: they live in the sitemap so
 * search engines find them, and each one links to its sibling guides.
 *
 * Every pick has its own blurb written for that session type, so no two pages
 * repeat each other. Photos and credits come from the location archive.
 */
import { LOCATION_ARCHIVE, photoCredit, type LocationEntry } from "./location-archive";

export type SessionKey = "seniors" | "couples" | "anniversary" | "styled";
export type AreaKey = "seattle" | "tacoma" | "lakewood" | "bellevue";

type Pick = { name: string; blurb: string; label?: string; city?: string };

export const SESSIONS: Record<
  SessionKey,
  {
    slugPart: string;
    short: string;
    h1: (city: string) => string;
    title: (city: string) => string;
    description: (city: string) => string;
    intro: string;
    tips: string[];
    service: { label: string; to: string };
    priceAnswer: string;
    extraFaq: (city: string) => { q: string; a: string };
  }
> = {
  seniors: {
    slugPart: "senior-photo-locations",
    short: "Senior photos",
    h1: (c) => `The best senior photo locations in ${c}`,
    title: (c) => `Best Senior Photo Locations in ${c} | Sunday House`,
    description: (c) =>
      `Where to take senior and graduation photos in ${c}: our favorite spots for city, garden and waterfront looks, with timing tips from a local photographer.`,
    intro:
      "Senior photos should look like the person you are this year. The best spots give you variety in one session — a little city, a little green, and light that flatters — without long drives between outfits.",
    tips: [
      "Pick two spots close together, so outfit changes don't eat the session.",
      "Book the last ninety minutes before sunset. Midday sun is the hardest light for portraits.",
      "Bring one outfit that feels dressed up and one that feels like a regular Tuesday.",
    ],
    service: { label: "Senior portraits", to: "/services/senior-portraits" },
    priceAnswer:
      "Senior sessions are $375 for one hour and two outfits, or $575 for two hours with three to four outfits and two locations.",
    extraFaq: (c) => ({
      q: `How many outfits should I bring to senior photos in ${c}?`,
      a: "Two to four. Plan one outfit per location so every change also gives you a new background.",
    }),
  },
  couples: {
    slugPart: "engagement-photo-locations",
    short: "Engagement + couples",
    h1: (c) => `The best engagement + couples photo locations in ${c}`,
    title: (c) => `Best Engagement Photo Locations in ${c} | Sunday House`,
    description: (c) =>
      `Romantic places for engagement and couples photos in ${c}: beaches, gardens, skyline views and quiet trails, with golden-hour tips from a local photographer.`,
    intro:
      "The best engagement photos happen while you're walking, talking and laughing, not standing still. These spots give you room to move, light that glows, and backdrops that feel like the two of you.",
    tips: [
      "Choose a place that means something — where you met, your neighborhood, your favorite walk — then add one spot nearby for variety.",
      "Plan around golden hour. Summer sunsets here are late; winter ones come early in the afternoon.",
      "Coordinate colors instead of matching, and bring one dressier and one relaxed look.",
    ],
    service: { label: "Engagement + couples sessions", to: "/services/engagement-photography" },
    priceAnswer:
      "Couples sessions begin at $375 for an hour. Engagement sessions are $450 for ninety minutes and two looks.",
    extraFaq: () => ({
      q: "Can we bring our dog?",
      a: "Please do. We'll plan a few frames with them and the rest of the session without.",
    }),
  },
  anniversary: {
    slugPart: "anniversary-photo-locations",
    short: "Anniversary photos",
    h1: (c) => `Anniversary photo ideas + locations in ${c}`,
    title: (c) => `Anniversary Photo Locations + Ideas in ${c} | Sunday House`,
    description: (c) =>
      `Anniversary photo ideas and places to take them in ${c}: gardens, waterfront walks and elegant hotels for marking a milestone year together.`,
    intro:
      "Anniversary photos are about the life you've built since the wedding. Some couples go back to where it started; others dress up and make an evening of it. Either way, the place should feel personal.",
    tips: [
      "Go back to where it began — your first date, your proposal spot, your wedding venue.",
      "Bring something from the wedding: the veil, the bouquet ribbon, the vows, the album.",
      "Book the session before a dinner reservation and make the evening the gift.",
    ],
    service: { label: "Couples + anniversary sessions", to: "/services/engagement-photography" },
    priceAnswer: "Anniversary sessions are couples sessions: they begin at $375 for an hour at one location.",
    extraFaq: () => ({
      q: "What are some anniversary photo ideas?",
      a: "Recreate a photo from your wedding or first date, wear your wedding outfits again, bring your kids or your dog, or read each other a letter on camera. We'll help you choose one idea that feels like you.",
    }),
  },
  styled: {
    slugPart: "styled-wedding-shoot-locations",
    short: "Styled wedding shoots",
    h1: (c) => `Styled wedding shoot locations in ${c}`,
    title: (c) => `Styled Wedding Shoot Locations in ${c} | Sunday House`,
    description: (c) =>
      `Where to plan a styled wedding shoot in ${c}: historic hotels, estate gardens and waterfront spots that do half the art direction for you.`,
    intro:
      "A styled shoot is a wedding without the wedding: a dress, florals, a table and a location that does half the art direction. Planners and florists use them to build portfolios, and couples use them to have the photographs they always pictured.",
    tips: [
      "Hotels, estates and private gardens usually need a booking or fee for styled shoots. Confirm before you order florals.",
      "Build the day around one hero location, then add a second look within walking distance.",
      "Always have a covered backup. Pacific Northwest weather keeps its own schedule.",
    ],
    service: { label: "Wedding photography", to: "/weddings" },
    priceAnswer:
      "Styled shoots are quoted to fit the concept and the hours. Most begin around our portrait and elopement rates; ask with your mood board and we'll send a clear proposal.",
    extraFaq: () => ({
      q: "Do we need permission to shoot at a venue?",
      a: "Private venues, hotels and estate gardens almost always need a booking. Public parks often allow small, unstaged sessions, but bigger setups with furniture or florals may need a permit. We help you check before you plan.",
    }),
  },
};

export const AREAS: Record<
  AreaKey,
  { name: string; intro: string; season: string }
> = {
  seattle: {
    name: "Seattle",
    intro:
      "Seattle puts skyline viewpoints, saltwater beaches, Japanese gardens and old industrial landmarks within twenty minutes of each other. The catch is crowds and changeable weather, so the best sessions pair one iconic spot with a quieter one nearby.",
    season:
      "Spring brings cherry blossoms and azaleas, and September into mid-October often has the warmest, driest light of the year.",
  },
  tacoma: {
    name: "Tacoma",
    intro:
      "Tacoma is home for Sunday House, and its best photo spots sit along the water: Commencement Bay, Point Defiance and the Narrows. Add historic brick, a castle-like high school and a glass museum, and you can get three looks without leaving the city.",
    season:
      "Summer evenings on the waterfront glow late, and fall turns Wright Park and Point Defiance gold.",
  },
  lakewood: {
    name: "Lakewood",
    intro:
      "Lakewood is the South Sound's quiet secret: lakes ringed with tall trees, open meadows and a historic estate garden, a short drive from Tacoma and usually far less crowded than the big-city spots.",
    season:
      "Late spring and early fall are the sweet spots, and summer evenings on the lakes are warm and soft.",
  },
  bellevue: {
    name: "Bellevue",
    intro:
      "Bellevue pairs a polished downtown with lakefront parks, farm trails and one of the region's best botanical gardens. It's the easiest Eastside base for a session that wants both city and green.",
    season:
      "Spring blooms in the botanical garden and fall color along the creek trails are the highlights.",
  },
};

const PICKS: Record<SessionKey, Record<AreaKey, Pick[]>> = {
  seniors: {
    seattle: [
      { name: "Pike Place Market", blurb: "The neon sign, flower stalls and brick alleys bring big-city energy. Go early on a weekday, before the crowds." },
      { name: "Kerry Park", blurb: "The postcard skyline with the Space Needle behind you. Best at sunset; on clear days Mount Rainier joins in." },
      { name: "Gas Works Park", blurb: "Rusted towers and a grassy hill above Lake Union. Edgy, editorial and very Seattle." },
      { name: "UW Cherry Blossoms (The Quad)", label: "The UW Quad", blurb: "In late March and early April the Quad turns pink. Come at sunrise on a weekday to have it nearly to yourself." },
      { name: "Golden Gardens Park", blurb: "Sand, driftwood and sunsets over the Sound. Perfect for a relaxed second outfit." },
      { name: "The Fremont Troll", blurb: "A playful, only-in-Seattle stop for seniors who want some personality in the gallery." },
    ],
    tacoma: [
      { name: "Stadium High School", blurb: "The castle-like school above Commencement Bay. Fitting for any senior session, and a must for Stadium grads." },
      { name: "Wright Park + Seymour Conservatory", blurb: "Huge old trees, a pond and a Victorian glass conservatory: two very different looks a few steps apart." },
      { name: "Museum of Glass", blurb: "Clean modern lines, the tilted cone and the Chihuly Bridge of Glass make a striking backdrop for a sharp outfit." },
      { name: "Ruston Way Waterfront", blurb: "A long waterfront walk with warm evening light on Commencement Bay. Easy for a casual look." },
      { name: "Spanish Steps (Old Town)", label: "The Spanish Steps", blurb: "Historic stairs beside the old Elks Temple downtown. Classic, a little moody, made for full-length portraits." },
      { name: "Sixth Avenue (Tacoma)", label: "Sixth Avenue", blurb: "Murals, vintage storefronts and neighborhood cafés for a street-style set." },
    ],
    lakewood: [
      { name: "Fort Steilacoom Park (Waughop Lake)", label: "Fort Steilacoom Park", blurb: "Open meadows, a lakeside loop and big skies. Plenty of variety and plenty of room to move." },
      { name: "Lakewold Gardens", blurb: "A historic estate garden with formal beds and shady paths. Check visiting hours and photo fees before you plan." },
      { name: "American Lake", blurb: "A lakefront beach and docks with long sunset light across the water." },
      { name: "University Place / Chambers Bay", label: "Chambers Bay", blurb: "Ten minutes away in University Place: dunes, a long trail and sunsets over the Sound." },
      { name: "Sunnyside Beach Park", city: "Steilacoom", blurb: "Next door in Steilacoom, a small beach looking out to the islands. Great for a breezy final look." },
    ],
    bellevue: [
      { name: "Bellevue Downtown Park", blurb: "A waterfall, a reflecting canal and a promenade with towers behind. Polished and city-modern." },
      { name: "Old Bellevue (Main Street)", city: "Bellevue", blurb: "Boutiques and brick storefronts on Main Street for a stylish, walkable second look." },
      { name: "Meydenbauer Bay Park", blurb: "A waterfront park with a pier and beach: clean lines and bright lake light." },
      { name: "Kelsey Creek Farm Park", blurb: "Red barns, pastures and wooden fences. A countryside look minutes from downtown." },
      { name: "Bellevue Botanical Garden", blurb: "Gardens for every season, from spring blooms to fall color. A softer, romantic set." },
    ],
  },
  couples: {
    seattle: [
      { name: "Kerry Park", blurb: "The skyline view at sunset, then a walk through the quiet Queen Anne streets around it for candid moments." },
      { name: "Discovery Park", blurb: "Bluffs, meadows and the West Point lighthouse on the beach. Wild, windy and very romantic." },
      { name: "Golden Gardens Park", blurb: "Sand, fire rings and a sunset behind the Olympics, made for a cozy evening session." },
      { name: "Washington Park Arboretum", blurb: "Winding trails under huge trees, with azaleas in spring and blazing color in fall." },
      { name: "Kubota Garden", blurb: "Ponds, stone paths and a red bridge in a quiet south Seattle garden." },
      { name: "Alki Beach", blurb: "A beach walk with the downtown skyline across the water. Easy, relaxed and lovely at golden hour." },
    ],
    tacoma: [
      { name: "Owen Beach (Point Defiance)", label: "Owen Beach", blurb: "A pebble beach under forested bluffs at Point Defiance. Pair it with the Five Mile Drive viewpoints." },
      { name: "Ruston Way Waterfront", blurb: "Sunset walks along Commencement Bay, with piers, benches and old dock pilings." },
      { name: "Chinese Reconciliation Park", blurb: "A peaceful waterfront park on Ruston Way with a pavilion, gardens and bay views." },
      { name: "Titlow Beach", blurb: "Tide flats and weathered pilings by the Narrows. Moody, textured and rarely crowded." },
      { name: "University Place / Chambers Bay", label: "Chambers Bay", blurb: "Rolling dunes, a footbridge and big Puget Sound sunsets just past the city line." },
      { name: "Thea Foss Waterway", blurb: "City lights on the water and boats at the marina. A beautiful blue-hour finish." },
    ],
    lakewood: [
      { name: "Lakewold Gardens", blurb: "Estate gardens, shaded paths and lake views: classic and romantic. Hours and photo fees apply, so we book ahead." },
      { name: "Fort Steilacoom Park (Waughop Lake)", label: "Fort Steilacoom Park", blurb: "A slow walk around Waughop Lake through open meadow. Natural and full of movement." },
      { name: "American Lake", blurb: "Golden hour on the water, with docks and a sandy shore." },
      { name: "University Place / Chambers Bay", label: "Chambers Bay", blurb: "Just next door: dunes and trails over the Sound for a dramatic sunset finish." },
    ],
    bellevue: [
      { name: "Meydenbauer Bay Park", blurb: "A pier, a beach and lake views five minutes from downtown. Bright and airy." },
      { name: "Bellevue Botanical Garden", blurb: "Garden paths, a Japanese garden and seasonal color for a soft, romantic set." },
      { name: "Mercer Slough Nature Park", blurb: "Boardwalks through wetlands and tall grasses. Nature-heavy and beautifully quiet." },
      { name: "Chism Beach Park (Old Bellevue)", label: "Chism Beach Park", blurb: "A small lakeside park with a dock and trees reaching over the water." },
      { name: "Bellevue Downtown Park", blurb: "Towers, a waterfall and a canal, for couples who want the city in their story." },
    ],
  },
  anniversary: {
    seattle: [
      { name: "Volunteer Park Conservatory", blurb: "A Victorian glasshouse full of palms and orchids. Warm, romantic and rain-proof." },
      { name: "Seattle Japanese Garden", blurb: "A serene garden in the Arboretum with a pond, maples and stone lanterns. Calm, timeless frames." },
      { name: "Pike Place Market", blurb: "If your story started over coffee or flowers downtown, recreate it here, then walk to the waterfront." },
      { name: "Kerry Park", blurb: "Blue hour with the city lighting up behind you. Simple, classic and made for a framed print." },
      { name: "Seward Park", blurb: "Old-growth forest and a lakeside loop on Lake Washington, for something quiet and grounded." },
      { name: "Sorrento Hotel (Seattle)", label: "Sorrento Hotel", blurb: "A historic hotel with old-world elegance. Ideal for a dressed-up anniversary with dinner after." },
    ],
    tacoma: [
      { name: "Point Defiance Rose Garden (Talbot Garden)", label: "Point Defiance Rose Garden", blurb: "Rose arbors and garden paths at Point Defiance, at their most romantic in June." },
      { name: "Wright Park + Seymour Conservatory", blurb: "Big old trees and a glass conservatory. Romantic in every season, and dry when it rains." },
      { name: "Point Defiance Japanese Garden", blurb: "A quiet garden with a pagoda, a pond and maples." },
      { name: "Ruston Way Waterfront", blurb: "A long golden walk by the water. Bring takeout and make it a date." },
      { name: "Hotel Murano (Tacoma)", label: "Hotel Murano", blurb: "An art hotel downtown for a dressy evening session before dinner." },
      { name: "Old Town Tacoma", blurb: "Tacoma's oldest neighborhood: a tiny historic church, a dock and Commencement Bay views." },
    ],
    lakewood: [
      { name: "Lakewold Gardens", blurb: "Garden-party romance: estate grounds, lake views and formal beds." },
      { name: "Thornewood Castle", city: "Lakewood", blurb: "A Tudor-style castle estate on American Lake. Private and by arrangement only, but unforgettable for a milestone year." },
      { name: "American Lake", blurb: "Sunset on the water, sitting on the dock like you did that first summer." },
      { name: "Fort Steilacoom Park (Waughop Lake)", label: "Fort Steilacoom Park", blurb: "An easy, unhurried walk around the lake, perfect for real moments." },
    ],
    bellevue: [
      { name: "Bellevue Botanical Garden", blurb: "Seasonal gardens and a suspension bridge over a ravine. Elegant and romantic." },
      { name: "Clyde Beach Park (Old Bellevue)", label: "Clyde Beach Park", blurb: "A small beach on Meydenbauer Bay, with lake light and boats in the background." },
      { name: "Meydenbauer Bay Park", blurb: "The pier at sunset, then dinner in Old Bellevue a few blocks away." },
      { name: "Kelsey Creek Farm Park", blurb: "Barns and pastures for a cozy countryside anniversary, especially pretty in fall." },
      { name: "Bellevue Downtown Park", blurb: "The waterfall and the skyline for a polished, modern look." },
    ],
  },
  styled: {
    seattle: [
      { name: "Fairmont Olympic Hotel (Seattle)", label: "Fairmont Olympic Hotel", blurb: "Grand staircases and a classic lobby: the most timeless backdrop in the city for gowns and tuxedos." },
      { name: "The Arctic Club Hotel (Seattle)", label: "The Arctic Club Hotel", blurb: "Historic architecture and a stained-glass dome room. Moody and editorial." },
      { name: "Sorrento Hotel (Seattle)", label: "Sorrento Hotel", blurb: "An old-world courtyard and wood-panelled rooms for an intimate, European feel." },
      { name: "The Edgewater Hotel (Seattle)", label: "The Edgewater Hotel", blurb: "Built right over Elliott Bay, so the waterfront backdrop comes included." },
      { name: "Washington Park Arboretum", blurb: "A garden-wedding look under big trees and spring azaleas." },
      { name: "Volunteer Park Conservatory", blurb: "A Victorian glasshouse for lush, greenery-filled frames, rain or shine." },
    ],
    tacoma: [
      { name: "McMenamins Elk's Lodge (Old Town)", label: "McMenamins Elks Temple", blurb: "A restored historic Elks Temple downtown with rich, moody rooms, and the Spanish Steps right beside it." },
      { name: "Hotel Murano (Tacoma)", label: "Hotel Murano", blurb: "Glass art throughout and modern suites for getting-ready and editorial portraits." },
      { name: "Union Station (Tacoma)", label: "Union Station", blurb: "A copper-domed landmark with a grand exterior for classic portraits." },
      { name: "Wright Park + Seymour Conservatory", blurb: "Victorian glass and big old trees for garden-party styling." },
      { name: "Point Defiance Rose Garden (Talbot Garden)", label: "Point Defiance Rose Garden", blurb: "Rose arbors and garden paths for floral-heavy styling in early summer." },
      { name: "University Place / Chambers Bay", label: "Chambers Bay", blurb: "Dunes and big sky for a windswept, editorial bridal look." },
    ],
    lakewood: [
      { name: "Thornewood Castle", city: "Lakewood", blurb: "A Tudor-style castle with gardens on American Lake. It's a working wedding venue, so styled shoots are booked through them." },
      { name: "Lakewold Gardens", blurb: "Historic estate gardens and a stately house for classic, garden-party styling." },
      { name: "American Lake", blurb: "Lakeside portraits and a dock for a summer lake-wedding look." },
      { name: "Fort Steilacoom Park (Waughop Lake)", label: "Fort Steilacoom Park", blurb: "Open meadow and lakeshore for a relaxed, boho styled shoot." },
    ],
    bellevue: [
      { name: "Bellevue Botanical Garden", blurb: "Seasonal gardens and a Japanese garden for romantic, floral styling." },
      { name: "Chateau Ste. Michelle", blurb: "About twenty minutes north in Woodinville: a French-style chateau and grounds in wine country." },
      { name: "Willows Lodge", blurb: "A Northwest-luxury lodge with gardens beside the Woodinville wineries." },
      { name: "Meydenbauer Bay Park", blurb: "A lakefront pier for a clean, modern waterfront look." },
      { name: "Kelsey Creek Farm Park", blurb: "A barn and pasture for a rustic styled shoot without leaving the city." },
    ],
  },
};

/** Archive photos that don't show the place well enough to feature in a guide. */
const SKIP_PHOTO = new Set([
  "Bellevue Downtown Park",
  "Bellevue Botanical Garden",
  "Saint Edward State Park",
  "Hamlin Park",
  "Saltwater State Park",
  "Howarth Park",
]);

export type GuideSpot = {
  name: string;
  city: string;
  blurb: string;
  mapUrl: string;
  photo: { src: string; credit: { text: string; href: string } } | null;
};

function findEntry(name: string): LocationEntry | undefined {
  return LOCATION_ARCHIVE.find((l) => l.name === name || l.name.startsWith(`${name} (`));
}

function toSpot(p: Pick): GuideSpot {
  const e = findEntry(p.name);
  const credit = e ? photoCredit(e) : null;
  return {
    name: p.label ?? p.name,
    city: p.city ?? e?.city ?? "",
    blurb: p.blurb,
    mapUrl:
      e?.url && e.url.includes("maps.google.")
        ? e.url
        : `https://maps.google.com/?q=${encodeURIComponent(`${p.label ?? p.name}, ${p.city ?? e?.city ?? ""}, WA`)}`,
    photo: e && credit && !SKIP_PHOTO.has(e.name) ? { src: e.img, credit } : null,
  };
}

/**
 * Personal notes, written by us, shown at the top of a guide. Add one per page
 * (keyed by slug) as you shoot at these places; pages without one simply skip it.
 */
export const GUIDE_NOTES: Partial<Record<string, string>> = {};

/** Quick facts shown as small tags under each guide's title. */
export const GUIDE_META: Record<SessionKey, string[]> = {
  seniors: ["Best light: last 90 minutes before sunset", "Plan: 2 spots, close together", "Outfits: 2–4"],
  couples: ["Best light: golden hour", "Plan: 1 meaningful spot + 1 nearby", "Bring: 2 looks"],
  anniversary: ["Best light: golden hour into blue hour", "Plan: 1 place that means something", "Then: dinner"],
  styled: ["Book: venue or permit first", "Plan: 1 hero spot + covered backup", "Light: soft, late afternoon"],
};

export type Guide = {
  slug: string;
  session: SessionKey;
  area: AreaKey;
  spots: GuideSpot[];
};

export const SESSION_ORDER: SessionKey[] = ["seniors", "couples", "anniversary", "styled"];
export const AREA_ORDER: AreaKey[] = ["seattle", "tacoma", "lakewood", "bellevue"];

export const GUIDES: Guide[] = SESSION_ORDER.flatMap((session) =>
  AREA_ORDER.map((area) => ({
    slug: `${SESSIONS[session].slugPart}-${area}`,
    session,
    area,
    spots: PICKS[session][area].map(toSpot),
  }))
);

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export function guideFaq(g: Guide): { q: string; a: string }[] {
  const s = SESSIONS[g.session];
  const a = AREAS[g.area];
  const top = g.spots.slice(0, 3).map((x) => x.name);
  const list = `${top.slice(0, -1).join(", ")} and ${top[top.length - 1]}`;
  return [
    {
      q: `Where are the best places for ${s.short.toLowerCase()} in ${a.name}?`,
      a: `Our favorites are ${list}. ${a.intro.split(". ")[0]}.`,
    },
    { q: `When is the best time of year for ${s.short.toLowerCase()} in ${a.name}?`, a: a.season },
    s.extraFaq(a.name),
    { q: "How much does a session cost?", a: s.priceAnswer },
  ];
}
