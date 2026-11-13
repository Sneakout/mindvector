import { FUELNERVE_SITE_ORIGIN } from "../../lib/fuelnerve-site";

export function GET() {
  const body = [
    "User-Agent: *",
    "Allow: /",
    "Disallow: /fuelnerve-site/",
    "",
    `Host: ${FUELNERVE_SITE_ORIGIN}`,
    `Sitemap: ${FUELNERVE_SITE_ORIGIN}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
