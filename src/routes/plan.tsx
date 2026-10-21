import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

import { ContentShell } from "@/components/house/content-shell";
import { ImageSlot } from "@/components/house/image-slot";
import { PlanBuilder } from "@/components/house/plan-builder";

export const Route = createFileRoute("/plan")({
  head: () =>
    pageHead({
      title: "Wedding Planning Workbook for Washington | Sunday House",
      description:
        "A free, private wedding planning workbook for Seattle, Tacoma and the South Sound: your season, city and style, what's booked and what's still missing.",
      path: "/plan",
      image: "/assets/gallery/rings.jpg",
    }),
  component: Plan,
});

export default function Plan() {
  return (
    <ContentShell path="/plan" breadcrumb={[{ name: "Plan Your Wedding", path: "/plan" }]}>
      <section className="mx-auto max-w-[1400px] px-5 pt-14 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="sh-script  reveal">You said yes.</p>
          <h1 className="reveal reveal--delay-1 mt-3 sh-h1">
            Let's figure this out.
          </h1>
          <p className="reveal reveal--delay-2 mt-5 font-serif text-lg leading-relaxed text-brown">
            We are not a wedding planning company. We are the house that helps
            you figure out what comes next — a workbook for your day, your list
            and where to start, across Seattle, Tacoma and beyond.
          </p>
        </div>
      </section>

      {/* Editorial page turn — before the workbook */}
      <section className="mx-auto max-w-[1400px] px-5 pt-12 md:px-8 md:pt-16">
        <div className="grid gap-6 md:grid-cols-2">
          <ImageSlot
            ratio="3/2"
            className="image-slot--rose"
            src="/assets/gallery/sunset-couple.png"
            alt="A couple holding each other at sunset, photographed by Sunday House"
          />
          <ImageSlot
            ratio="3/2"
            src="/assets/gallery/field-seated.png"
            alt="A bride seated in a golden-hour field, photographed by Sunday House"
          />
        </div>
      </section>

      {/* The wedding workbook */}
      <section className="mx-auto max-w-[1400px] px-5 py-12 md:px-8 md:py-16">
        <div className="mb-8 text-center">
          <p className="eyebrow">The Sunday House Wedding Workbook</p>
          <p className="mt-3 font-serif text-lg italic text-brown/80">
            Four small steps — your day, what's booked, what you need, and where
            you'd start.
          </p>
        </div>
        <PlanBuilder />
      </section>

    </ContentShell>
  );
}