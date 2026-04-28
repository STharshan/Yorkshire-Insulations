import { services } from "./services";

export const staticSitemapRoutes = [
  "/",
  "/locations/leeds",
  "/pricing",
  "/gallery",
  "/terms",
  "/privacy",
];

export const sitemapRoutes = [
  ...staticSitemapRoutes,
  ...services.map(({ path }) => path),
];
