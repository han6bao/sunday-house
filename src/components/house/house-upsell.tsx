import { Link } from "@tanstack/react-router";

/**
 * Upsell band — a slim paper strip offering the natural next thing from the
 * house ("Pictures worth keeping? Film keeps the voices too."). One line,
 * one link, quiet. Flat paper, gold hairline.
 */
export function HouseUpsell({
  script,
  title,
  cta,
  to,
  kind,
}: {
  script: string;
  title: string;
  cta: string;
  to: string;
  kind?: string;
}) {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-10 md:px-8 md:py-14">
      <div className="mx-auto border-t border-ink/15 pt-8 md:pt-10">
        <div className="grid items-center gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="script card-fade text-2xl text-dusty-rose">{script}</p>
            <p className="card-fade card-fade-1 mt-2 max-w-xl font-serif text-lg leading-relaxed text-brown">
              {title}
            </p>
          </div>
          <div className="card-fade card-fade-2 lg:col-span-4 lg:text-right">
            <Link
              to={to as never}
              params={kind ? ({ kind } as never) : undefined}
              className="sh-textlink"
            >
              {cta} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}