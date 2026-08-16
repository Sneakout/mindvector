import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the MindVector landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>MindVector — Your mind, represented\.<\/title>/i);
  assert.match(html, /Your mind,/);
  assert.match(html, /represented\./);
  assert.match(html, /What if an AI could/);
  assert.match(html, /understand you\?/);
  assert.match(html, /belongs to you\./);
  assert.match(html, /Join the waitlist/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|AI clone|upload your brain/i);
});
