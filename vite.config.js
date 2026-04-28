import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import Sitemap from "vite-plugin-sitemap";
import { sitemapRoutes } from "./src/Data/siteRoutes";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: "https://www.yorkshireinsulationsolutions.co.uk",
      dynamicRoutes: sitemapRoutes.filter((route) => route !== "/"),
    }),
  ],
  build: {
    target: "es2018",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react") || id.includes("react-router-dom")) {
            return "react-vendor";
          }

          if (id.includes("framer-motion")) {
            return "motion-vendor";
          }

          return undefined;
        },
      },
    },
  },
});
