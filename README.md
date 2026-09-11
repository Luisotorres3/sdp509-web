# SDP509 Web

Web musical en català de SDP509 — Suc de Pinya. React, TypeScript estricte i Vite; una sola home amb anchors. Disseny «La pinya digital / Del camp a l'estudi», música amb reproductors oficials i figures col·leccionables.

## Requisits i execució

Node 20.19+ o 22.12+ (recomanat Node 22 LTS), npm i Git. Versions exactes al lockfile. Vite 8, React 19, TypeScript 5.9 compatible amb el parser ESLint instal·lat. No backend, CMS ni base de dades.

```sh
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
npm run preview
```

Desenvolupament: `http://localhost:5173/sdp509-web/`. Preview: `http://localhost:4173/sdp509-web/`. `npm ci` per instal·lacions reproduïbles.

## Contingut i assets

| Canvi | Fitxer |
|---|---|
| Integrants, bios, imatge individual | `src/data/members.ts` |
| Llançaments i destacat | `src/data/releases.ts` |
| Concerts | `src/data/concerts.ts` |
| Productes i botiga | `src/data/merch.ts` |
| Xarxes | `src/data/socials.ts` |
| Embeds, contactes i configuració | `src/data/site.ts` |
| Història | `src/data/story.ts` |
| Hero col·lectiu | `public/images/members/pinya-group.webp` |
| Colors i tipografia | `src/styles/tokens.css` |

Components per secció a `src/components/`. Assets a `public/images/{members,releases,merch,brand}`. Afegir només imatges autoritzades i registrar la procedència a `docs/assets.md`. Les figures individuals SVG són provisionals: afegir un `image` relatiu a `public/` a cada membre per substituir-les sense canviar el layout. No associar una cara a un nom per suposició. Consulteu `docs/content-guide.md`, `docs/avatar-prompts.md` i `docs/member-visual-references.md`.

## Privacitat i reproductors

Sense analítica ni trackers propis. Les fonts i el hero es serveixen localment. Spotify i YouTube només reben una connexió quan l'usuari prem «Carrega…», amb avís visible al botó. YouTube utilitza `youtube-nocookie.com`. Això no equival a una certificació legal: aquests proveïdors poden tractar dades o utilitzar emmagatzematge després de carregar/reproduir contingut. Revisar la política aplicable al lloc final i completar `privacyUrl` si correspon. No s'ha afegit cap banner fictici.

Embeds sense autoplay, amb títol accessible, aspect ratio reservat, indicador de càrrega i enllaç extern persistent. Un iframe cross-origin pot mostrar un error del proveïdor sense que la pàgina el pugui detectar; no es promet detecció universal amb `onLoad`. L'enllaç alternatiu és usable en aquest cas.

## QA

```sh
npx playwright install chromium
npm run qa
```

Requereix dev en marxa. `scripts/qa.mjs` prova els anchos 320, 375, 430, 768, 1024, 1440 i 1920; imatges, overflow, menú, diàleg, Escape, retorn del focus, skip link, reduced motion, axe AA i activació dels tres embeds. Desa captures i JSON a `qa-artifacts/` (ignorat a Git).

Per provar preview o producció definir `QA_URL` i `QA_LABEL` al procés. Veure `docs/qa.md` per resultats i límits de les proves; revisar visualment captures a mida original. No confondre un build correcte amb QA visual.

## GitHub Pages

El workflow `.github/workflows/deploy.yml` instal·la amb npm ci, passa lint/typecheck/build i publica `dist` amb les accions oficials de Pages. Font: [guia oficial de Vite](https://vite.dev/guide/static-deploy.html#github-pages), consultada 12/09/2026. A GitHub: Settings → Pages → Build and deployment → Source → GitHub Actions.

`vite.config.ts` calcula `base` a partir de `GITHUB_REPOSITORY`; localment és `/sdp509-web/`. Si canvia el nom del repositori, Actions adapta automàticament el subpath. Un repositori `usuari.github.io` usa `/`. Per a domini personalitzat definir `VITE_BASE=/` i `VITE_SITE_URL=https://domini/`. El canonical i OG URL només s'insereixen quan hi ha una URL de producció disponible; no es publica un usuari fictici.

Si no hi ha autenticació disponible, executar `gh auth login` al terminal propi. No afegir tokens a codi, README ni `.env` versionats. Després: crear el repo públic, push main, configurar Pages amb source workflow i comprovar l'Action i la URL real.
