// @ts-check
import tailwindIntegration from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwindIntegration()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
