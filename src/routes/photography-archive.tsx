import { createFileRoute, redirect } from "@tanstack/react-router";

/** The archive page is retired — send anyone who lands here to Weddings. */
export const Route = createFileRoute("/photography-archive")({
  beforeLoad: () => {
    throw redirect({ href: "/weddings", statusCode: 301 });
  },
});
