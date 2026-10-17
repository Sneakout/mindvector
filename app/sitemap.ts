import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-17");
  const fuelNerveGuides = [
    "petrol-pump-dsr-software",
    "petrol-pump-inventory-management",
    "petrol-pump-shift-reconciliation",
    "petrol-pump-accounting-software",
    "petrol-pump-credit-management",
    "petrol-pump-software-pricing-india",
  ].map((slug) => ({
    url: `https://mindvector.tech/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.82,
  }));

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
    ...fuelNerveGuides,
  ];
}
