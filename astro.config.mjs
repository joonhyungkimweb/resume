// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages: https://joonhyungkimweb.github.io/resume
export default defineConfig({
  site: "https://joonhyungkimweb.github.io",
  base: "/resume",
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});