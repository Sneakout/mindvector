import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("contains the MindVector landing page", async () => {
  const html = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
  assert.match(layout, /MindVector \| Your mind, represented\./i);
  assert.match(html, /Your mind,/);
  assert.match(html, /represented\./);
  assert.match(html, /What if an AI could/);
  assert.match(html, /understand you\?/);
  assert.match(html, /belongs to you\./);
  assert.match(html, /Join the waitlist/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|AI clone|upload your brain/i);
});
