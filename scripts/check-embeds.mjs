import { chromium } from "@playwright/test";
const browser = await chromium.launch();
const context = await browser.newContext({ locale: "ca-ES" });
const page = await context.newPage();
for (const url of [
  "https://www.youtube.com/embed/ocWyZVdRv7c?hl=ca",
  "https://www.youtube-nocookie.com/embed/ocWyZVdRv7c?hl=ca",
  "https://www.youtube.com/embed?listType=playlist&list=PLeTGs3kha2e08u7qfde8LXmhuaemIbtTI&hl=ca",
]) {
  await page
    .goto(url, { waitUntil: "domcontentloaded", timeout: 25000 })
    .catch(() => {});
  await page.waitForTimeout(2500);
  console.log(
    JSON.stringify({
      url,
      text: await page
        .locator("body")
        .innerText()
        .catch(() => ""),
    }),
  );
}
for (const url of [
  "https://www.youtube.com/oembed?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DocWyZVdRv7c&format=json",
  "https://los40.com/2026/09/03/sdp509-acomiada-lestiu-amb-la-canco-32-dagost/",
]) {
  try {
    const r = await context.request.get(url, { timeout: 20000 });
    const text = await r.text();
    console.log(
      JSON.stringify({
        url,
        status: r.status(),
        data: url.includes("oembed")
          ? text
          : text.match(
              /(?:youtube(?:-nocookie)?\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)[^"\s<>\\]+/g,
            ),
      }),
    );
  } catch (e) {
    console.log(e.message);
  }
}
await browser.close();
