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

S'actualitzarà després del primer desplegament i de provar la URL real. L'estat de workflow i el QA de producció es registren per separat de la compilació local.
