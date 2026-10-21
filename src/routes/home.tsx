import { createFileRoute, Navigate } from "@tanstack/react-router";

// The site lives at "/"; /home simply returns to the front door.
export const Route = createFileRoute("/home")({
  component: () => <Navigate to="/" />,
});
