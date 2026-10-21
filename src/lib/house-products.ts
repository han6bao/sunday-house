/**
 * House Objects catalogue. Structured for a future Shopify / equivalent
 * e-commerce backend: every product carries a stable handle, variant
 * vocabulary and made-to-order status. Prices are intentionally left as
 * "made to order — inquire" rather than fabricated, per the brand brief.
 */

export type HouseProduct = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  details: string[];
  madeToOrder: boolean;
  variants: string[];
  shopifyHandle: string;
};

/** Human labels for the House Objects categories. */
export const OBJECT_CATEGORIES = {
  wall: "For the Wall",
  albums: "Albums + Books",
  paper: "Paper + Keepsakes",
} as const;

export const HOUSE_PRODUCTS: HouseProduct[] = [
  {
    id: "frame",
    name: "The Frame",
    tagline: "One photograph, beautifully kept.",
    description:
      "Hand-finished in antique gold, made to hold the one still that stops you every time.",
    details: ["Antique gold finish", "Custom sizing to your photograph", "Hand-finishing, made to order"],
    madeToOrder: true,
    variants: ["Small", "Medium", "Large", "Wall pair"],
    shopifyHandle: "the-frame",
  },
  {
    id: "album",
    name: "The Album",
    tagline: "The whole story, bound in linen.",
    description:
      "Your complete day or session, printed on fine-art paper and bound to be passed down.",
    details: ["Linen cover in ivory or blush", "Fine-art archival paper", "Custom lay-flat binding"],
    madeToOrder: true,
    variants: ["10x10", "12x12", "Parent duplicate"],
    shopifyHandle: "the-album",
  },
  {
    id: "print",
    name: "The Print",
    tagline: "A single image, made to hold.",
    description:
      "One frame-worthy photograph on archival paper, sized honestly for your wall.",
    details: ["Archival fine-art paper", "Editioned with the House", "Sizes from 8x10 to 30x40"],
    madeToOrder: true,
    variants: ["8x10", "11x14", "16x20", "30x40"],
    shopifyHandle: "the-print",
  },
  {
    id: "folio",
    name: "The Folio",
    tagline: "A small gathering of prints, like a letter that lasts.",
    description: "A handful of keepsakes in a linen folio, for the moments that deserve more than one frame.",
    details: ["Linen folio cover", "Eight to twenty prints", "Handwritten note option"],
    madeToOrder: true,
    variants: ["8 prints", "12 prints", "20 prints"],
    shopifyHandle: "the-folio",
  },
  {
    id: "parent-album",
    name: "The Parent Album",
    tagline: "For the families who raised you.",
    description: "A second album, made from the same photographs, because they kept you.",
    details: ["Matched to your album", "Two copies available", "Gift note included"],
    madeToOrder: true,
    variants: ["Single parent album", "Pair (both families)"],
    shopifyHandle: "the-parent-album",
  },
  {
    id: "announcements",
    name: "Announcements",
    tagline: "The news, made lovely.",
    description: "Births, engagements and graduations, announced on paper worth keeping.",
    details: ["Letterpress or fine-art print", "Sets of 25", "Custom wording"],
    madeToOrder: true,
    variants: ["Set of 25", "Set of 50"],
    shopifyHandle: "announcements",
  },
  {
    id: "thank-you",
    name: "Thank-You Sets",
    tagline: "A note worth keeping.",
    description: "Cards that carry your photograph and your words, printed with the same care as your album.",
    details: ["Your photograph on the front", "Sets of 25", "Blank or printed note"],
    madeToOrder: true,
    variants: ["Set of 25", "Set of 50"],
    shopifyHandle: "thank-you-sets",
  },
  {
    id: "wall-collection",
    name: "Wall Collections",
    tagline: "A house that remembers itself.",
    description: "A considered arrangement for your walls, composed together with you, printed and framed as one collection.",
    details: ["Composed with the House", "Mixed print + frame", "Delivery and hanging plan"],
    madeToOrder: true,
    variants: ["Three-piece", "Five-piece", "Custom"],
    shopifyHandle: "wall-collections",
  },
];