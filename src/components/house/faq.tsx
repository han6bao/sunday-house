import { Link } from "@tanstack/react-router";

import { StructuredData } from "@/components/StructuredData";
import { Heart } from "@/components/house/marks";
import { faqJsonLd } from "@/lib/seo";

export type FaqItem = { q: string; a: string };

/**
 * Questions + answers as an accordion. Every answer is in the HTML (search
 * engines read all of it) and the block emits FAQPage structured data.
 */
export function Faq({
  eyebrow = "Questions, answered",
  title = "Before you book",
  intro,
  items,
  schema = true,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  items: FaqItem[];
  schema?: boolean;
}) {
  return (
    <section className="sh-wrap sh-section" aria-labelledby="faq-title">
      {schema ? <StructuredData json={faqJsonLd(items)} /> : null}
      <div className="sh-divider" aria-hidden="true">
        <span />
        <Heart className="h-3.5 w-3.5" />
        <span />
      </div>
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id="faq-title" className="sh-h2 mt-4">
            {title}
          </h2>
          {intro ? <p className="sh-lede mt-5 max-w-sm">{intro}</p> : null}
        </div>
        <div className="lg:col-span-8">
          <div className="sh-faq">
            {items.map((item, i) => (
              <details key={item.q} className="sh-faq__item" open={i === 0}>
                <summary className="sh-faq__q">
                  <span>{item.q}</span>
                  <span className="sh-faq__icon" aria-hidden="true" />
                </summary>
                <p className="sh-faq__a">{item.a}</p>
              </details>
            ))}
          </div>
          <div className="sh-faq__cta sh-faq__cta--split">
            <div className="sh-faq__cta-half">
              <p className="sh-faq__cta-q">Still have a question?</p>
              <p className="sh-faq__cta-sub">Tell us your date and we’ll let you know if it’s open.</p>
              <Link to="/experience/$kind" params={{ kind: "weddings" }} className="sh-btn-fill">
                Check your date
              </Link>
            </div>
            <span className="sh-faq__cta-rule" aria-hidden="true" />
            <div className="sh-faq__cta-half">
              <p className="sh-faq__cta-q">Not sure where yet?</p>
              <p className="sh-faq__cta-sub">We’ll help you pick a place with the right light for your day.</p>
              <Link to="/locations" className="sh-btn-fill">
                Help me find a location
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
