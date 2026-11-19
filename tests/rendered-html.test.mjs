import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");

test("MindVector presents FuelNerve as a first-party product", async () => {
  const [home, structuredData, appsMenu, mobileMenu] = await Promise.all([
    read("../app/page.tsx"),
    read("../app/components/MindVectorStructuredData.tsx"),
    read("../app/components/AppsMenu.tsx"),
    read("../app/components/MobileMenu.tsx"),
  ]);

  assert.match(home, /FuelNerve is the operating system for petrol pumps/i);
  assert.match(home, /href="\/apps\/fuelnerve"/);
  assert.match(appsMenu, /href="\/apps\/fuelnerve"/);
  assert.match(mobileMenu, /href="\/apps\/fuelnerve"/);
  assert.match(structuredData, /https:\/\/mindvector\.tech\/apps\/fuelnerve/);
  assert.doesNotMatch(
    `${home}${structuredData}${appsMenu}${mobileMenu}`,
    /apps\/fuel-ledger/,
  );
});

test("MindVector exposes consistent professional search metadata", async () => {
  const [home, layout, structuredData] = await Promise.all([
    read("../app/page.tsx"),
    read("../app/layout.tsx"),
    read("../app/components/MindVectorStructuredData.tsx"),
  ]);

  assert.match(
    layout,
    /MindVector — Digital Product & Software Studio/,
  );
  assert.match(structuredData, /alternateName: "mindvector\.tech"/);
  assert.match(layout, /mindvector-icon-512\.png/);
  assert.match(structuredData, /"@type": "WebPage"/);
  assert.match(home, /<MindVectorStructuredData \/>/);
  assert.match(home, /href="#products">Our products/);
  assert.match(home, /href="\/apps\/fuelnerve">FuelNerve/);
  assert.match(home, /href="\/apps\/fresh-fold\/">Fresh Fold/);
  assert.match(home, /href="\/about">About/);
  assert.match(home, /MindVector is operated by Sneakout/);
  assert.match(structuredData, /legalName: "Sneakout"/);
});

test("About page presents Sneakout as the registered business", async () => {
  const [about, sitemap, mobileMenu] = await Promise.all([
    read("../app/about/page.tsx"),
    read("../app/sitemap.ts"),
    read("../app/components/MobileMenu.tsx"),
  ]);

  assert.match(about, /Sneakout.*registered business behind/s);
  assert.match(about, /legalName: "Sneakout"/);
  assert.match(about, /MindVector.*product\s+studio and technology brand/s);
  assert.match(about, /FuelNerve/);
  assert.match(about, /Fresh Fold/);
  assert.match(sitemap, /https:\/\/mindvector\.tech\/about/);
  assert.match(mobileMenu, /href="\/about"/);
});

test("FuelNerve has a dedicated canonical search landing page", async () => {
  const [page, sitemap, config] = await Promise.all([
    read("../app/apps/fuelnerve/page.tsx"),
    read("../app/sitemap.ts"),
    read("../next.config.ts"),
  ]);

  assert.match(page, /FuelNerve \| Petrol Pump Management Software & AI/);
  assert.match(
    page,
    /canonical: "https:\/\/mindvector\.tech\/apps\/fuelnerve"/,
  );
  assert.match(page, /"@type": "SoftwareApplication"/);
  assert.match(page, /FuelNerve\.[\s\S]*<br \/>/);
  assert.match(sitemap, /https:\/\/mindvector\.tech\/apps\/fuelnerve/);
  assert.match(config, /source: "\/apps\/fuel-ledger"/);
  assert.match(config, /destination: "\/apps\/fuelnerve"/);
  assert.match(config, /permanent: true/);
});

test("Petrol pump management software has a dedicated category landing page", async () => {
  const [page, sitemap, home, fuelPage] = await Promise.all([
    read("../app/petrol-pump-management-software/page.tsx"),
    read("../app/sitemap.ts"),
    read("../app/page.tsx"),
    read("../app/apps/fuelnerve/page.tsx"),
  ]);

  assert.match(page, /Petrol Pump Management Software in India \| FuelNerve/);
  assert.match(page, /canonical/);
  assert.match(page, /"@type": "SoftwareApplication"/);
  assert.match(page, /"@type": "BreadcrumbList"/);
  assert.match(page, /"@type": "FAQPage"/);
  assert.match(page, /Petrol pump[\s\S]*management software/);
  assert.match(
    sitemap,
    /https:\/\/mindvector\.tech\/petrol-pump-management-software/,
  );
  assert.match(home, /href="\/petrol-pump-management-software"/);
  assert.match(fuelPage, /overviewHref/);
});

test("FuelNerve has an independent searchable hostname", async () => {
  const [home, proxy, sitemap, robots, topicRoute, fuelPage] =
    await Promise.all([
      read("../app/fuelnerve-site/page.tsx"),
      read("../proxy.ts"),
      read("../app/fuelnerve-sitemap.xml/route.ts"),
      read("../app/fuelnerve-robots.txt/route.ts"),
      read("../app/fuelnerve-site/[slug]/page.tsx"),
      read("../app/apps/fuelnerve/page.tsx"),
    ]);

  assert.match(home, /FuelNerve \| Petrol Pump Management Software in India/);
  assert.match(home, /fuelnerve-icon-512\.png/);
  assert.match(proxy, /FUELNERVE_MARKETING_HOST/);
  assert.match(proxy, /FUELNERVE_APP_ORIGIN/);
  assert.match(sitemap, /FUELNERVE_GUIDE_SLUGS/);
  assert.match(robots, /Sitemap:/);
  assert.match(topicRoute, /siteName: "FuelNerve"/);
  assert.match(fuelPage, /"@type": "WebSite"/);
  assert.match(fuelPage, /siteUrl/);
});

test("FuelNerve exposes a connected petrol pump software topic cluster", async () => {
  const routes = [
    ["petrol-pump-dsr-software", /Petrol Pump DSR Software/],
    ["petrol-pump-inventory-management", /Petrol Pump Inventory Management Software/],
    ["petrol-pump-shift-reconciliation", /Petrol Pump Shift & Nozzle Reconciliation Software/],
    ["petrol-pump-accounting-software", /Petrol Pump Accounting Software/],
    ["petrol-pump-credit-management", /Petrol Pump Credit Customer Management Software/],
    ["petrol-pump-software-pricing-india", /Petrol Pump Software Price in India/],
  ];
  const [sitemap, category, shared, ...pages] = await Promise.all([
    read("../app/sitemap.ts"),
    read("../app/petrol-pump-management-software/page.tsx"),
    read("../app/components/FuelNerveTopicPage.tsx"),
    ...routes.map(([slug]) => read(`../app/${slug}/page.tsx`)),
  ]);

  assert.match(shared, /"@type": "WebPage"/);
  assert.match(shared, /"@type": "BreadcrumbList"/);
  assert.match(shared, /"@type": "FAQPage"/);

  routes.forEach(([slug, title], index) => {
    assert.match(pages[index], title);
    assert.match(pages[index], new RegExp(`https:\\/\\/mindvector\\.tech\\/${slug}`));
    assert.match(sitemap, new RegExp(slug));
    assert.match(category, new RegExp(`href: "\\/${slug}"`));
  });
});
