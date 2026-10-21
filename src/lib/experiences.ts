/**
 * Personalized experience paths — the House responds to why someone came in.
 * Each kind feeds a shared experience page (questionnaire, aesthetics,
 * recommendations, and a way to save or inquire).
 */

export type ExperienceQuestion = {
  label: string;
  placeholder?: string;
  options?: string[];
};

export type ExperienceKind = {
  kind: string;
  script: string;
  title: string;
  intro: string;
  questions: ExperienceQuestion[];
  aesthetics?: string[];
  recommendations: string[];
  houseType: string;
  houseNote: string;
  cta: { save: string; inquire: string; to: string };
};

export const EXPERIENCES: Record<string, ExperienceKind> = {
  weddings: {
    kind: "weddings",
    script: "You said yes.",
    title: "Let's figure out what comes next.",
    intro:
      "Tell us a little about your day: four short questions, one at a time. We reply personally within 24 hours, often with a short voice note, with availability and a few thoughts on how we'd photograph it.",
    questions: [
      { label: "Wedding date or season", placeholder: "e.g. next June, or late fall" },
      { label: "City / location", placeholder: "e.g. Tacoma, Seattle, Gig Harbor" },
      { label: "Guest count", placeholder: "e.g. 80" },
      { label: "Approximate budget" },
      { label: "Overall feeling", placeholder: "e.g. candlelit and loud, warm and intimate" },
      { label: "Indoor or outdoor?" },
    ],
    recommendations: [
      "Lock the venue and the photography team first; everything else can follow.",
      "Our complete wedding checklist splits into eleven gentle categories, so nothing slips.",
      "Wedding film and photography can be booked through one House team.",
    ],
    houseType: "Wedding House",
    houseNote: "Your My House becomes a Wedding House: checklist, budget, timeline, saved venues and vendors, inspiration and notes.",
    cta: { save: "Save to My House", inquire: "Send to Sunday House + Inquire", to: "/plan" },
  },
  seniors: {
    kind: "seniors",
    script: "This is your year.",
    title: "Let's make it look like you.",
    intro:
      "Senior portraits should feel like the person you are right now, not a costume. Tell us about your year, your favorite places and the feeling you want, and we'll build a session around you.",
    questions: [
      { label: "Who's booking?", options: ["I'm the senior", "I'm their parent / guardian"] },
      { label: "School or college" },
      { label: "Graduation year" },
      { label: "City" },
      { label: "Preferred season" },
      { label: "Interests, activities or sports" },
      { label: "Style", placeholder: "what do you love to wear?" },
      { label: "Favorite locations", placeholder: "any places that feel like you?" },
      { label: "What you don't want your photos to look like" },
    ],
    aesthetics: [
      "Editorial",
      "Cinematic",
      "Natural",
      "City",
      "Studio",
      "Soft",
      "Flash",
      "Sporty",
      "Dreamy",
      "Classic",
      "Colorful",
      "Unconventional",
      "Not sure yet",
    ],
    recommendations: [
      "Match the location to the look: city walls, golden fields or a clean studio.",
      "Two or three outfits tell the story better than one.",
      "Golden hour does the flattering for us; rain makes the soft cinematic look.",
    ],
    houseType: "Senior House",
    houseNote: "Your My House becomes a Senior House: saved locations, session inspiration, outfits, your questionnaire and saved guides.",
    cta: { save: "Save my session", inquire: "Send to Sunday House + Inquire", to: "/photography" },
  },
  families: {
    kind: "families",
    script: "Every season, kept.",
    title: "Families change every year, so do the photographs that hold them.",
    intro:
      "Tell us about your people, their ages and the feeling you want, and we'll recommend a session style, location and season that suits your family.",
    questions: [
      { label: "Family size", placeholder: "how many, and who?" },
      { label: "Children's ages" },
      { label: "City" },
      { label: "Preferred season" },
      { label: "Indoor or outdoor?" },
      { label: "Formal or candid?" },
      { label: "Desired feeling", placeholder: "cozy, playful, elegant, wild…" },
      { label: "Special occasion", placeholder: "a birthday, a first home, just because" },
      { label: "Location preference" },
      { label: "Outfit questions", placeholder: "what should we wear?" },
    ],
    recommendations: [
      "Sunset and early morning light suit families with little ones best.",
      "Candid sessions let children be children, the photographs keep the real thing.",
      "Prints, frames and wall collections turn the session into your walls.",
    ],
    houseType: "Family House",
    houseNote: "Your My House becomes a Family House: saved locations, session info, outfits, family notes and wall collection planning.",
    cta: { save: "Save my session", inquire: "Send to Sunday House + Inquire", to: "/photography" },
  },
  "maternity-newborn": {
    kind: "maternity-newborn",
    script: "The loveliest kind of mayhem.",
    title: "Before they arrive, and just after.",
    intro:
      "Maternity and newborn photography, done gently. At home, in studio or outdoors, in the light you love, on your schedule, not the clock's.",
    questions: [
      { label: "Due date (or baby's age)" },
      { label: "Maternity, newborn, or both?" },
      { label: "Studio, home, or outdoor?" },
      { label: "Family members included", placeholder: "partner, siblings, pets…" },
      { label: "Desired feeling" },
      { label: "Wardrobe ideas", placeholder: "what would feel like you?" },
      { label: "Location preference" },
      { label: "Print / album interest" },
    ],
    recommendations: [
      "Maternity sessions shine at 30-36 weeks; newborn sessions in the first two weeks.",
      "Home sessions mean you stay comfortable and the light follows the baby.",
      "This is the season to think about The Album and The Folio.",
    ],
    houseType: "Maternity + Newborn House",
    houseNote: "Your My House remembers your session plan, due dates, inspiration and print wishes.",
    cta: { save: "Save my session", inquire: "Send to Sunday House + Inquire", to: "/photography" },
  },
  couples: {
    kind: "couples",
    script: "Just the two of you.",
    title: "Anniversaries, plans, or just because.",
    intro:
      "Couples sessions are for every chapter: dating, engaged, newly married, or quietly in love for years. Tell us your story and the feeling you want the photographs to carry.",
    questions: [
      { label: "What are we celebrating?", options: ["Anniversary", "Dating", "Engagement", "Just because", "Proposal", "Creative session"] },
      { label: "Your story", placeholder: "how did you two meet?" },
      { label: "Desired location" },
      { label: "Desired aesthetic" },
      { label: "Desired feeling" },
    ],
    recommendations: [
      "Golden hour by the water is the classic for a reason.",
      "Bring an outfit change for the second look; it doubles the gallery.",
      "Engaged? These photos are perfect for save-the-dates and your wedding website.",
    ],
    houseType: "Couples House",
    houseNote: "Your My House keeps your story, saved locations, inspiration and session plans.",
    cta: { save: "Save my session", inquire: "Send to Sunday House + Inquire", to: "/photography" },
  },
  creative: {
    kind: "creative",
    script: "A still from your own film.",
    title: "Creative portraits and sessions.",
    intro:
      "Sunday House also builds conceptual photography: a visual world designed around you. Concept, creative direction, locations, styling, props, set, cinematic light. These are not standard portraits.",
    questions: [
      { label: "The idea", placeholder: "what world do you want to step into?" },
      { label: "Concept development interest" },
      { label: "Creative direction interest" },
      { label: "Location scouting interest" },
      { label: "Styling guidance interest" },
      { label: "Props / set concepts interest" },
      { label: "Visual storytelling interest" },
      { label: "Preferred environments", placeholder: "unconventional, editorial, cinematic…" },
    ],
    recommendations: [
      "Start with a feeling, a film, a painting or a song; we build the world from there.",
      "Sessions include concept development, styling and set direction.",
      "The result is designed to look like a scene from a film.",
    ],
    houseType: "Creative House",
    houseNote: "Your My House keeps your moodboards, concept notes, locations and session plan.",
    cta: { save: "Save my concept", inquire: "Send to Sunday House + Inquire", to: "/photography" },
  },
  portraits: {
    kind: "portraits",
    script: "Who you are right now.",
    title: "Portraits, made intentional.",
    intro:
      "Beautiful, polished photography for people and the moments they want to keep. Tell us who's in front of the camera, what the session is for, and the feeling you want.",
    questions: [
      { label: "Who is this session for?", placeholder: "you, a partner, your family…" },
      { label: "What are we celebrating?", placeholder: "a milestone, a season, just because" },
      { label: "City / location" },
      { label: "Preferred season" },
      { label: "Indoor, outdoor, or studio?" },
      { label: "Desired feeling", placeholder: "editorial, soft, playful, classic…" },
    ],
    aesthetics: [
      "Editorial", "Natural", "Soft", "Classic", "Cinematic", "Bold", "Minimal", "Warm", "Not sure yet",
    ],
    recommendations: [
      "Portraits work best in a light that flatters: golden hour outdoors, soft window light inside.",
      "Two or three outfit options give the gallery variety without effort.",
      "Prints, frames and albums turn the session into keepsakes.",
    ],
    houseType: "Portrait House",
    houseNote: "Your My House keeps your portrait plan, saved locations, outfits and inspiration.",
    cta: { save: "Save my session", inquire: "Send to Sunday House + Inquire", to: "/photography" },
  },
  events: {
    kind: "events",
    script: "Raise a glass.",
    title: "Birthdays, gatherings and quiet milestones.",
    intro:
      "Events worth remembering: birthdays, anniversaries, family gatherings, parties, community and private celebrations. We'll document the evening the way it felt.",
    questions: [
      { label: "What are we celebrating?", options: ["Birthday", "Anniversary", "Family gathering", "Celebration / party", "Community event", "Private event", "Other milestone"] },
      { label: "Date and time" },
      { label: "Location" },
      { label: "Guest count" },
      { label: "Desired feeling", placeholder: "loud and joyful, intimate and slow…" },
      { label: "Photo + film, or photos only?" },
    ],
    recommendations: [
      "A few hours of documentary coverage captures the arc without the evening noticing.",
      "Candids carry events; a single portrait of the host or family finishes the story.",
      "Film and photography can run side by side.",
    ],
    houseType: "Gathering House",
    houseNote: "Your My House keeps event details, guest notes, inspiration and session plans.",
    cta: { save: "Save my event", inquire: "Send to Sunday House + Inquire", to: "/photography" },
  },
};