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
  /** Optional small labels above each photo row: [strip, ...strips]. */
  stripLabels?: string[];
  /** Optional short notes under each row label. */
  stripNotes?: string[];
  /** More rows of natural-shape photos. */
  strips?: (ServicePhoto & { w: number; h: number })[][];
  /** Optional pointer to a sister page, shown under the photo rows. */
  crossLink?: { eyebrow: string; body: string; slug: string; label: string };
  /** Extra full-screen slides for the phone deck. */
  deckSlides?: { kicker: string; title: string; body: string; img: ServicePhoto & { position?: string } }[];
  /** Optional extra photo story on the page (e.g. maternity on the family page). */
  feature?: { eyebrow: string; title: string; body: string; tall: ServicePhoto; wide: ServicePhoto[]; film?: { src: string; poster: string; label: string } };
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
      { title: "Calm on the day", body: "Gentle direction when you want it, and plenty of room to just be together when you don't." },
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
      "Our signature look is cinematic and film-like, often with an editorial edge. Prefer something classic? We also deliver clean, timeless edits that still feel soft and a little magazine.",
    ],
    highlights: [
      { title: "Your style, your places", body: "Plan the session around your favorite spots, your hobbies and the outfits that feel most like you." },
      { title: "Bring your people", body: "Packages can be curated to include your whole family or your best friends. There's also a complimentary package, so ask us for the details." },
      { title: "Classic or editorial", body: "Cinematic and film-like by default, or clean and classic if that's more you. Tell us the feel and we'll edit to match." },
    ],
    photos: [
      { src: "/assets/stills/senior-3.jpg", alt: "Senior smiling, seated in tall golden grass" },
      { src: "/assets/stills/hs-loc-1.jpg", alt: "Senior in a white blouse smiling among the trees" },
      { src: "/assets/stills/senior-1.jpg", alt: "Senior in a sheer blue cardigan, hands on hips in a golden field" },
      { src: "/assets/stills/senior-4.jpg", alt: "Senior in a black jumpsuit seated on a stone in the park" },
      { src: "/assets/stills/senior-5.jpg", alt: "Senior laughing with her arms raised in the sun" },
      { src: "/assets/stills/senior-13.jpg", alt: "Senior in a shearling-collar jacket smiling in the woods" },
      { src: "/assets/stills/senior-9.jpg", alt: "Senior in a rust sweater and jeans standing among tall forest trees" },
      { src: "/assets/stills/hs-loc-2.jpg", alt: "Senior in a white blouse seated in tall green grass" },
      { src: "/assets/stills/hs-loc-3.jpg", alt: "Close senior portrait in a white blouse against green grass" },
      { src: "/assets/stills/senior-2.jpg", alt: "Senior with hands to her heart, looking into the summer light" },
      { src: "/assets/stills/senior-6.jpg", alt: "Senior in a white blouse, glancing over her shoulder in a sunlit meadow" },
      { src: "/assets/stills/senior-7.jpg", alt: "Senior crouching on a forest path in boots, smiling" },
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
      { q: "Can a friend or parent come along?", a: "Yes, and a friend often helps you relax and laugh on camera. We can also curate a package that includes your whole family or your best friends, and there's a complimentary package too. Ask us for more information." },
    ],
    related: ["milestones-events", "headshots", "family-photography"],
    inquire: "seniors",
    serviceType: "Senior portrait photography",
  },
  {
    slug: "family-photography",
    name: "Family + Maternity",
    group: "portraits",
    title: "Family + Maternity Photographer, Seattle + Tacoma | Sunday House",
    description:
      "Family, maternity and newborn photography in Seattle and Tacoma — outdoor, at-home and studio sessions for the people you love, from the bump to the grandparents.",
    script: "Every season, kept.",
    h1: "Maternity and family photos for *every season*.",
    intro: [
      "Family photographs get more precious every year. We keep sessions easy and unhurried — a walk, a game, some snuggling — so the photographs show how your family actually is, not how it lines up.",
      "We photograph families outdoors, at home or in the studio across Seattle, Tacoma and Puget Sound — planned around naps, light and the season you want to remember. Newborn and new-family sessions are included too.",
      "Expecting? Maternity sessions keep the waiting — outdoors in golden light or somewhere meaningful to you, unhurried and paced around how you feel.",
    ],
    highlights: [
      { title: "Great with little ones", body: "I used to teach at an elementary school, working with the younger kids, so toddlers and wiggly little ones don't faze me. I'm patient, I keep it fun, and there's always plenty of time." },
      { title: "Everyone included", body: "Partners, little ones, grandparents and pets — big groups and small, with a plan for every combination." },
      { title: "Studio options", body: "Prefer indoors? Studio sessions are available for families, maternity and newborns — soft light, any season, any weather." },
    ],
    photos: [
      { src: "/assets/stills/family-stand.jpg", alt: "A family of five smiling together on a waterfront path lined with wild roses" },
      { src: "/assets/stills/family-log.jpg", alt: "A family laughing together on a driftwood log by the water", ratio: "3/2" },
    ],
    strip: [
      { src: "/assets/stills/family-run.jpg", alt: "A boy waving and running toward the camera while his family laughs behind him", w: 1365, h: 2048 },
      { src: "/assets/stills/family-mom-baby.jpg", alt: "A mother holding her smiling toddler by the water", w: 2048, h: 1638 },
      { src: "/assets/stills/family-toddler-2.jpg", alt: "A toddler with a sour candy peeking over a driftwood log by the water", w: 1638, h: 2048 },
      { src: "/assets/stills/milestone-3.jpg", alt: "A little girl in a tiara and embroidered dress holding a number three", w: 1228, h: 1536 },
    ],
    strips: [
      [
        { src: "/assets/stills/family-bench-sunset.jpg", alt: "A family of five on a bench watching the water at sunset", w: 1800, h: 1200 },
        { src: "/assets/stills/family-siblings-bench.jpg", alt: "Three siblings at a waterfront bench", w: 1440, h: 1800 },
      ],
      [
        { src: "/assets/stills/family-siblings-two.jpg", alt: "A toddler and his sister by the water", w: 1800, h: 1800 },
        { src: "/assets/stills/family-window-2.jpg", alt: "Three children peeking through a gap in a wall at the water", w: 1800, h: 1200 },
      ],
      [
        { src: "/assets/stills/studio-mom-1.jpg", alt: "A mother kissing her laughing toddler's cheek in the studio", w: 1200, h: 1800 },
        { src: "/assets/stills/studio-baby-1.jpg", alt: "A toddler in a pink dress perched on a wooden box in the studio", w: 1200, h: 1800 },
        { src: "/assets/stills/studio-mom-2.jpg", alt: "A mother and her toddler face to face by a sunlit window", w: 1200, h: 1800 },
      ],
    ],
    stripLabels: ["", "", "", "In the studio"],
    deckSlides: [
      {
        kicker: "Families",
        title: "Everyone, *together*.",
        body: "Relaxed portraits outdoors, planned around little ones and the light.",
        img: { src: "/assets/stills/family-garden.jpg", alt: "A family of five smiling together in a flowering summer garden", position: "50% center" },
      },
      {
        kicker: "Every generation",
        title: "The people who make you, *you*.",
        body: "Mothers and daughters, siblings, grandparents — portraits of the bonds that shape a family.",
        img: { src: "/assets/stills/family-mother-daughter.jpg", alt: "A mother and daughter cheek to cheek, smiling against a golden backdrop" },
      },
      {
        kicker: "Newborn",
        title: "Welcome home, *little one*.",
        body: "Unhurried sessions at home or in the studio, paced around feeds, naps and cuddles.",
        img: { src: "/assets/stills/newborn-parents-2.jpg", alt: "New parents smiling at each other while holding their sleeping newborn", position: "60% center" },
      },
      {
        kicker: "Newborn",
        title: "The first days, *kept*.",
        body: "Soft, simple portraits of your newest arrival, held by the people who love them most.",
        img: { src: "/assets/stills/newborn-mom-2.jpg", alt: "A mother cradling her sleeping newborn, wrapped in a cream knit" },
      },
    ],
    feature: {
      eyebrow: "Maternity",
      film: { src: "/assets/motion/maternity-film.mp4", poster: "/assets/motion/maternity-film.jpg", label: "Maternity film with voiceover: an expecting couple in a meadow with deer" },
      title: "The waiting, *kept*.",
      body: "Unhurried sessions outdoors in soft light, paced around how you feel — for the two of you, and the one on the way.",
      tall: { src: "/assets/stills/maternity-ultrasound-3.jpg", alt: "An expecting couple laughing together, holding an ultrasound photo in a meadow of wildflowers" },
      wide: [
        { src: "/assets/stills/maternity-deer.jpg", alt: "An expecting mother in a meadow of wildflowers with deer grazing behind her" },
        { src: "/assets/stills/maternity-couple-3.jpg", alt: "An expecting couple holding her bump together in a flowering meadow" },
      ],
    },
    faqs: [
      { q: "How much is a family or maternity session?", a: "Family sessions are $375 for an hour with up to six people, and maternity sessions are the same. Larger groups are quoted to fit, and studio sessions are available for families, maternity and newborns." },
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
    slug: "milestones-events",
    name: "Milestones + Events",
    group: "portraits",
    title: "Milestone + Event Photographer, Seattle + Tacoma | Sunday House",
    description:
      "Milestone and event photography in Seattle and Tacoma: birthdays, quinceañeras, graduations, showers, parties and community events, with cinematic, film-like editing.",
    script: "A big day, kept.",
    h1: "Milestones and events, *beautifully kept*.",
    intro: [
      "Some days only happen once. Birthdays big and small, quinceañeras and sweet sixteens, graduation parties, showers, anniversaries, festival court portraits and community events.",
      "I know how big these days are, for the person being celebrated and for the whole family. I'll help you plan the details and get every shot you have in mind written down, so nothing important gets missed.",
      "I used to teach at an elementary school with younger kids, so little ones in tiaras and teens who feel shy on camera are both in good hands. I'm patient, I keep it fun, and we take the time it needs.",
    ],
    highlights: [
      { title: "Planned with you", body: "We talk through the dress, the court, the family and the must-have shots, and make a simple plan for the day." },
      { title: "Portraits + the event", body: "A portrait session before the day, coverage of the event itself, or both." },
      { title: "Cinematic or classic", body: "A soft, film-like look by default, or clean and classic if that suits the day better." },
    ],
    photos: [
      { src: "/assets/stills/quince-1.jpg", alt: "A quinceañera in a floral tulle gown, hand to her cheek" },
      { src: "/assets/stills/quince-2.jpg", alt: "A smiling quinceañera with a yellow flower in her hair" },
    ],
    strip: [
      { src: "/assets/stills/quince-5.jpg", alt: "A quinceañera holding pink flowers beneath the trees", w: 1200, h: 1800 },
      { src: "/assets/stills/creative-quince-back.jpg", alt: "A quinceañera from behind, pink flowers tucked in her long curls", w: 1200, h: 1800 },
      { src: "/assets/stills/milestone-3.jpg", alt: "A little girl in a tiara and embroidered dress holding a number three", w: 1228, h: 1536 },
    ],
    strips: [
      [
        { src: "/assets/stills/daffodil-wide.jpg", alt: "A Daffodil Festival princess on a bench among tulips with Mount Rainier behind her", w: 1800, h: 1440 },
        { src: "/assets/stills/daffodil-1.jpg", alt: "A Daffodil Festival princess in a crown holding a scepter and yellow bouquet", w: 1200, h: 1800 },
      ],
    ],
    stripLabels: ["Birthdays + celebrations", "Court + festival portraits"],
    faqs: [
      { q: "What kinds of events do you photograph?", a: "Birthdays, quinceañeras, graduation parties, showers, anniversaries and community events. Book a portrait session before the day, coverage of the event itself, or both. Tell us what you're planning and we'll put together a package." },
      { q: "How far ahead should we book?", a: "As soon as you have a date. Spring and summer weekends fill up early." },
      { q: "Can family and friends be in the photos?", a: "Of course. Family, friends and everyone who shows up for the day are welcome, and we'll plan time for the groups you want." },
      { q: "Is my little one too young?", a: "Not at all. I used to teach at an elementary school with younger kids, so I'm patient and know how to keep little ones comfortable and smiling." },
    ],
    related: ["senior-portraits", "family-photography", "creative-portraits"],
    inquire: "events",
    serviceType: "Milestone and event photography",
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
    strip: [
      { src: "/assets/stills/creative-angel-1.jpg", alt: "An angel with feathered wings, eyes closed in dappled forest light", w: 1200, h: 1800 },
      { src: "/assets/stills/creative-floral.jpg", alt: "A golden-hour portrait in a floral slip dress under a pergola", w: 1200, h: 1800 },
      { src: "/assets/stills/creative-3.jpg", alt: "Styled portrait leaning against a teal wall in a color-block dress", w: 1066, h: 1600 },
    ],
    strips: [
      [
        { src: "/assets/stills/creative-angel-2.jpg", alt: "An angel in a pink lace gown perched on a mossy brick wall", w: 1800, h: 1200 },
      ],
    ],
    faqs: [
      { q: "How much is a creative session?", a: "Creative sessions begin at $550, including concept planning, styling direction and two hours of shooting. Bigger concepts are quoted to fit." },
      { q: "What is a creative portrait session?", a: "A portrait session designed around a concept — a mood, a story or a look — with styling, location and lighting planned ahead, rather than a classic posed portrait." },
      { q: "Do I need to have the idea already?", a: "No. Bring a feeling, a song, a few pictures you love, and we'll develop the concept together." },
      { q: "Are creative sessions good for creators and brands?", a: "Yes. They work beautifully for personal branding, musicians, artists and anyone who wants imagery with a point of view." },
      { q: "Where do creative sessions take place?", a: "Anywhere the concept needs: color-washed city walls, studios, moody interiors, gardens or fields around Puget Sound." },
    ],
    related: ["headshots", "senior-portraits", "family-photography"],
    inquire: "creative",
    serviceType: "Creative portrait photography",
  },
  {
    slug: "headshots",
    name: "Headshots",
    group: "portraits",
    title: "Professional Headshots, Seattle + Tacoma | Sunday House",
    description:
      "Professional headshots and personal branding portraits in Seattle and Tacoma, for LinkedIn, websites and teams, in the studio or on location.",
    script: "Look like yourself, at your best.",
    h1: "Headshots that *feel like you*.",
    intro: [
      "A good headshot looks like you on your best day: relaxed, confident and unmistakably you. We guide every expression and pose, so you never have to wonder what to do with your hands.",
      "These are headshots for work: LinkedIn, your website, speaker bios, branding and whole teams, across Seattle and Tacoma. Clean and classic, with a little softness and creativity so they never feel stiff.",
      "Actor, model or creative? We have a page just for that. Acting headshots, model portfolios and digitals are a little different, and we treat them that way.",
    ],
    highlights: [
      { title: "Guided, start to finish", body: "Gentle direction on posture, angles and expression, so every frame looks natural." },
      { title: "Studio or on location", body: "A clean backdrop in the studio, or natural light somewhere that suits your work." },
      { title: "Classic, not stiff", body: "Clean, timeless edits that still feel soft and a little magazine, made for wherever they'll live." },
    ],
    photos: [
      { src: "/assets/stills/hs-pro-2.jpg", alt: "A smiling professional headshot on a clean white background" },
      { src: "/assets/stills/hs-creative-1.jpg", alt: "A glowing branding portrait against soft pink fabric" },
    ],
    strip: [
      { src: "/assets/stills/hs-brand-black-2.jpg", alt: "A classic business headshot in black with a statement necklace among the trees", w: 1030, h: 1288 },
      { src: "/assets/stills/hs-brand-black.jpg", alt: "A smiling business portrait in black with a statement necklace, outdoors", w: 1030, h: 1288 },
      { src: "/assets/stills/hs-brand-roses.jpg", alt: "A smiling branding portrait in blush pink beside yellow roses", w: 1200, h: 1800 },
    ],
    strips: [
      [
        { src: "/assets/stills/hs-pro-1.jpg", alt: "A professional headshot in a black blazer on a white background", w: 1086, h: 1448 },
        { src: "/assets/stills/hs-pro-3.jpg", alt: "A warm, smiling business headshot on a white background", w: 1122, h: 1402 },
      ],
      [
        { src: "/assets/stills/hs-loc-3.jpg", alt: "A smiling headshot in a white blouse against tall green grass", w: 1440, h: 1800 },
        { src: "/assets/stills/senior-13.jpg", alt: "A smiling portrait in a shearling-collar jacket in the woods", w: 1066, h: 1600 },
        { src: "/assets/stills/senior-16.jpg", alt: "A laughing portrait in a yellow shirt", w: 1066, h: 1600 },
      ],
    ],
    stripLabels: ["Business + branding", "In the studio", "On location"],
    crossLink: {
      eyebrow: "For actors, models + creatives",
      body: "We shoot for creatives too. Acting headshots, model portfolios and agency digitals have their own page, with a little more room to play.",
      slug: "modeling-acting",
      label: "Modeling + Acting",
    },
    deckSlides: [
      { kicker: "Business + branding", title: "Classic, *never stiff*.", body: "Clean headshots for LinkedIn, your website and your whole team.", img: { src: "/assets/stills/hs-brand-black-2.jpg", alt: "A classic business headshot in black with a statement necklace among the trees" } },
      { kicker: "Actors, models + creatives", title: "A page of *its own*.", body: "Acting headshots, model portfolios and digitals live on our Modeling + Acting page.", img: { src: "/assets/stills/hs-editorial-1.jpg", alt: "An editorial headshot, hands framing her face against a warm studio backdrop" } },
    ],
    faqs: [
      { q: "Studio or on location?", a: "Either. The studio gives a clean, consistent look; on location adds natural light and a sense of place for branding." },
      { q: "What should I wear?", a: "Solid colors and clothes you feel good in. Bring a couple of options and we'll help you choose." },
      { q: "Do you do acting headshots or modeling digitals?", a: "Yes. Those live on our Modeling + Acting page, since they're shot a little differently from business headshots." },
      { q: "Do you photograph kids and teens?", a: "Yes, often. I used to teach at an elementary school with younger kids, so I'm patient and know how to keep little ones comfortable and engaged, whether it's a first headshot or a school portrait." },
      { q: "Can you do headshots for a whole team?", a: "Yes. Tell us how many people and where, and we'll plan a consistent look for everyone." },
    ],
    related: ["modeling-acting", "senior-portraits", "creative-portraits"],
    inquire: "headshots",
    serviceType: "Headshot photography",
  },
  {
    slug: "modeling-acting",
    name: "Modeling + Acting",
    group: "portraits",
    title: "Acting Headshots, Model Portfolios + Digitals, Seattle + Tacoma | Sunday House",
    description:
      "Acting headshots, model portfolios and agency digitals in Seattle and Tacoma, for actors, models and creatives, in the studio or on location.",
    script: "For actors, models + creatives.",
    h1: "Modeling and acting, *made for the work*.",
    intro: [
      "Actors, models and creatives need photographs that do a job. Casting directors and agencies want to see who you really are, and your portfolio should show what you can do.",
      "We shoot acting headshots, model portfolios and agency digitals across Seattle and Tacoma. Close to a standard headshot, but planned around castings, agencies and your book, with more room for character, styling and creativity.",
      "Our signature look is cinematic and film-like with an editorial edge, and we keep digitals clean and true, exactly the way agencies expect.",
    ],
    highlights: [
      { title: "Acting headshots", body: "Natural, castable frames with a few looks, so you have options for theatrical and commercial." },
      { title: "Model portfolios", body: "Editorial, on location or in the studio, styled to show your range." },
      { title: "Agency digitals", body: "Front, profile, three-quarter and full-length, lightly retouched so you look like you'll look when you walk in." },
    ],
    photos: [
      { src: "/assets/stills/hs-editorial-1.jpg", alt: "An editorial headshot, hands framing her face against a warm studio backdrop" },
      { src: "/assets/stills/hs-digital-1.jpg", alt: "Modeling digital: a close portrait against a white brick wall" },
    ],
    strip: [
      { src: "/assets/stills/hs-editorial-2.jpg", alt: "An editorial studio portrait looking upward, hands to her face", w: 1200, h: 1800 },
      { src: "/assets/stills/hs-editorial-bw.jpg", alt: "A black and white editorial headshot with hands framing the face", w: 1200, h: 1800 },
      { src: "/assets/stills/senior-20.jpg", alt: "A close portrait in glasses and a black top among evergreens", w: 1066, h: 1600 },
    ],
    strips: [
      [
        { src: "/assets/stills/hs-port-stairs.jpg", alt: "A close portrait with long curls against a mint stairwell", w: 1200, h: 1800 },
        { src: "/assets/stills/hs-port-curls.jpg", alt: "A sunlit portrait with golden curls in a red lace dress", w: 1200, h: 1800 },
        { src: "/assets/stills/hs-port-flowers.jpg", alt: "A soft portrait resting her chin on her hand behind pink flowers", w: 1200, h: 1800 },
        { src: "/assets/stills/hs-port-window.jpg", alt: "Seated on a window ledge in a leather jacket", w: 1200, h: 1800 },
      ],
      [
        { src: "/assets/stills/hs-mandy-2.jpg", alt: "Mandy in a green pinstripe top against an orange backdrop, hand at her neck", w: 953, h: 1072 },
        { src: "/assets/stills/hs-mandy-1.jpg", alt: "Mandy smiling with a hand in her hair against an orange backdrop", w: 856, h: 1072 },
        { src: "/assets/stills/hs-mandy-3.jpg", alt: "Mandy laughing, seated against an orange backdrop", w: 953, h: 1072 },
      ],
      [
        { src: "/assets/stills/hs-digital-5.jpg", alt: "Digital: straight-on portrait against white brick", w: 1067, h: 1600 },
        { src: "/assets/stills/hs-digital-2.jpg", alt: "Digital: profile against white brick", w: 1067, h: 1600 },
        { src: "/assets/stills/dg-5841.jpg", alt: "Digital: full length against white brick", w: 1067, h: 1600 },
        { src: "/assets/stills/dg-5844.jpg", alt: "Digital: from behind, reflected in a studio mirror", w: 1067, h: 1600 },
      ],
      [
        { src: "/assets/stills/hs-digital-4.jpg", alt: "Styled frame in a denim jacket", w: 1067, h: 1600 },
        { src: "/assets/stills/dg-5853.jpg", alt: "Styled frame on a velvet chaise", w: 1067, h: 1600 },
        { src: "/assets/stills/dg-5858.jpg", alt: "Styled frame reclining on a velvet chaise", w: 1280, h: 1600 },
        { src: "/assets/stills/hs-digital-7.jpg", alt: "Styled frame seated on the studio floor", w: 1067, h: 1600 },
      ],
    ],
    stripLabels: ["Acting + editorial headshots", "Model portfolio", "With Mandy", "Agency digitals", "Digitals, a little styled"],
    stripNotes: ["", "", "Mandy's a longtime friend. These were spur of the moment and just for fun, and we styled the whole look ourselves.", "The clean set agencies ask for: close-up, profile and full length."],
    crossLink: {
      eyebrow: "Need something for work?",
      body: "For LinkedIn, your website or your whole team, our standard headshots are clean and classic, with a little softness.",
      slug: "headshots",
      label: "Headshots",
    },
    deckSlides: [
      { kicker: "Model portfolio", title: "Editorial, *on location*.", body: "Natural light and real places, styled to show your range.", img: { src: "/assets/stills/hs-port-stairs.jpg", alt: "A close portrait with long curls against a mint stairwell" } },
      { kicker: "With Mandy", title: "Just for *fun*.", body: "A longtime friend, a spur-of-the-moment shoot and a look we styled ourselves.", img: { src: "/assets/stills/hs-mandy-1.jpg", alt: "Mandy smiling with a hand in her hair against an orange backdrop" } },
      { kicker: "Agency digitals", title: "Simple, honest, *you*.", body: "Clean light, close-ups, profiles and full-length looks for agencies and castings.", img: { src: "/assets/stills/hs-digital-5.jpg", alt: "Digital: straight-on portrait against white brick" } },
    ],
    faqs: [
      { q: "What's the difference from a regular headshot?", a: "Acting and modeling photos are planned around castings and agencies: more looks, more character, and digitals kept clean and true. Business headshots are about looking polished and approachable for work." },
      { q: "What are modeling digitals?", a: "Simple, natural photographs agencies and casting directors ask for: clean light, minimal makeup and fitted clothes, showing your face and figure as you are today, with close-ups, profiles and full-length." },
      { q: "What should I wear?", a: "For acting headshots, solid colors in a few looks that fit the roles you go out for. For digitals, fitted basics in neutral tones. Bring options and we'll help you choose." },
      { q: "Hair and makeup?", a: "Keep it natural for digitals and acting headshots. For portfolio looks, we can plan styling together." },
      { q: "Do you work with younger models and actors?", a: "Yes. I used to teach at an elementary school with younger kids, so I know how to keep them relaxed and engaged, with a parent there the whole time." },
    ],
    related: ["headshots", "creative-portraits", "senior-portraits"],
    inquire: "modeling",
    serviceType: "Acting headshot and model portfolio photography",
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
  "event-photography": "/services/milestones-events",
  "quinceaneras-milestones": "/services/milestones-events",
  "modeling-digitals": "/services/modeling-acting",
};

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
