import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-01");
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
    {
      url: "https://mindvector.tech/petrol-pump-management-software",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
  ];
}
