import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-16");
  return [
    { url: "https://mindvector.tech/", lastModified, changeFrequency: "monthly", priority: 1 },
    { url: "https://mindvector.tech/apps/viral/", lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
