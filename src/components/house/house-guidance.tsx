import { Faq } from "./faq";

/**
 * Kept for the pages that already use it: the old one-at-a-time panel is now
 * the shared FAQ accordion, so every answer is visible to readers and search
 * engines and carries FAQPage structured data.
 */
export function HouseGuidance({
  eyebrow = "Questions, answered",
  intro,
  items,
}: {
  eyebrow?: string;
  intro?: string;
  items: { title: string; body: string }[];
  inquireTo?: string;
  inquireKind?: string;
  inquireLabel?: string;
}) {
  return (
    <Faq
      eyebrow={eyebrow}
      title="Asked + answered"
      intro={intro}
      items={items.map((i) => ({ q: i.title, a: i.body }))}
    />
  );
}
