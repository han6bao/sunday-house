/**
 * Service landing pages — one indexable page per service so each can rank
 * for its own searches ("Tacoma engagement photographer", "Seattle senior
 * photos", …). Copy is written per service; avoid duplicating it elsewhere.
 * Starting prices are listed in FAQs; full collections live in proposals.
 * Retired pages redirect via RETIRED_SERVICES.
 */

/** `need` = placeholder label shown until the real photo is added. */
export type ServicePhoto = { src: string; alt: string; need?: string; ratio?: string };
export type ServiceFaq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  group: "weddings" | "portraits";
  /** <title>, ~60 chars */
  title: string;
  /** meta description, ~150 chars */
  description: string;
  script: string;
  /** h1 — may include one *emphasized* phrase between asterisks */
  h1: string;
  intro: string[];
  highlights: { title: string; body: string }[];
  photos: ServicePhoto[];
  /** Optional row of photos shown at their natural shapes, equal height. */
  strip?: (ServicePhoto & { w: number; h: number })[];
  /** More rows of natural-shape photos. */
  strips?: (ServicePhoto & { w: number; h: number })[][];
  /** Extra full-screen slides for the phone deck. */
  deckSlides?: { kicker: string; title: string; body: string; img: ServicePhoto }[];
  /** Optional extra photo story on the page (e.g. maternity on the family page). */
  feature?: { eyebrow: string; title: string; body: string; tall: ServicePhoto; wide: ServicePhoto[] };
  faqs: ServiceFaq[];
  related: string[];
  inquire: string;
  serviceType: string;
};

export const SERVICES: Service[] = [
  /* ------------------------------------------------------------ Weddings */
  {
    slug: "engagement-photography",
    name: "Engagement + Couples",
    group: "weddings",
    title: "Engagement + Couples Photographer, Seattle + Tacoma | Sunday House",
    description:
      "Engagement, couples and anniversary photos in Seattle, Tacoma and around Puget Sound — beaches, city rooftops, gardens and golden-hour fields, with cinematic editing.",
    script: "Before the aisle.",
    h1: "Engagement and couples photos that feel *like the two of you*.",
    intro: [
      "Your engagement session is the first time we photograph you together — and usually the moment couples realize they're not awkward on camera after all. We keep it relaxed: a walk, a few prompts, a lot of laughing, and light that does most of the work.",
      "We photograph engagements across Seattle, Tacoma and the whole Puget Sound — from Point Defiance and Ruston Way to Kerry Park, Alki Beach and the Eastside. Not sure where? Our location archive has dozens of places sorted by city and feeling.",
      "Not engaged? You don't need a ring to deserve beautiful photographs together. Anniversaries, a new home, or simply this season of your life — couples sessions are for keeping who you are right now.",
    ],
    highlights: [
      { title: "A place that means something", body: "Where you met, your neighborhood, your favorite beach — or somewhere new from our archive of Puget Sound locations." },
      { title: "Golden hour, planned", body: "We time the session around the light, the tide and the season, so the photographs glow instead of squint." },
      { title: "Practice for the wedding day", body: "You'll learn how we work and how you photograph best, so the wedding day feels easy and familiar." },
    ],
    photos: [
      { src: "/assets/stills/couple-nose-2.jpg", alt: "A couple nose to nose, in black and white" },
      { src: "/assets/stills/couple-forehead-2.jpg", alt: "A man kissing his partner's forehead, in black and white" },
    ],
    faqs: [
      { q: "How much is an engagement or couples session?", a: "Couples sessions begin at $375 for an hour at one location. Engagement sessions are $450 for ninety minutes and two looks, and one is included with The Story and The Full Day wedding collections." },
      { q: "When should we schedule engagement photos?", a: "Most couples shoot six to nine months before the wedding, which leaves time to use the photos for save-the-dates and a wedding website. Spring and early fall bring the softest light around Seattle and Tacoma." },
      { q: "Where are the best places for engagement photos near Tacoma?", a: "Point Defiance, Ruston Way and the Tacoma waterfront are favorites, along with gardens and quiet beaches around the South Sound." },
      { q: "What should we wear for engagement photos?", a: "Two outfits that feel like you: one a little dressier, one relaxed. Coordinate colors instead of matching, and skip big logos. Once you book, we send a full styling guide." },
      { q: "Can we bring our dog?", a: "Please do. We'll plan a little time with them and a little time without." },
      { q: "What if it rains?", a: "This is the Pacific Northwest, so we always have a plan: a covered spot, a cozy interior, or a new date if you'd rather wait for sun. Overcast light is beautiful for portraits." },
    ],
    related: ["elopement-photography", "tacoma-wedding-photographer", "seattle-wedding-photographer"],
    inquire: "couples",
    serviceType: "Engagement photography",
  },
  {
    slug: "elopement-photography",
    name: "Elopement Photography",
    group: "weddings",
    title: "Washington Elopement Photographer | Sunday House",
    description:
      "Elopement and intimate wedding photography in Washington — Seattle, Tacoma, the coast and the mountains — planned around the light, the place and the two of you.",
    script: "Just the two of you.",
    h1: "Elopements and *intimate* weddings in Washington.",
    intro: [
      "An elopement is still a wedding — it just leaves out everything that doesn't matter to you. Vows on a quiet hill, a courthouse morning and a long lunch, a handful of family on a beach at sunset: we photograph it all with the same care as a two-hundred-guest celebration.",
      "Based in Tacoma, we photograph elopements across Washington — city rooftops in Seattle, South Sound waterfronts, gardens, forests and anywhere the two of you want to say it.",
    ],
    highlights: [
      { title: "Help choosing the place", body: "We'll suggest locations that fit your season, your guests and the feeling you want — and the times of day they look their best." },
      { title: "A day built around light", body: "Small days are flexible, so we can plan the vows for the most beautiful hour instead of the most convenient one." },
      { title: "Photography and film", body: "Add a short film and you'll keep your vows in your own voices — the part of an elopement couples treasure most." },
    ],
    photos: [
      { src: "/assets/stills/wed-dance.jpg", alt: "Newlyweds dancing in a misty golden field" },
      { src: "/assets/stills/wed-veil.jpg", alt: "Bride and groom forehead to forehead beneath her veil" },
    ],
    faqs: [
      { q: "How much does elopement photography cost?", a: "Intimate weddings and elopements begin at $1,800 for up to three hours at one location. Extra hours, a second location and film can all be added." },
      { q: "How far ahead should we book an elopement photographer?", a: "Three to six months is comfortable, but elopements are flexible — weekdays and off-season dates are often open on shorter notice. Ask about your date." },
      { q: "Where can we elope near Seattle or Tacoma?", a: "Waterfront parks, gardens, city viewpoints and private venues all work, and some public spaces need a permit for ceremonies. We'll help you shortlist places that fit your guest count and season." },
      { q: "Can family come to an elopement?", a: "Of course. Many elopements include a few close family members or friends — we'll plan time for portraits with them too." },
      { q: "Do you photograph courthouse weddings?", a: "Yes. A courthouse ceremony followed by portraits somewhere beautiful is one of our favorite small-wedding days." },
    ],
    related: ["engagement-photography", "seattle-wedding-photographer", "tacoma-wedding-photographer"],
    inquire: "weddings",
    serviceType: "Elopement photography",
  },

  /* ------------------------------------------------------------ Cities */
  {
    slug: "seattle-wedding-photographer",
    name: "Seattle Wedding Photographer",
    group: "weddings",
    title: "Seattle Wedding Photographer + Videographer | Sunday House",
    description:
      "Cinematic wedding photography and film in Seattle — from city rooftops and Kerry Park to waterfront venues, gardens and the Eastside. Calm, honest and film-like.",
    script: "Seattle, in every season.",
    h1: "A Seattle wedding photographer for *the way it felt*.",
    intro: [
      "Seattle weddings have their own rhythm: long golden summer evenings, moody fall afternoons, rooms that glow when the rain rolls in. We plan your photography around all of it — the light, the season and the places that make this city feel like home.",
      "We photograph weddings across Seattle and the Eastside — downtown hotels and historic rooms, waterfront venues, garden ceremonies, and portraits at viewpoints like Kerry Park and Alki Beach. Photography and film come from one team, so the day reads as one story.",
    ],
    highlights: [
      { title: "Know the light", body: "We time portraits around Seattle's sunsets and plan a rain-friendly backup for every outdoor moment." },
      { title: "Know the places", body: "Our location archive covers dozens of Seattle spots — viewpoints, beaches, gardens and city interiors." },
      { title: "One team, whole day", body: "Wedding photography and film together, from getting ready to the last dance." },
    ],
    photos: [
      { src: "/assets/stills/wed-veil.jpg", alt: "Bride and groom forehead to forehead beneath her veil in golden light" },
      { src: "/assets/stills/wed-forehead-2.jpg", alt: "A groom kissing his bride's forehead, in black and white" },
    ],
    faqs: [
      { q: "How much does a wedding photographer cost?", a: "Wedding collections begin at $3,800 for six hours. Most of our couples invest between $4,500 and $6,500, and photo + film collections begin at $5,800." },
      { q: "Do you photograph two-day and cultural weddings?", a: "Yes. Tea ceremonies, nikah and walima, mehndi and sangeet, a ceremony one day and the reception the next — a second day of up to four hours can be added to any collection for $1,200." },
      { q: "How far ahead should we book a Seattle wedding photographer?", a: "Nine to twelve months is ideal for summer weekends, which book first. Weekday, winter and spring dates often have more availability — ask about yours." },
      { q: "What are good photo spots for Seattle weddings?", a: "Kerry Park for the skyline, Alki Beach and Golden Gardens for the water, and the city's historic buildings and gardens for something quieter. We'll suggest spots near your venue." },
      { q: "What happens if it rains on our Seattle wedding day?", a: "We plan for it. Covered spots, venue interiors and clear umbrellas all photograph beautifully, and overcast skies give soft, flattering light." },
      { q: "Do you also photograph weddings outside Seattle?", a: "Yes — we're based in Tacoma and photograph weddings across Puget Sound and the Pacific Northwest." },
    ],
    related: ["tacoma-wedding-photographer", "engagement-photography", "elopement-photography"],
    inquire: "weddings",
    serviceType: "Wedding photography",
  },
  {
    slug: "tacoma-wedding-photographer",
    name: "Tacoma Wedding Photographer",
    group: "weddings",
    title: "Tacoma Wedding Photographer + Videographer | Sunday House",
    description:
      "Tacoma-based wedding photography and film for the South Sound — Point Defiance, Ruston Way, Gig Harbor, Puyallup and beyond. Cinematic, calm and film-like.",
    script: "Home, for us.",
    h1: "Tacoma wedding photography, *from Tacoma*.",
    intro: [
      "Tacoma is home for Sunday House, and the South Sound is where we know every shortcut and every patch of good light. From Point Defiance's rose garden to the Ruston Way waterfront, Gig Harbor to Puyallup, we photograph weddings that feel like this part of Washington.",
      "We'll help you plan a timeline around the light and the water, find portrait spots near your venue, and bring photography and film together so the whole day comes back to you as one story.",
    ],
    highlights: [
      { title: "Local knowledge", body: "We know the South Sound's venues, parks and waterfronts — and where the light falls at every hour." },
      { title: "Calm on the day", body: "No shouting across the lawn. We direct gently and stay out of the way of the moments that matter." },
      { title: "Photo + film together", body: "One team for photographs and film, so the style, the timing and the story all match." },
    ],
    photos: [
      { src: "/assets/stills/wed-forehead-2.jpg", alt: "A groom kissing his bride's forehead, in black and white" },
      { src: "/assets/stills/wed-hold-3.jpg", alt: "A groom leaning down to take his bride's hand, shot from below" },
    ],
    faqs: [
      { q: "How much is a Tacoma wedding photographer?", a: "Wedding collections begin at $3,800 for six hours. Most of our couples invest between $4,500 and $6,500, and photo + film collections begin at $5,800." },
      { q: "Do you photograph two-day and cultural weddings?", a: "Yes. Tea ceremonies, nikah and walima, mehndi and sangeet, a ceremony one day and the reception the next — a second day of up to four hours can be added to any collection for $1,200." },
      { q: "Where are the best wedding photo spots in Tacoma?", a: "Point Defiance Park and its rose garden, the Ruston Way waterfront, Wright Park and the Stadium District are all favorites." },
      { q: "Do you photograph weddings in Gig Harbor and Puyallup?", a: "Yes. We photograph weddings throughout the South Sound, including Gig Harbor, Puyallup, Lakewood, University Place and Federal Way." },
      { q: "Can we meet in person before booking?", a: "Absolutely — we're local, so coffee in Tacoma or a walk through your venue is easy to arrange." },
      { q: "Do you offer wedding videography in Tacoma?", a: "Yes. Wedding film is made alongside your photography by trusted filmmakers working with the Sunday House team." },
    ],
    related: ["seattle-wedding-photographer", "elopement-photography", "engagement-photography"],
    inquire: "weddings",
    serviceType: "Wedding photography",
  },

  /* ------------------------------------------------------------ Portraits */
  {
    slug: "senior-portraits",
    name: "Senior Portraits",
    group: "portraits",
    title: "Senior Portraits in Seattle + Tacoma | Sunday House",
    description:
      "Senior and graduation portraits in Seattle and Tacoma that look like you — real locations, real outfits and cinematic, film-like editing for the class of the year.",
    script: "This is your year.",
    h1: "Senior portraits that *look like you*.",
    intro: [
      "Senior photos should feel like the person you are right now — not a costume, not a template. Bring the outfits you actually love, the places you actually go, and maybe the friend who makes you laugh.",
      "We photograph seniors and graduates across Seattle, Tacoma and the South Sound, at parks, beaches, campuses and city spots.",
    ],
    highlights: [
      { title: "Your style, your places", body: "Plan the session around your favorite spots, your hobbies and the outfits that feel most like you." },
      { title: "Easy for parents", body: "Clear planning, a simple timeline and photographs you'll want on the wall and in the yearbook." },
      { title: "Graduates too", body: "College and graduate portraits with caps, gowns and campus favorites." },
    ],
    photos: [
      { src: "/assets/stills/senior-3.jpg", alt: "Senior smiling, seated in tall golden grass" },
      { src: "/assets/stills/senior-1.jpg", alt: "Senior in a sheer blue cardigan, hands on hips in a golden field" },
      { src: "/assets/stills/senior-2.jpg", alt: "Senior with hands to her heart, looking into the summer light" },
      { src: "/assets/stills/senior-4.jpg", alt: "Senior in a black jumpsuit seated on a stone in the park" },
      { src: "/assets/stills/senior-5.jpg", alt: "Senior laughing with her arms raised in the sun" },
      { src: "/assets/stills/senior-6.jpg", alt: "Senior in a white blouse, glancing over her shoulder in a sunlit meadow" },
      { src: "/assets/stills/senior-7.jpg", alt: "Senior crouching on a forest path in boots, smiling" },
      { src: "/assets/stills/senior-13.jpg", alt: "Senior in a shearling-collar jacket smiling in the woods" },
      { src: "/assets/stills/senior-9.jpg", alt: "Senior in a rust sweater and jeans standing among tall forest trees" },
      { src: "/assets/stills/senior-16.jpg", alt: "Senior laughing in a yellow shirt and sun pendant" },
      { src: "/assets/stills/senior-11.jpg", alt: "Senior in glasses and a rust sweater seated in the forest, smiling" },
      { src: "/assets/stills/senior-18.jpg", alt: "Senior leaning against a white column in a leather jacket" },
      { src: "/assets/stills/senior-21.jpg", alt: "Senior in glasses leaning against a mossy tree" },
      { src: "/assets/stills/senior-12.jpg", alt: "Senior in a leather jacket seated on wooden stairs" },
      { src: "/assets/stills/senior-10.jpg", alt: "Senior in a rust sweater leaning back in a mossy forest, eyes on the light" },
      { src: "/assets/stills/senior-17.jpg", alt: "Senior smiling in a leather jacket in front of white columns" },
      { src: "/assets/stills/senior-20.jpg", alt: "Close portrait of a senior in glasses and a black top among evergreens" },
      { src: "/assets/stills/senior-15.jpg", alt: "Senior seated on a log in the forest, looking off to the side" },
      { src: "/assets/stills/senior-19.jpg", alt: "Senior with hands behind their head beneath a white pergola" },
    ],
    faqs: [
      { q: "How much are senior portraits?", a: "$375 for one hour and two outfits, or $575 for two hours with three to four outfits and two locations." },
      { q: "When should seniors book their photos?", a: "Many seniors book in spring or summer for fall sessions, when the light and leaves are beautiful and yearbook deadlines are ahead. Ask early for the most choice." },
      { q: "Where are good senior photo spots in Tacoma and Seattle?", a: "Waterfronts, gardens, campuses and city streets all work, and our location archive lists dozens of spots around Tacoma and Seattle." },
      { q: "How many outfits can I bring?", a: "Bring a few you love — we'll plan the session so there's time for changes without rushing." },
      { q: "Can a friend or parent come along?", a: "Yes, and a friend often helps you relax and laugh on camera." },
    ],
    related: ["creative-portraits", "family-photography", "engagement-photography"],
    inquire: "seniors",
    serviceType: "Senior portrait photography",
  },
  {
    slug: "family-photography",
    name: "Family + Maternity",
    group: "portraits",
    title: "Family + Maternity Photographer, Seattle + Tacoma | Sunday House",
    description:
      "Family and maternity photography in Seattle and Tacoma — relaxed outdoor and at-home sessions for the people you love, from the bump to the grandparents.",
    script: "Every season, kept.",
    h1: "Maternity and family photos for *every season*.",
    intro: [
      "Family photographs get more precious every year. We keep sessions easy and unhurried — a walk, a game, some snuggling — so the photographs show how your family actually is, not how it lines up.",
      "We photograph families at home, in parks and on beaches across Seattle, Tacoma and Puget Sound, planned around naps, light and the season you want to remember.",
      "Expecting? Maternity sessions keep the waiting — outdoors in golden light or somewhere meaningful to you, unhurried and paced around how you feel.",
    ],
    highlights: [
      { title: "Paced around you", body: "Unhurried sessions that follow how you feel — rest when you need it, no rushing." },
      { title: "Everyone included", body: "Partners, little ones, grandparents and pets — big groups and small, with a plan for every combination." },
      { title: "Holiday-ready", body: "Book late summer or early fall and your photographs are ready for cards and gifts." },
    ],
    photos: [
      { src: "/assets/stills/family-stand.jpg", alt: "A family of five smiling together on a waterfront path lined with wild roses" },
      { src: "/assets/stills/family-log.jpg", alt: "A family laughing together on a driftwood log by the water", ratio: "3/2" },
    ],
    strip: [
      { src: "/assets/stills/family-run.jpg", alt: "A boy waving and running toward the camera while his family laughs behind him", w: 1365, h: 2048 },
      { src: "/assets/stills/family-mom-baby.jpg", alt: "A mother holding her smiling toddler by the water", w: 2048, h: 1638 },
      { src: "/assets/stills/family-toddler.jpg", alt: "A toddler with a sour candy peeking over a driftwood log by the water", w: 1638, h: 2048 },
    ],
    strips: [
      [{ src: "/assets/stills/family-garden.jpg", alt: "A family of five smiling together in a flowering summer garden", w: 2000, h: 1116 }],
      [
        { src: "/assets/stills/family-bench-sunset.jpg", alt: "A family of five on a bench watching the water at sunset", w: 1800, h: 1200 },
        { src: "/assets/stills/family-siblings-bench.jpg", alt: "Three siblings at a waterfront bench", w: 1440, h: 1800 },
      ],
      [
        { src: "/assets/stills/family-siblings-two.jpg", alt: "A toddler and his sister by the water", w: 1800, h: 1800 },
        { src: "/assets/stills/family-window.jpg", alt: "Three children peeking through a gap in a wall at the water", w: 1800, h: 1200 },
      ],
    ],
    deckSlides: [
      {
        kicker: "Every generation",
        title: "The people who make you, *you*.",
        body: "Mothers and daughters, siblings, grandparents — portraits of the bonds that shape a family.",
        img: { src: "/assets/stills/family-mother-daughter.jpg", alt: "A mother and daughter cheek to cheek, smiling against a golden backdrop" },
      },
      {
        kicker: "Newborn",
        title: "The first days, *kept*.",
        body: "Soft, simple portraits of your newest arrival, held by the people who love them most.",
        img: { src: "/assets/stills/newborn-mom.jpg", alt: "A mother cradling her sleeping newborn, wrapped in a cream knit" },
      },
    ],
    feature: {
      eyebrow: "Maternity",
      title: "The waiting, *kept*.",
      body: "Unhurried sessions outdoors in soft light, paced around how you feel — for the two of you, and the one on the way.",
      tall: { src: "/assets/stills/maternity-ultrasound-2.jpg", alt: "An expecting couple laughing together, holding an ultrasound photo in a meadow of wildflowers" },
      wide: [
        { src: "/assets/stills/maternity-deer.jpg", alt: "An expecting mother in a meadow of wildflowers with deer grazing behind her" },
        { src: "/assets/stills/maternity-couple-2.jpg", alt: "An expecting couple holding her bump together in a flowering meadow" },
      ],
    },
    faqs: [
      { q: "How much is a family or maternity session?", a: "Family sessions are $375 for an hour with up to six people, and maternity sessions are the same. Larger groups are quoted to fit." },
      { q: "When should we book family photos for the holidays?", a: "Late summer or early fall. Sessions fill quickly before the holidays, and earlier dates leave time to order cards and prints." },
      { q: "What if my kids won't cooperate?", a: "They don't have to. We keep it playful and pace the session around them — the best family photos are rarely the posed ones." },
      { q: "What should we wear?", a: "Coordinating colors rather than matching outfits, comfortable shoes and layers for Pacific Northwest weather. We send a styling guide when you book." },
      { q: "When should maternity photos be taken?", a: "Usually between 28 and 34 weeks, when you're comfortable and your bump is showing. Book a few months ahead to choose your date and location." },
      { q: "Can you photograph extended family?", a: "Yes. Tell us who's coming and we'll plan the groupings ahead of time." },
    ],
    related: ["senior-portraits", "engagement-photography", "creative-portraits"],
    inquire: "families",
    serviceType: "Family photography",
  },
  {
    slug: "creative-portraits",
    name: "Creative Portraits",
    group: "portraits",
    title: "Creative + Editorial Portrait Photographer, Seattle | Sunday House",
    description:
      "Cinematic, conceptual portrait sessions in Seattle and Tacoma — concept, styling, location and light designed with you, like a still from your own film.",
    script: "A still from your own film.",
    h1: "Creative portraits, *built like a film*.",
    intro: [
      "Creative sessions start with an idea — a mood, a memory, a character, a season — and build the whole picture around it: styling, props, location and light. The result feels like a still from a film you starred in.",
      "We design creative and editorial portrait sessions across Seattle, Tacoma and the Pacific Northwest — bold color, styled looks, city walls and moody interiors.",
    ],
    highlights: [
      { title: "Concept + direction", body: "We develop the idea with you and plan every frame before the day." },
      { title: "Styling + set", body: "Wardrobe ideas, props and location scouting to make the concept real." },
      { title: "Cinematic light", body: "Natural light shaped with care, edited in our film-like style." },
    ],
    photos: [
      { src: "/assets/stills/creative-2.jpg", alt: "Styled portrait in a patchwork suede dress and newsboy cap against a red wall" },
      { src: "/assets/stills/creative-1.jpg", alt: "Silhouette in a mirror against a teal patterned screen" },
    ],
    faqs: [
      { q: "How much is a creative session?", a: "Creative sessions begin at $550, including concept planning, styling direction and two hours of shooting. Bigger concepts are quoted to fit." },
      { q: "What is a creative portrait session?", a: "A portrait session designed around a concept — a mood, a story or a look — with styling, location and lighting planned ahead, rather than a classic posed portrait." },
      { q: "Do I need to have the idea already?", a: "No. Bring a feeling, a song, a few pictures you love, and we'll develop the concept together." },
      { q: "Are creative sessions good for creators and brands?", a: "Yes. They work beautifully for personal branding, musicians, artists and anyone who wants imagery with a point of view." },
      { q: "Where do creative sessions take place?", a: "Anywhere the concept needs: color-washed city walls, studios, moody interiors, gardens or fields around Puget Sound." },
    ],
    related: ["senior-portraits", "engagement-photography", "family-photography"],
    inquire: "creative",
    serviceType: "Creative portrait photography",
  },
];

/** Services that already have their own dedicated page elsewhere. */
export const OTHER_SERVICE_PAGES = [
  { name: "Wedding Photography", to: "/weddings", note: "The whole day, from first look to last dance.", photo: { src: "/assets/gallery/bride-portrait.png", alt: "Bridal portrait in soft light" } },
  { name: "Wedding Film", to: "/film", note: "Your vows and toasts, in your own voices.", photo: { src: "/assets/film-posters/film-1.jpg", alt: "Wedding film still of a first dance" } },
  { name: "Wedding Content Creation", to: "/content-creation", note: "Same-day reels and Stories from your wedding.", photo: { src: "/assets/content-work/Dc-FW05tqrF.jpg", alt: "Wedding guests dancing in bright traditional clothes" } },
];

/** Pages folded into others — old links redirect here (301). */
export const RETIRED_SERVICES: Record<string, string> = {
  "cultural-wedding-photography": "/weddings#cultural",
  "bridal-portraits": "/weddings",
  "couples-photography": "/services/engagement-photography",
  "maternity-newborn-photography": "/services/family-photography",
  "event-photography": "/photography",
};

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
