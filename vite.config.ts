import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

// The vendored @higgsfield/quanta components import their glyphs from a private
// icon package; redirect every `@higgsfield-ai/icons/*` import to a lucide shim.
const QUANTA_ICONS_SHIM = fileURLToPath(new URL("./src/lib/quanta-icons.ts", import.meta.url));

// Deployed on Vercel: Nitro packages the TanStack Start server for Vercel
// Functions and serves public/ as static files from the edge.
export default defineConfig({
  // The Higgsfield design inspector is off on the live site.
  define: { __HF_DESIGN_INSPECTOR__: "false" },
  resolve: {
    tsconfigPaths: true,
    alias: [{ find: /^@higgsfield-ai\/icons(\/.*)?$/, replacement: QUANTA_ICONS_SHIM }],
  },
  plugins: [
    svgr({
      svgrOptions: {
        icon: true,
        svgProps: { fill: "currentColor" },
        svgoConfig: {
          plugins: [{ name: "preset-default", params: { overrides: { removeViewBox: false } } }],
        },
      },
    }),
    tanstackStart({
      server: { entry: "server" },
    }),
    nitro({ preset: "vercel" }),
    react(),
    tailwindcss(),
  ],
});
