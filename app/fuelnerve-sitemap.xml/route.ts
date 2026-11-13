import {
  FUELNERVE_GUIDE_SLUGS,
  FUELNERVE_SITE_ORIGIN,
} from "../../lib/fuelnerve-site";

export function GET() {
  const lastModified = "2026-11-13";
  const urls = ["", ...FUELNERVE_GUIDE_SLUGS].map((path) => {
    const loc = path
      ? `${FUELNERVE_SITE_ORIGIN}/${path}`
      : `${FUELNERVE_SITE_ORIGIN}/`;
    const priority = path ? "0.82" : "1.0";
    const changeFrequency = path ? "monthly" : "weekly";

    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastModified}</lastmod>\n    <changefreq>${changeFrequency}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
