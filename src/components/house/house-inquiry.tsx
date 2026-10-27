import { Link } from "@tanstack/react-router";

import { Heart, HouseMark } from "./marks";

/**
 * Every page ends here: one moody photograph, one clear invitation.
 */
export function HouseInquiry() {
  return (
    <section aria-labelledby="house-inquiry-title" className="sh-inquiry">
      <div className="hz-banner">
        <img src="/assets/gallery/daisy.png" alt="" loading="lazy" decoding="async" width={824} height={1242} />
      </div>

      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <div className="sh-invite">
          <HouseMark className="sh-invite__mark" />
          <p className="eyebrow mt-6">Now booking · Limited dates</p>
          <h2 id="house-inquiry-title" className="sh-h1 mt-4">
            Tell us about <em>your</em> day.
          </h2>
          <div className="sh-invite__rule" aria-hidden="true">
            <span />
            <Heart className="h-3.5 w-3.5" />
            <span />
          </div>
          <p className="sh-invite__body">
            We take on a limited number of weddings each year, so every couple
            has our full attention. Email us your date, your place and the
            feeling you want to keep at{" "}
            <a href="mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" className="underline underline-offset-4">hanabhong@gmail.com</a>.
          </p>
          <div className="sh-invite__actions">
            <a href="mailto:hanabhong@gmail.com?subject=Sunday%20House%20inquiry" className="sh-btn-fill">
              Inquire
            </a>
            <span className="sh-btn-rule" aria-hidden="true" />
            <Link to="/photography" className="sh-btn-fill">
              Book a portrait session
            </Link>
          </div>
          <ul className="sh-invite__promises" aria-label="What to expect">
            <li>Reply within 24 hours</li>
            <li>Sneak peeks in 48</li>
            <li>Seattle · Tacoma · beyond</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
