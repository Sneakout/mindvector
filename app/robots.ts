import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://mindvector.tech/sitemap.xml",
    host: "https://mindvector.tech",
  };
}
