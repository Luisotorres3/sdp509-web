import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdir, writeFile } from "node:fs/promises";
import assert from "node:assert/strict";
const url = process.env.QA_URL || "http://127.0.0.1:5173/sdp509-web/";
const label = process.env.QA_LABEL || "local";
await mkdir("qa-artifacts", { recursive: true });
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext();
const page = await context.newPage();
const errors = [];
const localFailures = [];
const external = [];
page.on("pageerror", (e) => errors.push(e.message));
page.on("response", (r) => {
  if (r.status() >= 400) {
    (r.url().startsWith(new URL(url).origin) ? localFailures : external).push({
      url: r.url(),
      status: r.status(),
    });
  }
});
const report = { url, widths: [], errors, localFailures, external };
try {
  await page.goto(url, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  assert.equal(await page.locator("h1").count(), 1);
  assert.equal(await page.locator("html").getAttribute("lang"), "ca");
  assert.equal(await page.locator(".toy-button").count(), 8);
  assert.equal(
    await page.locator("iframe").count(),
    0,
    "No unsolicited third-party embeds",
  );
  for (const width of [320, 375, 430, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    await page.waitForTimeout(180);
    const overflow = await page.evaluate(() => ({
      viewport: innerWidth,
      scroll: document.documentElement.scrollWidth,
      broken: [...document.images]
        .filter((i) => !i.complete || !i.naturalWidth)
        .map((i) => i.src),
    }));
    report.widths.push({ width, ...overflow });
    assert.ok(
      overflow.scroll <= width,
      `Overflow at ${width}: ${overflow.scroll}`,
    );
    assert.deepEqual(overflow.broken, []);
    await page.screenshot({
      path: `qa-artifacts/${label}-${width}.png`,
      fullPage: true,
    });
    await page.screenshot({ path: `qa-artifacts/${label}-hero-${width}.png` });
  }
  await page.setViewportSize({ width: 375, height: 812 });
  await page.getByRole("button", { name: "Menú" }).click();
  assert.equal(
    await page
      .getByRole("button", { name: "Tanca", exact: false })
      .first()
      .getAttribute("aria-expanded"),
    "true",
  );
  await page
    .locator("#main-nav")
    .getByRole("link", { name: "La pinya" })
    .click();
  assert.equal(
    await page.locator(".menu-toggle").getAttribute("aria-expanded"),
    "false",
  );
  await page.getByRole("button", { name: "Coneix Furki", exact: true }).click();
  assert.ok(await page.locator("dialog").isVisible());
  assert.ok(
    await page
      .locator("dialog")
      .innerText()
      .then((t) => t.includes("Josep Forcada")),
  );
  report.dialogAxe = (
    await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze()
  ).violations.map((v) => ({
    id: v.id,
    impact: v.impact,
    nodes: v.nodes.map((n) => n.target),
  }));
  await page.keyboard.press("Escape");
  assert.ok(!(await page.locator("dialog").isVisible()));
  assert.equal(
    await page.evaluate(() =>
      document.activeElement?.getAttribute("aria-label"),
    ),
    "Coneix Furki",
  );
  await page.goto(url);
  await page.locator("h1").waitFor();
  await page.keyboard.press("Tab");
  assert.equal(
    await page.evaluate(() => document.activeElement?.textContent),
    "Salta al contingut",
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  assert.equal(
    await page
      .locator(".oval-sticker")
      .evaluate((el) => getComputedStyle(el).animationName),
    "none",
  );
  report.mobileAxe = (
    await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze()
  ).violations.map((v) => ({
    id: v.id,
    impact: v.impact,
    nodes: v.nodes.map((n) => n.target),
  }));
  await page.setViewportSize({ width: 1440, height: 1000 });
  report.desktopAxe = (
    await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze()
  ).violations.map((v) => ({
    id: v.id,
    impact: v.impact,
    nodes: v.nodes.map((n) => n.target),
  }));
  while (await page.locator(".embed-facade").count())
    await page.locator(".embed-facade").first().click();
  assert.equal(await page.locator("iframe").count(), 3);
  await page.waitForTimeout(8000);
  report.embeds = await page
    .locator("iframe")
    .evaluateAll((frames) =>
      frames.map((f) => ({
        src: f.src,
        title: f.title,
        width: f.clientWidth,
        height: f.clientHeight,
      })),
    );
  await page.screenshot({
    path: `qa-artifacts/${label}-embeds.png`,
    fullPage: true,
  });
  report.frames = page.frames().map((f) => ({ url: f.url() }));
  report.frameContents = [];
  for (const frame of page.frames().slice(1)) {
    report.frameContents.push({
      url: frame.url(),
      text: await frame
        .locator("body")
        .innerText({ timeout: 5000 })
        .catch(() => "No accessible body"),
    });
  }
  assert.deepEqual(localFailures, []);
  assert.deepEqual(errors, []);
  await writeFile(
    `qa-artifacts/${label}-report.json`,
    JSON.stringify(report, null, 2),
  );
  console.log(JSON.stringify(report, null, 2));
  assert.deepEqual(report.mobileAxe, [], "Mobile accessibility violations");
  assert.deepEqual(report.desktopAxe, [], "Desktop accessibility violations");
  assert.deepEqual(report.dialogAxe, [], "Dialog accessibility violations");
} finally {
  await writeFile(
    `qa-artifacts/${label}-report.json`,
    JSON.stringify(report, null, 2),
  );
  await browser.close();
}
