import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");

test("MindVector presents FuelNerve as a first-party product", async () => {
  const [home, layout, appsMenu, mobileMenu] = await Promise.all([
    read("../app/page.tsx"),
    read("../app/layout.tsx"),
    read("../app/components/AppsMenu.tsx"),
    read("../app/components/MobileMenu.tsx"),
  ]);

  assert.match(home, /FuelNerve is the operating system for petrol pumps/i);
  assert.match(home, /href="\/apps\/fuelnerve"/);
  assert.match(appsMenu, /href="\/apps\/fuelnerve"/);
  assert.match(mobileMenu, /href="\/apps\/fuelnerve"/);
  assert.match(layout, /https:\/\/mindvector\.tech\/apps\/fuelnerve/);
  assert.doesNotMatch(
    `${home}${layout}${appsMenu}${mobileMenu}`,
    /apps\/fuel-ledger/,
  );
});

test("MindVector exposes consistent professional search metadata", async () => {
  const [home, layout] = await Promise.all([
    read("../app/page.tsx"),
    read("../app/layout.tsx"),
  ]);

  assert.match(
    layout,
    /MindVector — Digital Product & Software Studio/,
  );
  assert.match(layout, /alternateName: "mindvector\.tech"/);
  assert.match(layout, /mindvector-icon-512\.png/);
  assert.match(layout, /"@type": "WebPage"/);
  assert.match(home, /href="#products">Our products/);
  assert.match(home, /href="\/apps\/fuelnerve">FuelNerve/);
  assert.match(home, /href="\/apps\/fresh-fold\/">Fresh Fold/);
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
  assert.match(fuelPage, /href="\/petrol-pump-management-software"/);
});
