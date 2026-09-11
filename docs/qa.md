# QA · SDP509

12/09/2026. Chromium real via Playwright, inspecció de captures i axe-core. No s'ha afirmat certificació WCAG completa ni validació en dispositius físics.

## Local i build

- Dev: http://127.0.0.1:5173/sdp509-web/
- Build preview: http://127.0.0.1:4173/sdp509-web/
- `lint`, `typecheck`, `build`: correctes.
- Amples comprovats: 320, 375, 430, 768, 1024, 1440, 1920 px. Cap overflow horitzontal, cap imatge trencada.
- Un H1, lang=ca, vuit fitxes, menú mòbil operatiu, anchors, sticky, diàleg natiu amb Escape i retorn del focus, skip link amb Tab, reduced motion.
- Axe WCAG A/AA/2.1 AA: zero incidències al build, desktop/mòbil/diàleg. Corregits dos contrastos de labels abans d'aprovar el build.
- Zero errors JavaScript i zero respostes locals >=400 al QA.
- Captures completes i de viewport a `qa-artifacts/` (locals, fora de Git). Inspecció visual explícita desktop, mòbil i tablet.
- Fonts locals WOFF2; hero WebP 165.008 bytes. CSS aproximadament 6,3 KB gzip; JS aproximadament 76,3 KB gzip.

## Reproductors: límit real observat

No es carrega cap iframe abans d'una acció. Després del clic, tres iframes amb títol i proporcions correctes. Spotify mostra el grup SDP509 i la seva llista de temes.

YouTube retorna «vídeo no disponible» dins dels iframes en el navegador de QA local. Navegar directament al reproductor sense pàgina referent retorna Error 153, cosa que no prova un error del component. L'oEmbed oficial retorna HTTP 200 i identifica `ocWyZVdRv7c` com «32 d'agost - SDP509 [videoclip oficial]», autor SDP 509; el mateix ID és al codi de l'article d'ELS40 de 03/09/2026. No s'ha canviat un ID correcte per un vídeo inventat.

La web envia referrerPolicy=strict-origin-when-cross-origin i demana interfície catalana a YouTube amb hl=ca. Els enllaços alternatius sempre estan presents. No es garanteix reproducció audiovisual si el proveïdor la restringeix. Els textos interiors de Spotify depenen de la localització que el proveïdor ofereix.

## Producció

- URL oberta i verificada: https://luisotorres3.github.io/sdp509-web/
- Primer commit de l'aplicació: `0a66dfd`. [Workflow 34653657419](https://github.com/Luisotorres3/sdp509-web/actions/runs/34653657419): build i deploy correctes.
- QA complet repetit a la URL real: els set amples sense overflow ni imatges trencades; zero errors JavaScript, zero assets HTTP >=400, zero incidències axe en desktop, mòbil i diàleg.
- Spotify mostra SDP509; YouTube carrega correctament «32 d'agost - SDP509 [videoclip oficial]» i la playlist amb «Tornar a Començar (Mode Avió)». El bloqueig local no s'ha reproduït a Pages. No s'ha fet una escolta íntegra dels temes ni una auditoria d'accessibilitat del codi intern dels proveïdors.
- Comprovats canonical, MusicGroup JSON-LD, títol, onze anchors interns, favicon i imatge OG amb HTTP 200, menú i capçalera sticky. Les majúscules del nom d'usuari al hostname del canonical són equivalents al domini en minúscules segons la normalització d'URL.
- Captures de cada secció, hero desktop/tablet/mòbil i JSON de comprovació a `qa-artifacts/production-*`. Revisió visual explícita del llançament, hero i figures en mòbil. Script addicional reproduïble: `node scripts/check-production.mjs`.
