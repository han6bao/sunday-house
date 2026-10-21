/**
 * Journal content for Sunday House. Editorial articles with real structure,
 * SEO copy and FAQs. Facts that require local verification are left as
 * intentional placeholders (see `note`) for the House to complete.
 */

export type JournalSection = { heading: string; body: string[] };
export type JournalFaq = { q: string; a: string };

export type JournalArticle = {
  slug: string;
  title: string;
  standfirst?: string;
  category: string;
  categories: string[];
  room: "weddings" | "life";
  filter: string;
  photo: string;
  readTime: string;
  intro: string;
  sections: JournalSection[];
  faqs: JournalFaq[];
  cta: { label: string; to: string };
  note?: string;
};

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: "getting-married-in-seattle",
    title: "The Sunday House Guide to Getting Married in Seattle",
    room: "weddings",
    filter: "WEDDING GUIDES",
    photo: "/assets/gallery/field-seated.png",
    category: "Weddings",
    categories: ["Weddings", "Seattle", "Planning Guides"],
    readTime: "12 min",
    intro:
      "From the first yes to the last dance, a calm, complete walk through getting married in Seattle: the light, the rooms, the rhythm and the people who make it lovely.",
    sections: [
      {
        heading: "Why Seattle weddings feel different",
        body: [
          "Seattle loves a celebration that doesn't shout. The weddings that feel most at home here are bright and emotional with a quiet thread of Pacific Northwest ease, water and weather moving through every hour of the day.",
          "That means planning for the light first. Long summer evenings, misty mornings and the famously unpredictable forecast all reward a timeline built around golden hours and indoor softness as a plan B that still feels intentional.",
        ],
      },
      {
        heading: "Choosing a season",
        body: [
          "June through September brings the longest, warmest days and the most reliable golden light, especially across the water and in the gardens south of the city.",
          "Fall is a quiet romance: the city dims, the rooms go candlelit and weekends are easier to secure. Winter weddings here are stunning under chandeliers and fairy lights, with cozy celebration as the whole point.",
        ],
      },
      {
        heading: "The shape of a Seattle wedding day",
        body: [
          "Most of the weddings we photograph follow the same gentle arc: a slow getting-ready in warm morning light, a first look that lets the tension go early, ceremony, portraits that actually leave time for the two of you, and a reception that builds to a dance floor.",
          "When you plan with room to breathe, the photographs inherit that calm. The best days are the ones that never once felt rushed.",
        ],
      },
      {
        heading: "Seattle wedding photographer notes",
        body: [
          "Seattle rewards a photographer who knows the streets and the seasons: which parks keep their light at golden hour, which piers turn gold in August, which rooms hold the rain light beautifully in October.",
          "At Sunday House we photograph weddings across the city and the Sound with a small, steady team, and we will happily guide you through the neighborhoods and venues that match the feeling you described.",
        ],
      },
    ],
    faqs: [
      {
        q: "When should we book a Seattle wedding photographer?",
        a: "Soon after your venue is secured for summer dates, many couples book photography nine to fourteen months out. Off-season weekends are more forgiving.",
      },
      {
        q: "Do we need a first look for good Seattle wedding photos?",
        a: "No. A first look helps your timeline and puts portraits in comfortable daylight, but a traditional aisle reveal can be just as beautiful with a photographer who plans around the light.",
      },
    ],
    cta: { label: "Plan your wedding with Sunday House", to: "/plan" },
    note: "The House is building its vetted list of favorite Seattle venues and vendors for this guide. Ask us and we'll share current recommendations.",
  },
  {
    slug: "beautiful-tacoma-wedding-venues",
    title: "Where to Get Married in Tacoma",
    standfirst: "A Sunday House guide to beautiful Tacoma wedding venues",
    room: "weddings",
    filter: "VENUES",
    photo: "/assets/gallery/rings.jpg",
    category: "Wedding Venues",
    categories: ["Wedding Venues", "Tacoma", "Venues"],
    readTime: "9 min",
    intro:
      "Tacoma's venues pair old-world rooms with water and mountain views. Here's how to think about them, from historic halls to garden tables by the Sound.",
    sections: [
      {
        heading: "What Tacoma does best",
        body: [
          "Tacoma's wedding rooms tend to share a gift the rest of the South Sound envies: genuine character. Brick and timber, arched windows, and water close enough to hear.",
          "They also tend to be kinder to budgets than their Seattle counterparts, which means couples often keep more room for the things that matter: florals, food, music and photography.",
        ],
      },
      {
        heading: "Kinds of venues to consider",
        body: [
          "Historic halls with tall windows suit candlelit evenings and feel like they were waiting for you. Garden and waterfront properties suit long golden summer days, and museums and galleries bring an editorial, artistic edge.",
          "We encourage couples to visit each shortlist twice, once at the time of day their ceremony would run, to see the light honestly.",
        ],
      },
      {
        heading: "The South Sound planning advantage",
        body: [
          "Vendors across Pierce County tend to work together often, which makes weddings feel coordinated without effort. Caterers, florists, planners and photographers who know the same rooms make a day run quietly well.",
          "A guide to the vetted favorites is coming to this page as the House verifies each recommendation.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Tacoma good for affordable weddings?",
        a: "Generally yes for the region. Venue and vendor rates in Tacoma and the South Sound are typically below Seattle averages, without giving up beauty.",
      },
      {
        q: "Should we get married in Tacoma if guests fly in?",
        a: "Tacoma is easy for travelers arriving at Sea-Tac and drives to venues are short. A hotel block near downtown covers most guests comfortably.",
      },
    ],
    cta: { label: "Read the South Sound wedding planning guide", to: "/journal/south-sound-wedding-planning-guide" },
    note: "This page will soon host our reviewed list of Tacoma venues, with verified details for each.",
  },
  {
    slug: "seattle-venues-for-intimate-weddings",
    title: "Intimate Wedding Venues in Seattle",
    standfirst: "Small rooms, big feelings — a Sunday House guide to keeping your people close",
    room: "weddings",
    filter: "VENUES",
    photo: "/assets/gallery/greenhouse.png",
    category: "Wedding Venues",
    categories: ["Wedding Venues", "Seattle", "Venues"],
    readTime: "7 min",
    intro:
      "Fifty guests changes everything, in the best way. Here's how to find a Seattle room that holds your people close and still feels like a wedding.",
    sections: [
      {
        heading: "Why small weddings need different rooms",
        body: [
          "A small wedding is not a large wedding with fewer chairs. It is a different shape of celebration: one long table, a room with a view, a ceremony where every face is visible.",
          "Seattle has an excellent quiet side for exactly this, from intimate waterfront rooms to restaurants that close their doors for you on a Sunday night.",
        ],
      },
      {
        heading: "What to look for",
        body: [
          "Look for a room with a natural focal point and enough rhythm to feel dressed without acres of decor. Two hundred guests need production; thirty-five need personality.",
          "Ask every venue how they handle a smaller guest count, some will surprise you with rates and flexibility they keep for intimate dates, especially on winter weekends.",
        ],
      },
      {
        heading: "The intimate wedding timeline",
        body: [
          "With fewer guests, the day can breathe: a longer cocktail hour, a seated dinner that actually sits, and dancing that starts while the energy is high and warm.",
          "It also gives your photographer room to make the portraits extraordinary, because the golden hours belong to the two of you.",
        ],
      },
    ],
    faqs: [
      {
        q: "How far ahead should we plan an intimate Seattle wedding?",
        a: "Six to nine months is comfortable. Two or three hours of photography is often all an intimate day needs.",
      },
      {
        q: "Do intimate weddings still need a planner?",
        a: "A month-of coordinator can carry an intimate day easily, and it lets you enjoy it fully. For full planning, Sunday House can recommend someone suited to small weddings.",
      },
    ],
    cta: { label: "See intimate wedding photography", to: "/photography" },
    note: "Our vetted shortlist of Seattle rooms for 10-60 guests is coming; every recommendation will be verified before it appears here.",
  },
  {
    slug: "engagement-photos-in-tacoma",
    title: "Where to Take Engagement Photos in Tacoma",
    room: "weddings",
    filter: "ENGAGEMENTS",
    photo: "/assets/gallery/kiss-bw.png",
    category: "Engagements",
    categories: ["Engagements", "Locations", "Tacoma"],
    readTime: "6 min",
    intro:
      "Rust, water and golden hour, all within a few quiet miles. A guide to the Tacoma looks couples love for engagement photos.",
    sections: [
      {
        heading: "The Tacoma engagement look",
        body: [
          "Tacoma's best engagement photographs trade on contrast: soft water against industrial bones, gardens against brick, golden light against gray skies.",
          "That mix makes Tacoma engagement photos feel editorial rather than generic, and it photographs beautifully in every season.",
        ],
      },
      {
        heading: "Waterfront and city moods",
        body: [
          "The waterfront gives you the Sound, the bridges and those long silver hours. The city gives you brick, steel and arched windows, a perfect backdrop for tailored outfits and a fashion-forward feel.",
          "For couples who want both, a two-location session across one golden hour is a classic move.",
        ],
      },
      {
        heading: "What to wear and when",
        body: [
          "Bring two outfits: one soft and natural for the water, one sharp for the city. Late afternoon through early evening is the golden window in every season except deep summer, when the light runs later and softer toward eight.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long is an engagement session?",
        a: "Most Sunday House sessions run about an hour at one location or ninety minutes across two, timed to golden hour.",
      },
      {
        q: "Should we do engagement photos before or after the wedding?",
        a: "Before. You'll be more relaxed, you'll practice being photographed together, and you'll have beautiful images for save-the-dates and your wedding website.",
      },
    ],
    cta: { label: "Book an engagement session", to: "/photography" },
    note: "The House is mapping its verified favorite engagement spots across Tacoma with directions and light notes. They'll appear here soon.",
  },
  {
    slug: "south-sound-wedding-planning-guide",
    title: "The South Sound Wedding Planning Guide",
    room: "weddings",
    filter: "WEDDING GUIDES",
    photo: "/assets/gallery/movement.png",
    category: "Planning",
    categories: ["Weddings", "Planning Guides", "South Sound"],
    readTime: "10 min",
    intro:
      "A gentle, complete timeline for weddings from Federal Way to Olympia, so every decision has its season and nothing slips.",
    sections: [
      {
        heading: "Twelve to ten months out",
        body: [
          "Choose your season and date, then your venue, before almost anything else. The room decides the feel, the capacity and much of your budget.",
          "Book your photographer next. The best dates go first, and your photography team shapes how the whole day remembers itself.",
        ],
      },
      {
        heading: "Eight to six months out",
        body: [
          "Send save-the-dates, book catering and desserts, and start the shortlist for music, florals and rentals. This is also the sweet spot for dress shopping, with time for alterations.",
        ],
      },
      {
        heading: "Four to two months out",
        body: [
          "Invitations go out, and the details move from decisions to confirmations: the officiant meeting, the final guest count, hair and makeup trials, and the timeline shared with every vendor.",
        ],
      },
      {
        heading: "The final month",
        body: [
          "Confirm everything once, rest once, and walk your day in your head once. Then let the plan carry you. The best photography happens when the plan is so complete you forget it exists.",
        ],
      },
    ],
    faqs: [
      {
        q: "What's the first thing we should book?",
        a: "The venue, then the photographer. Everything else can flex around those two decisions.",
      },
      {
        q: "How much should we expect to plan ourselves versus hire out?",
        a: "With a good checklist and calendar, most couples manage planning themselves and hire a month-of coordinator to carry the final weeks.",
      },
    ],
    cta: { label: "Start your wedding checklist in My House", to: "/my-house" },
    note: "Local vendor recommendations accompanying each step are being verified by the House and will be linked from this page as they're confirmed.",
  },
  {
    slug: "how-much-does-a-seattle-wedding-cost",
    title: "How Much Does a Seattle Wedding Cost?",
    room: "weddings",
    filter: "PLANNING",
    photo: "/assets/gallery/back-bouquet.png",
    category: "Planning",
    categories: ["Weddings", "Planning Guides", "Seattle"],
    readTime: "8 min",
    intro:
      "A realistic walk through where the money goes at a Seattle wedding, so you can build a budget that actually holds.",
    sections: [
      {
        heading: "The honest starting point",
        body: [
          "Seattle wedding costs sit among the higher in the country, driven by venue demand and the cost of doing business locally. What matters is not the average but the shape of your own budget and where the proportions go.",
        ],
      },
      {
        heading: "Where the budget goes",
        body: [
          "Venue and catering usually take the largest share, followed by photography and film, then florals, music, planning and attire.",
          "Couples who know their two non-negotiables early build budgets that protect them, and everything else flexes around them.",
        ],
      },
      {
        heading: "Making room for the things you'll keep",
        body: [
          "Photography and film are the only parts of a wedding that grow more valuable each year. When couples trim, we always encourage protecting the documentation of the day, it outlasts every centerpiece.",
        ],
      },
    ],
    faqs: [
      {
        q: "What's the biggest cost we haven't thought of?",
        a: "Gratuities, taxes and service fees commonly add ten to fifteen percent on top of quoted totals, and guest count creep inflates catering line by line.",
      },
      {
        q: "Where can we save without feeling it?",
        a: "Off-season weekends, a restaurant buyout for intimate weddings, and fewer, larger florals read as intentional and save meaningfully.",
      },
    ],
    cta: { label: "Build your budget in My House", to: "/my-house" },
    note: "Verified, current Seattle ranges for each category are being compiled by the House and will be added here once confirmed.",
  },
  {
    slug: "senior-photos-in-tacoma",
    title: "Where to Take Senior Photos in Tacoma",
    room: "life",
    filter: "SENIORS",
    photo: "/assets/gallery/daisy.png",
    category: "Seniors",
    categories: ["Seniors", "Locations", "Tacoma"],
    readTime: "6 min",
    intro:
      "This is your year. Here's where Tacoma makes it look like you, from sun-soaked fields to city walls with attitude.",
    sections: [
      {
        heading: "Finding your look first",
        body: [
          "Senior photos work best when the location matches the person: editorial and moody, sporty and energetic, dreamy and soft, or city and sharp.",
          "Tacoma holds all of them within a few miles, which is why local seniors get the most versatile galleries in the South Sound.",
        ],
      },
      {
        heading: "Golden hour is everything",
        body: [
          "The hour before sunset flatters every style and skin tone, and Tacoma's sunsets over the water are worth planning around. For sun-heavy looks, that window is non-negotiable.",
          "Rainy days are not wasted: they create the soft, cinematic light that editorial seniors are built on.",
        ],
      },
      {
        heading: "What to bring",
        body: [
          "Two or three outfits that feel like you, your school gear or sport jersey if that's part of the story, and a friend or parent for the in-between moments. The best frames are often the unposed ones.",
        ],
      },
    ],
    faqs: [
      {
        q: "When should seniors book photos?",
        a: "Late summer through early fall for traditional yearbook timing, or spring for the softest light and emptier locations.",
      },
      {
        q: "Do you provide outfit guidance?",
        a: "Yes. Our senior experience includes styling notes and a location match based on the aesthetic you choose.",
      },
    ],
    cta: { label: "Start your senior session", to: "/experience/seniors" },
    note: "The House's reviewed map of favorite Tacoma senior spots, with light and access notes for each, is being completed and will live here.",
  },
  {
    slug: "seattle-senior-photo-locations",
    title: "Where to Take Senior Photos in Seattle",
    standfirst: "A Sunday House guide to Seattle's best looks for the year that's yours",
    room: "life",
    filter: "SENIORS",
    photo: "/assets/gallery/eyes-closed.png",
    category: "Seniors",
    categories: ["Seniors", "Locations", "Seattle"],
    readTime: "7 min",
    intro:
      "City, studio and green, for every kind of senior. A Seattle location guide organized by the look you want, not a list of names.",
    sections: [
      {
        heading: "The city look",
        body: [
          "Seattle's urban corners, brick alleys, giant murals and skyline vantage points give seniors an editorial, fashion-forward backdrop that pairs beautifully with tailored outfits.",
        ],
      },
      {
        heading: "The green look",
        body: [
          "The parks and lake edges of Seattle deliver the dreamy, soft and natural aesthetics: long grass, tall trees and water catching the low light. The look is timeless and forgiving.",
        ],
      },
      {
        heading: "The studio look",
        body: [
          "Studio sessions strip everything to you: dramatic light, clean backdrops and portraits that will look current for decades. Many seniors combine studio and city or studio and green across one session.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do we choose between city, green and studio?",
        a: "Picture the photo you'd frame: buildings behind you, or trees, or none of either. If you can't choose, a two-look session covers it.",
      },
      {
        q: "What time of day is best in the city?",
        a: "Golden hour, before the sun drops behind the skyline, gives the warmest light on faces. Evenings and weekdays also mean fewer people in frame.",
      },
    ],
    cta: { label: "Book a senior session in Seattle", to: "/experience/seniors" },
    note: "A verified map of Seattle senior locations with light notes per season is being prepared by the House and will appear here.",
  },
];

export const JOURNAL_CATEGORIES = [
  "Weddings",
  "Wedding Planning",
  "Wedding Venues",
  "Seattle",
  "Tacoma",
  "South Sound",
  "Washington",
  "Photography",
  "Engagements",
  "Couples",
  "Seniors",
  "Families",
  "Maternity + Newborn",
  "Portraits",
  "Creative Sessions",
  "Video",
  "Locations",
  "What to Wear",
  "Planning Guides",
  "Photography Guides",
];