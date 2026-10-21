import { createFileRoute, Link, redirect } from "@tanstack/react-router";

import { ContentShell } from "@/components/house/content-shell";
import { ServicePage } from "@/components/house/service-page";
import { pageHead } from "@/lib/seo";
import { getService, RETIRED_SERVICES } from "@/lib/services";

export const Route = createFileRoute("/services/$slug")({
  beforeLoad: ({ params }) => {
    const to = RETIRED_SERVICES[params.slug];
    if (to) throw redirect({ href: to, statusCode: 301 });
  },
  head: ({ params }) => {
    const s = getService(params.slug);
    if (!s) {
      return pageHead({
        title: "Services | Sunday House",
        description: "Wedding and portrait photography services from Sunday House in Seattle and Tacoma.",
        path: "/services",
        noindex: true,
      });
    }
    return pageHead({
      title: s.title,
      description: s.description,
      path: `/services/${s.slug}`,
      image: s.photos[0].src,
      imageAlt: s.photos[0].alt,
    });
  },
  component: ServiceRoute,
});

function ServiceRoute() {
  const { slug } = Route.useParams();
  const service = getService(slug);
  if (!service) {
    return (
      <ContentShell>
        <div className="sh-wrap sh-section text-center">
          <h1 className="sh-h2">Not quite this room.</h1>
          <Link to="/services" className="sh-link mt-6">
            See all services →
          </Link>
        </div>
      </ContentShell>
    );
  }
  return <ServicePage service={service} />;
}
