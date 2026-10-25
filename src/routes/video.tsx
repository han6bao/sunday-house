import { createFileRoute, redirect } from "@tanstack/react-router";

/** Old address — the film page now lives at /film. */
export const Route = createFileRoute("/video")({
  beforeLoad: () => {
    throw redirect({ href: "/film", statusCode: 301 });
  },
});
