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
