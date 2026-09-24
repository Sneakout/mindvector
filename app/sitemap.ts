import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-24");
  return [
    {
      url: "https://mindvector.tech/",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://mindvector.tech/apps/fresh-fold/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://mindvector.tech/apps/fuelnerve",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
