import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "sdp509-web";
const base =
  process.env.VITE_BASE || (repo.endsWith(".github.io") ? "/" : `/${repo}/`);
const siteUrl =
  process.env.VITE_SITE_URL ||
  (process.env.GITHUB_REPOSITORY
    ? `https://${process.env.GITHUB_REPOSITORY.split("/")[0]}.github.io${base}`
    : "");
export default defineConfig({
  base,
  plugins: [
    react(),
    {
      name: "site-metadata",
      transformIndexHtml(html) {
        return html.replace(
          "<!-- production-url -->",
          siteUrl
            ? `<link rel="canonical" href="${siteUrl}"><meta property="og:url" content="${siteUrl}"><meta property="og:image" content="${siteUrl}images/brand/og.png"><meta name="twitter:card" content="summary_large_image">`
            : "",
        );
      },
    },
  ],
});
