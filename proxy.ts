import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  FUELNERVE_APP_ORIGIN,
  FUELNERVE_GUIDE_SLUGS,
  FUELNERVE_MARKETING_HOST,
  FUELNERVE_SITE_ORIGIN,
  type FuelNerveGuideSlug,
} from "./lib/fuelnerve-site";

const publicAssetPattern =
  /^\/(?:_next\/|fuelnerve-mark\.svg$|fuelnerve-icon-(?:48|512)\.png$|fuelnerve-apple-touch-icon\.png$)/;

export function proxy(request: NextRequest) {
  const hostname = (request.headers.get("host") ?? "")
    .split(":")[0]
    .toLowerCase();

  if (hostname !== FUELNERVE_MARKETING_HOST) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (publicAssetPattern.test(pathname)) {
    return NextResponse.next();
  }

  if (pathname === "/favicon.ico") {
    return NextResponse.rewrite(
      new URL("/fuelnerve-icon-48.png", request.url),
    );
  }

  if (pathname === "/robots.txt") {
    return NextResponse.rewrite(
      new URL("/fuelnerve-robots.txt", request.url),
    );
  }

  if (pathname === "/sitemap.xml") {
    return NextResponse.rewrite(
      new URL("/fuelnerve-sitemap.xml", request.url),
    );
  }

  if (pathname === "/") {
    return NextResponse.rewrite(new URL("/fuelnerve-site", request.url));
  }

  if (pathname === "/login" || pathname === "/demo") {
    return NextResponse.redirect(`${FUELNERVE_APP_ORIGIN}${pathname}`, 307);
  }

  if (
    pathname === "/apps/fuelnerve" ||
    pathname === "/petrol-pump-management-software" ||
    pathname === "/fuelnerve-site"
  ) {
    return NextResponse.redirect(`${FUELNERVE_SITE_ORIGIN}/`, 308);
  }

  const slug = pathname.slice(1);
  if (FUELNERVE_GUIDE_SLUGS.includes(slug as FuelNerveGuideSlug)) {
    return NextResponse.rewrite(
      new URL(`/fuelnerve-site/${slug}`, request.url),
    );
  }

  return NextResponse.rewrite(new URL("/_not-found", request.url));
}

export const config = {
  matcher: "/:path*",
};
