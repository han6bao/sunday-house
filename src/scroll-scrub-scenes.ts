import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";

// Sunday House ships as an editorial site without the animated film journey, so
// this scroll-scrub scene module is intentionally inert. The theme tokens are
// pulled from the brand style guide in case the journey is revisited later.
export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#B38A4A",
  background: "#FAF7F2",
  ink: "#191714",
  muted: "#302720",
};

export const scrollScrubScenes: ScrollScrubScene[] = [];