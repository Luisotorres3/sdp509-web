import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
const url = process.env.QA_URL || "https://luisotorres3.github.io/sdp509-web/";
const browser = await chromium.launch();
const context = await browser.newContext({ locale: "ca-ES" });
const page = await context.newPage();
try {
  await page.goto(url, { waitUntil: "networkidle" });
  await page.locator("h1").waitFor();
  const facts = await page.evaluate(() => ({
    title: document.title,
    canonical: document
      .querySelector("link[rel=canonical]")
      ?.getAttribute("href"),
    og: document
      .querySelector('meta[property="og:image"]')
      ?.getAttribute("content"),
    favicon: document.querySelector("link[rel=icon]")?.getAttribute("href"),
    anchors: [...document.querySelectorAll('a[href^="#"]')].map((a) => ({
      href: a.getAttribute("href"),
      exists: !!document.getElementById(a.getAttribute("href").slice(1)),
    })),
    jsonld: JSON.parse(
      document.querySelector('script[type="application/ld+json"]').textContent,
    ),
    external: [...document.querySelectorAll('a[href^="https:"]')].map((a) =>
      a.getAttribute("href"),
    ),
  }));
  assert.equal(facts.title, "SDP509 | Suc de Pinya");
  assert.equal(new URL(facts.canonical).href, new URL(url).href);
  assert.ok(facts.anchors.every((a) => a.exists));
  assert.equal(facts.jsonld["@type"], "MusicGroup");
  for (const asset of [facts.og, new URL(facts.favicon, url).href]) {
    const response = await context.request.get(asset);
    assert.equal(response.status(), 200);
  }
  await page.locator("#musica").scrollIntoViewIfNeeded();
  assert.equal(
    await page
      .locator(".header")
      .evaluate((el) => Math.round(el.getBoundingClientRect().top)),
    0,
  );
  await page.screenshot({ path: "qa-artifacts/production-music.png" });
  for (const id of [
    "nou",
    "musica",
    "directe",
    "merch",
    "la-pinya",
    "historia",
  ]) {
    await page
      .locator(`#${id}`)
      .screenshot({ path: `qa-artifacts/production-section-${id}.png` });
  }
  await page.setViewportSize({ width: 375, height: 812 });
  await page.locator("#la-pinya").scrollIntoViewIfNeeded();
  await page.screenshot({ path: "qa-artifacts/production-members-mobile.png" });
  await writeFile(
    "qa-artifacts/production-metadata.json",
    JSON.stringify(facts, null, 2),
  );
  console.log(JSON.stringify(facts, null, 2));
} finally {
  await browser.close();
}
