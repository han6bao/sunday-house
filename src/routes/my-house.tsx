import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

import { ContentShell } from "@/components/house/content-shell";
import { ShMark } from "@/components/house/marks";
import { MyHouse } from "@/components/house/my-house";

export const Route = createFileRoute("/my-house")({
  head: () =>
    pageHead({
      title: "My House | Sunday House",
      description:
        "Your private Sunday House planning space: checklists, notes and saved favorites, kept in your own browser.",
      path: "/my-house",
      noindex: true,
    }),
  component: MyHouseRoute,
});

export default function MyHouseRoute() {
  return (
    <ContentShell path="/my-house" breadcrumb={[{ name: "My House", path: "/my-house" }]}>
      <section className="mx-auto max-w-[1400px] px-5 pt-12 md:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <div className="flex items-center gap-4">
              <img
                src="/assets/brand/monogram.png"
                alt="Sunday House monogram"
                className="h-10 w-auto"
              />
              <h1 className="font-display text-4xl text-ink md:text-5xl">My House</h1>
            </div>
            <p className="mt-3 max-w-2xl font-serif text-lg text-brown">
              Your private corner for the things worth keeping. It adapts to why you
              came through the door: a Wedding House, a Senior House, a Family House
              and more, all in your own browser, safe and quiet.
            </p>
          </div>
          <div className="hidden justify-end lg:col-span-3 lg:flex">
            <ShMark className="h-24 w-24 text-rose-deep" />
          </div>
        </div>
        <div className="mt-10">
          <MyHouse />
        </div>
      </section>
    </ContentShell>
  );
}