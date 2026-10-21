import { createFileRoute, Navigate } from "@tanstack/react-router";

// This website is Sunday House — a standalone brand. The scaffold's generic app
// workspace is not part of the product; /app simply returns to the front door.
export const Route = createFileRoute("/app")({
  component: () => <Navigate to="/" />,
});